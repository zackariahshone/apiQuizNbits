const questions = [
    {
        'question': 'How to decalr a variable: ',//objest index[0]
        'a':'x = 2;',
        'b':'const variable = 0;',
        'c':'this numner is 1;',
        'd':'this is number 4',
        'answer':'b'
    },
    {
        'question': 'number 2',//object index[1]
        'a':'a number 2',
        'b':'b number 2',
        'c':'c number 2',
        'd':'this is number 4',
        'answer':'a'
    },
    {
        'question': 'number 3',//obeject index[2]
        'a':'1 number 3',
        'b':'2 number 3',
        'c':'3 number 3',
        'd':'this is number 4',
        'answer':'b'
    }
]

let currentQuestions = 0 ;//sets the index at zero that summons each array question
let score = 0;//user score starts at zero
let totalQuestions = questions.length;//sets the umber of 
const container = document.getElementById('quizContainer');
const quesEl = document.getElementById('questionEl');

const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');

const nextButton = document.getElementById('nextButton');
const resultCont = document.getElementById('result');

nextButton.addEventListener('click', loadQuestion);




function loadQuestion(questionIndex){
    var q = questions[questionIndex];
   
    console.log((questionIndex + 1) + '. ' + questions[questionIndex].question );
    
    quesEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1 .textContent = questions[questionIndex].a;
    opt2 .textContent = questions[questionIndex].b;
    opt3 .textContent = q.c;
}         

function loadNext(){
    let selected = document.querySelector('input[type=radio]:checked');
    //if(document.getElementById('GFG').checked);
    
    

    
    if( selected.checked ==! true){
        console.log("after click" + selected);
        let x = false; 
        alert('is true');
        return;
      }
      //console.log(selecctedAns.value);
      
    if(q.answer === selected);{
    score +=10;
}
selected = false;
questionIndex++;
if(questionIndex === totalQuestions - 1){
    nextButton.textContent = 'Finish';
}
if(questionIndex === totalQuestions){
    container.style.display = none;
    resultCont.style.display = '';
    resultCont.textContent = 'Your Score ' + score;
    return;
}
loadNext(questionIndex);
}

loadQuestion(questionIndex);