import { React, useState, useEffect } from 'react';
import Card from '../Components/Card';
import Item from '../Components/Item';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';

function Home(props) {

    // const [datas, setDatas] = useState("false");
    const [cards, setCards] = useState([]);
    const [ingred, setIngred] = useState([]);
    const [colors, setColors] = useState("ItemCss");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.post("http://localhost:8000/recipe");
            // console.log(request.data.results);
            // console.log(request.data)
            setCards(request.data.recipes)
            return request;
        }
        fetchData();
    }, ["http://localhost:8000/recipe"])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.post("http://localhost:8000/ingredients");
            // console.log(request.data.results);
            // console.log(request.data)
            setIngred(request.data.ingredients)
            return request;
        }
        fetchData();
    }, ["http://localhost:8000/ingredients"])

    // console.log(cards);
    const [safe, setSafe] = useState("");

    // useEffect(() => {
    //     async function fetchData() {
    //         await fetch("http://localhost:8000/check", {
    //             method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({})
    //         })
    //             .then(res => console.log(res.text()))
    //             .then(res => setDatas(res))      
    //     }
    //     // Anything in here is fired on component mount.
    //     fetchData();
    // }, []);

    // if (datas != false) {
    //     window.location.assign("Login");
    // }

    // const printer = (ev) => {
    //     console.error(ev.currentTarget.value);}

    function sayHello(a) {
        // alert(a);        
        console.log(safe);
    }

    return (
        <div>
            <h2>ALL MATCHING RECIPES</h2>
            <p className="text-center">Double click on an ingredient</p>
            <p className="text-center">{safe}</p>
            <div className="RecipeCss">
                <Container>
                    <Row>
                        {ingred.map((ing) => (
                            <Col md={4}>
                                <div >
                                    <Item value={ing} key={ing} css={colors} setCss={setColors} hello={e => sayHello(e)}
                                        safe={safe} setSafe={setSafe} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
                {/* <Item />
                <Item />
                <Item />
                <Item /> */}
            </div>
            <br />
            <div className="RecipeCss">
                <Container>
                    <Row>
                        {cards.map((card) => (
                            (card.ingred).includes(safe)||safe==''?
                                (<Col md={4}>
                                    <Card recipe={card.recipe} ingred={card.ingred} method={card.method} utube={card.utube} key={card.recipe} className="CardsCss"/>
                                </Col>
                            ):
                            <div></div>
                            ))}
                    </Row>
                </Container>
                {/* <Card />
                <Card />
                <Card />
                <Card />
                <Card /> */}
            </div>
        </div>
    );
}

export default Home;