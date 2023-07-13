//import { Button } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
function App() {
  return (
    <div>
      <Router>
        {/* <Button colorScheme={'orange'} py={'4'} m={'9'}>
          waah
        </Button> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
