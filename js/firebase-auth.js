import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

// Firebase web configuration for the Nexvora Group project.
const firebaseConfig = {
  apiKey: "AIzaSyBmkUGaQuaTCW2ATgGWKTY_zso8trvrMV4",
  authDomain: "nexvora-groups.firebaseapp.com",
  projectId: "nexvora-groups",
  storageBucket: "nexvora-groups.firebasestorage.app",
  messagingSenderId: "140737880077",
  appId: "1:140737880077:web:cfa98fdde97205c143b544",
  measurementId: "G-JSKRKFNQ34"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

const modal = document.getElementById("loginModal");
const notice = document.getElementById("authNotice");
const loginButtons = [...document.querySelectorAll("[data-provider]")];
const openLogin = document.getElementById("openLogin");
const profileLogin = document.getElementById("profileLogin");
const logoutButton = document.getElementById("logoutButton");

function setNotice(message, isError = false) {
  notice.textContent = message;
  notice.style.color = isError ? "#b42318" : "#716b60";
}

function providerLabel(user) {
  const providerId = user.providerData?.[0]?.providerId || "";
  if (providerId === "google.com") return "Google";
  if (providerId === "github.com") return "GitHub";
  return "Firebase";
}

function updateProfile(user) {
  const name = user?.displayName || user?.email?.split("@")[0] || "Guest Member";
  const email = user?.email || "Belum terhubung";
  const photo = user?.photoURL;
  const avatar = document.getElementById("profileAvatar");

  document.getElementById("profileName").textContent = name;
  document.getElementById("profileDetailName").textContent = name;
  document.getElementById("profileEmail").textContent = email;
  document.getElementById("profileStatus").textContent = user ? "Login berhasil · akun aktif" : "Belum login · akun preview";
  document.getElementById("profileProvider").textContent = user ? providerLabel(user) : "Belum login";
  avatar.replaceChildren();
  if (photo) {
    const image = document.createElement("img");
    image.src = photo;
    image.alt = `Foto profil ${name}`;
    avatar.append(image);
  } else {
    avatar.textContent = name.charAt(0).toUpperCase();
  }

  // Role remains Member by default. Owner privileges must be assigned securely on the backend.
  document.getElementById("profileRole").textContent = "MEMBER";
  document.getElementById("profileDetailRole").textContent = "Member";
  openLogin.textContent = user ? "ACCOUNT ↗" : "LOGIN ↗";
  profileLogin.hidden = Boolean(user);
  logoutButton.hidden = !user;
}

async function login(providerName) {
  const provider = providerName === "Google" ? googleProvider : githubProvider;
  loginButtons.forEach(button => button.disabled = true);
  setNotice(`Menghubungkan akun ${providerName}...`);
  try {
    const result = await signInWithPopup(auth, provider);
    setNotice(`Berhasil login sebagai ${result.user.displayName || result.user.email}.`);
    window.setTimeout(() => { modal.hidden = true; }, 700);
  } catch (error) {
    console.error("Nexvora login error:", error);
    const messages = {
      "auth/unauthorized-domain": "Domain website belum ditambahkan ke Authorized domains Firebase.",
      "auth/popup-closed-by-user": "Jendela login ditutup sebelum selesai.",
      "auth/popup-blocked": "Popup diblokir browser. Izinkan popup lalu coba lagi.",
      "auth/operation-not-allowed": `${providerName} belum diaktifkan di Firebase Authentication.`,
      "auth/account-exists-with-different-credential": "Email ini sudah terdaftar dengan metode login lain."
    };
    setNotice(messages[error.code] || `Login gagal (${error.code || "unknown"}). Periksa konfigurasi Firebase.`, true);
  } finally {
    loginButtons.forEach(button => button.disabled = false);
  }
}

loginButtons.forEach(button => button.addEventListener("click", () => login(button.dataset.provider)));
logoutButton.addEventListener("click", async () => {
  try {
    await signOut(auth);
    setNotice("Kamu sudah logout.");
  } catch (error) {
    console.error(error);
    setNotice("Logout gagal. Coba lagi.", true);
  }
});

onAuthStateChanged(auth, updateProfile);
