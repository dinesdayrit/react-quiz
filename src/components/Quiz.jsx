import { useState } from "react"

export default function Quiz() {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnsers, setUserAnswer] = useState([]);

    return <p>Currently Active Question</p>
}