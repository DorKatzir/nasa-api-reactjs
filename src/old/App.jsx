
import nasaLogo from '/nasa.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://api.nasa.gov/" target="_blank">
          <img src={nasaLogo} className="logo nasa" alt="Nasa logo" />
        </a>
      </div>

    </>
  )
}

export default App
