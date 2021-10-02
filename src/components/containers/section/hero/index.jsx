// [ COMPONENTS > CONTAINERS > SECTION ] #######################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from "react";
import PropTypes from "prop-types";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
import {
  HeroContent,
  HeroContainer,
  HeroTabletImage,
  HeroMobileImage,
} from "./index.styles";
import Button from "../../../controls/button";
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................

import hero_mobile_image from "../../../../assets/images/hero-mobile.svg";
import hero_tablet_image from "../../../../assets/images/single-right.svg";
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. GLOBALS ................................................................
// 1.5. END ....................................................................

// 1.5. COMPONENT ..............................................................

const HeroSection = () => {
  // 1.5.1. HOOKS & API CALLS ..................................................
  // 1.5.1. END ................................................................

  // 1.5.2. FUNCTIONS & LOCAL VARIABLES
  // 1.5.2. END

  // 1.5.3. RENDER

  return (
    <HeroContainer>
      <HeroContent>
        <h1>Insuring your valuables couldn't be simpler</h1>
        <Button text="Get my price" size="large" background="primary" />
      </HeroContent>
      <HeroTabletImage src={hero_tablet_image} alt="Hero image" />
      <HeroMobileImage src={hero_mobile_image} alt="Hero image" />
    </HeroContainer>
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

HeroSection.propTypes = {};

// 1.7.2. END

// 1.7. END ....................................................................

export default HeroSection;

// END FILE ####################################################################
