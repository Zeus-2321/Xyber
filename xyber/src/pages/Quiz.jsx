import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { quizzes } from "../data/quizzes";
import { pickRandom } from "../utils/randomize";
import { useState, useMemo } from "react";

export default function Quiz() {
  const { category } = useParams();
  const navigate = useNavigate();

  const questions = useMemo(
    () => pickRandom(quizzes[category].questions, 15),
    [category]
  );

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const current = questions[index];

  function handleAnswer(i) {
    if (i === current.answer) setScore(s => s + 1);

    if (index + 1 < questions.length) {
      setIndex(i => i + 1);
    } else {
      navigate("/result", { state: { score: score + (i === current.answer ? 1 : 0) } });
    }
  }

  return (
    <main style={{ paddingTop: 120, maxWidth: 820, margin: "auto", paddingBottom: 80, paddingLeft: 20,
    paddingRight: 20, }}>
      <p style={{ color: "var(--text-muted)" }}>
        Question {index + 1} / {questions.length}
      </p>

      <motion.h2
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{ marginTop: 12 }}
      >
        {current.question}
      </motion.h2>

      <div style={{ marginTop: 32 }}>
        {current.options.map((opt, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleAnswer(i)}
            style={{
              width: "100%",
              textAlign: "left",
              marginBottom: 14,
              padding: "18px 20px",
              background: "var(--bg-card)",
              border: "1px solid #24242B",
              borderRadius: 10,
              color: "var(--text-primary)",
              cursor: "pointer"
            }}
          >
            {opt}
          </motion.button>
        ))}
      </div>
    </main>
  );
}
