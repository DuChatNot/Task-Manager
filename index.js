const add = document.getElementById('addTask');
const input = document.getElementById('taskInput');
const ts = document.getElementById('taskSec');
const date = document.getElementById('date')
const taskLength = document.getElementById('taskLength')

let c = 0;

add.onclick = () => addTask();

function addTask () {
    c++;
    const id = input.value.toString();
    const newTask = document.createTextNode(input.value);

    if(c < 11) {
        const art = document.createElement('article')
        const btnSec = document.createElement('article')
        btnSec.setAttribute('id','btnSec')
        
        taskLength.innerText = 'Tasks: ' + c + '/10'
    
        const btn = document.createElement('button');
        btn.setAttribute('class','removeTask');

        const btnText = document.createTextNode('😫');
        btn.appendChild(btnText);
        
        art.setAttribute('id',id);
        art.setAttribute('class','taskArticle');
        art.appendChild(btnSec);
        art.appendChild(newTask);
        btnSec.appendChild(btn);
        ts.appendChild(art)
        input.value = '';

        btn.onclick = () => removeTask(id);
    } else {
        alert('Task list full!')
        input.value = '';
        c = 10;
    }    
}

function removeTask(id) {
    document.getElementById(id).remove();
    c--;
    taskLength.innerText = 'Tasks: ' + c + '/10'
}

function clock () {
    let clock = new Date();
    let time = clock.toString();
    date.innerText = time.slice(0,25)
}
setInterval(() => clock() ,1000);

