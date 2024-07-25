import Header from './Components/Header'
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/Store';
function App() {
  return (
   <>
   <Provider store={appStore}>
<Header></Header>
  <Outlet></Outlet>
  </Provider>
   </>
  );
  
}

export default App;
