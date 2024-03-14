// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 600px;
  @media screen and (min-width: 768px) {
    width: 95%;
    margin-top: 63px;
    margin-bottom: 63px;
  }
`

export const Title = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: 500;
  margin: 0;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 31px;
    line-height: 1.4;
  }
`

export const Subtitle = styled.p`
  text-align: center;
  color: #334155;
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 11px;
  margin-bottom: 11px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    margin-bottom: 15px;
    line-height: 1.4;
  }
`

export const Image = styled.img`
  width: 100%;
  margin-top: 13px;
  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }
`

export const Description = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 15px;
  margin-bottom: 7px;
  line-height: 1.6;
  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
  }
`

export const Button = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  background-color: #1f81ff;
  border: none;
  border-radius: 6px;
  margin-top: 7px;
  padding: 8px 16px;
  align-self: flex-start;
  cursor: pointer;
  outline: none;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-top: 15px;
    align-self: center;
  }
`
