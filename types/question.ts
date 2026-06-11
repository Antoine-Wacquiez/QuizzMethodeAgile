export type QuestionCategory = 'Scrum' | 'Kanban' | 'XP' | 'SAFe' | 'Général'

export interface Question {
  id: number
  category: QuestionCategory
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface QuizState {
  currentQuestion: number
  answers: (number | null)[]
  showResults: boolean
}
