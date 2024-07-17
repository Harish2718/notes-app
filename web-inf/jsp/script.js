//fetch and display
function fetchNotes() {
    fetch('FetchNotesServlet')
        .then(response => response.json())
        .then(notes => {
            const notesList = document.getElementById('notes-list');
            notesList.innerHTML = '';
            notes.forEach(note => {
                const noteDiv = document.createElement('div');
                noteDiv.classList.add('note');
                noteDiv.innerHTML = `
                    <h3>${note.title}</h3>
                    <p>${note.content}</p>
                    <div class="note-actions">
                        <button onclick="editNote(${note.id})">Edit</button>
                        <button onclick="deleteNote(${note.id})">Delete</button>
                    </div>
                `;
                notesList.appendChild(noteDiv);
            });
        });
}

//add a new note
document.getElementById('add-note-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('AddNoteServlet', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            fetchNotes();
            this.reset();
        } else {
            alert('Failed to add note');
        }
    });
});

//delete
function deleteNote(noteId) {
    fetch(`DeleteNoteServlet?id=${noteId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            fetchNotes();
        } else {
            alert('Failed to delete note');
        }
    });
}

//edit
function editNote(noteId) {
    fetch(`FetchNoteServlet?id=${noteId}`)
        .then(response => response.json())
        .then(note => {
            document.getElementById('edit-note-form').setAttribute('action', `EditNoteServlet?id=${noteId}`);
            document.querySelector('#edit-note-form input[name="title"]').value = note.title;
            document.querySelector('#edit-note-form textarea[name="content"]').value = note.content;
            // Show edit modal
            // Code to show modal will depend on your UI framework (e.g., Bootstrap modal)
        });
}

fetchNotes();
