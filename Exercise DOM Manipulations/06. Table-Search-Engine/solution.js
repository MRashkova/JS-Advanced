function solve() {
   let word = document.getElementById('searchField');
   
   document.getElementById('searchBtn').addEventListener('click', () => {
      [...document.querySelectorAll('tbody > tr')].forEach(row => {
         if (row.textContent.includes(word.value)) {
            row.className = 'select';
         }
      })
      word.value = '';
   })
}
