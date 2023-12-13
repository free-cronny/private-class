import './App.css'

function App() {

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;
  
  console.log('Essa é a api usando a .env para organizar o projeto', apiKey)
  console.log('Essa é a api usando a .env para organizar o projeto', apiUrl)

  return (
    <>
      <p>{apiKey} : {apiUrl}</p>
    </>
  )
}

export default App
