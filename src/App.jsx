import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("Rs 0");

  const data = [
    {
      id: 1,
      question: "In which group of places the Kumbha Mela is held every twelve years?",
      answers: [
        {
          text: "Ujjain,  Purl, Prayag, Haridwar",
          correct: false,
        },
        {
          text: "Prayag, Haridwar, Ujjain, Nasik",
          correct: true,
        },
        {
          text: "Chittakoot, Ujjain, Prayag,'Haridwar",
          correct: false,
        },
        {
          text: "Rameshwaram, Purl, Badrinath, Dwarika",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Bahubali festival is related to ?",
      answers: [
        {
          text: "Buddhism",
          correct: false,
        },
        {
          text: "Islam",
          correct: false,
        },
        {
          text: "Hinduism",
          correct: false,
        },
        {
          text: "Jainism",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which of the following gods is also known as ‘Gauri Nandan’?",
      answers: [
        {
          text: "Ganesha",
          correct: true,
        },
        {
          text: "Agni",
          correct: false,
        },
        {
          text: "Hanuman",
          correct: false,
        },
        {
          text: "Indra",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who wrote the introduction to the English translation of Rabindranath Tagore’s Gitanjali?",
      answers: [
        {
          text: "W.B. Yeats",
          correct: true,
        },
        {
          text: "Alfred Tennyson",
          correct: false,
        },
        {
          text: "T.S. Elliot",
          correct: false,
        },
        {
          text: "P.B. Shelley",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "In his retirement speech at Wankhede, who said, 'My life between 22 yards for 24 years, it is hard to believe that this wonderful journey is coming to an end'?",
      answers: [
        {
          text: "Anil Kumble ",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: true,
        },
        {
          text: "Rahul Dravid",
          correct: false,
        },
        {
          text: "Sunil Gavaskar",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "How many religions are there in India?",
      answers: [
        {
          text: "6",
          correct: true,
        },
        {
          text: "7",
          correct: false,
        },
        {
          text: "8",
          correct: false,
        },
        {
          text: "9",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which Mughal Emperor was deported to Rangoon by the British?",
      answers: [
        {
          text: "Bahadur Shah II",
          correct: true,
        },
        {
          text: "Jahangir ",
          correct: false,
        },
        {
          text: "Aurangzeb",
          correct: false,
        },
        {
          text: "Shahjahan",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "The fine step-well complex of 'Agrasen ki Baoli' is located at ?",
      answers: [
        {
          text: "Gwaliar",
          correct: false,
        },
        {
          text: "Udaypur",
          correct: false,
        },
        {
          text: "Ranchi",
          correct: false,
        },
        {
          text: "New Delhi",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which James Bond movie was shot in the Indian city of Udaipur?",
      answers: [
        {
          text: "Live & Let Live",
          correct: false,
        },
        {
          text: "Diamonds are Forever",
          correct: false,
        },
        {
          text: "Octupussy",
          correct: true,
        },
        {
          text: "Licence to Kill",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who was the first Indian woman to win a medal in the Olympics?",
      answers: [
        {
          text: "Bachendri Pal",
          correct: false,
        },
        {
          text: "Karnam Maleshwari ",
          correct: true,
        },
        {
          text: "PT Usha",
          correct: false,
        },
        {
          text: "Kunjarni Devi",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who among the following is said to have witnessed the reigns of eight Delhi Sultans?",
      answers: [
        {
          text: "Bahadur Shah II",
          correct: false,
        },
        {
          text: "Jahangir ",
          correct: false,
        },
        {
          text: "Amir Khusro",
          correct: true,
        },
        {
          text: "Ziaudin Burani",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which colonial power ended its involvement in India by selling the rights of the Nicobar Islands to the British on October 18, 1868?",
      answers: [
        {
          text: "Belgium",
          correct: false,
        },
        {
          text: "Italy ",
          correct: false,
        },
        {
          text: "France",
          correct: false,
        },
        {
          text: "Denmark",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Who is the first woman to successfully climb K2, the world’s second highest mountain peak?",
      answers: [
        {
          text: "Wanda Rutkiewicz",
          correct: true,
        },
        {
          text: "Tamae Watanabe ",
          correct: false,
        },
        {
          text: "Chantal Mauduit",
          correct: false,
        },
        {
          text: "Junko Tabei",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "The historic Indo-Pak talks of 1972 between Indira Gandhi and Zulfikar Ali Bhutto were held at which place in Shimla?",
      answers: [
        {
          text: "Viceregal Lodge ",
          correct: false,
        },
        {
          text: "Cecil Hotel",
          correct: false,
        },
        {
          text: "Gorton Castle ",
          correct: false,
        },
        {
          text: "Barnes Court ",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "Rs 1000" },
        { id: 2, amount: "Rs 5000" },
        { id: 3, amount: "Rs 10000" },
        { id: 4, amount: "Rs 20000" },
        { id: 5, amount: "Rs 40000" },
        { id: 6, amount: "Rs 80000" },
        { id: 7, amount: "Rs 160000" },
        { id: 8, amount: "Rs 320000" },
        { id: 9, amount: "Rs 640000" },
        { id: 10, amount: "Rs 1250000" },
        { id: 11, amount: "Rs 2500000" },
        { id: 12, amount: "Rs 5000000" },
        { id: 13, amount: "Rs 10000000" },
        { id: 14, amount: "Rs 40000000" },
        { id: 15, amount: "Rs 70000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
