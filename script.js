// define the object for the question entity
let question1 = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
  };
  let question2 = {
    title: 'perro',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 0
  };
  let question3 = {
    title: 'pajaro',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 2
  };
  let question4 = {
    title: 'pez',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 3                      
  };

const questions=[question1, question2, question3, question4];

let count= 0;

var dice={
  side: 4,
  roll: function(){
    var randomnumber=Math.floor(Math.random()*this.side);
    return randomnumber;
  }
}
// existing code
function showQuestion() {
    // existing code
    let q = questions[count];
    let titleDiv = document.getElementById("title");
    let answerDiv = document.getElementById("answer");

    titleDiv.textContent = q.title;
   
    
    
    // existing code
    let alts = document.querySelectorAll('.alternative');
    
    // modified code
    alts.forEach(function(element, index){
      // existing code
      element.textContent = q.alternatives[index];
      // new code
      element.addEventListener('click', function(){
   
        if (q.correctAnswer == index) {
            console.log('Correct Answer!');
            answerDiv.innerHTML = "Correct Answer!"
        } else {
            console.log('Wrong Answer!');
            answerDiv.innerHTML = "Wrong Answer!";
        }
      },{once: true});
    });
    count=count+1;
    if (count==4){
      count=0;
  }
  console.log(count);
}

  // call the function
  showQuestion();
