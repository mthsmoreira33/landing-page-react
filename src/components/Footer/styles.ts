import styled from "styled-components";

const Container = styled.footer`
    width: 100vw;
    background-color: ${props => props.theme.colors.primary};
    padding: 40px;
    display: flex;
    justify-content: space-between;
`

const List = styled.ul`
    list-style: none;
`
const Line = styled.li`
    display: inline;
    margin-right: 20px;
`

const Image = styled.img`
    height: 40px;
    width: 40px;
`

export { Container, List, Line, Image };
