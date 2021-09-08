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
        <Layout title={"Слой 1"} urlBg={<img src={bg1} alt="Lobg1go" />}  />
        <Layout title={"Слой 2"} colorBg={'red'}/>
        <Layout title={"Слой 3"} urlBg={<img src={bg1} alt="Lobg1go" />}/>
        <Footer />
    </div>
  );
}

export default App;
