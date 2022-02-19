import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
`

export const StyledHeaderPanel = styled.section`
  max-width: 100%;
  width: 100%;
  background: #4cb1ca;
  color: white;
`

export const Logo = styled.a`
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;
  transition: .3s color ease-in-out;

  &:hover {
    color: #ffe4a3;
  }
`

export const Wrapper = styled.div`
  max-width: 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const LogIn = styled.p`
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;
  transition: .3s color ease;

  &:hover {
    color: #ffe4a3;
  }
`

export const SignUp = styled.p`
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;
  transition: .3s color ease;

  &:hover {
    color: #ffe4a3;
  }
`

