import React from "react";

import { Container } from "./Styles";

import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";

const Layout: React.FC = () => {
    return (
        <>
        <Container>
            <MainHeader />
            <Aside />
            <Content />
        </Container>
        </>
    )

}
export default Layout;