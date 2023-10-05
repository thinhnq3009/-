import Bookshefts from "./Bookshefs";
import { useEffect, useState } from "react";
import BooksAPI, { getAll,update } from "../BooksAPI"

function Books({search,shelf}){

  // const ldq = document.querySelector("ldq").value;

  const [books,setBooks] = useState([])

  const handleShelfChange = (book, newShelf) => {
    update(book, newShelf)
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAll()
      .then((res) => {
        setBooks(res);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]); 
    

      
    // const bookShelf = books.filter((book) => book.shelf === shelf);
    const bookShelf = search != null ? search : books.filter((book) => book.shelf === shelf) ;

    return(
          <>
           {bookShelf.map((book) => (
            <div key={book.id}>

            <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:`url(${book.imageLinks.smallThumbnail})`,
                            }}
                          ></div>
                          <div className="book-shelf-changer">
                            <select className="ldq" value={book.shelf} onChange={(e) => handleShelfChange(book, e.target.value)}  >
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
          </div>

            </div>
          ))} 
          </>
          
    )
}
export default Books