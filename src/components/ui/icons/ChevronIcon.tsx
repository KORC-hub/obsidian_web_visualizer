interface ChevronIconProps {
	open: boolean;
	className?: string;
}

export default function ChevronIcon({ open, className }: ChevronIconProps) {
	return (
		<svg aria-hidden="true" className={className} viewBox="0 0 16 16" fill="none">
			<path
				d={open ? "M4 6l4 4 4-4" : "M6 4l4 4-4 4"}
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
