import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Link, Route } from "wouter"
import './index.css'
import Menu from './components/Menu.tsx'

const Router = () => (
  <>
    <Route path="/game" component={App} />
    <Route path="/" component={Menu} />
  </>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
