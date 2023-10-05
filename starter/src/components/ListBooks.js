import Bookshefts from "./Bookshefs";
function ListBooks({shelf,title}){
    return(
        <div className="list-books-content">
            <div>
              <Bookshefts title={title} shelf={shelf}  />
            </div>
          </div>
    )
}
export default ListBooks