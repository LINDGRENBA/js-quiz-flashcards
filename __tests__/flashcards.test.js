import { Quiz } from './../src/flashcards.js';

describe('Quiz', () => {
  test('should create quiz object', () => {
    const quiz = new Quiz();
   
    expect(quiz).toMatchObject({score: 0, questionIndex: 0});
  });
});