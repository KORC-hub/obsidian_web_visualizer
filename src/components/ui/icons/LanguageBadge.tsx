interface LanguageBadgeProps {
	label: string;
}

export default function LanguageBadge({ label }: LanguageBadgeProps) {
	return (
		<span className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sky-300">
			{label}
		</span>
	);
}
