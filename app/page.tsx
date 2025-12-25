export default function Home() {
return (
<main style={{ padding: "48px 24px" }}>
<div style={{ maxWidth: 900, margin: "0 auto" }}>
<h1 style={{ fontSize: 44, lineHeight: 1.1, marginBottom: 12 }}>
Wilson & Wislin Credit Law
</h1>
<p style={{ fontSize: 18, color: "#4b5563", marginBottom: 28 }}>
Modern credit repair & consumer advocacy for Florida residents.
</p>

<div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
<a
href="/pricing"
style={{
background: "#111827",
color: "white",
padding: "12px 18px",
borderRadius: 12,
textDecoration: "none",
fontSize: 14,
fontWeight: 600,
}}
>
Get Started
</a>

<a
href="/login"
style={{
border: "1px solid #d1d5db",
padding: "12px 18px",
borderRadius: 12,
textDecoration: "none",
fontSize: 14,
fontWeight: 600,
color: "#111827",
background: "white",
}}
>
Client Login
</a>
</div>
</div>
</main>
);
}