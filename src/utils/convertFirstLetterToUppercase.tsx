/* eslint-disable no-plusplus */
// eslint-disable-next-line import/prefer-default-export
export const convertFirstLetterToUppercase = (str: string | undefined) => {
  if (typeof str === "string") {
    const strToLowerCase = str.toLowerCase();
    const arr = strToLowerCase.split(" ");

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const output = arr.join(" ");

    return output;
  }
  return str;
};
