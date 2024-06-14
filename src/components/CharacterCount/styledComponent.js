import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100%;
`

export const YContainer = styled.div`
  background-color: #ffc533;
  color: #0f172a;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 90vh;
  overflow: auto;
`
export const CountDesContainer = styled.div`
  background-color: #ffbf1f;
  padding: 10px;
  display: flex;
`

export const CountDes = styled.h1`
  font-size: 30px;
  color: ${props => props.color};
  text-align: center;
`

export const BContainer = styled.div`
  background-color: #0f172a;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 90vh;
`
export const InputField = styled.input`
  background-color: white;
  color: #272c47;
  padding: 4px;
`
export const ButtonStyle = styled.button`
  background-color: #ffc533;
  border-style: none;
  color: #1e293b;
  padding: 4px;
  cursor: pointer;
  margin-left: 10px;
`
export const InputButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Char = styled.li`
  color: #0f172a;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 10px;
  list-style-type: none;
`
