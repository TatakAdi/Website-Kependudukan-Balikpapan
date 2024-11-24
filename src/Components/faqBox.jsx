import { useState } from "react";
import "../styles/faqBox.css";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <div className="question" onClick={toggleAnswer}>
        <span className="symbol">{isOpen ? "-" : "+"}</span>
        <h3>{question}</h3>
      </div>
      <div className={`answer-container ${isOpen ? "visible" : ""}`}>
        <div className="answer">
          <div className="vertical-line"></div>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

function FaqBox() {
  const faqData = [
    {
      question: "Bagaimana cara untuk pengurusan KIA?",
      answer:
        "Silakan ajukan secara online melalui capil.balikpapan.go.id/layanan, pilih belum punya akun jika belum pernah melakukan pelayanan, kemudian pilih menu 'Kartu Identitas Anak'.",
    },
    {
      question:
        "Bagaimana jika di akta kelahiran terdapat kesalahan dalam penulisan nama orang tua?",
      answer:
        "Anda dapat mengajukan revisi data ke Disdukcapil setempat dengan membawa dokumen pendukung.",
    },
  ];

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

export default FaqBox;
