// [ COMPONENTS > COONTROLS > BUTTON ] ########################################

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

const addSize = (size) => {
  switch (size) {
    case "small":
      return `
        width: 140px; 
        height: 35px; 
        font-size: 14px; 
        border-radius: 17.5px;
        justify-content: center;
        `;
    case "medium":
      return "padding: 20px;";
    case "large":
      return `
      width: fit-content;
      height: 60px; 
      padding: 0px 35px; 
      font-size: 18px; 
      line-height: 45px;
      border-radius: 60px;
      justify-content: center;`;

    default:
      return "padding: 10px;";
  }
};
const addBackground = (background) => {
  switch (background) {
    case "primary":
      return "color: #fff; background-color: #46d281;";
    case "tertiary":
      return "color: #fff; background-color: #000;";
    case "secondary":
      return "color: #000; background-color: #ebebeb;";
    default:
      return "color: #fff; background-color: #46d281;";
  }
};
// 1.5. END ....................................................................

// 1.6. STYLES .................................................................

export const ButtonContainer = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  border-radius: 20px;
  letter-spacing: 0.6px;
  text-decoration: none;
  font-family: Roboto, sans-serif;
  ${({ size }) => addSize(size)}
  ${({ background }) => addBackground(background)}
`;
// 1.6. END ....................................................................

// END FILE ####################################################################
