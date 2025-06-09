import React from 'react';

function ResetBtn({contador, setContadorH, setContadorM, setContadorT, tipo}){
    return <button onClick={() => {setContadorT(0); setContadorH(0); setContadorM(0)}}>Resetar</button>;
}



export default ResetBtn;