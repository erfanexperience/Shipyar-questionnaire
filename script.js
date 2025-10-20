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

// Translations object
const translations = {
    English: {
        q5: { title: "How did you hear about Shippyar?", options: ["Social Media (Instagram / LinkedIn / TikTok)", "Friend or referral", "Online ad or blog", "Other"] },
        q6: { title: "🎯 Which best describes you?", description: "This helps us show you the most relevant questions!", options: ["✈️ Frequent Traveler", "📦 Seller/Shipper", "🛍️ Buyer", "🔍 Just Exploring"] },
        q7: { title: "What's your age group?", options: ["18–24", "25–34", "35–44", "45–54", "55+"] },
        q8: { title: "✈️ How often do you travel internationally?", options: ["Weekly", "Monthly", "A few times a year", "Rarely"] },
        q9: { title: "💼 What's your typical luggage situation?", options: ["Always have extra space", "Sometimes have space", "Usually full", "Depends on the trip"] },
        q10: { title: "💰 Would you earn money by sharing luggage space?", options: ["Definitely! 💸", "Maybe, if it feels safe", "Not sure yet"] },
        q11: { title: "📦 How often do you send packages internationally?", options: ["Weekly", "Monthly", "A few times a year", "Rarely"] },
        q12: { title: "🛍️ What types of items do you send?", description: "Select up to 3", options: ["Personal items / gifts", "Clothing / accessories", "Electronics", "Business samples", "Documents", "Food products", "Other"] },
        q13: { title: "💵 Typical value of items you ship?", options: ["Under $50", "$50–200", "$200–500", "$500+"] },
        q14: { title: "🛒 How often do you receive packages internationally?", options: ["Weekly", "Monthly", "A few times a year", "Rarely"] },
        q15: { title: "🎁 What types of items do you receive?", description: "Select up to 3", options: ["Personal items / gifts", "Clothing / accessories", "Electronics", "Business samples", "Documents", "Food products", "Other"] },
        q16: { title: "🎯 What matters most to you when shipping?", options: ["💰 Cost savings", "⚡ Speed of delivery", "🔒 Safety & reliability", "🎛️ Flexibility"] },
        q17: { title: "🚀 How likely are you to try Shippyar?", options: ["Definitely! 🎉", "Probably", "Not sure yet", "Probably not"] },
        q18: { title: "🎁 Follow us for extra giveaway entries:", options: ["✅ Followed on LinkedIn", "✅ Followed on Instagram", "✅ Joined Telegram"] },
        q19: { title: "🎯 Join early access group?", options: ["Yes, I'd love to! 🚀"] }
    },
    Turkish: {
        q5: { title: "Shippyar'ı nereden duydunuz?", options: ["Sosyal Medya (Instagram / LinkedIn / TikTok)", "Arkadaş veya tavsiye", "Online reklam veya blog", "Diğer"] },
        q6: { title: "🎯 Sizi en iyi hangisi tanımlar?", description: "Bu, size en uygun soruları göstermemize yardımcı olur!", options: ["✈️ Sık Seyahat Eden", "📦 Satıcı/Gönderen", "🛍️ Alıcı", "🔍 Sadece Keşfediyorum"] },
        q7: { title: "Yaş grubunuz nedir?", options: ["18–24", "25–34", "35–44", "45–54", "55+"] },
        q8: { title: "✈️ Ne sıklıkla uluslararası seyahat ediyorsunuz?", options: ["Haftalık", "Aylık", "Yılda birkaç kez", "Nadiren"] },
        q9: { title: "💼 Bagaj durumunuz genellikle nasıl?", options: ["Her zaman ekstra yer var", "Bazen yer var", "Genellikle dolu", "Yolculuğa bağlı"] },
        q10: { title: "💰 Bagaj alanı paylaşarak para kazanır mısınız?", options: ["Kesinlikle! 💸", "Belki, güvenliyse", "Emin değilim"] },
        q11: { title: "📦 Ne sıklıkla uluslararası paket gönderiyorsunuz?", options: ["Haftalık", "Aylık", "Yılda birkaç kez", "Nadiren"] },
        q12: { title: "🛍️ Hangi tür eşyaları gönderiyorsunuz?", description: "En fazla 3 seçin", options: ["Kişisel eşyalar / hediyeler", "Giyim / aksesuar", "Elektronik", "İş örnekleri", "Belgeler", "Gıda ürünleri", "Diğer"] },
        q13: { title: "💵 Gönderdiğiniz eşyaların tipik değeri?", options: ["50$'ın altında", "$50–200", "$200–500", "$500+"] },
        q14: { title: "🛒 Ne sıklıkla uluslararası paket alıyorsunuz?", options: ["Haftalık", "Aylık", "Yılda birkaç kez", "Nadiren"] },
        q15: { title: "🎁 Hangi tür eşyaları alıyorsunuz?", description: "En fazla 3 seçin", options: ["Kişisel eşyalar / hediyeler", "Giyim / aksesuar", "Elektronik", "İş örnekleri", "Belgeler", "Gıda ürünleri", "Diğer"] },
        q16: { title: "🎯 Gönderimde sizin için en önemli olan nedir?", options: ["💰 Maliyet tasarrufu", "⚡ Teslimat hızı", "🔒 Güvenlik & güvenilirlik", "🎛️ Esneklik"] },
        q17: { title: "🚀 Shippyar'ı deneme olasılığınız nedir?", options: ["Kesinlikle! 🎉", "Muhtemelen", "Emin değilim", "Muhtemelen hayır"] },
        q18: { title: "🎁 Ekstra çekiliş girişi için bizi takip edin:", options: ["✅ LinkedIn'de takip ettim", "✅ Instagram'da takip ettim", "✅ Telegram'a katıldım"] },
        q19: { title: "🎯 Erken erişim grubuna katılmak ister misiniz?", options: ["Evet, çok isterim! 🚀"] }
    },
    Arabic: {
        q5: { title: "كيف سمعت عن Shippyar؟", options: ["وسائل التواصل الاجتماعي", "صديق أو إحالة", "إعلان أو مدونة عبر الإنترنت", "آخر"] },
        q6: { title: "🎯 أي من هذه يصفك بشكل أفضل؟", description: "هذا يساعدنا في عرض الأسئلة الأكثر صلة!", options: ["✈️ مسافر متكرر", "📦 بائع/شاحن", "🛍️ مشتري", "🔍 مجرد استكشاف"] },
        q7: { title: "ما هي فئتك العمرية؟", options: ["18–24", "25–34", "35–44", "45–54", "55+"] },
        q8: { title: "✈️ كم مرة تسافر دوليًا؟", options: ["أسبوعيًا", "شهريًا", "عدة مرات في السنة", "نادرًا"] },
        q9: { title: "💼 ما هو وضع أمتعتك المعتاد؟", options: ["دائمًا لدي مساحة إضافية", "أحيانًا لدي مساحة", "عادة ممتلئة", "يعتمد على الرحلة"] },
        q10: { title: "💰 هل ترغب في كسب المال من خلال مشاركة مساحة الأمتعة؟", options: ["بالتأكيد! 💸", "ربما، إذا كان آمنًا", "غير متأكد بعد"] },
        q11: { title: "📦 كم مرة ترسل طرودًا دوليًا؟", options: ["أسبوعيًا", "شهريًا", "عدة مرات في السنة", "نادرًا"] },
        q12: { title: "🛍️ ما أنواع العناصر التي ترسلها؟", description: "اختر حتى 3", options: ["أغراض شخصية / هدايا", "ملابس / إكسسوارات", "إلكترونيات", "عينات تجارية", "وثائق", "منتجات غذائية", "آخر"] },
        q13: { title: "💵 القيمة المعتادة للعناصر التي ترسلها؟", options: ["أقل من 50 دولار", "$50–200", "$200–500", "$500+"] },
        q14: { title: "🛒 كم مرة تتلقى طرودًا دوليًا؟", options: ["أسبوعيًا", "شهريًا", "عدة مرات في السنة", "نادرًا"] },
        q15: { title: "🎁 ما أنواع العناصر التي تتلقاها؟", description: "اختر حتى 3", options: ["أغراض شخصية / هدايا", "ملابس / إكسسوارات", "إلكترونيات", "عينات تجارية", "وثائق", "منتجات غذائية", "آخر"] },
        q16: { title: "🎯 ما الأكثر أهمية بالنسبة لك عند الشحن؟", options: ["💰 توفير التكلفة", "⚡ سرعة التسليم", "🔒 الأمان والموثوقية", "🎛️ المرونة"] },
        q17: { title: "🚀 ما مدى احتمالية تجربة Shippyar؟", options: ["بالتأكيد! 🎉", "على الأرجح", "غير متأكد بعد", "على الأرجح لا"] },
        q18: { title: "🎁 تابعنا للحصول على إدخالات إضافية للسحب:", options: ["✅ تابعت على LinkedIn", "✅ تابعت على Instagram", "✅ انضممت إلى Telegram"] },
        q19: { title: "🎯 انضم إلى مجموعة الوصول المبكر؟", options: ["نعم، أحب ذلك! 🚀"] }
    },
    Spanish: {
        q5: { title: "¿Cómo te enteraste de Shippyar?", options: ["Redes sociales (Instagram / LinkedIn / TikTok)", "Amigo o referencia", "Anuncio o blog en línea", "Otro"] },
        q6: { title: "🎯 ¿Cuál te describe mejor?", description: "¡Esto nos ayuda a mostrarte las preguntas más relevantes!", options: ["✈️ Viajero Frecuente", "📦 Vendedor/Remitente", "🛍️ Comprador", "🔍 Solo Explorando"] },
        q7: { title: "¿Cuál es tu grupo de edad?", options: ["18–24", "25–34", "35–44", "45–54", "55+"] },
        q8: { title: "✈️ ¿Con qué frecuencia viajas internacionalmente?", options: ["Semanalmente", "Mensualmente", "Unas pocas veces al año", "Raramente"] },
        q9: { title: "💼 ¿Cuál es tu situación típica de equipaje?", options: ["Siempre tengo espacio extra", "A veces tengo espacio", "Usualmente lleno", "Depende del viaje"] },
        q10: { title: "💰 ¿Ganarías dinero compartiendo espacio de equipaje?", options: ["¡Definitivamente! 💸", "Tal vez, si se siente seguro", "No estoy seguro todavía"] },
        q11: { title: "📦 ¿Con qué frecuencia envías paquetes internacionales?", options: ["Semanalmente", "Mensualmente", "Unas pocas veces al año", "Raramente"] },
        q12: { title: "🛍️ ¿Qué tipos de artículos envías?", description: "Selecciona hasta 3", options: ["Artículos personales / regalos", "Ropa / accesorios", "Electrónica", "Muestras comerciales", "Documentos", "Productos alimenticios", "Otro"] },
        q13: { title: "💵 ¿Valor típico de artículos que envías?", options: ["Menos de $50", "$50–200", "$200–500", "$500+"] },
        q14: { title: "🛒 ¿Con qué frecuencia recibes paquetes internacionales?", options: ["Semanalmente", "Mensualmente", "Unas pocas veces al año", "Raramente"] },
        q15: { title: "🎁 ¿Qué tipos de artículos recibes?", description: "Selecciona hasta 3", options: ["Artículos personales / regalos", "Ropa / accesorios", "Electrónica", "Muestras comerciales", "Documentos", "Productos alimenticios", "Otro"] },
        q16: { title: "🎯 ¿Qué es lo más importante para ti al enviar?", options: ["💰 Ahorro de costos", "⚡ Velocidad de entrega", "🔒 Seguridad y confiabilidad", "🎛️ Flexibilidad"] },
        q17: { title: "🚀 ¿Qué tan probable es que pruebes Shippyar?", options: ["¡Definitivamente! 🎉", "Probablemente", "No estoy seguro todavía", "Probablemente no"] },
        q18: { title: "🎁 Síguenos para entradas extra al sorteo:", options: ["✅ Seguí en LinkedIn", "✅ Seguí en Instagram", "✅ Me uní a Telegram"] },
        q19: { title: "🎯 ¿Unirte al grupo de acceso anticipado?", options: ["¡Sí, me encantaría! 🚀"] }
    },
    French: {
        q5: { title: "Comment avez-vous entendu parler de Shippyar?", options: ["Médias sociaux (Instagram / LinkedIn / TikTok)", "Ami ou référence", "Annonce ou blog en ligne", "Autre"] },
        q6: { title: "🎯 Lequel vous décrit le mieux?", description: "Cela nous aide à vous montrer les questions les plus pertinentes!", options: ["✈️ Voyageur Fréquent", "📦 Vendeur/Expéditeur", "🛍️ Acheteur", "🔍 Juste Explorer"] },
        q7: { title: "Quel est votre groupe d'âge?", options: ["18–24", "25–34", "35–44", "45–54", "55+"] },
        q8: { title: "✈️ À quelle fréquence voyagez-vous internationalement?", options: ["Hebdomadaire", "Mensuel", "Quelques fois par an", "Rarement"] },
        q9: { title: "💼 Quelle est votre situation de bagages typique?", options: ["Toujours de l'espace supplémentaire", "Parfois de l'espace", "Généralement plein", "Dépend du voyage"] },
        q10: { title: "💰 Gagneriez-vous de l'argent en partageant l'espace de bagages?", options: ["Définitivement! 💸", "Peut-être, si c'est sûr", "Pas encore sûr"] },
        q11: { title: "📦 À quelle fréquence envoyez-vous des colis internationaux?", options: ["Hebdomadaire", "Mensuel", "Quelques fois par an", "Rarement"] },
        q12: { title: "🛍️ Quels types d'articles envoyez-vous?", description: "Sélectionnez jusqu'à 3", options: ["Articles personnels / cadeaux", "Vêtements / accessoires", "Électronique", "Échantillons commerciaux", "Documents", "Produits alimentaires", "Autre"] },
        q13: { title: "💵 Valeur typique des articles que vous expédiez?", options: ["Moins de 50$", "$50–200", "$200–500", "$500+"] },
        q14: { title: "🛒 À quelle fréquence recevez-vous des colis internationaux?", options: ["Hebdomadaire", "Mensuel", "Quelques fois par an", "Rarement"] },
        q15: { title: "🎁 Quels types d'articles recevez-vous?", description: "Sélectionnez jusqu'à 3", options: ["Articles personnels / cadeaux", "Vêtements / accessoires", "Électronique", "Échantillons commerciaux", "Documents", "Produits alimentaires", "Autre"] },
        q16: { title: "🎯 Qu'est-ce qui compte le plus pour vous lors de l'expédition?", options: ["💰 Économies de coûts", "⚡ Vitesse de livraison", "🔒 Sécurité et fiabilité", "🎛️ Flexibilité"] },
        q17: { title: "🚀 Quelle est la probabilité que vous essayiez Shippyar?", options: ["Définitivement! 🎉", "Probablement", "Pas encore sûr", "Probablement pas"] },
        q18: { title: "🎁 Suivez-nous pour des entrées supplémentaires au tirage:", options: ["✅ Suivi sur LinkedIn", "✅ Suivi sur Instagram", "✅ Rejoint Telegram"] },
        q19: { title: "🎯 Rejoindre le groupe d'accès anticipé?", options: ["Oui, j'adorerais! 🚀"] }
    }
};

