// ---------- data.js ----------
window.AppData = {
  selectedLanguage: 'english',
  formSubmissions: [],
  currentUserData: {},
  navigationHistory: []
};

// All major Indian languages
window.translations = {
  english: {
    home: "Home", govtSchemes: "Government Schemes", scholarships: "Scholarships",
    pensions: "Pensions", farmerBenefits: "Farmer Benefits", examDetails: "Exam Details",
    applyServices: "Apply for Services", whatIs: "What is this?", eligibility: "Eligibility",
    documents: "Documents", stepsToApply: "Steps to apply", applyNow: "Apply Now",
    fullName: "Full Name", aadhaar: "Aadhaar", mobile: "Mobile Number",
    address: "Address", age: "Age", income: "Income", submit: "Submit Application",
    successMsg: "✅ Application submitted! Check console.", selectSubScheme: "Select a sub-scheme",
    schemeDesc: "Description",
  },
  hindi: {
    home: "होम", govtSchemes: "सरकारी योजनाएं", scholarships: "छात्रवृत्ति",
    pensions: "पेंशन", farmerBenefits: "किसान लाभ", examDetails: "परीक्षा विवरण",
    applyServices: "सेवाओं के लिए आवेदन", whatIs: "यह क्या है?", eligibility: "पात्रता",
    documents: "दस्तावेज़", stepsToApply: "आवेदन के चरण", applyNow: "अभी आवेदन करें",
    fullName: "पूरा नाम", aadhaar: "आधार", mobile: "मोबाइल नंबर",
    address: "पता", age: "आयु", income: "आय", submit: "आवेदन जमा करें",
    successMsg: "✅ आवेदन सबमिट हो गया! कंसोल देखें।",
  },
  bengali: {
    home: "হোম", govtSchemes: "সরকারি প্রকল্প", scholarships: "বৃত্তি",
    pensions: "পেনশন", farmerBenefits: "কৃষক সুবিধা", examDetails: "পরীক্ষার বিবরণ",
    applyServices: "সেবার জন্য আবেদন", fullName: "পুরো নাম", aadhaar: "আধার",
    mobile: "মোবাইল নম্বর", address: "ঠিকানা", age: "বয়স", income: "আয়",
    submit: "আবেদন জমা দিন", successMsg: "✅ আবেদন জমা পড়েছে! কনসোল দেখুন।",
  },
  telugu: {
    home: "హోమ్", govtSchemes: "ప్రభుత్వ పథకాలు", pensions: "పెన్షన్లు",
    farmerBenefits: "రైతుల ప్రయోజనాలు", fullName: "పూర్తి పేరు", aadhaar: "ఆధార్",
    mobile: "మొబైల్ నంబర్", submit: "దరఖాస్తు సమర్పించండి",
  },
  marathi: {
    home: "मुखपृष्ठ", govtSchemes: "सरकारी योजना", scholarships: "शिष्यवृत्ती",
    pensions: "निवृत्तीवेतन", fullName: "पूर्ण नाव", aadhaar: "आधार",
    submit: "अर्ज सादर करा",
  },
  tamil: {
    home: "முகப்பு", govtSchemes: "அரசு திட்டங்கள்", scholarships: "கல்வி உதவித்தொகை",
    pensions: "ஓய்வூதியம்", farmerBenefits: "விவசாயி நலன்", fullName: "முழு பெயர்",
    aadhaar: "ஆதார்", mobile: "கைப்பேசி எண்", submit: "விண்ணப்பத்தை சமர்ப்பி",
  },
  gujarati: {
    home: "હોમ", govtSchemes: "સરકારી યોજનાઓ", pensions: "પેન્શન",
    fullName: "પૂરું નામ", aadhaar: "આધાર", submit: "અરજી સબમિટ કરો",
  },
  kannada: {
    home: "ಮುಖಪುಟ", govtSchemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು", scholarships: "ವಿದ್ಯಾರ್ಥಿವೇತನ",
    pensions: "ಪಿಂಚಣಿ", farmerBenefits: "ರೈತರ ಪ್ರಯೋಜನಗಳು", fullName: "ಪೂರ್ಣ ಹೆಸರು",
    aadhaar: "ಆಧಾರ್", mobile: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ", submit: "ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
  },
  malayalam: {
    home: "ഹോം", govtSchemes: "സർക്കാർ പദ്ധതികൾ", pensions: "പെൻഷൻ",
    fullName: "പൂർണ്ണമായ പേര്", aadhaar: "ആധാർ", submit: "അപേക്ഷ സമർപ്പിക്കുക",
  },
  punjabi: {
    home: "ਹੋਮ", govtSchemes: "ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ", pensions: "ਪੈਨਸ਼ਨ",
    fullName: "ਪੂਰਾ ਨਾਮ", aadhaar: "ਆਧਾਰ", submit: "ਅਰਜ਼ੀ ਜਮ੍ਹਾਂ ਕਰੋ",
  }
};

