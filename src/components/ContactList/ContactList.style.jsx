import styled from "styled-components";


export const List = styled.ul`
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;

 width: 80%;
  max-width: 550px;
  margin: 1em auto;
  padding: 2em;
  border-radius: 10px;
  background: rgb(100,100,100) radial-gradient(circle at 50% 0, rgba(255,255,255,.65), rgba(255,255,255,.35));
  box-shadow:
   inset rgba(0,0,0,.6) 0 -3px 8px,
   inset rgba(252,255,255,.7) 0 3px 8px,
   rgba(0,0,0,.8) 0 3px 8px -3px;
`

export const ListItem = styled.li`
display:flex;
align-items: baseline;
    color: ${p => p.theme.colors.mainTextColor};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[3]}px;
    font-family: ${p => p.theme.fonts.monospace};

    &:not(:first-child){
        margin-top: ${p => p.theme.space[2]}px; 
    }
`
export const Notification = styled.p`
    color: ${p => p.theme.colors.mainTextColor};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[3]}px;
    font-family: ${p => p.theme.fonts.monospace};
`

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