import { validationMortgageSchema } from "@/utils/validation";
import * as SC from "./CalcFormStyled";

import { useFormik } from "formik";

const CalcForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      amount: "",
      term: "",
      rate: "",
      type: "",
    },
    validationSchema:validationMortgageSchema,
    onSubmit:(values) => {
        console.log("Submited values", values);
        
    }
  });

  return (
    <SC.CalcFormCon>
      <SC.CalcTitleCon>
        <h3>Mortgage Calculator</h3>
        <button type="button">Clear all</button>
      </SC.CalcTitleCon>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="amount"></label>
          <span>Mortgage Amount</span>
          <input type="text" id="amount" name="amount"/>
        </div>
         <div>
          <label htmlFor="term"></label>
          <span>Mortgage Term</span>
          <input type="text" id="term" name="term"/>
        </div>
         <div>
          <label htmlFor="rate"></label>
          <span>Interest Rate</span>
          <input type="text" id="rate" name="rate"/>
        </div>
        <div>
            <div>
                <span>Mortgage Type</span>
                <label>
                    <input type="radio" id="type" name="type" value="repayment"/>
                    <span>Repayment</span>
                </label>
                <label>
                    <input type="radio" id="type" name="type" value="interest"/>
                    <span>Interest Only</span>
                </label>
            </div>
        </div>
        <button>Calculate Repayments</button>
      </form>
    </SC.CalcFormCon>
  );
};

export default CalcForm;
