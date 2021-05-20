import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodoAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

const URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(URL);

    dispatch<FetchTodoAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
