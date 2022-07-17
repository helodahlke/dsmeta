import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//React é responsavel por processar as infos que estão
//no projeto e processar para o navegador (renderizar)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
