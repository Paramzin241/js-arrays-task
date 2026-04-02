// BEGIN
const getSuperSeriesWinner = (massiv) => {
  let winUSSR = 0;
  let winCanada = 0;
  
  for (const [canada, ussr] of massiv) {
    if (canada > ussr) winCanada++;
    else if (canada < ussr) winUSSR++;
  }
  
  if (winCanada > winUSSR) return 'canada';
  if (winUSSR > winCanada) return 'ussr';
  return null;
};

export default getSuperSeriesWinner;
// END
