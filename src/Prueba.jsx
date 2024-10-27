import Pisos from "./pisosComponents/Pisos"
import Salon from "./aulaComponents/Salon";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css'

function Prueba () {
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Pisos aula ='1'/>}/>
                <Route path="/salon" element={<Salon/>} />
            </Routes>
        </Router>
        </>
    )
}

export default Prueba;