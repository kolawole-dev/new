import React , { useState} from 'react';

React
const Projects = () => {

 const [color, setColor] = useState("olive"); 

 function RED(color) {
  
  setColor(color);
 }


  
  return (

      <div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>
        <div className="flex items-end justify-center h-[100vh] gap-5">
          <div className="w-[200px]  text-center flex justify-between">
              <button className="p-1 px-2 bg-red-600 rounded-lg" onClick={() => RED('red')}>Red</button>
              <button className="p-1 px-2 bg-blue-600 rounded-lg" onClick={() => RED('blue')}>Blue</button>
              <button className="p-1 px-2 bg-green-600 rounded-lg" onClick={() => RED('green')}>Green</button>
          </div>
         
        </div>
    </div>
  );
};

export default Projects;
