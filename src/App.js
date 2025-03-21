import logo from './logo.svg';
import './App.css';
import Alerta from './components/Alerta';
import Lista from "./components/Lista";
import DropDown from "./components/Dropdown";
import Badge from "./components/Badge"
import Close from "./components/closeButton"
import Paginas from "./components/paginas"
import Spinner from './components/spinner'
import Boton from './components/Boton'
import Card from "./components/card"
import NavBar from './components/navBar';
import BreadCrumb from './components/breadCrumb';
import Acordion from './components/Acordion';
import Group from './ButtonGroup';
import PopOver from './components/PopOver';
import ToolTip from './components/toolTip';
import Progress from './components/progress';
import NavTabs from './components/NavTabs';
import Modal from './components/Modal';
import Collapse from './components/Collapse';
import OffCanvas from './components/offCanvas';
import ScrollSpy from './components/ScrollSpy';
import Carousel from './components/Carousel';

function App() {
  return (
  
    <div>
    <Alerta/>
    <br></br>
    <Lista/>
    <br></br>
    <DropDown/>
    <br></br>
    <Badge/>
    <br></br>
    <Close/>
    <br></br>
    <Paginas/>
    <br></br>
    <Spinner/>
    <br></br>
    <Boton/>
    <br></br>
    <NavBar/>
    <br></br>
    <Card/>
    <br></br>
    <BreadCrumb/>
    <br></br>
    <Acordion/>
    <br></br>
    <Group/>
    <br></br>
    <PopOver/>
    <br></br>
    <ToolTip/>
    <br></br>
    <Progress/>
    <br></br>
    <NavTabs/>
    <br></br>
    <Modal/>
    <br></br>
    <Collapse/>
    <br></br>
    <OffCanvas/>
    <br></br>
    <ScrollSpy/>
<br></br>
<Carousel/>
    </div>

  );
}

export default App;
