import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const percentage = (state.score / 15) * 100;

  return (
    <main style={{ paddingTop: 160, textAlign: "center" }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Quiz Completed
      </motion.h1>

      <h2 style={{ color: "var(--success)", marginTop: 16 }}>
        {state.score} / 15
      </h2>

      {percentage >= 90 && (
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
        marginTop: 32,
        padding: "18px 24px",
        display: "inline-block",
        borderRadius: 12,
        border: "1px solid var(--dark-red)",
        background: "rgba(209,18,46,0.08)",
        color: "var(--red)",
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: "0.4px"
        }}
        >
            You are a true Xyberian
        </motion.div>
    )}


      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: 48,
          padding: "12px 28px",
          background: "var(--red)",
          border: "none",
          borderRadius: 10,
          color: "#fff",
          cursor: "pointer"
        }}
      >
        Back to Home
      </button>
    </main>
  );
}
