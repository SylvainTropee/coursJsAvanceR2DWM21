//déclarations

const trouser = 'jean';
let size = 42;

let clothes = ['dress', 'short', 't-shirt', 'bob'];

console.group("Habits")
console.log(trouser);
console.log(size);
console.table(clothes);

console.log(typeof trouser);
console.log(typeof size);

console.groupEnd()

////////////////////////////////

//structures de codes

for(let i= 0; i < clothes.length; i++){
  console.log(clothes[i]);
}
console.log("-------------");
for (const clothe of clothes) {
  console.log(clothe);
}
console.log("-------------");
clothes.forEach(
  function(value, index){
    console.log(`Index : ${index} -> ${value}`);
    // console.log(this);
  }
)
console.log("-------------");
clothes.forEach(
  (value, index) => {
    console.log(`Index : ${index} -> ${value}`);
    // console.log(this);
  }
)


//functions
function getClothe(index){
  return clothes[index];
}
//anonyme
const getClothe2 = function(index){
  return clothes[index];
}
console.log(getClothe2(3));





















