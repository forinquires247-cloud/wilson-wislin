"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
const pathname = usePathname();
const [open, setOpen] = useState(false);

const links = [
{ href: "/services", label: "Services" },
{ href: "/pricing", label: "Pricing" },
{ href: "/faq", label: "FAQ" },
{ href: "/contact", label: "Contact" },
];

const isActive = (href: string) => pathname === href;

// Close the mobile menu whenever route changes
useEffect(() => {
setOpen(false);
}, [pathname]);

return (
<header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
{/* Logo */}
<Link href="/" className="flex items-center gap-2">
<div className="h-9 w-9 rounded-xl bg-gray-900" />
<div className="leading-tight">
<div className="text-sm font-semibold text-gray-900">Wilson &amp; Wislin</div>
<div className="text-xs text-gray-500">Credit Law</div>
</div>
</Link>

{/* Desktop nav */}
<nav className="hidden items-center gap-6 md:flex">
{links.map((l) => (
<Link
key={l.href}
href={l.href}
className={
"text-sm font-medium transition " +
(isActive(l.href)
? "text-gray-900 underline underline-offset-8"
: "text-gray-600 hover:text-gray-900")
}
>
{l.label}
</Link>
))}
</nav>

{/* Desktop buttons */}
<div className="hidden items-center gap-2 md:flex">
<Link
href="/login"
className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
>
Client Login
</Link>
<Link
href="/pricing"
className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
>
Get Started
</Link>
</div>

{/* Mobile hamburger */}
<button
type="button"
className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
aria-label="Open menu"
aria-expanded={open}
onClick={() => setOpen((v) => !v)}
>
{open ? "Close" : "Menu"}
</button>
</div>

{/* Mobile dropdown */}
{open && (
<div className="border-t border-gray-200 bg-white md:hidden">
<div className="mx-auto max-w-6xl px-4 py-3">
<div className="flex flex-col gap-2">
{links.map((l) => (
<Link
key={l.href}
href={l.href}
className={
"rounded-lg px-3 py-2 text-sm font-medium transition " +
(isActive(l.href)
? "bg-gray-100 text-gray-900"
: "text-gray-700 hover:bg-gray-50 hover:text-gray-900")
}
>
{l.label}
</Link>
))}
</div>

<div className="mt-3 flex gap-2">
<Link
href="/login"
className="flex-1 rounded-xl border border-gray-300 px-4 py-2 text-center text-sm font-semibold text-gray-900 hover:bg-gray-50"
>
Client Login
</Link>
<Link
href="/pricing"
className="flex-1 rounded-xl bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-black"
>
Get Started
</Link>
</div>
</div>
</div>
)}
</header>
);
}
