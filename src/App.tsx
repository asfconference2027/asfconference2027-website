import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Agenda from './pages/Agenda'
import Activities from './pages/Activities'
import Caving from './pages/Caving'
import Rescue from './pages/Rescue'
import Sightseeing from './pages/Sightseeing'
import Competitions from './pages/Competitions'
import Speleosports from './pages/Speleosports'
import Cartography from './pages/Cartography'
import Photography from './pages/Photography'
import Venue from './pages/Venue'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="activities" element={<Activities />} />
        <Route path="activities/caving" element={<Caving />} />
        <Route path="activities/rescue" element={<Rescue />} />
        <Route path="activities/sightseeing" element={<Sightseeing />} />
        <Route path="competitions" element={<Competitions />} />
        <Route path="competitions/speleosports" element={<Speleosports />} />
        <Route path="competitions/cartography-competition" element={<Cartography />} />
        <Route path="competitions/photo-competition" element={<Photography />} />
        <Route path="info/venue" element={<Venue />} />
      </Route>
    </Routes>
  )
}

export default App
