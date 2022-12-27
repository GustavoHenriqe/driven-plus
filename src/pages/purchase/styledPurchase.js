import styled from "styled-components";

export const MainStyled = styled.main`
    width: 375px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 87px;
    margin-bottom: 22px;
    
    h1{
        margin-top: 12px;
        font-weight: 700;
        font-size: 32px;
        color: ${props => props.colorTitle};
    }

    a{
        position: fixed;
        left: 22px;
        top: 22px;
        z-index: 10;
    }
`