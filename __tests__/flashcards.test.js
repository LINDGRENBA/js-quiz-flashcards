import { Quiz } from './../src/flashcards.js';

describe('Quiz', () => {
  test('should create quiz object', () => {
    let questions = [1, 2, 3];
    const quiz = new Quiz(questions);
    expect(quiz).toMatchObject({score: 0, questions: questions,questionIndex: 0});
  });
});