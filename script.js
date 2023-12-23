const questions = [
  {
    question: "How many books are there in the New Teastment?",
    answer: [
      {text: "27", correct: true },
      {text: "23", correct: false },
      {text: "32", correct: false },
      {text: "12", correct: false }
    ]
  },
  {question: "His hand shall be against every man, And every man’s hand against him.(NKJV)<br><br>Who was this prophecy about?",
    answer: [
      {text:"David", correct: false},
      {text: "Jacob", correct: false},
      {text: "Joseph", correct: false },
      {text: "Ishmael", correct: true }
    ]
  },
  {question:"I go the way of all the earth; be strong, therefore, and prove  yourself a man.(NKJV)<br><br>Whose advice is this?",
    answer: [
      { text: "David's to Solomon", correct: true },
      { text: "Paul's to Timothy", correct: false },
      { text: "Eli's to Samuel", correct: false },
      { text: "Elijah's to Elisha", correct: false}
    ]
  },
  
  {
    question:
      "For I say to you that God is able to raise up children to Abraham from these stones.(NKJV)<br><br>Who said this?",
    answer: [
      { text: "Jesus Christ", correct: true },
      { text: "Apostle Paul", correct: false },
      { text: "John the Baptist", correct: false },
      { text: "Voice from Heaven", correct: false }
    ]
  },
  {
    question: "How many letters did Paul write?",
    answer: [
      { text: "10", correct: false },
      { text: "13", correct: true },
      { text: "11", correct: false },
      { text: "12", correct: false }
    ]
  },
  {
    question: "He must increase, but I must decrease.(NKJV)<br><br>Who said this?",
    answer: [
      { text: "Jesus Christ", correct: false },
      { text: "Apostle Paul", correct: false },
      { text: "John the Baptist", correct: true },
      { text: "Apostle Peter", correct: false }
    ]
  },
  {
    question:
      "Yet who knows whether you have come to the kingdom for such a time as this?(NKJV)<br>Whose words are this?",
    answer: [
      { text: "Esther’s", correct: false },
      { text: "Samuel’s", correct: false },
      { text: "Mordecai’s", correct: true },
      { text: "King Solomon’s", correct: false }
    ]
  },
  {
    question:
      "When you till the ground, it shall no longer yield its strength to you(NKJV)<br><br>This curse was for?",
    answer: [
      { text: "Adam", correct: false },
      { text: "Cain", correct: true },
      { text: "Eve", correct: false },
      { text: "Canaan,", correct: false }
    ]
  },
  {
    question:
      "is the substance of things hoped for, the evidence of things not seen.(NKJV)",
    answer: [
      { text: "Love", correct: false },
      { text: "Hope", correct: false },
      { text: "Faith", correct: true },
      { text: "Salvation", correct: false }
    ]
  },
  {
    question:
      "If they do not hear Moses and the prophets, neither will they be persuaded though one rise from the dead(NKJV)<br><br>Which parable?",
    answer: [
      { text: "The lost coin", correct: false },
      { text: "The good Samaritan", correct: false },
      { text: "Lazarus and the rich man", correct: true },
      { text: "The ten virgins", correct: false }
    ]
  }
  
];
const questionElement = document.getElementById('ask');
const answerElement = document.getElementById('buttons');
const nextBtn = document.getElementById('nextbtn');

let questionIndex = 0;
let score = 0;
function startQuiz(){
  nextBtn.innerHTML = 'Next';
  questionIndex = 0;
  score = 0;
  showQuestion();
}
function showQuestion(){
  resetState();

    const currentQuestion = questions[questionIndex];
  const currentIndex = questionIndex +1;
 questionElement.innerHTML = currentIndex + ". " + currentQuestion.question;
  
  currentQuestion.answer.forEach((answer) =>{
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('but')
    answerElement.appendChild(button);
   if(answer.correct){
     button.dataset.correct = answer.correct
   } button.addEventListener('click',showAnswer)
  });
 
  
}
function resetState(){
  nextBtn.style.display = 'none'
  while(answerElement.firstChild){ answerElement.removeChild(answerElement.firstChild)
  }
}
function showAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if(isCorrect){
 selectedBtn.classList.add('correct');
    score++
  }else{
    selectedBtn.classList.add('incorrect')
  }
  Array.from(answerElement.children).forEach((button) => {
    if(button.dataset.correct === 'true'){
      button.classList.add('correct')
    }
    button.disabled = true
  });
  nextBtn.style.display = 'block';
  if(questionIndex==9){
    nextBtn.innerHTML = 'See score'
  }
    
}
function showScore(){
resetState()
  questionElement.innerHTML = `You have scored ${score} out of ${questions.length}`
  nextBtn.innerHTML = 'Try Again';
  nextBtn.style.display = 'block';
}
function handleNextButton(){
 questionIndex++
if(questionIndex<questions.length){
  showQuestion();
}else{
  showScore();
}
}
nextBtn.addEventListener('click',()=>{
if(questionIndex<questions.length){
  handleNextButton();
}else{
  startQuiz();
}
})
startQuiz();
