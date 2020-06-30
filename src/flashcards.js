export class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
}

export class Questions {
  constructor(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
  }

  checkAnswer(userSelected, questions) {
    if(userSelected === this.answer) {
      return true;
    }
  }

}


