import styled from "styled-components";

export const HeroTitle = styled.h1`
    text-align: center;
    color: ${p => p.theme.colors.primaryTextColor};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[5]}px;
    font-family: ${p => p.theme.fonts.monospace};
`

