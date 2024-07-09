import { useState } from "react";
import Button from "./components/Button";

function App() {

  const [color , setColor] = useState('white')
  return (
    <div className="w-full h-[100vh] relative" style={{backgroundColor:color}}>
      <div className=" w-full flex items-center justify-center fixed bottom-10 ">
        <div className="bg-gray-300 rounded-full flex items-center justify-between gap-3 p-3">
          <Button text=" Red " bgColor="bg-red-800" textColor="text-white" onClick={() => setColor("red")} />
          <Button text="Green" bgColor="bg-green-800" textColor="text-white" 
          onClick={() => setColor("green")}
          />
          <Button text="Blue" bgColor="bg-blue-800" textColor="text-white" 
          onClick={() => setColor("blue")}
          />
          <Button text="White" bgColor="bg-white" textColor="text-black" 
          onClick={() => setColor("white")}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
