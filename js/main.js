
var salaries = [
 {
  name: "Akmal",
  summ: 1200
 },
 {
  name: "Karim",
  summ: 1800
 }
 ]

 
function sumSalaries(a) {
 var all=0
 a.forEach(element => {
  all+=element.summ
 });

 return  all;
}

console.log(sumSalaries(salaries));