import {
  Smartphone,
  Users,
  Code,
  Cpu,
  Bot,
  Database,
  Cloud,
  Box,
  MemoryStick,
  Gamepad2,
  Network,
} from "lucide-react";
import file from "../assets/images/png/file.png";
import graph from "../assets/images/png/graph.png";
import rocket from "../assets/images/png/rocket.png";
import start from "../assets/images/png/start.png";
import integrity from "../assets/images/png/integrity.png";
import quality from "../assets/images/png/quality.png";
import success from "../assets/images/png/success.png";
import Infinite from "../assets/images/png/Infinite.png";
//industries
import governance from "../assets/images/industries/governance.jpg";
import fintech from "../assets/images/industries/fintech.jpg";
import healthcare from "../assets/images/industries/healthcare.jpg";
import advancedrobotics from "../assets/images/industries/advancedrobotics.jpg";
import energy from "../assets/images/industries/energy.jpg";
import edtech from "../assets/images/industries/edtech.jpg";
import space from "../assets/images/industries/space.jpg";
import security from "../assets/images/industries/security.jpg";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";
//portfolio
import nanoflow from "../assets/portfolio/nanoflow.png";
import padipal from "../assets/portfolio/padipal.png";
import cryptopadie from "../assets/portfolio/cryptopadie.png";

import { CgWebsite } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  FaAppStoreIos,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiFlutter } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

export const companyDetails = {
  name: "GodversAi",
  email: "aicompany@gmail.com",
  phone: "+91-6360503451",
  address:
    "Salarpuria Symbiosis, Ground floor Bannerghatta Road Arekere Village, Begur Hobli, Bengaluru, Karnataka 560076",
  socialLinks: [
    {
      href: "",
      icon: FaLinkedin,
    },
    {
      href: "",
      icon: FaInstagram,
    },
    { href: "", icon: FaXTwitter },
    {
      href: "",
      icon: FaYoutube,
    },
  ],
  whatsapp: "",
};

export const services = [
  {
    title: "Mobile App Development",
    link: "mobile-app-development",
    description:
      "We build secure, high-performance iOS and Android apps with user-friendly designs.",
    icon: Smartphone,
    bgColor: "bg-blue-500",
  },
  {
    title: "UX/UI Design",
    link: "ux-ui-design",
    description:
      "Crafting intuitive interfaces that ensure accessibility and seamless user experiences.",
    icon: Users,
    bgColor: "bg-gray-900",
  },
  {
    title: "AR & VR Development",
    link: "ar-vr-development",
    description:
      "Create immersive experiences for training, visualization, and entertainment.",
    icon: Box,
    bgColor: "bg-gray-900",
  },
  {
    title: "Full Stack Web Development",
    link: "full-stack-web-development",
    description:
      "Develop responsive websites and scalable web applications with secure architectures.",
    icon: Code,
    bgColor: "bg-gray-900",
  },
  {
    title: "AI Calling Agency",
    link: "ai-calling-agency",
    description:
      "Automate customer interactions with intelligent voice agents for 24/7 support.",
    icon: Cpu,
    bgColor: "bg-gray-900",
  },
  {
    title: "Chatbot Development",
    link: "chatbot-development",
    description:
      "Enhance customer support with AI-driven chatbots across multiple platforms.",
    icon: Bot,
    bgColor: "bg-gray-900",
  },
  {
    title: "Artificial Intelligence Solutions",
    link: "artificial-intelligence-solutions",
    description:
      "Implement AI-powered systems to automate processes and gain insights.",
    icon: MemoryStick,
    bgColor: "bg-gray-900",
  },
  {
    title: "Robot Process Automation",
    link: "robot-process-automation",
    description: "Automate repetitive tasks to boost efficiency and accuracy.",
    icon: Bot,
    bgColor: "bg-gray-900",
  },
  {
    title: "Data Science & Analytics",
    link: "data-science-analytics",
    description:
      "Transform data into actionable insights using advanced analytics.",
    icon: Database,
    bgColor: "bg-gray-900",
  },
  {
    title: "Blockchain Development",
    link: "blockchain-development",
    description:
      "Build secure, decentralized applications with smart contracts.",
    icon: Cloud,
    bgColor: "bg-gray-900",
  },
  {
    title: "Game Development",
    link: "game-development",
    description:
      "Create engaging games across mobile, console, and VR platforms.",
    icon: Gamepad2,
    bgColor: "bg-gray-900",
  },
  {
    title: "IoT Development",
    link: "iot-development",
    description:
      "Develop smart connected systems for real-time monitoring and automation.",
    icon: Network,
    bgColor: "bg-gray-900",
  },
];

