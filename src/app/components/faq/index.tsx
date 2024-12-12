'use client'
import React, { useState } from 'react'
import './faq.css'

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeQuestions, setActiveQuestions] = useState<{[key: number]: boolean}>({});

  const faqData: FAQItem[] = [
    {
      question: "Xidmətlərinizin qiyməti necə hesablanır?",
      answer: "Qiymət müəyyən edilərkən avadanlığın növü, zədənin miqdarı və ehtiyac duyulan material nəzərə alınır. Dəqiq qiymət üçün yerində müayinə tələb olunur."
    },
    {
      question: "Zəmanət müddəti nə qədərdir?",
      answer: "Bütün xidmətlərimizə 3 ay zəmanət verilir. Bu müddət ərzində görülən işlərdə hər hansı problem yaranarsa, təmənnasız şəkildə aradan qaldırılacaq."
    },
    {
      question: "Təcili xidmət göstərirsinizmi?",
      answer: "Bəli, təcili xidmət təklif edirik. Çağırış qəbul edildikdən sonra ən qısa müddətdə (1-2 saat) yerində olacağıq."
    },
  ];

  const toggleQuestion = (index: number) => {
    setActiveQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="faq-block">
      <div className="faq-img-block">
      <img src="./faq.png" alt="" />
      <img src="./faq 2.jpg" alt=""  className='second-fag-img'/>
      </div>
      
      <div className="faq-text">
        <h2>Tez-tez verilən suallar</h2>
        <div className="faq-questions">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question" 
                onClick={() => toggleQuestion(index)}
              >
                <span>{item.question}</span>
                <span className="faq-toggle">
                  {activeQuestions[index] ? '−' : '+'}
                </span>
              </div>
              {activeQuestions[index] && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