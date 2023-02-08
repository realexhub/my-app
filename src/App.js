import HeaderComp  from "./comp/header";
import TestCom from   "./comp/test"
import FooterComp from   "./comp/footer"
import {useGlobalContext} from  "./context";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
function App() {
 
  return (
   /*<>
     <HeaderComp></HeaderComp>
   </>*/
  <Router className="App">
    <HeaderComp></HeaderComp>
    <Routes>
      <Route path='/test' element={<TestCom/>}>
      </Route>
    </Routes>
    <FooterComp></FooterComp>
  </Router>
  );
}

export default App;
