import { genresReducer, initialState } from '../genre';
import { GENRE_ADD } from '../../actions';

describe('Genre reducer tests', () => {
  it('should be a function', () => {
    expect(typeof genresReducer).toBe('function');
  });

  it('should return default state', () => {
    expect(genresReducer(undefined, [])).toEqual(initialState);
  });

  it('should add genres to the list', () => {
    const expectedState = [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 16, name: 'Animation' },
    ];
    expect(
      genresReducer(undefined, {
        type: GENRE_ADD,
        payload: [
          { id: 28, name: 'Action' },
          { id: 12, name: 'Adventure' },
          { id: 16, name: 'Animation' },
        ],
      })
    ).toEqual(expectedState);
  });
});
