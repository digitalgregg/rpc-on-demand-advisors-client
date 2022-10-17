export type PricingCardType = {
    id: string;
    name: string;
    description: string;
    monthPrice?: number;
    annualPrice?: number;
    featuresList: string[];
    planLimit?: object;
};

export const pricingCardData: PricingCardType[] = [
    {
        id: "MlGmlkmzUA",
        name: "Lite",
        description: "For productive solo sellers and marketers",
        monthPrice: 0,
        featuresList: [
            "Single user free",
            "1GB of Storage",
            "50 Assets",
            "Content management",
            "Buyer engagement tools",
            "Engagement analytics",
            "Engagement analytics",
            "Chrome Extension",
        ],
        planLimit: {
            userLimit: "1",
            storageLimit: "1GB",
            assetLimit: "50",
        },
    },
    {
        id: "wekQZeYvhL",
        name: "Basic",
        description: "For productive solo sellers and marketers",
        monthPrice: 15,
        annualPrice: 12,
        featuresList: [
            "Up to 100 users",
            "2GB of Storage",
            "100 Assets",
            "Easy Content upload & Import",
            "Sort & Categorize Content",
            "Internal & External Assets",
            "Advanced search",
            "Chrome Extension",
            "Analytics",
            "Content Wishlist",
            "Weekly Content Email Reports",
        ],
        planLimit: {
            userLimit: "100",
            storageLimit: "2GB",
            assetLimit: "100",
        },
    },
    {
        id: "OmxlAwoFSa",
        name: "Plus",
        description: "Custom plans to support the largest organizations.",
        featuresList: [
            "Custom User Quantity",
            "Custom Storage Amount",
            "Custom #Assets",
            "Everything in Team Plus:",
            "Single sin-on",
            "Fine-grained Access Control",
            "Advanced Analytics",
            "Integrations (Hubspot, Marketo, Salesforce)",
        ],
        planLimit: {
            userLimit: "1",
            storageLimit: "1GB",
            assetLimit: "50",
        },
    },
];

export type QuestionsDataType = {
    question: string;
    answer: string;
};

export const questionsData: QuestionsDataType[] = [
    {
        question: "Is there a setup fee?",
        answer: "No. Unlike some enterprise competitors, there are no setup fees on any of our plans.",
    },
    {
        question: "Do I need to enter payment details to sign up?",
        answer: "Nope. You can sign up and use Content Camel for 14 days without entering your payment details. At the end of your trial, or when you decide to go live with ODA Center, you will need to pick a plan and enter your payment details.",
    },
    {
        question: "How long does it take to get started?",
        answer: "Yes. If you ever decide that ODA Center isn’t the best platform for your business, simply cancel your account. We don’t lock you into annual or multi-year plans.",
    },
    {
        question: "How long does it take to get started?",
        answer: "Unlike other sales enablement tools, you’ll be up and running with ODA Center as fast as you are ready. While others may take 90+ days to get going (looking at you Showpad), our customers are typically rolling ODA Center out to their teams within the week!",
    },
    {
        question:
            "Can we get help migrating off of (Highspot, Showpad, Brainshark, Google Drive?",
        answer: "It’s easy to import content directly into ODA Center, and we’re happy to show you around to get you and your team going. If you need more help migrating off your existing solution, just give us a shout.",
    },
    {
        question: "Is the Solo plan really free?",
        answer: "Yes. Our free plan is designed for sellers operating solo or looking to outperform their colleagues within an organization that hasn’t fully rolled out sales enablement to everyone (yet). We love the hustlers and the go-getters out there.",
    },
    {
        question: "How long are your contracts?",
        answer: "All ODA Center plans are month to month unless you sign up for a discounted annual plan.",
    },
    {
        question: "Do you offer any discounted plans?",
        answer: "Yes, we offer a 15% discount on annual plans when they are paid upfront.",
    },

    {
        question: "Can I change my plan later on?",
        answer: "Absolutely! You can upgrade or downgrade your plan at any time.",
    },
];
