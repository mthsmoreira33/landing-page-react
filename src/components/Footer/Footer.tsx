import React from "react";
import { Container, List, Line, Image} from "./styles";

const Footer: React.FC = () => {
    return (
        <Container>
            <List>
                <Line>About</Line>
                <Line>Contact</Line>
                <Line>Terms of Use</Line>
                <Line>Privacy Policy</Line>
            </List>
            <List>
                <Line>
                    <Image alt="facebook" src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" />
                </Line>
                <Line>
                    <Image alt="twitter" src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" />
                </Line>
                <Line>
                    <Image alt="instagram" src="https://cdn-icons-png.flaticon.com/512/3938/3938036.png"/>
                </Line>
            </List>
        </Container>
    )
}

export default Footer;
