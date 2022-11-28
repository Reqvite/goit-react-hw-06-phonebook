import styled from "styled-components";

export const Title = styled.h2`
    text-align: center;
    color: ${p => p.theme.colors.secondaryTextColor};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[4]}px;
    font-family: ${p => p.theme.fonts.monospace};
`
