// Get selected language from localStorage
const selectedLang = localStorage.getItem('selectedLanguage') || 'english';
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

// Update UI language
function updateUILanguage() {
    document.getElementById('headerTitle').textContent = t('home');
    document.getElementById('homeTitle').textContent = t('homeTitle');
}

// Render categories
function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = '';
    
    Object.entries(schemesData).forEach(([key, data], index) => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const translationKey = categoryMetadata[key]?.translationKey || key;
        const categoryName = t(translationKey);
        
        card.innerHTML = `
            <span class="category-icon">${data.icon}</span>
            <h3 class="category-name">${categoryName}</h3>
            <button class="category-speaker" type="button">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23059669'%3E%3Cpath d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/%3E%3C/svg%3E" alt="Speak">
            </button>
        `;
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.category-speaker')) {
                // Store category and navigate
                localStorage.setItem('currentCategory', key);
                window.location.href = 'subschemes.html';
            }
        });
        
        const speaker = card.querySelector('.category-speaker');
        speaker.addEventListener('click', (e) => {
            e.stopPropagation();
            speak(categoryName);
        });
        
        grid.appendChild(card);
    });
}

// Event listeners
document.getElementById('homeBtn')?.addEventListener('click', () => {
    window.location.href = 'home.html';
});

document.getElementById('changeLangBtn')?.addEventListener('click', () => {
    window.location.href = 'index.html';
});

document.getElementById('homeTitleSpeaker')?.addEventListener('click', () => {
    speak(t('homeTitle'));
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateUILanguage();
    renderCategories();
});

window.addEventListener('beforeunload', () => {
    cancelSpeech();
});