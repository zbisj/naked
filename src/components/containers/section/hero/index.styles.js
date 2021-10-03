// [ COMPONENTS > CONTAINERS > SECTION > HERO ] ################################

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

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 35px;
    line-height: 40px;
    letter-spacing: 0.25px;
    margin-bottom: 30px;

    @media screen and (min-width: 768px) {
      font-family: Roboto, Helvetica Neue, Arial, Helvetica, sans-serif;
      font-size: 55px;
      line-height: 60px;
    }

    /* LAPTOP */
    @media screen and (min-width: 769px) {
      font-weight: 900;
    }
  }

  /* TABLET */
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }

  /* MOBILE */
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  padding: 30px 30px 0 30px;
  flex-flow: column nowrap;
  justify-content: center;

  h2 {
    color: #929292;
    font-size: 20px;
    line-height: 1.66;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    margin-bottom: 20px;
  }
  /* TABLET */
  @media screen and (min-width: 768px) {
    width: 50%;
  }

  /* MOBILE */
  @media screen and (max-width: 425px) {
    height: 80vh;
  }

  /* LAPTOP */
  @media screen and (min-width: 769px) {
    margin-left: 80px;
  }
`;

export const HeroImage = styled.img`
  width: 50%;
  height: auto;
  max-width: 100%;
  /* TABLET */
  @media screen and (max-width: 425px) {
    width: 100%;
  }

  /* LAPTOP */
  @media screen and (min-width: 769px) {
    display: block;
  }
`;
// 1.6. END ....................................................................

// END FILE ####################################################################
