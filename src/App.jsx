

import { Route,Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import AuthPage from "./pages/Homepage/AuthPage/AuthPage";



function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/auth' element={<AuthPage />} />
     </Routes>
    </>
  )
}

export default App;
