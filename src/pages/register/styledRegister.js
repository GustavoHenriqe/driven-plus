import styled from "styled-components"

export const MainStyledRegister = styled.main`
    width: 375px;
    height: 100vh;
    padding-left: 38px;
    padding-right: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    footer {
        a {
            color: #fff
        }
    }
`

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin-bottom: 24px;

    .style-button {
        width: 299px;
        height: 52px;
        border-radius: 8px;
    }

    button {
        background-color: #FF4791;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        flex: none;
        cursor: pointer;
        margin-top: 8px;
    }

    input {
        padding-left: 14px;
        font-weight: 400;
        font-size: 14px;
        transition: all 0.5s;
        
        &:focus {
            outline: 0;
            border: 3px solid #FF4791
        }
    }
`