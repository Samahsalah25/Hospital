
import './App.css'

import Card from './components.jsx/Card.jsx';
import { hospitals } from "./data/hospitals";
function App() {


  return (
    <>
    <div className="m-0 p-4 min-h-screen w-full  px-4">
  <div className="grid grid-cols-1 md:grid-cols-2  w-full">
    
    {hospitals.map((hospital, index) => (
      <Card key={index} hospital={hospital} />
    ))}
  </div>
</div>

    </>
  )
}

export default App
