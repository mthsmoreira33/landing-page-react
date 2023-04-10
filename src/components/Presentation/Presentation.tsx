import React from 'react';
import {Container, Wrapper} from './styles';

const Presentation: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <h1>Somente para Desktop</h1>
                <p>Vamos aprender como utilizar um framework.</p>
            </Wrapper>
            <Wrapper>
                <h1>Criado com Componentes</h1>
                <p>Utilizamos o Styled Components.</p>
            </Wrapper>
            <Wrapper>
                <h1>Fácil Aproveitamento</h1>
                <p>Estamos no caminho.</p>
            </Wrapper>
        </Container>
    )
}

export default Presentation;
