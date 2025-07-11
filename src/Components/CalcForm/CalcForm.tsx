import { validationMortgageSchema } from "@/utils/validation";
import * as SC from "./CalcFormStyled";

import { useFormik } from "formik";

import caclcIcon from "../../assets/images/icon-calculator.svg";
import { IMortgage } from "@/utils/types";

type Props = {
  handleSubmit: (data: IMortgage) => void;
  handleResetForm: () => void;
};

const CalcForm: React.FC<Props> = ({ handleSubmit, handleResetForm }) => {
  const formik = useFormik({
    initialValues: {
      amount: "",
      term: "",
      rate: "",
      type: "",
    },
    validationSchema: validationMortgageSchema,
    onSubmit: (values) => {
      const formattedValues: IMortgage = {
        amount: Number(values.amount),
        term: Number(values.term),
        rate: Number(values.rate),
        type: values.type,
      };
      handleSubmit(formattedValues);
    },
  });

  return (
    <SC.CalcFormCon>
      <SC.CalcTitleCon>
        <h3>Mortgage Calculator</h3>
        <button
          type="button"
          onClick={(e) => {
            formik.handleReset(e);
            handleResetForm(); // <- This clears the mortgage data
          }}
        >
          Clear all
        </button>
      </SC.CalcTitleCon>
      <form onSubmit={formik.handleSubmit}>
       
        <SC.AmountCon  isError={formik.touched.amount && formik.errors.amount ? true : false}>
          <label htmlFor="amount">
            <span>Mortgage Amount</span>
            <input
              type="text"
              id="amount"
              name="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
             
            />
            {formik.touched.amount && formik.errors.amount && (
              <SC.ErrorCon>
                <span  style={{color:"#ff3333", fontSize:12, fontWeight:600}}>{formik.errors.amount}</span>
              </SC.ErrorCon>
            )}
          </label>
        </SC.AmountCon>
         <SC.InputsCon>
        <SC.TermCon isError={formik.touched.term && formik.errors.term ? true : false}>
          <label htmlFor="term">
            <span>Mortgage Term</span>
            <input
              type="text"
              id="term"
              name="term"
              value={formik.values.term}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.term && formik.errors.term && (
              <SC.ErrorCon>
                <span style={{color:"#ff3333", fontSize:12, fontWeight:600}}>{formik.errors.term}</span>
              </SC.ErrorCon>
            )}
          </label>
        </SC.TermCon>
      
        <SC.RateCon isError={formik.touched.rate && formik.errors.rate ? true : false}>
          <label htmlFor="rate">
            <span>Interest Rate</span>
            <input
              type="text"
              id="rate"
              name="rate"
              value={formik.values.rate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.rate && formik.errors.rate && (
              <SC.ErrorCon>
                <span  style={{color:"#ff3333", fontSize:12, fontWeight:600}}>{formik.errors.rate}</span>
              </SC.ErrorCon>
            )}
          </label>
        </SC.RateCon>
          </SC.InputsCon>
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
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
                checked={formik.values.type === "interest"}
              />
              <span>Interest Only</span>
            </label>
          </div>
          {formik.touched.type && formik.errors.type && (
            <SC.ErrorCon>
              <span>{formik.errors.type}</span>
            </SC.ErrorCon>
          )}
        </SC.RadioCon>
        <SC.SubmitBtn type="submit">
          <img src={caclcIcon} alt="calculator" />
          <span>Calculate Repayments</span>
        </SC.SubmitBtn>
      </form>
    </SC.CalcFormCon>
  );
};

export default CalcForm;
