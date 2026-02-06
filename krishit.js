// function challage 
// chanllage 1
 function getCelsius (f) {
  const celsius = ((f-32)*5);
  return celsius;
 }

console.log(getCelsius(45));

// challage 2 
function minMax(array) {
  const min = Math.min(...array);
  const max= Math.max(...array);
 return{
  min,
  max,
 };
}
 console.log(minMax([12,34,56,78,90]));