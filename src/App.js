import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './redux/store'
import ProductListing from './pages/Products/components/ProductListing'
import ProductDetail from './pages/ProductDetail/components/ProductDetails'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<h1>Loading...</h1>}>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<ProductListing />} />
            <Route
              path='/product/:productId'
              exact
              element={<ProductDetail />}
            />
            <Route path='*' element={<div>404 Not Found!</div>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
