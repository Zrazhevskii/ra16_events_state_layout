import './App.css'
import Store from './components/Store/Store'
import products from './db/products'

function App() {

  return (
    <>
      <Store props={products}/>
    </>
  )
}

export default App
