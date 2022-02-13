import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Content from './pages/Content'
import Counter from "./components/Counter"
import Error from './pages/Error'

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/Counter' element={<Counter />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
    </>
  )
}

export default App;