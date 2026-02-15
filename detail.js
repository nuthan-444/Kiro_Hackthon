// Get data from localStorage
const selectedLang = localStorage.getItem('selectedLanguage') || 'english';
const currentCategory = localStorage.getItem('currentCategory');
const currentSchemeId = localStorage.getItem('currentScheme');
AppData.selectedLanguage = selectedLang;

// Voice helper functions
let currentSpeech = null;
let stepsText = '';

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

// Render scheme details
function renderSchemeDetail() {
    if (!currentCategory || !currentSchemeId) {
        window.location.href = 'home.html';
        return;
    }
    
    const category = schemesData[currentCategory];
    if (!category) {
        window.location.href = 'home.html';
        return;
    }
    
    const scheme = category.subSchemes.find(s => s.id === currentSchemeId);
    if (!scheme) {
        window.location.href = 'subschemes.html';
        return;
    }
    
    // Update scheme name
    const schemeName = t(scheme.name);
    document.getElementById('detailSchemeName').textContent = schemeName;
    document.getElementById('schemeTitle').textContent = schemeName;
    
    // Update steps title
    document.getElementById('stepsTitle').textContent = t('stepsToApply');
    document.getElementById('applyBtnText').textContent = t('applyNow');
    
    // Get steps in selected language
    const steps = scheme.steps[AppData.selectedLanguage] || scheme.steps.english || [];
    
    // Render steps
    const stepsList = document.getElementById('stepsList');
    stepsList.innerHTML = '';
    
    // Create full text for speaking all steps
    const stepsHeader = t('stepsToApply');
    const stepsArray = [];
    
    steps.forEach((step, index) => {
        const li = document.createElement('li');
        li.textContent = step;
        li.style.animationDelay = `${index * 0.1}s`;
        stepsList.appendChild(li);
        stepsArray.push(`${index + 1}. ${step}`);
    });
    
    // Join all steps for speaking
    stepsText = `${stepsHeader}. ${stepsArray.join('. ')}`;
    
    // Speaker buttons
    document.getElementById('schemeNameSpeaker').onclick = () => speak(schemeName);
    document.getElementById('stepsTitleSpeaker').onclick = () => speak(stepsText);
}

// Event listeners
document.getElementById('backBtn')?.addEventListener('click', () => {
    window.history.back();
});

document.getElementById('homeBtn')?.addEventListener('click', () => {
    window.location.href = 'home.html';
});

document.getElementById('applyNowBtn')?.addEventListener('click', () => {
    window.location.href = 'form.html';
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSchemeDetail();
});

window.addEventListener('beforeunload', () => {
    cancelSpeech();
});