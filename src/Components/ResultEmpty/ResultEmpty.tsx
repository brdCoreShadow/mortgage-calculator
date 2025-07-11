import * as SC from "./ResultEmptyStyled"

import resultPic from "../../assets/images/illustration-empty.svg";

const ResultEmpty: React.FC = () => {
  return (
    <SC.ResultEmptyCon>
      <SC.ResultEmptyPicThumb>
        <img src={resultPic} alt="result" />
      </SC.ResultEmptyPicThumb>
      <SC.ResultEmptyContentCon>
        <h3>Results shown here</h3>
        <p>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
      </SC.ResultEmptyContentCon>
    </SC.ResultEmptyCon>
  );
};

export default ResultEmpty;
