export interface Course {
  id: string;
  name: string;
  description: string;
  category: "cfa" | "securities-senior" | "securities-junior" | "frm";
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  title: string;
  content: string; // markdown content
}

export interface Question {
  id: string;
  courseId: string;
  chapterId?: string;
  question: string;
  options: string[];
  answer: number; // index of correct option
  explanation: string;
}

export interface UserProgress {
  odId: string;
  completedChapters: string[];
  quizResults: QuizResult[];
}

export interface QuizResult {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
  timestamp: number;
}
