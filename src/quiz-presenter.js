//presenter
( function () {
  
  window.QuizPresenter = {};
  
  var $form = $('.quiz-form')
  
  
  $('form.begin-quiz').on('submit', function (e) {
    e.preventDefault();
    var form = e.target
    console.log(form.name.value)
    QuizPresenter.renderQuizzes()
  })
  
 //Questions view
 
 QuizPresenter.renderQuizzes = function () {
   $form.empty();
   
   var questionDivs = Quiz.questions.map(function (question) {
     return $('<div>').addClass('question').attr('data-id', question.id).append(
            $('<h3>').text(question.content),
            
            question.options.map(function (option, index){
              return $('<div>').addClass('option').append(
                      $('<input>').attr({ type: 'radio', name: 'question'+question.id, value: index}),
                      $('<label>').text(option)
              )
            })
      )
   })
   
   $form.append(
              $('<div>').addClass('questions').append(questionDivs),
              $('<button>').attr('type','submit').text("I'm confident these answers are right")
    )
 }
 
 
 //on Submit
 
 $form.on('submit', function(e) {
   e.preventDefault()
   
   var answers = $form.find('.question').toArray().map(function (elem){
     return {
       questionId: parseInt(elem.getAttribute('data-id')),
       index: parseInt($('[type=radio]:checked', elem).val())
     }  
   })
   var results = Quiz.grade(answers)
   QuizPresenter.renderQuizResults(results)
 })
 
 //Result view
 
 QuizPresenter.renderQuizResults = function (results) {
      $form.empty()
      $form.append(renderResults(results))
      $form.append(renderAvg(results))
 }
 
 function renderResults (results) {
   return $('<div>').addClass('results').append(
     "<label>Score: </label>",
     results.correct + " / " + results.total
     )
 }
 
 function renderAvg (results) {
   return $('<div>').addClass('avg').append(
     "<label>Average: </label>", results.avg
     )
 }
 
})()