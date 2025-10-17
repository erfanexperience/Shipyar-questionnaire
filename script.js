// Country and city data for auto-suggestions
const countries = [
    "United States", "Canada", "United Kingdom", "Germany", "France", "Spain", "Italy", "Netherlands", "Belgium", "Switzerland",
    "Austria", "Sweden", "Norway", "Denmark", "Finland", "Poland", "Czech Republic", "Hungary", "Portugal", "Greece",
    "Turkey", "Russia", "Ukraine", "Romania", "Bulgaria", "Croatia", "Slovenia", "Slovakia", "Lithuania", "Latvia",
    "Estonia", "Ireland", "Iceland", "Luxembourg", "Malta", "Cyprus", "Australia", "New Zealand", "Japan", "South Korea",
    "China", "India", "Singapore", "Malaysia", "Thailand", "Philippines", "Indonesia", "Vietnam", "Brazil", "Argentina",
    "Chile", "Mexico", "Colombia", "Peru", "Uruguay", "Paraguay", "Bolivia", "Ecuador", "Venezuela", "South Africa",
    "Egypt", "Morocco", "Nigeria", "Kenya", "Ghana", "Tunisia", "Algeria", "Israel", "Saudi Arabia", "UAE", "Qatar",
    "Kuwait", "Bahrain", "Oman", "Jordan", "Lebanon", "Iraq", "Iran", "Pakistan", "Bangladesh", "Sri Lanka"
];

const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
    "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington",
    "Boston", "El Paso", "Nashville", "Detroit", "Oklahoma City", "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore",
    "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Mesa", "Kansas City", "Atlanta", "Long Beach", "Colorado Springs",
    "Raleigh", "Miami", "Virginia Beach", "Omaha", "Oakland", "Minneapolis", "Tulsa", "Arlington", "Tampa", "New Orleans",
    "London", "Birmingham", "Manchester", "Glasgow", "Liverpool", "Leeds", "Sheffield", "Edinburgh", "Bristol", "Leicester",
    "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille",
    "Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig",
    "Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Las Palmas", "Bilbao",
    "Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania",
    "Istanbul", "Ankara", "Izmir", "Bursa", "Antalya", "Adana", "Konya", "Gaziantep", "Mersin", "Diyarbakır",
    "Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kawasaki", "Kyoto", "Saitama",
    "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Newcastle", "Canberra", "Wollongong", "Hobart"
];

