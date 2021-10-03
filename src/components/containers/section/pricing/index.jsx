// [ COMPONENTS > CONTAINERS > SECTION > PRICING ] #############################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from "react";
import PropTypes from "prop-types";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
import {
  Card,
  Cards,
  Heading,
  CardHeader,
  Subheading,
  CardContent,
  CardControls,
  PricingContainer,
} from "./index.styles";
import Button from "../../../controls/button";
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
import car from "../../../../assets/images/car.png";
import home_cover from "../../../../assets/images/home-cover.png";
import { ReactComponent as RightChevronIcon } from "../../../../assets/icon/chevron-right.svg";
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. GLOBALS ................................................................
// 1.5. END ....................................................................

// 1.5. COMPONENT ..............................................................

const PricingSection = () => {
  // 1.5.1. HOOKS & API CALLS ..................................................
  // 1.5.1. END ................................................................

  // 1.5.2. FUNCTIONS & LOCAL VARIABLES
  // 1.5.2. END

  // 1.5.3. RENDER

  return (
    <PricingContainer>
      <Heading>Game-changing prices</Heading>
      <Subheading>
        AI and no call centres ensure that you get comprehensive cover at the
        lowest prices.
      </Subheading>
      <Cards>
        <Card>
          <CardHeader>
            <h3>Car Insurance</h3>
            <div>
              <RightChevronIcon />
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <p>From</p>
              <p>
                R180<sub>pm</sub>
              </p>
            </div>
            <img src={car} alt="car" />
          </CardContent>
          <CardControls>
            <Button text="Find out more" size="small" background="tertiary" />
          </CardControls>
        </Card>
        <Card>
          <CardHeader>
            <h3>Home Insurance</h3>
            <div>
              <RightChevronIcon />
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <p>From</p>
              <p>
                R43<sub>pm</sub>
              </p>
            </div>
            <img src={home_cover} alt="Furniture" />
          </CardContent>
          <CardControls>
            <Button text="Find out more" size="small" background="tertiary" />
          </CardControls>
        </Card>
      </Cards>
    </PricingContainer>
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

PricingSection.propTypes = {};

// 1.7.2. END

// 1.7. END ....................................................................

export default PricingSection;

// END FILE ####################################################################
