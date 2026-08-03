import { LuPin } from "react-icons/lu";

interface PinIconProps {
  pinned: boolean;
  className?: string;
}

export default function PinIcon({ pinned, className }: PinIconProps) {
  return <LuPin className={className} />;
}
