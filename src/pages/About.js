import styled from 'styled-components';
import AboutSection from '../components/about/AboutSection';

const StyledAbout = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5em;

  h2 {
    font-family: 'Metal Mania';
    color: #333;
    text-align: center;
    font-size: 2.2rem;
    font-weight: normal;
  }
`;
function AboutPage() {
  return (
    <StyledAbout>
      <h2>ABOUT</h2>
      <AboutSection />
    </StyledAbout>
  );
}

export default AboutPage;
