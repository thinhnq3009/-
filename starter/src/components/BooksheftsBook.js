import Books from "./Books";

function BooksheftsBook({ shelf }) {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Books shelf={shelf}>
        </Books>
      </ol>
    </div>
  );
}
export default BooksheftsBook;
