import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// const Router = () => (
//   <>
//     <Route path="/game" component={App} />
//     <Route path="/" component={Menu} />
//   </>
// )

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
