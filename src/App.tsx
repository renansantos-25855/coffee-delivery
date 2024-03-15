import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
          <GlobalStyle />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
