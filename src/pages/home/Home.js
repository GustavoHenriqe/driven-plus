import { MainStyled, FormStyled } from "./styledHome"
import Drivenlogo from "../../assets/drivenplus_logo.png"

import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <MainStyled>
                <header className="header-home">
                    <Link to="/" >
                        <img src={Drivenlogo} />
                    </Link>
                </header>
                <FormStyled>
                    <input className="style-button" type="email" placeholder="E-mail" required />
                    <input className="style-button" type="password" placeholder="Senha" required />
                    <button className="style-button" >Entrar</button>
                </FormStyled>
                <footer>
                    <Link to="/register">Não possuí uma conta? Cadastre-se</Link>
                </footer>
            </MainStyled>
        </>
    )
}

export default Home