export type Language = "en" | "fr" | "ar"

export const translations = {
  en: {
    // Navigation
    nav: {
      services: "Services",
      faq: "FAQ",
      freeAnalysis: "Free Analysis",
      cta: "Get My Free Analysis",
    },
    // Hero
    hero: {
      headline: "Do you actually know how much of your restaurant's revenue arrives?",
      headlineHighlight: "Do you actually know",
      subheadline: "Between what delivery platforms owe you and what actually lands in your account, there's often a gap — small, repeated, almost invisible. ReconFlow, by Midotrix, compares your sales and settlement data automatically and shows you that gap in numbers, not guesses.",
      secondaryCta: "See How It Works",
    },
    // Pain Points
    painPoints: [
      "Your POS shows an order as completed, but the delivery platform never settled it — and no one noticed",
      "A settlement arrives for an order that doesn't exist anywhere in your sales records",
      "An order gets cancelled after your kitchen already started preparing it, and it's unclear whether that's a dispute or a real loss",
      "Reviewing every order by hand across every platform, every branch, every month, simply isn't realistic",
      "The revenue gap is real — it's just been invisible until now",
    ],
    // Introducing ReconFlow
    reconflow: {
      label: "THE PRODUCT",
      heading: "Introducing ReconFlow",
      subheading: "The reconciliation system behind Midotrix",
      body: "ReconFlow takes your POS sales export and your delivery platform's settlement report, and compares them order by order — systematically, not by a tired eye scanning hundreds of rows once a month.",
      flowSteps: [
        { label: "Your Data", detail: "POS export + platform settlement file" },
        { label: "ReconFlow Engine", detail: "Matching & comparison, order by order" },
        { label: "Discrepancies Found", detail: "Classified by type and amount" },
        { label: "Your Evidence", detail: "Clear numbers, ready to act on" },
      ],
      whatItFinds: {
        heading: "What ReconFlow can identify",
        items: [
          { title: "Missing Settlements", body: "Orders completed in your POS with no matching settlement from the platform." },
          { title: "Unexpected Settlements", body: "Platform payouts for orders that don't exist in your POS records." },
          { title: "Cancelled After Preparation", body: "Orders cancelled after prep started — flagged separately, because it's usually an operational loss, not a payment dispute." },
        ],
      },
      whatYouGet: {
        heading: "What you actually get",
        items: [
          "A results summary: orders processed, matched, and unmatched",
          "Every discrepancy, documented with the order reference and exact amount",
          "A ready-to-send dispute report for the platform",
          "An executive summary of what was found",
        ],
      },
    },
    // Loom Video Showcase
    loom: {
      label: "SEE IT IN ACTION",
      heading: "Watch ReconFlow find a real discrepancy",
      subtitle: "A short walkthrough of the system and its actual output.",
      placeholderNote: "Video coming soon",
      ctaAfter: "Try This On Your Own Data — Free",
    },
    // Sample Results
    sampleResults: {
      label: "REAL OUTPUT, SAMPLE DATA",
      heading: "This is what a ReconFlow analysis actually looks like",
      subtitle: "Real figures produced by the system during testing — shown here as an illustrative example.",
      restaurantLabel: "Sample Restaurant",
      periodLabel: "Period",
      periodValue: "1 month",
      totalLabel: "Total Potential Revenue Leakage",
      totalValue: "SAR 14,231.30",
      casesLabel: "across 60 discrepancies",
      ordersProcessed: "Orders Processed",
      ordersProcessedValue: "190",
      matched: "Matched",
      matchedValue: "150",
      breakdown: [
        { category: "Missing Settlement", count: "20 cases", amount: "SAR 4,893.88" },
        { category: "Cancelled After Preparation", count: "20 cases", amount: "SAR 4,681.42" },
        { category: "Unexpected Settlement", count: "20 cases", amount: "SAR 4,656.00" },
      ],
      cta: "Get This For Your Restaurant — Free",
    },
    // About
    about: {
      heading: "This is why Midotrix exists.",
      body: "We're not a general automation agency. Midotrix specializes in one problem: financial and revenue reconciliation for restaurants. ReconFlow is the system we built to solve it — comparing your POS and delivery platform data so the gaps between them stop being invisible.",
    },
    // Framework
    framework: {
      label: "HOW IT WORKS",
      heading: "How ReconFlow Works",
      cards: [
        {
          title: "Understand Your Setup",
          body: "We learn your branches, your POS system, and which delivery platforms you use — so your data is read correctly from day one.",
        },
        {
          title: "Reconcile Your Data",
          body: "ReconFlow compares your sales export against each platform's settlement report, order by order, and classifies every discrepancy it finds.",
        },
        {
          title: "Deliver Real Answers",
          body: "You get a clear results summary, a ready-to-send dispute report, and — for ongoing clients — recurring monthly reconciliation.",
        },
      ],
    },
    // FAQ
    faq: {
      heading: "Frequently Asked Questions",
      pageIntro: "Clear answers about ReconFlow, how it works, and whether it fits your restaurant. For anything else, start your free analysis and ask us directly.",
      items: [
        {
          question: "We already review our settlements manually — do we really need this?",
          answer: "Manual review works for a handful of orders. Past that, it's a matter of time and attention, not willingness — a single missed order among hundreds is easy to miss, every single week. ReconFlow checks every order, every time, the same way.",
        },
        {
          question: "We already have an accountant — isn't this their job?",
          answer: "Your accountant manages your books as a whole. ReconFlow does something different and far more specific: matching every individual order against its settlement. It actually saves your accountant time they'd otherwise spend on manual reconciliation.",
        },
        {
          question: "The discrepancies are probably tiny anyway, right?",
          answer: "Individually, often yes. But they repeat — weekly, across every branch and platform. A handful of small gaps, multiplied by 52 weeks, adds up to a real number. That's exactly what ReconFlow shows you.",
        },
        {
          question: "How do I know your numbers are actually correct?",
          answer: "Every discrepancy is documented with the exact order reference and amount, pulled directly from your own files — not estimated. You can verify any single case yourself against your POS or platform dashboard.",
        },
        {
          question: "What if you don't find anything?",
          answer: "That's a genuinely useful result too — it means your reconciliation is clean, and you now know that with confidence instead of assuming it.",
        },
        {
          question: "Is my financial data safe?",
          answer: "Your files are used only to analyze your own restaurant's data, and are not shared with any other party.",
        },
        {
          question: "Does ReconFlow replace our POS system or delivery platform accounts?",
          answer: "No. ReconFlow doesn't touch or replace either one — it's a reconciliation layer that works on top of the data you already export from them.",
        },
      ],
    },
    // CTA Section
    cta: {
      line1: "Most restaurants assume their settlements are correct,",
      line2: "and never actually check.",
      line3: "We help you",
      highlight: "know for sure.",
    },
    // Footer
    footer: {
      tagline: "Financial Reconciliation Systems for Restaurants — powered by ReconFlow.",
      explore: "Explore",
      connect: "Connect",
      copyright: "© 2026 Midotrix.",
    },
    // Services Page
    services: {
      heading: "From unclear settlements to verified numbers.",
      subtitle: "Here is exactly how we set up ReconFlow for your restaurant.",
      tabs: ["Understand", "Reconcile", "Deliver"],
      discover: {
        subheading: "Understand Your Setup",
        body: "Before any analysis runs, we need to understand your restaurant: how many branches you operate, which delivery platforms you use, your POS system, and how you currently review settlements (if at all). We don't guess at your setup — we configure ReconFlow around it.",
        bullets: [
          "Branch, POS system, and delivery platform details.",
          "A first look at your current reconciliation process — manual, via an accountant, or not done at all.",
        ],
        next: "Next: Reconcile →",
      },
      engineer: {
        subheading: "Reconcile Your Data",
        body: "This is where ReconFlow actually runs. Your POS export and each platform's settlement report are compared order by order — matching what should have arrived against what actually did, and classifying every discrepancy by type: missing settlements, unexpected settlements, and orders cancelled after preparation.",
        bullets: [
          "Order-by-order matching between your POS and each delivery platform.",
          "Automatic classification of every discrepancy found.",
          "A clear summary: orders processed, matched, and unmatched.",
        ],
        next: "Next: Deliver →",
      },
      deploy: {
        subheading: "Deliver Real Answers",
        body: "You receive your results directly — a summary, a full breakdown of every discrepancy, and a ready-to-send dispute report for the platform. For ongoing clients, this runs on a recurring monthly basis, so nothing goes unchecked again.",
        bullets: [
          "A results page with your total potential revenue leakage.",
          "A downloadable dispute report, ready to send to the platform.",
          "Recurring monthly reconciliation for ongoing clients.",
        ],
        next: "",
      },
    },
    // Contact Page (general inquiries — simplified)
    contact: {
      preTitle: "Have a question first?",
      heading: "Talk to us directly",
      subtitle: "If you'd rather ask a question before starting your free analysis, send us a message and we'll get back to you directly.",
      info: {
        headquarters: "Headquarters",
        headquartersValue: "Algeria",
        email: "Email Address",
        emailValue: "contact@midotrix.com",
        global: "Serving",
        globalValue: "Saudi Arabia, the UAE, and the wider Gulf region",
      },
      form: {
        fullName: "Full Name",
        fullNamePlaceholder: "John Smith",
        workEmail: "Email",
        workEmailPlaceholder: "you@restaurant.com",
        message: "Your Question",
        messagePlaceholder: "What would you like to know?",
        submit: "Send Message",
        required: "Please fill in this field.",
        invalidEmail: "Please enter a valid email address.",
        success: {
          title: "Message received.",
          body: "Thank you for reaching out — we'll get back to you directly within 1 business day.",
        },
      },
      freeAnalysisPrompt: "Or skip straight to seeing what ReconFlow finds in your data —",
      freeAnalysisLink: "start your free analysis",
    },
    // Free Analysis Page
    freeAnalysis: {
      preTitle: "FREE, NO OBLIGATION",
      heading: "See exactly how much your restaurant is losing — for free.",
      subheading: "Send us your sales export and your delivery platform's settlement report. We'll reconcile them and send you the real result.",
      whatHappens: {
        heading: "What happens after you submit",
        steps: [
          { title: "We review your files", body: "A real person checks that your data is ready for analysis." },
          { title: "We run your reconciliation", body: "ReconFlow compares your data and identifies every discrepancy." },
          { title: "You get your real results", body: "We send your findings directly, usually within 2 business days." },
        ],
      },
      form: {
        sectionQualification: "About Your Restaurant",
        restaurantName: "Restaurant / Chain Name",
        restaurantNamePlaceholder: "Your restaurant's name",
        branchCount: "Number of Branches",
        branchCountOptions: ["1", "2–5", "6–15", "15+"],
        country: "Country",
        countryOptions: ["Saudi Arabia", "United Arab Emirates", "Other Gulf country", "Other"],
        platforms: "Delivery Platforms You Use",
        platformsOptions: ["HungerStation", "Jahez", "Deliveroo", "Other"],
        posSystem: "POS System",
        posSystemPlaceholder: "e.g. Foodics, Marn, other",
        currentProcess: "How do you review settlements today?",
        currentProcessOptions: ["Manually, order by order", "Via our accountant", "We don't review them closely", "Other"],
        sectionContact: "Your Contact Details",
        email: "Email",
        emailPlaceholder: "you@restaurant.com",
        whatsapp: "WhatsApp Number",
        whatsappPlaceholder: "+966 5X XXX XXXX",
        role: "Your Role",
        roleOptions: ["Owner", "Finance Manager", "Operations Manager", "Other"],
        sectionFiles: "Your Data",
        posFile: "POS Sales Export",
        posFileHint: "CSV, XLSX, or XLS — up to 50MB",
        platformFile: "Platform Settlement Report",
        platformFileHint: "CSV, XLSX, or XLS — up to 50MB",
        noSecondFileYet: "Don't have this file ready yet? Send what you have — you can follow up with the rest.",
        trustNote: "Your data is used only to analyze your own restaurant, and is never shared with any other party.",
        submit: "Send My Data — Start My Free Analysis",
        submitting: "Sending...",
        required: "Please fill in this field.",
        invalidEmail: "Please enter a valid email address.",
        success: {
          title: "Your data is in.",
          body: "We're reviewing it now. Expect your real reconciliation results by email within 2 business days.",
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
      freeAnalysis: "Analyse Gratuite",
      cta: "Obtenir Mon Analyse Gratuite",
    },
    // Hero
    hero: {
      headline: "Savez-vous vraiment quelle part du chiffre d'affaires de votre restaurant arrive réellement ?",
      headlineHighlight: "Savez-vous vraiment",
      subheadline: "Entre ce que les plateformes de livraison vous doivent et ce qui arrive réellement sur votre compte, il existe souvent un écart — petit, répété, presque invisible. ReconFlow, par Midotrix, compare automatiquement vos données de ventes et de règlements, et vous montre cet écart en chiffres, pas en suppositions.",
      secondaryCta: "Voir Comment Ça Marche",
    },
    // Pain Points
    painPoints: [
      "Votre caisse indique une commande complétée, mais la plateforme de livraison ne l'a jamais réglée — et personne ne l'a remarqué",
      "Un règlement arrive pour une commande qui n'existe nulle part dans vos données de vente",
      "Une commande est annulée après que votre cuisine a déjà commencé la préparation, et on ne sait pas s'il s'agit d'un litige ou d'une perte réelle",
      "Vérifier chaque commande manuellement, sur chaque plateforme, chaque succursale, chaque mois, n'est tout simplement pas réaliste",
      "L'écart de revenus est réel — il était simplement invisible jusqu'à présent",
    ],
    // Introducing ReconFlow
    reconflow: {
      label: "LE PRODUIT",
      heading: "Découvrez ReconFlow",
      subheading: "Le système de réconciliation derrière Midotrix",
      body: "ReconFlow prend l'export de vos ventes en caisse et le rapport de règlement de votre plateforme de livraison, et les compare commande par commande — de manière systématique, pas par un œil fatigué qui parcourt des centaines de lignes une fois par mois.",
      flowSteps: [
        { label: "Vos Données", detail: "Export caisse + fichier de règlement plateforme" },
        { label: "Moteur ReconFlow", detail: "Rapprochement et comparaison, commande par commande" },
        { label: "Écarts Détectés", detail: "Classés par type et par montant" },
        { label: "Vos Preuves", detail: "Des chiffres clairs, prêts à l'action" },
      ],
      whatItFinds: {
        heading: "Ce que ReconFlow peut identifier",
        items: [
          { title: "Règlements Manquants", body: "Commandes complétées dans votre caisse sans règlement correspondant de la plateforme." },
          { title: "Règlements Inattendus", body: "Paiements de la plateforme pour des commandes qui n'existent pas dans vos données de caisse." },
          { title: "Annulations Après Préparation", body: "Commandes annulées après le début de la préparation — signalées séparément, car il s'agit généralement d'une perte opérationnelle, pas d'un litige de paiement." },
        ],
      },
      whatYouGet: {
        heading: "Ce que vous obtenez réellement",
        items: [
          "Un résumé des résultats : commandes traitées, rapprochées et non rapprochées",
          "Chaque écart documenté avec la référence exacte de la commande et le montant",
          "Un rapport de litige prêt à envoyer à la plateforme",
          "Un résumé exécutif des constats",
        ],
      },
    },
    // Loom Video Showcase
    loom: {
      label: "VOYEZ-LE EN ACTION",
      heading: "Regardez ReconFlow détecter un écart réel",
      subtitle: "Une brève démonstration du système et de ses résultats réels.",
      placeholderNote: "Vidéo à venir",
      ctaAfter: "Essayez Ceci Sur Vos Propres Données — Gratuit",
    },
    // Sample Results
    sampleResults: {
      label: "RÉSULTAT RÉEL, DONNÉES EXEMPLE",
      heading: "Voici à quoi ressemble réellement une analyse ReconFlow",
      subtitle: "Chiffres réels produits par le système lors de tests — présentés ici à titre d'exemple illustratif.",
      restaurantLabel: "Restaurant Exemple",
      periodLabel: "Période",
      periodValue: "1 mois",
      totalLabel: "Fuite de Revenus Potentielle Totale",
      totalValue: "14 231,30 SAR",
      casesLabel: "sur 60 écarts",
      ordersProcessed: "Commandes Traitées",
      ordersProcessedValue: "190",
      matched: "Rapprochées",
      matchedValue: "150",
      breakdown: [
        { category: "Règlement Manquant", count: "20 cas", amount: "4 893,88 SAR" },
        { category: "Annulation Après Préparation", count: "20 cas", amount: "4 681,42 SAR" },
        { category: "Règlement Inattendu", count: "20 cas", amount: "4 656,00 SAR" },
      ],
      cta: "Obtenez Ceci Pour Votre Restaurant — Gratuit",
    },
    // About
    about: {
      heading: "C'est pour cela que Midotrix existe.",
      body: "Nous ne sommes pas une agence d'automatisation généraliste. Midotrix se spécialise dans un seul problème : la réconciliation financière et des revenus pour les restaurants. ReconFlow est le système que nous avons construit pour le résoudre — en comparant les données de votre caisse et de vos plateformes de livraison pour que les écarts entre elles cessent d'être invisibles.",
    },
    // Framework
    framework: {
      label: "COMMENT ÇA MARCHE",
      heading: "Comment ReconFlow Fonctionne",
      cards: [
        {
          title: "Comprendre Votre Configuration",
          body: "Nous prenons connaissance de vos succursales, de votre système de caisse et des plateformes de livraison que vous utilisez — pour que vos données soient lues correctement dès le premier jour.",
        },
        {
          title: "Rapprocher Vos Données",
          body: "ReconFlow compare l'export de vos ventes au rapport de règlement de chaque plateforme, commande par commande, et classe chaque écart détecté.",
        },
        {
          title: "Livrer de Vraies Réponses",
          body: "Vous recevez un résumé clair des résultats, un rapport de litige prêt à envoyer, et — pour les clients réguliers — une réconciliation mensuelle récurrente.",
        },
      ],
    },
    // FAQ
    faq: {
      heading: "Questions Fréquemment Posées",
      pageIntro: "Des réponses claires sur ReconFlow, son fonctionnement, et si cela convient à votre restaurant. Pour toute autre question, démarrez votre analyse gratuite et posez-nous directement la question.",
      items: [
        {
          question: "Nous vérifions déjà nos règlements manuellement — en avons-nous vraiment besoin ?",
          answer: "La vérification manuelle fonctionne pour une poignée de commandes. Au-delà, c'est une question de temps et d'attention, pas de volonté — une seule commande manquée parmi des centaines est facile à rater, chaque semaine. ReconFlow vérifie chaque commande, à chaque fois, de la même manière.",
        },
        {
          question: "Nous avons déjà un comptable — n'est-ce pas son travail ?",
          answer: "Votre comptable gère votre comptabilité dans son ensemble. ReconFlow fait quelque chose de différent et bien plus spécifique : rapprocher chaque commande individuelle avec son règlement. Cela fait même gagner du temps à votre comptable, qu'il aurait autrement passé sur la réconciliation manuelle.",
        },
        {
          question: "Les écarts sont probablement minimes de toute façon, non ?",
          answer: "Individuellement, souvent oui. Mais ils se répètent — chaque semaine, dans chaque succursale et plateforme. Une poignée de petits écarts, multipliés par 52 semaines, représente un montant réel. C'est exactement ce que ReconFlow vous montre.",
        },
        {
          question: "Comment savoir si vos chiffres sont réellement corrects ?",
          answer: "Chaque écart est documenté avec la référence exacte de la commande et le montant, extraits directement de vos propres fichiers — pas estimés. Vous pouvez vérifier vous-même n'importe quel cas dans votre caisse ou tableau de bord de plateforme.",
        },
        {
          question: "Et si vous ne trouvez rien ?",
          answer: "C'est aussi un résultat véritablement utile — cela signifie que votre réconciliation est saine, et vous le savez désormais avec certitude plutôt que de le supposer.",
        },
        {
          question: "Mes données financières sont-elles en sécurité ?",
          answer: "Vos fichiers ne sont utilisés que pour analyser les données de votre propre restaurant, et ne sont partagés avec aucune autre partie.",
        },
        {
          question: "ReconFlow remplace-t-il notre système de caisse ou nos comptes de plateformes de livraison ?",
          answer: "Non. ReconFlow ne touche ni ne remplace aucun des deux — c'est une couche de réconciliation qui fonctionne au-dessus des données que vous en exportez déjà.",
        },
      ],
    },
    // CTA Section
    cta: {
      line1: "La plupart des restaurants supposent que leurs règlements sont corrects,",
      line2: "et ne vérifient jamais vraiment.",
      line3: "Nous vous aidons à",
      highlight: "en être certain.",
    },
    // Footer
    footer: {
      tagline: "Systèmes de Réconciliation Financière pour Restaurants — propulsé par ReconFlow.",
      explore: "Explorer",
      connect: "Connexion",
      copyright: "© 2026 Midotrix.",
    },
    // Services Page
    services: {
      heading: "De règlements confus à des chiffres vérifiés.",
      subtitle: "Voici exactement comment nous configurons ReconFlow pour votre restaurant.",
      tabs: ["Comprendre", "Rapprocher", "Livrer"],
      discover: {
        subheading: "Comprendre Votre Configuration",
        body: "Avant toute analyse, nous devons comprendre votre restaurant : combien de succursales vous exploitez, quelles plateformes de livraison vous utilisez, votre système de caisse, et comment vous vérifiez actuellement vos règlements (le cas échéant). Nous ne devinons pas votre configuration — nous configurons ReconFlow autour d'elle.",
        bullets: [
          "Détails des succursales, du système de caisse et des plateformes de livraison.",
          "Un premier aperçu de votre processus de réconciliation actuel — manuel, via un comptable, ou inexistant.",
        ],
        next: "Suivant : Rapprocher →",
      },
      engineer: {
        subheading: "Rapprocher Vos Données",
        body: "C'est ici que ReconFlow s'exécute réellement. L'export de votre caisse et le rapport de règlement de chaque plateforme sont comparés commande par commande — ce qui aurait dû arriver face à ce qui est réellement arrivé, avec classification de chaque écart par type : règlements manquants, règlements inattendus, et commandes annulées après préparation.",
        bullets: [
          "Rapprochement commande par commande entre votre caisse et chaque plateforme de livraison.",
          "Classification automatique de chaque écart détecté.",
          "Un résumé clair : commandes traitées, rapprochées et non rapprochées.",
        ],
        next: "Suivant : Livrer →",
      },
      deploy: {
        subheading: "Livrer de Vraies Réponses",
        body: "Vous recevez vos résultats directement — un résumé, une répartition complète de chaque écart, et un rapport de litige prêt à envoyer à la plateforme. Pour les clients réguliers, cela s'exécute mensuellement, afin que plus rien ne passe inaperçu.",
        bullets: [
          "Une page de résultats avec votre fuite de revenus potentielle totale.",
          "Un rapport de litige téléchargeable, prêt à envoyer à la plateforme.",
          "Réconciliation mensuelle récurrente pour les clients réguliers.",
        ],
        next: "",
      },
    },
    // Contact Page (general inquiries — simplified)
    contact: {
      preTitle: "Une question d'abord ?",
      heading: "Parlez-nous directement",
      subtitle: "Si vous préférez poser une question avant de démarrer votre analyse gratuite, envoyez-nous un message et nous vous répondrons directement.",
      info: {
        headquarters: "Siège social",
        headquartersValue: "Algérie",
        email: "Adresse e-mail",
        emailValue: "contact@midotrix.com",
        global: "Nous servons",
        globalValue: "l'Arabie Saoudite, les Émirats Arabes Unis, et l'ensemble de la région du Golfe",
      },
      form: {
        fullName: "Nom complet",
        fullNamePlaceholder: "Jean Dupont",
        workEmail: "E-mail",
        workEmailPlaceholder: "vous@restaurant.com",
        message: "Votre question",
        messagePlaceholder: "Que souhaitez-vous savoir ?",
        submit: "Envoyer le message",
        required: "Veuillez remplir ce champ.",
        invalidEmail: "Veuillez entrer une adresse e-mail valide.",
        success: {
          title: "Message reçu.",
          body: "Merci de nous avoir contactés — nous vous répondrons directement sous 1 jour ouvré.",
        },
      },
      freeAnalysisPrompt: "Ou passez directement à la découverte de ce que ReconFlow trouve dans vos données —",
      freeAnalysisLink: "démarrez votre analyse gratuite",
    },
    // Free Analysis Page
    freeAnalysis: {
      preTitle: "GRATUIT, SANS ENGAGEMENT",
      heading: "Découvrez exactement combien votre restaurant perd — gratuitement.",
      subheading: "Envoyez-nous l'export de vos ventes et le rapport de règlement de votre plateforme de livraison. Nous les rapprocherons et vous enverrons le résultat réel.",
      whatHappens: {
        heading: "Ce qui se passe après votre envoi",
        steps: [
          { title: "Nous examinons vos fichiers", body: "Une personne réelle vérifie que vos données sont prêtes pour l'analyse." },
          { title: "Nous lançons votre réconciliation", body: "ReconFlow compare vos données et identifie chaque écart." },
          { title: "Vous recevez vos résultats réels", body: "Nous vous envoyons vos résultats directement, généralement sous 2 jours ouvrés." },
        ],
      },
      form: {
        sectionQualification: "À Propos de Votre Restaurant",
        restaurantName: "Nom du Restaurant / de la Chaîne",
        restaurantNamePlaceholder: "Le nom de votre restaurant",
        branchCount: "Nombre de Succursales",
        branchCountOptions: ["1", "2–5", "6–15", "15+"],
        country: "Pays",
        countryOptions: ["Arabie Saoudite", "Émirats Arabes Unis", "Autre pays du Golfe", "Autre"],
        platforms: "Plateformes de Livraison Utilisées",
        platformsOptions: ["HungerStation", "Jahez", "Deliveroo", "Autre"],
        posSystem: "Système de Caisse",
        posSystemPlaceholder: "ex. Foodics, Marn, autre",
        currentProcess: "Comment vérifiez-vous vos règlements aujourd'hui ?",
        currentProcessOptions: ["Manuellement, commande par commande", "Via notre comptable", "Nous ne les vérifions pas de près", "Autre"],
        sectionContact: "Vos Coordonnées",
        email: "E-mail",
        emailPlaceholder: "vous@restaurant.com",
        whatsapp: "Numéro WhatsApp",
        whatsappPlaceholder: "+966 5X XXX XXXX",
        role: "Votre Rôle",
        roleOptions: ["Propriétaire", "Responsable Financier", "Responsable des Opérations", "Autre"],
        sectionFiles: "Vos Données",
        posFile: "Export des Ventes (Caisse)",
        posFileHint: "CSV, XLSX, ou XLS — jusqu'à 50 Mo",
        platformFile: "Rapport de Règlement Plateforme",
        platformFileHint: "CSV, XLSX, ou XLS — jusqu'à 50 Mo",
        noSecondFileYet: "Vous n'avez pas encore ce fichier ? Envoyez ce que vous avez — vous pourrez compléter plus tard.",
        trustNote: "Vos données ne sont utilisées que pour analyser votre propre restaurant, et ne sont jamais partagées avec un tiers.",
        submit: "Envoyer Mes Données — Démarrer Mon Analyse Gratuite",
        submitting: "Envoi en cours...",
        required: "Veuillez remplir ce champ.",
        invalidEmail: "Veuillez entrer une adresse e-mail valide.",
        success: {
          title: "Vos données sont bien reçues.",
          body: "Nous les examinons dès maintenant. Attendez-vous à recevoir vos résultats de réconciliation réels par e-mail sous 2 jours ouvrés.",
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
      freeAnalysis: "تحليل مجاني",
      cta: "احصل على تحليلي المجاني",
    },
    // Hero
    hero: {
      headline: "هل تعرف حقًا كم من إيرادات مطعمك يصل فعليًا؟",
      headlineHighlight: "هل تعرف حقًا",
      subheadline: "بين ما يُفترض أن تستلمه من منصات التوصيل وما يصلك فعليًا، غالبًا توجد فجوة — صغيرة، متكررة، شبه غير مرئية. ReconFlow، من Midotrix، يقارن بيانات مبيعاتك وتسوياتك تلقائيًا، ويُريك هذه الفجوة بالأرقام، لا بالتخمين.",
      secondaryCta: "شاهد كيف يعمل",
    },
    // Pain Points
    painPoints: [
      "نظام نقطة البيع لديك يُظهر طلبًا مكتملاً، لكن منصة التوصيل لم تُسوِّه أبدًا — ولم يلاحظ أحد ذلك",
      "تصلك تسوية لطلب لا وجود له إطلاقًا في سجلات مبيعاتك",
      "طلب يُلغى بعد أن بدأ مطبخك تحضيره فعليًا، ولا يتضح إن كانت هذه حالة نزاع أم خسارة حقيقية",
      "مراجعة كل طلب يدويًا، عبر كل منصة، كل فرع، كل شهر — ببساطة غير واقعية",
      "فجوة الإيرادات حقيقية — كانت فقط غير مرئية حتى الآن",
    ],
    // Introducing ReconFlow
    reconflow: {
      label: "المنتج",
      heading: "تعرّف على ReconFlow",
      subheading: "نظام المصالحة المالية وراء Midotrix",
      body: "ReconFlow يأخذ تصدير مبيعاتك من نقطة البيع وتقرير التسوية من منصة التوصيل، ويقارن بينهما طلبًا بطلب — بشكل منهجي، وليس بعين متعبة تمر على مئات الصفوف مرة واحدة كل شهر.",
      flowSteps: [
        { label: "بياناتك", detail: "تصدير نقطة البيع + ملف تسوية المنصة" },
        { label: "محرك ReconFlow", detail: "مطابقة ومقارنة، طلبًا بطلب" },
        { label: "الفروقات المكتشَفة", detail: "مصنَّفة حسب النوع والمبلغ" },
        { label: "دليلك", detail: "أرقام واضحة، جاهزة للتصرف بناءً عليها" },
      ],
      whatItFinds: {
        heading: "ماذا يستطيع ReconFlow اكتشافه",
        items: [
          { title: "تسويات مفقودة", body: "طلبات مكتملة في نقطة البيع، بلا أي تسوية مقابلة من المنصة." },
          { title: "تسويات غير متوقعة", body: "دفعات من المنصة لطلبات لا وجود لها في سجلات نقطة البيع." },
          { title: "إلغاءات بعد بدء التحضير", body: "طلبات أُلغيت بعد بدء التحضير — تُصنَّف بشكل منفصل، لأنها غالبًا خسارة تشغيلية، وليست نزاعًا ماليًا." },
        ],
      },
      whatYouGet: {
        heading: "ماذا تحصل عليه فعليًا",
        items: [
          "ملخص نتائج: الطلبات المعالجة، المطابقة، وغير المطابقة",
          "كل فرق موثَّق برقم الطلب الدقيق والمبلغ",
          "تقرير نزاع جاهز للإرسال إلى المنصة",
          "ملخص تنفيذي لما تم اكتشافه",
        ],
      },
    },
    // Loom Video Showcase
    loom: {
      label: "شاهده أثناء العمل",
      heading: "شاهد ReconFlow يكتشف فرقًا ماليًا حقيقيًا",
      subtitle: "شرح مختصر للنظام ونتائجه الفعلية.",
      placeholderNote: "الفيديو قريبًا",
      ctaAfter: "جرّب هذا على بيانات مطعمك — مجانًا",
    },
    // Sample Results
    sampleResults: {
      label: "نتيجة حقيقية، بيانات نموذجية",
      heading: "هكذا تبدو نتيجة تحليل ReconFlow فعليًا",
      subtitle: "أرقام حقيقية أنتجها النظام أثناء الاختبار — معروضة هنا كمثال توضيحي.",
      restaurantLabel: "مطعم نموذجي",
      periodLabel: "الفترة",
      periodValue: "شهر واحد",
      totalLabel: "إجمالي التسرب المالي المحتمل",
      totalValue: "١٤,٢٣١.٣٠ ريال",
      casesLabel: "عبر ٦٠ حالة فرق",
      ordersProcessed: "الطلبات المعالجة",
      ordersProcessedValue: "١٩٠",
      matched: "المطابقة",
      matchedValue: "١٥٠",
      breakdown: [
        { category: "تسويات مفقودة", count: "٢٠ حالة", amount: "٤,٨٩٣.٨٨ ريال" },
        { category: "إلغاءات بعد التحضير", count: "٢٠ حالة", amount: "٤,٦٨١.٤٢ ريال" },
        { category: "تسويات غير متوقعة", count: "٢٠ حالة", amount: "٤,٦٥٦.٠٠ ريال" },
      ],
      cta: "احصل على نتيجة مماثلة لمطعمك — مجانًا",
    },
    // About
    about: {
      heading: "لهذا السبب توجد Midotrix.",
      body: "نحن لسنا وكالة أتمتة عامة. Midotrix متخصصة في مشكلة واحدة: المصالحة المالية وإيرادات المطاعم. ReconFlow هو النظام الذي بنيناه لحلها — يقارن بيانات نقطة البيع ومنصات التوصيل حتى تتوقف الفجوة بينهما عن أن تكون غير مرئية.",
    },
    // Framework
    framework: {
      label: "كيف يعمل",
      heading: "كيف يعمل ReconFlow",
      cards: [
        {
          title: "نفهم إعدادك",
          body: "نتعرّف على فروعك، نظام نقطة البيع لديك، ومنصات التوصيل التي تستخدمها — لتُقرأ بياناتك بشكل صحيح من اليوم الأول.",
        },
        {
          title: "نُصالِح بياناتك",
          body: "ReconFlow يقارن تصدير مبيعاتك بتقرير تسوية كل منصة، طلبًا بطلب، ويصنّف كل فرق يكتشفه.",
        },
        {
          title: "نُسلِّم إجابات حقيقية",
          body: "تحصل على ملخص نتائج واضح، وتقرير نزاع جاهز للإرسال، وللعملاء المستمرين — مصالحة شهرية متكررة.",
        },
      ],
    },
    // FAQ
    faq: {
      heading: "الأسئلة الشائعة",
      pageIntro: "إجابات واضحة عن ReconFlow، كيف يعمل، وهل يناسب مطعمك. لأي شيء آخر، ابدأ تحليلك المجاني واسألنا مباشرة.",
      items: [
        {
          question: "نحن نراجع تسوياتنا يدويًا بالفعل — هل نحتاج هذا فعلاً؟",
          answer: "المراجعة اليدوية تنجح مع عدد قليل من الطلبات. بعد ذلك، الأمر يتعلق بالوقت والتركيز، وليس الرغبة — طلب واحد فائت وسط المئات يمر بسهولة، كل أسبوع. ReconFlow يراجع كل طلب، في كل مرة، بنفس الدقة.",
        },
        {
          question: "لدينا محاسب بالفعل — أليست هذه مهمته؟",
          answer: "محاسبك يدير حساباتك ككل. ReconFlow يقوم بشيء مختلف تمامًا وأكثر تحديدًا: مطابقة كل طلب فردي مقابل تسويته. هذا فعليًا يوفر على محاسبك وقتًا كان سيقضيه في مصالحة يدوية.",
        },
        {
          question: "الفروقات على الأغلب صغيرة جدًا على أي حال؟",
          answer: "فرديًا، غالبًا نعم. لكنها تتكرر — أسبوعيًا، عبر كل فرع ومنصة. مجموعة فروقات صغيرة، مضروبة في ٥٢ أسبوعًا، تتراكم لرقم حقيقي. هذا بالضبط ما يُريك إياه ReconFlow.",
        },
        {
          question: "كيف أعرف أن أرقامكم صحيحة فعليًا؟",
          answer: "كل فرق موثَّق برقم الطلب الدقيق والمبلغ، مأخوذ مباشرة من ملفاتك أنت — وليس تقديرًا. يمكنك التحقق بنفسك من أي حالة عبر نظام نقطة البيع أو لوحة تحكم المنصة.",
        },
        {
          question: "ماذا لو لم تجدوا أي شيء؟",
          answer: "هذه نتيجة مفيدة فعليًا أيضًا — تعني أن مصالحتك سليمة، وأصبحت تعرف ذلك بثقة بدل الافتراض.",
        },
        {
          question: "هل بياناتي المالية آمنة؟",
          answer: "ملفاتك تُستخدَم فقط لتحليل بيانات مطعمك أنت، ولا تُشارَك مع أي طرف آخر.",
        },
        {
          question: "هل ReconFlow يستبدل نظام نقطة البيع أو حسابات منصات التوصيل لدينا؟",
          answer: "لا. ReconFlow لا يمس ولا يستبدل أيًا منهما — هو طبقة مصالحة تعمل فوق البيانات التي تُصدِّرها منهما بالفعل.",
        },
      ],
    },
    // CTA Section
    cta: {
      line1: "معظم المطاعم تفترض أن تسوياتها صحيحة،",
      line2: "ولا تتحقق من ذلك فعليًا أبدًا.",
      line3: "نساعدك أن",
      highlight: "تعرف بيقين.",
    },
    // Footer
    footer: {
      tagline: "أنظمة مصالحة مالية للمطاعم — مدعومة بـReconFlow.",
      explore: "استكشف",
      connect: "تواصل",
      copyright: "© 2026 Midotrix.",
    },
    // Services Page
    services: {
      heading: "من تسويات غامضة إلى أرقام موثَّقة.",
      subtitle: "إليك بالضبط كيف نُهيئ ReconFlow لمطعمك.",
      tabs: ["الفهم", "المصالحة", "التسليم"],
      discover: {
        subheading: "نفهم إعدادك",
        body: "قبل أي تحليل، نحتاج فهم مطعمك: كم فرعًا تديره، أي منصات توصيل تستخدمها، نظام نقطة البيع لديك، وكيف تراجع تسوياتك اليوم (إن كنت تراجعها أصلاً). لا نُخمِّن إعدادك — نُهيئ ReconFlow حوله بدقة.",
        bullets: [
          "تفاصيل الفروع، نظام نقطة البيع، ومنصات التوصيل.",
          "نظرة أولى على عملية المصالحة الحالية لديك — يدوية، عبر محاسب، أو غير موجودة.",
        ],
        next: "التالي: المصالحة ←",
      },
      engineer: {
        subheading: "نُصالِح بياناتك",
        body: "هنا يعمل ReconFlow فعليًا. تصدير نقطة البيع لديك وتقرير تسوية كل منصة يُقارَنان طلبًا بطلب — ما كان يُفترض أن يصل مقابل ما وصل فعليًا، مع تصنيف كل فرق حسب نوعه: تسويات مفقودة، تسويات غير متوقعة، وطلبات أُلغيت بعد التحضير.",
        bullets: [
          "مطابقة طلبًا بطلب بين نقطة البيع وكل منصة توصيل.",
          "تصنيف تلقائي لكل فرق يُكتشَف.",
          "ملخص واضح: الطلبات المعالجة، المطابقة، وغير المطابقة.",
        ],
        next: "التالي: التسليم ←",
      },
      deploy: {
        subheading: "نُسلِّم إجابات حقيقية",
        body: "تحصل على نتائجك مباشرة — ملخص، تفصيل كامل لكل فرق، وتقرير نزاع جاهز للإرسال للمنصة. للعملاء المستمرين، هذا يعمل بشكل شهري متكرر، حتى لا يفوتك شيء مجددًا.",
        bullets: [
          "صفحة نتائج بإجمالي التسرب المالي المحتمل.",
          "تقرير نزاع قابل للتحميل، جاهز للإرسال للمنصة.",
          "مصالحة شهرية متكررة للعملاء المستمرين.",
        ],
        next: "",
      },
    },
    // Contact Page (general inquiries — simplified)
    contact: {
      preTitle: "لديك سؤال أولاً؟",
      heading: "تواصل معنا مباشرة",
      subtitle: "إذا كنت تفضّل طرح سؤال قبل بدء تحليلك المجاني، أرسل لنا رسالة وسنرد عليك مباشرة.",
      info: {
        headquarters: "المقر الرئيسي",
        headquartersValue: "الجزائر",
        email: "البريد الإلكتروني",
        emailValue: "contact@midotrix.com",
        global: "نخدم",
        globalValue: "المملكة العربية السعودية، الإمارات العربية المتحدة، ومنطقة الخليج بأكملها",
      },
      form: {
        fullName: "الاسم الكامل",
        fullNamePlaceholder: "أحمد محمد",
        workEmail: "البريد الإلكتروني",
        workEmailPlaceholder: "you@restaurant.com",
        message: "سؤالك",
        messagePlaceholder: "ماذا تريد أن تعرف؟",
        submit: "إرسال الرسالة",
        required: "يرجى ملء هذا الحقل.",
        invalidEmail: "يرجى إدخال بريد إلكتروني صحيح.",
        success: {
          title: "تم استلام رسالتك.",
          body: "شكرًا لتواصلك معنا — سنرد عليك مباشرة خلال يوم عمل واحد.",
        },
      },
      freeAnalysisPrompt: "أو انتقل مباشرة لمعرفة ماذا يكتشف ReconFlow في بياناتك —",
      freeAnalysisLink: "ابدأ تحليلك المجاني",
    },
    // Free Analysis Page
    freeAnalysis: {
      preTitle: "مجاني، بلا أي التزام",
      heading: "شاهد بالضبط كم يخسر مطعمك — مجانًا.",
      subheading: "أرسل لنا تصدير مبيعاتك وتقرير تسوية منصة التوصيل. سنقارنهما ونرسل لك النتيجة الحقيقية.",
      whatHappens: {
        heading: "ماذا يحدث بعد أن ترسل بياناتك",
        steps: [
          { title: "نراجع ملفاتك", body: "شخص حقيقي يتحقق أن بياناتك جاهزة للتحليل." },
          { title: "نُشغِّل مصالحتك", body: "ReconFlow يقارن بياناتك ويحدد كل فرق." },
          { title: "تحصل على نتيجتك الحقيقية", body: "نرسل لك ما اكتشفناه مباشرة، عادة خلال يومي عمل." },
        ],
      },
      form: {
        sectionQualification: "عن مطعمك",
        restaurantName: "اسم المطعم / السلسلة",
        restaurantNamePlaceholder: "اسم مطعمك",
        branchCount: "عدد الفروع",
        branchCountOptions: ["١", "٢–٥", "٦–١٥", "١٥+"],
        country: "الدولة",
        countryOptions: ["السعودية", "الإمارات العربية المتحدة", "دولة خليجية أخرى", "أخرى"],
        platforms: "منصات التوصيل التي تستخدمها",
        platformsOptions: ["هنقرستيشن", "جاهز", "ديليفرو", "أخرى"],
        posSystem: "نظام نقطة البيع",
        posSystemPlaceholder: "مثال: فوديكس، مرن، أخرى",
        currentProcess: "كيف تراجع تسوياتك اليوم؟",
        currentProcessOptions: ["يدويًا، طلبًا بطلب", "عبر محاسبنا", "لا نراجعها عن قرب", "أخرى"],
        sectionContact: "بيانات التواصل",
        email: "البريد الإلكتروني",
        emailPlaceholder: "you@restaurant.com",
        whatsapp: "رقم واتساب",
        whatsappPlaceholder: "+966 5X XXX XXXX",
        role: "دورك",
        roleOptions: ["المالك", "المدير المالي", "مدير العمليات", "أخرى"],
        sectionFiles: "بياناتك",
        posFile: "تصدير مبيعات نقطة البيع",
        posFileHint: "CSV أو XLSX أو XLS — حتى ٥٠ ميجابايت",
        platformFile: "تقرير تسوية المنصة",
        platformFileHint: "CSV أو XLSX أو XLS — حتى ٥٠ ميجابايت",
        noSecondFileYet: "ليس لديك هذا الملف جاهزًا بعد؟ أرسل ما لديك — يمكنك إكمال الباقي لاحقًا.",
        trustNote: "بياناتك تُستخدَم فقط لتحليل مطعمك أنت، ولا تُشارَك مع أي طرف آخر إطلاقًا.",
        submit: "أرسل بياناتي وابدأ تحليلي المجاني",
        submitting: "جارٍ الإرسال...",
        required: "يرجى ملء هذا الحقل.",
        invalidEmail: "يرجى إدخال بريد إلكتروني صحيح.",
        success: {
          title: "وصلتنا بياناتك بنجاح.",
          body: "نراجعها الآن. توقع نتيجة تحليلك الحقيقي عبر البريد الإلكتروني خلال يومي عمل.",
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
