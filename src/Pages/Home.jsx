import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <Link to="/skills">Skills</Link>&nbsp;
            <Link to="/about">About</Link><br />
            <Link to="/contact">Contact</Link></>
    )
}
export default Home;