import styled from "styled-components";

export const FilterTitle = styled.p`
     text-align: center;
     margin-top: ${p => p.theme.space[2]}px;
    color: ${p => p.theme.colors.primaryTextColor};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[3]}px;
    font-family: ${p => p.theme.fonts.monospace};
`

export const FilterInput = styled.input`
     padding: ${p => p.theme.space[2]}px;
     margin-top: ${p => p.theme.space[2]}px;

    background-color: transparent;
    outline: none;
    resize: none;
    border-radius: 5px;
`