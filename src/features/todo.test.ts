import { describe, expect, it } from 'vitest';
import { add, remove, update, removeAll } from './todo';

describe('todoSlice action creators', () => {

  it('add action creator', () => {
    const title = 'Test todo';
    const action = add({title});
    expect(action.type).toBe('todo/add'); 
    expect(action.payload.title).toBe(title);
  });

  it('remove action creator', () => {
    const id = '123';
    const action = remove({id});
    expect(action.type).toBe('todo/remove');
    expect(action.payload.id).toBe(id);
  });

  it('update action creator', () => {
    const id = '123';
    const title = 'Updated title';
    const isDone = true;
    const action = update({id, todo: {title, isDone}});
    expect(action.type).toBe('todo/update');
    expect(action.payload.id).toBe(id);
    expect(action.payload.todo).toEqual({title, isDone});
  });

  it('removeAll action creator', () => {
    const action = removeAll();
    expect(action.type).toBe('todo/removeAll');
  });
});