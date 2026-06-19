export interface Plan {
  slug: string;
  name: string;
  tagline: string;
  price: number; // CFA per month (0 = free)
  highlight?: boolean;
  badge?: string;
  cta: string;
  href: string;
  features: string[];
}

export const PLANS: Plan[] = [
  {
    slug: "starter",
    name: "Starter",
    tagline: "Try IELTS prep at no cost",
    price: 0,
    cta: "Start for free",
    href: "/register?plan=starter",
    features: [
      "1 skill module (Listening)",
      "5 practice exercises / month",
      "Community forum access",
      "Basic progress tracking",
      "Mobile & desktop access",
    ],
  },
  {
    slug: "essential",
    name: "Essential",
    tagline: "Build a solid foundation",
    price: 10000,
    cta: "Choose Essential",
    href: "/register?plan=essential",
    features: [
      "All 4 skills (Listening, Reading, Writing, Speaking)",
      "Unlimited practice exercises",
      "Weekly group lessons",
      "Detailed progress tracking",
      "Downloadable study materials",
      "Email support",
    ],
  },
  {
    slug: "pro",
    name: "Pro",
    tagline: "Most popular for serious learners",
    price: 30000,
    highlight: true,
    badge: "Most popular",
    cta: "Choose Pro",
    href: "/register?plan=pro",
    features: [
      "Everything in Essential",
      "2 live tutor sessions / week",
      "Personalised feedback on Writing & Speaking",
      "Full-length mock exams",
      "Band score prediction",
      "Priority support",
    ],
  },
  {
    slug: "premium",
    name: "Premium",
    tagline: "Maximum support & 1-on-1 coaching",
    price: 50000,
    cta: "Choose Premium",
    href: "/register?plan=premium",
    features: [
      "Everything in Pro",
      "Daily 1-on-1 coaching",
      "Unlimited mock exams + reviews",
      "Custom study plan",
      "Guaranteed band score support",
      "24/7 priority support",
    ],
  },
];

export function formatPrice(price: number) {
  return price.toLocaleString("fr-FR");
}
