import styled from 'styled-components';
import { SectionProps } from '../interfaces/Interface';

const Section = styled.section<SectionProps>`
  width: ${(p) => (p.width ? p.width : '100%')};
  height: ${(p) => (p.height ? p.height : 'auto')};
  min-height: ${(p) => (p.minheight ? p.minheight : 'auto')};
  min-width: ${(p) => (p.minwidth ? p.minwidth : 'auto')};
  position: relative;
  box-sizing: ${(p) => (p.contentBox ? 'content-box' : 'border-box')};
  display: ${(p) => (p.block ? 'block' : 'flex')};
  flex-direction: ${(p) => (p.column ? 'column' : 'row')};
  justify-content: ${(p) => (p.justifycontent ? p.justifycontent : 'flex-start')};
  align-items: ${(p) => (p.alignItems ? p.alignItems : 'stretch')};
  gap: ${(p) => (p.gap ? p.gap : '0')};
  z-index: ${(p) => (p.zIndex ? p.zIndex : '0')};
  padding: ${(p) => (p.padding ? p.padding : '0')};
  margin: ${(p) => (p.margin ? p.margin : '0')};
  grid-area: ${(p) => (p.gridArea ? p.gridArea : 'auto')};
  transition: ${(p) => (p.transition ? p.transition : '')};
`;

export default Section;
