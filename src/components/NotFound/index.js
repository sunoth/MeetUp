import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundParagraph,
} from './styledComponents'
import {MainContainer} from '../Home/styledComponents'

const NotFound = () => (
  <MainContainer>
    <NotFoundContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundParagraph>
        We are sorry, the page you requested could not be found.
      </NotFoundParagraph>
    </NotFoundContainer>
  </MainContainer>
)

export default NotFound
