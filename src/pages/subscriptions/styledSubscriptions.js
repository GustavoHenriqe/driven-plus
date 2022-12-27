import styled from "styled-components"

export const MainStyled = styled.main`
    width: 375px;
    height: 100vh;
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;

    header{
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        margin-bottom: 24px;
    }

    .planes{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
`

export const ButtonPlanesStyled = styled.button`
    width: 290px;
    height: 180px;
    display: block;
    background: none;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    display: block;

    a{ 
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #fff;
        text-decoration: none;
    }
`