const nameList = document.querySelector('.list');
const input = document.querySelector('input');
const button = document.querySelector('.addButton');
const counterNode = document.querySelector('.counter');
let counter = 0;
counterNode.textContent = counter;

input.addEventListener ('keyup', (e) => {
if (e.keyCode === 13) 
    {
button.click();
    }
})

button.addEventListener('click', () => {
  counterNode.textContent = ++counter;
  const li = document.createElement('li');
  const remove = document.createElement('button'); 
  const check = document.createElement('input');
  li.classList.add('newList');
  check.classList.add('checkbox');
  check.type = 'checkbox';
  check.addEventListener('click', function() {     
    this.nextElementSibling.classList.toggle('finish');
    this.parentNode.lastChild.remove();
  });

    remove.onclick = function(e) { 
    nameList.removeChild(li);
    counterNode.textContent = --counter;
  }
  
  remove.textContent = 'x';
  const itemInput = document.createElement('input')
  itemInput.value = input.value;
  itemInput.classList.add('text');
  // li.innerHTML = '<span>'+input.value+'</span>';
  li.appendChild(check);
  li.appendChild(itemInput);
  li.appendChild(remove);
  input.value = '';
  nameList.appendChild(li);
})