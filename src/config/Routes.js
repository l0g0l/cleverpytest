//New Update of Swich, now is Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/home/Home';
import Login from '../views/login/Login';
import SignUp from '../views/signUp/SignUp';


const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/login' element={Login}></Route>
                <Route path='/signup' element={SignUp}></Route>               
                <Route path="/" element={Home}></Route>                
            </Routes>
        </Router>

    );
}
export default Routing
