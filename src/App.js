import HeaderComp  from "./comp/header";
import TestCom from   "./comp/test"
import ErrorScreen from   "./Screen/errorScreen"
import ContactScreen from  "./Screen/ContactScreen"
import FooterComp from   "./comp/footer"
import {useGlobalContext} from  "./context";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import HomeScreen from "./Screen/HomeScreen";
function App() {
 
  return (
   /*<>
     <HeaderComp></HeaderComp>
   </>*/
  <Router className="App">
    <HeaderComp></HeaderComp>
    <main id="main">
      <Routes>
      <Route path='/' element={<HomeScreen/>}> </Route>
      <Route path='/contattaci' element={<ContactScreen/>}> </Route>
        <Route path='/test' element={<TestCom/>}> </Route>
        <Route path='*' element={<ErrorScreen/>}> </Route>
      </Routes>
    </main>
    <FooterComp></FooterComp>
  </Router>
  );
}

export default App;
