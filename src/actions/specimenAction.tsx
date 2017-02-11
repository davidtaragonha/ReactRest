export const LOAD_SPECIMENS_SUCCESS = 'LOAD_SPECIMENS_SUCCESS';

export interface SpecimenActionI {
  type: string;
  specimens: Object;
}

export function loadSpecimensSuccess(specimens: Object): SpecimenActionI {
  return {type: LOAD_SPECIMENS_SUCCESS, specimens};
}
