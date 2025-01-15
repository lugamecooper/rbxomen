import LinkTree from "./LinkTree"

const Footer = ({ email }) =>{
    return (
    <footer>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src="/src/logo_omen_dev.png" alt="logo omen dev"></img>
        <br></br>
        <br></br>
        <p>some random text</p>
        <a href= {"mailto:"+email}>{email}</a>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="legal_right">some random text</p>
        <br></br>
        <br></br>
        <LinkTree></LinkTree>
    </footer>);
}

export default Footer;