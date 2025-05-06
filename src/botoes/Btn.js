import React from 'react';

function Btn({contador, setContador, tipo}){
        if(tipo === 1){
            return <button onClick={() => {setContador(contador + 1)}}>Adicionar</button>;
        } else if(tipo === 0){
            return <button onClick={() => {if(contador > 0)setContador(contador - 1)}}>Diminuir</button>;
        }
}



export default Btn;