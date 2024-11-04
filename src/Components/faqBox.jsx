import React, { useState } from "react";
import "../styles/faqBox.css";

function faqItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faQuestion">
      <div className="question" onClick={toggleAnswer}>
        <span className="symbols">+</span>
        <h3>{props.question}</h3>
      </div>
      {isOpen && <p className="answer">{props.answer}</p>}
    </div>
  );
}

function faqBox() {
  const faqData = [
    {
      question: "Pertanyaan Pertama?",
      answer: "Jawaban untuk pertanyaan pertama",
    },
    { question: "Pertanyaan Kedua?", answer: "Jawaban untuk pertanyaan kedua" },
    {
      question: "Pertanyaan ketiga?",
      answer: "Jawaban untuk pertanyaan ketiga",
    },
    {
      question: "Pertanyaan keempat?",
      answer: "Jawaban untuk pertanyaan keempat",
    },
    {
      question: "Pertanyaan kelima?",
      answer: "Jawaban untuk pertanyaan kelima",
    },
  ];

  return (
    <div>
      {faqData.map((item, index) => (
        <faqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

export default faqBox;
