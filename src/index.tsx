import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, } from "react-router-dom";

//react-redux | redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

const rootEelement = document.getElementById('root')



if(rootEelement) {
  
const root = ReactDOM.createRoot(rootEelement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter >
);

}