// Questionnaire data structure - Dynamic and reduced to 15 questions max
const questions = [
    // Section A - Basic Information (Always shown)
    {
        id: 1,
        section: "A",
        title: "What's your full name?",
        type: "text",
        required: true,
        placeholder: "Enter your full name"
    },
    {
        id: 2,
        section: "A",
        title: "What's your email address?",
        description: "📧 We'll use this for early access & giveaway confirmation",
        type: "email",
        required: true,
        placeholder: "Enter your email address"
    },
    {
        id: 3,
        section: "A",
        title: "Where do you live?",
        description: "🌍 Help us connect you with local travelers",
        type: "location",
        required: true,
        placeholder: "Start typing your country or city..."
    },
    {
        id: 4,
        section: "A",
        title: "What's your preferred language?",
        type: "radio",
        required: true,
        options: [
            "English",
            "Turkish",
            "Arabic", 
            "Spanish",
            "French",
            { text: "Other", hasInput: true }
        ]
    },
    {
        id: 5,
        section: "A",
        title: "How did you hear about Shippyar?",
        type: "radio",
        required: true,
        options: [
            "Social Media (Instagram / LinkedIn / TikTok)",
            "Friend or referral",
            "Online ad or blog",
            { text: "Other", hasInput: true }
        ]
    },
    
    // Section B - User Type (Determines which questions to show next)
    {
        id: 6,
        section: "B",
        title: "🎯 Which best describes you?",
        description: "This helps us show you the most relevant questions!",
        type: "radio",
        required: true,
        options: [
            "✈️ Frequent international traveler",
            "📦 Online store owner / e-commerce seller", 
            "🎓 Student living abroad",
            "🛍️ Buyer / recipient of items from other countries",
            "👨‍👩‍👧‍👦 Expat sending items to family back home",
            "🔍 Just exploring / curious about Shippyar"
        ],
        branching: true // This question determines the path
    },
    {
        id: 7,
        section: "B",
        title: "What's your age group?",
        type: "radio",
        required: true,
        options: ["18–24", "25–34", "35–44", "45–54", "55+"]
    },
    
    // Dynamic Questions Based on User Type
    // For Travelers
    {
        id: 8,
        section: "T",
        title: "✈️ How often do you travel internationally?",
        type: "radio",
        required: true,
        showIf: ["✈️ Frequent international traveler"],
        options: ["Weekly", "Monthly", "A few times a year", "Rarely"]
    },
    {
        id: 9,
        section: "T", 
        title: "💼 What's your typical luggage situation when you travel?",
        type: "radio",
        required: true,
        showIf: ["✈️ Frequent international traveler"],
        options: [
            "Always have extra luggage space",
            "Sometimes have space",
            "Usually full",
            "Depends on the trip"
        ]
    },
    {
        id: 10,
        section: "T",
        title: "💰 Would you be open to earning money by sharing extra luggage space?",
        type: "radio",
        required: true,
        showIf: ["✈️ Frequent international traveler"],
        options: [
            "Definitely! 💸",
            "Maybe, if it feels safe",
            "Not sure yet"
        ]
    },
    
    // For Shippers/Sellers
    {
        id: 11,
        section: "S",
        title: "📦 How often do you send international packages?",
        type: "radio",
        required: true,
        showIf: ["📦 Online store owner / e-commerce seller", "👨‍👩‍👧‍👦 Expat sending items to family back home"],
        options: ["Weekly", "Monthly", "A few times a year", "Rarely"]
    },
    {
        id: 12,
        section: "S",
        title: "🛍️ What types of items do you usually send?",
        description: "Select up to 3",
        type: "checkbox",
        required: true,
        maxSelections: 3,
        showIf: ["📦 Online store owner / e-commerce seller", "👨‍👩‍👧‍👦 Expat sending items to family back home"],
        options: [
            "Personal items / gifts",
            "Clothing / accessories",
            "Electronics",
            "Business samples / products",
            "Documents / paperwork",
            "Food or local products",
            { text: "Other", hasInput: true }
        ]
    },
    {
        id: 13,
        section: "S",
        title: "💵 What's the typical value of items you ship?",
        type: "radio",
        required: true,
        showIf: ["📦 Online store owner / e-commerce seller", "👨‍👩‍👧‍👦 Expat sending items to family back home"],
        options: ["Under $50", "$50–200", "$200–500", "$500+"]
    },
    
    // For Buyers
    {
        id: 14,
        section: "B",
        title: "🛒 How often do you receive international packages?",
        type: "radio",
        required: true,
        showIf: ["🛍️ Buyer / recipient of items from other countries", "🎓 Student living abroad"],
        options: ["Weekly", "Monthly", "A few times a year", "Rarely"]
    },
    {
        id: 15,
        section: "B",
        title: "🎁 What types of items do you usually receive?",
        description: "Select up to 3",
        type: "checkbox",
        required: true,
        maxSelections: 3,
        showIf: ["🛍️ Buyer / recipient of items from other countries", "🎓 Student living abroad"],
        options: [
            "Personal items / gifts",
            "Clothing / accessories",
            "Electronics",
            "Business samples / products",
            "Documents / paperwork",
            "Food or local products",
            { text: "Other", hasInput: true }
        ]
    },
    
    // Final Questions (Always shown)
    {
        id: 16,
        section: "F",
        title: "🎯 What matters most to you when shipping?",
        type: "radio",
        required: true,
        options: [
            "💰 Cost savings",
            "⚡ Speed of delivery",
            "🔒 Safety & reliability",
            "🎛️ Flexibility (choose traveler / schedule)"
        ]
    },
    {
        id: 17,
        section: "F",
        title: "🚀 How likely are you to try Shippyar when it launches?",
        type: "radio",
        required: true,
        options: ["Definitely! 🎉", "Probably", "Not sure yet", "Probably not"]
    },
    {
        id: 18,
        section: "G",
        title: "🎁 Follow us for extra giveaway entries:",
        type: "checkbox",
        required: false,
        options: [
            "✅ I followed Shippyar on LinkedIn",
            "✅ I followed Shippyar on Instagram", 
            "✅ I joined Shippyar's Telegram channel"
        ]
    },
    {
        id: 19,
        section: "H",
        title: "🎯 Would you like to join Shippyar's early access group?",
        type: "radio",
        required: true,
        options: ["Yes, I'd love to! 🚀"]
    }
];

// Global variables
let currentQuestionIndex = 0;
let answers = {};
let totalQuestions = questions.length;
let filteredQuestions = [];
let userType = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateProgressBar();
    updateQuestionCounter();
});

