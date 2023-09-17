import './App.css'
//import { Register } from './containers' 
import { Card } from './components';
import { AllForm } from './containers';

const App = () => {
  
  return (
    <>
      <Card title='Registration Form'>
      <AllForm />
      </Card>
    </>
  )
}

export default App