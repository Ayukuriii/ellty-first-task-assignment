import PagesCard from './PagesCard'

function App() {
  return (
    <main className="page-card-shell">
      <PagesCard pageCount={6} visibleRows={4} />
    </main>
  )
}

export default App
