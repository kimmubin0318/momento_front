import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";

import questions from "./questions";

const ConfigMyInfo = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // 답변을 저장하는 함수
  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].name]: e.target.value,
    });
  };

  // 진행률 계산
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <h3>OOO님에 대해 설명해주세요</h3>

      <ProgressBar
        now={progress}
        label={`${Math.round(progress)}%`}
        className="my-4"
      />
    </>
  );
};

export default ConfigMyInfo;
