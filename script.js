var container = document.querySelector('#container')

function creatGrid4x4(){
    
    for(let i = 0; i < 4; i++){

        var content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
    
    
        for(let j = 0; j < 4; j++){
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
    
}

function creatGrid8x8(){
    
    for(let i = 0; i < 8; i++){

        var content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
    
    
        for(let j = 0; j < 8; j++){
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
    
}

function creatGrid16x16(){
    
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
    
}

const fourBYfour = document.getElementById("fourBYfour");
const eightBYeight = document.getElementById("eightBYeight");
const sixteenBYsixteen = document.getElementById("sixteenBYsixteen");

fourBYfour.addEventListener("click", function(){

   creatGrid4x4();
     
});
  
eightBYeight.addEventListener("click", function(){

    creatGrid8x8();
      
 });

sixteenBYsixteen.addEventListener("click", function(){

    creatGrid16x16();
      
});





   
 