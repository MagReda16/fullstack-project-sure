import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import SubscribeForm from './Form/SubscribeForm';
import './App.css';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />

        <SubscribeForm />

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
