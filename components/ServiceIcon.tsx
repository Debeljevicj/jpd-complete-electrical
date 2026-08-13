import {
    AlertCircle,
    Gauge,
    Zap,
    Lightbulb,
    Sparkles,
    ChefHat,
    Hammer,
    HardHat,
    ShieldCheck,
    BellRing,
    Fan,
    Plug,
    Thermometer,
    Tag,
    type LucideIcon,
} from 'lucide-react';

/** Icon keys usable from the service data module. */
export const serviceIcons = {
    emergency: AlertCircle,
    switchboard: Gauge,
    ev: Zap,
    downlight: Lightbulb,
    feature: Sparkles,
    oven: ChefHat,
    renovation: Hammer,
    builder: HardHat,
    rcd: ShieldCheck,
    smoke: BellRing,
    fan: Fan,
    powerpoint: Plug,
    thermal: Thermometer,
    testtag: Tag,
} as const;

export type ServiceIconName = keyof typeof serviceIcons;

export default function ServiceIcon({ name, className }: { name: ServiceIconName; className?: string }) {
    const Icon: LucideIcon = serviceIcons[name];
    return <Icon className={className} />;
}
