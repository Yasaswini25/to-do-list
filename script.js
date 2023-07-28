document.getElementById('btn').addEventListener('click',
function(){
    let input=document.getElementById('input').value;
    //creating list elements
    let elem=document.createElement('li');
    let btn1=document.createElement('button');
    let btn2=document.createElement('button');
    btn1.innerHTML="Done";
    btn2.innerHTML="Delete";
    elem.innerText=input;
    let ul=document.querySelector('ul');
    //appending the created elements to html
    ul.appendChild(elem);
    elem.appendChild(btn1);
    elem.appendChild(btn2);
    //adding style to button
    btn2.style.border="none";
    btn2.style.marginLeft="3%";
    btn2.style.borderRadius="2px";
    btn2.style.backgroundColor="#fff";
    btn2.style.padding="5px";
    
    btn1.style.border="none";
    btn1.style.marginLeft="3%";
    btn1.style.borderRadius="2px";
    btn1.style.backgroundColor="#fff";
    btn1.style.padding="5px";
//adding functionality to btn
btn1.addEventListener('click',
    function(){
        elem.style.textDecoration="line-through";
    }
    );
btn2.addEventListener('click',
        function(){
            elem.remove();
        }
        );
        document.getElementById('input').value="";
    }
    );