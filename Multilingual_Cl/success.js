// Get selected language from localStorage
const selectedLang = localStorage.getItem('selectedLanguage') || 'english';
AppData.selectedLanguage = selectedLang;

function t(key) {
    return translations[AppData.selectedLanguage]?.[key] || translations.english[key] || key;
}

// Update UI language
function updateUILanguage() {
    document.getElementById('successTitle').textContent = t('successTitle');
    document.getElementById('successMessage').textContent = t('successMessage');
    document.getElementById('backHomeBtnText').textContent = t('backToHome');
}

// Event listeners
document.getElementById('backToHomeBtn')?.addEventListener('click', () => {
    // Clear scheme data
    localStorage.removeItem('currentCategory');
    localStorage.removeItem('currentScheme');
    window.location.href = 'home.html';
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateUILanguage();
});