
import css from "styled-jsx/css";
import Header from "../src/component/Header";
import Body from "../src/component/Body"
import Footer from "../src/component/Footer";
import Link from "next/link";

const style = css`
`; 

export default function reservation(){
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
            <style jsx>{style}</style>
        </div>
    );
}