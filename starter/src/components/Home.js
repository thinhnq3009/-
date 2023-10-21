import ListBooks from "./ListBooks";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAll } from "../BooksAPI";

function Home() {
    const ListBooksTitle = ["Current Reading", "Want To Read", "Read"];
    const ListBooksShelf = ["currentlyReading", "wantToRead", "read"];
    const dataBooks = [
        {
            title: "Current Reading",
            shelf: "currentlyReading",
            books: [],
        },
        {
            title: "Want To Read",
            shelf: "wantToRead",
            books: [],
        },
        {
            title: "Read",
            shelf: "read",
            books: [],
        },
    ];

    const [listShelf, setListShelf] = useState(dataBooks);
    const [update, setUpdate] = useState(true); // state để update lại component ko có tác dụng gì chỉ để update lại component

    // Lấy hết sách lúc đầu tiên rồi set vào state
    useEffect(() => {
        getAll()
            .then((res) => {
                // res là mảng các sách
                const newListShelf = listShelf.map((shelf) => {
                    // shelf là object có chứa title, shelf, books

                    const newBooks = res.filter((book) => book.shelf === shelf.shelf); // lọc ra các sách có shelf trùng với shelf của shelf, book là data của api
                    return { ...shelf, books: newBooks };
                });
                setListShelf(newListShelf); // set lại state
            })
            .catch((error) => {
                console.log(error);
            });
    }, [update]);

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {listShelf.map((shelf, index) => (
                <ListBooks key={index} data={shelf} setter={[update, setUpdate]} />
            ))}
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}

export default Home;
