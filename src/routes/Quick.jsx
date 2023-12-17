import { useState } from "react";
import { Link } from "react-router-dom";

const Quick = () => {
  const [numbers, setNumbers] = useState([
    753, 68, 195, 3, 98, 574, 333, 250, 47,
  ]);

  const randomizeArray = () => {
    const newArray = [...numbers].sort(() => Math.random() - 0.5);
    setNumbers(newArray);
  };

  const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
  };

  const handleSort = () => {
    const sortedNumbers = quickSort(numbers.slice());
    setNumbers(sortedNumbers);
  };

  return (
    <>
      <Link to="/">
        <button className="button">◀ Back to home</button>
      </Link>
      <h1 className="nametime">Quick Sort - </h1>
      <div className="screen">
        <div className="container">
          <div className="box2">
            <div className="buttons">
              <button className="button" onClick={handleSort}>
                Quick Sort
              </button>
              <button className="button" onClick={randomizeArray}>
                Shuffle Numbers
              </button>
            </div>
            <p className="result1">{numbers.join(", ")}</p>
          </div>
        </div>
        <div className="imagebox">
          <img className="img1" src="/images/quickpic.svg" />
        </div>
      </div>
    </>
  );
};

export default Quick;
