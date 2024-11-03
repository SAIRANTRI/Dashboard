import { Route, Routes } from "react-router-dom"
import Overview from "./pages/Overview"
import Products from "./pages/Products"
import Sidebar from "./components/common/Sidebar"
import Users from "./pages/Users"
import Sales from "./pages/Sales"
import Orders from "./pages/Orders"
import Analytics from "./pages/Analytics"
import Settings from "./pages/Settings"



function App() {

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

      <Sidebar/>
      <Routes>
        <Route path='/' element={<Overview/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/sales' element={<Sales/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/analytics' element={<Analytics/>} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
    </div>
  ) 
  
}

export default App
