import styled from 'styled-components/macro';

export const Background = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url('../images/home/artwork.jpg') center / cover no-repeat;
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
