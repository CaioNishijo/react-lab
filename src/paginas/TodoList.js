export default function TodoList(){
    const person = {
        name: "Hedy Lamarr",
        theme: {
            color: "blue"
        }
    }
    const today = new Date()

    function formatDate(date){
        return new Intl.DateTimeFormat(
            'en-US',
            {weekday: "long"}
        ).format(date)
    }

    return(
        <div style={person.theme}>
            <h1>{person.name} Todos for {formatDate(today)}</h1>
            <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" className="photo" />
            <ul>
                <li>Do something</li>
                <li>Do other thing</li>
            </ul>
        </div>

    )
}