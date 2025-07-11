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

      transform: translate(2%, 78%);

      width: 42px;
      height: 46px;

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
      content: "$";

      display: inline-block;

      position: absolute;

      top: 0;
      left: 0;

      transform: translate(2%, 78%);

      width: 42px;
      height: 46px;

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