// Complete schemes data with sub-schemes, steps, and form fields
window.schemesData = {
  govtSchemes: {
    nameKey: 'govtSchemes', icon: '🏛️',
    subSchemes: [
      { id: 'pmkisan', name: 'PM Kisan Samman Nidhi', 
        steps: ['Register at pmkisan.gov.in', 'Link Aadhaar', 'Verify land records', 'Get installment'],
        fields: ['fullName','aadhaar','mobile','address','age','income'] },
      { id: 'pmay', name: 'Pradhan Mantri Awas Yojana',
        steps: ['Check eligibility', 'Apply online via PMAY portal', 'Upload documents', 'Loan approval'],
        fields: ['fullName','aadhaar','mobile','address','income'] }
    ]
  },
  scholarships: {
    nameKey: 'scholarships', icon: '📘',
    subSchemes: [
      { id: 'nsp', name: 'National Scholarship Portal',
        steps: ['Visit NSP', 'Register with bank details', 'Submit institute verification', 'Receive DBT'],
        fields: ['fullName','aadhaar','mobile','address','age','income'] },
      { id: 'postmatric', name: 'Post Matric Scholarship (SC/ST)',
        steps: ['Apply through state portal', 'Upload caste certificate', 'Institute verification', 'Funds credited'],
        fields: ['fullName','aadhaar','mobile','address','age','income'] }
    ]
  },
  pensions: {
    nameKey: 'pensions', icon: '👵',
    subSchemes: [
      { id: 'ignoaps', name: 'Indira Gandhi National Old Age Pension',
        steps: ['Visit nearest CSC', 'Fill application', 'Attach age proof', 'Receive pension monthly'],
        fields: ['fullName','aadhaar','mobile','address','age'] },
      { id: 'widow', name: 'Widow Pension Scheme',
        steps: ['Proof of husband death', 'Income certificate', 'Apply at tehsil office', 'Sanction letter'],
        fields: ['fullName','aadhaar','mobile','address','age','income'] }
    ]
  },
  farmerBenefits: {
    nameKey: 'farmerBenefits', icon: '🌾',
    subSchemes: [
      { id: 'pmfby', name: 'PM Fasal Bima Yojana',
        steps: ['Register at bank', 'Pay premium', 'Crop inspection', 'Claim settlement'],
        fields: ['fullName','aadhaar','mobile','address','age','income'] },
      { id: 'pmks', name: 'PM Kisan Maan Dhan Yojana',
        steps: ['Visit PMKMY portal', 'Auto-debit pension contribution', 'Receive pension after 60'],
        fields: ['fullName','aadhaar','mobile','address','age','income'] }
    ]
  },
  examDetails: {
    nameKey: 'examDetails', icon: '📋',
    subSchemes: [
      { id: 'upsc', name: 'UPSC Civil Services',
        steps: ['Apply at upsc.gov.in', 'Prelims exam', 'Mains exam', 'Interview'],
        fields: ['fullName','aadhaar','mobile','address','age'] },
      { id: 'ssc', name: 'SSC CGL',
        steps: ['Fill SSC form', 'Admit card download', 'Computer based test', 'Skill test'],
        fields: ['fullName','aadhaar','mobile','address','age'] }
    ]
  },
  applyServices: {
    nameKey: 'applyServices', icon: '📎',
    subSchemes: [
      { id: 'passport', name: 'Passport Seva',
        steps: ['Register at passportindia.gov.in', 'Appointment', 'Document verification', 'Police verification'],
        fields: ['fullName','aadhaar','mobile','address','age'] },
      { id: 'driving', name: 'Driving License',
        steps: ['Apply online (Sarathi)', 'Learner\'s test', 'Driving test', 'License issued'],
        fields: ['fullName','aadhaar','mobile','address','age'] }
    ]
  }
};

// helper: translate key to selected language
window.__ = function(key) {
  const lang = AppData.selectedLanguage || 'english';
  return (translations[lang] && translations[lang][key]) ? translations[lang][key] : (translations.english[key] || key);
};

// image data (speaker, mic, etc) as SVG strings
window.images = {
  speaker: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231d3e1d'%3E%3Cpath d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/%3E%3C/svg%3E",
  mic: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231d3e1d'%3E%3Cpath d='M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72h-1.7z'/%3E%3C/svg%3E",
  home: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231d3e1d'%3E%3Cpath d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/%3E%3C/svg%3E",
  back: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231d3e1d'%3E%3Cpath d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'/%3E%3C/svg%3E"
};