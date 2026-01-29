import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "5px 28px",
        display: "flex",
        alignItems: "center",
        background: "rgba(11,11,13,0.55)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #1C1C22",
        zIndex: 100
      }}
    >
      <img
        src="/logo.png"
        alt="Logo"
        onClick={() => navigate("/")}
        style={{
          height: 100,
          opacity: 0.95,
          cursor: "pointer"
        }}
        onMouseOver={e => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.style.transform = "scale(1.03)";
        }}
        onMouseOut={e => {
            e.currentTarget.style.opacity = 0.95;
            e.currentTarget.style.transform = "scale(1)";
        }}

      />
    </header>
  );
}
