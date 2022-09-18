import Contacts from "./component/contact/Contacts";
import Header from "./component/Header";
import Messages from "./component/message/Messages";
import {useState} from 'react';

function App() {
  const [contact, setContact] = useState('');
  
  const handleChange = async (contact) => {
    setContact(contact);
  }

  return (
    <div>
      <Header/>
      <div className="grid grid-cols-8 m-3 border-4 border-white border-dashed" style={{ height:'85vh' }}>
        <Contacts handleUserChange={handleChange}/>
        <Messages currentContact={contact}/>
      </div>
    </div>
  );
}

export default App;
