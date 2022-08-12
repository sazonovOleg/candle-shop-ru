import React from 'react';
import {AppBody} from './App.module.scss';
import {Header} from "./components/ui/Header";
import {Main} from "./components/ui/Main";
import {Cart} from "./components/ui/Cart";

function App() {
    const [cartState, setShowCart] = React.useState<boolean>(false)

    return (
        <div className={AppBody}>
            <Header onCartClick={() => setShowCart(true)}/>
            {
                !cartState && (<Main/>)
            }
            {
                cartState && (<Cart onCartClose={() => setShowCart(false)}/>)
            }
        </div>
    );
}

export default App;
