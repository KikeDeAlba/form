function App() {
  const handleSubmit = (e) => {
    const data = new FormData(e.target)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="name" />
        <input name="price" placeholder="price"/>
        <input name="description" placeholder="description"/>
        <input name="quantity" placeholder="quantity"/>
      </form>
    </div>
  )
}

export default App
