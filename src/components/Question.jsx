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

  return (
    <div className="ta-center">
      <div className="question-data">
        <p>
          Question: {currQuestion + 1}/{questions?.length}
        </p>
        <p>Score: {questions?.[currQuestion]?.score}</p>
      </div>
      <h3 className="h3 mt-4">{questions?.[currQuestion]?.content}</h3>

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
          href="./result.html"
          onClick={() => {
            userAnswers.current = {
              ...userAnswers.current,
              [questions[currQuestion].id]: selectedOption
            };

            if (currQuestion === questions.length - 1) {
              return navigate(`/result?${searchParams.toString()}`, {
                state: userAnswers.current
              });
            }

            nextQuestion();
          }}
          disabled={!selectedOption}
          className="btn btn--primary next">
          {currQuestion === questions?.length - 1 ? "submit" : "next"}
        </button>
      </div>
    </div>
  );
};

export { Question };
