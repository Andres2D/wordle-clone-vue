export const getRandomNumber = (maxLimit: number): number => {
  const byteArray = new Uint8Array(1);
  window.crypto.getRandomValues(byteArray);
  let randomNum = Number('0.' + byteArray[0].toString());
  randomNum = Math.floor(randomNum * (maxLimit + 1));
  return randomNum;
}
