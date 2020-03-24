export const deepCloneHandler = arr => {
  return JSON.parse(JSON.stringify(arr));
};

export const hasOwnProperty = () => Object.prototype.hasOwnProperty.call;