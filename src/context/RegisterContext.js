import React from 'react'

const RegisterContext = React.createContext({
  isRegistered: false,
  changeRegister: () => {},
  name: '',
  changeName: () => {},
  topic: '',
  changeTopic: () => {},
  error: false,
  displayError: () => {},
})

export default RegisterContext
