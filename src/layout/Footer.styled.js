import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;

    h3 {
        font-family: 'Booter - Zero Zero';
        font-size: 4rem;
        text-align: center;
        margin: 5%;
        color: #fff;
        font-weight: normal;
    }

    ul {
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
        padding-right: 5%;
        list-style-type: none;
    }
    
    li{
        padding: 0 1em;
    }
    
    .img {
        color: #fff;
        width: 30px;
        height: 30px;
    }
`
