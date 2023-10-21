export const indexOfAll = (arr: any[], val: any) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
