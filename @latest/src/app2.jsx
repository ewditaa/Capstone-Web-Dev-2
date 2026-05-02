import { Link } from 'react-router-dom';

const App = () => {
    return (
        <>
            <div>
                <p>Dashboard</p>
                <Link to='/about'>About</Link><br /><br />
                <Link to='/contact'>Contact</Link><br /><br />
                <Link to='/Dashboard'>Dashboard</Link><br /><br />
                <Link to='/Home'>Home</Link>
            </div>

            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/Home' element={<Home />} />
            </Routes>
        </>

    );
}

export default App;