// [ COMPONENTS > NAVIGATION > HEADER ] ########################################

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

export const HeaderContainer = styled.header`
  top: 0;
  /* height: 66px; */
  position: sticky;
  border-top: 5px solid #46d281;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const BurgerMenu = styled.div`
  width: 40px;
  height: 35px;
  display: inline-flex;
  margin-right: 10px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #ebebeb;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  div {
    width: 10px;
    height: 2px;
    background: #000;
    &:first-child {
      margin-bottom: 5px;
    }
  }
  @media screen and (min-width: 426px) {
    opacity: 0;
  }
`;

export const PrimaryNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SecondaryNav = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-right: 10px;
  justify-content: space-between;

  ul {
    margin: 0;
    display: flex;
    padding-right: 20px;
    justify-content: space-evenly;
    li {
      list-style: none;
      padding: 13px 15px;

      a {
        color: #000;
        font-size: 15px;
        font-family: Roboto;
        letter-spacing: 0.45px;
        text-decoration: none;
      }
    }

    @media screen and (max-width: 425px) {
      display: none;
    }
  }
`;
export const LogImage = styled.img`
  width: 80px;
`;
// 1.6. END ....................................................................

// END FILE ####################################################################
