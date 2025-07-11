import * as SC from "./ResultStyled";

import { PropsChidren } from "@/utils/types";

const Result: React.FC<PropsChidren> = ({ children }) => {
  return <SC.ResultCon>{children}</SC.ResultCon>;
};

export default Result;
