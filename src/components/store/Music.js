import React from 'react';
import { StyledMusic } from './Music.styled';
import ShopItem from './ShopItem';
// import albums from '../../../albumdata'
import { server } from '../../../config';
import Image from 'next/image';
import { StyledShopItem } from './Music.styled';

const Music = ({albums}) => {
  console.log(albums)
  return (
    <StyledMusic>
      <h2>MUSIC</h2>
      <section>
        {albums.map((album) => {
          return (
            <StyledShopItem key={album.id}>
              <h3>{album.name}</h3>
              <img src={album.image} width={300} height={300} />
              <div>
                <span>{album.price}</span>
                <button>ADD TO CART</button>
              </div>
            </StyledShopItem>
          );
        })}
      </section>
    </StyledMusic>
  );
};

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/albums`);
//   const albums = await res.json();

//   return {
//     props: {
//       albums: {albums},
//     },
//   };
// };

export default Music;
