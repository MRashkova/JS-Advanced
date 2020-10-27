function create(words) {
   let content = document.getElementById('content');
   
   words.forEach(word => {
      let div = document.createElement('div');
      content.appendChild(div);

      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';

      div.addEventListener('click', () => {
         paragraph.style.display = "block";
      })

      div.appendChild(paragraph);
      // paragraph.style.display = "none";

      // paragraph.addEventListener('click')
   });


   
}
