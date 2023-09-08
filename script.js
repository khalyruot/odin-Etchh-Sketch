
const container = document.querySelector('#container');


for(i = 0; i < 16; i++){
    
    var content = document.createElement('div');
    content.classList.add('content');
    content.textContent = i;
    container.appendChild(content);

}



 