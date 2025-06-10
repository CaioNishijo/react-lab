import Gallery from "./Gallery"
import ListaPessoas from "./ListaPessoas"
import PackingList from "./PackingList"
import Receita from "./Receita"
import Profile from "./Profile"
import TodoList from "./TodoList"
import TeaSet from "./TeaSet"

export default function Semana3(){
    return(
        <>
            <Gallery></Gallery>
            <hr></hr>
            <TodoList></TodoList>
            <hr></hr>
            <Profile ></Profile>
            <hr></hr>
            <ListaPessoas></ListaPessoas>
            <hr></hr>
            <PackingList></PackingList>
            <hr></hr>
            <TeaSet></TeaSet>
            <hr></hr>
            <h1>Receita 1</h1>
            <Receita drinkers={3}></Receita>
        </>
    )
}