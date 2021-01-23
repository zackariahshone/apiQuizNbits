const questions = [{
        'question': 'number 1', //objest index[0]
        'a': 'A question number one',
        'b': 'B Number 2',
        'c': 'C Number 3',
        'd': 'D number 4',
        'answer': 'c'
    },
    {
        'question': 'number 2', //object index[1]
        'a': 'A question 2.1',
        'b': 'B question 2.2',
        'c': 'B question 2.3',
        'd': 'question 2.4',
        'answer': 'd'
    },
    {
        'question': 'number 3', //obeject index[2]
        'a': 'A question 3.1',
        'b': 'Bquestion 3.2',
        'c': 'question 3.3',
        'd': 'question 3.4',
        'answer': 'a'
    },
    {
        'question': 'number 4', //objest index[3]
        'a': 'A question number one',
        'b': 'B Number 2',
        'c': 'C Number 3',
        'd': 'D number 4',
        'answer': 'c'
    },
    {
        'question': 'number 5', //object index[4]
        'a': 'A question 2.1',
        'b': 'B question 2.2',
        'c': 'B question 2.3',
        'd': 'question 2.4',
        'answer': 'd'
    },
    {
        'question': 'number 6', //obeject index[5]
        'a': 'A question 3.1',
        'b': 'Bquestion 3.2',
        'c': 'question 3.3',
        'd': 'question 3.4',
        'answer': 'a'
    },
    {
        'question': 'number 1', //objest index[6]
        'a': 'A question number one',
        'b': 'B Number 2',
        'c': 'C Number 3',
        'd': 'D number 4',
        'answer': 'c'
    },
    {
        'question': 'number 2', //object index[7]
        'a': 'A question 2.1',
        'b': 'B question 2.2',
        'c': 'B question 2.3',
        'd': 'question 2.4',
        'answer': 'd'
    },
    {
        'question': 'number 3', //obeject index[8]
        'a': 'A question 3.1',
        'b': 'Bquestion 3.2',
        'c': 'question 3.3',
        'd': 'question 3.4',
        'answer': 'a'
    },
    {
        'question': 'number 4', //objest index[9]
        'a': 'A question number one',
        'b': 'B Number 2',
        'c': 'C Number 3',
        'd': 'D number 4',
        'answer': 'c'
    }
]
let myVar=0;
let currentQuestion = 0;
let score = 0;
const totalQuestions = questions.length;
let container = document.getElementById('clear');
let questionEl = document.getElementById('questionEl');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');
const nextButton = document.getElementById('nextButton');
const resultCont = document.getElementById('result');
const timer = document.getElementById('timer');
const startButton = document.getElementById('start');
const q_box = document.getElementById('q_clear');
q_box.style.display='none';

function loadQuestion(questionIndex) {
    let q = questions[questionIndex];
    //console.log((questionIndex + 1) + '. '+ q.question);
    
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.a;
    opt2.textContent = q.b;
    opt3.textContent = q.c;
    opt4.textContent = q.d;
   
};

function loadNextQuestion() {
    let selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
        alert('please select answer');
        return;
    }
    let useranswer = selectedOption.value;
    console.log(useranswer);
    if (questions[currentQuestion].answer === useranswer) {
        score += 10;
        console.log('correct answer' + score);
    }
    selectedOption.checked = false;
    console.log('add to current question');
    
    currentQuestion++;
    if (currentQuestion === totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    if (currentQuestion === totalQuestions) {
        container.style.display = 'none';
        resultCont.style.display = 'block';
        resultCont.textContent = 'Your Score: ' + score;
        clearInterval(myVar);
        return;
    }
}
//////Stop the quiz
function stopQuiz() {
    //const strtButton = document.getElementById("srtQuiz");
    const h1El = document.getElementsByTagName('h1');

    let x = 60;
    let y = 0;
    let w = 0;

    const setTime = 1000;
    myVar = setInterval(alertFunc, setTime);
    console.log(setTime);
    console.log("button clicked");
    
    function alertFunc(){
        
        x--;
        h1El[0].textContent = w + ':' + y + x;

        if (x === 9) {
            x = 0;
            y++;
        }
        if (y === 5 && x === 9) {
            w++;
        }
    }
    //strtButton.addEventListener('click', timerStart);
    //stopBtn.addEventListener('click', stop);
}



startButton.addEventListener('click', function(){
    nextButton.style.display = 'block';
    q_box.style.display='block';
    startButton.style.display = 'none';
    stopQuiz();
});

nextButton.addEventListener('click', function () {
    loadQuestion(currentQuestion);
    loadNextQuestion();
    console.log("current question when button is hit " + currentQuestion);
    
});
loadQuestion(currentQuestion);

//console.log(questions[0]);
//console.log(questions[1]);
//console.log(questions[2]);