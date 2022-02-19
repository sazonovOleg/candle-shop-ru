import React from "react";

import {Container, StyledHeaderMenu, StyledMenu} from "./style";

function HeaderMenu() {
    return (
        <StyledHeaderMenu>
            <Container>
                <StyledMenu>
                    <span>Меню 1</span>
                    <span>Меню 2</span>
                    <span>Меню 3</span>
                    <span>Меню 4</span>
                </StyledMenu>
            </Container>
        </StyledHeaderMenu>

    )
}

export default HeaderMenu;