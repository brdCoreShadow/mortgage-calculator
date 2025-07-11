import * as Yup from "yup"

export const validationMortgageSchema = Yup.object().shape({
   amount: Yup.number()
  .transform((value, originalValue) => originalValue === "" ? undefined : value)
  .typeError("Must be a number")
  .min(1000, "Amount must be at least 1,000")
  .max(10000000, "Amount must be less than 10,000,000")
  .required("Can't be blank"),
  term: Yup.number()
  .transform((value, originalValue) => originalValue === "" ? undefined : value)
  .typeError("Must be a number")
  .integer("Term must be a whole number")
  .min(1, "Term must be at least 1 year")
  .max(40, "Term can't exceed 40 years")
  .required("Can't be blank"),
 rate: Yup.number()
  .transform((value, originalValue) => originalValue === "" ? undefined : value)
  .typeError("Must be a number")
  .min(0.1, "Rate must be at least 0.1%")
  .max(100, "Rate must be less than or equal to 100%")
  .required("Can't be blank"),
  type: Yup.string()
  .oneOf(["repayment", "interest"], "Type must be either 'repayment' or 'interest'")
  .required("Type is required"),
})