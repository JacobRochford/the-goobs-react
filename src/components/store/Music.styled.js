import styled from "styled-components";


export const StyledMusic = styled.div`
  h2 {
    font-family: 'Metal Mania';
    text-align: center;
    font-size: 2rem;
    color: #111;
    padding-top: 2rem;
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledShopItem = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  h3 {
    color: #555;
    font-size: 1.2rem;
  }

  img {
    height: 250px;
    width: 250px;
    box-shadow: 2px 2px 5px;
  }

  span {
    font-size: 1.2rem;
    color: #000;
  }

  button {
    background-color: rgb(23, 200, 253);
    border-radius: 15px;
    cursor: pointer;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: #333;
    padding: 0.3rem;
    margin: 0.5rem;
    box-shadow: 1px 1px 3px;
  }

  button:hover {
    background-color: rgba(24, 247, 255, 0.7);
  }
`;