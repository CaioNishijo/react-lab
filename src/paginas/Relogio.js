import React, { useState, useEffect } from 'react';

function Relogio(){
    const [hora, setHora] = useState('');
    const [minuto, setMinuto] = useState('');
    const [segundo, setSegundo] = useState('');

    useEffect(() => {
        const atualizarRelogio = () => {
            const agora = new Date();
            setHora(agora.getHours().toString().padStart(2, '0'));
            setMinuto(agora.getMinutes().toString().padStart(2, '0'));
            setSegundo(agora.getSeconds().toString().padStart(2, '0'));
        }
        atualizarRelogio();

        const intervalo = setInterval(atualizarRelogio, 1000);

        return () => clearInterval(intervalo);
    }, [])


    return(
        <>
            <h1>{hora}:{minuto}:{segundo}</h1>
        </>
    )
}



export default Relogio;