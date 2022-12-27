

import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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

        </>
    )
}

export default Purchase