function showLanguageDialog() {
    document.getElementById('dialog-overlay').style.display = 'block';
    document.getElementById('dialog-box').style.display = 'block';
}

function hideDialog() {
    document.getElementById('dialog-overlay').style.display = 'none';
    document.getElementById('dialog-box').style.display = 'none';
}

const symptomButtons = document.querySelectorAll("#symptoms .symptom");
const submitButton = document.getElementById("submit-button");

const dialogOverlay = document.getElementById("dialog-overlay");
const dialogBox = document.getElementById("dialog-box");
const dialogMessage = document.getElementById("dialog-message");
const dialogOkButton = document.getElementById("dialog-ok-button");

function translatePage() {
    const selectedLanguage = document.getElementById("language").value;
    const translations = {
        'en': {
            'page-title': 'Dharani',
            'symptoms-text': 'What symptoms are you facing?',
            'chosen-symptoms-title': 'Chosen Symptoms',
            'dialog-ok-button': 'OK',
            'fever': 'Fever',
            'cough': 'Cough',
            'runny-nose': 'Runny nose',
            'sore-throat': 'Sore throat',
            'headache': 'Headache',
            'body-aches': 'Body aches',
            'diarrhea': 'Diarrhea',
            'vomiting': 'Vomiting',
            'rash': 'Rash',
            'other': 'Other',
            'language-changed': 'Language Changed',
        },
        'hi': {
            'page-title': 'धरणी',
            'symptoms-text': 'आप किस प्रकार के लक्षण महसूस कर रहे हैं?',
            'chosen-symptoms-title': 'चययनित लक्षण',
            'dialog-ok-button': 'ठीक है',
            'fever': 'बुखार',
            'cough': 'खांसी',
            'runny-nose': 'बहता नाक',
            'sore-throat': 'गले में खराश',
            'headache': 'सिरदर्द',
            'body-aches': 'शरीर में दर्द',
            'diarrhea': 'दस्त',
            'vomiting': 'उल्टी',
            'rash': 'चकत्ते',
            'other': 'अन्य',
            'language-changed': 'भाषा बदल गई है',
            'submitted-successfully': 'सफलतापूर्वक प्रस्तुत किया गया!',
            'please-choose-option': 'कृपया एक विकल्प चुनें!',
        },
        'bn': {
            'page-title': 'ধরণী',
            'symptoms-text': 'আপনি কী লক্ষণ অনুভব করছেন?',
            'chosen-symptoms-title': 'চয়নিত লক্ষণ',
            'dialog-ok-button': 'ঠিক আছে',
            'fever': 'জ্বর',
            'cough': 'কাশি',
            'runny-nose': 'মুখ থেকে পানি পড়া',
            'sore-throat': 'গলা ব্যথা',
            'headache': 'মাথা ব্যথা',
            'body-aches': 'শরীরে ব্যথা',
            'diarrhea': 'পায়খানা',
            'vomiting': 'বমি',
            'rash': 'চুল্বুলি',
            'other': 'অন্যান্য',
            'language-changed': 'ভাষা পরিবর্তন হয়েছে',
        },
        'te': {
            'page-title': 'ధరణి',
            'symptoms-text': 'మీరు ఏ లక్షణాలను అనుభవిస్తున్నారు?',
            'chosen-symptoms-title': 'ఎంచుకోబడిన లక్షణాలు',
            'dialog-ok-button': 'అలాగే',
            'fever': 'జ్వరం',
            'cough': 'కాఫ్',
            'runny-nose': 'నలుపుతున్న ముక్కు',
            'sore-throat': 'గంట',
            'headache': 'తల నొప్పి',
            'body-aches': 'శరీరంలో నొప్పి',
            'diarrhea': 'అస్తమయిన వాటం',
            'vomiting': 'వాంతి',
            'rash': 'ర్యాష్',
            'other': 'ఇతర',
            'language-changed': 'భాష మారింది',
        },
        'mr': {
            'page-title': 'धरणी',
            'symptoms-text': 'आपण कुठल्या लक्षणांशी आपला सामना करत आहात?',
            'chosen-symptoms-title': 'निवडलेले लक्षण',
            'dialog-ok-button': 'ठीक आहे',
            'fever': 'ताप',
            'cough': 'खोकला',
            'runny-nose': 'त्रास',
            'sore-throat': 'टेढ़ा मुख',
            'headache': 'तिर्याचा दुखण',
            'body-aches': 'शरीरात दुखणे',
            'diarrhea': 'उधळलेले वयाचं',
            'vomiting': 'उलटी',
            'rash': 'कुंचले',
            'other': 'इतर',
            'language-changed': 'भाषा बदलली आहे',
        },
        'ta': {
            'page-title': 'தரணி',
            'symptoms-text': 'நீங்கள் என்ன அறிந்துகொள்ளுகிறீர்களா?',
            'chosen-symptoms-title': 'தேர்ந்தெடுக்கப்பட்ட அறிகுறிகள்',
            'dialog-ok-button': 'சரி',
            'fever': 'காய்ச்சல்',
            'cough': 'இருமல்',
            'runny-nose': 'மூக்கு மூச்சு',
            'sore-throat': 'தொண்டை வலி',
            'headache': 'தலைவலி',
            'body-aches': 'உடல் வலி',
            'diarrhea': 'வயிற்றுப்போக்கு',
            'vomiting': 'வாந்தி',
            'rash': 'தொல்லை',
            'other': 'மற்றவை',
            'language-changed': 'மொழி மாற்றப்பட்டது',
        },
        'ur': {
            'page-title': 'دھرنی',
            'symptoms-text': 'آپ کس قسم کے لاکھسن محسوس کر رہے ہیں؟',
            'chosen-symptoms-title': 'منتخب لاکھسن',
            'dialog-ok-button': 'ٹھیک ہے',
            'fever': 'بخار',
            'cough': 'کھانسی',
            'runny-nose': 'بہتا ہوا ناک',
            'sore-throat': 'دکھتا ہوا گلہ',
            'headache': 'سر درد',
            'body-aches': 'جسم میں درد',
            'diarrhea': 'دست',
            'vomiting': 'الٹی',
            'rash': 'خارش',
            'other': 'دیگر',
            'language-changed': 'زبان بدل گئی ہے',

        },
    };

    const elementsToTranslate = document.querySelectorAll('[id]');
    elementsToTranslate.forEach(element => {
        const id = element.id;
        if (translations[selectedLanguage] && translations[selectedLanguage][id]) {
            element.textContent = translations[selectedLanguage][id];
        }
    });
}

