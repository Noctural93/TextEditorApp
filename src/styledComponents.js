import styled from 'styled-components'

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  font-size: 20px;
  padding-top: 10px;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const Image = styled.img`
  width: 300px;
`

export const ImageElement = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #25262c;
  min-height: 50vh;
  min-width: 25vw;
  margin-left: 30px;
  margin-bottom: 20px;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
`
export const HrElement = styled.hr`
  color: #cbd5e1;
  width: 100%;
  border-radius: 1px;
`
export const ButtonContainer = styled.ul`
  list-style-type: none;
  height: 2vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0;
  margin-bottom: 0;
`

export const TextAreaElement = styled.textarea`
  border: none;
  outline: none;
  min-height: 47vh;
  min-width: 23vw;
  background-color: transparent;
  margin: 20px;
  color: #f1f5f9;
  font-size: 16px;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`
