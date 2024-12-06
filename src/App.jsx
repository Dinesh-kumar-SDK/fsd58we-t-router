import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ParentRoute from './ParentRoute'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import About from './Pages/About'
//Browser router is an jsx component it returns jsx, must use opening and closing tag.
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ParentRoute />}>
            <Route
              path="/"
              element={
                <Home />
              }
            />
            <Route
              path="/skills"
              element={
                <Skills />} />
            <Route
              path="/about"
              element=
              {
                <About />
              }
            />
            <Route
              path="/contact"
              element={
                <h1>Contact information will appear here</h1>}
            />
            <Route
              path="*"
              element={
                <h1>404 page not found</h1>
              }
            />
            {/* default route: default dom element when no route/path is found, use * as path */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
