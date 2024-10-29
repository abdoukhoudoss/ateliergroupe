export interface WelcomeProps {
  review: ReviewProps[];
  setReview: (review: ReviewProps[]) => void;
}

export interface ReviewProps {
  title?: string;
  description?: string;
  category?: string;
  id?: string;
}

export interface PropsOfReview {
  review:ReviewProps[];
}

