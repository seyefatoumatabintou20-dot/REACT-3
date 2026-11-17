import { useState } from 'react'
import BookCard from './components/BookCard'

function App() {
  const [books, setBooks] = useState([
    { id: 1, titre: "Le Petit Prince", auteur: "Saint-Exupéry", estDisponible: true },
    { id: 2, titre: "Une si longue lettre", auteur: "Mariama Bâ", estDisponible: true },
    { id: 3, titre: "L'Aventure ambiguë", auteur: "Cheikh Hamidou Kane", estDisponible: false },
    { id: 4, titre: "Les Misérables", auteur: "Victor Hugo", estDisponible: true },
  ])

  const [titre, setTitre] = useState("")
  const [auteur, setAuteur] = useState("")

  const onClickEmprunt = (bookId) => {
    const newBooks = books.map((b) => {
      if (b.id === bookId) {
        return { ...b, estDisponible: !b.estDisponible }
      }
      return b
    })
    setBooks(newBooks)
  }

  const ajouterLivre = (e) => {
    e.preventDefault()
    if (titre === "" || auteur === "") return
    setBooks([...books, { id: Date.now(), titre: titre, auteur: auteur, estDisponible: true }])
    setTitre("")
    setAuteur("")
  }

  const nbDisponibles = books.filter((b) => b.estDisponible).length

  return (
    <div style={{ padding: "10px" }}>
      <h1>Livres disponibles : {nbDisponibles}</h1>

      <form onSubmit={ajouterLivre}>
        <input value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Titre" />
        <input value={auteur} onChange={(e) => setAuteur(e.target.value)} placeholder="Auteur" />
        <button type="submit">Ajouter</button>
      </form>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {books.map((b) => (
          <BookCard
            key={b.id}
            titre={b.titre}
            auteur={b.auteur}
            estDisponible={b.estDisponible}
            onClickEmprunt={() => onClickEmprunt(b.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
