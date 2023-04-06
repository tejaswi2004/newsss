import React, { Component } from 'react'
import TaskBar from './components/TaskBar'
import Look from './components/Look'
import 
{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export class App1 extends Component {
  render() {
    return (
      <div>
        <Router>
          <TaskBar />
          <Switch>
            <Route exact path="/"><Look key="general" pageSize={5} country="in" category="general" /></Route >
            <Route exact path="/business"><Look key="business" pageSize={5} country="in" category="business" /></Route >
            <Route exact path="/entertainment"><Look key="entertainment" pageSize={5} country="in" category="entertainment" /></Route >
            <Route exact path="/general"><Look key="general" pageSize={5} country="in" category="general" /></Route >
            <Route exact path="/health"><Look key="health" pageSize={5} country="in" category="health" /></Route >
            <Route exact path="/science"><Look key="science" pageSize={5} country="in" category="science" /></Route >
            <Route exact path="/sports"><Look key="sports" pageSize={5} country="in" category="sports" /></Route >
            <Route exact path="/technology"><Look key="technology" pageSize={5} country="in" category="technology" /></Route >
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App1
