// Get data from localStorage
const selectedLang = localStorage.getItem('selectedLanguage') || 'english';
const currentCategory = localStorage.getItem('currentCategory');
AppData.selectedLanguage = selectedLang;

// Voice helper functions
let currentSpeech = null;

function cancelSpeech() {
    if (currentSpeech) {
        window.speechSynthesis.cancel();
        currentSpeech = null;
    }
}

function speak(text) {
    cancelSpeech();
    const lang = languages.find(l => l.code === AppData.selectedLanguage)?.voice || 'en-IN';
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.pitch = 1;
    currentSpeech = utterance;
    window.speechSynthesis.speak(utterance);
}

function t(key) {
    return translations[AppData.selectedLanguage]?.[key] || translations.english[key] || key;
}

// Render sub-schemes
function renderSubSchemes() {
    if (!currentCategory) {
        window.location.href = 'home.html';
        return;
    }
    
    const category = schemesData[currentCategory];
    if (!category) {
        window.location.href = 'home.html';
        return;
    }
    
    const translationKey = categoryMetadata[currentCategory]?.translationKey || currentCategory;
    document.getElementById('categoryTitle').textContent = t(translationKey);
    
    const list = document.getElementById('subSchemesList');
    list.innerHTML = '';
    
    category.subSchemes.forEach((scheme, index) => {
        const card = document.createElement('div');
        card.className = 'scheme-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const schemeName = t(scheme.name);
        const stepsCount = Object.keys(scheme.steps).length > 0 ? 
            scheme.steps[AppData.selectedLanguage]?.length || scheme.steps.english?.length || 0 : 0;
        
        card.innerHTML = `
            <div class="scheme-info">
                <h3 class="scheme-name">${schemeName}</h3>
                <p class="scheme-meta">${stepsCount} ${t('steps')}</p>
            </div>
            <div class="scheme-arrow">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M5 12h14M12 5l7 7-7 7'/%3E%3C/svg%3E" alt="Arrow">
            </div>
        `;
        
        card.addEventListener('click', () => {
            localStorage.setItem('currentScheme', scheme.id);
            window.location.href = 'detail.html';
        });
        
        list.appendChild(card);
    });
}

// Event listeners
document.getElementById('backBtn')?.addEventListener('click', () => {
    window.history.back();
});

document.getElementById('homeBtn')?.addEventListener('click', () => {
    window.location.href = 'home.html';
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSubSchemes();
});

window.addEventListener('beforeunload', () => {
    cancelSpeech();
});