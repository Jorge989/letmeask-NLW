import ilustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import googleIconImg from "../assets/images/google-icon.svg";
import { FormEvent } from "react";
import "../styles/auth.scss";

import { useHistory } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { database } from "../services/firbase";
export function Home() {
  const history = useHistory();
  const [roomCode, setRoomCode] = useState("");
  const { user, signInWithGoogle } = useAuth();
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
      history.push("/rooms/new");
    }
  }
  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();
    if (roomCode.trim() === "") {
      return;
    }
    const roomRef = await database.ref(`rooms/${roomCode}`).get();
    if (!roomRef.exists()) {
      alert("Sala não existe.");
      return;
    }
    if (roomRef.val().endedAt) {
      alert("Sala encerrada.");
      return;
    }
    history.push(`/rooms/${roomCode}`);
  }
  return (
    <div id="page-auth">
      <aside>
        <img
          src={ilustrationImg}
          alt="ilustração simbolizando perguntas e respoastas"
        />
        <strong>Crie sals de Q&am;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em um sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
