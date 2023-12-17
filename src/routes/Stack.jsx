import { useRef } from "react";
import { useStackState } from "rooks";
import { Link } from "react-router-dom";

function Stack() {
  const numberToPushRef = useRef(0);
  const [list, { push, pop, peek, length }, listInReverse] = useStackState([]);

  function addToStack() {
    numberToPushRef.current = numberToPushRef.current + 1;
    push(numberToPushRef.current);
  }

  return (
    <>
      <Link to="/">
        <button className="button">◀ Back to home</button>
      </Link>
      <div className="screen">
        <div className="container">
          <div className="box2">
            <h1>Stack LIFO (Last In First Out)</h1>
            <div className="buttons">
              <button className="button" onClick={addToStack}>
                Push
              </button>
              <button className="button" onClick={pop}>
                Pop
              </button>
            </div>
            <div>
              {listInReverse.map((item) => {
                return (
                  <div className="result" key={item}>
                    {item}
                  </div>
                );
              })}
            </div>

            <p className="text">Last In, First out will be : {peek()}</p>

            <p className="text">Stack Size : {length}</p>
          </div>
        </div>
        <div className="imagebox">
          <img className="img1" src="/images/stack.svg" />
        </div>
      </div>
    </>
  );
}

export default Stack;
