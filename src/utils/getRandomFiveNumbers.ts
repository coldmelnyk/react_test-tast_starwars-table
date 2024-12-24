export const getRandomFiveNumbers = (from: number, to: number) => {
  const numbers: Array<number> = [];
  for (let i = 0; i < 5; i++) {
    const number = Math.floor(Math.random() * (to - from + 1)) + from;

    if (!numbers.includes(number)) {
      numbers.push(number);
    } else {
      i--;
    }
  }
  return numbers;
};