import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
async function sha256(texto) {
  const bytes = new TextEncoder().encode(texto);
  const buffer = await crypto.subtle.digest(
  "SHA-256",
  bytes
  );
  return [...new Uint8Array(buffer)]
  .map(b => b.toString(16).padStart(2, "0"))
  .join("");
}
sha256("Professor Celso").then(console.log);
const [texto, setTexto] = useState('');
const [hash, setHash] = useState('Calculando Hash SHA-256');
  return (
    <>
    <h1> Cifragem em Hash SHA-256</h1>
      <form>
        <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Digite aqui" />
        <input type='button' value='Submit' onClick={() => sha256(texto).then((hash) => setHash(hash))} />
        <p>Resultado: {hash}</p>
      </form>
    </>
  )
}

export default App
