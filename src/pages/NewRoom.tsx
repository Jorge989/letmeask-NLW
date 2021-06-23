import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import {Button}from '../components/Button'
import { Link } from 'react-router-dom'
import { FormEvent} from 'react'
import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'
export function NewRoom() {
    //  const { user} = useAuth()
    const [newRoom, setNewRoom] = useState("");
    async function handleCreateRoom(event:FormEvent) {
        event.preventDefault()
    }
    return (
        <div  id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="ilustração simbolizando perguntas e respoastas" />
                <strong>Crie sals de Q&am;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
              
       <h2>Criar nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input type="text"
                            placeholder="Nome da sala"
                        onChange={event => setNewRoom(event.target.value)}    
                        />
                        <Button type="submit">
                          Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em um sala existente? <Link  to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}