var container = document.querySelector('.grid_area');

function creatGrid4x4(){
    
    for(let i = 0; i < 4; i++){

        var content4x4_row = document.createElement('div');
        content4x4_row.classList.add('content');
        container.appendChild(content4x4_row);
    
        for(let j = 0; j < 4; j++){
            var content4x4_column = document.createElement('div');
            content4x4_column.textContent = " ";
            content4x4_row.appendChild(content4x4_column);
            content4x4_column.classList.add('sub_content');
            
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

        var content8x8_row = document.createElement('div');
        content8x8_row.classList.add('content');
        container.appendChild(content8x8_row);
    
    
        for(let j = 0; j < 8; j++){
            var content8x8_column = document.createElement('div');
            content8x8_column.textContent = " ";
            content8x8_row.appendChild(content8x8_column);
            content8x8_column.classList.add('sub_content');
            
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

        var content16x16_row = document.createElement('div');
        content16x16_row.classList.add('content');
        container.appendChild(content16x16_row);
    
    
        for(let j = 0; j < 16; j++){
            var content16x16_column = document.createElement('div');
            content16x16_column.textContent = " ";
            content16x16_row.appendChild(content16x16_column);
            content16x16_column.classList.add('sub_content');
            
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

function handleClick(buttonId){
   
    if(buttonId ==='a'){  
        creatGrid4x4();
        console.log('a');
    }
    else if(buttonId ==='b'){
        creatGrid8x8();
        console.log('b');
    }
    else if(buttonId ==='c'){
        creatGrid16x16();
        console.log('c');
    }
    if(buttonId === 'reset'){
        location.reload();
    }
   
    
}






   
 