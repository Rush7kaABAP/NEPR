import { store } from './store';
import { Provider } from 'react-redux';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar/NavBar';

export const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <AppRouter />
    </Provider>
  );
};

export default App;
