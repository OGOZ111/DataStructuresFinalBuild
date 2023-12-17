import { useRef } from "react";
import { useQueueState } from "rooks";
import { Link } from "react-router-dom";

function Queue() {
  const numberToPushRef = useRef(1);
  const [list, { enqueue, dequeue, peek, length }] = useQueueState([1]);

  function addToQueue() {
    numberToPushRef.current = numberToPushRef.current + 1;

    enqueue(numberToPushRef.current);
  }

  return (
    <>
      <Link to="/">
        <button className="button">◀ Back to home</button>
      </Link>
      <div className="screen">
        <div className="container">
          <div className="box2">
            <h1>Queue</h1>
            <div className="result2">
              {list.map((item) => {
                return <div key={item}>{item}</div>;
              })}
            </div>
            <div className="buttons">
              <button className="button" onClick={addToQueue}>
                enqueue
              </button>
              <button className="button" onClick={dequeue}>
                dequeue
              </button>
            </div>
            <p>Front of Queue : {peek()}</p>

            <p>Length of Queue : {length}</p>
          </div>
        </div>
        <div className="imagebox">
          <img className="img1" src="/images/Data_Queue.svg" />
        </div>
      </div>
    </>
  );
}

export default Queue;
