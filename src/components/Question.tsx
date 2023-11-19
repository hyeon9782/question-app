import { useState } from "react";
import { QUESTIONS } from "../constants/questions";
import { CATEGORIES } from "../constants/categories";

const Question = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    CATEGORIES[0]
  );
  const [questions, setQuestions] = useState(
    QUESTIONS.filter((question) => question.category === selectedCategory)
  );
  const [selectedQuestion, setSelectedQuestion] =
    useState<string>("시작해주세요!");

  function changeCategory(category: string) {
    setSelectedCategory(category);
    setQuestions(
      QUESTIONS.filter((question) => question.category === category)
    );
  }

  function selectQuestion() {
    const randomNumber = Math.floor(Math.random() * questions.length);

    if (questions[randomNumber]?.question) {
      setSelectedQuestion(questions[randomNumber].question);
      setQuestions(questions.filter((_, index) => index !== randomNumber));
    } else {
      setSelectedQuestion("문제 끝!");
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "80vh",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: "1.5rem",
          gap: "10px",
        }}
      >
        {CATEGORIES.map((category, index) => (
          <div key={index} onClick={() => changeCategory(category)}>
            {category}
          </div>
        ))}
      </div>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        {selectedQuestion}
      </div>
      <button onClick={selectQuestion}>다음 문제</button>
    </div>
  );
};

export default Question;
