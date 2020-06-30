import { Quiz, Questions } from './../src/flashcards.js';

describe('Quiz & Questions', () => {
  test('should create quiz object', () => {
    let questions = [1, 2, 3];
    const quiz = new Quiz(questions);
    expect(quiz).toMatchObject({score: 0, questions: questions,questionIndex: 0});
  });
  test('should create a question object', () => {
    let text = "Hi";
    let choiceArray = ["A", "B", "C", "D"];
    let answer = "A"
    const questions = new Questions(text, choiceArray, answer);
    expect(questions).toMatchObject({text: "Hi", choices: choiceArray, answer: "A"});
  });
});