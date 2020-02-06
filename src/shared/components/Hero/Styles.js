import styled from 'styled-components';

export const StyledHero = styled.section`
  background-color: #FFF;
  padding-top: 100px;

  /* 
   * Limit the height of Vanta to prevent it from
   * spilling over onto paragraph text
   */
  canvas.vanta-canvas {
    top: initial !important;
    bottom: 0 !important;
    max-height: 380px !important;

    @media (min-width: 768px) {
      max-height: 670px !important;
    }
  }
`;
