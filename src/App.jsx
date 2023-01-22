import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <div className="layout">
        {/* HEADER */}
        <Header/>
        {/* MAIN */}
        <Main/>
        {/* FOOTER */}
        <Footer/>
    </div>
  )
}

export default App;