// Get data from localStorage
const selectedLang = localStorage.getItem('selectedLanguage') || 'english';
const currentCategory = localStorage.getItem('currentCategory');
const currentSchemeId = localStorage.getItem('currentScheme');
AppData.selectedLanguage = selectedLang;

// Voice helper functions
let currentSpeech = null;
let currentRecognition = null;

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

// Initialize speech recognition
function initSpeechRecognition(inputElement) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert('Speech recognition not supported in this browser');
        return null;
    }
    
    const recognition = new SpeechRecognition();
    const lang = languages.find(l => l.code === AppData.selectedLanguage)?.voice || 'en-IN';
    
    recognition.lang = lang;
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        inputElement.value = transcript;
    };
    
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };
    
    return recognition;
}

// Start voice input
function startVoiceInput(button) {
    const inputId = button.dataset.input;
    const input = document.getElementById(inputId);
    
    if (!input) return;
    
    // Stop any existing recognition
    if (currentRecognition) {
        currentRecognition.stop();
        currentRecognition = null;
    }
    
    const recognition = initSpeechRecognition(input);
    
    if (!recognition) return;
    
    button.classList.add('active');
    
    recognition.onend = () => {
        button.classList.remove('active');
        currentRecognition = null;
    };
    
    recognition.start();
    currentRecognition = recognition;
}

// Render form
function renderForm() {
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
    
    // Update title
    document.getElementById('formTitle').textContent = t('submitApplication');
    document.getElementById('submitBtnText').textContent = t('submitApplication');
    
    const container = document.getElementById('formFieldsContainer');
    container.innerHTML = '';
    
    scheme.fields.forEach((fieldKey, index) => {
        const group = document.createElement('div');
        group.className = 'form-group';
        group.style.animationDelay = `${index * 0.05}s`;
        
        const label = t(fieldKey);
        const inputId = `input-${fieldKey}`;
        
        group.innerHTML = `
            <div class="form-label">
                <label for="${inputId}">${label}</label>
                <button type="button" class="label-speaker" data-text="${label}">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23059669'%3E%3Cpath d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/%3E%3C/svg%3E" alt="Speak">
                </button>
            </div>
            <div class="input-wrapper">
                <input 
                    type="text" 
                    id="${inputId}" 
                    name="${fieldKey}"
                    class="form-input" 
                    placeholder="${label}"
                    required
                >
                <button type="button" class="mic-btn" data-input="${inputId}">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z'/%3E%3C/svg%3E" alt="Microphone">
                </button>
            </div>
        `;
        
        container.appendChild(group);
    });
    
    // Add event listeners
    setTimeout(() => {
        document.querySelectorAll('.label-speaker').forEach(btn => {
            btn.addEventListener('click', () => {
                speak(btn.dataset.text);
            });
        });
        
        document.querySelectorAll('.mic-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                startVoiceInput(btn);
            });
        });
    }, 100);
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {};
    
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // Store in AppData (in real app, this would go to server)
    AppData.formSubmissions.push({
        scheme: currentSchemeId,
        data: data,
        timestamp: new Date().toISOString()
    });
    
    // Navigate to success page
    window.location.href = 'success.html';
}

// Event listeners
document.getElementById('backBtn')?.addEventListener('click', () => {
    window.history.back();
});

document.getElementById('homeBtn')?.addEventListener('click', () => {
    window.location.href = 'home.html';
});

document.getElementById('applicationForm')?.addEventListener('submit', handleFormSubmit);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderForm();
});

window.addEventListener('beforeunload', () => {
    cancelSpeech();
    if (currentRecognition) {
        currentRecognition.stop();
    }
});