import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import RegisterContext from './context/RegisterContext'
import './App.css'

class App extends Component {
  state = {
    isRegistered: false,
    name: '',
    topic: 'ARTS_AND_CULTURE',
    error: false,
  }

  changeName = changeName => {
    this.setState({name: changeName})
  }

  changeTopic = changeTopic => {
    this.setState({topic: changeTopic})
  }

  changeRegister = () => {
    this.setState(prevState => ({isRegistered: !prevState.isRegistered}))
  }

  displayError = () => {
    this.setState({error: true})
  }

  render() {
    const {isRegistered, topic, name, error} = this.state

    return (
      <RegisterContext.Provider
        value={{
          isRegistered,
          changeRegister: this.changeRegister,
          name,
          changeName: this.changeName,
          topic,
          changeTopic: this.changeTopic,
          error,
          displayError: this.displayError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
