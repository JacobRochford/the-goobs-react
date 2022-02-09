import React from 'react';
import { StyledShopItem } from './ShopItem.styled';

const ShopItem = (title, image, price, alt) => {
  return (
    <StyledShopItem>
      <h3>{title}</h3>
      <img src={image} alt={alt} />
      <div>
        <span>{price}</span>
        <button>ADD TO CART</button>
      </div>
    </StyledShopItem>
  );
};

export default ShopItem;
