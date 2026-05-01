export type Language = "en" | "fr" | "ar"

export const translations = {
  en: {
    // Navigation
    nav: {
      services: "Services",
      faq: "FAQ",
      cta: "Start Your Project",
    },
    // Hero
    hero: {
      headline: "We don't sell random chatbots. We engineer intelligent chat agents that actually manage your conversations",
      headlineHighlight: "We don't sell random",
      subheadline: "We integrate bespoke conversational agents directly into your core business. We build, train, and deploy a digital mind tailored to your unique workflow, then equip your team to scale.",
    },
    // Pain Points
    painPoints: [
      "You are losing high-value clients every hour because your team cannot respond within seconds",
      "Your growth is stalled by repetitive inquiries that drown your staff in manual work",
      "You are wasting thousands of dollars on human resources for tasks that should be automated",
      "Scaling feels impossible when your operational efficiency depends on manual, slow processes",
      "Yet, the window to dominate your market is still open if you move now",
    ],
    // About
    about: {
      heading: "For this reason, we built Midotrix.",
      body: "While general AI agencies sell templates, we build proprietary AI agents. We don't offer generic software; we craft a custom communication engine. We inject a specialized digital worker into your business that learns your data, speaks your language, and handles your conversations with zero fatigue.",
    },
    // Framework
    framework: {
      label: "HOW WE WORK",
      heading: "Our Framework",
      cards: [
        {
          title: "Discover",
          body: "We analyze your workflows, rules, and data to determine if AI is a viable fit for your business and how it can be seamlessly integrated into your current operations.",
        },
        {
          title: "Engineer",
          body: "We build the AI agent and engineer the backend automation. We integrate this system with your existing tools and train it on your data to work as an integral part of your team.",
        },
        {
          title: "Deploy & Equip",
          body: "We launch your digital worker and show you exactly how to track leads and manage human handoffs seamlessly.",
        },
      ],
    },
    // FAQ
    faq: {
      heading: "Frequently Asked Questions",
      pageIntro: "Clear answers on how our agents work, security, and technical integration. For deeper details, book your strategy call.",
      items: [
        {
          question: "Why choose Midotrix over generic chatbot platforms?",
          answer: "Generic platforms offer fragile, scripted templates. We are a specialized agency; we engineer bespoke AI chat agents integrated directly into your operations, understanding complex customer intent and speaking your exact brand voice.",
        },
        {
          question: "Will the AI sound like a generic, annoying robot?",
          answer: "Not at all. We utilize advanced Natural Language Processing (NLP) to craft agents with a natural, professional tone. The goal is to build rapport and seamlessly resolve inquiries, enhancing the customer experience, not ruining it.",
        },
        {
          question: 'Can the AI make up wrong answers or "hallucinate"?',
          answer: "Impossible. We build strict guardrails and ground the agent 100% in your proprietary business data. If it encounters an unknown scenario, it gracefully routes the chat to your human team instantly.",
        },
        {
          question: "How does this agent generate an actual ROI for my business?",
          answer: 'Your agent works 24/7. By instantly responding to and qualifying leads, it stops "lead leakage." Your human team only spends time closing ready-to-buy customers, which drastically increases your conversion rates.',
        },
        {
          question: "Do I need technical skills to manage the agent?",
          answer: "Zero technical skills are required. We handle the entire engineering process and deliver a fully autonomous system. You simply get a clean dashboard to track performance while we handle the complexity.",
        },
        {
          question: "How long does it take to build and deploy?",
          answer: "Typically 2 to 4 weeks. We don't rush. We take the time to map your chat workflows, train the AI on your data, and test it rigorously so it performs flawlessly on day one.",
        },
        {
          question: "How is the pricing determined?",
          answer: "Because we build custom infrastructure, pricing depends on the complexity of your chat workflows and the systems we need to integrate with. We provide an exact, tailored quote after our initial strategy call.",
        },
      ],
    },
    // CTA Section
    cta: {
      line1: "Some settle for task management,",
      line2: "while others strive to engineer growth.",
      line3: "We build for those who seek",
      highlight: "growth.",
    },
    // Footer
    footer: {
      tagline: "Intelligent Chat Agents for Ambitious Businesses",
      explore: "Explore",
      connect: "Connect",
      copyright: "© 2026 Midotrix.",
    },
    // Services Page
    services: {
      heading: "From fragmented chats to unified intelligent systems.",
      subtitle: "Every engagement is engineered, not templated. Here is how we build it.",
      tabs: ["Discover", "Engineer", "Deploy & Equip"],
      discover: {
        subheading: "Blueprint the Engine",
        body: 'Before building, we need to understand your business. We gather your core information (FAQs, services, terms) and define your "ideal client" criteria. We do not build on assumptions; we build on your data.',
        bullets: [
          "Mapping the AI agent architecture and automated response flows.",
          "Identifying the platforms (WhatsApp, Website, etc.) for integration.",
        ],
        next: "Next: Engineer →",
      },
      engineer: {
        subheading: "Build & Integrate",
        body: "This is where planning becomes a live system and the heavy technical lifting happens. We don't just build a chat interface; we engineer a complete backend. We build an AI that understands context and qualifies leads, then integrate it with automation tools to ensure client data is instantly sent to your files. The result? A system that saves time and drastically reduces manual effort.",
        bullets: [
          "Training and testing the agent on your organization's data.",
          "Engineering data extraction pipelines (Data Extraction).",
          "Technical integration with your existing tools and systems.",
        ],
        next: "Next: Deploy & Equip →",
      },
      deploy: {
        subheading: "Start the Engine",
        body: "Once testing is complete, we deploy the agent live to your customers. We don't just walk away; we give you access, show you how to review the captured leads, and explain how your team can seamlessly take over a chat when needed.",
        bullets: [
          "Live deployment to your communication channels.",
          "Dashboard and data pipeline handoff.",
          "Technical support to monitor performance during the first operational days.",
        ],
      },
    },
    // Contact Page
    contact: {
      preTitle: "Let's build something great together",
      heading: "Ready to hire AI Agents for your business?",
      subtitle: "At Midotrix, we specialize in building and integrating AI chat agents custom-tailored to integrate seamlessly with your unique workflow. If you are looking for a strategic partner to deploy an intelligent chat agent that elevates your business and delivers a tangible impact, get in touch with us.",
      info: {
        headquarters: "Headquarters",
        headquartersValue: "Algeria",
        email: "Email Address",
        emailValue: "contact@midotrix.com",
        global: "Global Reach",
        globalValue: "Delivering to Algeria, the Gulf region, and Europe",
      },
      form: {
        fullName: "Full Name",
        fullNamePlaceholder: "John Smith",
        workEmail: "Work Email",
        workEmailPlaceholder: "you@company.com",
        website: "Company Website",
        websitePlaceholder: "https://www.yourcompany.com",
        role: "Your Role",
        roleOptions: [
          "Founder / CEO",
          "Manager / Director",
          "Marketing / Sales Lead",
          "Technical / IT Specialist",
          "Employee / Freelancer",
          "Other",
        ],
        budget: "Budget Range",
        budgetOptions: ["< $10k", "$10k – $50k", "> $50k", "Not sure yet"],
        companySize: "Company Size",
        companySizeOptions: ["2–10", "11–50", "50–100", "100+"],
        challenge: "What is the biggest challenge your team currently faces in customer handling or sales?",
        expectation: "Specifically, what do you expect the AI Agent to achieve within your business?",
        optional: "(Optional)",
        aiVision: "How defined is your AI Agent vision?",
        aiVisionOptions: [
          "I have a complete vision and a defined workflow.",
          "I know my challenges, but I need your expertise to design the solution.",
          "I am in the exploration stage and want to know what's possible.",
        ],
        submit: "Submit Request",
        required: "Please fill in this field.",
        invalidEmail: "Please enter a valid email address.",
        success: {
          title: "Thank you for your application.",
          body: "Our team is currently reviewing your details. If we determine that your business is a good fit for our AI systems, we will email you within 24 hours with a private link to book your Discovery Call.",
        },
      },
    },
    // FAQ Page
    faqPage: {
      preTitle: "GOT QUESTIONS?",
      heading: "Frequently Asked Questions",
    },
  },
  fr: {
    // Navigation
    nav: {
      services: "Services",
      faq: "FAQ",
      cta: "Démarrer votre projet",
    },
    // Hero
    hero: {
      headline: "Nous ne vendons pas des chatbots génériques. Nous concevons des agents conversationnels intelligents qui gèrent réellement vos échanges",
      headlineHighlight: "Nous ne vendons pas des",
      subheadline: "Nous intégrons des agents conversationnels sur mesure directement au cœur de votre activité. Nous construisons, formons et déployons un esprit numérique adapté à votre flux de travail unique, puis équipons votre équipe pour croître.",
    },
    // Pain Points
    painPoints: [
      "Vous perdez des clients à forte valeur chaque heure parce que votre équipe ne peut pas répondre en quelques secondes",
      "Votre croissance est bloquée par des demandes répétitives qui noient votre personnel dans des tâches manuelles",
      "Vous gaspillez des milliers de dollars en ressources humaines pour des tâches qui devraient être automatisées",
      "La mise à l'échelle semble impossible quand votre efficacité opérationnelle dépend de processus manuels et lents",
      "Pourtant, la fenêtre pour dominer votre marché est encore ouverte si vous agissez maintenant",
    ],
    // About
    about: {
      heading: "Pour cette raison, nous avons créé Midotrix.",
      body: "Pendant que les agences IA génériques vendent des modèles, nous construisons des agents IA propriétaires. Nous n'offrons pas de logiciel générique ; nous concevons un moteur de communication sur mesure. Nous injectons un travailleur numérique spécialisé dans votre entreprise qui apprend vos données, parle votre langage, et gère vos conversations sans jamais faiblir.",
    },
    // Framework
    framework: {
      label: "NOTRE APPROCHE",
      heading: "Notre Approche",
      cards: [
        {
          title: "Découverte",
          body: "Nous analysons vos flux de travail, vos règles et vos données pour déterminer si l'IA correspond à votre activité et comment l'intégrer dans vos opérations actuelles.",
        },
        {
          title: "Ingénierie",
          body: "Nous construisons l'agent IA et concevons l'automatisation backend. Nous intégrons ce système à vos outils existants et le formons sur vos données pour qu'il fasse partie intégrante de votre équipe.",
        },
        {
          title: "Déploiement & Équipement",
          body: "Nous lançons votre collaborateur numérique et vous montrons exactement comment suivre les prospects et gérer les transferts humains en toute fluidité.",
        },
      ],
    },
    // FAQ
    faq: {
      heading: "Questions Fréquemment Posées",
      pageIntro: "Des réponses claires sur le fonctionnement de nos agents, la sécurité et l'intégration technique. Pour plus de détails, réservez votre appel stratégique.",
      items: [
        {
          question: "Pourquoi choisir Midotrix plutôt que des plateformes de chatbots génériques ?",
          answer: "Les plateformes génériques proposent des modèles fragiles et scriptés. Nous sommes une agence spécialisée ; nous concevons des agents IA sur mesure intégrés directement dans vos opérations, comprenant l'intention complexe des clients et parlant exactement avec la voix de votre marque.",
        },
        {
          question: "L'IA semblera-t-elle être un robot générique et irritant ?",
          answer: "Pas du tout. Nous utilisons des techniques avancées de traitement du langage naturel (NLP) pour créer des agents au ton naturel et professionnel. L'objectif est de créer un lien avec le client et de résoudre ses demandes en toute fluidité, améliorant l'expérience utilisateur.",
        },
        {
          question: "L'IA peut-elle inventer de fausses réponses (halluciner) ?",
          answer: "Impossible. Nous construisons des garde-fous stricts et ancrons l'agent à 100% dans vos données propriétaires. Si l'agent rencontre un scénario inconnu, il redirige gracieusement la conversation vers votre équipe humaine instantanément.",
        },
        {
          question: "Comment cet agent génère-t-il un véritable ROI pour mon entreprise ?",
          answer: 'Votre agent travaille 24h/24, 7j/7. En répondant et qualifiant instantanément les prospects, il stoppe les "fuites de leads". Votre équipe humaine consacre son temps uniquement à conclure des clients prêts à acheter, ce qui augmente drastiquement vos taux de conversion.',
        },
        {
          question: "Ai-je besoin de compétences techniques pour gérer l'agent ?",
          answer: "Zéro compétence technique requise. Nous gérons l'intégralité du processus d'ingénierie et livrons un système entièrement autonome. Vous obtenez simplement un tableau de bord propre pour suivre les performances pendant que nous gérons la complexité.",
        },
        {
          question: "Combien de temps faut-il pour construire et déployer l'agent ?",
          answer: "Généralement 2 à 4 semaines. Nous ne nous précipitons pas. Nous prenons le temps de cartographier vos flux de conversation, de former l'IA sur vos données et de la tester rigoureusement pour qu'elle fonctionne parfaitement dès le premier jour.",
        },
        {
          question: "Comment le prix est-il déterminé ?",
          answer: "Comme nous construisons une infrastructure personnalisée, le prix dépend de la complexité de vos flux de conversation et des systèmes à intégrer. Nous fournissons un devis précis et adapté après notre appel stratégique initial.",
        },
      ],
    },
    // CTA Section
    cta: {
      line1: "Certains se contentent de gérer des tâches,",
      line2: "d'autres s'efforcent d'ingénier la croissance.",
      line3: "Nous construisons pour ceux qui cherchent la",
      highlight: "croissance.",
    },
    // Footer
    footer: {
      tagline: "Agents Conversationnels Intelligents pour Entreprises Ambitieuses",
      explore: "Explorer",
      connect: "Connexion",
      copyright: "© 2026 Midotrix.",
    },
    // Services Page
    services: {
      heading: "Des conversations fragmentées aux systèmes intelligents unifiés.",
      subtitle: "Chaque engagement est conçu, non pas basé sur des modèles. Voici comment nous construisons.",
      tabs: ["Découverte", "Ingénierie", "Déploiement & Équipement"],
      discover: {
        subheading: "Concevoir le Plan Directeur",
        body: 'Avant de construire, nous devons comprendre votre activité. Nous recueillons vos informations clés (FAQ, services, conditions) et définissons vos critères de "client idéal". Nous ne construisons pas sur des hypothèses ; nous construisons sur vos données.',
        bullets: [
          "Cartographier l'architecture de l'agent IA et les flux de réponse automatisés.",
          "Identifier les plateformes (WhatsApp, Site Web, etc.) pour l'intégration.",
        ],
        next: "Suivant: Ingénierie →",
      },
      engineer: {
        subheading: "Construire & Intégrer",
        body: "C'est ici que la planification devient un système vivant et que le travail technique intensif commence. Nous ne construisons pas seulement une interface de chat ; nous concevons un backend complet. Nous créons une IA qui comprend le contexte et qualifie les prospects, puis l'intégrons aux outils d'automatisation pour envoyer instantanément les données clients à vos fichiers. Le résultat ? Un système qui économise du temps et réduit drastiquement l'effort manuel.",
        bullets: [
          "Formation et test de l'agent sur les données de votre organisation.",
          "Conception des pipelines d'extraction de données.",
          "Intégration technique avec vos outils et systèmes existants.",
        ],
        next: "Suivant: Déploiement & Équipement →",
      },
      deploy: {
        subheading: "Démarrer le Moteur",
        body: "Une fois les tests terminés, nous déployons l'agent auprès de vos clients. Nous ne vous laissons pas seul ; nous vous donnons accès, vous montrons comment examiner les prospects capturés, et expliquons comment votre équipe peut reprendre le chat de manière fluide si nécessaire.",
        bullets: [
          "Déploiement en direct sur vos canaux de communication.",
          "Transfert du tableau de bord et des pipelines de données.",
          "Support technique pour surveiller les performances pendant les premiers jours opérationnels.",
        ],
      },
    },
    // Contact Page
    contact: {
      preTitle: "Construisons quelque chose de formidable ensemble",
      heading: "Prêt à embaucher des agents IA pour votre entreprise ?",
      subtitle: "Chez Midotrix, nous nous spécialisons dans la création et l'intégration d'agents de chat IA sur mesure pour s'intégrer parfaitement à votre flux de travail unique. Si vous recherchez un partenaire stratégique pour déployer un agent de chat intelligent qui élève votre entreprise et génère un impact tangible, contactez-nous.",
      info: {
        headquarters: "Siège social",
        headquartersValue: "Algérie",
        email: "Adresse e-mail",
        emailValue: "contact@midotrix.com",
        global: "Portée mondiale",
        globalValue: "Service en Algérie, région du Golfe et Europe",
      },
      form: {
        fullName: "Nom complet",
        fullNamePlaceholder: "Jean Dupont",
        workEmail: "E-mail professionnel",
        workEmailPlaceholder: "vous@entreprise.com",
        website: "Site web de l'entreprise",
        websitePlaceholder: "https://www.votreentreprise.com",
        role: "Votre rôle",
        roleOptions: [
          "Fondateur / PDG",
          "Manager / Directeur",
          "Responsable Marketing / Ventes",
          "Spécialiste Technique / IT",
          "Employé / Freelance",
          "Autre",
        ],
        budget: "Fourchette budgétaire",
        budgetOptions: ["< 10k€", "10k€ – 50k€", "> 50k€", "Pas encore sûr"],
        companySize: "Taille de l'entreprise",
        companySizeOptions: ["2–10", "11–50", "50–100", "100+"],
        challenge: "Quel est le plus grand défi que votre équipe rencontre actuellement dans la gestion des clients ou les ventes ?",
        expectation: "Précisément, qu'attendez-vous de l'agent IA pour votre entreprise ?",
        optional: "(Facultatif)",
        aiVision: "À quel point votre vision de l'agent IA est-elle définie ?",
        aiVisionOptions: [
          "J'ai une vision complète et un flux de travail défini.",
          "Je connais mes défis, mais j'ai besoin de votre expertise pour concevoir la solution.",
          "Je suis en phase d'exploration et je veux savoir ce qui est possible.",
        ],
        submit: "Soumettre la demande",
        required: "Veuillez remplir ce champ.",
        invalidEmail: "Veuillez entrer une adresse e-mail valide.",
        success: {
          title: "Merci pour votre candidature.",
          body: "Notre équipe examine actuellement vos informations. Si nous déterminons que votre entreprise correspond bien à nos systèmes IA, nous vous enverrons un e-mail dans les 24 heures avec un lien privé pour réserver votre appel de découverte.",
        },
      },
    },
    // FAQ Page
    faqPage: {
      preTitle: "DES QUESTIONS ?",
      heading: "Questions Fréquemment Posées",
    },
  },
  ar: {
    // Navigation
    nav: {
      services: "الخدمات",
      faq: "الأسئلة الشائعة",
      cta: "ابدأ مشروعك",
    },
    // Hero
    hero: {
      headline: "نحن لا نبيع روبوتات دردشة عشوائية. نحن نهندس وكلاء دردشة ذكيين يُدارون محادثاتك فعلاً",
      headlineHighlight: "نحن لا نبيع روبوتات",
      subheadline: "ندمج وكلاء محادثة مخصصين في صلب عملك التجاري. نبني، نُدرِّب، وننشر عقلاً رقمياً مصمماً خصيصاً لسير عملك، ثم نؤهل فريقك للتوسع.",
    },
    // Pain Points
    painPoints: [
      "أنت تخسر عملاءك ذوي القيمة العالية كل ساعة لأن فريقك لا يستطيع الرد في غضون ثوانٍ",
      "نموك متوقف بسبب الاستفسارات المتكررة التي تُغرق موظفيك في العمل اليدوي",
      "أنت تهدر آلاف الدولارات على الموارد البشرية في مهام كان يجب أتمتتها",
      "التوسع يبدو مستحيلاً عندما تعتمد كفاءتك التشغيلية على عمليات يدوية وبطيئة",
      "ومع ذلك، لا تزال النافذة مفتوحة لتهيمن على سوقك إذا تحركت الآن",
    ],
    // About
    about: {
      heading: "لهذا السبب، بنينا Midotrix.",
      body: "بينما تبيع وكالات الذكاء الاصطناعي العامة قوالب جاهزة، نحن نبني وكلاء ذكاء اصطناعي مملوكين. لا نقدم برامج جاهزة؛ بل نصمم محرك تواصل مخصصاً. نُدمج عامل رقمي متخصص في عملك يتعلم بياناتك، يتحدث لغتك، ويتولى محادثاتك بلا توقف.",
    },
    // Framework
    framework: {
      label: "كيف نعمل",
      heading: "إطارنا",
      cards: [
        {
          title: "الاستكشاف",
          body: "نحلل سير عملك، قواعدك، وقاعدة بياناتك لنحدد ما إذا كان الذكاء الاصطناعي يتوافق مع مؤسستك، وكيف يمكن دمجه بفعالية داخل عملياتك الحالية.",
        },
        {
          title: "الهندسة",
          body: "نبني وكيل الذكاء الاصطناعي ونهندس مسارات الأتمتة الخلفية. ندمج هذا النظام مع أدواتك الحالية وندربه على بيانات مؤسستك ليعمل كجزء لا يتجزأ من فريقك.",
        },
        {
          title: "النشر والتأهيل",
          body: "نُطلق موظفك الرقمي ونوضح لك بالضبط كيف تتابع العملاء الجدد وكيف تتدخل بشرياً عند الحاجة بسلاسة.",
        },
      ],
    },
    // FAQ
    faq: {
      heading: "الأسئلة الشائعة",
      pageIntro: "تمت هنا تغطية بعض الأجوبة للأسئلة الشائعة حول كيفية عمل وكلائنا، الأمان، والتكامل التقني. إذا كنت تبحث عن تفاصيل أكثر، احجز مكالمتك.",
      items: [
        {
          question: "ما الفرق بينكم وبين منصات بناء البوتات الجاهزة؟",
          answer: "المنصات الجاهزة تقدم قوالب سطحية تنهار مع المحادثات المعقدة. نحن وكالة متخصصة؛ نهندس وكلاء دردشة مخصصين يُدمجون في صلب عملياتك، يفهمون نية العميل بدقة، ويتحدثون بنبرة علامتك التجارية الخاصة.",
        },
        {
          question: "هل سيبدو وكيل الذكاء الاصطناعي وكأنه روبوت مزعج لعملائي؟",
          answer: "على الإطلاق. نحن نستخدم تقنيات لغوية متقدمة لبرمجة وكلاء يتمتعون بنبرة بشرية واحترافية. هدفنا هو بناء علاقة مع العميل وحل استفساراته بسلاسة، مما يرفع من جودة تجربة المستخدم.",
        },
        {
          question: "ماذا لو أعطى الوكيل معلومات خاطئة من اختراعه (هلوسة)؟",
          answer: "مستحيل. نحن نضع حواجز حماية برمجية صارمة تجعل الوكيل محصوراً 100% في بيانات عملك فقط. إذا واجه سؤالاً لا يعرف إجابته، يقوم فوراً وبشكل سلس بتحويل المحادثة لفريقك البشري.",
        },
        {
          question: "كيف أضمن أن هذا النظام سيحقق لي عائداً مادياً فعلياً؟",
          answer: "وكيلك لا ينام أبدًا. من خلال الرد الفوري وتصنيف العملاء، نوقف نزيف خسارة المبيعات. سيتفرغ فريقك البشري لإغلاق الصفقات مع العملاء الجاهزين فقط، مما يرفع معدلات التحويل لديك بشكل ملحوظ.",
        },
        {
          question: "هل يتطلب الأمر مني مهارات تقنية لإدارة الوكيل؟",
          answer: "لا تحتاج لأي مهارات تقنية. نحن نتولى كافة التعقيدات الهندسية ونسلمك نظاماً يعمل ذاتياً. ستحصل فقط على لوحة تحكم بسيطة لمتابعة الأداء، بينما نهتم نحن بالبنية التحتية.",
        },
        {
          question: "كم يستغرق بناء ونشر الوكيل الذكي؟",
          answer: "في المتوسط بين أسبوعين إلى 4 أسابيع. نحن لا نساوم على الجودة؛ نأخذ الوقت الكافي لفهم مسارات محادثاتك، تدريب الوكيل، واختباره ليعمل بكفاءة تامة من اليوم الأول للإطلاق.",
        },
        {
          question: "كيف يتم تحديد التكلفة؟",
          answer: "لأننا نبني أنظمة مخصصة بالكامل، تعتمد التكلفة على مدى تعقيد مسارات المحادثة وحجم الأنظمة التي سنربطها. نحدد الميزانية بدقة وشفافية بعد مكالمة الاستكشاف وفهم احتياجك الفعلي.",
        },
      ],
    },
    // CTA Section
    cta: {
      line1: "البعض يكتفي بإدارة المهام،",
      line2: "بينما يسعى آخرون لهندسة النمو.",
      line3: "نحن نبني لمن يسعون لل",
      highlight: "نمو.",
    },
    // Footer
    footer: {
      tagline: "وكلاء دردشة ذكيون للأعمال الطموحة",
      explore: "استكشف",
      connect: "تواصل",
      copyright: "© 2026 Midotrix.",
    },
    // Services Page
    services: {
      heading: "من محادثات مشتتة إلى أنظمة ذكية موحدة.",
      subtitle: "كل تعاقد مُهندس، وليس مبنياً على قوالب. إليك كيف نبني.",
      tabs: ["الاستكشاف", "الهندسة", "النشر والتأهيل"],
      discover: {
        subheading: "تصميم خريطة العمل",
        body: 'قبل أي بناء، نحتاج لفهم عملك. نأخذ منك المعلومات الأساسية (الأسئلة الشائعة، خدماتك، شروطك) ونحدد معايير "العميل المثالي" لديك. نحن لا نبني بناءً على افتراضات؛ بل نبني بناءً على بياناتك.',
        bullets: [
          "تخطيط هيكلية الوكيل الذكي ومسارات الرد الآلي.",
          "تحديد المنصات (WhatsApp, Website, ...) التي سيتم الدمج فيها.",
        ],
        next: "التالي: الهندسة ←",
      },
      engineer: {
        subheading: "البناء والربط التقني",
        body: "هنا يتحول التخطيط إلى نظام حي ونقوم بالعمل التقني الثقيل. لا نكتفي ببرمجة واجهة الدردشة، بل نبني نظاماً خلفياً متكاملاً. نهندس وكيلاً ذكياً يفهم السياق ويصنف العملاء، ثم نربطه بأدوات الأتمتة لضمان إرسال بيانات العميل فوراً إلى ملفاتك. النتيجة؟ نظام يوفر وقتك ويقلل الجهد اليدوي بشكل جذري.",
        bullets: [
          "تدريب واختبار الوكيل على بيانات مؤسستك.",
          "هندسة مسارات استخراج البيانات.",
          "الدمج التقني مع الأدوات والأنظمة الحالية المستخدمة في مؤسستك.",
        ],
        next: "التالي: النشر والتأهيل ←",
      },
      deploy: {
        subheading: "تشغيل الوكيل",
        body: "بمجرد الانتهاء من الاختبارات، نقوم بنشر الوكيل لعملائك. لا نتركك وحدك؛ بل نزودك بصلاحيات الوصول، ونشرح لك كيف تقرأ بيانات العملاء التي جلبها الوكيل، وكيف يمكن لفريقك التدخل في المحادثة متى ما أرادوا ذلك.",
        bullets: [
          "النشر الفعلي على قنوات التواصل الخاصة بك.",
          "تسليم لوحة التحكم ومسارات البيانات.",
          "دعم تقني لمراقبة الأداء في الأيام الأولى للتشغيل.",
        ],
      },
    },
    // Contact Page
    contact: {
      preTitle: "لنبني شيئاً عظيماً معاً",
      heading: "مستعد لتوظيف وكلاء ذكاء اصطناعي لعملك؟",
      subtitle: "في Midotrix، نتخصص في بناء ودمج وكلاء دردشة ذكاء اصطناعي مصممين خصيصاً ليندمجوا بسلاسة مع سير عملك الفريد. إذا كنت تبحث عن شريك استراتيجي لنشر وكيل دردشة ذكي يرفع من مستوى عملك ويحقق تأثيراً ملموساً، تواصل معنا.",
      info: {
        headquarters: "المقر الرئيسي",
        headquartersValue: "الجزائر",
        email: "البريد الإلكتروني",
        emailValue: "contact@midotrix.com",
        global: "الوصول العالمي",
        globalValue: "نقدم خدماتنا للجزائر، منطقة الخليج، وأوروبا",
      },
      form: {
        fullName: "الاسم الكامل",
        fullNamePlaceholder: "أحمد محمد",
        workEmail: "البريد الإلكتروني للعمل",
        workEmailPlaceholder: "you@company.com",
        website: "موقع الشركة",
        websitePlaceholder: "https://www.yourcompany.com",
        role: "دورك",
        roleOptions: [
          "مؤسس / رئيس تنفيذي",
          "مدير / مدير قسم",
          "مسؤول تسويق / مبيعات",
          "متخصص تقني / IT",
          "موظف / مستقل",
          "آخر",
        ],
        budget: "نطاق الميزانية",
        budgetOptions: ["أقل من 10 آلاف$", "10 آلاف$ – 50 ألف$", "أكثر من 50 ألف$", "غير متأكد بعد"],
        companySize: "حجم الشركة",
        companySizeOptions: ["2–10", "11–50", "50–100", "100+"],
        challenge: "ما هو أكبر تحدٍ يواجه فريقك حالياً في التعامل مع العملاء أو المبيعات؟",
        expectation: "تحديداً، ما الذي تتوقع أن يحققه وكيل الذكاء الاصطناعي داخل عملك؟",
        optional: "(اختياري)",
        aiVision: "ما مدى وضوح رؤيتك لوكيل الذكاء الاصطناعي؟",
        aiVisionOptions: [
          "لدي رؤية كاملة وسير عمل محدد.",
          "أعرف تحدياتي، لكنني بحاجة لخبرتكم لتصميم الحل.",
          "أنا في مرحلة الاستكشاف وأريد معرفة ما هو ممكن.",
        ],
        submit: "إرسال الطلب",
        required: "يرجى ملء هذا الحقل.",
        invalidEmail: "يرجى إدخال بريد إلكتروني صحيح.",
        success: {
          title: "شكراً لتقديم طلبك.",
          body: "فريقنا يراجع تفاصيلك حالياً. إذا قررنا أن عملك مناسب لأنظمة الذكاء الاصطناعي لدينا، سنرسل لك بريداً إلكترونياً خلال 24 ساعة مع رابط خاص لحجز مكالمة الاستكشاف.",
        },
      },
    },
    // FAQ Page
    faqPage: {
      preTitle: "لديك أسئلة؟",
      heading: "الأسئلة الشائعة",
    },
  },
}

export function useTranslation(lang: Language) {
  const t = translations[lang]
  return { t, lang, isRTL: lang === "ar" }
}
