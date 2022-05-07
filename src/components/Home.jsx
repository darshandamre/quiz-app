import { useQuizzes } from "../hooks/useQuizzes";
import { Card } from "./Card";

const Home = () => {
  const { data: quizzes } = useQuizzes();

  return (
    <div className="grid-container mx-auto mb-4">
      {quizzes?.map(quiz => (
        <Card key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
};

export { Home };
