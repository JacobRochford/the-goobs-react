import React, { useState } from 'react';
import styled from 'styled-components';
import OrderPurchased from './OrderPurchased/OrderPurchased';

const StyledDiv = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  text-align: center;
  width: 30rem;
  z-index: 10;
  position: fixed;
  top: 20vh;
  left: calc(50% - 15rem);
`;



const Modal = (props) => {
  const [orderComplete, setOrderComplete] = useState(false)
  
  function confirmOrder() {
    setOrderComplete(true)
  }
  return (
    <StyledDiv>
      <p>{orderComplete ? 'Thank you for your purchase' : 'fd'}</p>
      <input type="number" defaultValue="1" min='1'/>
      <button onClick={confirmOrder}>Comfirm</button>
      <button>Cancel</button>
      {orderComplete && <OrderPurchased />}
    </StyledDiv>
  );
};

export default Modal;
