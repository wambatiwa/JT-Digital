const content = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    ht: "Turn Your Clicks Into <span class='text-primary'>Customers</span>",
    hs: "We specialize in increasing your online visibility through premium web design and strategic SEO that actually moves the needle.",
    hb: "Free Strategy Audit",
    st: "Our Expertise",
    s1h: "SEO Authority",
    s1p: "Stop hiding on page 2. We optimize your visibility so customers find you first.",
    s2h: "Web Excellence",
    s2p: "Fast, responsive, and modern websites designed to convert visitors into revenue.",
    s3h: "Growth Strategy",
    s3p: "Custom roadmaps tailored to your specific goals and target audience.",
    at: "A Results-Driven Approach",
    ad1: "A website is a business tool, not an art project. We bridge the gap between high-end aesthetics and technical performance.",
    ac1: "Data-backed decision making",
    ac2: "Mobile-first conversion design",
    as: "Monitoring & Optimization",
    ct: "Ready to Level Up?",
    cd: "Let's discuss how we can transform your digital presence.",
    fn: "Name",
    fe: "Email",
    fm: "Your Project",
    fb: "Send Message",
    fc: "© 2026 DigitalCore Growth Agency. All rights reserved.",
    lName: "Full Name",
    lEmail: "Email Address",
    lMsg: "How can I help you?",
    pName: "e.g. Alex Johnson",
    pEmail: "alex@company.com",
    pMsg: "Tell me about your project goals...",
    fBtn: "Send Message",
  },
  fr: {
    navHome: "Accueil",
    navServices: "Services",
    navAbout: "À Propos",
    navContact: "Contact",
    ht: "Transformez Vos Clics En <span class='text-primary'>Clients</span>",
    hs: "Nous augmentons votre visibilité en ligne via un design web premium et un SEO stratégique performant.",
    hb: "Audit Stratégique Gratuit",
    st: "Notre Expertise",
    s1h: "Autorité SEO",
    s1p: "Ne restez plus en page 2. Nous optimisons votre visibilité pour être trouvé en premier.",
    s2h: "Excellence Web",
    s2p: "Sites modernes et rapides conçus pour transformer vos visiteurs en revenus.",
    s3h: "Stratégie Croissance",
    s3p: "Des feuilles de route adaptées à vos objectifs et à votre public cible.",
    at: "Une Approche Axée Résultats",
    ad1: "Un site web est un outil, pas un projet artistique. Nous lions l'esthétique à la performance technique.",
    ac1: "Décisions basées sur les données",
    ac2: "Design optimisé pour mobile",
    as: "Suivi & Optimisation",
    ct: "Prêt à Passer au Niveau Supérieur ?",
    cd: "Discutons de la transformation de votre présence numérique.",
    fn: "Nom",
    fe: "Email",
    fm: "Votre Projet",
    fb: "Envoyer le Message",
    fc: "© 2026 Agence DigitalCore. Tous droits réservés.",
    lName: "Nom Complet",
    lEmail: "Adresse Email",
    lMsg: "Comment puis-je vous aider ?",
    pName: "ex: Jean Dupont",
    pEmail: "jean@entreprise.com",
    pMsg: "Parlez-moi de vos objectifs de projet...",
    fBtn: "Envoyer le Message",
  },
};

function toggleLang(lang) {
  const t = content[lang];
  document.getElementById("nav-home").innerText = t.navHome;
  document.getElementById("nav-services").innerText = t.navServices;
  document.getElementById("nav-about").innerText = t.navAbout;
  document.getElementById("nav-contact").innerText = t.navContact;
  document.getElementById("h-title").innerHTML = t.ht;
  document.getElementById("h-sub").innerText = t.hs;
  document.getElementById("h-btn").innerText = t.hb;
  document.getElementById("s-title").innerText = t.st;
  document.getElementById("s1-h").innerText = t.s1h;
  document.getElementById("s1-p").innerText = t.s1p;
  document.getElementById("s2-h").innerText = t.s2h;
  document.getElementById("s2-p").innerText = t.s2p;
  document.getElementById("s3-h").innerText = t.s3h;
  document.getElementById("s3-p").innerText = t.s3p;
  document.getElementById("a-t").innerText = t.at;
  document.getElementById("a-d1").innerText = t.ad1;
  document.getElementById("a-check1").innerText = t.ac1;
  document.getElementById("a-check2").innerText = t.ac2;
  document.getElementById("a-stat-text").innerText = t.as;
  document.getElementById("c-t").innerText = t.ct;
  document.getElementById("c-d").innerText = t.cd;
  document.getElementById("f-name").placeholder = t.fn;
  document.getElementById("f-email").placeholder = t.fe;
  document.getElementById("f-msg").placeholder = t.fm;
  document.getElementById("f-btn").innerText = t.fb;
  document.getElementById("f-copy").innerText = t.fc;
  document.getElementById("label-name").innerText = t.lName;
  document.getElementById("label-email").innerText = t.lEmail;
  document.getElementById("label-msg").innerText = t.lMsg;
  document.getElementById("f-name").placeholder = t.pName;
  document.getElementById("f-email").placeholder = t.pEmail;
  document.getElementById("f-msg").placeholder = t.pMsg;

  document.getElementById("en-btn").classList.toggle("active", lang === "en");
  document.getElementById("fr-btn").classList.toggle("active", lang === "fr");
}
