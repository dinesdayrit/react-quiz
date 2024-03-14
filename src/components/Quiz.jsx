import { useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
    const [userAnsers, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnsers.length;
    const quizIsComplete  = activeQuestionIndex === QUESTIONS.length;

    if (quizIsComplete) {
        return <div id="summary">
        <img src={quizCompleteImg} alt="quizCompleteImg"/>
        <h2>Quiz Complete</h2>
        </div>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() -0.5);

    const handleSelectAnswer = (selectedAnswer) => {
        setUserAnswer((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
        
    }

    return (
        <div id="quiz">
        <div id="question">
            <QuestionTimer
             timeout={10000}
             onTimeout={() => handleSelectAnswer(null)} 
            />
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswers.map((answer) => (
                    <li key={answer} className="answer">
                     <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                ))}
            </ul>
        </div>
        </div>

    )
}