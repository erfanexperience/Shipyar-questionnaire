// Questionnaire data structure - Simplified and Dynamic
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
        description: "🎁 We'll use this to send you your Amazon Gift Card if you win!",
        type: "email",
        required: true,
        placeholder: "Enter your email address"
    },
    {
        id: 3,
        section: "A",
        title: "Where do you live?",
        type: "location",
        required: true,
        placeholder: "Start typing your country/city..."
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
    
    // Section B - User Type (Determines which path to follow)
    {
        id: 6,
        section: "B",
        title: "🎯 Which best describes you?",
        description: "This helps us show you the most relevant questions!",
        type: "radio",
        required: true,
        options: [
            "✈️ I'm a frequent traveler",
            "📦 I ship packages regularly", 
            "🛍️ I buy items from other countries",
            "🤔 Just exploring - not sure yet"
        ]
    },
    
    // Section C - Age & Motivation
    {
        id: 7,
        section: "C",
        title: "What's your age group?",
        type: "radio",
        required: true,
        options: ["18–24", "25–34", "35–44", "45–54", "55+"]
    },
    
    // Section D - Dynamic Questions Based on User Type
    // Traveler Questions
    {
        id: 8,
        section: "D",
        title: "✈️ How often do you travel internationally?",
        type: "radio",
        required: true,
        options: ["Monthly or more", "A few times a year", "Once a year", "Rarely"],
        conditional: { dependsOn: 6, showIf: ["✈️ I'm a frequent traveler"] }
    },
    {
        id: 9,
        section: "D", 
        title: "💼 Would you be interested in earning money by carrying packages for others?",
        type: "radio",
        required: true,
        options: ["💰 Yes, sounds great!", "🤔 Maybe, if it's safe", "❌ Not interested"],
        conditional: { dependsOn: 6, showIf: ["✈️ I'm a frequent traveler"] }
    },
    
    // Shipper Questions
    {
        id: 10,
        section: "D",
        title: "📦 How often do you ship packages internationally?",
        type: "radio", 
        required: true,
        options: ["Weekly", "Monthly", "A few times a year", "Rarely"],
        conditional: { dependsOn: 6, showIf: ["📦 I ship packages regularly"] }
    },
    {
        id: 11,
        section: "D",
        title: "💸 What's your biggest shipping challenge?",
        type: "radio",
        required: true,
        options: ["💸 High costs", "⏰ Slow delivery", "😰 Worried about safety", "📋 Complex customs"],
        conditional: { dependsOn: 6, showIf: ["📦 I ship packages regularly"] }
    },
    
    // Buyer Questions
    {
        id: 12,
        section: "D",
        title: "🛍️ What do you usually buy from other countries?",
        type: "checkbox",
        required: true,
        maxSelections: 3,
        options: ["👕 Clothing & accessories", "📱 Electronics", "🎁 Gifts", "🍯 Local products", "📚 Books & media"],
        conditional: { dependsOn: 6, showIf: ["🛍️ I buy items from other countries"] }
    },
    
    // Universal Questions
    {
        id: 13,
        section: "E",
        title: "🔒 What would make you trust Shippyar most?",
        description: "Pick your top 2",
        type: "checkbox",
        required: true,
        maxSelections: 2,
        options: [
            "🆔 Verified user profiles",
            "🛡️ Insurance coverage", 
            "📍 Live tracking",
            "⭐ User reviews",
            "💬 Direct chat with users"
        ]
    },
    {
        id: 14,
        section: "F",
        title: "🎁 How excited are you to try Shippyar?",
        type: "radio",
        required: true,
        options: ["🚀 Super excited!", "😊 Pretty excited", "🤔 Curious to try", "😐 Not sure yet"]
    },
    {
        id: 15,
        section: "G",
        title: "🎉 Ready to join early access and win prizes?",
        description: "Follow us for extra chances to win!",
        type: "checkbox",
        required: false,
        options: [
            "✅ Yes, send me early access updates!",
            "📱 I followed on Instagram",
            "💼 I followed on LinkedIn"
        ]
    }
];

