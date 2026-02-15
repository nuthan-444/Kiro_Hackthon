// ========================================
// Voice & Speech Management
// ========================================
let currentSpeech = null;

// Cancel any ongoing speech
function cancelSpeech() {
    if (currentSpeech) {
        window.speechSynthesis.cancel();
        currentSpeech = null;
    }
}

// Speak text in specific language
function speak(text, languageCode) {
    cancelSpeech();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageCode;
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    currentSpeech = utterance;
    window.speechSynthesis.speak(utterance);
}

// ========================================
// Language Selection Screen
// ========================================
function initLanguageScreen() {
    const grid = document.getElementById('languageGrid');
    grid.innerHTML = '';
    
    languages.forEach((lang, index) => {
        const btn = document.createElement('div');
        btn.className = 'language-btn';
        btn.style.animationDelay = `${index * 0.1}s`;
        
        btn.innerHTML = `
            <div class="language-text">
                <span class="language-name">${lang.nativeName}</span>
            </div>
            <div class="speaker-icon" data-lang="${lang.code}">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/%3E%3C/svg%3E" alt="Speaker">
            </div>
        `;
        
        // Click on button (not speaker) to select language
        btn.addEventListener('click', (e) => {
            if (!e.target.closest('.speaker-icon')) {
                selectLanguage(lang.code);
            }
        });
        
        // Click on speaker to hear language name
        const speaker = btn.querySelector('.speaker-icon');
        speaker.addEventListener('click', (e) => {
            e.stopPropagation();
            speak(lang.nativeName, lang.voice);
        });
        
        grid.appendChild(btn);
    });
}

function selectLanguage(langCode) {
    AppData.selectedLanguage = langCode;
    localStorage.setItem('selectedLanguage', langCode);
    // Navigate to home.html
    window.location.href = 'home.html';
}

// ========================================
// Initialization
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language selection screen
    initLanguageScreen();
    
    console.log('🚀 Multilingual Smart Government Assistant - Language Selection');
});

// ========================================
// Utility: Prevent Speech Overlap
// ========================================
window.addEventListener('beforeunload', () => {
    cancelSpeech();
});