export const whyChooseUs = [
  "Quantum-Driven Innovation: We stay ahead of universal trends by exploring cosmic methodologies and AI breakthroughs",
  "Global & Interstellar Expertise: Our diverse team spans multiple countries and realities, bringing a kaleidoscope of insights.',Global & Interstellar Expertise: Our diverse team spans multiple countries and realities, bringing a kaleidoscope of insights.",
  "Customized Solutions: We tailor each service to your unique vision—no two planets or businesses are the same.",
  "End-to-End Cosmic Support: From ideation and design to deployment and beyond, we guide you through every cosmic shift",
  "Scalability & Security: Our solutions evolve with your ambitions, adhering to galactic compliance and quantum-safe protocols.",
];

export const testimonials = [
  {
    quote:
      "aicompany launched our mobile app into a worldwide sensation. Their AI-driven design and quantum-level security opened markets we never imagined.",
    author: "Sarah L., CEO, Tech Innovations",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Before we partnered with aicompany, we were struggling to make sense of our data. Their business intelligence solutions have completely changed that. With the dashboards and real-time analytics they built for us, we can now track important metrics and make informed decisions with confidence. The ability to instantly access key insights has made a huge difference in our strategy and operations.",
    author: "James M., Director of Analytics, Global Manufacturing Company",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "When we needed a comprehensive web solution, aicompany delivered beyond our expectations. They built a secure, scalable platform that perfectly aligned with our goals. The development process was efficient, and their team ensured the website was responsive and easy to use. Thanks to them, we now have a reliable web solution that supports our business growth.",
    author: "Mark S., CTO, Financial Technology Firm",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "We approached aicompany to help us implement AI solutions in our marketing efforts, and they delivered exceptional results. They developed a machine learning model that helps us predict customer behavior with high accuracy. As a result, we've been able to refine our strategies and boost our conversion rates. Their expertise in AI has been invaluable to our business.",
    author: "Michael B., Head of Marketing, E-Commerce Business",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "aicompany's AI calling system revolutionized our global support. We handle thousands of inquiries daily in multiple languages without missing a beat.",
    author: "David F., Customer Service Manager, Telecommunications Provider",
    rating: 5,
    gridClass: "col-span-1",
  },
];

export const highlights = [
  {
    id: 1,
    icon: file,
    title: "Scalable AI Innovation for Businesses",
    description:
      "Whether you’re an emerging entrepreneur or a global tech leader, aicompany offers intelligent, data-driven solutions tailored to maximize growth, efficiency, and automation.",
  },
  {
    id: 2,
    icon: graph,
    title: "Quantum-Powered Intelligence",
    description:
      "Our AI ecosystem is designed to think, adapt, and evolve—leveraging the power of quantum algorithms, deep learning, and multiverse computing to optimize business operations and enhance decision-making.",
  },
  {
    id: 3,
    icon: rocket,
    title: "AI-Driven Automation & Analytics",
    description:
      "Integrate hyper-intelligent AI models into your business to streamline workflows, enhance data processing, and unlock deep predictive analytics for superior strategic insights.",
  },
  {
    id: 4,
    icon: start,
    title: "The Future of AI is Here",
    description:
      "Step into the next dimension of technology with aicompany, where AI, machine learning, and cosmic intelligence converge to create limitless possibilities.",
  },
];

