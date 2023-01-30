import { MainStyled, ContainerStyled, FormStyled, ScreenConfirmStyled } from "./styledPurchase"

import pointerimage from "../../assets/seat.png"
import listbono from "../../assets/listbobo.png"
import price from "../../assets/price.png"

import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import axios from "axios"
import ApiServer from "../../api/API"
import { contextToken } from "../../contexts/contextAPI"

function Purchase() {
    const { _token } = useContext(contextToken)
    const { idSubs } = useParams(null)
    const [ _planeObject, setPlaneObject ] = useState([])

    const [ _dateValidation, setDateValidation ] = useState("")
    const [ _nameCard, setNameCard ] = useState("")
    const [ _codeSecurityNumber, setSecurityNumber ] = useState("")
    const [ _digitCardNumber, setDigitCardNumber ] = useState("")

    const _numbersValidate = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    const [ _confirmAssignature, setConfirmAssignature ] = useState(false)

    useEffect(() => {
        const _getPlane = axios.get(ApiServer + "/subscriptions/memberships/" + idSubs, {
            headers: {
                Authorization: `Bearer ${_token}`
            }

        }).then(
            response => setPlaneObject(response.data)
        ).catch(
            error => alert(error.response.data.message)
        )
    }, [])

    function checkInValidate(str) {
        if(_numbersValidate.some(n => n == str.nativeEvent.data) == true){
            setDateValidation(str.target.value)

            if(_dateValidation.length == 2){
                setDateValidation(_dateValidation + "/")
            }

        }else if( str.nativeEvent.inputType == "deleteContentBackward"){
            setDateValidation(str.target.value)
        }
    }

    function checkInsertNameInValue(str) {
        if(_numbersValidate.some(n => n == str.nativeEvent.data) == false){
            setNameCard(str.target.value)
        }
    }
    
    function checkInSecurityCode(str) {
       if(_numbersValidate.some(n => n == str.nativeEvent.data)){
            setSecurityNumber(str.target.value)

        }else if(str.nativeEvent.inputType == "deleteContentBackward"){
            setSecurityNumber(str.target.value)
        }
    }

    function checkDigitNumber(str) {
        if(_numbersValidate.some(n => n == str.nativeEvent.data)){
            setDigitCardNumber(str.target.value)

        }else if(str.nativeEvent.inputType == "deleteContentBackward"){
            setDigitCardNumber(str.target.value)
        }
    }

    function alterationValueOnConfirm(){
        setConfirmAssignature(!_confirmAssignature)
    }

    function sendRequestSignature(data) {
        const _objectInfoCard = {
            membershipId: idSubs,
            cardName: _nameCard.match(/.{1,4}/g).join(" "),
            cardNumber: _digitCardNumber,
            securityNumber: parseInt(_codeSecurityNumber),
            expirationDate: _dateValidation
        }
        const _sendSignature = axios.post(ApiServer + "/subscriptions", _objectInfoCard, {
            headers: {
                Authorization: `Bearer ${_token}`
            }
        }).then(
            sucess => console.log(sucess)
        )
        .catch(
            error => console.log(error)
        ) 

        data.preventDefault()
    }

    if(_planeObject == 0){
        return (
            <div>
                C A R R E G A N D O...
            </div>
        )
    }

    return (
        <>
            <MainStyled colorTitle={color => { if(_planeObject.id == 2){ return "#FFF16F" }else if (_planeObject.id == 3){ return "#56D59F"}
            }}>
                <header>
                    <Link to="/subscriptions">
                        <img src={pointerimage}></img>
                    </Link>
                    <img src={_planeObject.image}></img>
                    <h1>{_planeObject.name}</h1>
                </header>
                <ContainerStyled>
                    <div className="info-purchase">
                        <img src={listbono}/>&nbsp;
                        <span className="info-title">Benefícios:</span>
                        <ol>
                            {_planeObject.perks.map(e => 
                                <li key={e.id}>{e.id}.&nbsp;{e.title}</li>
                            )}
                        </ol>
                        <img src={price}/>
                        <span className="info-title">&nbsp;Preço:<br/><br/></span>
                        <p>R$&nbsp;{_planeObject.price} cobrados mensalmente</p>
                    </div>
                    <FormStyled  onSubmit={sendRequestSignature}>
                        <input 
                        hidden={false}
                        type="text" className="style-button"
                        value={_nameCard} 
                        onChange={checkInsertNameInValue} 
                        placeholder="Nome impresso no cartão" 
                        required />
                        <input 
                        type="text" className="style-button" 
                        placeholder="Digitos do cartão" 
                        value={_digitCardNumber}
                        maxLength={16}
                        onChange={checkDigitNumber}
                        required />
                        <input 
                        type="text" className="style-button resolution" 
                        placeholder="Código de segurança"
                        maxLength={3}
                        onChange={checkInSecurityCode} 
                        value={_codeSecurityNumber}
                        required />
                        <input 
                        value={_dateValidation} type="text" 
                        maxLength={5} className="style-button resolution"
                        onChange={checkInValidate}
                        placeholder="Validade mm/yy" 
                        required />
                        <button type="button"
                        onClick={alterationValueOnConfirm} 
                        className="style-button"
                        >ASSINAR</button>
                        <ScreenConfirmStyled visible={_confirmAssignature ? "visibility" : "hidden"} >
                            <div>
                                <p>Tem certeza que deseja assinar o plano<br/> Driven Plus (R$ {_planeObject.price})?</p>
                                <span>
                                    <button className="cancelpurchase" onClick={alterationValueOnConfirm}>NÃO</button>
                                    <button type="submit">SIM</button>
                                </span>
                            </div>
                        </ScreenConfirmStyled>
                    </FormStyled>
                </ContainerStyled>
            </MainStyled>
        </>
    )
}

export default Purchase