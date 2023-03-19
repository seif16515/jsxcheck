import FullName from './others/fullname';
import ProfilePhoto from './others/photo';
import Adress from './others/adress';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <>
      <div style={{width: '80%',display: 'flex', justifyContent: 'space-between',alignContent: 'center',alignSelf: 'center', }}>
        <ProfilePhoto/>
        <FullName/>
        <Adress/>
      </div>
      <br></br>
      <Button variant="primary" style={{width: 100, height: 50,marginRight: '50%'}}>Submit</Button>{' '}
    </>
  );
}

export default App;
