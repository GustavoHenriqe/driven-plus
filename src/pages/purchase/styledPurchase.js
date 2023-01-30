import styled from "styled-components";

export const MainStyled = styled.main`
    width: 375px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 87px;
    margin-bottom: 22px;
    position: relative;
    
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
export const ContainerStyled = styled.main`
    width: 299px;
    margin-top: 40px;
    ol{
        margin-top: 10px;
        margin-bottom: 12px;
    }
`

export const FormStyled = styled.form`
    margin-top: 34px;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 8px;

    .style-button {
        width: 299px;
        height: 52px;
        border-radius: 8px;
    }

    .resolution{
        height: 52px;
        width: 145px;
    }

    button {
        background-color: #FF4791;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        flex: none;
        cursor: pointer;
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

export const ScreenConfirmStyled = styled.div`
    visibility: ${props => props.visible};
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 375px;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 20;

    @keyframes hidden {
        0%{
            height: 0px;
            width: 0px;
        }

        50%{
            height: 140px;
            width: 166px;
        }

        100%{
            height: 210px;
            width: 248px;
        }
    }

    div{
        height: 210px;
        width: 248px;
        padding-left: 22px;
        padding-right: 22px;
        padding-top: 33px;
        border-radius: 12px;
        background-color: white;
        color: black;
        animation: hidden 0.7s;
        align-items: center;
        text-align: center;

        p{
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
        }

        span{
            margin-top: 37px;
            display: flex;
            gap: 10px;

            button{
                width: 95px;
                height: 52px;
                border: none;
                border-radius: 8px;
            }

            .cancelpurchase{
                background-color: #CECECE;
            }
        }

       
    }
`