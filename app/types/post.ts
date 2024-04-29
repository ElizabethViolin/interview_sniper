// src/types/postTypes.ts
export interface PostData {
  id: number;
  created_by: string;
  company_name: string;
  description: string;
  created_at: string;
  updated_at: string;
  questions: QuestionData[];
  is_bookmarked: boolean;
  user_reaction: 'like' | 'dislike' | null;
}

export interface PostInput {
  companyName: string;
  description: string;
  questions: QuestionData[];
}

export interface PostsArray {
  posts: PostData[];
}

export interface QuestionData {
  text: string;
}

export interface Question {
  text: string;
}

export interface QuestionsProps {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}
