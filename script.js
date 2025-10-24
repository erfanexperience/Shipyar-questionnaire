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

// Translations for all languages
const translations = {
    English: {
        q1_title: "What's your full name?",
        q1_placeholder: "Enter your full name",
        q2_title: "What's your email address?",
        q2_description: "📧 We'll use this for early access & giveaway confirmation",
        q2_placeholder: "Enter your email address",
        q3_title: "Where do you live?",
        q3_description: "🌍 Help us connect you with local travelers",
        q3_placeholder: "Start typing your country or city...",
        q4_title: "What's your preferred language?",
        q5_title: "How did you hear about Shippyar?",
        q5_opt1: "Social Media (Instagram / LinkedIn / TikTok)",
        q5_opt2: "Friend or referral",
        q5_opt3: "Online ad or blog",
        q5_opt4: "Other",
        q6_title: "🎯 Which best describes you?",
        q6_description: "This helps us show you the most relevant questions!",
        q6_opt1: "✈️ Frequent Traveler",
        q6_opt2: "📦 Online Seller",
        q6_opt3: "🛍️ Package Sender/Receiver",
        q6_opt4: "🔍 Just Exploring",
        q7_title: "What's your age group?",
        
        // Traveler questions (8 questions)
        q8_title: "✈️ How often do you travel internationally?",
        q8_opt1: "Weekly",
        q8_opt2: "Monthly",
        q8_opt3: "A few times a year",
        q8_opt4: "Rarely",
        q9_title: "🌍 Which regions do you travel to most?",
        q9_opt1: "North America",
        q9_opt2: "Europe",
        q9_opt3: "Asia",
        q9_opt4: "Middle East",
        q9_opt5: "Other regions",
        q10_title: "💼 What's your typical luggage situation?",
        q10_opt1: "Always have extra space",
        q10_opt2: "Sometimes have space",
        q10_opt3: "Usually full",
        q10_opt4: "Depends on the trip",
        q11_title: "💰 Would you be open to earning money by sharing luggage space?",
        q11_opt1: "Definitely! 💸",
        q11_opt2: "Maybe, if it feels safe",
        q11_opt3: "Not sure yet",
        q12_title: "📏 How much luggage space do you typically have available?",
        q12_opt1: "5-10 kg",
        q12_opt2: "10-20 kg",
        q12_opt3: "20+ kg",
        q12_opt4: "Varies by trip",
        q13_title: "🔒 What would make you feel safe carrying items for others?",
        q13_opt1: "Insurance coverage",
        q13_opt2: "Identity verification",
        q13_opt3: "Package inspection",
        q13_opt4: "All of the above",
        q14_title: "💵 How much would you charge per kg?",
        q14_opt1: "$5-10",
        q14_opt2: "$10-15",
        q14_opt3: "$15-20",
        q14_opt4: "Depends on destination",
        q15_title: "📱 How would you prefer to communicate with senders?",
        q15_opt1: "In-app messaging",
        q15_opt2: "Phone call",
        q15_opt3: "Video call",
        q15_opt4: "Any method",
        
        // Seller questions (8 questions)
        q16_title: "📦 How often do you send international packages?",
        q16_opt1: "Daily",
        q16_opt2: "Weekly",
        q16_opt3: "Monthly",
        q16_opt4: "Occasionally",
        q17_title: "🛍️ What types of items do you usually send?",
        q17_description: "Select up to 3",
        q18_title: "💵 What's the typical value of items you ship?",
        q18_opt1: "Under $50",
        q18_opt2: "$50–200",
        q18_opt3: "$200–500",
        q18_opt4: "$500+",
        q19_title: "🌎 Where do you ship to most frequently?",
        q19_opt1: "North America",
        q19_opt2: "Europe",
        q19_opt3: "Asia",
        q19_opt4: "Multiple regions",
        q20_title: "⚖️ What's the typical weight of your packages?",
        q20_opt1: "Under 2 kg",
        q20_opt2: "2-5 kg",
        q20_opt3: "5-10 kg",
        q20_opt4: "Varies",
        q21_title: "💰 What's your biggest shipping challenge?",
        q21_opt1: "High costs",
        q21_opt2: "Slow delivery",
        q21_opt3: "Lost packages",
        q21_opt4: "Customs issues",
        q22_title: "📊 How much do you spend on shipping monthly?",
        q22_opt1: "Under $100",
        q22_opt2: "$100-500",
        q22_opt3: "$500-1000",
        q22_opt4: "$1000+",
        q23_title: "🎯 What would make you switch to a new shipping service?",
        q23_opt1: "Lower prices",
        q23_opt2: "Faster delivery",
        q23_opt3: "Better tracking",
        q23_opt4: "More reliable",
        
        // Sender/Receiver questions (8 questions)
        q24_title: "📬 How often do you send/receive international packages?",
        q24_opt1: "Weekly",
        q24_opt2: "Monthly",
        q24_opt3: "A few times a year",
        q24_opt4: "Rarely",
        q25_title: "🎁 What types of items do you usually send/receive?",
        q25_description: "Select up to 3",
        q26_title: "🌍 Which countries do you send/receive from most?",
        q26_opt1: "USA",
        q26_opt2: "UK/Europe",
        q26_opt3: "Asia",
        q26_opt4: "Multiple countries",
        q27_title: "💵 What's the typical value of your packages?",
        q27_opt1: "Under $50",
        q27_opt2: "$50–200",
        q27_opt3: "$200–500",
        q27_opt4: "$500+",
        q28_title: "😟 What's your biggest concern with current shipping?",
        q28_opt1: "High costs",
        q28_opt2: "Delivery time",
        q28_opt3: "Package safety",
        q28_opt4: "Tracking reliability",
        q29_title: "⏱️ How urgent are your shipments usually?",
        q29_opt1: "Very urgent (1-3 days)",
        q29_opt2: "Somewhat urgent (1 week)",
        q29_opt3: "Not urgent (2+ weeks)",
        q29_opt4: "Flexible",
        q30_title: "💰 How much do you typically pay for shipping?",
        q30_opt1: "Under $20",
        q30_opt2: "$20-50",
        q30_opt3: "$50-100",
        q30_opt4: "$100+",
        q31_title: "🤝 Would you trust a traveler to carry your package?",
        q31_opt1: "Yes, with verification",
        q31_opt2: "Yes, with insurance",
        q31_opt3: "Maybe",
        q31_opt4: "Need more info",
        
        // Final questions (shown to everyone)
        q32_title: "🎯 What matters most to you when shipping?",
        q32_opt1: "💰 Cost savings",
        q32_opt2: "⚡ Speed of delivery",
        q32_opt3: "🔒 Safety & reliability",
        q32_opt4: "🎛️ Flexibility",
        q33_title: "🚀 How likely are you to try Shippyar when it launches?",
        q33_opt1: "Definitely! 🎉",
        q33_opt2: "Probably",
        q33_opt3: "Not sure yet",
        q33_opt4: "Probably not",
        q34_title: "🎁 Follow us for extra giveaway entries:",
        q34_opt1: "✅ I followed Shippyar on LinkedIn",
        q34_opt2: "✅ I followed Shippyar on Instagram",
        q34_opt3: "✅ I joined Shippyar's Telegram channel",
        q35_title: "🎯 Would you like to join Shippyar's early access group?",
        q35_opt1: "Yes, I'd love to! 🚀",
        
        // Common
        item_opt1: "Personal items / gifts",
        item_opt2: "Clothing / accessories",
        item_opt3: "Electronics",
        item_opt4: "Business samples / products",
        item_opt5: "Documents / paperwork",
        item_opt6: "Food or local products",
        item_opt7: "Other",
        
        value_opt1: "Under $50",
        value_opt2: "$50–200",
        value_opt3: "$200–500",
        value_opt4: "$500+"
    },
    Turkish: {
        q1_title: "Adınız ve soyadınız nedir?",
        q1_placeholder: "Adınızı ve soyadınızı girin",
        q2_title: "E-posta adresiniz nedir?",
        q2_description: "📧 Erken erişim ve çekiliş onayı için kullanacağız",
        q2_placeholder: "E-posta adresinizi girin",
        q3_title: "Nerede yaşıyorsunuz?",
        q3_description: "🌍 Sizi yerel gezginlerle bağlamamıza yardımcı olun",
        q3_placeholder: "Ülkenizi veya şehrinizi yazmaya başlayın...",
        q4_title: "Tercih ettiğiniz dil nedir?",
        q5_title: "Shippyar'ı nasıl duydunuz?",
        q5_opt1: "Sosyal Medya (Instagram / LinkedIn / TikTok)",
        q5_opt2: "Arkadaş veya tavsiye",
        q5_opt3: "Çevrimiçi reklam veya blog",
        q5_opt4: "Diğer",
        q6_title: "🎯 Sizi en iyi hangisi tanımlar?",
        q6_description: "Bu, size en uygun soruları göstermemize yardımcı olur!",
        q6_opt1: "✈️ Sık Seyahat Eden",
        q6_opt2: "📦 Online Satıcı",
        q6_opt3: "🛍️ Paket Gönderen/Alan",
        q6_opt4: "🔍 Sadece Keşfediyorum",
        q7_title: "Yaş grubunuz nedir?",
        
        // Traveler questions (8 questions)
        q8_title: "✈️ Ne sıklıkla uluslararası seyahat ediyorsunuz?",
        q8_opt1: "Haftalık",
        q8_opt2: "Aylık",
        q8_opt3: "Yılda birkaç kez",
        q8_opt4: "Nadiren",
        q9_title: "🌍 En çok hangi bölgelere seyahat ediyorsunuz?",
        q9_opt1: "Kuzey Amerika",
        q9_opt2: "Avrupa",
        q9_opt3: "Asya",
        q9_opt4: "Orta Doğu",
        q9_opt5: "Diğer bölgeler",
        q10_title: "💼 Seyahat ederken bagaj durumunuz nasıl?",
        q10_opt1: "Her zaman ekstra yer var",
        q10_opt2: "Bazen yer var",
        q10_opt3: "Genellikle dolu",
        q10_opt4: "Seyahate bağlı",
        q11_title: "💰 Bagaj alanınızı paylaşarak para kazanmaya açık mısınız?",
        q11_opt1: "Kesinlikle! 💸",
        q11_opt2: "Belki, güvenli hissedersem",
        q11_opt3: "Henüz emin değilim",
        q12_title: "📏 Genellikle ne kadar bagaj alanınız var?",
        q12_opt1: "5-10 kg",
        q12_opt2: "10-20 kg",
        q12_opt3: "20+ kg",
        q12_opt4: "Seyahate göre değişir",
        q13_title: "🔒 Başkaları için eşya taşırken güvende hissetmenizi sağlayan nedir?",
        q13_opt1: "Sigorta kapsamı",
        q13_opt2: "Kimlik doğrulama",
        q13_opt3: "Paket kontrolü",
        q13_opt4: "Hepsi",
        q14_title: "💵 Kg başına ne kadar ücret alırdınız?",
        q14_opt1: "$5-10",
        q14_opt2: "$10-15",
        q14_opt3: "$15-20",
        q14_opt4: "Hedefe bağlı",
        q15_title: "📱 Gönderenlerle nasıl iletişim kurmayı tercih edersiniz?",
        q15_opt1: "Uygulama içi mesajlaşma",
        q15_opt2: "Telefon görüşmesi",
        q15_opt3: "Video görüşme",
        q15_opt4: "Herhangi bir yöntem",
        
        // Seller questions (8 questions)
        q16_title: "📦 Ne sıklıkla uluslararası paket gönderiyorsunuz?",
        q16_opt1: "Günlük",
        q16_opt2: "Haftalık",
        q16_opt3: "Aylık",
        q16_opt4: "Ara sıra",
        q17_title: "🛍️ Genellikle ne tür ürünler gönderiyorsunuz?",
        q17_description: "En fazla 3 seçin",
        q18_title: "💵 Gönderdiğiniz ürünlerin tipik değeri nedir?",
        q18_opt1: "50$'ın altında",
        q18_opt2: "$50–200",
        q18_opt3: "$200–500",
        q18_opt4: "$500+",
        q19_title: "🌎 En sık nereye gönderim yapıyorsunuz?",
        q19_opt1: "Kuzey Amerika",
        q19_opt2: "Avrupa",
        q19_opt3: "Asya",
        q19_opt4: "Birden fazla bölge",
        q20_title: "⚖️ Paketlerinizin tipik ağırlığı nedir?",
        q20_opt1: "2 kg'ın altında",
        q20_opt2: "2-5 kg",
        q20_opt3: "5-10 kg",
        q20_opt4: "Değişir",
        q21_title: "💰 En büyük gönderim sorununuz nedir?",
        q21_opt1: "Yüksek maliyetler",
        q21_opt2: "Yavaş teslimat",
        q21_opt3: "Kayıp paketler",
        q21_opt4: "Gümrük sorunları",
        q22_title: "📊 Aylık gönderi için ne kadar harcıyorsunuz?",
        q22_opt1: "100$'ın altında",
        q22_opt2: "$100-500",
        q22_opt3: "$500-1000",
        q22_opt4: "$1000+",
        q23_title: "🎯 Yeni bir gönderim hizmetine geçmenizi sağlayan nedir?",
        q23_opt1: "Daha düşük fiyatlar",
        q23_opt2: "Daha hızlı teslimat",
        q23_opt3: "Daha iyi takip",
        q23_opt4: "Daha güvenilir",
        
        // Sender/Receiver questions (8 questions)
        q24_title: "📬 Ne sıklıkla uluslararası paket gönderip/alıyorsunuz?",
        q24_opt1: "Haftalık",
        q24_opt2: "Aylık",
        q24_opt3: "Yılda birkaç kez",
        q24_opt4: "Nadiren",
        q25_title: "🎁 Genellikle ne tür ürünler gönderip/alıyorsunuz?",
        q25_description: "En fazla 3 seçin",
        q26_title: "🌍 En çok hangi ülkelerden gönderip/alıyorsunuz?",
        q26_opt1: "ABD",
        q26_opt2: "İngiltere/Avrupa",
        q26_opt3: "Asya",
        q26_opt4: "Birden fazla ülke",
        q27_title: "💵 Paketlerinizin tipik değeri nedir?",
        q27_opt1: "50$'ın altında",
        q27_opt2: "$50–200",
        q27_opt3: "$200–500",
        q27_opt4: "$500+",
        q28_title: "😟 Mevcut gönderimde en büyük endişeniz nedir?",
        q28_opt1: "Yüksek maliyetler",
        q28_opt2: "Teslimat süresi",
        q28_opt3: "Paket güvenliği",
        q28_opt4: "Takip güvenilirliği",
        q29_title: "⏱️ Gönderileriniz genellikle ne kadar acil?",
        q29_opt1: "Çok acil (1-3 gün)",
        q29_opt2: "Biraz acil (1 hafta)",
        q29_opt3: "Acil değil (2+ hafta)",
        q29_opt4: "Esnek",
        q30_title: "💰 Genellikle gönderi için ne kadar ödüyorsunuz?",
        q30_opt1: "20$'ın altında",
        q30_opt2: "$20-50",
        q30_opt3: "$50-100",
        q30_opt4: "$100+",
        q31_title: "🤝 Paketinizi taşıması için bir gezgine güvenir misiniz?",
        q31_opt1: "Evet, doğrulamayla",
        q31_opt2: "Evet, sigortayla",
        q31_opt3: "Belki",
        q31_opt4: "Daha fazla bilgiye ihtiyacım var",
        
        // Final questions
        q32_title: "🎯 Gönderi yaparken sizin için en önemli olan nedir?",
        q32_opt1: "💰 Maliyet tasarrufu",
        q32_opt2: "⚡ Teslimat hızı",
        q32_opt3: "🔒 Güvenlik ve güvenilirlik",
        q32_opt4: "🎛️ Esneklik",
        q33_title: "🚀 Shippyar başlatıldığında deneme olasılığınız nedir?",
        q33_opt1: "Kesinlikle! 🎉",
        q33_opt2: "Muhtemelen",
        q33_opt3: "Henüz emin değilim",
        q33_opt4: "Muhtemelen hayır",
        q34_title: "🎁 Ekstra çekiliş girişleri için bizi takip edin:",
        q34_opt1: "✅ LinkedIn'de Shippyar'ı takip ettim",
        q34_opt2: "✅ Instagram'da Shippyar'ı takip ettim",
        q34_opt3: "✅ Shippyar'ın Telegram kanalına katıldım",
        q35_title: "🎯 Shippyar'ın erken erişim grubuna katılmak ister misiniz?",
        q35_opt1: "Evet, çok isterim! 🚀",
        
        item_opt1: "Kişisel eşyalar / hediyeler",
        item_opt2: "Giyim / aksesuarlar",
        item_opt3: "Elektronik",
        item_opt4: "İş örnekleri / ürünler",
        item_opt5: "Belgeler / evrak",
        item_opt6: "Yiyecek veya yerel ürünler",
        item_opt7: "Diğer",
        
        value_opt1: "50$'ın altında",
        value_opt2: "50-200$",
        value_opt3: "200-500$",
        value_opt4: "500$+"
    },
    Arabic: {
        q1_title: "ما هو اسمك الكامل؟",
        q1_placeholder: "أدخل اسمك الكامل",
        q2_title: "ما هو عنوان بريدك الإلكتروني؟",
        q2_description: "📧 سنستخدمه للوصول المبكر وتأكيد السحب",
        q2_placeholder: "أدخل عنوان بريدك الإلكتروني",
        q3_title: "أين تعيش؟",
        q3_description: "🌍 ساعدنا في ربطك بالمسافرين المحليين",
        q3_placeholder: "ابدأ بكتابة بلدك أو مدينتك...",
        q4_title: "ما هي لغتك المفضلة؟",
        q5_title: "كيف سمعت عن Shippyar؟",
        q5_opt1: "وسائل التواصل الاجتماعي (Instagram / LinkedIn / TikTok)",
        q5_opt2: "صديق أو إحالة",
        q5_opt3: "إعلان أو مدونة عبر الإنترنت",
        q5_opt4: "أخرى",
        q6_title: "🎯 أي من هذه تصفك بشكل أفضل؟",
        q6_description: "هذا يساعدنا على عرض الأسئلة الأكثر صلة لك!",
        q6_opt1: "✈️ مسافر متكرر",
        q6_opt2: "📦 بائع عبر الإنترنت",
        q6_opt3: "🛍️ مرسل/مستلم الطرود",
        q6_opt4: "🔍 أستكشف فقط",
        q7_title: "ما هي فئتك العمرية؟",
        
        // Traveler questions (8 questions)
        q8_title: "✈️ كم مرة تسافر دولياً؟",
        q8_opt1: "أسبوعياً",
        q8_opt2: "شهرياً",
        q8_opt3: "بضع مرات في السنة",
        q8_opt4: "نادراً",
        q9_title: "🌍 إلى أي المناطق تسافر أكثر؟",
        q9_opt1: "أمريكا الشمالية",
        q9_opt2: "أوروبا",
        q9_opt3: "آسيا",
        q9_opt4: "الشرق الأوسط",
        q9_opt5: "مناطق أخرى",
        q10_title: "💼 ما هو وضع أمتعتك المعتاد عند السفر؟",
        q10_opt1: "دائماً لدي مساحة إضافية",
        q10_opt2: "أحياناً لدي مساحة",
        q10_opt3: "عادة ممتلئة",
        q10_opt4: "يعتمد على الرحلة",
        q11_title: "💰 هل أنت منفتح لكسب المال من خلال مشاركة مساحة الأمتعة؟",
        q11_opt1: "بالتأكيد! 💸",
        q11_opt2: "ربما، إذا شعرت بالأمان",
        q11_opt3: "لست متأكداً بعد",
        q12_title: "📏 كم مساحة أمتعة متاحة لديك عادة؟",
        q12_opt1: "5-10 كجم",
        q12_opt2: "10-20 كجم",
        q12_opt3: "20+ كجم",
        q12_opt4: "يختلف حسب الرحلة",
        q13_title: "🔒 ما الذي يجعلك تشعر بالأمان عند حمل أغراض للآخرين؟",
        q13_opt1: "تغطية تأمينية",
        q13_opt2: "التحقق من الهوية",
        q13_opt3: "فحص الطرود",
        q13_opt4: "كل ما سبق",
        q14_title: "💵 كم ستتقاضى لكل كيلوغرام؟",
        q14_opt1: "$5-10",
        q14_opt2: "$10-15",
        q14_opt3: "$15-20",
        q14_opt4: "يعتمد على الوجهة",
        q15_title: "📱 كيف تفضل التواصل مع المرسلين؟",
        q15_opt1: "المراسلة داخل التطبيق",
        q15_opt2: "مكالمة هاتفية",
        q15_opt3: "مكالمة فيديو",
        q15_opt4: "أي طريقة",
        
        // Seller questions (8 questions)
        q16_title: "📦 كم مرة ترسل طرود دولية؟",
        q16_opt1: "يومياً",
        q16_opt2: "أسبوعياً",
        q16_opt3: "شهرياً",
        q16_opt4: "أحياناً",
        q17_title: "🛍️ ما أنواع العناصر التي ترسلها عادة؟",
        q17_description: "اختر ما يصل إلى 3",
        q18_title: "💵 ما هي القيمة النموذجية للعناصر التي ترسلها؟",
        q18_opt1: "أقل من 50 دولار",
        q18_opt2: "$50–200",
        q18_opt3: "$200–500",
        q18_opt4: "$500+",
        q19_title: "🌎 إلى أين ترسل بشكل متكرر؟",
        q19_opt1: "أمريكا الشمالية",
        q19_opt2: "أوروبا",
        q19_opt3: "آسيا",
        q19_opt4: "مناطق متعددة",
        q20_title: "⚖️ ما هو الوزن النموذجي لطرودك؟",
        q20_opt1: "أقل من 2 كجم",
        q20_opt2: "2-5 كجم",
        q20_opt3: "5-10 كجم",
        q20_opt4: "يختلف",
        q21_title: "💰 ما هو أكبر تحدٍ لديك في الشحن؟",
        q21_opt1: "تكاليف عالية",
        q21_opt2: "تسليم بطيء",
        q21_opt3: "طرود مفقودة",
        q21_opt4: "مشاكل جمركية",
        q22_title: "📊 كم تنفق شهرياً على الشحن؟",
        q22_opt1: "أقل من 100 دولار",
        q22_opt2: "$100-500",
        q22_opt3: "$500-1000",
        q22_opt4: "$1000+",
        q23_title: "🎯 ما الذي يجعلك تنتقل إلى خدمة شحن جديدة؟",
        q23_opt1: "أسعار أقل",
        q23_opt2: "تسليم أسرع",
        q23_opt3: "تتبع أفضل",
        q23_opt4: "أكثر موثوقية",
        
        // Sender/Receiver questions (8 questions)
        q24_title: "📬 كم مرة ترسل/تستلم طرود دولية؟",
        q24_opt1: "أسبوعياً",
        q24_opt2: "شهرياً",
        q24_opt3: "بضع مرات في السنة",
        q24_opt4: "نادراً",
        q25_title: "🎁 ما أنواع العناصر التي ترسلها/تستلمها عادة؟",
        q25_description: "اختر ما يصل إلى 3",
        q26_title: "🌍 من أي البلدان ترسل/تستلم أكثر؟",
        q26_opt1: "الولايات المتحدة",
        q26_opt2: "المملكة المتحدة/أوروبا",
        q26_opt3: "آسيا",
        q26_opt4: "بلدان متعددة",
        q27_title: "💵 ما هي القيمة النموذجية لطرودك؟",
        q27_opt1: "أقل من 50 دولار",
        q27_opt2: "$50–200",
        q27_opt3: "$200–500",
        q27_opt4: "$500+",
        q28_title: "😟 ما هو أكبر قلق لديك مع الشحن الحالي؟",
        q28_opt1: "تكاليف عالية",
        q28_opt2: "وقت التسليم",
        q28_opt3: "سلامة الطرود",
        q28_opt4: "موثوقية التتبع",
        q29_title: "⏱️ ما مدى إلحاح شحناتك عادة؟",
        q29_opt1: "عاجل جداً (1-3 أيام)",
        q29_opt2: "عاجل إلى حد ما (أسبوع واحد)",
        q29_opt3: "ليس عاجلاً (أسبوعان+)",
        q29_opt4: "مرن",
        q30_title: "💰 كم تدفع عادة للشحن؟",
        q30_opt1: "أقل من 20 دولار",
        q30_opt2: "$20-50",
        q30_opt3: "$50-100",
        q30_opt4: "$100+",
        q31_title: "🤝 هل ستثق في مسافر لحمل طردك؟",
        q31_opt1: "نعم، مع التحقق",
        q31_opt2: "نعم، مع التأمين",
        q31_opt3: "ربما",
        q31_opt4: "أحتاج المزيد من المعلومات",
        
        // Final questions
        q32_title: "🎯 ما الأكثر أهمية بالنسبة لك عند الشحن؟",
        q32_opt1: "💰 توفير التكلفة",
        q32_opt2: "⚡ سرعة التسليم",
        q32_opt3: "🔒 السلامة والموثوقية",
        q32_opt4: "🎛️ المرونة",
        q33_title: "🚀 ما مدى احتمالية تجربتك لـ Shippyar عند إطلاقه؟",
        q33_opt1: "بالتأكيد! 🎉",
        q33_opt2: "محتمل",
        q33_opt3: "لست متأكداً بعد",
        q33_opt4: "محتمل ألا",
        q34_title: "🎁 تابعنا للحصول على إدخالات إضافية للسحب:",
        q34_opt1: "✅ تابعت Shippyar على LinkedIn",
        q34_opt2: "✅ تابعت Shippyar على Instagram",
        q34_opt3: "✅ انضممت إلى قناة Shippyar على Telegram",
        q35_title: "🎯 هل ترغب في الانضمام إلى مجموعة الوصول المبكر لـ Shippyar؟",
        q35_opt1: "نعم، أحب ذلك! 🚀",
        
        item_opt1: "عناصر شخصية / هدايا",
        item_opt2: "ملابس / إكسسوارات",
        item_opt3: "إلكترونيات",
        item_opt4: "عينات / منتجات تجارية",
        item_opt5: "وثائق / أوراق",
        item_opt6: "طعام أو منتجات محلية",
        item_opt7: "أخرى",
        
        value_opt1: "أقل من 50 دولار",
        value_opt2: "50-200 دولار",
        value_opt3: "200-500 دولار",
        value_opt4: "500 دولار+"
    },
    Spanish: {
        q1_title: "¿Cuál es tu nombre completo?",
        q1_placeholder: "Ingresa tu nombre completo",
        q2_title: "¿Cuál es tu correo electrónico?",
        q2_description: "📧 Lo usaremos para acceso anticipado y confirmación del sorteo",
        q2_placeholder: "Ingresa tu correo electrónico",
        q3_title: "¿Dónde vives?",
        q3_description: "🌍 Ayúdanos a conectarte con viajeros locales",
        q3_placeholder: "Comienza a escribir tu país o ciudad...",
        q4_title: "¿Cuál es tu idioma preferido?",
        q5_title: "¿Cómo te enteraste de Shippyar?",
        q5_opt1: "Redes Sociales (Instagram / LinkedIn / TikTok)",
        q5_opt2: "Amigo o recomendación",
        q5_opt3: "Anuncio o blog en línea",
        q5_opt4: "Otro",
        q6_title: "🎯 ¿Cuál te describe mejor?",
        q6_description: "¡Esto nos ayuda a mostrarte las preguntas más relevantes!",
        q6_opt1: "✈️ Viajero Frecuente",
        q6_opt2: "📦 Vendedor en Línea",
        q6_opt3: "🛍️ Remitente/Receptor de Paquetes",
        q6_opt4: "🔍 Solo Explorando",
        q7_title: "¿Cuál es tu grupo de edad?",
        
        // Traveler questions (8 questions)
        q8_title: "✈️ ¿Con qué frecuencia viajas internacionalmente?",
        q8_opt1: "Semanalmente",
        q8_opt2: "Mensualmente",
        q8_opt3: "Algunas veces al año",
        q8_opt4: "Raramente",
        q9_title: "🌍 ¿A qué regiones viajas más?",
        q9_opt1: "Norteamérica",
        q9_opt2: "Europa",
        q9_opt3: "Asia",
        q9_opt4: "Medio Oriente",
        q9_opt5: "Otras regiones",
        q10_title: "💼 ¿Cuál es tu situación típica de equipaje al viajar?",
        q10_opt1: "Siempre tengo espacio extra",
        q10_opt2: "A veces tengo espacio",
        q10_opt3: "Usualmente lleno",
        q10_opt4: "Depende del viaje",
        q11_title: "💰 ¿Estarías abierto a ganar dinero compartiendo espacio de equipaje?",
        q11_opt1: "¡Definitivamente! 💸",
        q11_opt2: "Tal vez, si me siento seguro",
        q11_opt3: "Aún no estoy seguro",
        q12_title: "📏 ¿Cuánto espacio de equipaje tienes disponible típicamente?",
        q12_opt1: "5-10 kg",
        q12_opt2: "10-20 kg",
        q12_opt3: "20+ kg",
        q12_opt4: "Varía por viaje",
        q13_title: "🔒 ¿Qué te haría sentir seguro al transportar artículos para otros?",
        q13_opt1: "Cobertura de seguro",
        q13_opt2: "Verificación de identidad",
        q13_opt3: "Inspección de paquetes",
        q13_opt4: "Todo lo anterior",
        q14_title: "💵 ¿Cuánto cobrarías por kg?",
        q14_opt1: "$5-10",
        q14_opt2: "$10-15",
        q14_opt3: "$15-20",
        q14_opt4: "Depende del destino",
        q15_title: "📱 ¿Cómo preferirías comunicarte con los remitentes?",
        q15_opt1: "Mensajería en la app",
        q15_opt2: "Llamada telefónica",
        q15_opt3: "Videollamada",
        q15_opt4: "Cualquier método",
        
        // Seller questions (8 questions)
        q16_title: "📦 ¿Con qué frecuencia envías paquetes internacionales?",
        q16_opt1: "Diariamente",
        q16_opt2: "Semanalmente",
        q16_opt3: "Mensualmente",
        q16_opt4: "Ocasionalmente",
        q17_title: "🛍️ ¿Qué tipos de artículos sueles enviar?",
        q17_description: "Selecciona hasta 3",
        q18_title: "💵 ¿Cuál es el valor típico de los artículos que envías?",
        q18_opt1: "Menos de $50",
        q18_opt2: "$50–200",
        q18_opt3: "$200–500",
        q18_opt4: "$500+",
        q19_title: "🌎 ¿A dónde envías con más frecuencia?",
        q19_opt1: "Norteamérica",
        q19_opt2: "Europa",
        q19_opt3: "Asia",
        q19_opt4: "Múltiples regiones",
        q20_title: "⚖️ ¿Cuál es el peso típico de tus paquetes?",
        q20_opt1: "Menos de 2 kg",
        q20_opt2: "2-5 kg",
        q20_opt3: "5-10 kg",
        q20_opt4: "Varía",
        q21_title: "💰 ¿Cuál es tu mayor desafío de envío?",
        q21_opt1: "Costos altos",
        q21_opt2: "Entrega lenta",
        q21_opt3: "Paquetes perdidos",
        q21_opt4: "Problemas de aduana",
        q22_title: "📊 ¿Cuánto gastas en envíos mensualmente?",
        q22_opt1: "Menos de $100",
        q22_opt2: "$100-500",
        q22_opt3: "$500-1000",
        q22_opt4: "$1000+",
        q23_title: "🎯 ¿Qué te haría cambiar a un nuevo servicio de envío?",
        q23_opt1: "Precios más bajos",
        q23_opt2: "Entrega más rápida",
        q23_opt3: "Mejor seguimiento",
        q23_opt4: "Más confiable",
        
        // Sender/Receiver questions (8 questions)
        q24_title: "📬 ¿Con qué frecuencia envías/recibes paquetes internacionales?",
        q24_opt1: "Semanalmente",
        q24_opt2: "Mensualmente",
        q24_opt3: "Algunas veces al año",
        q24_opt4: "Raramente",
        q25_title: "🎁 ¿Qué tipos de artículos sueles enviar/recibir?",
        q25_description: "Selecciona hasta 3",
        q26_title: "🌍 ¿De qué países envías/recibes más?",
        q26_opt1: "EE.UU.",
        q26_opt2: "Reino Unido/Europa",
        q26_opt3: "Asia",
        q26_opt4: "Múltiples países",
        q27_title: "💵 ¿Cuál es el valor típico de tus paquetes?",
        q27_opt1: "Menos de $50",
        q27_opt2: "$50–200",
        q27_opt3: "$200–500",
        q27_opt4: "$500+",
        q28_title: "😟 ¿Cuál es tu mayor preocupación con el envío actual?",
        q28_opt1: "Costos altos",
        q28_opt2: "Tiempo de entrega",
        q28_opt3: "Seguridad del paquete",
        q28_opt4: "Confiabilidad del seguimiento",
        q29_title: "⏱️ ¿Qué tan urgentes son tus envíos normalmente?",
        q29_opt1: "Muy urgente (1-3 días)",
        q29_opt2: "Algo urgente (1 semana)",
        q29_opt3: "No urgente (2+ semanas)",
        q29_opt4: "Flexible",
        q30_title: "💰 ¿Cuánto pagas típicamente por envío?",
        q30_opt1: "Menos de $20",
        q30_opt2: "$20-50",
        q30_opt3: "$50-100",
        q30_opt4: "$100+",
        q31_title: "🤝 ¿Confiarías en un viajero para transportar tu paquete?",
        q31_opt1: "Sí, con verificación",
        q31_opt2: "Sí, con seguro",
        q31_opt3: "Tal vez",
        q31_opt4: "Necesito más info",
        
        // Final questions
        q32_title: "🎯 ¿Qué es lo más importante para ti al enviar?",
        q32_opt1: "💰 Ahorro de costos",
        q32_opt2: "⚡ Velocidad de entrega",
        q32_opt3: "🔒 Seguridad y confiabilidad",
        q32_opt4: "🎛️ Flexibilidad",
        q33_title: "🚀 ¿Qué tan probable es que pruebes Shippyar cuando se lance?",
        q33_opt1: "¡Definitivamente! 🎉",
        q33_opt2: "Probablemente",
        q33_opt3: "Aún no estoy seguro",
        q33_opt4: "Probablemente no",
        q34_title: "🎁 Síguenos para entradas extra al sorteo:",
        q34_opt1: "✅ Seguí a Shippyar en LinkedIn",
        q34_opt2: "✅ Seguí a Shippyar en Instagram",
        q34_opt3: "✅ Me uní al canal de Telegram de Shippyar",
        q35_title: "🎯 ¿Te gustaría unirte al grupo de acceso anticipado de Shippyar?",
        q35_opt1: "¡Sí, me encantaría! 🚀",
        
        item_opt1: "Artículos personales / regalos",
        item_opt2: "Ropa / accesorios",
        item_opt3: "Electrónica",
        item_opt4: "Muestras / productos comerciales",
        item_opt5: "Documentos / papeles",
        item_opt6: "Comida o productos locales",
        item_opt7: "Otro",
        
        value_opt1: "Menos de $50",
        value_opt2: "$50–200",
        value_opt3: "$200–500",
        value_opt4: "$500+"
    },
    French: {
        q1_title: "Quel est votre nom complet ?",
        q1_placeholder: "Entrez votre nom complet",
        q2_title: "Quelle est votre adresse email ?",
        q2_description: "📧 Nous l'utiliserons pour l'accès anticipé et la confirmation du tirage au sort",
        q2_placeholder: "Entrez votre adresse email",
        q3_title: "Où habitez-vous ?",
        q3_description: "🌍 Aidez-nous à vous connecter avec des voyageurs locaux",
        q3_placeholder: "Commencez à taper votre pays ou ville...",
        q4_title: "Quelle est votre langue préférée ?",
        q5_title: "Comment avez-vous entendu parler de Shippyar ?",
        q5_opt1: "Réseaux Sociaux (Instagram / LinkedIn / TikTok)",
        q5_opt2: "Ami ou recommandation",
        q5_opt3: "Publicité ou blog en ligne",
        q5_opt4: "Autre",
        q6_title: "🎯 Lequel vous décrit le mieux ?",
        q6_description: "Cela nous aide à vous montrer les questions les plus pertinentes !",
        q6_opt1: "✈️ Voyageur Fréquent",
        q6_opt2: "📦 Vendeur en Ligne",
        q6_opt3: "🛍️ Expéditeur/Récepteur de Colis",
        q6_opt4: "🔍 Juste Explorer",
        q7_title: "Quel est votre groupe d'âge ?",
        
        // Traveler questions (8 questions)
        q8_title: "✈️ À quelle fréquence voyagez-vous internationalement ?",
        q8_opt1: "Hebdomadaire",
        q8_opt2: "Mensuelle",
        q8_opt3: "Quelques fois par an",
        q8_opt4: "Rarement",
        q9_title: "🌍 Dans quelles régions voyagez-vous le plus ?",
        q9_opt1: "Amérique du Nord",
        q9_opt2: "Europe",
        q9_opt3: "Asie",
        q9_opt4: "Moyen-Orient",
        q9_opt5: "Autres régions",
        q10_title: "💼 Quelle est votre situation de bagages typique en voyage ?",
        q10_opt1: "J'ai toujours de l'espace supplémentaire",
        q10_opt2: "J'ai parfois de l'espace",
        q10_opt3: "Généralement plein",
        q10_opt4: "Dépend du voyage",
        q11_title: "💰 Seriez-vous ouvert à gagner de l'argent en partageant l'espace de bagages ?",
        q11_opt1: "Absolument ! 💸",
        q11_opt2: "Peut-être, si je me sens en sécurité",
        q11_opt3: "Pas encore sûr",
        q12_title: "📏 Combien d'espace de bagages avez-vous généralement disponible ?",
        q12_opt1: "5-10 kg",
        q12_opt2: "10-20 kg",
        q12_opt3: "20+ kg",
        q12_opt4: "Varie selon le voyage",
        q13_title: "🔒 Qu'est-ce qui vous ferait sentir en sécurité en transportant des articles pour d'autres ?",
        q13_opt1: "Couverture d'assurance",
        q13_opt2: "Vérification d'identité",
        q13_opt3: "Inspection des colis",
        q13_opt4: "Tout ce qui précède",
        q14_title: "💵 Combien factureriez-vous par kg ?",
        q14_opt1: "$5-10",
        q14_opt2: "$10-15",
        q14_opt3: "$15-20",
        q14_opt4: "Dépend de la destination",
        q15_title: "📱 Comment préféreriez-vous communiquer avec les expéditeurs ?",
        q15_opt1: "Messagerie dans l'application",
        q15_opt2: "Appel téléphonique",
        q15_opt3: "Appel vidéo",
        q15_opt4: "N'importe quelle méthode",
        
        // Seller questions (8 questions)
        q16_title: "📦 À quelle fréquence envoyez-vous des colis internationaux ?",
        q16_opt1: "Quotidiennement",
        q16_opt2: "Hebdomadaire",
        q16_opt3: "Mensuelle",
        q16_opt4: "Occasionnellement",
        q17_title: "🛍️ Quels types d'articles envoyez-vous habituellement ?",
        q17_description: "Sélectionnez jusqu'à 3",
        q18_title: "💵 Quelle est la valeur typique des articles que vous expédiez ?",
        q18_opt1: "Moins de 50 $",
        q18_opt2: "$50–200",
        q18_opt3: "$200–500",
        q18_opt4: "$500+",
        q19_title: "🌎 Où expédiez-vous le plus fréquemment ?",
        q19_opt1: "Amérique du Nord",
        q19_opt2: "Europe",
        q19_opt3: "Asie",
        q19_opt4: "Plusieurs régions",
        q20_title: "⚖️ Quel est le poids typique de vos colis ?",
        q20_opt1: "Moins de 2 kg",
        q20_opt2: "2-5 kg",
        q20_opt3: "5-10 kg",
        q20_opt4: "Varie",
        q21_title: "💰 Quel est votre plus grand défi d'expédition ?",
        q21_opt1: "Coûts élevés",
        q21_opt2: "Livraison lente",
        q21_opt3: "Colis perdus",
        q21_opt4: "Problèmes douaniers",
        q22_title: "📊 Combien dépensez-vous en expédition mensuellement ?",
        q22_opt1: "Moins de 100 $",
        q22_opt2: "$100-500",
        q22_opt3: "$500-1000",
        q22_opt4: "$1000+",
        q23_title: "🎯 Qu'est-ce qui vous ferait passer à un nouveau service d'expédition ?",
        q23_opt1: "Prix plus bas",
        q23_opt2: "Livraison plus rapide",
        q23_opt3: "Meilleur suivi",
        q23_opt4: "Plus fiable",
        
        // Sender/Receiver questions (8 questions)
        q24_title: "📬 À quelle fréquence envoyez-vous/recevez-vous des colis internationaux ?",
        q24_opt1: "Hebdomadaire",
        q24_opt2: "Mensuelle",
        q24_opt3: "Quelques fois par an",
        q24_opt4: "Rarement",
        q25_title: "🎁 Quels types d'articles envoyez-vous/recevez-vous habituellement ?",
        q25_description: "Sélectionnez jusqu'à 3",
        q26_title: "🌍 De quels pays envoyez-vous/recevez-vous le plus ?",
        q26_opt1: "États-Unis",
        q26_opt2: "Royaume-Uni/Europe",
        q26_opt3: "Asie",
        q26_opt4: "Plusieurs pays",
        q27_title: "💵 Quelle est la valeur typique de vos colis ?",
        q27_opt1: "Moins de 50 $",
        q27_opt2: "$50–200",
        q27_opt3: "$200–500",
        q27_opt4: "$500+",
        q28_title: "😟 Quelle est votre plus grande préoccupation avec l'expédition actuelle ?",
        q28_opt1: "Coûts élevés",
        q28_opt2: "Temps de livraison",
        q28_opt3: "Sécurité des colis",
        q28_opt4: "Fiabilité du suivi",
        q29_title: "⏱️ Quelle est l'urgence habituelle de vos envois ?",
        q29_opt1: "Très urgent (1-3 jours)",
        q29_opt2: "Assez urgent (1 semaine)",
        q29_opt3: "Pas urgent (2+ semaines)",
        q29_opt4: "Flexible",
        q30_title: "💰 Combien payez-vous généralement pour l'expédition ?",
        q30_opt1: "Moins de 20 $",
        q30_opt2: "$20-50",
        q30_opt3: "$50-100",
        q30_opt4: "$100+",
        q31_title: "🤝 Feriez-vous confiance à un voyageur pour transporter votre colis ?",
        q31_opt1: "Oui, avec vérification",
        q31_opt2: "Oui, avec assurance",
        q31_opt3: "Peut-être",
        q31_opt4: "Besoin de plus d'infos",
        
        // Final questions
        q32_title: "🎯 Qu'est-ce qui compte le plus pour vous lors de l'expédition ?",
        q32_opt1: "💰 Économies de coûts",
        q32_opt2: "⚡ Vitesse de livraison",
        q32_opt3: "🔒 Sécurité et fiabilité",
        q32_opt4: "🎛️ Flexibilité",
        q33_title: "🚀 Quelle est la probabilité que vous essayiez Shippyar lors de son lancement ?",
        q33_opt1: "Absolument ! 🎉",
        q33_opt2: "Probablement",
        q33_opt3: "Pas encore sûr",
        q33_opt4: "Probablement pas",
        q34_title: "🎁 Suivez-nous pour des entrées supplémentaires au tirage au sort :",
        q34_opt1: "✅ J'ai suivi Shippyar sur LinkedIn",
        q34_opt2: "✅ J'ai suivi Shippyar sur Instagram",
        q34_opt3: "✅ J'ai rejoint le canal Telegram de Shippyar",
        q35_title: "🎯 Souhaitez-vous rejoindre le groupe d'accès anticipé de Shippyar ?",
        q35_opt1: "Oui, j'adorerais ! 🚀",
        
        item_opt1: "Articles personnels / cadeaux",
        item_opt2: "Vêtements / accessoires",
        item_opt3: "Électronique",
        item_opt4: "Échantillons / produits commerciaux",
        item_opt5: "Documents / papiers",
        item_opt6: "Nourriture ou produits locaux",
        item_opt7: "Autre",
        
        value_opt1: "Moins de 50 $",
        value_opt2: "50-200 $",
        value_opt3: "200-500 $",
        value_opt4: "500 $+"
    }
};

