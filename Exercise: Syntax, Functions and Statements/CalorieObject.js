function solve(arr) {

   let reg = {}
   for (let i = 0; i < arr.length; i++) {
       if (i % 2 !== 0) {
           reg[arr[i - 1]] = Number(arr[i]);
       }
   }
   return reg;
   console.log(reg);
}
