import React from 'react'
import { Main } from './Components/Main';
import { About } from './Components/About';
import { Interest } from './Components/Interest';
import { Footer } from './Components/Footer';

export const App = () => {
    return(
        <div className='card'> 
        
            <Main />
            <About />
            <Interest />
            <Footer />
        </div>
    )
};