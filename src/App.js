import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ComponentA from './components/container/componentA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* COMPONENTE PROPIO GREETING.JSX */}
        {/*  <Greeting name={"Geraldine"}></Greeting>*/}
        {/*         <GreetingF name="Geraldine"></GreetingF> */}   
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent>  */}  
        <ComponentA></ComponentA>
      </header>
    </div>
  );
}

export default App;
