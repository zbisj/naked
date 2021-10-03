// [ COMPONENTS > CONTAINERS > SECTION > PRODUCT ] #############################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from "react";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
import {
  Heading,
  DogImage,
  ValueProp,
  ImageContainer,
  ProductContainer,
  ValuePropContent,
  ValuePropMobileImage,
  ValuePropTabletImage,
} from "./index.styles";
import Button from "../../../controls/button";
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................

import dog_image from "../../../../assets/images/dog.png";
import bird_image from "../../../../assets/images/bird.png";
import app_tablet from "../../../../assets/images/app-tablet.png";
import download_app from "../../../../assets/images/download-app.png";
import claims_image_mobile from "../../../../assets/images/claims-mobile.png";
import claims_image_default from "../../../../assets/images/claims-desktop.png";

// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. GLOBALS ................................................................
// 1.5. END ....................................................................

// 1.5. COMPONENT ..............................................................

const ProductSection = () => {
  // 1.5.1. HOOKS & API CALLS ..................................................
  // 1.5.1. END ................................................................

  // 1.5.2. FUNCTIONS & LOCAL VARIABLES
  // 1.5.2. END

  // 1.5.3. RENDER

  return (
    <ProductContainer>
      <Heading>Lightning Fast</Heading>
      <ValueProp>
        <DogImage src={dog_image} alt="Download App" />
        <ValuePropContent>
          <h3>Buy in seconds</h3>
          <p>
            Get prices on the app. Like what you see? Buy instantly without
            phone calls or paperwork.
          </p>
          <Button text="Get the app" size="small" background="tertiary" />
        </ValuePropContent>
        <ImageContainer>
          <ValuePropTabletImage src={app_tablet} alt="Download App" />
          <ValuePropMobileImage src={download_app} alt="Download App" />
        </ImageContainer>
      </ValueProp>
      <ValueProp>
        <ImageContainer $type="reverse">
          <ValuePropMobileImage
            src={claims_image_mobile}
            alt="Car accident, bad weather, house breaking"
          />
          <ValuePropTabletImage
            src={claims_image_default}
            alt="Car accident, bad weather, house breaking"
          />
        </ImageContainer>
        <ValuePropContent $type="reverse">
          <h3>Claims approved in record time</h3>
          <p>
            Accidents, bad guys or Mother Nature. Claim on the app and we will
            sort it out, no hassles.
          </p>
          <Button text="Check out how" size="small" background="tertiary" />
        </ValuePropContent>
        <DogImage src={bird_image} alt="Bird" />
      </ValueProp>
    </ProductContainer>
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

// 1.7.2. END

// 1.7. END ....................................................................

export default ProductSection;

// END FILE ####################################################################
