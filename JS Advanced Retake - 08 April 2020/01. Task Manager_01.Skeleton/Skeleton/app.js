//Preparation - May 2020
//exam preparation Tuesday
//Problem 1. Task Manager

function solve() {
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let dueDate = document.getElementById('date');

    let addBtn = document.getElementById('add');
    let openSection = document.getElementsByTagName('section')[1];
    let divOpenSection = openSection.getElementsByTagName('div')[1];

    let inProgressSection = document.getElementsByTagName('section')[2];
    let divInProgressSection = inProgressSection.getElementsByTagName('div')[1];

    let completeSection = document.getElementsByTagName('section')[3];
    let divCompleteSections = completeSection.getElementsByTagName('div')[1];

        addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (task.value !== '' && description.value !== '' && dueDate.value !== '' ) {
                let article = document.createElement('article');
                divOpenSection.appendChild(article);

                let heather3 = document.createElement('h3');
                article.appendChild(heather3);
                heather3.textContent = `${task.value}`;

                let descriptionPar = document.createElement('p');
                article.appendChild(descriptionPar);
                descriptionPar.textContent = `Description: ${description.value}`;

                let datePar = document.createElement('p');
                article.appendChild(datePar);
                datePar.textContent = `Due Date: ${dueDate.value}`;

                let flexDivArticle = document.createElement('div');
                article.appendChild(flexDivArticle);
                flexDivArticle.className = 'flex';

                let startBtn = document.createElement('button');
                flexDivArticle.appendChild(startBtn);
                startBtn.className = 'green';
                startBtn.textContent = 'Start';

                let stopBtn = document.createElement('button');
                flexDivArticle.appendChild(stopBtn);
                stopBtn.classList = 'red';
                stopBtn.textContent = 'Delete';

                task.value = '';
                description.value = '';
                dueDate.value = '';

                stopBtn.addEventListener('click', (e) => {
                    e.preventDefault();

                    article.remove();
                })

                startBtn.addEventListener('click', (e) => {
                e.preventDefault();

                article.remove();

                let article2 = document.createElement('article');
                divInProgressSection.appendChild(article2);

                let h3 = document.createElement('h3');
                article2.appendChild(h3);
                h3.textContent = `${heather3.textContent}`;

                let descriptionPar2 = document.createElement('p');
                article2.appendChild(descriptionPar2);
                descriptionPar2.textContent = `${descriptionPar.textContent}`;

                let datePar2 = document.createElement('p');
                article2.appendChild(datePar2);
                datePar2.textContent = `${datePar.textContent}`;

                let flexDivArticle2 = document.createElement('div');
                article2.appendChild(flexDivArticle2);
                flexDivArticle2.className = 'flex';

                let deleteBtn = document.createElement('button');
                flexDivArticle2.appendChild(deleteBtn);
                deleteBtn.classList = 'red';
                deleteBtn.textContent = 'Delete';

                let finishBtn = document.createElement('button');
                flexDivArticle2.appendChild(finishBtn);
                finishBtn.className = 'orange';
                finishBtn.textContent = 'Finish';

                deleteBtn.addEventListener('click', (e) => {
                    e.preventDefault();

                    article2.remove();
                });

                finishBtn.addEventListener('click', (e) => {
                    e.preventDefault();

                    article2.remove();

                    let article3 = document.createElement('article');
                    divCompleteSections.appendChild(article3);

                    let h3finished = document.createElement('h3');
                    article3.appendChild(h3finished);
                    h3finished.textContent = `${h3.textContent}`;

                    let descriptionPar3 = document.createElement('p');
                    article3.appendChild(descriptionPar3);
                    descriptionPar3.textContent = `${descriptionPar2.textContent}`;

                    let datePar3 = document.createElement('p');
                    article3.appendChild(datePar3);
                    datePar3.textContent = `${datePar2.textContent}`;
                })
               
            })
        }
    })

}
