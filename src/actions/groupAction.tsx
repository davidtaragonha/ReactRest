import axios from 'axios';

export const LOAD_GROUPS = 'LOAD_GROUPS';

export interface GroupViewI {
    id: number;
    title: string;
};

export interface GroupActionI {
  type: string;
  groups?: Array<GroupViewI>;
}

export function loadGroups(): Function {
  return (dispatch: Function, getState: Function) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        dispatch({type: LOAD_GROUPS, groups: response.data});
      });
  };
}
