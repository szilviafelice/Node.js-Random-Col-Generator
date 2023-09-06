const randomColor = import('randomcolor');
const color = randomColor();

randomColor({
  luminosity: 'random',
  hue: 'random',
});
console.log(randomColor);

function randomColorBlock() {
  const blockSize = 31;
  const blockHeight = 9;
  const blockColor = randomColor();
}

const blockColor = randomColorBlock();
console.log(blockColor);
