const sendBtn = document.getElementById('send-btn');
const input = document.getElementById('text-field');
const noteList = document.getElementById('note-list');
//var notes = [];
 
sendBtn.addEventListener('click', () => {
    createNewNote();
})

function createNewNote() {
    const newItem = document.createElement('li');
    newItem.classList.add('note');

    if(input.value) {
        newItem.innerText = input.value;
    }
    else {
        newItem.innerText = '----';
    }

    noteList.appendChild(newItem);

    //notes.push(newItem);
    
    newItem.addEventListener('click', () => {
        removeNote(newItem);
    })

    input.value = '';
}

function removeNote(note) {
    noteList.removeChild(note);

    /*const index = notes.indexOf(note);
    notes.splice(index, 1);
    console.log(notes)*/
}