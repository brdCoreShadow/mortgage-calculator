import styled from "@emotion/styled";

export const CalcFormCon = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #fff;
`;

export const CalcTitleCon = styled.div`
  margin-bottom: 24px;

  & > h3 {
    margin-bottom: 8px;

    font-size: 24px;
    font-weight: 700;
    line-height: 1.25;

    color: #133041;
  }

  & > button {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;

    background-color: transparent;
    color: #4e6e7e;

    border-bottom: 1px solid #4e6e7e;
  }
`;

export const AmountCon = styled.div`
  margin-bottom: 24px;

  & span {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;

    color: #4e6e7e;
  }

  & label {
    position: relative;

    &::before {
      content: "$";

      display: inline-block;

      position: absolute;

      top: 0;
      left: 0;

      transform: translate(2%, 80%);

      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 16px;
      padding-right: 16px;

      background-color: #e4f4fd;
      color: #4e6e7e;

      border-radius: 12px;
    }
  }

  & input {
    width: 100%;

    margin-top: 12px;

    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 60px;

    font-size: 18px;
    line-height: 1.25;
    font-weight: 700;

    color: #133041;

    border: 1px solid #6b94a8;

    border-radius: 12px;
  }
`;

export const TermCon = styled.div`
  margin-bottom: 24px;

  & span {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;

    color: #4e6e7e;
  }

  & label {
    position: relative;

    &::before {
      content: "years";

      display: inline-block;

      position: absolute;

      top: 0;
      right: 0;

      transform: translate(-2%, 80%);

      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 16px;
      padding-right: 16px;

      background-color: #e4f4fd;
      color: #4e6e7e;

      border-radius: 12px;
    }
  }

  & input {
    width: 100%;

    margin-top: 12px;

    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;

    font-size: 18px;
    line-height: 1.25;
    font-weight: 700;

    color: #133041;

    border: 1px solid #6b94a8;

    border-radius: 12px;
  }
`;

export const RateCon = styled.div`
  margin-bottom: 24px;

  & span {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;

    color: #4e6e7e;
  }

  & label {
    position: relative;

    &::before {
      content: "%";

      display: inline-block;

      position: absolute;

      top: 0;
      right: 0;

      transform: translate(-2%, 80%);

      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 16px;
      padding-right: 16px;

      background-color: #e4f4fd;
      color: #4e6e7e;

      border-radius: 12px;
    }
  }

  & input {
    width: 100%;

    margin-top: 12px;

    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;

    font-size: 18px;
    line-height: 1.25;
    font-weight: 700;

    color: #133041;

    border: 1px solid #6b94a8;

    border-radius: 12px;
  }
`;

export const RadioCon = styled.div`
  margin-bottom: 24px;

  & h3 {
    margin-bottom: 12px;

    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;

    color: #4e6e7e;
  }

  & label {
    display: block;

    width: 100%;

    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;

    border: 1px solid #6b94a8;
    border-radius: 12px;

    &:not(:last-of-type) {
      margin-bottom: 12px;
    }

    & > span {
      margin-left: 16px;

      font-size: 18px;
      line-height: 1.25;
      font-weight: 700;

      color: #133041;
    }
  }

   & .active {
   background-color: rgb(216, 219, 47, 0.3);

    border-color: #d8db2f;
  }
`;

export const SubmitBtn = styled.button`
width: 100%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

padding-top: 12px;
padding-bottom: 12px;

background-color: #D8DB2F;

border-radius: 24px;

& > span{

    margin-left: 12px;

    font-size: 18px;
    line-height: 1.25;
    font-weight: 700;

    color:#133041
}
`

export const ErrorCon = styled.div`
position: absolute;
bottom: 0;
left: 0;

transform: translate(0, 170%);

& span{
font-size: 12px;
font-weight: 600;

color:#FF3333;
}

`