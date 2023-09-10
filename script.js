
var container = document.querySelector('#container');

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;


slider.oninput = function() {
  output.innerHTML = this.value;
  console.log("output" + output.innerHTML);
  for(let i = 0; i < output.innerHTML; i++){

    var content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);

    for(let j = 0; j < output.innerHTML; j++){
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




















 