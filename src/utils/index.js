export function copyToClipboard(text) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}


export function getRandomElements(arr, count) {
  if (count > arr.length) {
    throw new Error("Count exceeds the array length");
  }

  // Make a shallow copy of the array to avoid modifying the original array
  let arrayCopy = arr.slice();
  let result = [];

  for (let i = 0; i < count; i++) {
    // Generate a random index within the range of the remaining elements
    let randomIndex = Math.floor(Math.random() * arrayCopy.length);

    // Add the element at the random index to the result array
    result.push(arrayCopy[randomIndex]);

    // Remove the element from the copy to avoid picking it again
    arrayCopy.splice(randomIndex, 1);
  }

  return result;
}

export function shuffleArray(array) {
  // Make a shallow copy of the array to avoid modifying the original array
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the elements at indices i and j
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
