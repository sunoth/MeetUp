import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 50px;
`
export const RegisterImage = styled.img`
  height: 280px;
  width: 270px;
`
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`
export const RegisterHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  color: #334155;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 10px;
`
export const RegisterLabel = styled.label`
  font-family: 'Roboto';
  font-size: 10px;
  color: #475569;
  font-weight: 500;
  margin-bottom: 4px;
`
export const RegisterInput = styled.input`
  font-family: 'Roboto';
  font-size: 11px;
  background-color: transparent;
  height: 30px;
  color: #334155;
  padding-left: 10px;
  font-weight: 500;
  border-radius: 2px;
  margin-bottom: 18px;
  outline: none;
  border: 1px solid #7b8794;
`

export const SelectTopic = styled.select`
  border: 1px solid #7b8794;
  height: 30px;
  border-radius: 0px;
  outline: none;
  margin-bottom: 20px;
  padding-left: 10px;
  color: #334155;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
`

export const SelectOption = styled.option`
  color: #64748b;
  border-radius: 0px;
  outline: none;
  font-size: 13px;
`

export const RegisterNowButton = styled.button`
  background-color: #2563eb;
  color: #ffffff;
  font-size: 10px;
  font-weight: 500;
  font-family: 'Roboto';
  padding: 4px;
  cursor: pointer;
  outline: none;
  border: none;
  width: 110px;
  height: 30px;
  border-radius: 7px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 10px;
  font-weight: 600;
  margin: 0px;
  margin-top: 3px;
`
