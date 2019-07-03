import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

// import { Form, Input } from "./styles"

import { FaSearch } from "react-icons/fa";

export default connectSearchBox(({ refine, ...rest }) => (
  <form id="search-form">
    <FaSearch />
    <input
      type="text"
      placeholder="chercher"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      {...rest}
    />
  </form>
))
