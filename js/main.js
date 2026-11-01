const translations = {
  en: {
    navHome: "Home", navAbout: "About", navServices: "Services", navProcess: "Process", navChannels: "Join Us",
    heroEyebrow: "INDEPENDENT DIGITAL COMPANY",
    heroLine1: "BUILDING", heroLine2: "DIGITAL", heroLine3: "POSSIBILITIES.",
    heroDescription: "We create thoughtful digital experiences, websites, and technology solutions for a connected world.",
    heroCta: "EXPLORE SERVICES", heroMore: "GET TO KNOW US",
    heroFootnote: "IDEAS INTO DIGITAL EXPERIENCES", heroScroll: "SCROLL TO EXPLORE",
    aboutEyebrow: "A LITTLE INTRODUCTION", aboutTitleA: "GOOD IDEAS", aboutTitleB: "DESERVE", aboutTitleC: "TO BE BUILT.",
    aboutDescription: "Nexvora Groups is an independent digital company concept focused on building useful digital products and experiences. We bring design and technology together, one project at a time.",
    aboutNote: "Small steps. Clear purpose. Thoughtful execution.",
    servicesEyebrow: "WHAT WE CAN BUILD", servicesTitle: "DIGITAL SERVICES.",
    servicesDescription: "Practical digital work, designed around real needs.",
    serviceWeb: "WEB DEVELOPMENT", serviceWebDesc: "Responsive websites with clear structure and thoughtful details.",
    serviceApp: "WEB APPLICATIONS", serviceAppDesc: "Useful browser-based tools and interactive digital products.",
    serviceDesign: "UI / UX DESIGN", serviceDesignDesc: "Simple, accessible interfaces that are easy to understand.",
    serviceCloud: "CLOUD SOLUTIONS", serviceCloudDesc: "Cloud-connected features and deployment foundations.",
    serviceAI: "AI INTEGRATION", serviceAIDesc: "Carefully selected AI features that solve specific problems.",
    serviceProduct: "DIGITAL PRODUCTS", serviceProductDesc: "Ideas shaped into focused tools and online experiences.",
    servicesNote: "Service categories describe Nexvora's direction. Availability depends on project readiness.",
    statement: "Technology should make good ideas easier to bring to life.",
    processEyebrow: "HOW WE APPROACH A PROJECT", processTitle: "FROM IDEA TO BUILD.",
    processDescription: "A straightforward process keeps every step clear.",
    processOne: "DISCOVER", processOneDesc: "Understand the goal, audience, and problem.",
    processTwo: "PLAN & DESIGN", processTwoDesc: "Set the structure and shape the experience.",
    processThree: "DEVELOP", processThreeDesc: "Build the product with maintainable foundations.",
    processFour: "REVIEW & IMPROVE", processFourDesc: "Test, refine, and prepare for release.",
    channelsEyebrow: "LEARN, CONNECT & GROW", channelsTitle: "JOIN THE NEXVORA COMMUNITY.",
    channelsDescription: "Choose the channel that matches what you need. Learn with the community or ask about our products.",
    learnTitle: "WANT TO LEARN?", learnDescription: "Join our learning group and grow together with the Nexvora community.",
    learnCta: "JOIN LEARNING GROUP", buyTitle: "WANT TO BUY OR ASK?",
    buyDescription: "Contact our group for product information, purchases, or questions.", buyCta: "CHAT WITH OUR GROUP",
    backTop: "BACK TO TOP ↑", footerLine: "Building digital possibilities.", footerTag: "DIGITAL COMPANY · INDONESIA"
  },
  id: {
    navHome: "Beranda", navAbout: "Tentang", navServices: "Layanan", navProcess: "Proses", navChannels: "Gabung",
    heroEyebrow: "PERUSAHAAN DIGITAL INDEPENDEN",
    heroLine1: "MEMBANGUN", heroLine2: "SOLUSI", heroLine3: "DIGITAL.",
    heroDescription: "Kami menciptakan pengalaman digital, website, dan solusi teknologi yang dirancang untuk kebutuhan masa kini.",
    heroCta: "LIHAT LAYANAN", heroMore: "KENALI KAMI",
    heroFootnote: "IDE MENJADI PENGALAMAN DIGITAL", heroScroll: "GULIR UNTUK MENJELAJAH",
    aboutEyebrow: "SEDIKIT TENTANG KAMI", aboutTitleA: "IDE BAGUS", aboutTitleB: "LAYAK", aboutTitleC: "DIWUJUDKAN.",
    aboutDescription: "Nexvora Groups adalah konsep perusahaan digital independen yang berfokus pada pengembangan produk dan pengalaman digital yang bermanfaat. Kami memadukan desain dan teknologi, satu proyek dalam satu waktu.",
    aboutNote: "Langkah kecil. Tujuan jelas. Eksekusi matang.",
    servicesEyebrow: "APA YANG BISA KAMI BANGUN", servicesTitle: "LAYANAN DIGITAL.",
    servicesDescription: "Pekerjaan digital yang praktis dan berangkat dari kebutuhan nyata.",
    serviceWeb: "PENGEMBANGAN WEB", serviceWebDesc: "Website responsif dengan struktur jelas dan detail yang matang.",
    serviceApp: "APLIKASI WEB", serviceAppDesc: "Tools berbasis browser dan produk digital interaktif.",
    serviceDesign: "DESAIN UI / UX", serviceDesignDesc: "Antarmuka sederhana, mudah dipahami, dan mudah diakses.",
    serviceCloud: "SOLUSI CLOUD", serviceCloudDesc: "Fitur terhubung cloud dan fondasi deployment.",
    serviceAI: "INTEGRASI AI", serviceAIDesc: "Fitur AI yang dipilih untuk menyelesaikan masalah tertentu.",
    serviceProduct: "PRODUK DIGITAL", serviceProductDesc: "Ide yang dikembangkan menjadi tools dan pengalaman online.",
    servicesNote: "Kategori layanan menunjukkan arah Nexvora. Ketersediaan bergantung pada kesiapan proyek.",
    statement: "Teknologi seharusnya membuat ide bagus lebih mudah diwujudkan.",
    processEyebrow: "CARA KAMI MENANGANI PROYEK", processTitle: "DARI IDE MENJADI PRODUK.",
    processDescription: "Proses sederhana agar setiap langkah tetap jelas.",
    processOne: "MEMAHAMI", processOneDesc: "Memahami tujuan, pengguna, dan masalah.",
    processTwo: "MERENCANAKAN & MENDESAIN", processTwoDesc: "Menentukan struktur dan merancang pengalaman.",
    processThree: "MENGEMBANGKAN", processThreeDesc: "Membangun produk dengan fondasi yang mudah dirawat.",
    processFour: "MENINJAU & MEMPERBAIKI", processFourDesc: "Menguji, menyempurnakan, dan menyiapkan rilis.",
    channelsEyebrow: "BELAJAR, TERHUBUNG & BERKEMBANG", channelsTitle: "GABUNG KOMUNITAS NEXVORA.",
    channelsDescription: "Pilih grup sesuai kebutuhanmu. Belajar bersama komunitas atau tanyakan tentang produk kami.",
    learnTitle: "MAU BELAJAR?", learnDescription: "Gabung grup belajar dan berkembang bersama komunitas Nexvora.",
    learnCta: "GABUNG GRUP BELAJAR", buyTitle: "MAU BELI ATAU BERTANYA?",
    buyDescription: "Hubungi grup kami untuk informasi produk, pembelian, atau pertanyaan.", buyCta: "CHAT DENGAN GRUP KAMI",
    backTop: "KEMBALI KE ATAS ↑", footerLine: "Membangun kemungkinan digital.", footerTag: "PERUSAHAAN DIGITAL · INDONESIA"
  }
};

let currentLanguage = "en";

const languageButton = document.querySelector("#languageButton");
const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translated = translations[language][key];
    if (translated) element.textContent = translated;
  });

  languageButton.textContent = language.toUpperCase();
  languageButton.setAttribute(
    "aria-label",
    language === "en" ? "Switch to Indonesian" : "Ganti ke bahasa Inggris"
  );

}

languageButton.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "id" : "en");
});

function closeMenu() {
  navLinks.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  if (!navLinks.contains(event.target) && !menuButton.contains(event.target)) {
    closeMenu();
  }
});

// Reveal elements only when they enter the viewport.
const revealElements = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reduceMotion) {
  document.documentElement.classList.add("js-motion");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -35px 0px"
  });

  revealElements.forEach((element) => {
    const delay = Number(element.dataset.revealDelay || 0);
    element.style.setProperty("--reveal-delay", `${Math.min(delay, 400)}ms`);
    revealObserver.observe(element);
  });
}

// Reading progress indicator.
const scrollProgress = document.querySelector("#scrollProgress");
let ticking = false;

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  scrollProgress.style.width = `${Math.min(progress, 100)}%`;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollProgress);
    ticking = true;
  }
}, { passive: true });

updateScrollProgress();

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage("en");
