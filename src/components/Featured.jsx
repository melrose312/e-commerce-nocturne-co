import Book from "./ui/Book";
import { books } from "../data";

function Featured() {
  console.log(books);
  console.log();
  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <h2 className="setion__title">
            Featured <span className="red">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
