import { LinkTree } from "./LinkTree"

const Footer = ({ email }) =>{
    return (
    <footer>
        <br/><br/><br/><br/>
        <img src="/src/logo_omen_dev.png" alt="logo omen dev"/>
        <br/><br/>
        <p>some random text</p>
        <a href= {"mailto:"+email}>{email}</a>
        <br/><br/><br/><br/>
        <p className="legal_right">© 2025 OmenDev - All rights reserved.</p>
        <br/><br/>
        <LinkTree/>
    </footer>);
}

export { Footer };
export default Footer;