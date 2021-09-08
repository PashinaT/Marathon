import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'

import bg1 from './assets/bg1.jpg';

function App() {
  return (
    <div className="App">
        <Header title={"Марафонный заголовок!"} descr={"Прикольно атрибутики внутри создавать"} />
        <Layout title={"Слой 1"} urlBg={bg1}  />
        <Layout title={"Слой 2"} colorBg={'red'}/>
        <Layout title={"Слой 3"} urlBg={bg1}/>
        <Footer />
    </div>
  );
}

export default App;
