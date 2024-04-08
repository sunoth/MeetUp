import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #000000;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 740px;
  height: 100vh;
`
export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: center;
  align-items: center;
`
export const RenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const WelcomeHeading = styled.h1`
  font-size: 36px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #334155;
  margin: 0px;
`
export const WelcomeParagraph = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: #475569;
  font-weight: 400;
  margin-top: 8px;
`
export const RegisterButton = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 5px;
  width: 80px;
  font-size: 11px;
  cursor: pointer;
  font-weight: 500;
  height: 30px;
`
export const WelcomeImage = styled.img`
  display: flex;
  height: 270px;
  margin-top: 30px;
  width: 550px;
`

export const AfterRegisterHeading = styled.h1`
  color: #2563eb;
  font-size: 48px;
  font-weight: 700;
  font-family: 'Roboto';
  margin: 0px;
`
export const AfterRegisterParagraph = styled.p`
  color: #334155;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-top: 8px;
`
