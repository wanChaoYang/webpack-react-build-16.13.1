import React from "react";
import { useHistory } from "react-router-dom";
const Home = () => {
    const navigate = useHistory();
    const list = [ 1, 2, 3, 4, 5, 7, 8 ]
    const oChange = () => {
        const numList = list.filter(item => item % 2 === 0)
        navigate.push("/about")
    }
    return (
        <div onClick={oChange}>999</div>
    )
}
export default Home