// Filter questions based on user type
function filterQuestions() {
    filteredQuestions = questions.filter(question => {
        // Always show basic questions (1-7)
        if (question.id <= 7) return true;
        
        // Show questions based on user type
        if (question.showIf && userType) {
            return question.showIf.includes(userType);
        }
        
        // Show final questions (16-19) to everyone
        if (question.id >= 16) return true;
        
        return false;
    });
    
    totalQuestions = filteredQuestions.length;
    updateQuestionCounter();
}

// Start questionnaire
function startQuestionnaire() {
    document.getElementById('landing-page').classList.remove('active');
    document.getElementById('questionnaire').classList.add('active');
    filteredQuestions = questions.filter(q => q.id <= 7); // Start with basic questions
    totalQuestions = filteredQuestions.length;
    showQuestion(0);
}

// Show specific question
function showQuestion(index) {
    if (index < 0 || index >= filteredQuestions.length) return;
    
    currentQuestionIndex = index;
    const question = filteredQuestions[index];
    
    updateProgressBar();
    updateQuestionCounter();
    renderQuestion(question);
    updateNavigationButtons();
}

// Render question content
function renderQuestion(question) {
    const content = document.getElementById('question-content');
    
    let html = `
        <div class="question-title">${question.title}</div>
        ${question.description ? `<div class="question-description">${question.description}</div>` : ''}
    `;
    
    if (question.type === 'text' || question.type === 'email') {
        html += `
            <input type="${question.type}" 
                   class="input-field" 
                   placeholder="${question.placeholder || ''}"
                   value="${answers[question.id] || ''}"
                   onchange="saveAnswer(${question.id}, this.value)"
                   required="${question.required}">
        `;
    } else if (question.type === 'location') {
        html += `
            <div class="location-container">
                <input type="text" 
                       class="input-field" 
                       placeholder="${question.placeholder || ''}"
                       value="${answers[question.id] || ''}"
                       oninput="handleLocationInput(${question.id}, this.value)"
                       onchange="saveAnswer(${question.id}, this.value)"
                       required="${question.required}">
                <div class="location-suggestions" id="suggestions-${question.id}" style="display: none;"></div>
            </div>
        `;
    } else if (question.type === 'textarea') {
        html += `
            <textarea class="input-field" 
                      placeholder="${question.placeholder || ''}"
                      rows="4"
                      onchange="saveAnswer(${question.id}, this.value)"
                      required="${question.required}">${answers[question.id] || ''}</textarea>
        `;
    } else if (question.type === 'radio') {
        html += '<div class="question-options">';
        question.options.forEach((option, index) => {
            const optionText = typeof option === 'string' ? option : option.text;
            const hasInput = typeof option === 'object' && option.hasInput;
            const isSelected = answers[question.id] === optionText;
            
            html += `
                <div class="option ${isSelected ? 'selected' : ''}" onclick="selectRadioOption(${question.id}, '${optionText}', ${hasInput})">
                    <input type="radio" 
                           name="question_${question.id}" 
                           value="${optionText}"
                           ${isSelected ? 'checked' : ''}>
                    <label>${optionText}</label>
                </div>
            `;
            
            if (hasInput && isSelected) {
                html += `
                    <input type="text" 
                           class="input-field" 
                           placeholder="Please specify..."
                           value="${answers[question.id + '_input'] || ''}"
                           onchange="saveAnswer(${question.id + '_input'}, this.value)"
                           style="margin-top: 10px;">
                `;
            }
        });
        html += '</div>';
    } else if (question.type === 'checkbox') {
        html += '<div class="question-options">';
        question.options.forEach((option, index) => {
            const optionText = typeof option === 'string' ? option : option.text;
            const hasInput = typeof option === 'object' && option.hasInput;
            const isSelected = answers[question.id] && answers[question.id].includes(optionText);
            
            html += `
                <div class="option ${isSelected ? 'selected' : ''}" onclick="selectCheckboxOption(${question.id}, '${optionText}', ${hasInput}, ${question.maxSelections || 999})">
                    <input type="checkbox" 
                           value="${optionText}"
                           ${isSelected ? 'checked' : ''}>
                    <label>${optionText}</label>
                </div>
            `;
            
            if (hasInput && isSelected) {
                html += `
                    <input type="text" 
                           class="input-field" 
                           placeholder="Please specify..."
                           value="${answers[question.id + '_input'] || ''}"
                           onchange="saveAnswer(${question.id + '_input'}, this.value)"
                           style="margin-top: 10px;">
                `;
            }
        });
        html += '</div>';
    }
    
    content.innerHTML = html;
}

