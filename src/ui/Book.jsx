import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Book() {
  return (
    <div className="book">
              <a href="">
                <figure className="book__img--wrapper">
                  <img src="https://m.media-amazon.com/images/I/61+upnDoWUL._SL1429_.jpg" />
                </figure>
              </a>
              <div className="book__title">
                <a href="/" className="book__title--link">
                  The Complete Fiction of H. P. Lovecraft
                </a>
              </div>
              <div className="book__ratings">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star-half-alt" />
              </div>
              <div className="book price">
                <span className="book__price--normal">$15.00</span>
                $10.00
              </div>
            </div>
  )
}

export default Book
