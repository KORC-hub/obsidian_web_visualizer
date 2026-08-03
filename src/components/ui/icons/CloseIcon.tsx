interface CloseIconProps {
	className?: string;
}

export default function CloseIcon({ className }: CloseIconProps) {
	return (
		<svg aria-hidden="true" className={className} viewBox="0 0 16 16" fill="none">
			<path
				d="M4 4l8 8M12 4l-8 8"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}
