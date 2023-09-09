
var container = document.querySelector('#container');


for(i = 0; i < 16; i++){

    var content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);

    for(j = 0; j < 16; j++){
        var sub_content = document.createElement('div');
        sub_content.classList.add('sub_content');
        sub_content.textContent = "a";
        content.appendChild(sub_content);
    
    }

    
}









 