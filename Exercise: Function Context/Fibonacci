function getFibonator() {
   let currentNum = 0;
   let nextNum = 1;

   return () => {
      let fibNum = currentNum + nextNum;
      currentNum = nextNum;
      nextNum = fibNum;

      return currentNum;
   }
}
