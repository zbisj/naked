// [ COMPONENTS > NAVIGATION > HEADER ] ########################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from "react";
import PropTypes from "prop-types";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
import {
  LogImage,
  BurgerMenu,
  Navigation,
  PrimaryNav,
  SecondaryNav,
  HeaderContainer,
} from "./index.styles";
import Button from "../../controls/button";
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
import Logo from "../../../assets/images/logo.png";
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. GLOBALS ................................................................
// 1.5. END ....................................................................

// 1.5. COMPONENT ..............................................................

const Header = () => {
  // 1.5.1. HOOKS & API CALLS ..................................................
  // 1.5.1. END ................................................................

  // 1.5.2. FUNCTIONS & LOCAL VARIABLES
  // 1.5.2. END

  // 1.5.3. RENDER

  return (
    <HeaderContainer>
      <Navigation>
        <PrimaryNav>
          <BurgerMenu>
            <div></div>
            <div></div>
          </BurgerMenu>
          <LogImage src={Logo} alt="Naked Insurance Logo" />
        </PrimaryNav>
        <SecondaryNav>
          <ul>
            <li>
              <a href="#">My car</a>
            </li>
            <li>
              <a href="#">My home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <Button text="Get my price" size="small" background="secondary" />
        </SecondaryNav>
      </Navigation>
    </HeaderContainer>
  );

  // 1.5.3. RENDER
};

// 1.5. END ....................................................................

// 1.6. STYLES .................................................................
// 1.6. END ....................................................................

// 1.7. PROPS ..................................................................

// 1.7.1. REDUX ................................................................

// 1.7.1. END ..................................................................

// 1.7.2. PROP TYPES

Header.propTypes = {};

// 1.7.2. END

// 1.7. END ....................................................................

export default Header;

// END FILE ####################################################################
