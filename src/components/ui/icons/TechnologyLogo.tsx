import { RiCodeSSlashLine, RiCloudLine } from "react-icons/ri";
import {
	SiGnubash,
	SiJavascript,
	SiJson,
	SiMarkdown,
	SiPython,
	SiSqlite,
	SiTypescript,
	SiYaml,
	SiApacheairflow,
	SiDatabricks,
	SiGithub,
	SiGit,
	SiKubernetes,
	SiLinux,
	SiMongodb,
	SiMysql,
	SiPostgresql,
	SiRedis,
	SiSnowflake,
	SiTerraform,
	SiDocker,
} from "react-icons/si";

type IconComponent = typeof SiTypescript;

interface TechnologyLogoProps {
	name: string;
	className?: string;
	fallback?: "code" | null;
}

const technologyIconMap: Array<{
	match: (value: string) => boolean;
	label: string;
	Icon: IconComponent;
}> = [
	{
		match: (value) => value === "typescript" || value === "ts" || value === "tsx",
		label: "TypeScript",
		Icon: SiTypescript,
	},
	{
		match: (value) => value === "javascript" || value === "js" || value === "jsx",
		label: "JavaScript",
		Icon: SiJavascript,
	},
	{ match: (value) => value === "python", label: "Python", Icon: SiPython },
	{
		match: (value) => value === "docker" || value === "container",
		label: "Docker",
		Icon: SiDocker,
	},
	{
		match: (value) => value === "kubernetes" || value === "k8s",
		label: "Kubernetes",
		Icon: SiKubernetes,
	},
	{
		match: (value) => value === "terraform" || value === "tf",
		label: "Terraform",
		Icon: SiTerraform,
	},
	{
		match: (value) =>
			value === "aws" || value === "amazonaws" || value === "amazon web services",
		label: "AWS",
		Icon: RiCloudLine,
	},
	{
		match: (value) => value === "mongodb" || value === "mongo",
		label: "MongoDB",
		Icon: SiMongodb,
	},
	{ match: (value) => value === "mysql", label: "MySQL", Icon: SiMysql },
	{
		match: (value) => value === "postgres" || value === "postgresql",
		label: "PostgreSQL",
		Icon: SiPostgresql,
	},
	{ match: (value) => value === "redis", label: "Redis", Icon: SiRedis },
	{ match: (value) => value === "airflow", label: "Airflow", Icon: SiApacheairflow },
	{ match: (value) => value === "databricks", label: "Databricks", Icon: SiDatabricks },
	{ match: (value) => value === "snowflake", label: "Snowflake", Icon: SiSnowflake },
	{ match: (value) => value === "git", label: "Git", Icon: SiGit },
	{ match: (value) => value === "github", label: "GitHub", Icon: SiGithub },
	{ match: (value) => value === "linux", label: "Linux", Icon: SiLinux },
	{
		match: (value) => value === "bash" || value === "gnubash" || value === "shell",
		label: "Bash",
		Icon: SiGnubash,
	},
	{ match: (value) => value === "yaml" || value === "yml", label: "YAML", Icon: SiYaml },
	{
		match: (value) => value === "markdown" || value === "md",
		label: "Markdown",
		Icon: SiMarkdown,
	},
	{ match: (value) => value === "json", label: "JSON", Icon: SiJson },
	{ match: (value) => value === "sql", label: "SQL", Icon: SiSqlite },
];

function normalizeTechnologyName(name: string): string {
	return name.trim().toLowerCase();
}

function resolveTechnology(name: string) {
	const normalized = normalizeTechnologyName(name);
	return technologyIconMap.find((entry) => entry.match(normalized));
}

export function hasTechnologyLogo(name: string): boolean {
	return Boolean(resolveTechnology(name));
}

export default function TechnologyLogo({ name, className, fallback = null }: TechnologyLogoProps) {
	const technology = resolveTechnology(name);

	if (!technology && fallback === null) {
		return null;
	}

	const Icon = technology?.Icon ?? RiCodeSSlashLine;
	const label = technology?.label ?? "Code";

	return (
		<span
			className={`inline-flex shrink-0 items-center justify-center text-slate-400 ${className ?? ""}`}
			aria-label={label}
			title={label}
		>
			<Icon aria-hidden="true" focusable="false" className="h-full w-full" />
		</span>
	);
}
