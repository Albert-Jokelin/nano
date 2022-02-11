import styled from 'styled-components/macro'

// Save container div inside const
//const container = document.querySelector('.container')

// Helper function to convert pixels to rems (remy)
const remy = px => `${px / 16}rem`

// Function for calculating value for width
const getWidth = (value) => {
  if (!value) return

  let width = value / 12 * 100
  return `width: ${width}%;`
}

// Function for calculating value for flex
const getFlex = (value) => {
  if (!value) return

  let flex = value / 12 * 100
  return `flex: 0 0 ${flex}%;`
}

export const Container = styled.div`
  border: 2px solid gray;
  margin: 10px;
  max-width: 100%;
  display:flex;
  flex-wrap: wrap;
`

export const Row = styled.div`
  margin-right: ${remy(-15)};
  margin-left: ${remy(-15)};
  display: flex;
  flex-wrap: wrap;
`

export const Column = styled.div`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};

  // Columns for mobile
  ${({ xs }) => (xs ? getFlex(xs) : 'flex: 0 0 100%')};
  ${({ xs }) => (xs ? getWidth(xs) : 'width: 100%')};

  // Columns for tablets
  @media (min-width: 576px) {
    ${({ sm }) => sm && getFlex(sm)};
    ${({ sm }) => sm && getWidth(sm)};
  }

  // Columns for small desktops
  @media (min-width: 768px) {
    ${({ md }) => md && getFlex(md)};
    ${({ md }) => md && getWidth(md)};
  }

  // Columns for medium desktops
  @media (min-width: 992px) {
    ${({ lg }) => lg && getFlex(lg)};
    ${({ lg }) => lg && getWidth(lg)};
  }

  // Columns for large desktops and HD devices
  @media (min-width: 1200px) {
    ${({ xl }) => xl && getFlex(xl)};
    ${({ xl }) => xl && getWidth(xl)};
  }
`

export const Holder = styled.div`
  border: 2px solid gray;
  margin: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 500px;
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s;

  &:hover{
    color:white;
    background-color: grey;
    transform: scale(1.05)
  }

`
export const Image = styled.img`
  margin-left:auto;
  margin-right: auto;

  width: 300px;
  content: url(${props => props.src});
  border-radius: 10px 10px 0px 0px;
`
