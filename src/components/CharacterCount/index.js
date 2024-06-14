import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {
  ButtonStyle,
  InputField,
  BContainer,
  CountDes,
  CountDesContainer,
  YContainer,
  MainContainer,
  Char,
  InputButtonContainer,
} from './styledComponent'

class CharacterCount extends Component {
  state = {list: [], inputText: ''}

  onAdd = e => {
    e.preventDefault()
    const {inputText, list} = this.state
    const obj = {char: inputText, id: uuidv4()}
    this.setState(prevState => ({
      list: [...prevState.list, obj],
      inputText: '',
    }))
    console.log(list)
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText, list} = this.state
    return (
      <MainContainer>
        <YContainer>
          <CountDesContainer>
            <CountDes color="#0f172a">
              Count the characters like a Boss
            </CountDes>
          </CountDesContainer>
          {list.length !== 0 ? (
            <ul>
              {list.map(each => (
                <Char key={each.id}>
                  <p>
                    {each.char}:{each.char.length}
                  </p>
                </Char>
              ))}
            </ul>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          )}
        </YContainer>
        <BContainer>
          <CountDes color="#ffbf1f">Character Counter</CountDes>
          <InputButtonContainer>
            <form onSubmit={this.onAdd}>
              <InputField
                type="text"
                onChange={this.onChangeInput}
                value={inputText}
                placeholder="Enter the Characters here"
              />
              <ButtonStyle type="submit">Add</ButtonStyle>
            </form>
          </InputButtonContainer>
        </BContainer>
      </MainContainer>
    )
  }
}

export default CharacterCount
