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
        q6_opt3: "🛍️ Package Receiver",
        q6_opt4: "🔍 Just Exploring",
        q7_title: "What's your age group?",
        
        // Traveler questions
        q8_title: "✈️ How often do you travel internationally?",
        q8_opt1: "Weekly",
        q8_opt2: "Monthly",
        q8_opt3: "A few times a year",
        q8_opt4: "Rarely",
        q9_title: "💼 What's your typical luggage situation?",
        q9_opt1: "Always have extra space",
        q9_opt2: "Sometimes have space",
        q9_opt3: "Usually full",
        q9_opt4: "Depends on the trip",
        q10_title: "💰 Would you be open to earning money by sharing luggage space?",
        q10_opt1: "Definitely! 💸",
        q10_opt2: "Maybe, if it feels safe",
        q10_opt3: "Not sure yet",
        
        // Seller questions
        q11_title: "📦 How often do you send international packages?",
        q12_title: "🛍️ What types of items do you usually send?",
        q12_description: "Select up to 3",
        q13_title: "💵 What's the typical value of items you ship?",
        
        // Receiver questions
        q14_title: "🛒 How often do you receive international packages?",
        q15_title: "🎁 What types of items do you usually receive?",
        
        // Final questions
        q16_title: "🎯 What matters most to you when shipping?",
        q16_opt1: "💰 Cost savings",
        q16_opt2: "⚡ Speed of delivery",
        q16_opt3: "🔒 Safety & reliability",
        q16_opt4: "🎛️ Flexibility",
        q17_title: "🚀 How likely are you to try Shippyar when it launches?",
        q17_opt1: "Definitely! 🎉",
        q17_opt2: "Probably",
        q17_opt3: "Not sure yet",
        q17_opt4: "Probably not",
        q18_title: "🎁 Follow us for extra giveaway entries:",
        q18_opt1: "✅ I followed Shippyar on LinkedIn",
        q18_opt2: "✅ I followed Shippyar on Instagram",
        q18_opt3: "✅ I joined Shippyar's Telegram channel",
        q19_title: "🎯 Would you like to join Shippyar's early access group?",
        q19_opt1: "Yes, I'd love to! 🚀",
        
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
        q6_opt3: "🛍️ Paket Alıcısı",
        q6_opt4: "🔍 Sadece Keşfediyorum",
        q7_title: "Yaş grubunuz nedir?",
        
        q8_title: "✈️ Ne sıklıkla uluslararası seyahat ediyorsunuz?",
        q8_opt1: "Haftalık",
        q8_opt2: "Aylık",
        q8_opt3: "Yılda birkaç kez",
        q8_opt4: "Nadiren",
        q9_title: "💼 Seyahat ederken bagaj durumunuz nasıl?",
        q9_opt1: "Her zaman ekstra yer var",
        q9_opt2: "Bazen yer var",
        q9_opt3: "Genellikle dolu",
        q9_opt4: "Seyahate bağlı",
        q10_title: "💰 Bagaj alanınızı paylaşarak para kazanmaya açık mısınız?",
        q10_opt1: "Kesinlikle! 💸",
        q10_opt2: "Belki, güvenli hissedersem",
        q10_opt3: "Henüz emin değilim",
        
        q11_title: "📦 Ne sıklıkla uluslararası paket gönderiyorsunuz?",
        q12_title: "🛍️ Genellikle ne tür ürünler gönderiyorsunuz?",
        q12_description: "En fazla 3 seçin",
        q13_title: "💵 Gönderdiğiniz ürünlerin tipik değeri nedir?",
        
        q14_title: "🛒 Ne sıklıkla uluslararası paket alıyorsunuz?",
        q15_title: "🎁 Genellikle ne tür ürünler alıyorsunuz?",
        
        q16_title: "🎯 Gönderimde sizin için en önemli olan nedir?",
        q16_opt1: "💰 Maliyet tasarrufu",
        q16_opt2: "⚡ Teslimat hızı",
        q16_opt3: "🔒 Güvenlik ve güvenilirlik",
        q16_opt4: "🎛️ Esneklik",
        q17_title: "🚀 Shippyar başlatıldığında deneme olasılığınız nedir?",
        q17_opt1: "Kesinlikle! 🎉",
        q17_opt2: "Muhtemelen",
        q17_opt3: "Henüz emin değilim",
        q17_opt4: "Muhtemelen hayır",
        q18_title: "🎁 Ekstra çekiliş girişleri için bizi takip edin:",
        q18_opt1: "✅ LinkedIn'de Shippyar'ı takip ettim",
        q18_opt2: "✅ Instagram'da Shippyar'ı takip ettim",
        q18_opt3: "✅ Shippyar'ın Telegram kanalına katıldım",
        q19_title: "🎯 Shippyar'ın erken erişim grubuna katılmak ister misiniz?",
        q19_opt1: "Evet, çok isterim! 🚀",
        
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
        q6_opt3: "🛍️ مستلم الطرود",
        q6_opt4: "🔍 أستكشف فقط",
        q7_title: "ما هي فئتك العمرية؟",
        
        q8_title: "✈️ كم مرة تسافر دولياً؟",
        q8_opt1: "أسبوعياً",
        q8_opt2: "شهرياً",
        q8_opt3: "بضع مرات في السنة",
        q8_opt4: "نادراً",
        q9_title: "💼 ما هو وضع أمتعتك المعتاد عند السفر؟",
        q9_opt1: "دائماً لدي مساحة إضافية",
        q9_opt2: "أحياناً لدي مساحة",
        q9_opt3: "عادة ممتلئة",
        q9_opt4: "يعتمد على الرحلة",
        q10_title: "💰 هل أنت منفتح لكسب المال من خلال مشاركة مساحة الأمتعة؟",
        q10_opt1: "بالتأكيد! 💸",
        q10_opt2: "ربما، إذا شعرت بالأمان",
        q10_opt3: "لست متأكداً بعد",
        
        q11_title: "📦 كم مرة ترسل طرود دولية؟",
        q12_title: "🛍️ ما أنواع العناصر التي ترسلها عادة؟",
        q12_description: "اختر ما يصل إلى 3",
        q13_title: "💵 ما هي القيمة النموذجية للعناصر التي ترسلها؟",
        
        q14_title: "🛒 كم مرة تستلم طرود دولية؟",
        q15_title: "🎁 ما أنواع العناصر التي تستلمها عادة؟",
        
        q16_title: "🎯 ما الأكثر أهمية بالنسبة لك عند الشحن؟",
        q16_opt1: "💰 توفير التكلفة",
        q16_opt2: "⚡ سرعة التسليم",
        q16_opt3: "🔒 السلامة والموثوقية",
        q16_opt4: "🎛️ المرونة",
        q17_title: "🚀 ما مدى احتمالية تجربتك لـ Shippyar عند إطلاقه؟",
        q17_opt1: "بالتأكيد! 🎉",
        q17_opt2: "محتمل",
        q17_opt3: "لست متأكداً بعد",
        q17_opt4: "محتمل ألا",
        q18_title: "🎁 تابعنا للحصول على إدخالات إضافية للسحب:",
        q18_opt1: "✅ تابعت Shippyar على LinkedIn",
        q18_opt2: "✅ تابعت Shippyar على Instagram",
        q18_opt3: "✅ انضممت إلى قناة Shippyar على Telegram",
        q19_title: "🎯 هل ترغب في الانضمام إلى مجموعة الوصول المبكر لـ Shippyar؟",
        q19_opt1: "نعم، أحب ذلك! 🚀",
        
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
        q6_opt3: "🛍️ Receptor de Paquetes",
        q6_opt4: "🔍 Solo Explorando",
        q7_title: "¿Cuál es tu grupo de edad?",
        
        q8_title: "✈️ ¿Con qué frecuencia viajas internacionalmente?",
        q8_opt1: "Semanalmente",
        q8_opt2: "Mensualmente",
        q8_opt3: "Algunas veces al año",
        q8_opt4: "Raramente",
        q9_title: "💼 ¿Cuál es tu situación típica de equipaje al viajar?",
        q9_opt1: "Siempre tengo espacio extra",
        q9_opt2: "A veces tengo espacio",
        q9_opt3: "Usualmente lleno",
        q9_opt4: "Depende del viaje",
        q10_title: "💰 ¿Estarías abierto a ganar dinero compartiendo espacio de equipaje?",
        q10_opt1: "¡Definitivamente! 💸",
        q10_opt2: "Tal vez, si me siento seguro",
        q10_opt3: "Aún no estoy seguro",
        
        q11_title: "📦 ¿Con qué frecuencia envías paquetes internacionales?",
        q12_title: "🛍️ ¿Qué tipos de artículos sueles enviar?",
        q12_description: "Selecciona hasta 3",
        q13_title: "💵 ¿Cuál es el valor típico de los artículos que envías?",
        
        q14_title: "🛒 ¿Con qué frecuencia recibes paquetes internacionales?",
        q15_title: "🎁 ¿Qué tipos de artículos sueles recibir?",
        
        q16_title: "🎯 ¿Qué es lo más importante para ti al enviar?",
        q16_opt1: "💰 Ahorro de costos",
        q16_opt2: "⚡ Velocidad de entrega",
        q16_opt3: "🔒 Seguridad y confiabilidad",
        q16_opt4: "🎛️ Flexibilidad",
        q17_title: "🚀 ¿Qué tan probable es que pruebes Shippyar cuando se lance?",
        q17_opt1: "¡Definitivamente! 🎉",
        q17_opt2: "Probablemente",
        q17_opt3: "Aún no estoy seguro",
        q17_opt4: "Probablemente no",
        q18_title: "🎁 Síguenos para entradas extra al sorteo:",
        q18_opt1: "✅ Seguí a Shippyar en LinkedIn",
        q18_opt2: "✅ Seguí a Shippyar en Instagram",
        q18_opt3: "✅ Me uní al canal de Telegram de Shippyar",
        q19_title: "🎯 ¿Te gustaría unirte al grupo de acceso anticipado de Shippyar?",
        q19_opt1: "¡Sí, me encantaría! 🚀",
        
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
        q6_opt3: "🛍️ Récepteur de Colis",
        q6_opt4: "🔍 Juste Explorer",
        q7_title: "Quel est votre groupe d'âge ?",
        
        q8_title: "✈️ À quelle fréquence voyagez-vous internationalement ?",
        q8_opt1: "Hebdomadaire",
        q8_opt2: "Mensuelle",
        q8_opt3: "Quelques fois par an",
        q8_opt4: "Rarement",
        q9_title: "💼 Quelle est votre situation de bagages typique en voyage ?",
        q9_opt1: "J'ai toujours de l'espace supplémentaire",
        q9_opt2: "J'ai parfois de l'espace",
        q9_opt3: "Généralement plein",
        q9_opt4: "Dépend du voyage",
        q10_title: "💰 Seriez-vous ouvert à gagner de l'argent en partageant l'espace de bagages ?",
        q10_opt1: "Absolument ! 💸",
        q10_opt2: "Peut-être, si je me sens en sécurité",
        q10_opt3: "Pas encore sûr",
        
        q11_title: "📦 À quelle fréquence envoyez-vous des colis internationaux ?",
        q12_title: "🛍️ Quels types d'articles envoyez-vous habituellement ?",
        q12_description: "Sélectionnez jusqu'à 3",
        q13_title: "💵 Quelle est la valeur typique des articles que vous expédiez ?",
        
        q14_title: "🛒 À quelle fréquence recevez-vous des colis internationaux ?",
        q15_title: "🎁 Quels types d'articles recevez-vous habituellement ?",
        
        q16_title: "🎯 Qu'est-ce qui compte le plus pour vous lors de l'expédition ?",
        q16_opt1: "💰 Économies de coûts",
        q16_opt2: "⚡ Vitesse de livraison",
        q16_opt3: "🔒 Sécurité et fiabilité",
        q16_opt4: "🎛️ Flexibilité",
        q17_title: "🚀 Quelle est la probabilité que vous essayiez Shippyar lors de son lancement ?",
        q17_opt1: "Absolument ! 🎉",
        q17_opt2: "Probablement",
        q17_opt3: "Pas encore sûr",
        q17_opt4: "Probablement pas",
        q18_title: "🎁 Suivez-nous pour des entrées supplémentaires au tirage au sort :",
        q18_opt1: "✅ J'ai suivi Shippyar sur LinkedIn",
        q18_opt2: "✅ J'ai suivi Shippyar sur Instagram",
        q18_opt3: "✅ J'ai rejoint le canal Telegram de Shippyar",
        q19_title: "🎯 Souhaitez-vous rejoindre le groupe d'accès anticipé de Shippyar ?",
        q19_opt1: "Oui, j'adorerais ! 🚀",
        
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
    
    // Traveler path (8-10)
    { id: 8, type: "radio", key: "q8", showIf: ["✈️ Frequent Traveler"], options: 4 },
    { id: 9, type: "radio", key: "q9", showIf: ["✈️ Frequent Traveler"], options: 4 },
    { id: 10, type: "radio", key: "q10", showIf: ["✈️ Frequent Traveler"], options: 3 },
    
    // Seller path (11-13)
    { id: 11, type: "radio", key: "q11", showIf: ["📦 Online Seller"], options: 4 },
    { id: 12, type: "checkbox", key: "q12", showIf: ["📦 Online Seller"], maxSelections: 3, options: 7 },
    { id: 13, type: "radio", key: "q13", showIf: ["📦 Online Seller"], options: 4 },
    
    // Receiver path (14-15)
    { id: 14, type: "radio", key: "q14", showIf: ["🛍️ Package Receiver"], options: 4 },
    { id: 15, type: "checkbox", key: "q15", showIf: ["🛍️ Package Receiver"], maxSelections: 3, options: 7 },
    
    // Final questions (16-19) - shown to everyone
    { id: 16, type: "radio", key: "q16", options: 4 },
    { id: 17, type: "radio", key: "q17", options: 4 },
    { id: 18, type: "checkbox", key: "q18", required: false, options: 3 },
    { id: 19, type: "radio", key: "q19", options: 1 }
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
    filteredQuestions = questionStructure.filter(q => q.id <= 7);
    showQuestion(0);
}

