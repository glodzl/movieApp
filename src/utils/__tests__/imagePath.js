import { imagePath } from '../imagePath';

const testImagePath = [
  {
    input: ['/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg'],
    output: 'http://image.tmdb.org/t/p/w185//fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg',
  },
  {
    input: ['fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg', 500],
    output: 'http://image.tmdb.org/t/p/w500/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg',
  },
];

describe('imagePath should return the valid format', () => {
  testImagePath.forEach(element => {
    it(`${element.input} should return ${element.output}`, () => {
      expect(imagePath(...element.input)).toBe(element.output);
    });
  });
});
