import { useState } from "react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

function Palindrome() {
  const [word, setWord] = useState("");
  const PalinCheck = useMemo(() => {
    return word === word.split("").reverse().join("");
  }, [word]);

  return (
    <>
      <Link to="/">
        <button className="button">◀ Back to home</button>
      </Link>
      <div className="screen">
        <div className="container">
          <div className="box2">
            <form>
              <div>
                <h2> Type in Word </h2>
                <input
                  className="input"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
              </div>
            </form>

            <div className="result4">Is this word a palindrome? </div>
            {word && (
              <>
                <div className="result2">{PalinCheck ? "Yes" : "No"}</div>
              </>
            )}
          </div>
        </div>
        <div className="imagebox">
          <img className="img1" src="/images/palindrome.png" />
        </div>
      </div>
    </>
  );
}

export default Palindrome;
