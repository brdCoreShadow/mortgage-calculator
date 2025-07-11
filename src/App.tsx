import { useState } from "react";
import CalcForm from "./Components/CalcForm/CalcForm";
import { IMortgage } from "./utils/types";
import Result from "./Components/Result/Result";
import ResultEmpty from "./Components/ResultEmpty/ResultEmpty";
import ResultData from "./Components/ResultData/ResultData";

function App() {
  const [mortgage, setMortgage] = useState<IMortgage | null>(null);

  const handleSubmit = (data: IMortgage) => setMortgage(data);

  console.log(mortgage);

  return (
    <div>
      <CalcForm handleSubmit={handleSubmit} />
      <Result>
        {mortgage ? <ResultData/> : <ResultEmpty/>}
      </Result>
    </div>
  );
}

export default App;
