/*
PSEUDO
- get input: degreesF or degreesC
- convert them using formula
  - ctof: C * 9 / 5 + 32
  - ftoc: (F-32) * 5 / 9
- round the result to 1 decimal
  - toFixed(1) -> doesn't round up 5 tho
  - so use alternative:
    - Math.round(num*10)/10
      - shifts 1 decimal place to right
      - rounds to nearest int
      - then shift decimal back
*/
function roundTo1 (num) { // rounds to 1 decimal place
  return Math.round(num * 10) / 10;
}

const ftoc = function(farenheit) {
  const celsius = (farenheit-32) * 5/9;
  return roundTo1(celsius);
};

const ctof = function(celsius) {
  const farenheit = celsius * 9/5 + 32;
  return roundTo1(farenheit);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
