import { Link } from "react-router-dom";

const Card = ({ quiz }) => {
  return (
    <div className="card">
      <Link to="/instructions">
        <img className="card__image" src={quiz.thumbnail} alt="Tenet" />
        <div className="card__content">
          <h3 className="h3 m-3">{quiz.title}</h3>
          <p className="text-base ta-start m-3">
            Take the quiz and find out.
            <br />
            {quiz.totalQuestions} questions
          </p>
        </div>
      </Link>
    </div>
  );
};

export { Card };
