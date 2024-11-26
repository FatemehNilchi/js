document.addEventListener('DOMContentLoaded', () => {
  const addNoteBtn = document.getElementById('add-note-btn');
  const notesContainer = document.getElementById('notes-container');
  const customMenu = document.getElementById('custom-menu');
  let copiedText = '';

  // Load notes from localStorage
  const loadNotes = () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => createNoteElement(note.text));
  };

  // Save notes to localStorage
  const saveNotes = () => {
    const notes = [...notesContainer.querySelectorAll('.note')].map(note => ({
      text: note.textContent,
    }));
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  // Create a new note
  const createNoteElement = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');
    note.textContent = text;
    note.setAttribute('contenteditable', 'true');

    note.addEventListener('blur', saveNotes);
    note.addEventListener('dblclick', () => {
      note.remove();
      saveNotes();
    });

    notesContainer.appendChild(note);
  };

  // Add a new note
  addNoteBtn.addEventListener('click', () => createNoteElement());

  // Context menu
  document.addEventListener('contextmenu', e => {
    e.preventDefault();
    const { pageX, pageY } = e;
    customMenu.style.left = `${pageX}px`;
    customMenu.style.top = `${pageY}px`;
    customMenu.style.display = 'block';
  });

  document.addEventListener('click', () => {
    customMenu.style.display = 'none';
  });

  customMenu.addEventListener('click', e => {
    const action = e.target.dataset.action;
    if (action === 'copy') {
      copiedText = window.getSelection().toString();
    } else if (action === 'paste' && copiedText) {
      createNoteElement(copiedText);
      copiedText = '';
    }
  });

  // Scroll events
  window.addEventListener('scroll', () => {
    console.log('Scrolling...', window.pageXOffset, window.pageYOffset);
  });

  // Drag and drop
  notesContainer.addEventListener('dragstart', e => {
    if (e.target.classList.contains('note')) {
      e.dataTransfer.setData('text', e.target.outerHTML);
    }
  });

  notesContainer.addEventListener('dragover', e => e.preventDefault());

  notesContainer.addEventListener('drop', e => {
    e.preventDefault();
    const droppedHTML = e.dataTransfer.getData('text');
    notesContainer.insertAdjacentHTML('beforeend', droppedHTML);
    saveNotes();
  });

  // Load notes on start
  loadNotes();
});