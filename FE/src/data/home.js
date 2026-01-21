import {
  LayoutGrid,
  Bell,
  Shield,
  Users,
  Activity,
  Pill,
  UserCheck,
  UserPlus,
  ShieldCheck,
  Briefcase,
  Heart,
  Award,
  Home,
  CheckCircle2,
  BarChart3
} from "lucide-react";


//FeatureSection------------------------------------------------------------------------------
export const features = [
  {
    icon: LayoutGrid,
    title: "Real-time Health Dashboard",
    description: "Get instant access to vitals, mood tracking, and care reports right from your smartphone.",
    highlight: true,
    colSpan: "md:col-span-2",
  },
  {
    icon: Bell,
    title: "Smart Emergency Alerts",
    description: "Our proprietary AI detects deviations in normal routines and alerts emergency services instantly.",
    highlight: false,
    colSpan: "md:col-span-1",
  },
  {
    icon: Shield,
    title: "Verified Professionalism",
    description: "Every caregiver undergoes a rigorous 5-step background check and professional certification.",
    highlight: false,
    colSpan: "md:col-span-1",
  },
  {
    icon: Users,
    title: "Multi-Family Access",
    description: "Multiple family members can stay connected through the dashboard, ensuring everyone is on the same page.",
    highlight: false,
    colSpan: "md:col-span-2",
  },
];

//HeroSection---------------------------------------------------------------------------------
export const heroImages = [
  "/images/herosection.jpeg",
  "/images/herosection1.jpg",
  "/images/herosection2.jpg",
];


//PricingSection------------------------------------------------------------------------------
export const pricing = [
  {
    icon: LayoutGrid,
    title: "Real-time Health Dashboard",
    description: "Get instant access to vitals, mood tracking, and care reports right from your smartphone.",
    highlight: true,
    colSpan: "md:col-span-2",
  },
  {
    icon: Bell,
    title: "Smart Emergency Alerts",
    description: "Our proprietary AI detects deviations in normal routines and alerts emergency services instantly.",
    highlight: false,
    colSpan: "md:col-span-1",
  },
  {
    icon: Shield,
    title: "Verified Professionalism",
    description: "Every caregiver undergoes a rigorous 5-step background check and professional certification.",
    highlight: false,
    colSpan: "md:col-span-1",
  },
  {
    icon: Users,
    title: "Multi-Family Access",
    description: "Multiple family members can stay connected through the dashboard, ensuring everyone is on the same page.",
    highlight: false,
    colSpan: "md:col-span-2",
  },
];


//ProcessSection----------------------------------------------------------------------------------
export const steps = [
  {
    number: "1",
    title: "Request Care",
    description: "Submit your specific needs and medical history through our secure portal.",
  },
  {
    number: "2",
    title: "Get Matched",
    description: "Meet your hand-picked caregiver who matches your personal and medical criteria.",
  },
  {
    number: "3",
    title: "Monitor Live",
    description: "Track daily logs, vitals, and activities through our family dashboard 24/7.",
  },
];


//ServiceSection----------------------------------------------------------------------------------
export const serviceSection = [
  {
    icon: Activity,
    title: "Daily Monitoring",
    description: "Constant peace of mind with 24/7 health tracking. Our system alerts families instantly to any irregularities.",
  },
  {
    icon: Pill,
    title: "Medicine Reminders",
    description: "Never miss a dose with automated safety alerts and verified administration tracking by our certified caregivers.",
  },
  {
    icon: UserCheck,
    title: "Mobility Support",
    description: "Professional physical assistance to help maintain independence and prevent falls in a comfortable home environment.",
  },
];

//How it work page------------------------------------------------------------------------------------------
export const roleContent = {
  families: {
    steps: [
      {
        icon: UserPlus,
        title: "1. Create Profile & Request",
        description: "Sign up and tell us about your loved one's specific needs. Whether it's daily assistance, medical monitoring, or companionship, our detailed intake form helps us find the right fit."
      },
      {
        icon: ShieldCheck,
        title: "2. Admin Verification & Matching",
        description: "Our expert administrators review your request and match you with a certified caregiver. Every caregiver on our platform undergoes a rigorous background check and skills assessment."
      },
      {
        icon: Activity,
        title: "3. Real-Time Care & Logs",
        description: "Once care begins, the caregiver logs health vitals, medication adherence, and daily activities in real-time. You can access these updates instantly from your dashboard."
      }
    ]
  },
  admins: {
    steps: [
      {
        icon: Users,
        title: "1. Manage & Verify",
        description: "Review caregiver credentials, run background checks, and maintain a database of verified professionals ready to serve families in need."
      },
      {
        icon: Briefcase,
        title: "2. Match & Assign",
        description: "Use our intelligent matching system to pair families with the most suitable caregivers based on needs, skills, location, and availability."
      },
      {
        icon: Activity,
        title: "3. Monitor & Report",
        description: "Track all care logs, monitor patient health metrics, generate reports, and ensure quality standards are maintained across all services."
      }
    ]
  },
  caregivers: {
    steps: [
      {
        icon: Briefcase,
        title: "1. Create Profile & Request",
        description: "Create your caregiver profile with your certifications, experience, specializations, and availability. Upload necessary documents for verification."
      },
      {
        icon: ShieldCheck,
        title: "2. Get Verified & Matched",
        description: "Our admin team reviews your credentials and verifies your background. Once approved, you'll start receiving care assignments that match your skills."
      },
      {
        icon: Activity,
        title: "3. Provide Care & Log Activities",
        description: "Deliver compassionate care to your assigned patients. Use our mobile app to log vitals, medications, activities, and any observations in real-time."
      }
    ]
  }
};


