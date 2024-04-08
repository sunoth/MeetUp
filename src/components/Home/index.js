import {Link} from 'react-router-dom'
import {
  MainContainer,
  HomeContainer,
  WelcomeContainer,
  WelcomeHeading,
  WelcomeParagraph,
  RegisterButton,
  WelcomeImage,
  RenderContainer,
  AfterRegisterHeading,
  AfterRegisterParagraph,
} from './styledComponents'
import Header from '../Header'
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

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  const renderBeforeRegisterView = () => (
    <RenderContainer>
      <WelcomeHeading>Welcome to Meetup</WelcomeHeading>
      <WelcomeParagraph>Please register for the topic</WelcomeParagraph>
      <Link to="/register">
        <RegisterButton type="button" onClick={onClickRegister}>
          Register
        </RegisterButton>
      </Link>
    </RenderContainer>
  )

  const renderAfterRegisterView = (name, topic) => {
    const displayTopic = topicsList.find(eachTopic => eachTopic.id === topic)
    return (
      <RenderContainer>
        <AfterRegisterHeading>{`Hello ${name}`}</AfterRegisterHeading>
        <AfterRegisterParagraph>{`Welcome to ${displayTopic.displayText}`}</AfterRegisterParagraph>
      </RenderContainer>
    )
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {name, topic, isRegistered} = value
        /* console.log(name, topic) */

        return (
          <MainContainer>
            <HomeContainer>
              <Header />
              <WelcomeContainer>
                {isRegistered
                  ? renderAfterRegisterView(name, topic)
                  : renderBeforeRegisterView()}
                <WelcomeImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </WelcomeContainer>
            </HomeContainer>
          </MainContainer>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
