import TechnologyLogo from "../../ui/icons/TechnologyLogo"; // ajusta esta ruta a tu proyecto
import LanguageBadge from "../../ui/icons/LanguageBadge";
import { ChevronDownIcon } from "../../ui/icons/ReaderIcons";
import { FaCopy } from "react-icons/fa"; // ojo: minúsculas, "React-icons" con mayúscula rompía el import
import { getLanguageBadge } from "../../../hooks/useCodeBlock";

const iconButtonClass =
  "grid h-8 w-8 place-items-center rounded-md text-(--app-text-soft) transition hover:bg-(--sidebar-hover) hover:text-(--note-heading)";

interface CodeBlockHeaderProps {
  language: string;
  title: string | undefined;
  collapsed: boolean;
  onCopy: () => void;
  onToggleCollapse: () => void;
}

export default function CodeBlockHeader({
  language,
  title,
  collapsed,
  onCopy,
  onToggleCollapse,
}: CodeBlockHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-3 border-b border-(--code-border) bg-(--code-panel) px-4 py-2.5">
      <div className="flex min-w-0 items-center gap-2">
        <TechnologyLogo name={language} className="h-4 w-4 text-(--app-accent)" fallback="code" />
        <LanguageBadge label={getLanguageBadge(language)} />
        {title ? (
          <span className="rounded-md border border-(--code-inline-border) bg-(--code-inline-bg) px-2.5 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-(--app-accent)">
            {title}
          </span>
        ) : null}
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          className={iconButtonClass}
          onClick={onCopy}
          aria-label="Copiar bloque de código"
          title="Copiar"
        >
          <FaCopy className="h-4 w-4" />
        </button>
        <button
          type="button"
          className={iconButtonClass}
          onClick={onToggleCollapse}
          aria-label={collapsed ? "Expandir bloque" : "Colapsar bloque"}
          title={collapsed ? "Expandir" : "Colapsar"}
        >
          <ChevronDownIcon
            className={`h-4 w-4 transition-transform ${collapsed ? "-rotate-90" : ""}`}
          />
        </button>
      </div>
    </header>
  );
}
