import { IMortgage } from "@/utils/types";
import * as SC from "./ResultDataStyled"
import { handleInterestOnlyRepayment, handleMonthlyRepayment } from "@/utils/handlers";

type Props = {
    mortgage:IMortgage
}

const ResultData: React.FC<Props> = ({mortgage}) => {

const {type} = mortgage

const repayment = handleMonthlyRepayment(mortgage)
const interests = handleInterestOnlyRepayment(mortgage)

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
            <h4>Your monthly {type === "repayment" ? "repayments" : "interests"}</h4>
            <span>$ {type === "repayment"  ? repayment.monthly : interests.monthly}</span>
        </SC.MonthlyRepayments>
        <SC.Total>
            <h4>Total you'll {type === "repayment" ? "repay" : "pay interests"} repay over the term</h4>
            <span>$ {type === "repayment"  ? repayment.total : interests.total}</span>
        </SC.Total>
      </SC.DigitsCon>
    </SC.ResultDataCon>
  );
};

export default ResultData;