// Question templates (ID-based structure)
const questionTemplates = [
    { id: 1, section: "A", title: "What's your full name?", type: "text", required: true, placeholder: "Enter your full name", alwaysShow: true },
    { id: 2, section: "A", title: "What's your email address?", description: "📧 We'll use this for early access & giveaway confirmation", type: "email", required: true, placeholder: "Enter your email address", alwaysShow: true },
    { id: 3, section: "A", title: "Where do you live?", description: "🌍 Help us connect you with local travelers", type: "location", required: true, placeholder: "Start typing your country or city...", alwaysShow: true },
    { id: 4, section: "A", title: "What's your preferred language?", type: "radio", required: true, options: ["English", "Turkish", "Arabic", "Spanish", "French", { text: "Other", hasInput: true }], alwaysShow: true, isLanguageSelect: true },
    { id: 5, section: "A", key: "q5", type: "radio", required: true, alwaysShow: true },
    { id: 6, section: "B", key: "q6", type: "radio", required: true, alwaysShow: true, branching: true },
    { id: 7, section: "B", key: "q7", type: "radio", required: true, alwaysShow: true },
    
    // Traveler questions
    { id: 8, section: "T", key: "q8", type: "radio", required: true, showIf: ["✈️ Frequent Traveler"] },
    { id: 9, section: "T", key: "q9", type: "radio", required: true, showIf: ["✈️ Frequent Traveler"] },
    { id: 10, section: "T", key: "q10", type: "radio", required: true, showIf: ["✈️ Frequent Traveler"] },
    
    // Seller/Shipper questions
    { id: 11, section: "S", key: "q11", type: "radio", required: true, showIf: ["📦 Seller/Shipper"] },
    { id: 12, section: "S", key: "q12", type: "checkbox", required: true, maxSelections: 3, showIf: ["📦 Seller/Shipper"] },
    { id: 13, section: "S", key: "q13", type: "radio", required: true, showIf: ["📦 Seller/Shipper"] },
    
    // Buyer questions
    { id: 14, section: "B", key: "q14", type: "radio", required: true, showIf: ["🛍️ Buyer"] },
    { id: 15, section: "B", key: "q15", type: "checkbox", required: true, maxSelections: 3, showIf: ["🛍️ Buyer"] },
    
    // Final questions (always shown)
    { id: 16, section: "F", key: "q16", type: "radio", required: true, alwaysShow: true },
    { id: 17, section: "F", key: "q17", type: "radio", required: true, alwaysShow: true },
    { id: 18, section: "G", key: "q18", type: "checkbox", required: false, alwaysShow: true },
    { id: 19, section: "H", key: "q19", type: "radio", required: true, alwaysShow: true }
];

