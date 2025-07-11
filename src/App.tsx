import { useState } from "react"
import CalcForm from "./Components/CalcForm/CalcForm"
import { IMortgage } from "./utils/types";


function App() {

const [mortgage, setMortgage] = useState<IMortgage | null>(null)

const handleSubmit = (data:IMortgage) => setMortgage(data)

console.log(mortgage);

  return (
    <div>
      <CalcForm handleSubmit={handleSubmit}/>
    </div>
  )
}

export default App
