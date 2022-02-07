import { StyledDiv } from "./Footer.styled";
import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <StyledDiv>
        <h3>The Goobs</h3>
        <ul>
          <li>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <AiOutlineYoutube className={'img'} />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <AiOutlineTwitter className={'img'} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <AiOutlineFacebook className={'img'} />
            </a>
          </li>
        </ul>
      </StyledDiv>
    </footer>
  );
}

export default Footer;