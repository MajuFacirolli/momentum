const sendBtn = document.getElementById('send-btn');
const input = document.getElementById('text-field');
const noteList = document.getElementById('note-list');
const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

loadNotesFromLocalStorage();

sendBtn.addEventListener('click', () => {
    createNewNote();
    
    if(window.innerWidth < 500) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
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

    saveNoteToLocalStorage(newItem);
    
    newItem.addEventListener('click', () => {
        removeNote(newItem);
    })

    input.value = '';
}

function saveNoteToLocalStorage(note) {
    existingNotes.push(note.innerText);
    localStorage.setItem('notes', JSON.stringify(existingNotes));
}

function removeNote(note) {
    noteList.removeChild(note);
    //update localStorage
    const index = existingNotes.indexOf(note.innerText);
    existingNotes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(existingNotes));
}

function loadNotesFromLocalStorage() {
    existingNotes.forEach(noteText => {
        const newItem = document.createElement('li');
        newItem.classList.add('note');
        newItem.innerText = noteText;
    
        noteList.appendChild(newItem);
    
        newItem.addEventListener('click', () => {
            removeNote(newItem);
        })
    })
}