import axios from 'axios';

export const LOAD_SPECIMENS = 'LOAD_SPECIMENS';

export interface SpecimenViewI {
    id: number;
    name: string;
};

export interface SpecimenActionI {
  type: string;
  specimens?: Array<SpecimenViewI>;
}

export function loadSpecimens(): Function {
  return (dispatch: Function, getState: Function) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch({type: LOAD_SPECIMENS, specimens: response.data});
      });
  };
}
