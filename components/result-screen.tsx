'use client'

import type { Question } from '@/types/question'

interface ResultScreenProps {
  questions: Question[]
  answers: (number | null)[]
  onRestart: () => void
}

export function ResultScreen({
  questions,
  answers,
  onRestart,
}: ResultScreenProps) {
  const total = questions.length
  const correct = answers.reduce<number>(
    (count, answer, index) =>
      answer === questions[index].correctAnswer ? count + 1 : count,
    0,
  )
  const percentage = Math.round((correct / total) * 100)

  function getGrade() {
    if (percentage >= 90) return { label: 'Excellent !', emoji: '🏆' }
    if (percentage >= 70) return { label: 'Très bien !', emoji: '🎯' }
    if (percentage >= 50) return { label: 'Bien', emoji: '👍' }
    return { label: 'Peut mieux faire', emoji: '📚' }
  }

  const grade = getGrade()

  const categoryStats = questions.reduce(
    (acc, q) => {
      if (!acc[q.category]) {
        acc[q.category] = { total: 0, correct: 0 }
      }
      acc[q.category].total++
      const answer = answers[questions.indexOf(q)]
      if (answer === q.correctAnswer) {
        acc[q.category].correct++
      }
      return acc
    },
    {} as Record<string, { total: number; correct: number }>,
  )

  return (
    <div className="result-screen">
      <div className="result-screen__header">
        <span className="result-screen__emoji">{grade.emoji}</span>
        <h1 className="result-screen__grade">{grade.label}</h1>
      </div>
      <div className="result-screen__score">
        <span className="result-screen__score-value">
          {correct}/{total}
        </span>
        <span className="result-screen__score-pct">{percentage}%</span>
      </div>
      <div className="result-screen__progress">
        <div
          className="result-screen__progress-bar"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="result-screen__categories">
        <h2>Par catégorie</h2>
        {Object.entries(categoryStats).map(([category, stats]) => (
          <div key={category} className="result-screen__category">
            <span className="result-screen__category-name">{category}</span>
            <span className="result-screen__category-score">
              {stats.correct}/{stats.total}
            </span>
          </div>
        ))}
      </div>
      <button className="result-screen__restart" onClick={onRestart}>
        Recommencer le quiz
      </button>
    </div>
  )
}
