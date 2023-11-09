import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleWrite = (character) => {
    console.log(character);
    const addedCharacters = inputValue + character;
    setInputValue(addedCharacters);
  };
  const handleResult = () => {
    try {
      setInputValue(eval(inputValue));
    } catch (error) {
      alert("Check your expression and try again!");
    }
  };

  return (
    <>
      <div className="__calculator_app bg-slate-500 w-full h-screen flex justify-center items-center flex-col gap-3">
        <h1 className=" text-white font-bold text-3xl">Basic Calculator</h1>
        <div className="__calculator_container w-[400px] p-3 bg-slate-600">
          <input
            type="text"
            value={inputValue}
            placeholder="Enter your expression"
            className=" bg-green-300 outline-none w-full overflow-y-auto p-3 text-xl text-green-800 font-bold pointer-events-none placeholder-green-600"
          />
          <div className="__btn_container mt-4 grid gap-[5px] grid-cols-[repeat(auto-fill,minmax(80px,1fr))]">
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              7
            </div>
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              8
            </div>
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              9
            </div>
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              /
            </div>
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              4
            </div>
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              5
            </div>
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              6
            </div>
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              *
            </div>
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              3
            </div>
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              2
            </div>
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              1
            </div>
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              -
            </div>
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              0
            </div>
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              .
            </div>
            <div
              onClick={(e) => handleWrite(e.target.innerText)}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              +
            </div>
            <div
              onClick={handleResult}
              className="_btn border-2 cursor-pointer border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 aspect-square flex justify-center items-center text-3xl text-white bg-slate-700"
            >
              =
            </div>
          </div>
          <div
            onClick={() => setInputValue("")}
            className="_btn w-full cursor-pointer mt-[5px] border-none hover:bg-slate-800 active:bg-slate-900 select-none transition p-1 flex justify-center items-center text-xl text-white bg-slate-700"
          >
            Clear
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
