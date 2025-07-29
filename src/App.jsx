import './App.css'
import mock from './mock'
import { ItemList } from './ItemList'
function App() {
  return (
    <>
      <h1>Module 1</h1>
      <div className="card">
      <ItemList items={mock}/>
      </div>
      
    </>
  )
}

export default App
