interface FileIconProps {
	className?: string;
}

export default function FileIcon({ className }: FileIconProps) {
	return (
		<svg aria-hidden="true" className={className} viewBox="0 0 16 16" fill="none">
			<path d="M4 1.75h5.5L12.5 4.75V14.25H4z" stroke="currentColor" strokeWidth="1.25" />
			<path d="M9.5 1.75v3h3" stroke="currentColor" strokeWidth="1.25" />
		</svg>
	);
}
