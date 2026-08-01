import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Agenda from './pages/Agenda'
import Activities from './pages/Activities'
import Caving from './pages/Caving'
import Rescue from './pages/Rescue'
import Competitions from './pages/Competitions'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="activities" element={<Activities />} />
        <Route path="activities/caving" element={<Caving />} />
        <Route path="activities/rescue" element={<Rescue />} />
        <Route path="competitions" element={<Competitions />} />
      </Route>
    </Routes>
  )
}

export default App
