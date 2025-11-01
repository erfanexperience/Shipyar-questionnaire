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
        q2_description: "We'll use this for early access confirmation",
        q2_placeholder: "Enter your email address",
        q3_title: "Where do you live?",
        q3_description: "Help us connect you with local travelers",
        q3_placeholder: "Start typing your country or city...",
        q4_title: "What's your preferred language?",
        q5_title: "How did you hear about Shippyar?",
        q5_opt1: "Social Media (Instagram / LinkedIn / TikTok)",
        q5_opt2: "Friend or referral",
        q5_opt3: "Online ad or blog",
        q5_opt4: "Other",
        q6_title: "Which best describes you?",
        q6_description: "This helps us show you the most relevant questions!",
        q6_opt1: "International traveler",
        q6_opt2: "Online Store Owner / E-commerce Seller",
        q6_opt3: "Buyer / Recipient",
        q7_title: "What's your age group?",
        
        // Traveler path (8 questions)
        q8_title: "How often do you travel internationally?",
        q8_opt1: "Once or twice a year",
        q8_opt2: "Every few months",
        q8_opt3: "Monthly",
        q8_opt4: "Almost every week",
        q9_title: "Which routes do you usually travel?",
        q9_opt1: "U.S. ↔ Middle East",
        q9_opt2: "U.S. ↔ Europe",
        q9_opt3: "U.S. ↔ Asia",
        q9_opt4: "U.S. ↔ South America",
        q9_opt5: "Other",
        q10_title: "What's your typical luggage situation?",
        q10_opt1: "Always have extra space",
        q10_opt2: "Sometimes have space",
        q10_opt3: "Usually full",
        q10_opt4: "Depends on the trip",
        q11_title: "Would you be open to purchasing and delivering verified buyers' items during your trips?",
        q11_opt1: "Yes, I'm open to it",
        q11_opt2: "Maybe, depends on the item",
        q11_opt3: "Not right now",
        q12_title: "What would make you feel comfortable doing that?",
        q12_opt1: "Verified buyers & ID check",
        q12_opt2: "Insurance / protection by Shippyar",
        q12_opt3: "Secure payments",
        q12_opt4: "Reviews & community ratings",
        q12_opt5: "All of the above",
        q13_title: "How much would you charge per kg?",
        q13_opt1: "$5-10",
        q13_opt2: "$10-15",
        q13_opt3: "$15-20",
        q13_opt4: "Depends on destination",
        q14_title: "What motivates you to join as a traveler?",
        q14_opt1: "Earn extra money",
        q14_opt2: "Help others get what they need",
        q14_opt3: "Reduce my travel costs",
        q14_opt4: "Try something new",
        q15_title: "How likely are you to try Shippyar when it launches?",
        q15_opt1: "Very likely",
        q15_opt2: "Maybe",
        q15_opt3: "Not sure",
        
        // Seller path (7 questions)
        q16_title: "How often do you ship internationally?",
        q16_opt1: "Daily",
        q16_opt2: "Weekly",
        q16_opt3: "Monthly",
        q16_opt4: "Occasionally",
        q17_title: "What are your top destination markets?",
        q17_opt1: "Middle East",
        q17_opt2: "Asia",
        q17_opt3: "Europe",
        q17_opt4: "South America",
        q17_opt5: "North America",
        q18_title: "What's your biggest challenge with international shipping?",
        q18_opt1: "High costs",
        q18_opt2: "Delays or customs issues",
        q18_opt3: "Package loss/damage",
        q18_opt4: "Unreliable couriers",
        q19_title: "What's the usual value range of your international orders?",
        q19_opt1: "Under $50",
        q19_opt2: "$50 – $150",
        q19_opt3: "$150 – $500",
        q19_opt4: "Over $500",
        q20_title: "What types of items do you usually ship?",
        q20_opt1: "Fashion / Accessories",
        q20_opt2: "Electronics / Gadgets",
        q20_opt3: "Beauty / Personal care",
        q20_opt4: "Collectibles / Custom items",
        q20_opt5: "Other",
        q21_title: "Would you be interested in a partnership or pilot with Shippyar?",
        q21_opt1: "Yes",
        q21_opt2: "Maybe later",
        q21_opt3: "Not now",
        q22_title: "How likely are you to try Shippyar when it launches?",
        q22_opt1: "Very likely",
        q22_opt2: "Maybe",
        q22_opt3: "Not sure",
        
        // Buyer/Recipient path (7 questions)
        q23_title: "How often do you buy products from abroad?",
        q23_opt1: "Rarely",
        q23_opt2: "Sometimes (every few months)",
        q23_opt3: "Often (monthly or more)",
        q24_title: "What kind of products do you usually buy?",
        q24_opt1: "Fashion & accessories",
        q24_opt2: "Tech gadgets",
        q24_opt3: "Beauty & wellness",
        q24_opt4: "Collectibles",
        q24_opt5: "Other",
        q25_title: "What's the typical value range of items you order from abroad?",
        q25_opt1: "Under $50",
        q25_opt2: "$50 – $150",
        q25_opt3: "$150 – $500",
        q25_opt4: "Over $500",
        q26_title: "What's your biggest issue with current shipping options?",
        q26_opt1: "Too expensive",
        q26_opt2: "Takes too long",
        q26_opt3: "Customs problems",
        q26_opt4: "No tracking / trust issues",
        q27_title: "Would you trust verified travelers to bring your items safely?",
        q27_opt1: "Yes, if they're verified",
        q27_opt2: "Maybe, if I can see reviews",
        q27_opt3: "Not sure yet",
        q28_title: "What would make you most likely to use Shippyar?",
        q28_opt1: "Lower cost",
        q28_opt2: "Faster delivery",
        q28_opt3: "Verified & insured system",
        q28_opt4: "All of the above",
        q29_title: "How likely are you to try Shippyar when it launches?",
        q29_opt1: "Very likely",
        q29_opt2: "Maybe",
        q29_opt3: "Not sure",
        
        // Common
        item_opt1: "Fashion & accessories",
        item_opt2: "Tech gadgets",
        item_opt3: "Beauty & wellness",
        item_opt4: "Collectibles",
        item_opt5: "Other",
        
        value_opt1: "Under $50",
        value_opt2: "$50–200",
        value_opt3: "$200–500",
        value_opt4: "$500+"
    },
    Turkish: {
        q1_title: "Adınız ve soyadınız nedir?",
        q1_placeholder: "Adınızı ve soyadınızı girin",
        q2_title: "E-posta adresiniz nedir?",
        q2_description: "Erken erişim ve çekiliş onayı için kullanacağız",
        q2_placeholder: "E-posta adresinizi girin",
        q3_title: "Nerede yaşıyorsunuz?",
        q3_description: "Sizi yerel gezginlerle bağlamamıza yardımcı olun",
        q3_placeholder: "Ülkenizi veya şehrinizi yazmaya başlayın...",
        q4_title: "Tercih ettiğiniz dil nedir?",
        q5_title: "Shippyar'ı nasıl duydunuz?",
        q5_opt1: "Sosyal Medya (Instagram / LinkedIn / TikTok)",
        q5_opt2: "Arkadaş veya tavsiye",
        q5_opt3: "Çevrimiçi reklam veya blog",
        q5_opt4: "Diğer",
        q6_title: "Sizi en iyi hangisi tanımlar?",
        q6_description: "Bu, size en uygun soruları göstermemize yardımcı olur!",
        q6_opt1: "Uluslararası gezgin",
        q6_opt2: "Online Mağaza Sahibi / E-ticaret Satıcısı",
        q6_opt3: "Alıcı / Alıcı",
        q7_title: "Yaş grubunuz nedir?",
        
        // Traveler path (8 questions)
        q8_title: "Ne sıklıkla uluslararası seyahat ediyorsunuz?",
        q8_opt1: "Yılda bir veya iki kez",
        q8_opt2: "Birkaç ayda bir",
        q8_opt3: "Aylık",
        q8_opt4: "Neredeyse her hafta",
        q9_title: "Genellikle hangi rotalarda seyahat ediyorsunuz?",
        q9_opt1: "ABD ↔ Orta Doğu",
        q9_opt2: "ABD ↔ Avrupa",
        q9_opt3: "ABD ↔ Asya",
        q9_opt4: "ABD ↔ Güney Amerika",
        q9_opt5: "Diğer",
        q10_title: "Bagaj durumunuz nasıl?",
        q10_opt1: "Her zaman ekstra yer var",
        q10_opt2: "Bazen yer var",
        q10_opt3: "Genellikle dolu",
        q10_opt4: "Seyahate bağlı",
        q11_title: "Doğrulanmış alıcıların öğelerini seyahatleriniz sırasında satın alıp teslim etmeye açık mısınız?",
        q11_opt1: "Evet, buna açığım",
        q11_opt2: "Belki, öğeye bağlı",
        q11_opt3: "Şimdi değil",
        q12_title: "Bunu yaparken sizi rahat hissettiren nedir?",
        q12_opt1: "Doğrulanmış alıcılar ve kimlik doğrulama",
        q12_opt2: "Shippyar sigortası / koruması",
        q12_opt3: "Güvenli ödemeler",
        q12_opt4: "Topluluk yorumları ve derecelendirmeleri",
        q12_opt5: "Hepsi",
        q13_title: "Kg başına ne kadar ücret alırdınız?",
        q13_opt1: "$5-10",
        q13_opt2: "$10-15",
        q13_opt3: "$15-20",
        q13_opt4: "Hedefe bağlı",
        q14_title: "Gezgin olarak katılmanızı motive eden nedir?",
        q14_opt1: "Ekstra para kazanmak",
        q14_opt2: "Diğerlerinin ihtiyaç duyduklarını almalarına yardımcı olmak",
        q14_opt3: "Seyahat maliyetlerimi azaltmak",
        q14_opt4: "Yeni bir şey denemek",
        q15_title: "Shippyar başlatıldığında deneme olasılığınız nedir?",
        q15_opt1: "Çok muhtemel",
        q15_opt2: "Belki",
        q15_opt3: "Emin değilim",
        
        // Seller path (7 questions)
        q16_title: "Ne sıklıkla uluslararası gönderim yapıyorsunuz?",
        q16_opt1: "Günlük",
        q16_opt2: "Haftalık",
        q16_opt3: "Aylık",
        q16_opt4: "Ara sıra",
        q17_title: "Başlıca hedef pazarlarınız nelerdir?",
        q17_opt1: "Orta Doğu",
        q17_opt2: "Asya",
        q17_opt3: "Avrupa",
        q17_opt4: "Güney Amerika",
        q17_opt5: "Kuzey Amerika",
        q18_title: "Uluslararası gönderimde en büyük zorluğunuz nedir?",
        q18_opt1: "Yüksek maliyetler",
        q18_opt2: "Gecikmeler veya gümrük sorunları",
        q18_opt3: "Kayıp/hasar paketleri",
        q18_opt4: "Güvenilir olmayan kurye şirketleri",
        q19_title: "Uluslararası siparişlerinizin tipik değer aralığı nedir?",
        q19_opt1: "$50'nin altında",
        q19_opt2: "$50 – $150",
        q19_opt3: "$150 – $500",
        q19_opt4: "$500'den fazla",
        q20_title: "Genellikle ne tür öğeler gönderiyorsunuz?",
        q20_opt1: "Moda / Aksesuarlar",
        q20_opt2: "Elektronik / Cihazlar",
        q20_opt3: "Güzellik / Kişisel bakım",
        q20_opt4: "Koleksiyon öğeleri / Özelleştirilmiş öğeler",
        q20_opt5: "Diğer",
        q21_title: "Shippyar ile bir ortaklık veya pilot çalışma ile ilgilenir misiniz?",
        q21_opt1: "Evet",
        q21_opt2: "Belki daha sonra",
        q21_opt3: "Şimdi değil",
        q22_title: "Shippyar başlatıldığında deneme olasılığınız nedir?",
        q22_opt1: "Çok muhtemel",
        q22_opt2: "Belki",
        q22_opt3: "Emin değilim",
        
        // Buyer/Recipient path (7 questions)
        q23_title: "Ne sıklıkla yurt dışından ürün satın alıyorsunuz?",
        q23_opt1: "Nadiren",
        q23_opt2: "Bazen (birkaç ayda bir)",
        q23_opt3: "Sık sık (aylık veya daha fazla)",
        q24_title: "Genellikle ne tür ürünler satın alıyorsunuz?",
        q24_opt1: "Moda ve aksesuarlar",
        q24_opt2: "Teknoloji cihazları",
        q24_opt3: "Güzellik ve sağlık",
        q24_opt4: "Koleksiyon öğeleri",
        q24_opt5: "Diğer",
        q25_title: "Yurt dışından sipariş ettiğiniz öğelerin tipik değer aralığı nedir?",
        q25_opt1: "$50'nin altında",
        q25_opt2: "$50 – $150",
        q25_opt3: "$150 – $500",
        q25_opt4: "$500'den fazla",
        q26_title: "Mevcut gönderim seçeneklerinizle en büyük sorununuz nedir?",
        q26_opt1: "Çok pahalı",
        q26_opt2: "Çok uzun sürüyor",
        q26_opt3: "Gümrük sorunları",
        q26_opt4: "Takip yok / güven sorunları",
        q27_title: "Öğelerinizi güvenli bir şekilde getirmesi için doğrulanmış gezginlere güvenir misiniz?",
        q27_opt1: "Evet, doğrulanmışlarsa",
        q27_opt2: "Belki, yorumları görebilirsem",
        q27_opt3: "Henüz emin değilim",
        q28_title: "Shippyar'ı kullanmanızı daha olası kılan nedir?",
        q28_opt1: "Daha düşük maliyet",
        q28_opt2: "Daha hızlı teslimat",
        q28_opt3: "Doğrulanmış ve sigortalı sistem",
        q28_opt4: "Hepsi",
        q29_title: "Shippyar başlatıldığında deneme olasılığınız nedir?",
        q29_opt1: "Çok muhtemel",
        q29_opt2: "Belki",
        q29_opt3: "Emin değilim",
        
        submit_button: "Gönder",
        next_button: "Sonraki",
        previous_button: "Önceki",
        
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
        value_opt4: "500$+",
        
        submit_button: "Submit",
        next_button: "Next",
        previous_button: "Previous"
    },
    Arabic: {
        q1_title: "ما هو اسمك الكامل؟",
        q1_placeholder: "أدخل اسمك الكامل",
        q2_title: "ما هو عنوان بريدك الإلكتروني؟",
        q2_description: "سنستخدمه للوصول المبكر وتأكيد السحب",
        q2_placeholder: "أدخل عنوان بريدك الإلكتروني",
        q3_title: "أين تعيش؟",
        q3_description: "ساعدنا في ربطك بالمسافرين المحليين",
        q3_placeholder: "ابدأ بكتابة بلدك أو مدينتك...",
        q4_title: "ما هي لغتك المفضلة؟",
        q5_title: "كيف سمعت عن Shippyar؟",
        q5_opt1: "وسائل التواصل الاجتماعي (Instagram / LinkedIn / TikTok)",
        q5_opt2: "صديق أو إحالة",
        q5_opt3: "إعلان أو مدونة عبر الإنترنت",
        q5_opt4: "أخرى",
        q6_title: "أي من هذه تصفك بشكل أفضل؟",
        q6_description: "هذا يساعدنا على عرض الأسئلة الأكثر صلة لك!",
        q6_opt1: "مسافر دولي",
        q6_opt2: "مالك متجر إلكتروني / بائع إلكتروني",
        q6_opt3: "مشتري / مستلم",
        q7_title: "ما هي فئتك العمرية؟",
        
        // Traveler path (8 questions)
        q8_title: "كم مرة تسافر دولياً؟",
        q8_opt1: "مرة أو مرتين في السنة",
        q8_opt2: "كل بضعة أشهر",
        q8_opt3: "شهرياً",
        q8_opt4: "تقريباً كل أسبوع",
        q9_title: "ما هي المسارات التي تسافر فيها عادة؟",
        q9_opt1: "الولايات المتحدة ↔ الشرق الأوسط",
        q9_opt2: "الولايات المتحدة ↔ أوروبا",
        q9_opt3: "الولايات المتحدة ↔ آسيا",
        q9_opt4: "الولايات المتحدة ↔ أمريكا الجنوبية",
        q9_opt5: "أخرى",
        q10_title: "ما هو وضع أمتعتك المعتاد؟",
        q10_opt1: "دائماً لدي مساحة إضافية",
        q10_opt2: "أحياناً لدي مساحة",
        q10_opt3: "عادة ممتلئة",
        q10_opt4: "يعتمد على الرحلة",
        q11_title: "هل أنت منفتح على شراء وتسليم عناصر المشترين الموثقين خلال رحلاتك؟",
        q11_opt1: "نعم، أنا منفتح على ذلك",
        q11_opt2: "ربما، يعتمد على العنصر",
        q11_opt3: "ليس الآن",
        q12_title: "ما الذي يجعلك تشعر بالراحة عند القيام بذلك؟",
        q12_opt1: "مشترون موثقون والتحقق من الهوية",
        q12_opt2: "التأمين / الحماية من Shippyar",
        q12_opt3: "مدفوعات آمنة",
        q12_opt4: "التقييمات وتقييمات المجتمع",
        q12_opt5: "كل ما سبق",
        q13_title: "كم ستتقاضى لكل كيلوغرام؟",
        q13_opt1: "$5-10",
        q13_opt2: "$10-15",
        q13_opt3: "$15-20",
        q13_opt4: "يعتمد على الوجهة",
        q14_title: "ما الذي يحفزك للانضمام كمسافر؟",
        q14_opt1: "كسب المال الإضافي",
        q14_opt2: "مساعدة الآخرين في الحصول على ما يحتاجونه",
        q14_opt3: "تقليل تكاليف السفر",
        q14_opt4: "تجربة شيء جديد",
        q15_title: "ما مدى احتمالية تجربتك لـ Shippyar عند إطلاقه؟",
        q15_opt1: "محتمل جداً",
        q15_opt2: "ربما",
        q15_opt3: "لست متأكداً",
        
        // Seller path (7 questions)
        q16_title: "كم مرة ترسل دولياً؟",
        q16_opt1: "يومياً",
        q16_opt2: "أسبوعياً",
        q16_opt3: "شهرياً",
        q16_opt4: "أحياناً",
        q17_title: "ما هي أسواق الوجهة الرئيسية لديك؟",
        q17_opt1: "الشرق الأوسط",
        q17_opt2: "آسيا",
        q17_opt3: "أوروبا",
        q17_opt4: "أمريكا الجنوبية",
        q17_opt5: "أمريكا الشمالية",
        q18_title: "ما هو أكبر تحدٍ لديك في الشحن الدولي؟",
        q18_opt1: "تكاليف عالية",
        q18_opt2: "تأخيرات أو مشاكل جمركية",
        q18_opt3: "فقدان/تلف الطرود",
        q18_opt4: "شركات الشحن غير الموثوقة",
        q19_title: "ما هي القيمة النموذجية لطلباتك الدولية؟",
        q19_opt1: "أقل من $50",
        q19_opt2: "$50 – $150",
        q19_opt3: "$150 – $500",
        q19_opt4: "أكثر من $500",
        q20_title: "ما أنواع العناصر التي ترسلها عادة؟",
        q20_opt1: "الأزياء / الإكسسوارات",
        q20_opt2: "الإلكترونيات / الأدوات",
        q20_opt3: "الجمال / العناية الشخصية",
        q20_opt4: "التحف / العناصر المخصصة",
        q20_opt5: "أخرى",
        q21_title: "هل أنت مهتم بشراكة أو تجربة مع Shippyar؟",
        q21_opt1: "نعم",
        q21_opt2: "ربما لاحقاً",
        q21_opt3: "ليس الآن",
        q22_title: "ما مدى احتمالية تجربتك لـ Shippyar عند إطلاقه؟",
        q22_opt1: "محتمل جداً",
        q22_opt2: "ربما",
        q22_opt3: "لست متأكداً",
        
        // Buyer/Recipient path (7 questions)
        q23_title: "كم مرة تشتري منتجات من الخارج؟",
        q23_opt1: "نادراً",
        q23_opt2: "أحياناً (كل بضعة أشهر)",
        q23_opt3: "كثيراً (شهرياً أو أكثر)",
        q24_title: "ما أنواع المنتجات التي تشتريها عادة؟",
        q24_opt1: "الأزياء والإكسسوارات",
        q24_opt2: "الأجهزة التقنية",
        q24_opt3: "الجمال والعافية",
        q24_opt4: "التحف",
        q24_opt5: "أخرى",
        q25_title: "ما هي القيمة النموذجية للعناصر التي تطلبها من الخارج؟",
        q25_opt1: "أقل من $50",
        q25_opt2: "$50 – $150",
        q25_opt3: "$150 – $500",
        q25_opt4: "أكثر من $500",
        q26_title: "ما هي أكبر مشكلة لديك مع خيارات الشحن الحالية؟",
        q26_opt1: "مكلفة جداً",
        q26_opt2: "تستغرق وقتاً طويلاً",
        q26_opt3: "مشاكل جمركية",
        q26_opt4: "لا يوجد تتبع / مشاكل ثقة",
        q27_title: "هل ستثق في المسافرين الموثقين لإحضار عناصرك بأمان؟",
        q27_opt1: "نعم، إذا كانوا موثقين",
        q27_opt2: "ربما، إذا استطعت رؤية التقييمات",
        q27_opt3: "لست متأكداً بعد",
        q28_title: "ما الذي يجعلك أكثر احتمالاً لاستخدام Shippyar؟",
        q28_opt1: "تكلفة أقل",
        q28_opt2: "تسليم أسرع",
        q28_opt3: "نظام موثق ومؤمن",
        q28_opt4: "كل ما سبق",
        q29_title: "ما مدى احتمالية تجربتك لـ Shippyar عند إطلاقه؟",
        q29_opt1: "محتمل جداً",
        q29_opt2: "ربما",
        q29_opt3: "لست متأكداً",
        
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
        value_opt4: "500 دولار+",
        
        submit_button: "إرسال",
        next_button: "التالي",
        previous_button: "السابق"
    },
    Spanish: {
        q1_title: "¿Cuál es tu nombre completo?",
        q1_placeholder: "Ingresa tu nombre completo",
        q2_title: "¿Cuál es tu correo electrónico?",
        q2_description: "Lo usaremos para acceso anticipado y confirmación del sorteo",
        q2_placeholder: "Ingresa tu correo electrónico",
        q3_title: "¿Dónde vives?",
        q3_description: "Ayúdanos a conectarte con viajeros locales",
        q3_placeholder: "Comienza a escribir tu país o ciudad...",
        q4_title: "¿Cuál es tu idioma preferido?",
        q5_title: "¿Cómo te enteraste de Shippyar?",
        q5_opt1: "Redes Sociales (Instagram / LinkedIn / TikTok)",
        q5_opt2: "Amigo o recomendación",
        q5_opt3: "Anuncio o blog en línea",
        q5_opt4: "Otro",
        q6_title: "¿Cuál te describe mejor?",
        q6_description: "¡Esto nos ayuda a mostrarte las preguntas más relevantes!",
        q6_opt1: "Viajero internacional",
        q6_opt2: "Dueño de tienda en línea / Vendedor de comercio electrónico",
        q6_opt3: "Comprador / Receptor",
        q7_title: "¿Cuál es tu grupo de edad?",
        
        // Traveler path (8 questions)
        q8_title: "¿Con qué frecuencia viajas internacionalmente?",
        q8_opt1: "Una o dos veces al año",
        q8_opt2: "Cada pocos meses",
        q8_opt3: "Mensualmente",
        q8_opt4: "Casi todas las semanas",
        q9_title: "¿Qué rutas sueles viajar?",
        q9_opt1: "EE.UU. ↔ Medio Oriente",
        q9_opt2: "EE.UU. ↔ Europa",
        q9_opt3: "EE.UU. ↔ Asia",
        q9_opt4: "EE.UU. ↔ América del Sur",
        q9_opt5: "Otra",
        q10_title: "¿Cuál es tu situación típica de equipaje?",
        q10_opt1: "Siempre tengo espacio extra",
        q10_opt2: "A veces tengo espacio",
        q10_opt3: "Usualmente lleno",
        q10_opt4: "Depende del viaje",
        q11_title: "¿Estarías abierto a comprar y entregar artículos de compradores verificados durante tus viajes?",
        q11_opt1: "Sí, estoy abierto a eso",
        q11_opt2: "Tal vez, depende del artículo",
        q11_opt3: "Ahora no",
        q12_title: "¿Qué te haría sentir cómodo haciendo eso?",
        q12_opt1: "Compradores verificados y verificación de identidad",
        q12_opt2: "Seguro / protección de Shippyar",
        q12_opt3: "Pagos seguros",
        q12_opt4: "Reseñas y calificaciones de la comunidad",
        q12_opt5: "Todo lo anterior",
        q13_title: "¿Cuánto cobrarías por kg?",
        q13_opt1: "$5-10",
        q13_opt2: "$10-15",
        q13_opt3: "$15-20",
        q13_opt4: "Depende del destino",
        q14_title: "¿Qué te motiva a unirte como viajero?",
        q14_opt1: "Ganar dinero extra",
        q14_opt2: "Ayudar a otros a obtener lo que necesitan",
        q14_opt3: "Reducir mis costos de viaje",
        q14_opt4: "Probar algo nuevo",
        q15_title: "¿Qué tan probable es que pruebes Shippyar cuando se lance?",
        q15_opt1: "Muy probable",
        q15_opt2: "Tal vez",
        q15_opt3: "No estoy seguro",
        
        // Seller path (7 questions)
        q16_title: "¿Con qué frecuencia envías internacionalmente?",
        q16_opt1: "Diariamente",
        q16_opt2: "Semanalmente",
        q16_opt3: "Mensualmente",
        q16_opt4: "Ocasionalmente",
        q17_title: "¿Cuáles son tus principales mercados de destino?",
        q17_opt1: "Medio Oriente",
        q17_opt2: "Asia",
        q17_opt3: "Europa",
        q17_opt4: "América del Sur",
        q17_opt5: "América del Norte",
        q18_title: "¿Cuál es tu mayor desafío con el envío internacional?",
        q18_opt1: "Costos altos",
        q18_opt2: "Retrasos o problemas de aduana",
        q18_opt3: "Pérdida/daño de paquetes",
        q18_opt4: "Mensajerías no confiables",
        q19_title: "¿Cuál es el rango de valor típico de tus pedidos internacionales?",
        q19_opt1: "Menos de $50",
        q19_opt2: "$50 – $150",
        q19_opt3: "$150 – $500",
        q19_opt4: "Más de $500",
        q20_title: "¿Qué tipos de artículos sueles enviar?",
        q20_opt1: "Moda / Accesorios",
        q20_opt2: "Electrónica / Gadgets",
        q20_opt3: "Belleza / Cuidado personal",
        q20_opt4: "Coleccionables / Artículos personalizados",
        q20_opt5: "Otro",
        q21_title: "¿Estarías interesado en una asociación o piloto con Shippyar?",
        q21_opt1: "Sí",
        q21_opt2: "Tal vez más tarde",
        q21_opt3: "Ahora no",
        q22_title: "¿Qué tan probable es que pruebes Shippyar cuando se lance?",
        q22_opt1: "Muy probable",
        q22_opt2: "Tal vez",
        q22_opt3: "No estoy seguro",
        
        // Buyer/Recipient path (7 questions)
        q23_title: "¿Con qué frecuencia compras productos del extranjero?",
        q23_opt1: "Raramente",
        q23_opt2: "A veces (cada pocos meses)",
        q23_opt3: "A menudo (mensualmente o más)",
        q24_title: "¿Qué tipo de productos sueles comprar?",
        q24_opt1: "Moda y accesorios",
        q24_opt2: "Gadgets tecnológicos",
        q24_opt3: "Belleza y bienestar",
        q24_opt4: "Coleccionables",
        q24_opt5: "Otro",
        q25_title: "¿Cuál es el rango de valor típico de los artículos que pides del extranjero?",
        q25_opt1: "Menos de $50",
        q25_opt2: "$50 – $150",
        q25_opt3: "$150 – $500",
        q25_opt4: "Más de $500",
        q26_title: "¿Cuál es tu mayor problema con las opciones de envío actuales?",
        q26_opt1: "Demasiado caro",
        q26_opt2: "Toma demasiado tiempo",
        q26_opt3: "Problemas de aduana",
        q26_opt4: "Sin seguimiento / problemas de confianza",
        q27_title: "¿Confiarías en viajeros verificados para traer tus artículos de forma segura?",
        q27_opt1: "Sí, si están verificados",
        q27_opt2: "Tal vez, si puedo ver reseñas",
        q27_opt3: "Aún no estoy seguro",
        q28_title: "¿Qué te haría más probable usar Shippyar?",
        q28_opt1: "Menor costo",
        q28_opt2: "Entrega más rápida",
        q28_opt3: "Sistema verificado y asegurado",
        q28_opt4: "Todo lo anterior",
        q29_title: "¿Qué tan probable es que pruebes Shippyar cuando se lance?",
        q29_opt1: "Muy probable",
        q29_opt2: "Tal vez",
        q29_opt3: "No estoy seguro",
        
        submit_button: "Enviar",
        next_button: "Siguiente",
        previous_button: "Anterior",
        
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
        q2_description: "Nous l'utiliserons pour l'accès anticipé et la confirmation du tirage au sort",
        q2_placeholder: "Entrez votre adresse email",
        q3_title: "Où habitez-vous ?",
        q3_description: "Aidez-nous à vous connecter avec des voyageurs locaux",
        q3_placeholder: "Commencez à taper votre pays ou ville...",
        q4_title: "Quelle est votre langue préférée ?",
        q5_title: "Comment avez-vous entendu parler de Shippyar ?",
        q5_opt1: "Réseaux Sociaux (Instagram / LinkedIn / TikTok)",
        q5_opt2: "Ami ou recommandation",
        q5_opt3: "Publicité ou blog en ligne",
        q5_opt4: "Autre",
        q6_title: "Lequel vous décrit le mieux ?",
        q6_description: "Cela nous aide à vous montrer les questions les plus pertinentes !",
        q6_opt1: "Voyageur international",
        q6_opt2: "Propriétaire de boutique en ligne / Vendeur de commerce électronique",
        q6_opt3: "Acheteur / Destinataire",
        q7_title: "Quel est votre groupe d'âge ?",
        
        // Traveler path (8 questions)
        q8_title: "À quelle fréquence voyagez-vous internationalement ?",
        q8_opt1: "Une ou deux fois par an",
        q8_opt2: "Tous les quelques mois",
        q8_opt3: "Mensuellement",
        q8_opt4: "Presque toutes les semaines",
        q9_title: "Quels itinéraires voyagez-vous habituellement ?",
        q9_opt1: "États-Unis ↔ Moyen-Orient",
        q9_opt2: "États-Unis ↔ Europe",
        q9_opt3: "États-Unis ↔ Asie",
        q9_opt4: "États-Unis ↔ Amérique du Sud",
        q9_opt5: "Autre",
        q10_title: "Quelle est votre situation de bagages typique ?",
        q10_opt1: "J'ai toujours de l'espace supplémentaire",
        q10_opt2: "J'ai parfois de l'espace",
        q10_opt3: "Généralement plein",
        q10_opt4: "Dépend du voyage",
        q11_title: "Seriez-vous ouvert à acheter et livrer les articles d'acheteurs vérifiés pendant vos voyages ?",
        q11_opt1: "Oui, je suis ouvert à cela",
        q11_opt2: "Peut-être, cela dépend de l'article",
        q11_opt3: "Pas maintenant",
        q12_title: "Qu'est-ce qui vous ferait vous sentir à l'aise de faire cela ?",
        q12_opt1: "Acheteurs vérifiés et vérification d'identité",
        q12_opt2: "Assurance / protection par Shippyar",
        q12_opt3: "Paiements sécurisés",
        q12_opt4: "Avis et évaluations de la communauté",
        q12_opt5: "Tout ce qui précède",
        q13_title: "Combien factureriez-vous par kg ?",
        q13_opt1: "$5-10",
        q13_opt2: "$10-15",
        q13_opt3: "$15-20",
        q13_opt4: "Dépend de la destination",
        q14_title: "Qu'est-ce qui vous motive à vous joindre en tant que voyageur ?",
        q14_opt1: "Gagner de l'argent supplémentaire",
        q14_opt2: "Aider les autres à obtenir ce dont ils ont besoin",
        q14_opt3: "Réduire mes coûts de voyage",
        q14_opt4: "Essayer quelque chose de nouveau",
        q15_title: "Quelle est la probabilité que vous essayiez Shippyar lorsqu'il sera lancé ?",
        q15_opt1: "Très probable",
        q15_opt2: "Peut-être",
        q15_opt3: "Pas sûr",
        
        // Seller path (7 questions)
        q16_title: "À quelle fréquence expédiez-vous internationalement ?",
        q16_opt1: "Quotidiennement",
        q16_opt2: "Hebdomadairement",
        q16_opt3: "Mensuellement",
        q16_opt4: "Occasionnellement",
        q17_title: "Quels sont vos principaux marchés de destination ?",
        q17_opt1: "Moyen-Orient",
        q17_opt2: "Asie",
        q17_opt3: "Europe",
        q17_opt4: "Amérique du Sud",
        q17_opt5: "Amérique du Nord",
        q18_title: "Quel est votre plus grand défi avec l'expédition internationale ?",
        q18_opt1: "Coûts élevés",
        q18_opt2: "Retards ou problèmes de douane",
        q18_opt3: "Perte/dommage de colis",
        q18_opt4: "Services de messagerie non fiables",
        q19_title: "Quelle est la fourchette de valeur typique de vos commandes internationales ?",
        q19_opt1: "Moins de $50",
        q19_opt2: "$50 – $150",
        q19_opt3: "$150 – $500",
        q19_opt4: "Plus de $500",
        q20_title: "Quels types d'articles expédiez-vous généralement ?",
        q20_opt1: "Mode / Accessoires",
        q20_opt2: "Électronique / Gadgets",
        q20_opt3: "Beauté / Soins personnels",
        q20_opt4: "Articles de collection / Articles personnalisés",
        q20_opt5: "Autre",
        q21_title: "Seriez-vous intéressé par un partenariat ou un pilote avec Shippyar ?",
        q21_opt1: "Oui",
        q21_opt2: "Peut-être plus tard",
        q21_opt3: "Pas maintenant",
        q22_title: "Quelle est la probabilité que vous essayiez Shippyar lorsqu'il sera lancé ?",
        q22_opt1: "Très probable",
        q22_opt2: "Peut-être",
        q22_opt3: "Pas sûr",
        
        // Buyer/Recipient path (7 questions)
        q23_title: "À quelle fréquence achetez-vous des produits de l'étranger ?",
        q23_opt1: "Rarement",
        q23_opt2: "Parfois (tous les quelques mois)",
        q23_opt3: "Souvent (mensuellement ou plus)",
        q24_title: "Quels types de produits achetez-vous généralement ?",
        q24_opt1: "Mode et accessoires",
        q24_opt2: "Gadgets technologiques",
        q24_opt3: "Beauté et bien-être",
        q24_opt4: "Articles de collection",
        q24_opt5: "Autre",
        q25_title: "Quelle est la fourchette de valeur typique des articles que vous commandez de l'étranger ?",
        q25_opt1: "Moins de $50",
        q25_opt2: "$50 – $150",
        q25_opt3: "$150 – $500",
        q25_opt4: "Plus de $500",
        q26_title: "Quel est votre plus gros problème avec les options d'expédition actuelles ?",
        q26_opt1: "Trop cher",
        q26_opt2: "Prend trop de temps",
        q26_opt3: "Problèmes de douane",
        q26_opt4: "Pas de suivi / problèmes de confiance",
        q27_title: "Fieriez-vous confiance aux voyageurs vérifiés pour apporter vos articles en toute sécurité ?",
        q27_opt1: "Oui, s'ils sont vérifiés",
        q27_opt2: "Peut-être, si je peux voir les avis",
        q27_opt3: "Pas encore sûr",
        q28_title: "Qu'est-ce qui vous rendrait le plus susceptible d'utiliser Shippyar ?",
        q28_opt1: "Coût inférieur",
        q28_opt2: "Livraison plus rapide",
        q28_opt3: "Système vérifié et assuré",
        q28_opt4: "Tout ce qui précède",
        q29_title: "Quelle est la probabilité que vous essayiez Shippyar lorsqu'il sera lancé ?",
        q29_opt1: "Très probable",
        q29_opt2: "Peut-être",
        q29_opt3: "Pas sûr",
        
        submit_button: "Soumettre",
        next_button: "Suivant",
        previous_button: "Précédent",
        
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
    { id: 6, type: "usertype", key: "q6", options: 3 },
    { id: 7, type: "agegroup", key: "q7" },
    
    // Traveler path (8-15) - 8 questions
    { id: 8, type: "radio", key: "q8", showIf: ["International traveler"], options: 4 },
    { id: 9, type: "radio", key: "q9", showIf: ["International traveler"], options: 5 },
    { id: 10, type: "radio", key: "q10", showIf: ["International traveler"], options: 4 },
    { id: 11, type: "radio", key: "q11", showIf: ["International traveler"], options: 3 },
    { id: 12, type: "checkbox", key: "q12", showIf: ["International traveler"], options: 5, maxSelections: 5 },
    { id: 13, type: "radio", key: "q13", showIf: ["International traveler"], options: 4 },
    { id: 14, type: "radio", key: "q14", showIf: ["International traveler"], options: 4 },
    { id: 15, type: "radio", key: "q15", showIf: ["International traveler"], options: 3 },
    
    // Seller path (16-22) - 7 questions
    { id: 16, type: "radio", key: "q16", showIf: ["Online Store Owner / E-commerce Seller"], options: 4 },
    { id: 17, type: "radio", key: "q17", showIf: ["Online Store Owner / E-commerce Seller"], options: 5 },
    { id: 18, type: "radio", key: "q18", showIf: ["Online Store Owner / E-commerce Seller"], options: 4 },
    { id: 19, type: "radio", key: "q19", showIf: ["Online Store Owner / E-commerce Seller"], options: 4 },
    { id: 20, type: "checkbox", key: "q20", showIf: ["Online Store Owner / E-commerce Seller"], options: 5, maxSelections: 5 },
    { id: 21, type: "radio", key: "q21", showIf: ["Online Store Owner / E-commerce Seller"], options: 3 },
    { id: 22, type: "radio", key: "q22", showIf: ["Online Store Owner / E-commerce Seller"], options: 3 },
    
    // Buyer/Recipient path (23-29) - 7 questions
    { id: 23, type: "radio", key: "q23", showIf: ["Buyer / Recipient"], options: 3 },
    { id: 24, type: "checkbox", key: "q24", showIf: ["Buyer / Recipient"], options: 5, maxSelections: 5 },
    { id: 25, type: "radio", key: "q25", showIf: ["Buyer / Recipient"], options: 4 },
    { id: 26, type: "radio", key: "q26", showIf: ["Buyer / Recipient"], options: 4 },
    { id: 27, type: "radio", key: "q27", showIf: ["Buyer / Recipient"], options: 3 },
    { id: 28, type: "checkbox", key: "q28", showIf: ["Buyer / Recipient"], options: 4, maxSelections: 4 },
    { id: 29, type: "radio", key: "q29", showIf: ["Buyer / Recipient"], options: 3 }
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
    // Map user type keys to showIf values
    const userTypeMap = {
        "traveler": "International traveler",
        "seller": "Online Store Owner / E-commerce Seller",
        "buyer": "Buyer / Recipient"
    };
    
    const mappedUserType = userTypeMap[userType] || userType;
    
    filteredQuestions = questionStructure.filter(question => {
        // Always show basic questions (1-7)
        if (question.id <= 7) return true;
        
        // Show questions based on user type
        if (question.showIf && mappedUserType) {
            return question.showIf.includes(mappedUserType);
        }
        
        return false;
    });
}

