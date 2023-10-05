import ListBooks from "./ListBooks";
import { Link } from "react-router-dom";

function Home() {
  const ListBooksTitle = ["Current Reading","Want To Read","Read"]
  const ListBooksShelf = ["currentlyReading","wantToRead","read"]
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {ListBooksTitle.map((title, index) => (
        <ListBooks key={index} title={title} shelf={ListBooksShelf[index]} />
      ))}
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Home;