'use client'

import type { Question } from '@/types/question'

interface QuestionCardProps {
  question: Question
  selectedAnswer: number | null
  showResult: boolean
  onSelect: (index: number) => void
}

export function QuestionCard({
  question,
  selectedAnswer,
  showResult,
  onSelect,
}: QuestionCardProps) {
  function getOptionClass(index: number) {
    const base = 'option'
    const parts = [base]

    if (selectedAnswer === index) {
      parts.push(`${base}--selected`)
    }

    if (showResult) {
      if (index === question.correctAnswer) {
        parts.push(`${base}--correct`)
      } else if (selectedAnswer === index && index !== question.correctAnswer) {
        parts.push(`${base}--wrong`)
      } else {
        parts.push(`${base}--disabled`)
      }
    }

    return parts.join(' ')
  }

  return (
    <div className="question-card">
      <div className="question-card__header">
        <span className="question-card__category">{question.category}</span>
        <span className="question-card__id">Question #{question.id}</span>
      </div>
      <p className="question-card__text">{question.question}</p>
      <div className="question-card__options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => onSelect(index)}
            disabled={showResult}
          >
            <span className="option__letter">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="option__text">{option}</span>
            {showResult && index === question.correctAnswer && (
              <span className="option__icon">✓</span>
            )}
            {showResult &&
              selectedAnswer === index &&
              index !== question.correctAnswer && (
                <span className="option__icon option__icon--wrong">✗</span>
              )}
          </button>
        ))}
      </div>
      {showResult && (
        <div className="question-card__explanation">
          <strong>Explication :</strong> {question.explanation}
        </div>
      )}
    </div>
  )
}
