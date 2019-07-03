import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

import { Form, Input } from "./styles"

import { FaSearch } from "react-icons/fa";

export default connectSearchBox(({ refine, ...rest }) => (
  <Form id="search-form">
    <FaSearch id="search-icon" />
    <Input
      id="search-input"
      type="text"
      placeholder=""
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      {...rest}
    />
  </Form>
))
