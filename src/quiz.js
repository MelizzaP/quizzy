//Model
( function () {
  
  //Public
  window.Quiz = {};
  
  //Private
  Quiz.questions = [];
  var idCounter = 100;
  
  //Transaction Script
  Quiz.addQuestion = function (question) {
    question.id = (idCounter +=1);
    Quiz.questions.push(question);
  };
  
  Quiz.findQuestion = function (id) {
    for(var i = 0; i < Quiz.questions.length; i++) {
      if (Quiz.questions[i].id === id) return Quiz.questions[i];
    };
  };
  
  
  //Grade a question
/*
  answers should be an array of objects with question 
  id and the index of the correct answer, 
  ie { id: 340 index: 3 }
*/
  Quiz.grade = function (answers) {
    var results = answers.map(answerQuestion)
    var score = results.filter(identity.length)
  }
  
  function answerQuestion (answer){
    var question = Quiz.findQuestion(answer.questionId)
    if (question.answerIndex === answer.index){
      return true;
    }  
    else {
      return false;
    }
  };
    
    
})()