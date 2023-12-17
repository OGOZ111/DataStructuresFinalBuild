import { useState } from "react";
import { Link } from "react-router-dom";

const Merge = () => {
  const [numbers, setNumbers] = useState([
    753, 68, 195, 3, 98, 574, 333, 250, 47,
  ]);

  const randomizeArray = () => {
    const newArray = [...numbers].sort(() => Math.random() - 0.5);
    setNumbers(newArray);
  };

  const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  };

  const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  const handleSort = () => {
    const sortedNumbers = mergeSort(numbers.slice());
    setNumbers(sortedNumbers);
  };

  return (
    <>
      <Link to="/">
        <button className="button">◀ Back to home</button>
      </Link>
      <h1 className="nametime">Merge Sort - O(n log n)</h1>
      <div className="screen">
        <div className="container">
          <div className="box2">
            <div className="buttons">
              <button className="button" onClick={handleSort}>
                Merge Sort
              </button>
              <button className="button" onClick={randomizeArray}>
                Shuffle Numbers
              </button>
            </div>
            <p className="result1">{numbers.join(", ")}</p>
          </div>
        </div>
        <div className="imagebox">
          <img className="img1" src="/images/mergediagram.avif" />
        </div>
      </div>
    </>
  );
};

export default Merge;