// Filter questions based on user type
function filterQuestions() {
    filteredQuestions = questionStructure.filter(question => {
        // Always show basic questions (1-7)
        if (question.id <= 7) return true;
        
        // Show questions based on user type
        if (question.showIf && userType) {
            const trans = translations[selectedLanguage];
            const userTypeTranslated = trans[`q6_opt${getUserTypeIndex()}`];
            return question.showIf.some(type => type === userType || trans[`q6_opt${getUserTypeIndex()}`] === userType);
        }
        
        // Show final questions (16-19) to everyone
        if (question.id >= 16) return true;
        
        return false;
    });
    
    updateQuestionCounter();
}

function getUserTypeIndex() {
    const types = ["✈️ Frequent Traveler", "📦 Online Seller", "🛍️ Package Receiver", "🔍 Just Exploring"];
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
        const languages = ["English", "Turkish", "Arabic", "Spanish", "French"];
        languages.forEach(lang => {
            const isSelected = answers[question.id] === lang;
            html += `
                <div class="option ${isSelected ? 'selected' : ''}" onclick="selectLanguage('${lang}')">
                    <input type="radio" name="question_${question.id}" value="${lang}" ${isSelected ? 'checked' : ''}>
                    <label>${lang}</label>
                </div>
            `;
        });
        html += `
            <div class="option ${answers[question.id] && !languages.includes(answers[question.id]) ? 'selected' : ''}" onclick="selectRadioOption(${question.id}, 'Other', true)">
                <input type="radio" name="question_${question.id}" value="Other">
                <label>Other</label>
            </div>
        `;
        if (answers[question.id] && !languages.includes(answers[question.id]) && answers[question.id] !== 'Other') {
            html += `
                <input type="text" 
                       class="input-field" 
                       placeholder="Please specify..."
                       value="${answers[question.id + '_input'] || ''}"
                       onchange="saveAnswer(${question.id + '_input'}, this.value)"
                       style="margin-top: 10px;">
            `;
        }
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
            const optionKey = question.key.includes('item') || question.key === 'q12' || question.key === 'q15' ? `item_opt${i}` : `${question.key}_opt${i}`;
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
function selectLanguage(language) {
    answers[4] = language;
    selectedLanguage = language;
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
