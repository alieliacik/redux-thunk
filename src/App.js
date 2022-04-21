import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'

import ProductListing from './components/ProductListing'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<ProductListing />} />
          <Route path='/product/:productId' exact element={<ProductDetail />} />
          <Route path='*' element={<div>404 Not Found!</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
