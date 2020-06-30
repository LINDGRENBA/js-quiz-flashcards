import { Quiz, Question } from './../src/flashcards.js';

describe('Quiz & Questions', () => {
  test('should create quiz object', () => {
    let questions = [1, 2, 3];
    const quiz = new Quiz(questions);
    expect(quiz).toMatchObject({score: 0, questions: questions, questionIndex: 0});
  });
  test('should create a question object', () => {
    let text = "Hi";
    let choiceArray = ["A", "B", "C", "D"];
    let answer = "A"
    const question = new Question(text, choiceArray, answer);
    expect(question).toMatchObject({text: "Hi", choices: choiceArray, answer: "A"});
  });
  test('should check that user selects correct answer', () => {
    let userSelected = "A";
    const question = new Question("Hi", ["A", "B", "C", "D"], "A");
    expect(question.checkAnswer(userSelected, question)).toEqual(true);
  });
});