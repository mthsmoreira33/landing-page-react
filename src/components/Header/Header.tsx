import React, { useContext } from "react";
import Switch from 'react-switch';
import Container from './styles';
import { ThemeContext } from "styled-components";

interface Props {
    toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return(
        <Container>
            Minha Primeira Página com React.
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                offColor="#000"
                onColor="#DDD"
        />
        </Container>
    )
}

export default Header;
