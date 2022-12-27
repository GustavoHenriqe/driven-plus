import { MainStyled } from "./styledPurchase"
import Pointer from "../../assets/seat.png"

import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import axios from "axios"
import ApiServer from "../../api/API"
import { contextToken } from "../../contexts/contextAPI"

function Purchase() {
    const { _token } = useContext(contextToken)
    const { idSubs } = useParams()
    const [_planeObject, setPlaneEspeci] = useState({})

    useEffect(() => {
        const _getPlane = axios.get(ApiServer + "/subscriptions/memberships/" + idSubs, {
            headers: {
                Authorization: `Bearer ${_token}`
            }
        }).then(
            response => setPlaneEspeci(response.data)
        ).catch(
            error => alert(error.response.data.message)
        )
    }, [])

    return (
        <>
            <MainStyled colorTitle={color => { if(_planeObject.id == 2){ return "#FFF16F" }else if (_planeObject.id == 3){ return "#56D59F"}
            }}>
                <header>
                    <Link to="/subscriptions">
                        <img src={Pointer}></img>
                    </Link>
                    <img src={_planeObject.image}></img>
                    <h1>{_planeObject.name}</h1>
                </header>
                <main>
                    
                </main>
            </MainStyled>
        </>
    )
}

export default Purchase