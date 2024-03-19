import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Summary from "./Summary";
import Question from "./Questions";

export default function Quiz() {
    

    const [userAnswers, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete  = activeQuestionIndex === QUESTIONS.length;
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });

    },[]);
 
    const handleSkipAnswer = useCallback(
        () =>  handleSelectAnswer(null),
        [handleSelectAnswer]
    );
    
    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />
    }

    return (
        <div id="quiz">
        <Question
         key={activeQuestionIndex}
         index={activeQuestionIndex}
         onSelectAnswer={handleSelectAnswer}
         onSkipAnswer={handleSkipAnswer}
         
        />
        </div>

    )
}