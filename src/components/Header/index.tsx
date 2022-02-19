import React from "react";
import HeaderPanel from "./HeaderPanel";
import HeaderMenu from "./HeaderMenu";

import {AppHeader} from "./style";

function Header() {
    return (
        <AppHeader>
            <HeaderPanel/>
            <HeaderMenu/>
        </AppHeader>
    )
}

export default Header;