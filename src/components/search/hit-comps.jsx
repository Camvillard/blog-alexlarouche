import React, { Fragment } from "react"
import { Highlight, Snippet } from "react-instantsearch-dom"
import { Link } from "gatsby"

export const PageHit = clickHandler => ({ hit }) => (
  <div>
    <a href={hit.slug} onClick={clickHandler}>
      <h5>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h5>
    </a>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)

export const PostHit = clickHandler => ({ hit }) => (
  <div>
    <a href={hit.slug} onClick={clickHandler}>
      <h5>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h5>
    </a>
    <div>
      <Highlight attribute="date" hit={hit} tagName="mark" />
    </div>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)

export const FavHit = clickHandler => ({ hit }) => (
  <div>
    <a href={hit.slug} onClick={clickHandler}>
      <h5>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h5>
    </a>
    <div>
      <Highlight attribute="date" hit={hit} tagName="mark" />
    </div>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)
