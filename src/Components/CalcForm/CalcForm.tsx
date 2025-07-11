import { validationMortgageSchema } from "@/utils/validation";
import * as SC from "./CalcFormStyled";

import { useFormik } from "formik";

import caclcIcon from "../../assets/images/icon-calculator.svg";

const CalcForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      amount: "",
      term: "",
      rate: "",
      type: "",
    },
    validationSchema: validationMortgageSchema,
    onSubmit: (values) => {
      console.log("Submited values", values);
    },
  });

  return (
    <SC.CalcFormCon>
      <SC.CalcTitleCon>
        <h3>Mortgage Calculator</h3>
        <button type="button">Clear all</button>
      </SC.CalcTitleCon>
      <form onSubmit={formik.handleSubmit}>
        <SC.AmountCon>
          <label htmlFor="amount">
            <span>Mortgage Amount</span>
            <input type="text" id="amount" name="amount" />
          </label>
        </SC.AmountCon>
        <SC.TermCon>
          <label htmlFor="term">
            <span>Mortgage Term</span>
            <input type="text" id="term" name="term" />
          </label>
        </SC.TermCon>
        <SC.RateCon>
          <label htmlFor="rate">
            <span>Interest Rate</span>
            <input type="text" id="rate" name="rate" />
          </label>
        </SC.RateCon>
        <SC.RadioCon>
          <div>
            <h3>Mortgage Type</h3>
            <label
              className={formik.values.type === "repayment" ? "active" : ""}
            >
              <input
                type="radio"
                id="type"
                name="type"
                value="repayment"
                onChange={formik.handleChange}
                checked={formik.values.type === "repayment"}
              />
              <span>Repayment</span>
            </label>
            <label
              className={formik.values.type === "interest" ? "active" : ""}
            >
              <input
                type="radio"
                id="type"
                name="type"
                value="interest"
                onChange={formik.handleChange}
                checked={formik.values.type === "interest"}
              />
              <span>Interest Only</span>
            </label>
          </div>
        </SC.RadioCon>
        <SC.SubmitBtn>
          <img src={caclcIcon} alt="calculator" />
          <span>Calculate Repayments</span>
        </SC.SubmitBtn>
      </form>
    </SC.CalcFormCon>
  );
};

export default CalcForm;
