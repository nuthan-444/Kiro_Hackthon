(function() {
  let currentPage = 'language'; // language, home, categoryList, subSchemeDetail, form

  function renderPage() {
    const contentDiv = document.getElementById('pageContent');
    const lang = AppData.selectedLanguage;
    document.getElementById('currentLangLabel').innerHTML = `<img src="${images.speaker}" class="icon-img" alt="lang"> ${lang.charAt(0).toUpperCase() + lang.slice(1)}`;

    if (currentPage === 'language') {
      contentDiv.innerHTML = renderLanguagePage();
      attachLangEvents();
    } else if (currentPage === 'home') {
      contentDiv.innerHTML = renderHomePage();
      attachHomeEvents();
    } else if (currentPage === 'categoryList') {
      contentDiv.innerHTML = renderCategoryListPage();
      attachCategoryListEvents();
    } else if (currentPage === 'subSchemeDetail') {
      contentDiv.innerHTML = renderSubSchemeDetail();
      attachSubSchemeEvents();
    } else if (currentPage === 'form') {
      contentDiv.innerHTML = renderFormPage();
      attachFormEvents();
    }
  }

  function renderLanguagePage() {
    const langList = ['english','hindi','bengali','telugu','marathi','tamil','gujarati','kannada','malayalam','punjabi'];
    return `<div class="lang-page">` + langList.map(l => `
      <div class="lang-btn" data-lang="${l}">
        <span>${l.toUpperCase()}</span>
        <img src="${images.speaker}" class="speaker-img" data-lang="${l}" alt="speak">
      </div>`).join('') + `</div>`;
  }

  function attachLangEvents() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target.classList.contains('speaker-img')) return;
        AppData.selectedLanguage = btn.dataset.lang;
        AppData.navigationHistory.push('language');
        currentPage = 'home';
        renderPage();
      });
    });
    document.querySelectorAll('.speaker-img').forEach(sp => {
      sp.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = sp.dataset.lang;
        // Speak the language name in that language (using a simple map)
        const langNameMap = {
          english:'English', hindi:'हिन्दी', bengali:'বাংলা', telugu:'తెలుగు',
          marathi:'मराठी', tamil:'தமிழ்', gujarati:'ગુજરાતી', kannada:'ಕನ್ನಡ',
          malayalam:'മലയാളം', punjabi:'ਪੰਜਾਬੀ'
        };
        speakText(langNameMap[lang] || lang, lang); // use selected language for voice
      });
    });
  }

  function renderHomePage() {
    const cats = [
      { key: 'govtSchemes', icon: '🏛️' }, { key: 'scholarships', icon: '📘' }, { key: 'pensions', icon: '👵' },
      { key: 'farmerBenefits', icon: '🌾' }, { key: 'examDetails', icon: '📋' }, { key: 'applyServices', icon: '📎' }
    ];
    return `<div class="grid-large">` + cats.map(c => `
      <div class="card-btn" data-category="${c.key}">
        <span class="card-icon">${c.icon}</span>
        <span class="card-text">${__(c.key)}</span>
        <img src="${images.speaker}" class="speaker-img" data-label="${c.key}" alt="speaker">
      </div>`).join('') + `</div>`;
  }

  function attachHomeEvents() {
    document.querySelectorAll('.card-btn').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.classList.contains('speaker-img')) return;
        const cat = card.dataset.category;
        AppData.navigationHistory.push('home');
        AppData.currentCategory = cat;
        currentPage = 'categoryList';
        renderPage();
      });
    });
    document.querySelectorAll('.speaker-img').forEach(sp => {
      sp.addEventListener('click', (e) => {
        e.stopPropagation();
        // Speak the translated text in the selected language
        speakText(__(sp.dataset.label), AppData.selectedLanguage);
      });
    });
  }

  function renderCategoryListPage() {
    const cat = AppData.currentCategory;
    const data = schemesData[cat];
    if (!data) return `<div>Error</div>`;
    return `
      <h2 style="font-size:2.4rem; margin-bottom:20px;">${__(data.nameKey)}</h2>
      <div class="subscheme-grid">
        ${data.subSchemes.map(s => `
          <div class="subscheme-item" data-subid="${s.id}">
            <span style="font-size:2rem;">👉</span>
            <span style="font-size:1.8rem; flex:1;">${s.name}</span>
            <img src="${images.speaker}" class="speaker-img" data-text="${s.name}" alt="speak">
          </div>`).join('')}
      </div>`;
  }

  function attachCategoryListEvents() {
    document.querySelectorAll('.subscheme-item').forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target.classList.contains('speaker-img')) return;
        const subId = item.dataset.subid;
        const cat = AppData.currentCategory;
        const scheme = schemesData[cat].subSchemes.find(s => s.id === subId);
        AppData.currentSubScheme = scheme;
        AppData.navigationHistory.push('categoryList');
        currentPage = 'subSchemeDetail';
        renderPage();
      });
    });
    document.querySelectorAll('.speaker-img').forEach(sp => {
      sp.addEventListener('click', (e) => {
        e.stopPropagation();
        // Speak the sub-scheme name in the selected language (since names are in English, we pass as is, voice will use target language)
        speakText(sp.dataset.text, AppData.selectedLanguage);
      });
    });
  }

  function renderSubSchemeDetail() {
    const s = AppData.currentSubScheme;
    if (!s) return '';
    return `
      <div class="section-card">
        <div class="section-title"><span>${s.name}</span><img src="${images.speaker}" class="speaker-img" data-text="${s.name}" alt="speak"></div>
        <div class="content-box"><strong>${__('stepsToApply')}:</strong><br>${s.steps.map((step,i)=>`${i+1}. ${step}`).join('<br>')}</div>
        <div style="margin:20px 0;">
          <div class="card-btn" id="gotoFormSub">
            <span class="card-icon">📝</span><span class="card-text">${__('applyNow')}</span>
            <img src="${images.speaker}" class="speaker-img" data-label="applyNow" alt="speak">
          </div>
        </div>
      </div>`;
  }

  function attachSubSchemeEvents() {
    document.getElementById('gotoFormSub')?.addEventListener('click', (e) => {
      if (e.target.classList.contains('speaker-img')) return;
      AppData.navigationHistory.push('subSchemeDetail');
      currentPage = 'form';
      renderPage();
    });
    document.querySelectorAll('.speaker-img').forEach(sp => {
      sp.addEventListener('click', (e) => {
        e.stopPropagation();
        const txt = sp.dataset.text || __(sp.dataset.label);
        speakText(txt, AppData.selectedLanguage);
      });
    });
  }

  function renderFormPage() {
    const s = AppData.currentSubScheme;
    const fields = s?.fields || ['fullName','aadhaar','mobile','address','age','income'];
    return `
      <div>
        <h2 style="font-size:2.2rem;">${s?.name} - ${__('applyNow')}</h2>
        ${fields.map(f => `
          <div class="form-group">
            <div class="form-label"><span>${__(f)}</span><img src="${images.speaker}" class="speaker-img" data-label="${f}" alt="speak"></div>
            <div class="input-row">
              <input type="text" class="input-field" id="input_${f}" placeholder="${__(f)}">
              <img src="${images.mic}" class="mic-img" data-field="${f}" alt="mic">
            </div>
          </div>`).join('')}
        <button class="submit-btn" id="submitFormBtn"><img src="${images.speaker}" class="icon-img" alt=""> ${__('submit')}</button>
        <div id="formSuccess" class="success-msg hidden">${__('successMsg')}</div>
      </div>`;
  }

  function attachFormEvents() {
    // speaker for field labels
    document.querySelectorAll('.speaker-img').forEach(sp => {
      sp.addEventListener('click', (e) => {
        e.stopPropagation();
        speakText(__(sp.dataset.label), AppData.selectedLanguage);
      });
    });
    // mic (speech recognition)
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      document.querySelectorAll('.mic-img').forEach(mic => {
        mic.addEventListener('click', (e) => {
          e.preventDefault();
          const field = mic.dataset.field;
          const recognition = new SpeechRecognition();
          recognition.lang = getLangCode(AppData.selectedLanguage);
          recognition.onresult = (event) => {
            document.getElementById(`input_${field}`).value = event.results[0][0].transcript;
          };
          recognition.start();
        });
      });
    } else {
      alert('Voice recognition not supported. Try Chrome on mobile/desktop.');
    }
    document.getElementById('submitFormBtn').addEventListener('click', () => {
      let formData = {};
      const s = AppData.currentSubScheme;
      (s?.fields || ['fullName','aadhaar','mobile','address','age','income']).forEach(key => {
        formData[key] = document.getElementById(`input_${key}`)?.value || '';
      });
      formData.scheme = s?.name;
      AppData.formSubmissions.push(formData);
      console.log('Submitted:', AppData.formSubmissions);
      document.getElementById('formSuccess').classList.remove('hidden');
      setTimeout(() => document.getElementById('formSuccess').classList.add('hidden'), 4000);
    });
  }

  function getLangCode(lang) {
    const map = { english:'en-IN', hindi:'hi-IN', bengali:'bn-IN', telugu:'te-IN', marathi:'mr-IN', tamil:'ta-IN', gujarati:'gu-IN', kannada:'kn-IN', malayalam:'ml-IN', punjabi:'pa-IN' };
    return map[lang] || 'en-IN';
  }

  function speakText(text, lang) {
    if (!window.speechSynthesis) return alert('Speech not supported');
    // Cancel any ongoing speech to avoid overlapping
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = getLangCode(lang);
    // Optional: adjust rate for slower speech (rural-friendly)
    utterance.rate = 0.9;
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

  renderPage();
})();