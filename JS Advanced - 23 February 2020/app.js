function solve() {
   let buttonCreate = document.querySelector('.btn.create');
   buttonCreate.addEventListener('click', createArticle)
 
   function createArticle(e) {
      e.preventDefault();
      let author = document.getElementById('creator');
      let title = document.getElementById('title');
      let category = document.getElementById('category');
      let content = document.getElementById('content');
 
      if(areTheFieldsFilled(author, title, category, content)){
         generateArticleStructure(author, title, category, content);
      }
 
   }
 
   function remove(e) {
      e.target.parentElement.parentElement.remove();
   }
 
   function archive(e) {
      let titleArticle = e.target.parentElement.parentElement.querySelector('h1').textContent;
 
      let titleLI = document.createElement('li');
      titleLI.textContent = titleArticle;
 
      let archiveUl = document.querySelector('.archive-section ul');
      archiveUl.appendChild(titleLI);
 
      let sortedLi = Array.from(archiveUl.getElementsByTagName('li'))
         .sort((a, b) => (a.innerHTML).localeCompare(b.innerHTML));
 
      while (archiveUl.firstChild) {
         archiveUl.removeChild(archiveUl.firstChild);
      }
 
      for (const element of sortedLi) {
         archiveUl.appendChild(element);
      }
 
      remove(e);
   }
 
   function generateArticleStructure(author, title, category, content) {
      let newArticle = document.createElement('article');
      let newTitle = document.createElement('h1');
      newTitle.textContent = title.value;
      newArticle.appendChild(newTitle);
 
      let newPcategory = document.createElement('p');
      newPcategory.innerHTML += 'Category:';
      let newStrongCategory = document.createElement('strong');
      newStrongCategory.textContent = category.value;
      newPcategory.appendChild(newStrongCategory);
      newArticle.appendChild(newPcategory);
 
      let newPauthor = document.createElement('p');
      newPauthor.innerHTML += 'Creator:';
      let newStrongAuthor = document.createElement('strong');
      newStrongAuthor.textContent = author.value;
      newPauthor.appendChild(newStrongAuthor);
      newArticle.appendChild(newPauthor);
 
      let newPcontent = document.createElement('p');
      newPcontent.textContent = content.value;
      newArticle.appendChild(newPcontent);
 
      let newButtonsDiv = document.createElement('div');
      newButtonsDiv.classList.add('buttons');
 
      let newDelButton = document.createElement('button');
      newDelButton.classList.add('btn', 'delete');
      newDelButton.textContent = 'Delete';
      newDelButton.addEventListener('click', remove);
 
      let newArchiveButton = document.createElement('button');
      newArchiveButton.classList.add('btn', 'archive');
      newArchiveButton.textContent = 'Archive';
      newArchiveButton.addEventListener('click', archive);
 
      newButtonsDiv.appendChild(newDelButton);
      newButtonsDiv.appendChild(newArchiveButton);
 
      newArticle.appendChild(newButtonsDiv);
      document.querySelector('main section').appendChild(newArticle);
 
   }
 
   function areTheFieldsFilled(...fields) {
      return fields.filter(f => f.value.length > 0).length === fields.length;
   }
}
