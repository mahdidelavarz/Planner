
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes/routes";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return <Route path={route.path} element={route.element} key={route.id} />
        })}
      </Routes>
    </Router>
  )
}

export default App
