const questions = [
    {
        question: "Which is the Largest Animal in the World ?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Elephant", correct: false},
            {text: "Hippo", correct: false},
            {text: "Blue Whale", correct: true},
        ]
    },
    {
        question: "Which is the Largest Planet in the Solar System ?",
        answers: [
            {text: "Saturn", correct: false},
            {text: "Earth", correct: false},
            {text: "Jupitor", correct: true},
            {text: "Sun", correct: false},
        ]
    },
    {
    question: "Capital of India is ________ ?",
    answers: [
    {text: "New Delhi", correct: true},
    {text: "Mumbai", correct: false},
    {text: "Kolkata", correct: false},
    {text: "Bhopal", correct: false},
    ]
    },
    {
    question: "Which is the Largest Continent in the World ?",
    answers: [
    {text: "Asia", correct: true},
    {text: "Australia", correct: false},
    {text: "Antarctica", correct: false},
    {text: "Africa", correct: false},]
	},
	{
	question: "Capital of Madhya Pradesh is ________ ?",
    answers: [
    {text: "Damoh", correct: false},
    {text: "Jabalpur", correct: false},
    {text: "Bhopal", correct: true},
    {text: "Indore", correct: false}]
	},
];
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    
    let currentQuestionIndex =  0;
    let score = 0;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }

    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);

        });
    }

    function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }

    }

    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }

    function showScore(){
        resetState();
        questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }

    function handlenext(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }
    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handlenext();
        }
        else{
            startQuiz();
        }
    })
    startQuiz();    