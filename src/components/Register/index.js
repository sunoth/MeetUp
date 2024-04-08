import {MainContainer, HomeContainer} from '../Home/styledComponents'
import Header from '../Header'
import {
  RegisterContainer,
  RegisterImage,
  RegisterForm,
  RegisterHeading,
  RegisterLabel,
  RegisterInput,
  RegisterNowButton,
  ErrorMsg,
  SelectTopic,
  SelectOption,
} from './styledComponents'
import RegisterContext from '../../context/RegisterContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeRegister,
        changeTopic,
        error,
        displayError,
      } = value

      const onClickSubmit = event => {
        event.preventDefault()
        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          changeRegister()
        } else {
          displayError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <MainContainer>
          <HomeContainer>
            <Header />
            <RegisterContainer>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />

              <RegisterForm onSubmit={onClickSubmit}>
                <RegisterHeading>Let us join</RegisterHeading>
                <RegisterLabel htmlFor="name">NAME</RegisterLabel>
                <RegisterInput
                  id="name"
                  value={name}
                  type="text"
                  placeholder="Your name"
                  onChange={onChangeName}
                />
                <RegisterLabel htmlFor="topic">TOPICS</RegisterLabel>
                <SelectTopic id="topic" value={topic} onChange={onChangeTopic}>
                  {topicsList.map(eachOption => (
                    <SelectOption key={eachOption.id} value={eachOption.id}>
                      {eachOption.displayText}
                    </SelectOption>
                  ))}
                </SelectTopic>
                <RegisterNowButton type="submit">
                  Register Now
                </RegisterNowButton>
                {error && <ErrorMsg>Please enter your name</ErrorMsg>}
              </RegisterForm>
            </RegisterContainer>
          </HomeContainer>
        </MainContainer>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
