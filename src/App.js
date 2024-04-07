import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Resume from "./components/Resume/Resume";
import Certification from "./components/Certification/Cert";

function App() {

    return (

        <Router>
            <div className="App">
                <Route path="/" exact component={Resume}/>
                <Route path="/certification" component={Certification}/>
            </div>
        </Router>

    );
}

export default App;
