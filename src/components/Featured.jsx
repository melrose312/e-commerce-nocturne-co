import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Book from "../ui/Book";

function Featured() {
  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <h2 className="setion__title">
            Featured <span className="red">Books</span>
          </h2>
          <div className="books">
            <Book />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