symptomButtons.forEach(button => {
    button.addEventListener("click", function () {
        button.classList.toggle("chosen");

        const chosenSymptoms = document.querySelector("#chosen-symptoms ul");
        const symptom = document.createElement("li");
        symptom.textContent = button.textContent;

        if (button.classList.contains("chosen")) {
            chosenSymptoms.appendChild(symptom);
        } else {
            const existingSymptom = Array.from(chosenSymptoms.children).find(
                li => li.textContent === symptom.textContent
            );
            if (existingSymptom) {
                chosenSymptoms.removeChild(existingSymptom);
            }
        }

        if (chosenSymptoms.querySelectorAll("li").length === 0) {
            chosenSymptoms.innerHTML = "";
        }
    });
});

function submitSymptoms() {
    const chosenSymptoms = document.querySelectorAll("#symptoms .chosen");

    if (chosenSymptoms.length === 0) {
        showDialog("Please choose an option!");
    } else {
        showDialog("Submitted successfully!");
        symptomButtons.forEach(button => {
            button.disabled = true;
        });
        submitButton.disabled = true;
    }
}

function showDialog(message) {
    dialogMessage.textContent = message;
    dialogOverlay.style.display = "block";
    dialogBox.style.display = "block";
}

function hideDialog() {
    dialogOverlay.style.display = "none";
    dialogBox.style.display = "none";
}