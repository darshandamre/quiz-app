import { useLocation, useSearchParams } from "react-router-dom";
import { useQuestions } from "../hooks/useQuestions";

const Result = () => {
  const [searchParams] = useSearchParams();
  const { data: questions } = useQuestions(searchParams.get("quiz"));
  const { state: userAnswers } = useLocation();

  const totalPossibleScore = questions?.reduce(
    (totalScore, question) => totalScore + question.score,
    0
  );

  const score = questions?.reduce((totalScore, { id, options, score }) => {
    const selectedOption = options.find(
      option => option.id === userAnswers[id]
    );
    return selectedOption.correct ? totalScore + score : totalScore;
  }, 0);

  return (
    <div className="ta-center">
      <p className="text-md">
        Final score: {score} / {totalPossibleScore}
      </p>
      {questions?.map(({ id, content, options }, index, questions) => (
        <div key={id} className="mb-10 mt-4">
          <p className="ta-start">
            Question: {index + 1}/{questions.length}
          </p>
          <h3 className="h3">{content}</h3>

          {options?.map(option => {
            const isSelected = option.id === userAnswers[id];
            const isSelectedWrong = isSelected && !options.correct;

            return (
              <button
                key={option.id}
                className={`btn options ${
                  option.correct
                    ? "options--correct"
                    : isSelectedWrong
                    ? "options--wrong"
                    : ""
                }`}>
                {option.content}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export { Result };
