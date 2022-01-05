import './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div>
        <h3>The Goobs</h3>
        <ul>
          <li>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <img
                src={require("../../images/YoutubeLogo.png")}
                alt="youtube"
              />
            </a>
          </li>
          <li>
            <a href="https://www.spotify.com" target="_blank" rel="noreferrer">
              <img
                src={require("../../images/Spotify Logo.png")}
                alt="spotify"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img
                src={require("../../images/Facebook Logo.png")}
                alt="facebook"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;