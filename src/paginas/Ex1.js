import React, { useState, useEffect } from 'react';

function Ex1(){
    const [indice, setIndice] = useState(0);
    const [textAtual, setTextoAtual] = useState('');
    const letreiro = "Venha estudar na FATEC";

    useEffect(() => {
            if(indice < letreiro.length){
                const timeout = setTimeout(() => {
                    setTextoAtual((prevText) => prevText + letreiro[indice]);
                    setIndice((prevIndice) => prevIndice + 1);
                }, 1000)

                return () => clearTimeout(timeout);
            }
    }, [indice])

    return <div>{textAtual}</div>
}



export default Ex1;