import React from "react";

import {Container, StyledHeaderPanel, LogIn, SignUp, Wrapper, Logo} from "./style";

function HeaderPanel() {
    return (
        <StyledHeaderPanel>
            <Container>
                <Logo href="#">
                    CandleShop
                </Logo>
                <Wrapper>
                    <LogIn>
                        Войти
                    </LogIn>
                    <SignUp>
                        Зарегестрироваться
                    </SignUp>
                </Wrapper>
            </Container>
        </StyledHeaderPanel>

    )
}

export default HeaderPanel