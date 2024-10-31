import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";

import Question from "./Question";
import questions from "./questions";
import styles from "./index.module.scss";

const ConfigMyInfo = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({}); // 모든 질문을 상태로 관리
  // TODO query param도 추가해야함

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      // TODO submit
      return;
    }
    setCurrentQuestion((v) => v + 1);
  };
  const isAnswered = () => {
    return answers[questions[currentQuestion].name];
  };

  return (
    <div className={styles.page}>
      {/* TODO 유저 이름 정보 get */}
      <h3>OOO님에 대해 설명해주세요</h3>

      <div>
        <button
          onClick={() => setCurrentQuestion((v) => v - 1)}
          disabled={currentQuestion === 0}
        >
          &lt;
        </button>
        <ProgressBar now={((currentQuestion + 1) / questions.length) * 100} />
        <button onClick={handleNext} disabled={!isAnswered()}>
          &gt;
        </button>
      </div>
      <Question
        {...questions[currentQuestion]}
        value={answers}
        setValue={setAnswers}
      />
    </div>
  );
};

export default ConfigMyInfo;
