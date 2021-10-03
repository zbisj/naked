// [ PAGES > HOME ] ############################################################

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

export const UnderWriteSection = styled.section`
  display: flex;
  margin-top: 20px;
  justify-content: center;

  /* TABLET */
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    margin-right: 30px;
  }
`;

export const BenefitsSection = styled.section`
  padding: 30px 30px 0 30px;
`;

export const MediaBelt = styled.section`
  display: block;
  margin-top: 80px;
  border-top: 1px solid #ebebeb;

  div {
    max-width: 75em;
    padding: 20px 30px;
    margin-left: auto;
    margin-right: auto;
  }
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }

  /* MOBILE */
  @media screen and (max-width: 425px) {
    display: none;
  }
`;
// 1.6. END ....................................................................

// END FILE ####################################################################
