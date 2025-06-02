import { useState } from 'react'
import ContactList from './ContactList'
import Chat from './Chat'

export default function Messenger(){
    const [to, setTo] = useState(contacts[0])

    return(
        <div>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
            <Chat contact={to} />
        </div>
    )
}

const contacts = [
    { name: 'Taylor', email: 'taylor@email.com'},
    { name: 'Alice', email: 'alice@email.com'},
    { name: 'Bob', email: 'bob@email.com'}
]