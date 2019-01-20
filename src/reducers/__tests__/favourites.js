import { favouritesReducer, initialState } from '../favourites';
import { FAVOURITE_ADD, FAVOURITE_REMOVE } from '../../actions';

describe('Favourite reducer tests', () => {
  it('should be a function', () => {
    expect(typeof favouritesReducer).toBe('function');
  });

  it('should return default state', () => {
    expect(favouritesReducer(undefined, [])).toEqual(initialState);
  });

  it('should add favourite to the list', () => {
    const expectedState = [
      { id: 23, title: 'Batman Begins', genre_ids: [28, 12, 878] },
    ];
    expect(
      favouritesReducer(undefined, {
        type: FAVOURITE_ADD,
        payload: { id: 23, title: 'Batman Begins', genre_ids: [28, 12, 878] },
      })
    ).toEqual(expectedState);
  });

  it('should add favourite to existing favourite list', () => {
    const inputState = [
      { id: 23, title: 'Batman Begins', genre_ids: [28, 12, 878] },
    ];
    const expectedState = [
      { id: 23, title: 'Batman Begins', genre_ids: [28, 12, 878] },
      { id: 297802, title: 'Aquaman', genre_ids: [28, 14, 878, 12] },
    ];
    expect(
      favouritesReducer(inputState, {
        type: FAVOURITE_ADD,
        payload: { id: 297802, title: 'Aquaman', genre_ids: [28, 14, 878, 12] },
      })
    ).toEqual(expectedState);
  });

  it('should remove favourite from existing favourite list', () => {
    const inputState = [
      { id: 23, title: 'Batman Begins', genre_ids: [28, 12, 878] },
      { id: 297802, title: 'Aquaman', genre_ids: [28, 14, 878, 12] },
    ];
    const expectedState = [
      { id: 297802, title: 'Aquaman', genre_ids: [28, 14, 878, 12] },
    ];
    expect(
      favouritesReducer(inputState, {
        type: FAVOURITE_REMOVE,
        payload: { id: 23, title: 'Batman Begins', genre_ids: [28, 12, 878] },
      })
    ).toEqual(expectedState);
  });
});
