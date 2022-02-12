import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Content from './pages/Content'
import Counter from "./components/Counter"

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/Counter' element={<Counter />} />
          </Routes>
        </Router>
    </>
  )
}

export default App;