import './App.scss'
import Info from './components/Info/Info'
import Header from './components/Header/Header'
import InputArea from './components/InputArea/InputArea'
import Features from './components/Features/Features'

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Features />
      <InputArea />
    </div>
  )
}

export default App
