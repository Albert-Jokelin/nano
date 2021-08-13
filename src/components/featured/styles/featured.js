import styled from 'styled-components/macro';

export const Background = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${props => props.img}) center / cover no-repeat;
  height: 1000px;
`;

export const Heading = styled.p`
color: white;
max-width: 900px;
font-size: 70px;
font-weight: 700;
font-family: Raleway;
margin: auto;
padding-top: 70px;
text-align: center;
@media (max-width: 600px) {
  font-size: 35px;
}
`;

export const SubHeading = styled.p`
color: white;
max-width: 900px;
font-size: 50px;
font-weight: 500;
font-family: Raleway;
margin: auto;
padding-top: 70px;
text-align: center;
@media (max-width: 600px) {
  font-size: 35px;
}
`;

export const Input = styled.input`
  max-width: 500px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 50px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-left: 10px;
  height: 50px;
  background: black;
  color: white;
  text-transform: capitalize;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  &:hover {
    background: white;
    color: black;
  }
  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;
