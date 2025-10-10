// Questionnaire data structure
const questions = [
    // Section A - Basic Information
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
        description: "We'll use this for early access & giveaway confirmation",
        type: "email",
        required: true,
        placeholder: "Enter your email address"
    },
    {
        id: 3,
        section: "A",
        title: "Where do you live?",
        type: "text",
        required: true,
        placeholder: "Country / City of Residence"
    },
    {
        id: 4,
        section: "A",
        title: "What's your preferred language?",
        type: "radio",
        required: true,
        options: [
            "English",
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
    
    // Section B - About You & Your Lifestyle
    {
        id: 6,
        section: "B",
        title: "Which best describes you?",
        description: "Select all that apply",
        type: "checkbox",
        required: true,
        options: [
            "Frequent international traveler",
            "Online store owner / e-commerce seller",
            "Student living abroad",
            "Buyer / recipient of items from other countries",
            "Expat sending items to family back home",
            "Just exploring / curious about Shippyar"
        ]
    },
    {
        id: 7,
        section: "B",
        title: "What's your age group?",
        type: "radio",
        required: true,
        options: ["18–24", "25–34", "35–44", "45–54", "55+"]
    },
    {
        id: 8,
        section: "B",
        title: "What's your occupation or industry?",
        type: "radio",
        required: true,
        options: [
            "Student",
            "Freelancer / Entrepreneur",
            "Retail / E-commerce",
            "Logistics / Shipping",
            { text: "Other", hasInput: true }
        ]
    },
    
    // Section C - Shipping & Shopping Habits
    {
        id: 9,
        section: "C",
        title: "How often do you send or receive international packages?",
        type: "radio",
        required: true,
        options: ["Weekly", "Monthly", "A few times a year", "Rarely"]
    },
    {
        id: 10,
        section: "C",
        title: "What types of items do you usually send or receive?",
        description: "Select up to 3",
        type: "checkbox",
        required: true,
        maxSelections: 3,
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
        id: 11,
        section: "C",
        title: "What's the typical value of items you ship or receive?",
        type: "radio",
        required: true,
        options: ["Under $50", "$50–200", "$200–500", "$500+"]
    },
    {
        id: 12,
        section: "C",
        title: "Where do you most often ship to/from?",
        type: "text",
        required: true,
        placeholder: "From Country / To Country"
    },
    {
        id: 13,
        section: "C",
        title: "How do you currently handle shipping or delivery?",
        type: "radio",
        required: true,
        options: [
            "Traditional courier (DHL, FedEx, UPS, etc.)",
            "Postal services",
            "Hand-carried by friends or family",
            "I usually don't ship internationally"
        ]
    },
    
    // Section D - Travelers Only
    {
        id: 14,
        section: "D",
        title: "Do you travel internationally?",
        type: "radio",
        required: true,
        options: ["Yes, regularly", "Occasionally", "No"]
    },
    {
        id: 15,
        section: "D",
        title: "How many trips do you take per year?",
        type: "radio",
        required: true,
        options: ["1–2", "3–5", "6–10", "10+"],
        conditional: { dependsOn: 14, showIf: ["Yes, regularly", "Occasionally"] }
    },
    {
        id: 16,
        section: "D",
        title: "What's your typical luggage situation when you travel?",
        type: "radio",
        required: true,
        options: [
            "Always have extra luggage space",
            "Sometimes have space",
            "Usually full",
            "Depends on the trip"
        ],
        conditional: { dependsOn: 14, showIf: ["Yes, regularly", "Occasionally"] }
    },
    {
        id: 17,
        section: "D",
        title: "Would you be open to earning money by sharing extra luggage space with verified senders?",
        type: "radio",
        required: true,
        options: [
            "Definitely",
            "Maybe, if it feels safe",
            "Not sure yet"
        ],
        conditional: { dependsOn: 14, showIf: ["Yes, regularly", "Occasionally"] }
    },
    
    // Section E - Trust, Safety & User Expectations
    {
        id: 18,
        section: "E",
        title: "What worries you most about international shipping?",
        type: "radio",
        required: true,
        options: [
            "High shipping costs",
            "Delays or uncertainty",
            "Lost / damaged items",
            "Customs and regulations",
            "Lack of trust in unknown people"
        ]
    },
    {
        id: 19,
        section: "E",
        title: "If you could send packages through verified travelers, how comfortable would you feel?",
        type: "radio",
        required: true,
        options: [
            "Very comfortable",
            "Somewhat comfortable",
            "Neutral",
            "Not comfortable"
        ]
    },
    {
        id: 20,
        section: "E",
        title: "What would make you trust a platform like Shippyar the most?",
        description: "Pick up to 3",
        type: "checkbox",
        required: true,
        maxSelections: 3,
        options: [
            "Verified traveler identity & ID check",
            "Insurance or package coverage",
            "Live tracking system",
            "Secure escrow payment",
            "Ratings & user reviews",
            "24/7 customer support",
            "Built-in chat between sender & traveler"
        ]
    },
    {
        id: 21,
        section: "E",
        title: "What matters most to you when shipping?",
        type: "radio",
        required: true,
        options: [
            "Cost savings",
            "Speed of delivery",
            "Safety & reliability",
            "Flexibility (choose traveler / schedule)"
        ]
    },
    
    // Section F - Product Feedback & Interest
    {
        id: 22,
        section: "F",
        title: "What feature would you find most useful in Shippyar?",
        type: "radio",
        required: true,
        options: [
            "Smart matching (find travelers going your way)",
            "Real-time tracking & updates",
            "Transparent pricing",
            "In-app communication",
            "Built-in insurance",
            "Traveler reward system"
        ]
    },
    {
        id: 23,
        section: "F",
        title: "Which side are you most interested in?",
        type: "radio",
        required: true,
        options: [
            "I want to send packages",
            "I want to carry packages and earn",
            "Both"
        ]
    },
    {
        id: 24,
        section: "F",
        title: "If you could improve one thing about shipping today, what would it be?",
        type: "textarea",
        required: true,
        placeholder: "Share your thoughts..."
    },
    {
        id: 25,
        section: "F",
        title: "How likely are you to try Shippyar when it launches?",
        type: "radio",
        required: true,
        options: ["Definitely", "Probably", "Not sure yet", "Probably not"]
    },
    
    // Section G - Community & Rewards
    {
        id: 26,
        section: "G",
        title: "Follow us for extra giveaway entries:",
        type: "checkbox",
        required: false,
        options: [
            "I followed Shippyar on LinkedIn",
            "I followed Shippyar on Instagram",
            "I joined Shippyar's Telegram channel"
        ]
    },
    {
        id: 27,
        section: "G",
        title: "Want to invite friends and earn more chances to win?",
        type: "radio",
        required: false,
        options: ["Yes — send me my unique referral link"]
    },
    
    // Section H - Early Access
    {
        id: 28,
        section: "H",
        title: "Would you like to join Shippyar's early access group and receive updates?",
        type: "radio",
        required: true,
        options: ["Yes, I'd love to"]
    }
];

// Global variables
let currentQuestionIndex = 0;
let answers = {};
let totalQuestions = questions.length;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateProgressBar();
    updateQuestionCounter();
});

// Start questionnaire
function startQuestionnaire() {
    document.getElementById('landing-page').classList.remove('active');
    document.getElementById('questionnaire').classList.add('active');
    showQuestion(0);
}

// Show specific question
function showQuestion(index) {
    if (index < 0 || index >= totalQuestions) return;
    
    currentQuestionIndex = index;
    const question = questions[index];
    
    // Check if question should be shown based on conditions
    if (question.conditional) {
        const dependentAnswer = answers[question.conditional.dependsOn];
        if (!question.conditional.showIf.includes(dependentAnswer)) {
            // Skip this question and go to next
            if (index < totalQuestions - 1) {
                showQuestion(index + 1);
                return;
            } else {
                submitQuestionnaire();
                return;
            }
        }
    }
    
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
