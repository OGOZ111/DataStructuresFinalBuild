import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Datastructures REACT23s</h1>
          <div></div>

          <div className="buttons">
            <Link to="palindrome">
              <button className="button">Palindrome Check</button>
            </Link>

            <Link to="/merge">
              <button className="button">Merge Sort</button>
            </Link>
            <Link to="/insert">
              <button className="button">Insert Sort</button>
            </Link>

            <Link to="/bubble">
              <button className="button">Bubble Sort</button>
            </Link>
            <Link to="/quick">
              <button className="button">Quick Sort</button>
            </Link>
            <Link to="/queue">
              <button className="button">Queue Data</button>
            </Link>

            <Link to="/stack">
              <button className="button">Stack LIFO</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
