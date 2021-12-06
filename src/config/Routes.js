//New Update of Swich, now is Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/home/Home';
import Login from '../views/login/Login';
import SignUp from '../views/signUp/SignUp';


const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route  exact path='/' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route  path="/home" element={<Home/>}/>
            </Routes>
        </Router>

    );
}
export default Routing
