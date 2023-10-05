import BooksheftsBook from "./BooksheftsBook";

function Bookshefts({title,shelf}){

    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
              <BooksheftsBook shelf={shelf} />
              </div>
    )
}
export default Bookshefts