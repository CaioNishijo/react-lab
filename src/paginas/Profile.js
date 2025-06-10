import Avatar from './Avatar'

function Card({ children }){
    return(
        <div className='card'>
            {children}
        </div>
    )
}

function Profile(){
    return <Card>
        <Avatar 
                person={{
                    name: "Katsuko Saruhashi",
                    imgaeId: "YfeOqp2"
                }}
            size={200}
        />
    </Card>
}

export default Profile