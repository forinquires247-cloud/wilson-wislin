export default function Footer() {
return (
<footer className="border-t border-gray-200 bg-white">
<div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600">
<div className="flex flex-col gap-2">
<p className="font-medium text-gray-900">
Wilson & Wislin Credit Law
</p>

<p>Serving Florida clients. Secure client portal available.</p>

<p className="mt-4 text-xs text-gray-500">
Disclaimer: Information on this website is for general informational
purposes only and does not constitute legal advice. Results are not
guaranteed; outcomes vary by individual circumstances.
</p>

<p className="mt-2 text-xs text-gray-500">
© {new Date().getFullYear()} Wilson & Wislin Credit Law
</p>
</div>
</div>
</footer>
);
}
