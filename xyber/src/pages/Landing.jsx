import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { quizzes } from "../data/quizzes";
import Footer from "../components/Footer";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <main style={{ paddingTop: 140, paddingBottom: 60 }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <h1>Xyber Quiz Challenge</h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: 520, margin: "12px auto" }}>
            Choose a category and validate your understanding of proof-based security.
          </p>
        </motion.div>

        <div
            style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            maxWidth: 960,
            margin: "72px auto 0",
            padding: "0 20px"
            }}
        >

          {Object.entries(quizzes).map(([key, quiz], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: "var(--bg-card)",
                padding: 28,
                borderRadius: 14,
                border: "1px solid #222"
              }}
            >
              <h3>{quiz.title}</h3>
              <p style={{ color: "var(--text-muted)", marginTop: 8 }}>
                15 randomized MCQs
              </p>

              <button
                onClick={() => navigate(`/quiz/${key}`)}
                style={{
                  marginTop: 24,
                  background: "transparent",
                  border: "none",
                  color: "var(--red)",
                  fontWeight: 500,
                  cursor: "pointer"
                }}
              >
                ▶ Start Quiz
              </button>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
