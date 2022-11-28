import styled from "styled-components";

export const FormStyled = styled.form`
      display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;

 width: 80%;
  max-width: 550px;
  margin: 1em auto;
  padding: 1em;
  border-radius: 10px;
  background: rgb(100,100,100) radial-gradient(circle at 50% 0, rgba(255,255,255,.65), rgba(255,255,255,.35));
  box-shadow:
   inset rgba(0,0,0,.6) 0 -3px 8px,
   inset rgba(252,255,255,.7) 0 3px 8px,
   rgba(0,0,0,.8) 0 3px 8px -3px;
 
`

export const Label = styled.label`
display: flex;
flex-direction: column;

font-size: ${p => p.theme.fontSizes[3]}px;


`
export const Input = styled.input`
     padding: ${p => p.theme.space[2]}px;
     margin-top: ${p => p.theme.space[2]}px;

    background-color: transparent;
    outline: none;
    resize: none;
    border-radius: 5px;

`

export const Button = styled.button`
     display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: ${p => p.theme.space[4]}px; 
  background-color: white;
  width: 194px;
  height: 40px;

  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p =>p.theme.fontWeights.bold};
  border: 1px solid black;
  border-radius: 25px;

  transition: background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background-color: #72c567;
  }
`