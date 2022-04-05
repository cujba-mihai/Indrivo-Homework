// 1. Array.reduce (shortest)
const findBestMatch = (numToSearch, arr) => arr.reduce((a, b) => Math.abs(a - numToSearch) > Math.abs(b - numToSearch) ? b : a);

// 2. Recursion
let closestNumber = 0;
export const findMatch = (numToSearch, arr) => {
  if (!arr.length) return closestNumber;

  const currentNumber = arr.pop();

  if (Math.abs(currentNumber - numToSearch) < Math.abs(closestNumber - numToSearch)) {
    closestNumber = currentNumber;
  }


  return findMatch(numToSearch, arr);
}



export default findBestMatch;

