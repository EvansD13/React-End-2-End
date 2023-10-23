import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as Pages from "./pages"
import { Routes, Route } from "react-router-dom"
import { Header } from "./components"
import './App.css'

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Header />}>
        <Route index element = {<Pages.Homepage />} />
        <Route path = "/shows">
            <Route index element = {<Pages.ShowAllPage />} />
            <Route index path = ":id" element = {<Pages.ShowPage />} />
        </Route>
        <Route index path = "search" element = {<Pages.SearchPage />} />
        <Route index path = "*" element = {<Pages.NotFoundPage />} />
      </Route>
    </Routes>
  )

}

export default App

//https://api.tvmaze.com/shows

/*
Making Routes:
  1. Setup your router (nain.jsx)
  2. Define the routes (App.jsx)
  3. Handle Navigation (Nav.jsx)
*/