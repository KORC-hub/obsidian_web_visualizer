interface FolderIconProps {
	className?: string;
}

export default function FolderIcon({ className }: FolderIconProps) {
	return (
		<svg aria-hidden="true" className={className} viewBox="0 0 16 16" fill="none">
			<path
				d="M1.75 4.5h4.2l1.1 1.25h7.2v6.75a1 1 0 0 1-1 1H2.75a1 1 0 0 1-1-1z"
				stroke="currentColor"
				strokeWidth="1.25"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
