export const site = {
	name: "bastienpo",
	author: "Bastien",
	description:
		"Bastien writes about building software and ships small tools when they earn a place on this page.",
	url: "https://bastienpo.com",
	email: "contact@bastienpo.com",
	location: "Paris, France",
	copyrightYear: 2026,
	nav: [
		{ href: "/#articles", label: "Articles" },
		{ href: "/#about", label: "About" },
		{ href: "/#projects", label: "Projects" },
	],
	socials: [
		{ label: "GitHub", href: "https://github.com/bastienpo" },
		{ label: "LinkedIn", href: "https://www.linkedin.com/in/bastienpo" },
		{ label: "X", href: "https://x.com/bastienpo" },
	],
} as const;

export const shellClass = "mx-auto w-full max-w-[800px] px-8";

export function formatDate(date: Date) {
	return date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});
}
