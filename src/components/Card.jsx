const Card = ({ quiz }) => {
  return (
    <div className="card">
      {/* TODO: add react router Link here // <a href="./pages/instructions.html"> */}
      <img className="card__image" src={quiz.thumbnail} alt="Tenet" />
      <div className="card__content">
        <h3 className="h3 m-3">{quiz.title}</h3>
        <p className="text-base ta-start m-3">
          Take the quiz and find out.
          <br />
          {quiz.totalQuestions} questions
        </p>
      </div>
      {/* </a> */}
    </div>
  );
};

export { Card };
