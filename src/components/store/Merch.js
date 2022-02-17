import React from 'react';
import { StyledMerch } from './Merch.styled';
import { StyledShopItem } from './ShopItem.styled';
// import { server } from '../../config';


const Merch = ({ merch }) => {
  console.log(merch)
  return (
    <StyledMerch>
      <h2>MERCH</h2>
      <section>
        {merch.map((item) => {
          return (
            <StyledShopItem key={item.id}>
              <h3>{item.name}</h3>
              <img src={item.image} width={300} height={300} />
              <div>
                <span>{item.price}</span>
                <button>ADD TO CART</button>
              </div>
            </StyledShopItem>
          );
        })}
      </section>
    </StyledMerch>
  );
};

// export const getStaticProps = async () => {
//   const res = await fetch()
// }

export default Merch;
