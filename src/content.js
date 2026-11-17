// Single source of truth for all portfolio content

export const content = {
  // Personal Information
  name: "Okewunmi Awwal Oreoluwa",
  role: "AI Prompt Engineer",
  tagline: "I write prompts that make AI give clear, reliable, useful results.",
  
  // Contact
  email: "Awwaloreoluwa3@gmail.com",
  phone: "09152677511",
  phoneFormatted: "+2349152677511",
  whatsapp: [
    { number: "09152677511", formatted: "+2349152677511", message: "Hello! I found your portfolio and I'm interested in working with you on an AI prompt engineering project." },
    { number: "07070323287", formatted: "+2347070323287", message: "Hello! I found your portfolio and I'm interested in working with you on an AI prompt engineering project." }
  ],
  
  // Social Links (hide if empty)
  social: {
    linkedin: "", // Add your LinkedIn URL
    github: ""    // Add your GitHub URL
  },
  
  // About
  about: `I'm an AI prompt engineer who helps people and businesses get better results from AI tools. I design, test, and refine prompts until the output is accurate, consistent, and ready to use. I care about clear communication and clients who are happy with the final result.`,
  
  // Skills
  skills: [
    "Prompt design",
    "System prompts",
    "Role and persona prompting",
    "Chain-of-thought prompting",
    "Few-shot examples",
    "Prompt testing and refinement",
    "Content generation",
    "Chatbot instruction writing",
    "Workflow automation basics"
  ],
  
  // Tools
  tools: ["ChatGPT", "Claude", "Gemini"],
  
  // Websites
  websites: [
    {
      title: "VeLogo",
      url: "https://velogo.lovable.app",
      image: "/images/sites/velogo.png",
      description: "A restaurant delivery web app for ordering authentic Nigerian dishes delivered hot and fresh to your doorstep.",
      role: "Designed and built",
      tools: ["Lovable AI"]
    },
    {
      title: "ReflectAI",
      url: "https://nbiregister.lovable.app",
      image: "https://nbiregister.lovable.app/og-image.png",
      description: "AI-powered student companion that helps track attendance, share daily experiences, and receive personalized insights to achieve academic goals.",
      role: "Student tracking system",
      tools: ["Lovable AI"]
    }
  ],
  
  // Projects (SAMPLE data - replace with real work)
  projects: [
    {
      title: "Customer Support Chatbot Prompt",
      problem: "A business needed consistent, polite replies to common questions",
      approach: "Wrote a system prompt with tone rules, fallback behavior, and examples",
      result: "[Add real result - e.g., 'Reduced response time by 60% and improved customer satisfaction scores']",
      tools: ["Claude"],
      link: "" // Optional project link
    },
    {
      title: "Product Description Generator",
      problem: "Writing hundreds of descriptions by hand was slow",
      approach: "Built a reusable prompt template with a fixed structure and style guide",
      result: "[Add real result - e.g., 'Generated 500+ consistent product descriptions in 2 days']",
      tools: ["ChatGPT"],
      link: ""
    },
    {
      title: "Content Planning System",
      problem: "[Add problem description]",
      approach: "[Add approach description]",
      result: "[Add result description]",
      tools: ["[Add tool]"],
      link: ""
    }
  ],
  
  // Testimonials (empty for now - section hidden when empty)
  testimonials: [
    // Example structure:
    // {
    //   text: "Quote from client",
    //   name: "Client Name",
    //   title: "Position, Company"
    // }
  ],
  
  // How I Work - 5 step process
  workflow: [
    {
      step: 1,
      title: "Understand the goal",
      description: "I ask questions to learn what you need the AI to do and what success looks like."
    },
    {
      step: 2,
      title: "Draft",
      description: "I write the first version of the prompt using proven techniques and structure."
    },
    {
      step: 3,
      title: "Test",
      description: "I run the prompt multiple times with different inputs to check consistency and accuracy."
    },
    {
      step: 4,
      title: "Refine",
      description: "I adjust based on test results until the output meets your requirements."
    },
    {
      step: 5,
      title: "Deliver",
      description: "You get the final prompt with instructions and examples so you can use it confidently."
    }
  ],
  
  // Prompt Lab - Before/After Examples (2 comparisons)
  promptLab: [
    {
      id: 1,
      title: "E-commerce Product Description",
      weak: {
        prompt: "Write a product description for wireless headphones.",
        output: "These wireless headphones are great. They have good sound quality and are comfortable to wear. Battery life is long. Buy them now!"
      },
      improved: {
        prompt: `Write a product description for wireless headphones using this structure:

1. Opening hook (one compelling benefit)
2. Three key features with specific details
3. Use case scenario
4. Call to action

Tone: Professional but approachable
Length: 80-100 words
Avoid: Generic claims like "great" or "amazing"`,
        output: "Experience studio-quality sound wherever you go. These wireless headphones deliver 40mm dynamic drivers for deep bass and crystal-clear highs, active noise cancellation that blocks 95% of ambient noise, and 30-hour battery life on a single charge. Perfect for long flights, daily commutes, or focused work sessions where interruptions aren't an option. Includes carrying case and USB-C fast charging. Elevate your audio experience—order today."
      }
    },
    {
      id: 2,
      title: "Customer Support Response",
      weak: {
        prompt: "Reply to customer asking about refund policy.",
        output: "Hi, you can get a refund if you want. Just contact us. Thanks!"
      },
      improved: {
        prompt: `You are a helpful customer support agent. A customer is asking about the refund policy.

Your response must:
- Greet them warmly by name if available
- Clearly explain the 30-day refund policy
- List the 3 required steps to process a refund
- Provide the refund processing timeframe (5-7 business days)
- Offer to help with any questions
- Use a professional but friendly tone

Keep the response under 100 words.`,
        output: "Hello! I'm happy to help with your refund question. We offer a 30-day money-back guarantee on all purchases. To process your refund: (1) Reply to your order confirmation email with your order number, (2) Let us know the reason for the return, and (3) Ship the item back using the prepaid label we'll send you. Once we receive the item, your refund will be processed within 5-7 business days. Is there anything else I can help clarify?"
      }
    }
  ]
};
