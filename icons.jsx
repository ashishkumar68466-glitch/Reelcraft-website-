import {
  Layers,
  Scissors,
  Type,
  Zap,
  Smartphone,
  Repeat,
  Clock,
  Video,
  Sparkles,
  Target,
  AlignLeft,
  Play,
  ChevronDown,
  Mail,
  Instagram,
  Youtube,
  Music2,
  Menu,
  X,
  Quote,
  Upload,
} from 'lucide-react'

// Central lookup so siteContent.js can reference icons by plain string
// keys instead of importing React components inside the data file.
export const iconMap = {
  layers: Layers,
  scissors: Scissors,
  type: Type,
  zap: Zap,
  smartphone: Smartphone,
  repeat: Repeat,
  clock: Clock,
  video: Video,
  sparkles: Sparkles,
  target: Target,
  'align-left': AlignLeft,
  play: Play,
  'chevron-down': ChevronDown,
  mail: Mail,
  instagram: Instagram,
  youtube: Youtube,
  music2: Music2,
  menu: Menu,
  x: X,
  quote: Quote,
  upload: Upload,
}

export function Icon({ name, className }) {
  const Cmp = iconMap[name]
  if (!Cmp) return null
  return <Cmp className={className} strokeWidth={1.75} />
}
