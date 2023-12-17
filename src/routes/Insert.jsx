import { useState } from "react";
import { Link } from "react-router-dom";

function Insert() {
  const [name, setName] = useState("");
  const [numbers, setNumbers] = useState([]);

  //console.log(numbers)
  const arr = numbers;

  function reset() {
    setName("");
  }

  function clear() {
    setNumbers([]);
    setName("");
  }

  const insertSort = (arr = []) => {
    for (let i = 1; i < arr.length; i++) {
      let currentObject = arr[i];
      let j = i - 1;

      while (j >= 0 && +arr[j].name > +currentObject.name) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = currentObject;
    }

    return arr;
  };

  insertSort(arr);
  //console.log(arr);

  return (
    <>
      <Link to="/">
        <button className="button">◀ Back to home</button>
      </Link>
      <h1 className="nametime">Insertion Sort - O(n2)</h1>
      <div className="screen">
        <div className="container">
          <div className="box2">
            <h1>Enter Number. Click add. Insert sort loops every time.</h1>
            <input
              className="input"
              type="number"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="buttons">
              <button
                className="button"
                onClick={() => {
                  if (name.trim() === "") {
                    alert("Input is empty");
                  } else {
                    setNumbers([...numbers, { name: name }]);
                    insertSort();
                    reset();
                  }
                }}
              >
                Add Number
              </button>

              <button
                className="button"
                onClick={() => {
                  clear();
                }}
              >
                {" "}
                Reset{" "}
              </button>
            </div>
            <ul>
              {numbers.map((number) => (
                <p className="result" key={name.name}>
                  {number.name}
                </p>
              ))}
            </ul>
          </div>
        </div>
        <div className="imagebox">
          <img className="img1" src="/images/insert.png" />
        </div>
      </div>
    </>
  );
}

export default Insert;
