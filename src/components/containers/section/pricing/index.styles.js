// [ COMPONENTS > CONTAINERS > SECTION > PRICING ] #############################

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

export const PricingContainer = styled.section`
  display: flex;
  padding: 125px 0;
  flex-direction: column;
  background-color: #46d281;

  /* MOBILE */
  @media screen and (max-width: 425px) {
    padding: 125px 30px;
  }
`;
export const Heading = styled.h2`
  color: #fff;
  font-size: 35px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const Subheading = styled.h3`
  color: #fff;
  font-size: 15px;
  text-align: center;
  font-weight: 300;
  line-height: 40px;
  margin-bottom: 40px;
  letter-spacing: 1.5px;
`;

export const Card = styled.div`
  width: 320px;
  max-width: 100%;
  position: relative;

  /* MOBILE */
  @media screen and (max-width: 425px) {
    &:not(:last-child) {
      margin-bottom: 100px;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  /* MOBILE */
  @media screen and (max-width: 425px) {
    align-items: center;
    flex-direction: column;
  }

  /* TABLET */
  @media screen and (min-width: 426px) {
    justify-content: space-evenly;
  }
`;
export const CardHeader = styled.div`
  display: flex;
  padding: 24px 24px 19.2px;
  align-items: center;
  border-radius: 25px 25px 0px 0px;
  background-color: #f4f4f4;

  h3 {
    font-size: 25px;
    font-weight: 900;
    line-height: 21.6px;
    letter-spacing: 0.5px;
  }

  div {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    border-radius: 50%;
    justify-content: center;
    background-color: #e9e9e9;
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;
export const CardContent = styled.div`
  display: flex;
  padding: 24px 24px 40px;
  position: relative;
  align-items: center;
  border-radius: 0 0 25px 25px;
  justify-content: space-between;
  background-color: #fff;
  div {
    p {
      position: relative;
      font-size: 14.16px;
      line-height: 21.68px;
      font-weight: 300;

      &:last-child {
        font-size: 44px;
        line-height: 40px;
        font-weight: 700;
      }

      sup {
        top: -10px;
        position: absolute;
        font-size: 20px;
        line-height: 40px;
        font-weight: 700;
      }
    }
  }

  img {
    position: absolute;
    right: 0px;
    bottom: 30px;
    height: 40%;
  }
`;
export const CardControls = styled.div`
  position: absolute;
  bottom: -17.5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
// 1.6. END ....................................................................

// END FILE ####################################################################
