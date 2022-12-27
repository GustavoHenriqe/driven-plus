import { MainStyled, ButtonPlanesStyled } from "./styledSubscriptions"

import { useContext, useEffect, useState } from "react"

import { contextToken } from "../../contexts/contextAPI"
import axios from "axios"
import ApiServer from "../../api/API"

import { Link } from "react-router-dom"

function Subscriptions() {
    const [_objectMemberships, setObjectMemberships] = useState([])
    const { _token } = useContext(contextToken) 

    useEffect(() => {
        const _requestMeberships = axios.get(ApiServer + "/subscriptions/memberships", {
			headers: {
				Authorization: `Bearer ${_token}`
			}
		}).then(
            response => setObjectMemberships(response.data)
        )
    }, [])
      
    return (
        <>
            <MainStyled>
                <header>
                    <h1>Escolha seu Plano</h1>
                </header>
                <div className="planes">
                    {_objectMemberships.map(b => 
                       <ButtonPlanesStyled key={b.id}>
                            <Link to={"/subscriptions/" + b.id}>
                                <img src={b.image}></img>
                                <span>R$&nbsp;{b.price}</span>
                            </Link>
                       </ButtonPlanesStyled>
                    )}
                </div>
            </MainStyled>
        </>
    )
}

export default Subscriptions