import styled, { StyledFunction } from "styled-components";

 export const Container = styled.div `
    
    height: 100vh;
    display: grid;
    grid-template-columns: 0.3fr auto;
    grid-template-rows: 0.1fr auto;
    grid-template-areas: 'as mh'
                         'as ct';
 `;

  