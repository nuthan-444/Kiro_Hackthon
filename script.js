
  // ---------- data.js (global store + translations) ----------
  window.AppData = {
    selectedLanguage: 'english', // default
    formSubmissions: [],
    currentUserData: {},
    navigationHistory: [] // simple stack of page identifiers
  };

  window.translations = {
    english: {
      home: "Home",
      govtSchemes: "Government Schemes",
      scholarships: "Scholarships",
      pensions: "Pensions",
      farmerBenefits: "Farmer Benefits",
      examDetails: "Exam Details",
      applyServices: "Apply for Services",
      whatIsScheme: "What is this scheme?",
      eligibility: "Eligibility",
      requiredDocs: "Required Documents",
      howToApply: "How to Apply",
      applyNow: "Apply Now",
      schemeDesc: "Government pension for senior citizens and widows.",
      eligibilityDesc: "Age 60+ or widow below 60. BPL card preferred.",
      docsDesc: "Aadhaar, BPL certificate, bank passbook, recent photo.",
      howToApplyDesc: "Visit nearest CSC center or apply online at sspension.gov.in",
      applyNowDesc: "Click below to fill application form.",
      fullName: "Full Name",
      aadhaar: "Aadhaar Number",
      mobile: "Mobile Number",
      address: "Address",
      age: "Age",
      income: "Income",
      submit: "Submit Application",
      successMsg: "✅ Application submitted! Check console.",
    },
    kannada: {
      home: "ಮುಖಪುಟ",
      govtSchemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
      scholarships: "ವಿದ್ಯಾರ್ಥಿವೇತನ",
      pensions: "ಪಿಂಚಣಿ",
      farmerBenefits: "ರೈತರ ಪ್ರಯೋಜನಗಳು",
      examDetails: "ಪರೀಕ್ಷೆಯ ವಿವರಗಳು",
      applyServices: "ಸೇವೆಗಳಿಗೆ ಅರ್ಜಿ",
      whatIsScheme: "ಈ ಯೋಜನೆ ಏನು?",
      eligibility: "ಅರ್ಹತೆ",
      requiredDocs: "ಅಗತ್ಯ ದಾಖಲೆಗಳು",
      howToApply: "ಅರ್ಜಿ ಹೇಗೆ",
      applyNow: "ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
      schemeDesc: "ಹಿರಿಯ ನಾಗರಿಕರು ಮತ್ತು ವಿಧವೆಯರಿಗೆ ಸರ್ಕಾರಿ ಪಿಂಚಣಿ.",
      eligibilityDesc: "ವಯಸ್ಸು 60+ ಅಥವಾ 60 ಕ್ಕಿಂತ ಕಡಿಮೆ ವಿಧವೆ. ಬಿಪಿಎಲ್ ಕಾರ್ಡ್ ಆದ್ಯತೆ.",
      docsDesc: "ಆಧಾರ್, ಬಿಪಿಎಲ್ ಪ್ರಮಾಣಪತ್ರ, ಬ್ಯಾಂಕ್ ಪಾಸ್ಬುಕ್, ಭಾವಚಿತ್ರ.",
      howToApplyDesc: "ಹತ್ತಿರದ ಸಿಎಸ್ಸಿ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ sspension.gov.in ನಲ್ಲಿ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.",
      applyNowDesc: "ಅರ್ಜಿ ನಮೂನೆ ಭರ್ತಿ ಮಾಡಲು ಕೆಳಗೆ ಕ್ಲಿಕ್ ಮಾಡಿ.",
      fullName: "ಪೂರ್ಣ ಹೆಸರು",
      aadhaar: "ಆಧಾರ್ ಸಂಖ್ಯೆ",
      mobile: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
      address: "ವಿಳಾಸ",
      age: "ವಯಸ್ಸು",
      income: "ಆದಾಯ",
      submit: "ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
      successMsg: "✅ ಅರ್ಜಿ ಸಲ್ಲಿಸಲಾಗಿದೆ! ಕನ್ಸೋಲ್ ಪರಿಶೀಲಿಸಿ.",
    },
    hindi: {
      home: "होम",
      govtSchemes: "सरकारी योजनाएं",
      scholarships: "छात्रवृत्ति",
      pensions: "पेंशन",
      farmerBenefits: "किसान लाभ",
      examDetails: "परीक्षा विवरण",
      applyServices: "सेवाओं के लिए आवेदन",
      whatIsScheme: "यह योजना क्या है?",
      eligibility: "पात्रता",
      requiredDocs: "आवश्यक दस्तावेज़",
      howToApply: "आवेदन कैसे करें",
      applyNow: "अभी आवेदन करें",
      schemeDesc: "वरिष्ठ नागरिकों और विधवाओं के लिए सरकारी पेंशन।",
      eligibilityDesc: "आयु 60+ या 60 से कम विधवा। बीपीएल कार्ड प्राथमिकता।",
      docsDesc: "आधार, बीपीएल प्रमाण पत्र, बैंक पासबुक, हालिया फोटो।",
      howToApplyDesc: "नजदीकी सीएससी केंद्र जाएं या sspension.gov.in पर ऑनलाइन आवेदन करें।",
      applyNowDesc: "आवेदन पत्र भरने के लिए नीचे क्लिक करें।",
      fullName: "पूरा नाम",
      aadhaar: "आधार नंबर",
      mobile: "मोबाइल नंबर",
      address: "पता",
      age: "आयु",
      income: "आय",
      submit: "आवेदन जमा करें",
      successMsg: "✅ आवेदन सबमिट हो गया! कंसोल देखें।",
    },
    tamil: {
      home: "முகப்பு",
      govtSchemes: "அரசு திட்டங்கள்",
      scholarships: "கல்வி உதவித்தொகை",
      pensions: "ஓய்வூதியம்",
      farmerBenefits: "விவசாயி நலன்",
      examDetails: "தேர்வு விவரங்கள்",
      applyServices: "சேவைகளுக்கு விண்ணப்பிக்க",
      whatIsScheme: "இந்த திட்டம் என்ன?",
      eligibility: "தகுதி",
      requiredDocs: "தேவையான ஆவணங்கள்",
      howToApply: "விண்ணப்பிப்பது எப்படி",
      applyNow: "இப்போது விண்ணப்பிக்க",
      schemeDesc: "மூத்த குடிமக்கள் மற்றும் விதவைகளுக்கான அரசு ஓய்வூதியம்.",
      eligibilityDesc: "வயது 60+ அல்லது 60 க்குட்பட்ட விதவை. பிபிஎல் கார்டு முன்னுரிமை.",
      docsDesc: "ஆதார், பிபிஎல் சான்றிதழ், வங்கி பாஸ்புக், புகைப்படம்.",
      howToApplyDesc: "அருகில் உள்ள சிஎஸ்சி மையத்தைப் பார்வையிடவும் அல்லது sspension.gov.in இல் ஆன்லைனில் விண்ணப்பிக்கவும்.",
      applyNowDesc: "விண்ணப்பப் படிவத்தை நிரப்ப கீழே கிளிக் செய்க.",
      fullName: "முழு பெயர்",
      aadhaar: "ஆதார் எண்",
      mobile: "கைப்பேசி எண்",
      address: "முகவரி",
      age: "வயது",
      income: "வருமானம்",
      submit: "விண்ணப்பத்தை சமர்ப்பி",
      successMsg: "✅ விண்ணப்பம் சமர்ப்பிக்கப்பட்டது! கன்சோலைப் பார்க்கவும்.",
    }
  };

  // helper translate function
  window.__ = function(key) {
    const lang = AppData.selectedLanguage || 'english';
    return (translations[lang] && translations[lang][key]) ? translations[lang][key] : key;
  };

  // ----- main.js (UI rendering, events, speech) -----
  let currentPage = 'language'; // language, home, category_pensions, form

  function renderPage() {
    const contentDiv = document.getElementById('pageContent');
    const lang = AppData.selectedLanguage;
    document.getElementById('currentLangLabel').innerHTML = `🌍 ${lang.charAt(0).toUpperCase() + lang.slice(1)}`;

    if (currentPage === 'language') {
      contentDiv.innerHTML = renderLanguagePage();
      attachLangEvents();
    } else if (currentPage === 'home') {
      contentDiv.innerHTML = renderHomePage();
      attachHomeEvents();
    } else if (currentPage === 'category_pensions') {
      contentDiv.innerHTML = renderPensionCategoryPage();
      attachCategoryEvents();
    } else if (currentPage === 'form') {
      contentDiv.innerHTML = renderFormPage();
      attachFormEvents();
    } else {
      contentDiv.innerHTML = `<div class="content-box">🤔 Page not found</div>`;
    }
  }

  // language page
  function renderLanguagePage() {
    return `
      <div class="lang-page">
        <div class="lang-btn" data-lang="english">🇬🇧 English <span class="speaker-mini" data-lang="english">🔊</span></div>
        <div class="lang-btn" data-lang="kannada">🇮🇳 ಕನ್ನಡ <span class="speaker-mini" data-lang="kannada">🔊</span></div>
        <div class="lang-btn" data-lang="hindi">🇮🇳 हिन्दी <span class="speaker-mini" data-lang="hindi">🔊</span></div>
        <div class="lang-btn" data-lang="tamil">🇮🇳 தமிழ் <span class="speaker-mini" data-lang="tamil">🔊</span></div>
      </div>
    `;
  }

  function attachLangEvents() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target.classList.contains('speaker-mini')) return;
        const lang = btn.dataset.lang;
        AppData.selectedLanguage = lang;
        AppData.navigationHistory.push('language');
        currentPage = 'home';
        renderPage();
      });
    });
    document.querySelectorAll('.speaker-mini').forEach(sp => {
      sp.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = sp.dataset.lang;
        let text = `Selected language ${lang}`;
        if (lang === 'kannada') text = 'ಆಯ್ಕೆ ಮಾಡಿದ ಭಾಷೆ ಕನ್ನಡ';
        else if (lang === 'hindi') text = 'चुनी गई भाषा हिंदी';
        else if (lang === 'tamil') text = 'தேர்ந்தெடுக்கப்பட்ட மொழி தமிழ்';
        speakText(text, lang);
      });
    });
  }

  // home page
  function renderHomePage() {
    const cats = [
      { key: 'govtSchemes', icon: '🏛️' },
      { key: 'scholarships', icon: '📚' },
      { key: 'pensions', icon: '👵' },
      { key: 'farmerBenefits', icon: '🌾' },
      { key: 'examDetails', icon: '📝' },
      { key: 'applyServices', icon: '📋' }
    ];
    return `
      <div class="grid-large">
        ${cats.map(c => `
          <div class="card-btn" data-category="${c.key}">
            <span class="card-icon">${c.icon}</span>
            <span class="card-text">${__(c.key)}</span>
            <span class="speaker-mini" data-label="${c.key}">🔊</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  function attachHomeEvents() {
    document.querySelectorAll('.card-btn').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.classList.contains('speaker-mini')) return;
        const cat = card.dataset.category;
        AppData.navigationHistory.push('home');
        if (cat === 'pensions') currentPage = 'category_pensions';
        else currentPage = 'category_pensions'; // demo all lead to pensions
        renderPage();
      });
    });
    document.querySelectorAll('.speaker-mini').forEach(sp => {
      sp.addEventListener('click', (e) => {
        e.stopPropagation();
        const labelKey = sp.dataset.label;
        speakText(__(labelKey), AppData.selectedLanguage);
      });
    });
  }

  // pension category
  function renderPensionCategoryPage() {
    const sections = [
      { titleKey: 'whatIsScheme', descKey: 'schemeDesc' },
      { titleKey: 'eligibility', descKey: 'eligibilityDesc' },
      { titleKey: 'requiredDocs', descKey: 'docsDesc' },
      { titleKey: 'howToApply', descKey: 'howToApplyDesc' },
      { titleKey: 'applyNow', descKey: 'applyNowDesc' }
    ];
    return `
      <div>
        ${sections.map(s => `
          <div class="section-card">
            <div class="section-title">
              <span>${__(s.titleKey)}</span>
              <span class="speaker-mini" data-content="${s.titleKey} ${s.descKey}">🔊</span>
            </div>
            <div class="content-box">${__(s.descKey)}</div>
          </div>
        `).join('')}
        <div style="margin: 30px 0;">
          <div class="card-btn" id="goToFormBtn" style="background:#fdcd7a;">
            <span class="card-icon">📝</span>
            <span class="card-text">${__('applyNow')}</span>
            <span class="speaker-mini" data-label="applyNow">🔊</span>
          </div>
        </div>
      </div>
    `;
  }

  function attachCategoryEvents() {
    document.querySelectorAll('.speaker-mini').forEach(sp => {
      sp.addEventListener('click', (e) => {
        e.stopPropagation();
        const contentKeys = sp.dataset.content;
        if (contentKeys) {
          const keys = contentKeys.split(' ');
          let fullText = keys.map(k => __(k)).join('. ');
          speakText(fullText, AppData.selectedLanguage);
        } else if (sp.dataset.label) {
          speakText(__(sp.dataset.label), AppData.selectedLanguage);
        }
      });
    });
    document.getElementById('goToFormBtn')?.addEventListener('click', (e) => {
      if (e.target.classList.contains('speaker-mini')) return;
      AppData.navigationHistory.push('category_pensions');
      currentPage = 'form';
      renderPage();
    });
  }

  // form page
  function renderFormPage() {
    const fields = [
      { key: 'fullName', icon: '👤' },
      { key: 'aadhaar', icon: '🆔' },
      { key: 'mobile', icon: '📱' },
      { key: 'address', icon: '🏠' },
      { key: 'age', icon: '🎂' },
      { key: 'income', icon: '💰' }
    ];
    return `
      <div>
        <form id="applicationForm" onsubmit="return false;">
          ${fields.map(f => `
            <div class="form-group">
              <div class="form-label">
                <span>${__(f.key)}</span>
                <span class="speaker-mini" data-label="${f.key}">🔊</span>
              </div>
              <div class="input-row">
                <input type="text" class="input-field" id="input_${f.key}" name="${f.key}" placeholder="${__(f.key)}" autocomplete="off">
                <span class="mic-btn" data-field="${f.key}" title="click and speak">🎤</span>
              </div>
            </div>
          `).join('')}
          <button type="button" class="submit-btn" id="formSubmitBtn">${__('submit')}</button>
        </form>
        <div id="successMessage" class="success-msg hidden"></div>
      </div>
    `;
  }

  function attachFormEvents() {
    // speaker for labels
    document.querySelectorAll('.speaker-mini').forEach(sp => {
      sp.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = sp.dataset.label;
        if (key) speakText(__(key), AppData.selectedLanguage);
      });
    });

    // mic for speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      document.querySelectorAll('.mic-btn').forEach(mic => {
        mic.addEventListener('click', (e) => {
          e.preventDefault();
          const field = mic.dataset.field;
          const recognition = new SpeechRecognition();
          recognition.lang = getLangCode(AppData.selectedLanguage);
          recognition.continuous = false;
          recognition.interimResults = false;
          recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            document.getElementById(`input_${field}`).value = transcript;
          };
          recognition.start();
        });
      });
    } else {
      alert('Voice recognition not supported. Please use Chrome or Edge.');
    }

    document.getElementById('formSubmitBtn').addEventListener('click', () => {
      const formData = {};
      ['fullName','aadhaar','mobile','address','age','income'].forEach(key => {
        formData[key] = document.getElementById(`input_${key}`).value;
      });
      AppData.currentUserData = { ...formData, lang: AppData.selectedLanguage };
      AppData.formSubmissions.push(AppData.currentUserData);
      console.log('Form submissions:', AppData.formSubmissions);
      const msgDiv = document.getElementById('successMessage');
      msgDiv.classList.remove('hidden');
      msgDiv.innerText = __('successMsg');
      setTimeout(() => msgDiv.classList.add('hidden'), 4000);
    });
  }

  function getLangCode(lang) {
    const map = { english: 'en-IN', kannada: 'kn-IN', hindi: 'hi-IN', tamil: 'ta-IN' };
    return map[lang] || 'en-IN';
  }

  function speakText(text, lang) {
    if (!window.speechSynthesis) return alert('Speech not supported');
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = getLangCode(lang);
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }

  // navigation
  document.getElementById('homeBtn').addEventListener('click', () => {
    AppData.navigationHistory = [];
    currentPage = 'home';
    renderPage();
  });
  document.getElementById('backBtn').addEventListener('click', () => {
    if (AppData.navigationHistory.length > 0) {
      currentPage = AppData.navigationHistory.pop();
    } else {
      currentPage = 'home';
    }
    renderPage();
  });

  // initial render
  renderPage();
