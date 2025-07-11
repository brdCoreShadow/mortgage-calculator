import * as SC from "./ResultDataStyled"

const ResultData: React.FC = () => {
  return (
    <SC.ResultDataCon>
      <SC.ResultDataContentCon>
        <h3>Your results</h3>
        <p>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
      </SC.ResultDataContentCon>
      <SC.DigitsCon>
        <SC.MonthlyRepayments>
            <h4>Your monthly repayments</h4>
            <span>$ 1,797.74</span>
        </SC.MonthlyRepayments>
        <SC.Total>
            <h4>Total you'll repay over the term</h4>
            <span>$ 539,322.94</span>
        </SC.Total>
      </SC.DigitsCon>
    </SC.ResultDataCon>
  );
};

export default ResultData;
