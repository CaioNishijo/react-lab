import React, { useState, useEffect } from 'react';
import Btn from '../botoes/Btn'
import styled from "styled-components"
import ResetBtn from '../botoes/ResetBtn';
import iconH from "../img/default-profile-picture-male-icon.png"
import iconM from "../img/default-profile-picture-female-icon.png"
import { TIPO_AUMENTAR, TIPO_DIMINUIR } from '../contantes/constantes';

const SDiv = styled.div`
    display: flex;
    flex-direction: row;
`

function Ex2(){
    const [contadorHomem, setContadorHomem] = useState(0);
    const [contadorMulher, setContadorMulher] = useState(0);
    const [contadorTotal, setContadorTotal] = useState(0)
    
    useEffect(() => {
        setContadorTotal(contadorHomem + contadorMulher);
    }, [contadorHomem, contadorMulher]);

    return <div>
        <div>
            <h1>Total</h1>
            <h2>{contadorTotal}</h2>
            <ResetBtn setContadorH={setContadorHomem} setContadorM={setContadorMulher} setContadorT={setContadorTotal}/>
        </div>
        <SDiv>
            <div>
                <img 
                    src={iconH}
                    alt='ícone masculino'
                    width={200}
                    height={200}
                />
                <h1>Homem</h1>
                <h2>{contadorHomem}</h2>
                <Btn contador={contadorHomem} setContador={setContadorHomem} tipo={TIPO_AUMENTAR}/>
                <Btn contador={contadorHomem} setContador={setContadorHomem} tipo={TIPO_DIMINUIR}/>
            </div>
            <div>
                <img 
                    src={iconM}
                    alt='ícone feminino'
                    width={200}
                    height={200}
                />
                <h1>Mulher</h1>
                <h2>{contadorMulher}</h2>
                <Btn contador={contadorMulher} setContador={setContadorMulher} tipo={TIPO_AUMENTAR}/>
                <Btn contador={contadorMulher} setContador={setContadorMulher} tipo={TIPO_DIMINUIR}/>
            </div>
        </SDiv>
        </div>
}



export default Ex2;