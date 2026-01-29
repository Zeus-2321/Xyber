export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 140,
        padding: "48px 20px 32px",
        borderTop: "1px solid #1C1C22",
        background: "linear-gradient(to top, #0B0B0D, transparent)",
        textAlign: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 28,
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: 16
        }}
      >
        <FooterLink href="https://x.com/Xyberinc">X (Twitter)</FooterLink>
        <FooterLink href="https://xyber.inc/">Website</FooterLink>
        <FooterLink href="https://discord.com/invite/xyberprotocol">
          Discord
        </FooterLink>
      </div>

      <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
        © Xyber Protocol
      </p>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "var(--text-secondary)",
        textDecoration: "none",
        fontSize: 14
      }}
      onMouseOver={e => (e.currentTarget.style.color = "var(--text-primary)")}
      onMouseOut={e => (e.currentTarget.style.color = "var(--text-secondary)")}
    >
      {children}
    </a>
  );
}
