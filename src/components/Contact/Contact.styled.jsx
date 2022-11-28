import styled from "styled-components"

export const Name = styled.p`
  margin-right: ${p => p.theme.space[1]}px; 
`

export const DeleteBtn = styled.button`
        display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: auto; 
  background-color: white;
  width: 100px;
  height: 25px;

  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p =>p.theme.fontWeights.bold};
  border: 1px solid black;
  border-radius: 25px;

  transition: background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background-color: #c56767;
  }
`