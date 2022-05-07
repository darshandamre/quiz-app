const Instructions = () => {
  return (
    <div className="ta-center">
      <h2 className="h2 mb-4 mt-2">Instructions</h2>
      <ol>
        <li className="mb-3">
          1. Each question has 3 options, select the correct answer.
        </li>
        <li className="mb-3">2. For one correct answer, you get 10 points.</li>
        <li className="mb-3">3. No negative marking for incorrect answers.</li>
        <li className="mb-3">4. Try to answers these questions yourself.</li>
      </ol>

      {/* <a href="./question.html"> */}
      <button className="btn">Accept and Continue</button>
      {/* </a> */}
    </div>
  );
};

export { Instructions };