// Question structure
const questionStructure = [
    { id: 1, type: "text", key: "q1" },
    { id: 2, type: "email", key: "q2" },
    { id: 3, type: "location", key: "q3" },
    { id: 4, type: "language", key: "q4" },
    { id: 5, type: "radio", key: "q5", options: 4 },
    { id: 6, type: "usertype", key: "q6", options: 4 },
    { id: 7, type: "agegroup", key: "q7" },
    
    // Traveler path (8-15) - 8 questions
    { id: 8, type: "radio", key: "q8", showIf: ["✈️ Frequent Traveler"], options: 4 },
    { id: 9, type: "radio", key: "q9", showIf: ["✈️ Frequent Traveler"], options: 5 },
    { id: 10, type: "radio", key: "q10", showIf: ["✈️ Frequent Traveler"], options: 4 },
    { id: 11, type: "radio", key: "q11", showIf: ["✈️ Frequent Traveler"], options: 3 },
    { id: 12, type: "radio", key: "q12", showIf: ["✈️ Frequent Traveler"], options: 4 },
    { id: 13, type: "radio", key: "q13", showIf: ["✈️ Frequent Traveler"], options: 4 },
    { id: 14, type: "radio", key: "q14", showIf: ["✈️ Frequent Traveler"], options: 4 },
    { id: 15, type: "radio", key: "q15", showIf: ["✈️ Frequent Traveler"], options: 4 },
    
    // Seller path (16-23) - 8 questions
    { id: 16, type: "radio", key: "q16", showIf: ["📦 Online Seller"], options: 4 },
    { id: 17, type: "checkbox", key: "q17", showIf: ["📦 Online Seller"], maxSelections: 3, options: 7 },
    { id: 18, type: "radio", key: "q18", showIf: ["📦 Online Seller"], options: 4 },
    { id: 19, type: "radio", key: "q19", showIf: ["📦 Online Seller"], options: 4 },
    { id: 20, type: "radio", key: "q20", showIf: ["📦 Online Seller"], options: 4 },
    { id: 21, type: "radio", key: "q21", showIf: ["📦 Online Seller"], options: 4 },
    { id: 22, type: "radio", key: "q22", showIf: ["📦 Online Seller"], options: 4 },
    { id: 23, type: "radio", key: "q23", showIf: ["📦 Online Seller"], options: 4 },
    
    // Sender/Receiver path (24-31) - 8 questions
    { id: 24, type: "radio", key: "q24", showIf: ["🛍️ Package Sender/Receiver"], options: 4 },
    { id: 25, type: "checkbox", key: "q25", showIf: ["🛍️ Package Sender/Receiver"], maxSelections: 3, options: 7 },
    { id: 26, type: "radio", key: "q26", showIf: ["🛍️ Package Sender/Receiver"], options: 4 },
    { id: 27, type: "radio", key: "q27", showIf: ["🛍️ Package Sender/Receiver"], options: 4 },
    { id: 28, type: "radio", key: "q28", showIf: ["🛍️ Package Sender/Receiver"], options: 4 },
    { id: 29, type: "radio", key: "q29", showIf: ["🛍️ Package Sender/Receiver"], options: 4 },
    { id: 30, type: "radio", key: "q30", showIf: ["🛍️ Package Sender/Receiver"], options: 4 },
    { id: 31, type: "radio", key: "q31", showIf: ["🛍️ Package Sender/Receiver"], options: 4 },
    
    // Final questions (32-35) - shown to everyone
    { id: 32, type: "radio", key: "q32", options: 4 },
    { id: 33, type: "radio", key: "q33", options: 4 },
    { id: 34, type: "checkbox", key: "q34", required: false, options: 3 },
    { id: 35, type: "radio", key: "q35", options: 1 }
];

