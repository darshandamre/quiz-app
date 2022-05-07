import { useReducer, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuestions } from "../hooks/useQuestions";
import "./Question.css";

const Question = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { data: questions } = useQuestions(searchParams.get("quiz"));
  const [currQuestion, nextQuestion] = useReducer(q => q + 1, 0);
  const [selectedOption, setSelectedOption] = useState(null);
  const userAnswers = useRef({});

  const goToNextQuestionOrSubmit = () => {
    userAnswers.current = {
      ...userAnswers.current,
      [questions[currQuestion].id]: selectedOption
    };

    if (currQuestion === questions.length - 1) {
      return navigate(`/result?${searchParams.toString()}`, {
        state: userAnswers.current
      });
    }

    setSelectedOption(null);
    nextQuestion();
  };

  return (
    <div className="ta-center">
      <h3 className="h3 my-4">{questions?.[currQuestion]?.content}</h3>
      <div className="question-data my-3">
        <p>
          Question: {currQuestion + 1}/{questions?.length}
        </p>
        <p>Score: {questions?.[currQuestion]?.score}</p>
      </div>

      {questions?.[currQuestion]?.options?.map(({ id, content }) => (
        <button
          key={id}
          onClick={() => setSelectedOption(id)}
          className={`btn options ${
            selectedOption === id ? "options--selected" : ""
          }`}>
          {content}
        </button>
      ))}

      <div className="ta-end mt-4">
        <button
          onClick={goToNextQuestionOrSubmit}
          disabled={!selectedOption}
          className="btn btn--primary next">
          {currQuestion === questions?.length - 1 ? "submit" : "next question"}
        </button>
      </div>
    </div>
  );
};

export { Question };
