export interface SpecimenViewI {
    id: number;
    name: string;
};

export interface SpecimenStateI {
    list: Array<SpecimenViewI>;
};

export interface StateI {
    specimen: SpecimenStateI;
};

export default {
  specimen: {
    list: []
  }
};
