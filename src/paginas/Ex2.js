import React, { useState, useEffect } from 'react';
import Btn from '../botoes/Btn'
import { TIPO_AUMENTAR, TIPO_DIMINUIR } from '../contantes/constantes';

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
        </div>
        <div>
            <div>
                <h1>Homem</h1>
                <h2>{contadorHomem}</h2>
                <Btn contador={contadorHomem} setContador={setContadorHomem} tipo={TIPO_AUMENTAR}/>
                <Btn contador={contadorHomem} setContador={setContadorHomem} tipo={TIPO_DIMINUIR}/>
            </div>
            <div>
                <h1>Mulher</h1>
                <h2>{contadorMulher}</h2>
                <Btn contador={contadorMulher} setContador={setContadorMulher} tipo={TIPO_AUMENTAR}/>
                <Btn contador={contadorMulher} setContador={setContadorMulher} tipo={TIPO_DIMINUIR}/>
            </div>
        </div>
        </div>
}



export default Ex2;