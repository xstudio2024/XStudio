import './App.css'
import { TopNavLinks } from './topbar_db'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import Topbar from './components/topbar'
import { SideNavLinks } from './sidebar_db'
import DropNavBar from './components/DropNavBar'

function App() {

  return (
    <>
     <Router>
      <Topbar />
      <div className="app-container relative h-[90vh]">
        <SideBar/>
        <div className="content">
          <Routes>
            {TopNavLinks.map(link => (
              <Route 
                key={link.id} 
                path={link.url} 
                element={<link.component />}      // Dynamically render component
              />
            ))}
            {SideNavLinks.map(link => (
              <Route 
                key={link.id} 
                path={link.url} 
              />
            ))}
          </Routes>
        </div>
        <div className="absolute right-10 bottom-1">
        <DropNavBar/>
        </div>
      </div>
    </Router>
     
    </>
  )
}

export default App
