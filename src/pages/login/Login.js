import { MainStyled, FormStyled } from "./styledLogin"
import Drivenlogo from "../../assets/drivenplus_logo.png"

import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"

import axios from "axios"
import API from "../../api/API"
import { contextToken } from "../../contexts/contextAPI"

function Home() {
    const [_email, setEmail] = useState("")
    const [_password, setPassword] = useState("")
    const navigate = useNavigate()
    const { setPersistenceToken } = useContext(contextToken)

    function catchInfoLogin(element) {
        if (element.target.id == "email"){
            setEmail(element.target.value)
        }else if(element.target.id == "password"){
            setPassword(element.target.value)
        }
    }

    function toLogin(event){
        const _loginObject = { email: _email, password: _password }
        const _apiRequestLogin = axios.post(API + "/auth/login", _loginObject)
        
        _apiRequestLogin.then(
            response => sucessLogin(response.data)
        )
        _apiRequestLogin.catch(
            error => alert(error.response.data.message)
        )

        event.preventDefault()
    }

    function sucessLogin(response) {
        setPersistenceToken(response.token)

        if(response.membership == null){
            navigate("/subscriptions")
        }else{
            navigate("/home")
        }
    }

    return (
        <>
            <MainStyled>
                <header className="header-home">
                    <Link to="/" >
                        <img src={Drivenlogo} />
                    </Link>
                </header>
                <FormStyled onSubmit={toLogin}>
                    <input value={_email} 
                    className="style-button" id="email" 
                    type="email" placeholder="E-mail" 
                    onChange={catchInfoLogin} required 
                    />
                    <input value={_password} 
                    className="style-button" id="password" 
                    type="password" placeholder="Senha" 
                    onChange={catchInfoLogin} required 
                    />
                    <button type="submit" className="style-button" >ENTRAR</button>
                </FormStyled>
                <footer>
                    <Link to="/register">Não possuí uma conta? Cadastre-se</Link>
                </footer>
            </MainStyled>
        </>
    )
}

export default Home