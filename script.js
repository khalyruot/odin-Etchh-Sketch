
var container = document.querySelector('#container');


for(let i = 0; i < 16; i++){

    var content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);

    for(let j = 0; j < 16; j++){
        var sub_content = document.createElement('div');
        
       

        sub_content.classList.add('sub_content');
        sub_content.textContent = " ";
        content.appendChild(sub_content);

        
        
    }

    const box_hover = document.querySelectorAll('.sub_content');

    for(let k = 0; k < box_hover.length; k++){
        
        box_hover[k].onmouseenter = function(){mouseEnter()};
        function mouseEnter(){
            box_hover[k].style.backgroundColor ="red";
        }
    }


   
        
    
}













 