// Global variables
let currentQuestionIndex = 0;
let answers = {};
let filteredQuestions = [];
let userType = null;
let selectedLanguage = "English";

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateProgressBar();
    updateQuestionCounter();
});

// Filter questions based on user type
function filterQuestions() {
    filteredQuestions = questionTemplates.filter(question => {
        // Always show basic questions
        if (question.alwaysShow) return true;
        
        // Show questions based on user type
        if (question.showIf && userType) {
            return question.showIf.some(type => userType.includes(type));
        }
        
        return false;
    });
    
    updateQuestionCounter();
}

// Start questionnaire
function startQuestionnaire() {
    document.getElementById('landing-page').classList.remove('active');
    document.getElementById('questionnaire').classList.add('active');
    filterQuestions(); // Start with all basic questions
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

// Get translated content
function getTranslatedContent(question) {
    if (!question.key || selectedLanguage === "English") {
        return question;
    }
    
    const translated = translations[selectedLanguage]?.[question.key];
    if (translated) {
        return {
            ...question,
            title: translated.title,
            description: translated.description,
            options: translated.options
        };
    }
    
    return question;
}

// Render question content
function renderQuestion(question) {
    const content = document.getElementById('question-content');
    const translatedQ = getTranslatedContent(question);
    
    let html = `
        <div class="question-title">${translatedQ.title}</div>
        ${translatedQ.description ? `<div class="question-description">${translatedQ.description}</div>` : ''}
    `;
    
    if (question.type === 'text' || question.type === 'email') {
        html += `
            <input type="${question.type}" 
                   class="input-field" 
                   placeholder="${translatedQ.placeholder || ''}"
                   value="${answers[question.id] || ''}"
                   onchange="saveAnswer(${question.id}, this.value)"
                   required="${question.required}">
        `;
    } else if (question.type === 'location') {
        html += `
            <div class="location-container">
                <input type="text" 
                       class="input-field" 
                       placeholder="${translatedQ.placeholder || ''}"
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
                      placeholder="${translatedQ.placeholder || ''}"
                      rows="4"
                      onchange="saveAnswer(${question.id}, this.value)"
                      required="${question.required}">${answers[question.id] || ''}</textarea>
        `;
    } else if (question.type === 'radio') {
        html += '<div class="question-options">';
        const options = translatedQ.options || question.options;
        options.forEach((option, index) => {
            const optionText = typeof option === 'string' ? option : option.text;
            const hasInput = typeof option === 'object' && option.hasInput;
            const isSelected = answers[question.id] === optionText;
            
            // Escape quotes in optionText for onclick handler
            const escapedOption = optionText.replace(/'/g, "\\'");
            
            html += `
                <div class="option ${isSelected ? 'selected' : ''}" onclick="selectRadioOption(${question.id}, '${escapedOption}', ${hasInput}, ${question.isLanguageSelect || false}, ${question.branching || false})">
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
        const options = translatedQ.options || question.options;
        options.forEach((option, index) => {
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
function selectRadioOption(questionId, value, hasInput, isLanguageSelect, isBranching) {
    answers[questionId] = value;
    console.log('Radio option selected:', questionId, value, 'hasInput:', hasInput);
    
    // If this is the language selection question
    if (isLanguageSelect) {
        // Handle English, Other, or any unrecognized language
        if (value === "Other" || value === "English" || !translations[value]) {
            selectedLanguage = "English";
        } else {
            selectedLanguage = value;
        }
        console.log('Language selected:', value, '-> Using:', selectedLanguage);
    }
    
    // If this is the user type question (branching)
    if (isBranching) {
        userType = value;
        console.log('User type selected:', userType);
        filterQuestions();
        // Update current question index to continue with filtered questions
        currentQuestionIndex = filteredQuestions.findIndex(q => q.id === questionId);
    }
    
    renderQuestion(filteredQuestions[currentQuestionIndex]);
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
        } else {
            alert(`You can only select up to ${maxSelections} options.`);
            return;
        }
    }
    
    answers[questionId] = currentAnswers;
    renderQuestion(filteredQuestions[currentQuestionIndex]);
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
    
    // Special handling for "Other" options that require additional input
    if (answer === "Other") {
        const otherInput = answers[question.id + '_input'];
        if (!otherInput || otherInput.trim() === '') {
            alert(`Please specify what "Other" means.`);
            return false;
        }
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
    console.log('Selected language:', selectedLanguage);
    console.log('User type:', userType);
    
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
