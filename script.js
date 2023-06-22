const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

const date = new Date();
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
document.getElementById("date").innerHTML = today.toDateString();
function time() {
    const data  = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();

    if(h < 10)
       h = "0" + h;
    if(m < 10)
       m = "0" + m;
    if(s < 10)
       s = "0" + s;

    document.getElementById("hour").innerHTML = h +":"+ m +":"+s;
    setTimeout('time()', 500);
}

function AddTask(){
    if (inputbox.value == '') {
        alert('You have to add something!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputbox.value = '';
    savedata();
}

listcontainer.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        savedata();
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata() {
    localStorage.setItem('data', listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem('data');
}
showTask();