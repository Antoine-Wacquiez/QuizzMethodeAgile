'use client'

import { useState } from 'react'
import type { QuizState } from '@/types/question'
import { questions } from '@/lib/questions'
import { QuestionCard } from './question-card'
import { ResultScreen } from './result-screen'

export function Quiz() {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    answers: new Array(questions.length).fill(null),
    showResults: false,
  })

  function handleSelect(index: number) {
    if (state.showResults) return
    const newAnswers = [...state.answers]
    newAnswers[state.currentQuestion] = index
    setState((prev) => ({ ...prev, answers: newAnswers }))
  }

  function handleNext() {
    if (state.currentQuestion < questions.length - 1) {
      setState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
      }))
    }
  }

  function handlePrev() {
    if (state.currentQuestion > 0) {
      setState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1,
      }))
    }
  }

  function handleSubmit() {
    setState((prev) => ({ ...prev, showResults: true }))
  }

  function handleRestart() {
    setState({
      currentQuestion: 0,
      answers: new Array(questions.length).fill(null),
      showResults: false,
    })
  }

  if (state.showResults) {
    return (
      <ResultScreen
        questions={questions}
        answers={state.answers}
        onRestart={handleRestart}
      />
    )
  }

  const currentQuestion = questions[state.currentQuestion]
  const hasAnswer = state.answers[state.currentQuestion] !== null
  const isLast = state.currentQuestion === questions.length - 1
  const allAnswered = state.answers.every((a) => a !== null)

  return (
    <div className="quiz">
      <div className="quiz__progress">
        <div className="quiz__progress-info">
          <span>
            Question {state.currentQuestion + 1} / {questions.length}
          </span>
          <span>
            {state.answers.filter((a) => a !== null).length} répondue(s)
          </span>
        </div>
        <div className="quiz__progress-bar">
          <div
            className="quiz__progress-fill"
            style={{
              width: `${((state.currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <QuestionCard
        question={currentQuestion}
        selectedAnswer={state.answers[state.currentQuestion]}
        showResult={false}
        onSelect={handleSelect}
      />

      <div className="quiz__nav">
        <button
          className="quiz__nav-btn"
          onClick={handlePrev}
          disabled={state.currentQuestion === 0}
        >
          ← Précédente
        </button>

        {isLast ? (
          <button
            className="quiz__nav-btn quiz__nav-btn--submit"
            onClick={handleSubmit}
            disabled={!allAnswered}
          >
            Voir les résultats
          </button>
        ) : (
          <button
            className="quiz__nav-btn"
            onClick={handleNext}
            disabled={!hasAnswer}
          >
            Suivante →
          </button>
        )}
      </div>
    </div>
  )
}