export const roles = [
    { id: "families", label: "For Families", icon: Home },
    { id: "admins", label: "For Admins", icon: BarChart3 },
    { id: "caregivers", label: "For Caregivers", icon: Heart }
  ];


//Pricing Page ------------------------------------------------------------------------------------------
export const plans = [
  {
    name: "BASIC",
    price: "$50",
    period: "/ day",
    description: "Essential support for daily independent living.",
    buttonText: "Choose Basic",
    buttonVariant: "outline",
    features: [
      "Daily Home visits",
      "Vitals monitoring",
      "Weekly status reports",
      "Standard email support"
    ],
    popular: false
  },
  {
    name: "PROFESSIONAL",
    price: "$150",
    period: "/ day",
    description: "Comprehensive care for peace of mind 24/7.",
    buttonText: "Get Started",
    buttonVariant: "default",
    features: [
      "24/7 Priority support",
      "Advanced medical monitoring",
      "Medication management",
      "Dedicated care manager",
      "Nutrition & Meal planning"
    ],
    popular: true
  },
  {
    name: "POST-HOSPITAL",
    price: "Custom",
    period: "",
    description: "Recovery plans tailored to doctor orders.",
    buttonText: "Get a Quote",
    buttonVariant: "outline",
    features: [
      "Tailored doctor protocols",
      "Specialized rehab equipment",
      "Post-surgical coordination",
      "Physical therapy integration"
    ],
    popular: false
  }
];

export const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "We work with most long-term care insurance providers and can help you navigate the claims process. We also accept private pay and can coordinate with Medicare for specific post-hospital recovery services."
  },
  {
    question: "How are caregivers vetted?",
    answer: "Every caregiver undergoes a rigorous 5-step background check, skills assessment, and professional certification verification. We also conduct regular performance reviews and ongoing training."
  },
  {
    question: "Can I change plans later?",
    answer: "Absolutely! You can upgrade, downgrade, or customize your care plan at any time. We understand that care needs evolve, and we're flexible to accommodate those changes."
  },
  {
    question: "Is there a long-term commitment?",
    answer: "No long-term commitment required. Our services are available on a day-to-day basis, though we do offer discounts for longer-term arrangements."
  }
];


//Service page ------------------------------------------------------------------------------------------
export const services = [
  {
    icon: Activity,
    image: "/images/service1.webp",
    title: "Daily Health Monitoring",
    description:
      "Routine check-ins and vitals tracking to ensure daily wellness. Our caregivers are trained to identify early warning signs and maintain detailed health logs.",
    tag: "DAILY SERVICE",
    tagColor: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    image: "/images/service2.webp",
    title: "Specialized Post-Op Care",
    description:
      "Professional rehabilitation and clinical wound care for a smooth recovery at home. We coordinate closely with your surgical team for optimal outcomes.",
    tag: "CLINICAL",
    tagColor: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Users,
    image: "/images/service3.webp",
    title: "Elderly Companionship",
    description:
      "Social interaction and mental health support for a fulfilling life. We provide engaging activities, conversation, and emotional support to combat isolation.",
    tag: "WELLNESS",
    tagColor: "bg-orange-100 text-orange-600",
  },
  {
    icon: Award,
    image: "/images/service4.webp",
    title: "Medication Management",
    description:
      "Safe scheduling and administration for absolute peace of mind. We ensure medications are taken on time, every time, reducing risks of error.",
    tag: "SAFETY",
    tagColor: "bg-green-100 text-green-600",
  },
];


export const stats = [
  { icon: Heart, label: "Happy Families", value: "500+" },
  { icon: Award, label: "Certified Caregivers", value: "120+" },
  { icon: Users, label: "Years of Excellence", value: "15+" }
];