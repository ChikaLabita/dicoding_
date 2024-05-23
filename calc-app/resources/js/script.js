document.addEventListener('DOMContentLoaded', () => {
    const bookListForm = document.getElementById('book-list-form');
    
    const unfinishedCard = document.getElementById('unfinished-card');
    const unfinishedReadBook = document.getElementById('unfinished-read-book');
    const finishedCard = document.getElementById('finished-card');
    const finishedReadBook = document.getElementById('finished-read-book');
    
    const editBookModal = document.getElementById('edit-book-modal');
    const editTitle = document.getElementById('edit-title');
    const editAuthor = document.getElementById('edit-author');
    const editYear = document.getElementById('edit-year');
    const saveEditBook = document.getElementById('save-edit');
    const closeEditBookModal = document.getElementById('close-edit-book-modal');

    const search = document.getElementById('search');
    const searchBookCard = document.getElementById('search-book-card');
    const bookNotFound = document.getElementById('book-not-found');

    let books = JSON.parse(localStorage.getItem('books')) || [];

    function saveBook() {
        localStorage.setItem('books', JSON.stringify(books));
    }

    function displayBook() {
        const searchBook = search.value.trim().toLowerCase();
        const filterBook = books.filter(book => {
            const searchTermBook= searchBook.toLowerCase();

            if (book.title && book.author && book.year) {
                return book.title.toLowerCase().includes(searchTermBook) || book.author.toLowerCase().includes(searchTermBook) || book.year.toString().includes(searchTermBook);
            }
        });

        unfinishedReadBook.innerHTML = '';
        finishedReadBook.innerHTML = '';

        if (filterBook.length === 0) {
            bookNotFound.style.display = 'block';
        } else {
            bookNotFound.style.display = 'none';

            filterBook.forEach(book => {
                const div = document.createElement('div');
                div.className = "div-book";
                div.innerHTML = `<h3>${book.title} </h3>
                <p>${book.author}</p>
                <p>${book.year}</p>`;

                const editBookButton = document.createElement('button');
                editBookButton.className = "edit-book-btn";
                editBookButton.innerHTML = '<i class="fa fa-edit"></i> Edit';
                editBookButton.addEventListener('click', () => editbookModal(book));

                const deleteBookButton = document.createElement('button');
                deleteBookButton.className = "delete-book-btn";
                deleteBookButton.innerHTML = '<i class="fa fa-trash"></i> Hapus';
                deleteBookButton.addEventListener('click', () => deleteBook(book.id));

                const finishBookButton = document.createElement('button');
                finishBookButton.className = "finish-book-btn";
                finishBookButton.innerHTML = book.isComplete ? '<i class="fas fa-check-circle"></i> Selesai dibaca' : '<i class="fa-regular fa-circle"></i> Belum selesai dibaca';
                finishBookButton.addEventListener('click', () => popupFinish(book.id));

                div.appendChild(editBookButton);
                div.appendChild(deleteBookButton);
                div.appendChild(finishBookButton);

                if (book.isComplete) {
                    finishedReadBook.appendChild(div);
                } else {
                    unfinishedReadBook.appendChild(div);
                }
            });
        }

        if (books.length === 0) {
            unfinishedCard.style.display = 'none';
            finishedCard.style.display = 'none';
            searchBookCard.style.display = 'none';
            bookNotFound.style.display = 'none';
        } else {
            unfinishedCard.style.display = 'block';
            finishedCard.style.display = 'block';
            searchBookCard.style.display = 'block';
        }
    }

    function addBook(thisTitle, thisAuthor, thisYear) {
        const id = +new Date();
        const year = parseInt(thisYear);
        const isCompleteRead = document.getElementById('isComplete').checked;
        books.push({id, title: thisTitle, author: thisAuthor, year, isComplete: isCompleteRead });
        saveBook();
        displayBook();
    }

    function deleteBook(id) {
        if (confirm('Apakah anda yakin akan menghapus buku ini? ')) {
            books = books.filter(books => books.id !== id);
            saveBook();
            displayBook();
        }
    }

    function editbookModal(book) {
        editTitle.value = book.title;
        editAuthor.value = book.author;
        editYear.value = book.year;
        editBookModal.style.display = 'block';

        saveEditBook.onclick = () => {
            const newTitle = editTitle.value.trim();
            const newAuthor = editAuthor.value.trim();
            const newYear = parseInt(editYear.value.trim());

            if (newTitle !== '' && newAuthor !== '' && newYear !== '') {
                book.title = newTitle;
                book.author = newAuthor;
                book.year = newYear;
                saveBook();
                displayBook();
                editBookModal.style.display = 'none';
            } else {
                alert('Pastikan seluruh form telah terisi!');
            }
        }
    }

    function popupFinish(id) {
        const book = books.find(book => book.id === id);
        const messConfirm = book.isComplete ? 'Apakah anda belum selesai membaca buku ini?' : 'Apakah anda sudah selesai membaca buku ini?';
        if (confirm(messConfirm)) {
            book.isComplete = !book.isComplete;
            saveBook();
            displayBook();
        }
    }

    bookListForm.addEventListener('submit', event => {
        event.preventDefault();
        const bookTitle = document.getElementById('title');
        const bookAuthor = document.getElementById('author');
        const bookYear = document.getElementById('year');

        const newTitle = bookTitle.value.trim();
        const newAuthor = bookAuthor.value.trim();
        const newYear = parseInt(bookYear.value.trim());

        if (newTitle !== '' && newAuthor !== '' && newYear !== '') {
            addBook(newTitle, newAuthor, newYear);
            bookTitle.value = '';
            bookAuthor.value = '';
            bookYear.value = '';
        } else {
            alert('Maaf, silahkan isi seluruh form!');
        }
    });

    closeEditBookModal.addEventListener('click', () => {
        editBookModal.style.display = 'none';
    });

    window.onclick = event => {
        if (event.target == editBookModal) {
            editBookModal.style.display = 'none';
        }
    };

    search.addEventListener('input', () => {
        displayBook();
    });

    displayBook();

});