function getUserTypeIndex() {
    const types = ["International traveler", "Online Store Owner / E-commerce Seller", "Buyer / Recipient"];
    return types.indexOf(userType) + 1;
}

// Show specific question
function showQuestion(index) {
    if (index < 0 || index >= filteredQuestions.length) return;
    
    currentQuestionIndex = index;
    const question = filteredQuestions[index];
    
    updateProgressBar();
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
        const userTypeKeys = ["traveler", "seller", "buyer"];
        for (let i = 1; i <= 3; i++) {
            const optionText = trans[`${question.key}_opt${i}`];
            const userTypeKey = userTypeKeys[i - 1];
            const isSelected = userType === userTypeKey || answers[question.id] === optionText;
            html += `
                <div class="option ${isSelected ? 'selected' : ''}" onclick="selectUserType(${question.id}, '${userTypeKey}', '${optionText.replace(/'/g, "\\'")}')">
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
            const optionKey = question.key.includes('item') || question.key === 'q17' || question.key === 'q20' || question.key === 'q22' || question.key === 'q24' ? `item_opt${i}` : `${question.key}_opt${i}`;
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
    updateNavigationButtons();
}

// Select user type
function selectUserType(questionId, userTypeKey, translatedText) {
    answers[questionId] = translatedText;
    // Store normalized key for filtering
    userType = userTypeKey;
    filterQuestions();
    // Move to next question if available
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        renderQuestion(filteredQuestions[currentQuestionIndex]);
    }
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
    document.getElementById('progress-percentage').textContent = Math.round(progress) + '%';
}

// Update navigation buttons
function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    prevButton.disabled = currentQuestionIndex === 0;
    
    const trans = translations[selectedLanguage];
    
    if (currentQuestionIndex === filteredQuestions.length - 1) {
        // Submit button
        const submitText = trans.submit_button || "Submit";
        nextButton.innerHTML = `${submitText} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>`;
        nextButton.onclick = () => {
            if (validateCurrentQuestion()) {
                submitQuestionnaire();
            }
        };
    } else {
        // Next button
        const nextText = trans.next_button || "Next";
        nextButton.innerHTML = `${nextText} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
        nextButton.onclick = () => nextQuestion();
    }
}

