import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/user/UserLogin'
import UserSignup from './pages/user/UserSignup'
import UserHome from './pages/user/Home'
import CaptainSignup from './pages/captain/CaptainSignup'
import CaptainLogin from './pages/captain/CaptainLogin'
import CaptainHome from './pages/captain/Home'
import UserContext from "./context/UserContext";
import CaptainContext from "./context/CaptainContext";
import OtpVerify from "./pages/OtpVerify";
import UserProtectedWrapper from "./pages/user/UserProtectedWrapper";
import CaptainProtectedWrapper from "./pages/captain/CaptainProtectedWrapper";


const App = () => {
  return (
    <div>
      <UserContext>
      <CaptainContext>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-signup" element={<UserSignup />} />
          <Route path="/captain-signup" element={<CaptainSignup />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/otpverify" element={<OtpVerify />} />                                                       
          <Route element={<UserProtectedWrapper />}>
            <Route path="/user/home" element={<UserHome />} />
          </Route>
          <Route element={<CaptainProtectedWrapper />}>
            <Route path="/captain/home" element={<CaptainHome />} />
          </Route>
        </Routes>
      </CaptainContext>
      </UserContext>
    </div>
  )
}

export default App
