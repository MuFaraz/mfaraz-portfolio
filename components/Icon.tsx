import {
  Bot,
  Gauge,
  Globe,
  LayoutDashboard,
  Layers,
  MessageSquare,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  UserCheck,
  type LucideProps,
} from "lucide-react";

// Icon names used in data/portfolio.ts (SERVICES, WHY_ME)
const ICONS = {
  globe: Globe,
  store: ShoppingBag,
  dashboard: LayoutDashboard,
  bot: Bot,
  trending: TrendingUp,
  gauge: Gauge,
  "user-check": UserCheck,
  message: MessageSquare,
  layers: Layers,
  sparkles: Sparkles,
};

export type IconName = keyof typeof ICONS;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = ICONS[name];
  return <Component strokeWidth={1.75} aria-hidden="true" {...props} />;
}
