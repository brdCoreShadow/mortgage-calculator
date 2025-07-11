import styled from "@emotion/styled";

export const ResultCon = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #133041;

  @media (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;

    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  @media (min-width: 1280px){
    width: 35%;
    height: 606px;



    border-radius: 12px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 36px;

    transform: translateX(-36px);

    align-content: center;
  }
`;
