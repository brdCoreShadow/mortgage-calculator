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

console.log(formik);

  return (
    <SC.CalcFormCon>
      <div>
        <h3>Mortgage Calculator</h3>
        <button type="button">Clear all</button>
      </div>
      <form>
        <div>
          <label htmlFor="amount"></label>
        </div>
      </form>
    </SC.CalcFormCon>
  );
};

export default CalcForm;
