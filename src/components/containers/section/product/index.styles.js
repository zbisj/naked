// [ COMPONENTS > CONTAINERS > SECTION > PRODUCT ] #############################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import styled from "styled-components";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. FUNCTIONS ..............................................................
// 1.5. END ....................................................................

// 1.6. STYLES .................................................................

export const ProductContainer = styled.section`
  padding-top: 50px;
`;

export const ValueProp = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;

    ${({ type }) => type === "reverse" && "flex-direction: row-reverse;"}
  }
`;

export const ValuePropContent = styled.div`
  display: flex;
  padding: 28px;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: #46d281;
    font-size: 30px;
    text-align: center;
    font-weight: 900;
    letter-spacing: 1.5px;

    @media screen and (min-width: 768px) {
      font-size: 45px;
      text-align: right;
      line-height: 55px;
    }
  }

  p {
    color: #929292;
    margin: 15px 0;
    font-size: 15px;
    text-align: center;
    line-height: 1.67;
    font-weight: 300;
    max-width: 320px;
    @media screen and (min-width: 768px) {
      text-align: right;
    }
  }

  img {
    @media screen and (max-width: 425px) {
      margin-top: 60px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    align-items: flex-end;
    margin-left: 40px;
  }

  ${({ $type }) =>
    $type === "reverse" &&
    `h3, p {
      text-align: left;
    }
    align-items: flex-start !important;
    `}
`;

export const Heading = styled.h2`
  font-size: 35px;
  text-align: center;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 75px;
  letter-spacing: 1.5px;
  line-height: 40px;
`;

export const ImageContainer = styled.div`
  width: 60%;
  overflow: hidden;
  ${({ $type }) =>
    $type === "reverse" &&
    ` display: flex;
      justify-content: flex-end;
  `}
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const ValuePropMobileImage = styled.img`
  max-width: 100%;
  @media screen and (max-width: 425px) {
    display: block;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ValuePropTabletImage = styled.img`
  width: auto;
  height: 400px;

  @media screen and (max-width: 425px) {
    display: none;
  }

  @media screen and (min-width: 769px) {
    display: block;
  }

  @media screen and (min-width: 1440px) {
    height: 534px;
  }
`;

export const DogImage = styled.img`
  width: 250px;
  height: 534px;

  display: none;
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

export const ClaimsSection = styled.div``;
// 1.6. END ....................................................................

// END FILE ####################################################################