// Global variables
let currentQuestionIndex = 0;
let answers = {};
let filteredQuestions = [];
let userType = null;
let selectedLanguage = "English";

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    filteredQuestions = questionStructure.filter(q => q.id <= 7);
    updateProgressBar();
    updateQuestionCounter();
});

// Start questionnaire
function startQuestionnaire() {
    document.getElementById('landing-page').classList.remove('active');
    document.getElementById('questionnaire').classList.add('active');
    filterQuestions();
    showQuestion(0);
}

// Filter questions based on user type
function filterQuestions() {
    filteredQuestions = questionStructure.filter(question => {
        // Always show basic questions (1-7)
        if (question.id <= 7) return true;
        
        // Show questions based on user type
        if (question.showIf && userType) {
            return question.showIf.includes(userType);
        }
        
        // Show final questions (32-35) to everyone
        if (question.id >= 32) return true;
        
        return false;
    });
    
    updateQuestionCounter();
}

function getUserTypeIndex() {
    const types = ["✈️ Frequent Traveler", "📦 Online Seller", "🛍️ Package Sender/Receiver", "🔍 Just Exploring"];
    return types.indexOf(userType) + 1;
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

// Render question
function renderQuestion(question) {
    const content = document.getElementById('question-content');
    const trans = translations[selectedLanguage];
    
    let html = `<div class="question-title">${trans[question.key + '_title']}</div>`;
    
    if (trans[question.key + '_description']) {
        html += `<div class="question-description">${trans[question.key + '_description']}</div>`;
    }
    
    if (question.type === 'text' || question.type === 'email') {
        html += `
            <input type="${question.type === 'email' ? 'email' : 'text'}" 
                   class="input-field" 
                   placeholder="${trans[question.key + '_placeholder'] || ''}"
                   value="${answers[question.id] || ''}"
                   onchange="saveAnswer(${question.id}, this.value)"
                   required>
        `;
    } else if (question.type === 'location') {
        html += `
            <div class="location-container">
                <input type="text" 
                       class="input-field" 
                       placeholder="${trans[question.key + '_placeholder']}"
                       value="${answers[question.id] || ''}"
                       oninput="handleLocationInput(${question.id}, this.value)"
                       onchange="saveAnswer(${question.id}, this.value)"
                       required>
                <div class="location-suggestions" id="suggestions-${question.id}" style="display: none;"></div>
            </div>
        `;
    } else if (question.type === 'language') {
        html += '<div class="question-options">';
        const languages = ["English", "Turkish", "Arabic", "Spanish", "French", "Other"];
        languages.forEach(lang => {
            const isSelected = answers[question.id] === lang;
            html += `
                <div class="option ${isSelected ? 'selected' : ''}" onclick="selectLanguage(${question.id}, '${lang}')">
                    <input type="radio" name="question_${question.id}" value="${lang}" ${isSelected ? 'checked' : ''}>
                    <label>${lang}</label>
                </div>
            `;
        });
        html += '</div>';
    } else if (question.type === 'usertype') {
        html += '<div class="question-options">';
        for (let i = 1; i <= 4; i++) {
            const optionText = trans[`${question.key}_opt${i}`];
            const isSelected = answers[question.id] === optionText;
            html += `
                <div class="option ${isSelected ? 'selected' : ''}" onclick="selectUserType(${question.id}, '${optionText}')">
                    <input type="radio" name="question_${question.id}" value="${optionText}" ${isSelected ? 'checked' : ''}>
                    <label>${optionText}</label>
                </div>
            `;
        }
        html += '</div>';
    } else if (question.type === 'agegroup') {
        html += '<div class="question-options">';
        const ageGroups = ["18–24", "25–34", "35–44", "45–54", "55+"];
        ageGroups.forEach(age => {
            const isSelected = answers[question.id] === age;
            html += `
                <div class="option ${isSelected ? 'selected' : ''}" onclick="selectRadioOption(${question.id}, '${age}', false)">
                    <input type="radio" name="question_${question.id}" value="${age}" ${isSelected ? 'checked' : ''}>
                    <label>${age}</label>
                </div>
            `;
        });
        html += '</div>';
    } else if (question.type === 'radio') {
        html += '<div class="question-options">';
        for (let i = 1; i <= question.options; i++) {
            const optionKey = `${question.key}_opt${i}`;
            if (trans[optionKey]) {
                const optionText = trans[optionKey];
                const isSelected = answers[question.id] === optionText;
                html += `
                    <div class="option ${isSelected ? 'selected' : ''}" onclick="selectRadioOption(${question.id}, '${optionText.replace(/'/g, "\\'")}', false)">
                        <input type="radio" name="question_${question.id}" value="${optionText}" ${isSelected ? 'checked' : ''}>
                        <label>${optionText}</label>
                    </div>
                `;
            }
        }
        html += '</div>';
    } else if (question.type === 'checkbox') {
        html += '<div class="question-options">';
        for (let i = 1; i <= question.options; i++) {
            const optionKey = question.key.includes('item') || question.key === 'q17' || question.key === 'q25' ? `item_opt${i}` : `${question.key}_opt${i}`;
            if (trans[optionKey]) {
                const optionText = trans[optionKey];
                const isSelected = answers[question.id] && answers[question.id].includes(optionText);
                html += `
                    <div class="option ${isSelected ? 'selected' : ''}" onclick="selectCheckboxOption(${question.id}, '${optionText.replace(/'/g, "\\'")}', ${question.maxSelections || 999})">
                        <input type="checkbox" value="${optionText}" ${isSelected ? 'checked' : ''}>
                        <label>${optionText}</label>
                    </div>
                `;
            }
        }
        html += '</div>';
    }
    
    content.innerHTML = html;
}

// Save answer
function saveAnswer(questionId, value) {
    answers[questionId] = value;
}

// Select language
function selectLanguage(questionId, language) {
    answers[questionId] = language;
    // If "Other" is selected, use English for the questionnaire
    selectedLanguage = (language === "Other") ? "English" : language;
    renderQuestion(filteredQuestions[currentQuestionIndex]);
}

// Select user type
function selectUserType(questionId, value) {
    answers[questionId] = value;
    userType = value;
    filterQuestions();
    renderQuestion(filteredQuestions[currentQuestionIndex]);
}

// Select radio option
function selectRadioOption(questionId, value, hasInput) {
    answers[questionId] = value;
    renderQuestion(filteredQuestions[currentQuestionIndex]);
}

// Select checkbox option
function selectCheckboxOption(questionId, value, maxSelections) {
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
    renderQuestion(filteredQuestions[currentQuestionIndex]);
}

// Location input handler
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

function showSuggestions(questionId, suggestions) {
    const suggestionsDiv = document.getElementById(`suggestions-${questionId}`);
    if (!suggestionsDiv || suggestions.length === 0) {
        hideSuggestions(questionId);
        return;
    }
    
    suggestionsDiv.innerHTML = suggestions.map(suggestion => 
        `<div class="suggestion-item" onclick="selectSuggestion(${questionId}, '${suggestion}')">${suggestion}</div>`
    ).join('');
    suggestionsDiv.style.display = 'block';
}

function hideSuggestions(questionId) {
    const suggestionsDiv = document.getElementById(`suggestions-${questionId}`);
    if (suggestionsDiv) {
        suggestionsDiv.style.display = 'none';
    }
}

function selectSuggestion(questionId, suggestion) {
    const input = document.querySelector(`input[oninput*="handleLocationInput(${questionId}"]`);
    if (input) {
        input.value = suggestion;
        saveAnswer(questionId, suggestion);
    }
    hideSuggestions(questionId);
}

// Navigation
function nextQuestion() {
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

// Validation
function validateCurrentQuestion() {
    const question = filteredQuestions[currentQuestionIndex];
    if (question.required === false) return true;
    
    const answer = answers[question.id];
    
    if (!answer || (typeof answer === 'string' && answer.trim() === '')) {
        alert(translations[selectedLanguage === "English" ? "English" : selectedLanguage].q1_title ? 
            "Please answer this question before continuing." : 
            "Please answer this question before continuing.");
        return false;
    }
    
    if (question.type === 'checkbox' && (!Array.isArray(answer) || answer.length === 0)) {
        alert("Please select at least one option.");
        return false;
    }
    
    if (question.type === 'email' && answer && !isValidEmail(answer)) {
        alert("Please enter a valid email address.");
        return false;
    }
    
    return true;
}

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
    console.log('Questionnaire submitted:', answers);
    console.log('Language:', selectedLanguage);
    console.log('User Type:', userType);
    
    document.getElementById('questionnaire').classList.remove('active');
    document.getElementById('thank-you').classList.add('active');
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

// Copy discount code function
function copyCode() {
    const code = 'QUEST';
    navigator.clipboard.writeText(code).then(function() {
        // Show success feedback
        const button = document.querySelector('.copy-button');
        const originalText = button.innerHTML;
        button.innerHTML = '✅ Copied!';
        button.style.background = 'rgba(34, 197, 94, 0.3)';
        button.style.borderColor = 'rgba(34, 197, 94, 0.5)';
        
        // Reset after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = 'rgba(255,255,255,0.2)';
            button.style.borderColor = 'rgba(255,255,255,0.3)';
        }, 2000);
    }).catch(function(err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Show success feedback
        const button = document.querySelector('.copy-button');
        const originalText = button.innerHTML;
        button.innerHTML = '✅ Copied!';
        button.style.background = 'rgba(34, 197, 94, 0.3)';
        button.style.borderColor = 'rgba(34, 197, 94, 0.5)';
        
        // Reset after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = 'rgba(255,255,255,0.2)';
            button.style.borderColor = 'rgba(255,255,255,0.3)';
        }, 2000);
    });
}