// Submit questionnaire
async function submitQuestionnaire() {
    try {
        // Map normalized userType back to full text for submission
        const userTypeMap = {
            "traveler": "International traveler",
            "seller": "Online Store Owner / E-commerce Seller",
            "buyer": "Buyer / Recipient"
        };
        
        // Use the translated answer or map the normalized key
        const submittedUserType = answers[6] || userTypeMap[userType] || userType || '';
        
        // Prepare data for submission
        const submissionData = {
            fullName: answers[1] || '',
            email: answers[2] || '',
            country: answers[3] || '',
            preferredLanguage: answers[4] || 'English',
            howHeard: answers[5] || '',
            userType: submittedUserType,
            ageGroup: answers[7] || '',
            answers: answers
        };

        console.log('Submitting questionnaire:', submissionData);

        // Determine API URL (use production URL when not on localhost)
        const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        const apiUrl = isLocalhost 
            ? 'http://localhost:3000/api/submit-questionnaire'
            : 'https://shipyar-questionnaire.onrender.com/api/submit-questionnaire';

        // Send to backend
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionData)
        });

        const result = await response.json();

        if (result.success) {
            console.log('✅ Questionnaire submitted successfully:', result);
            // Show success message
            document.getElementById('questionnaire').classList.remove('active');
            document.getElementById('thank-you').classList.add('active');
            window.scrollTo(0, 0);
        } else {
            console.error('❌ Error submitting questionnaire:', result.message);
            // Still show thank you page even if backend fails
            document.getElementById('questionnaire').classList.remove('active');
            document.getElementById('thank-you').classList.add('active');
            window.scrollTo(0, 0);
        }
    } catch (error) {
        console.error('❌ Network error:', error);
        // Still show thank you page even if network fails
        document.getElementById('questionnaire').classList.remove('active');
        document.getElementById('thank-you').classList.add('active');
        window.scrollTo(0, 0);
    }
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

