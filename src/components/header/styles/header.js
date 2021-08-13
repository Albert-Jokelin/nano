import styled from 'styled-components/macro';


export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 75px;
  box-shadow: 1px 0px 20px #d3d3d3;
`
export const Logo = styled.img`
height: 50px;
width: 134px;
margin-right: 50px;
margin-left: 25px;
@media (min-width: 1449px) {
  height: 50px;
  width: 120px;
}
`
export const Link = styled.p`
  color: #000;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  &:hover {
    text-decoration-line: underline;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Login = styled.button`
  cursor: pointer;
  height: fit-content;
  background-color: #000;
  margin-left: auto;
  margin-right: 10px;
  color: white;
  border: 0;
  outline: 0;
  font-size: 1em;
  width: auto;
  padding: 8px 17px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
`;
