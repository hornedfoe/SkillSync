import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './User/Login.jsx';
import Register from './User/Register.jsx';
import Otp from './User/VerifyOtp.jsx';
import Home from './root/home.jsx';
import {useState, createContext} from 'react';
export const Context = createContext()
import Changepassword from './User/Changepassword.jsx';
import Editor from '../mentee/components/Editor.jsx';

const App = () => {
  
  const sampleData = `
  <h1>Welcome to React Quill Editor</h1>
  <p>This is a larger sample data for demonstration purposes. You can use it to view how the React Quill editor renders different types of content.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ipsum nec sapien scelerisque tincidunt vel a elit. In hac habitasse platea dictumst. Suspendisse potenti. Vivamus ultrices elit eu sapien placerat, non ultricies magna luctus. Duis vehicula volutpat metus, id iaculis est gravida vitae. Curabitur eget lorem nec ligula facilisis viverra. Vivamus suscipit accumsan urna, ut condimentum quam lacinia in. Fusce feugiat magna id est faucibus, ac mollis nunc pharetra. Aliquam tempor ex a massa condimentum, sed gravida nulla finibus. Integer auctor dolor sit amet quam ultricies dictum. Curabitur scelerisque scelerisque velit id consectetur.</p>
  <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
  </ul>
  <blockquote>
      <p>This is a blockquote.</p>
  </blockquote>
  <p>Donec ut lorem ut ipsum consequat consectetur. Mauris in mauris sed ligula tempor gravida. Aliquam erat volutpat. Mauris ut rutrum mauris, eget rutrum elit. Ut in nunc varius, dapibus massa in, lacinia ligula. Vestibulum consectetur id elit eget tempus. Nam ac urna at nisi laoreet fringilla. Nunc dignissim, mi eu ultrices sodales, risus sem consectetur urna, nec fermentum sapien est eget dui. Nullam fringilla mi et massa consectetur, eget faucibus arcu tincidunt. Vestibulum vitae libero id magna tempor finibus. Integer in leo vitae nisi convallis pharetra non sit amet odio. Nulla interdum nibh id tortor placerat, nec tempus arcu convallis.</p>
  `;
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <Context.Provider value={{ name , email , password , username , setName , setEmail , setPassword , setUsername}}>
      <Router>
        <div>
          <Routes> 
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verifyotp" element={<Otp />} />
            <Route path = "/test" element= {<Editor data={sampleData} edit={!true} />}/>
          </Routes>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
