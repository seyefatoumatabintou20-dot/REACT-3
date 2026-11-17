export default function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div style={{
      border: "2px solid grey",
      padding: "15px",
      borderRadius: "10px",
      width: "250px",
      margin: "10px"
    }}>
      <h3>{titre}</h3>
      <p>{auteur}</p>
      <p>{estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}</p>
      <button onClick={onClickEmprunt}>
        {estDisponible ? "Emprunter" : "Rendre"}
      </button>
    </div>
  )
}