import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 20%;
height: 40%;
padding: 20px;
border: 0;
border-radius: 40px;
background-color: rgba(200,200,200, .5);

@media (max-width: 768px) {
  width: 30%;
}

@media (max-width: 700px) {
  width: auto;
}
`;

export const Input = styled.input`
width: 100%;
height: 40px;
border: 0;
background-color: rgba(250,250,250, .05);
color: rgb(80,80,80);

&:focus {
  outline: none;
}

&::placeholder {
  font-size: 16px;
  padding-left: 10px;
  vertical-align: center;
}

@media (max-width: 700px) {
  & {
    display: none;
  }
}

`;