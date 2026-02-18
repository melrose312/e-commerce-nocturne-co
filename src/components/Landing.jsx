import HeaderImg from "../assets/cat-coffee-book.png"

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Welcome to Nocturne & Co.</h1>
            <h2>
              Find your next <span className="red">Haunting</span> Read
            </h2>
            <a href="#features">
                <button className="btn">Browse books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={ HeaderImg } alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
}

export default Landing;
