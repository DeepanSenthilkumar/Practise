


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Page1 from "./component/Page1"
import Page2 from "./component/Page2"
import Page1 from "./component/hi1"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  )
}

export default App