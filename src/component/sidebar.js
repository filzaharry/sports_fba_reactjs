import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
    </div>
  )
}
