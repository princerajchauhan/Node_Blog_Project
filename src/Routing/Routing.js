
// import Home from '../Components/Home'
import {
    Routes,
    Route
} from 'react-router-dom'
import Fitenss from '../Components/Fitness'
import Bollywood from '../Components/Bollywood'
import Technology from '../Components/Technology'
import Hollywood from '../Components/Hollywood'
import Food from '../Components/Food'
import CategoryDetail from '../Components/CategoryDetail'
import Footer from '../Components/Footer'
import { Context } from '../Data'
import { lazy, Suspense } from 'react'
import Spinner from '../Spinner/Spinner'

const Home = lazy(()=>import("../Components/Home"))


const Routing = () => {
    return (
        <>
            <Context>
                <Routes>
                    <Route path="/" element={
                        <Suspense fallback={<Spinner />}>
                            <Home />
                        </Suspense>
                    } />
                    <Route path="/bollywood" element={<Bollywood />} />
                    <Route path="/technology" element={< Technology />} />
                    <Route path="/hollywood" element={<Hollywood />} />
                    <Route path="/fitness" element={<Fitenss />} />
                    <Route path="/food" element={<Food />} />
                    <Route path="/details/:id" element={<CategoryDetail />} />
                </Routes>
                <Footer />
            </Context>
        </>
    )
}

export default Routing