// Global variables
let currentQuestionIndex = 0;
let answers = {};
let totalQuestions = questions.length;
let filteredQuestions = [];

// Location suggestions data
const locationSuggestions = [
    "United States", "Canada", "United Kingdom", "Germany", "France", "Spain", "Italy", "Netherlands", "Sweden", "Norway",
    "Australia", "Japan", "South Korea", "Singapore", "United Arab Emirates", "Saudi Arabia", "Turkey", "Brazil", "Mexico", "Argentina",
    "New York", "Los Angeles", "London", "Paris", "Berlin", "Madrid", "Rome", "Amsterdam", "Stockholm", "Oslo",
    "Sydney", "Tokyo", "Seoul", "Singapore", "Dubai", "Riyadh", "Istanbul", "São Paulo", "Mexico City", "Buenos Aires"
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateProgressBar();
    updateQuestionCounter();
});

// Start questionnaire
function startQuestionnaire() {
    document.getElementById('landing-page').classList.remove('active');
    document.getElementById('questionnaire').classList.add('active');
    
    // Initialize with all questions, filtering will happen after user selects type
    filteredQuestions = questions;
    totalQuestions = questions.length;
    currentQuestionIndex = 0;
    
    showQuestion(0);
}

// Filter questions based on user answers
function filterQuestions() {
    filteredQuestions = questions.filter(question => {
        if (!question.conditional) return true;
        
        const dependentAnswer = answers[question.conditional.dependsOn];
        return question.conditional.showIf.includes(dependentAnswer);
    });
    
    totalQuestions = filteredQuestions.length;
}

// Show specific question
function showQuestion(index) {
    if (index < 0 || index >= totalQuestions) return;
    
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
                   onchange="saveAnswer(${question.id}, this.value)">
        `;
    } else if (question.type === 'location') {
        html += `
            <div class="location-container">
                <input type="text" 
                       class="input-field location-input" 
                       placeholder="${question.placeholder || ''}"
                       value="${answers[question.id] || ''}"
                       oninput="handleLocationInput(this, ${question.id})"
                       onchange="saveAnswer(${question.id}, this.value)">
                <div class="location-suggestions" id="suggestions-${question.id}"></div>
            </div>
        `;
    } else if (question.type === 'textarea') {
        html += `
            <textarea class="input-field" 
                      placeholder="${question.placeholder || ''}"
                      rows="4"
                      onchange="saveAnswer(${question.id}, this.value)">${answers[question.id] || ''}</textarea>
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
    
    // If this is question 6 (user type), filter questions
    if (questionId === 6) {
        filterQuestions();
        // Reset to first question of filtered set
        currentQuestionIndex = 0;
        showQuestion(0);
        return;
    }
}

// Handle location input with auto-suggestions
function handleLocationInput(input, questionId) {
    const value = input.value.toLowerCase();
    const suggestions = document.getElementById(`suggestions-${questionId}`);
    
    if (value.length < 2) {
        suggestions.innerHTML = '';
        return;
    }
    
    const matches = locationSuggestions.filter(location => 
        location.toLowerCase().includes(value)
    ).slice(0, 5);
    
    if (matches.length > 0) {
        suggestions.innerHTML = matches.map(match => 
            `<div class="suggestion-item" onclick="selectSuggestion('${match}', ${questionId})">${match}</div>`
        ).join('');
    } else {
        suggestions.innerHTML = '';
    }
}

// Select a location suggestion
function selectSuggestion(location, questionId) {
    const input = document.querySelector(`#suggestions-${questionId}`).previousElementSibling;
    input.value = location;
    saveAnswer(questionId, location);
    document.getElementById(`suggestions-${questionId}`).innerHTML = '';
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
    if (currentQuestionIndex < totalQuestions - 1) {
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

// Update progress bar
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

// Update question counter
function updateQuestionCounter() {
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = totalQuestions;
}

// Update navigation buttons
function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    prevButton.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === totalQuestions - 1) {
        nextButton.innerHTML = 'Submit <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>';
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
