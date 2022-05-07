import { useQuizzes } from "../hooks/useQuizzes";
import { Card } from "./Card";

const Home = () => {
  const { data: quizzes } = useQuizzes();

  return (
    <main>
      <div className="container">
        <h1 className="h1 ta-center mb-6">
          Quiz
          <span className="toggle-theme">
            {/* TODO: add toggle theme here */}
          </span>
        </h1>
        <div className="grid-container mx-auto mb-4">
          {quizzes?.map(quiz => (
            <Card key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>
    </main>
  );
};

export { Home };
