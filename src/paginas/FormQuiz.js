import { useState } from 'react'

export default function FormQuiz(){
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState(null)
    const [status, setStatus] = useState('typing')

    if(status === 'success'){
        return <h1>Correto!</h1>
    }

    async function handleSubmit(e){
        e.preventDefault()
        setStatus('submitting')
        try {
            await submitForm(answer)
            setStatus('success')
        } catch( err ){
            setStatus('typing')
            setError(err)
        }
    }

    function handleTextAreaChange(e){
        setAnswer(e.target.value)
    }

    return(
        <>
            <h2>City quiz</h2>
            <p>
                In wich city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={answer}
                    onChange={handleTextAreaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                <button
                    disabled={
                        answer.length === 0 || status === 'submitting'
                    }
                >
                    submit
                </button>
                {error !== null && <p className='error'>{error.message}</p>}
            </form>
        </>
    )
}

function submitForm(answer){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if(shouldError){
                reject(new Error('try again!'))
            } else{
                resolve()
            }
        }, 1500)
    })
}