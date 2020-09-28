import React from "react"
import styled, { css } from "styled-components"
import { Search } from "styled-icons/fa-solid/Search"
import { Algolia } from "styled-icons/fa-brands/Algolia"

export const Root = styled.div`
  position: relative;
  display: flex;
`

const focus = css`
  background: transparent;
  color: ${props => props.theme.darkBlue};
  cursor: text;
  width: 60vw;
`

const collapse = css`
  width: 60vw;
  cursor: pointer;
  color: #ac7970;
  ${props => props.focus && focus}
  margin-left: 0;
  padding-left: 32px;
  ::placeholder {
    color: #ac7970;
    opacity: 0.9;
  }
`
// margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};

const expand = css`
  background: ${props => props.theme.veryLightGray};
  margin-left: 0;
  padding-left: 0;
`

export const Input = styled.input`
  outline: none;
  position: absolute;
  border: none;
  top: 0;
  left: 0;
  z-index: 300;
  font-size: 1.8rem;
  background: transparent;
  transition: ${props => props.theme.shortTrans};
  {hightlight-next-line}
  ${props => (props.collapse ? collapse : expand)};
`

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `flex` : `none`)};
  flex-direction: column;
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  left: 0;
  top: 32px;
  width: 88vw;
  max-width: 88vw;
  padding: 0.7em 1em 0.4em;
  background: white;
  border-radius: ${props => props.theme.smallBorderRadius};
  > * + * {
    padding-top: 1em !important;
    border-top: 0px solid ${props => props.theme.darkGray};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${props => props.theme.lightGray};
  }
  * {
    margin-top: 0;
    padding: 0;
    font-size: 1.4rem;
  }
  ul {
    list-style: none;
  }
  mark {
    color: white;
    background: #c99086;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h4 {
      font-family: "freight-sans-pro", sans-serif;
      font-size: 2rem;
      text-transform: uppercase;
      color: #c99086;
      background: ${props => props.theme.gray};
    }
  }
  h4 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`

export const PoweredBy = () => (
  <span css="font-size: 0.3rem; text-align: left; padding: 0;">
    propulsé par
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </span>
)
