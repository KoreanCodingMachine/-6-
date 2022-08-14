import Home from './pages/Home';
import Post from './pages/Post';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Modify from './pages/Modify';
import Detail from './pages/Detail';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post' element={<Post />} />
      <Route path='/login' element={<Login />} />
      <Route path='/modify' element={<Modify />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/detail/:id' element={<Detail />} />
    </Routes>
  );
}

export default App;