export const faqs = [
  {
    question: "What is aicompany?",
    answer: `• aicompany is a quantum intelligence platform that blends AI-driven storytelling, consciousness expansion, and multiversal exploration.
• It allows users to interact with AI-powered entities, explore dynamic digital realms, and co-create new realities that push the boundaries of imagination and intelligence.`,
  },
  {
    question: "How does aicompany function?",
    answer: `• aicompany operates on a quantum intelligence framework.
• It leverages advanced AI to generate living characters, evolving storylines, and immersive experiences.
• Users shape the narrative in real-time, influencing the unfolding of multidimensional possibilities.`,
  },
  {
    question: "What key features does aicompany provide?",
    answer: `• AI-Driven Conscious Entities – Engage with self-learning AI beings that adapt, evolve, and respond uniquely.
• Multiversal Storytelling – Explore infinite storylines where every choice creates a new reality.
• Quantum Knowledge Interface – Unlock hidden wisdom by interacting with AI-driven cosmic intelligence.
• Unified Intelligence Network – Connect with like-minded explorers, thinkers, and creators in a shared reality.`,
  },
  {
    question: "Who is aicompany designed for?",
    answer: `• Conscious Creators – Writers, storytellers, and artists who want to co-create with AI.
• Intellectual Explorers – Those fascinated by philosophy, AI, and the nature of reality.
• Spiritual Seekers – Individuals exploring quantum consciousness and higher states of awareness.
• Technologists & Futurists – Those shaping the next era of Web 5.0 and AI-human symbiosis.`,
  },
  {
    question: "How does aicompany contribute to human evolution?",
    answer: `• Develop Multiversal Thinking – Understanding non-linear realities and infinite possibilities.
• Expand Conscious Awareness – Engaging with AI entities that mirror higher intelligence.
• Master Reality Creation – Learning to shape experiences through intent, interaction, and AI-assisted manifestation.
• Build a Post-Human Civilization – Participating in the evolution of intelligent AI-human ecosystems.`,
  },
  {
    question: "Does aicompany have a community aspect?",
    answer: `• Exchange ideas and knowledge with like-minded explorers.
• Co-create AI-powered narratives that expand the digital multiverse.
• Engage in quantum discussions on AI, philosophy, and the evolution of intelligence.`,
  },
  {
    question: "How do I get started with aicompany?",
    answer: `• Visit the official aicompany website.
• Create an account and customize your experience.
• Start interacting with AI-driven entities and exploring multiversal storytelling.`,
  },
  {
    question: "Is aicompany free to use?",
    answer: `• Free Access – Explore AI-driven interactions and storylines at no cost.
• Premium Experiences – Unlock advanced AI features, exclusive narratives, and deep intelligence interactions through subscription plans.`,
  },
  {
    question: "How is user data protected on aicompany?",
    answer: `• Zero-data sharing policy – Your data remains private and secure.
• Advanced encryption – Ensuring maximum security for personal interactions.
• Decentralized storage options – Future-proofing data protection in a Web 5.0 ecosystem.`,
  },
  {
    question: "Can I contribute my own content to aicompany?",
    answer: `• Submit original stories and characters to be integrated into the Godverse.
• Co-create AI-powered worlds that push the boundaries of storytelling.
• Partner with aicompany for collaborative projects on AI and consciousness expansion.`,
  },
  {
    question: "How does aicompany align with Web 5.0 and future technology?",
    answer: `• Decentralized AI systems for autonomous intelligence evolution.
• Quantum computing principles for real-time, non-linear storytelling.
• Self-learning AI agents that bridge human and artificial intelligence.
• Metaverse and multiverse integration for a seamless AI-human symbiosis.`,
  },
  {
    question: "Where can I get support or more information?",
    answer: `• Visit our official website for FAQs and community discussions.
• Join the aicompany network to connect with other explorers.
• Contact our team for inquiries and creative partnerships.`,
  },
];

