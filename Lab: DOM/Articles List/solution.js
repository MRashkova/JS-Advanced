function createArticle() {
	
	let titleInputElement = document.getElementById('createTitle');
	let contentInputElement = document.getElementById('createContent');
	
	let headingElement = document.createElement('h3');
	let contentElement = document.createElement('p');

	if(titleInputElement.value !== '' && contentInputElement.value !== '') {

	headingElement.innerHTML = titleInputElement.value;
	titleInputElement.value = '';
	
	contentElement.innerHTML = contentInputElement.value;
	contentInputElement.value = '';

	let articleElement = document.createElement('article');
	articleElement.appendChild(headingElement);
	articleElement.appendChild(contentElement);

	let articleSection = document.getElementById('articles');
	articleSection.appendChild(articleElement);
	}

}
