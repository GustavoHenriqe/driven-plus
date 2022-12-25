import { MainStyledRegister, FormStyled } from "./styledRegister"
import API from "../../api/API"

import { Link, useNavigate, useRoutes } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function Register() {
    const [_name, setName] = useState("")
    const [_email, setEmail] = useState("")
    const [_cpf, setCpf] = useState("")
    const [_password, setPassword] = useState("")
    const navigate = useNavigate()

    function catchInfos(element) {
        if (element.target.id == "name") {
            setName(element.target.value)
        }
        else if (element.target.id == "email") {
            setEmail(element.target.value)
        }
        else if (element.target.id == "cpf") {
            setCpf(element.target.value)
        }
        else if (element.target.id == "password") {
            setPassword(element.target.value)
        }
    }

    function sendRegister(event) {
        const _requestObject = {
            email: _email,
            name: _name,
            cpf: _cpf,
            password: _password
        }
        const _sendRequest = axios.post(API + "/auth/sign-up", _requestObject)

        _sendRequest.then(
            response => {
                alert("Cadastrado com sucesso")
                navigate("/")
            }
        )
        _sendRequest.catch(
            error => alert(error.message)
        )

        event.preventDefault()
    }

    return (
        <> 
            <MainStyledRegister>
                <FormStyled onSubmit={sendRegister} >
                    <input 
                    type="text" id="name" 
                    value={_name}
                    onChange={catchInfos}  
                    className="style-button" 
                    placeholder="Nome" required
                    />
                    <input 
                    type="text" id="cpf"
                    value={_cpf}
                    onChange={catchInfos} 
                    className="style-button" 
                    placeholder="CPF" required
                    maxLength={11}
                    />
                    <input 
                    type="email" id="email"
                    value={_email}
                    onChange={catchInfos}  
                    className="style-button" 
                    placeholder="E-mail" required
                    />
                    <input 
                    type="password"
                    value={_password}
                    onChange={catchInfos}  
                    id="password" 
                    className="style-button" 
                    placeholder="Senha"
                    required
                    />
                    <button type="submit" className="style-button">
                        Cadastrar
                    </button>
                </FormStyled>
                <footer>
                    <Link to="/">Já possuí uma conta? Entre</Link>
                </footer>
            </MainStyledRegister>
        </>
    )
}

export default Register