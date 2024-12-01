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
        "Silakan Ke section form pada halaman ini, lalu tekan box bertuliskan KTP-EL lalu mengisi formulir kelengkapan dokumen yang diperlukan. Untuk lebih jelasnya bisa ke bagian Pelayanan => KTP Elektronik => Kartu Identitas Anak",
    },
    {
      question:
        "Bagaimana jika di akta kelahiran terdapat kesalahan dalam penulisan nama orang tua?",
      answer:
        "Anda bisa mengajukan pelayanan Ganti EKTP jika ada perubahan/kesalahan data seperti pada kasus di atas.",
    },
    {
      question:
        "Bagaimana cara mengganti foto ktp dari yang tidak berhijab kemudian berhijab?",
      answer:
        'Anda bisa mengajukan pelayanan "Ganti EKTP karena perubahan data" jika ingin melakukan perubahan foto atau data-data yang lainnya',
    },
    {
      question: "Apa saja syarat-syarat untuk membuat akta kelahiran?",
      answer:
        "Yang jelas punya anak, sama antar pasangan udah nikah, kan malu yak hamil diluar nikah. Mana mulut orang Indo kebanyakan bikin geleng-geleng kepala semua",
    },
    {
      question:
        "Bagaimana syarat gabung KK setelah menikah? Jika suami saya berasal dari Kabupaten/Kota yang Berbeda ?",
      answer:
        "Anda bisa meminta suami anda untuk melakukan pergantian EKTP dengan menyesuaikan data tempat tinggal yang disetujui oleh Anda dan Suami Anda, baru setelah itu Anda bisa mengajukan pelayanan pembuatan Kartu Keluarga baru",
    },
    {
      question: "Apa saja syarat pergantian KTP Rusak",
      answer:
        'Anda bisa ke Halaman "Pelayanan => KTP Elektronik => Pergantian KTP karena Hilang/Rusak" untuk mendapatkan informasi lebih lanjut',
    },
    {
      question:
        "Bagaimana jika penduduk balikpapan meninggal di Kalimantan tengah, apakah mengurus akta kematian di balikpapan atau kalimantan tengah?",
      answer:
        "Yah, urus di Balikpapan/Tempat asal lah, kan udah ada mobil/pesawat buat ngantar dokumennya :V ",
    },
  ];

  return (
    <div id="FAQ-container" className="faq-container">
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

export default FaqBox;