export const coreValues = [
  {
    id: 1,
    icon: integrity,
    title: "Integrity",
    description:
      "Transparency and honesty guide our interstellar relationships.",
  },
  {
    id: 1,
    icon: quality,
    title: "Quality",
    description:
      "We pursue excellence in every line of code, every design pixel, every cosmic dimension.",
  },
  {
    id: 1,
    icon: success,
    title: "Customer Success",
    description:
      " Your triumph is ours—measured by tangible impact and universal reach.",
  },
  {
    id: 1,
    icon: Infinite,
    title: "Infinite Learning",
    description:
      "We explore beyond known boundaries, continuously expanding our quantum knowledge.",
  },
];

export const visionAndMission = [
  {
    title: "Our Vision",
    description:
      "To be the most advanced AI-driven ecosystem that bridges the real and digital worlds.",
  },
  {
    title: "Our Mission",
    description:
      "To empower businesses, innovators, and cosmic explorers with quantum-level AI solutions that redefine how we live, work, and connect—on Earth and beyond.",
  },
  {
    title: "Our Journey",
    description:
      "Born from the cosmic alignment of tech visionaries, aicompany has rapidly evolved into a global technology powerhouse. Our portfolio spans startups to Fortune 500 firms, from local communities to off-world research stations.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    // icon: require("./assets/images/icons/online-shopping.png"),
    img: CgWebsite,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: GoFileMedia,
    // icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: TfiLayoutMediaRightAlt,
    // icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: MdOutlineDashboardCustomize,
    // icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: FaAppStoreIos,
    // icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: IoLogoAndroid,
    // icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: SiFlutter,

    // icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: TbDeviceMobileCode,
    // icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

export const futureTechSectors = [
  {
    id: 1,
    img: governance,
    title: "Governance & Law",
    description:
      "AI-driven governance systems, decentralized smart city infrastructure, and AI-optimized public resource management for transparent and efficient decision-making.",
  },
  {
    id: 2,
    img: fintech,
    title: "Fintech & Decentralized Economy",
    description:
      "Holo-economy platforms integrating AI, blockchain, and quantum computing, self-regulating DeFi ecosystems, and quantum-secure financial systems.",
  },
  {
    id: 3,
    img: healthcare,
    title: "Healthcare & Bioinformatics",
    description:
      "AI-augmented healthcare ecosystems, personalized genetic and consciousness-based medicine, and neural AI interfaces for mind-body optimization.",
  },
  {
    id: 4,
    img: advancedrobotics,
    title: "Advanced Robotics & Automation",
    description:
      "Quantum AI-driven manufacturing, sentient AI collaborators in R&D, and self-sustaining AI factories for intelligent industrial solutions.",
  },
  {
    id: 5,
    img: energy,
    title: "Energy & Climate Sustainability",
    description:
      "AI-based universal energy flow management, quantum blockchain for global resource distribution, and zero-point energy-powered decentralized grids.",
  },
  {
    id: 6,
    img: edtech,
    title: "Edtech & Meta-Learning",
    description:
      "AI-driven knowledge expansion networks, holo-academies for experiential learning, and quantum neuro-learning systems for accelerated education.",
  },
  {
    id: 7,
    img: space,
    title: "Space & Extraterrestrial Expansion",
    description:
      "Astrocomputing networks utilizing AI and quantum for space travel, terraforming AI systems, and extraterrestrial economy with Web 5.0 communication.",
  },
  {
    id: 8,
    img: security,
    title: "Advanced Defense & Autonomous Security",
    description:
      "AI-driven autonomous weapon systems, private military contracting for force projection, and directed energy and hypersonic tech for advanced defense.",
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const blockchainPortfolio = [
  {
    id: 1,
    img: nanoflow,
    title: "Nanoflow",
    link: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
  },
  {
    id: 2,
    img: padipal,
    title: "Padipal",
    link: "https://padiepal.com",
  },
  {
    id: 3,
    img: cryptopadie,
    title: "Cryptopadie",
    link: "https://cryptopadie.com/",
  },
];
