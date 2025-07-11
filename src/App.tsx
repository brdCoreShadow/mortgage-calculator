import * as SC from "./AppStyled"

import { useState } from "react";
import CalcForm from "./Components/CalcForm/CalcForm";
import { IMortgage } from "./utils/types";
import Result from "./Components/Result/Result";
import ResultEmpty from "./Components/ResultEmpty/ResultEmpty";
import ResultData from "./Components/ResultData/ResultData";

function App() {
  const [mortgage, setMortgage] = useState<IMortgage | null>(null);

  const handleSubmit = (data: IMortgage) => setMortgage(data);
const handleResetForm = () => setMortgage(null)

  return (
    <SC.AppCon>
      <CalcForm handleSubmit={handleSubmit} handleResetForm={handleResetForm}/>
      <Result>
        {mortgage ? <ResultData mortgage={mortgage}/> : <ResultEmpty/>}
      </Result>
    </SC.AppCon>
  );
}

export default App;
