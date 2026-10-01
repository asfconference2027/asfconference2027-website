import { Routes, Route, Navigate } from 'react-router-dom'
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
import Talks from './pages/Talks'
import Sponsors from './pages/Sponsors'
import Tickets from './pages/Tickets'
import GettingThere from './pages/GettingThere'
import Accommodation from './pages/Accommodation'
import MovieNight from './pages/MovieNight'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {/* Redirect for the old Google Sites default page URL, since it's
            been advertised externally */}
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="activities" element={<Activities />} />
        <Route path="activities/caving" element={<Caving />} />
        <Route path="activities/rescue" element={<Rescue />} />
        <Route path="activities/sightseeing" element={<Sightseeing />} />
        <Route path="activities/talks" element={<Talks />} />
        <Route path="activities/movie-night" element={<MovieNight />} />
        <Route path="competitions" element={<Competitions />} />
        <Route path="competitions/speleosports" element={<Speleosports />} />
        <Route path="competitions/cartography-competition" element={<Cartography />} />
        <Route path="competitions/photo-competition" element={<Photography />} />
        <Route path="info/venue" element={<Venue />} />
        <Route path="info/sponsors" element={<Sponsors />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="info/getting-there" element={<GettingThere />} />
        <Route path="info/accommodation" element={<Accommodation />} />
      </Route>
    </Routes>
  )
}

export default App
