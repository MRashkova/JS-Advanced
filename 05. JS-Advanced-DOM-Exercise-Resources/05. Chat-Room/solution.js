function solve() {
   let divElementContainingMessages = document.getElementById('chat_messages');
   let button = document.getElementById('send');
 
   button.addEventListener('click', () => {
      let divElementMyMessage = document.getElementsByClassName('message my-message')[0];
      let newDivElementMyMessage = divElementMyMessage.cloneNode(true);
 
      newDivElementMyMessage.textContent = '';
      let inputElement = document.getElementsByTagName('textarea')[0];
 
      if (inputElement.value != undefined) {
         newDivElementMyMessage.textContent = inputElement.value;
         divElementContainingMessages.appendChild(newDivElementMyMessage);
      }
      inputElement.value = '';
   });
 
}
