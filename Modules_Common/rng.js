
//returns low to high inclusive
function rng(low, high) {

  var minCeiled = Math.ceil(low);
  var maxFloored = Math.floor(high);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

}

//returns random true false
function rngTF() {
  if(rng(0,1) == 1) return true;
  else return false;
}

//bellcurve random
function gaussianRandom(mean, stdev) {
    // Standard Normal variate using Box-Muller transform.
    const u = 1 - Math.random(); // Converting [0,1) to (0,1]
    const v = Math.random();
    const z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    // Transform to the desired mean and standard deviation:
    return z * stdev + mean;
}

//bellcurve random between low and high inclusive
function rngGaus(low, high, stdev) {
  var a;
  do {
    a = gaussianRandom((low+high)/2, stdev);
    a = Math.floor(a);
  } while(a < low || a > high);

  return a;
}
