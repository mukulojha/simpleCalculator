import './App.css';
import Dailpad from './Components/Dailpad';

function App() {
  return (
    <div>
      <Dailpad
        value="9"
        zero="0"
        doubleZero="00"
        decimal="."
        add="+"
        subtract="-"
        multiply="*"
        divide="/"
        clear="C"
        delete="<-"
        percentage="%"
        equal="="
      />
    </div>
  );
}

export default App;
