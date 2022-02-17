import React from 'react';
import { StyledShopItem } from './ShopItem.styled';

const ShopItem = (id, title, image, price) => {
  return (
    <StyledShopItem>
      <h3>{title}</h3>
      <img src={image} />
      <div>
        <span>{price}</span>
        <button>ADD TO CART</button>
      </div>
    </StyledShopItem>
  );
};

export default ShopItem;
