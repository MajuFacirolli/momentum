const sendBtn = document.getElementById('send-btn');
const input = document.getElementById('text-field');
const noteList = document.getElementById('note-list');
const notes = JSON.parse(localStorage.getItem('notes')) || [];

loadNotesFromLocalStorage();

sendBtn.addEventListener('click', () => {
    const newNoteText = input.value || "----";
    createNewNote(newNoteText);
    notes.push(newNoteText);
    
    saveNoteToLocalStorage();
    
    if(window.innerWidth < 500) {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
})

function createNewNote(noteText) {
    const newItem = document.createElement('li');
    newItem.classList.add('note');
    newItem.innerText = noteText;
    
    noteList.appendChild(newItem);
   
    newItem.addEventListener('click', () => {
        removeNote(newItem);
    })

    input.value = '';
}

function saveNoteToLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function removeNote(note) {
    noteList.removeChild(note);
    //update localStorage
    const noteText = note.innerText;
    const index = notes.indexOf(noteText);
    notes.splice(index, 1);
    saveNoteToLocalStorage();
}

function loadNotesFromLocalStorage() {
    notes.forEach(noteText => {
        createNewNote(noteText)
    })
}