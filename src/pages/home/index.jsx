// [ PAGES > HOME ] ############################################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from "react";
import PropTypes from "prop-types";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
import { MediaBelt, UnderWriteSection } from "./index.styles";
import Header from "../../components/navigation/header";
import HeroSection from "../../components/containers/section/hero";
import ProductSection from "../../components/containers/section/product";
import PricingSection from "../../components/containers/section/pricing";
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
import media_belt from "../../assets/images/media-belt.png";
import hollard_image from "../../assets/images/underwritten.svg";

// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. GLOBALS ................................................................
// 1.5. END ....................................................................

// 1.5. COMPONENT ..............................................................

const Home = () => {
  // 1.5.1. HOOKS & API CALLS ..................................................
  // 1.5.1. END ................................................................

  // 1.5.2. FUNCTIONS & LOCAL VARIABLES
  // 1.5.2. END

  // 1.5.3. RENDER

  return (
    <>
      <Header />
      <HeroSection />
      <UnderWriteSection>
        <img src={hollard_image} alt="Underwritten by Hollard" />
      </UnderWriteSection>
      <MediaBelt>
        <div>
          <img src={media_belt} alt="Underwritten by Hollard" />
        </div>
      </MediaBelt>
      <PricingSection />
      <ProductSection />
    </>
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

Home.propTypes = {};

// 1.7.2. END

// 1.7. END ....................................................................

export default Home;

// END FILE ####################################################################
