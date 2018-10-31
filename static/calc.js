
const flourP = 100;
const flourG = 1000;

function waterG(hydroGrams) {
  // Conversion from water percent to grams
  return (hydroGrams*flourG)/10;

}

function waterPercent(hydroPercent) {
  // Conversion from water grams to percent
  return (hydroPercent/flourG) * 100;
}