// Save answer
function saveAnswer(questionId, value) {
    answers[questionId] = value;
    
    // Check if this is the user type question (question 6)
    if (questionId === 6) {
        userType = value;
        // Filter questions and update the questionnaire
        filterQuestions();
        // Update current question index to continue with filtered questions
        currentQuestionIndex = filteredQuestions.findIndex(q => q.id === questionId);
    }
}

// Handle location input for auto-suggestions
function handleLocationInput(questionId, value) {
    if (value.length < 2) {
        hideSuggestions(questionId);
        return;
    }
    
    const suggestions = [...countries, ...cities].filter(item => 
        item.toLowerCase().includes(value.toLowerCase())
    ).slice(0, 5);
    
    showSuggestions(questionId, suggestions);
}

// Show location suggestions
function showSuggestions(questionId, suggestions) {
    const suggestionsDiv = document.getElementById(`suggestions-${questionId}`);
    if (!suggestionsDiv || suggestions.length === 0) return;
    
    suggestionsDiv.innerHTML = suggestions.map(suggestion => 
        `<div class="suggestion-item" onclick="selectSuggestion(${questionId}, '${suggestion}')">${suggestion}</div>`
    ).join('');
    suggestionsDiv.style.display = 'block';
}

// Hide location suggestions
function hideSuggestions(questionId) {
    const suggestionsDiv = document.getElementById(`suggestions-${questionId}`);
    if (suggestionsDiv) {
        suggestionsDiv.style.display = 'none';
    }
}

// Select a suggestion
function selectSuggestion(questionId, suggestion) {
    const input = document.querySelector(`input[oninput*="handleLocationInput(${questionId}"]`);
    if (input) {
        input.value = suggestion;
        saveAnswer(questionId, suggestion);
    }
    hideSuggestions(questionId);
}

// Select radio option
function selectRadioOption(questionId, value, hasInput) {
    answers[questionId] = value;
    renderQuestion(questions[currentQuestionIndex]);
}

// Select checkbox option
function selectCheckboxOption(questionId, value, hasInput, maxSelections) {
    if (!answers[questionId]) {
        answers[questionId] = [];
    }
    
    const currentAnswers = answers[questionId];
    const index = currentAnswers.indexOf(value);
    
    if (index > -1) {
        currentAnswers.splice(index, 1);
    } else {
        if (currentAnswers.length < maxSelections) {
            currentAnswers.push(value);
        }
    }
    
    answers[questionId] = currentAnswers;
    renderQuestion(questions[currentQuestionIndex]);
}

// Navigation functions
function nextQuestion() {
    // Validate current question before proceeding
    if (!validateCurrentQuestion()) {
        return;
    }
    
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    } else {
        submitQuestionnaire();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

// Validate current question
function validateCurrentQuestion() {
    const question = filteredQuestions[currentQuestionIndex];
    if (!question.required) return true;
    
    const answer = answers[question.id];
    
    if (!answer || (typeof answer === 'string' && answer.trim() === '')) {
        alert(`Please answer this question before continuing.`);
        return false;
    }
    
    if (question.type === 'checkbox' && (!Array.isArray(answer) || answer.length === 0)) {
        alert(`Please select at least one option.`);
        return false;
    }
    
    if (question.type === 'email' && answer && !isValidEmail(answer)) {
        alert(`Please enter a valid email address.`);
        return false;
    }
    
    return true;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Update progress bar
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

// Update question counter
function updateQuestionCounter() {
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = filteredQuestions.length;
}

// Update navigation buttons
function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    prevButton.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === filteredQuestions.length - 1) {
        nextButton.innerHTML = '🎉 Submit & Win! <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>';
    } else {
        nextButton.innerHTML = 'Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    }
}

// Submit questionnaire
function submitQuestionnaire() {
    // Here you would typically send the data to a server
    console.log('Questionnaire submitted:', answers);
    
    // Show thank you page
    document.getElementById('questionnaire').classList.remove('active');
    document.getElementById('thank-you').classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (document.getElementById('questionnaire').classList.contains('active')) {
        if (e.key === 'ArrowRight' || e.key === 'Enter') {
            e.preventDefault();
            nextQuestion();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            previousQuestion();
        }
    }
});
