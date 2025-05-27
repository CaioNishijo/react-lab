import { useState } from 'react';

export default function Forms(){
    const [to, setTo] = useState('Alice')
    const [message, setMessage] = useState('Hello')

    function handleSubmit(e){
        e.preventDefault()
        setTimeout(() => {
            alert(`You sent ${message} to ${to}`)
        }, 1000)
    }

    return (
        <form onClick={handleSubmit}>
            <label>
                To: {''}
                <select 
                    value={to}
                    onChange={e=>setTo(e.target.value)}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <textarea
                placeholder='Message'
                value={message}
                onChange={e => setMessage(e.target.value)}
            >
            </textarea>
            <button type='submit'>Enviar</button>
        </form>
    )
}