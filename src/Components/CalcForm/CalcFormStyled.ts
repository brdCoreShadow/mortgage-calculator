import styled from "@emotion/styled";

type Props = {
  isError: boolean;
};

export const CalcFormCon = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #fff;

  @media (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;

    border-radius: 8px;
  }

  @media (min-width: 1280px) {
    width: 35%;
    height: 606px;

    padding-right: 76px;
  }
`;

export const CalcTitleCon = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 40px;
  }

  & > h3 {
    margin-bottom: 8px;

    font-size: 24px;
    font-weight: 700;
    line-height: 1.25;

    color: #133041;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
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

export const InputsCon = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const AmountCon = styled.div<Props>`
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

      background-color: ${({ isError }) => (isError ? "#ff3333" : "#e4f4fd")};
      color: ${({ isError }) => (isError ? "#fff" : "#4e6e7e")};

      border-radius: 12px;
    }

    transition: all 0.3s;

    &:hover,
    &:focus,
    &:active {
      & input {
        border: 1px solid #d8db2f;
        transition: all 0.3s;
        cursor: pointer;
      }

      &::before {
        background-color: #d8db2f;
        transition: all 0.3s;
        cursor: pointer;
      }
      cursor: pointer;
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

    border: ${({ isError }) =>
      isError ? "1px solid #ff3333" : "1px solid #6b94a8"};

    border-radius: 12px;
  }
`;

export const TermCon = styled.div<Props>`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    width: 292px;
    margin-bottom: 0;
    margin-right: 24px;
  }

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

      background-color: ${({ isError }) => (isError ? "#ff3333" : "#e4f4fd")};
      color: ${({ isError }) => (isError ? "#fff" : "#4e6e7e")};

      border-radius: 12px;
    }

    &:hover,
    &:focus,
    &:active {
      & input {
        border: 1px solid #d8db2f;
        transition: all 0.3s;
        cursor: pointer;
      }

      &::before {
        background-color: #d8db2f;
        transition: all 0.3s;
        cursor: pointer;
      }
      cursor: pointer;
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

    border: ${({ isError }) =>
      isError ? "1px solid #ff3333" : "1px solid #6b94a8"};

    border-radius: 12px;
  }
`;

export const RateCon = styled.div<Props>`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    width: 292px;
    margin-bottom: 0;
  }

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

      background-color: ${({ isError }) => (isError ? "#ff3333" : "#e4f4fd")};
      color: ${({ isError }) => (isError ? "#fff" : "#4e6e7e")};

      border-radius: 12px;
    }

    &:hover,
    &:focus,
    &:active {
      & input {
        border: 1px solid #d8db2f;
        transition: all 0.3s;
        cursor: pointer;
      }

      &::before {
        background-color: #d8db2f;
        transition: all 0.3s;
        cursor: pointer;
      }
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

    border: ${({ isError }) =>
      isError ? "1px solid #ff3333" : "1px solid #6b94a8"};

    border-radius: 12px;
  }
`;

export const RadioCon = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }

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

  background-color: #d8db2f;

  border-radius: 24px;

  @media (min-width: 768px) {
    width: 314px;
  }

  & > span {
    margin-left: 12px;

    font-size: 18px;
    line-height: 1.25;
    font-weight: 700;

    color: #133041;
  }
`;

export const ErrorCon = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  transform: translate(0, 170%);

  & span {
    font-size: 12px;
    font-weight: 600;

    color: #ff3333;
  }
`;
