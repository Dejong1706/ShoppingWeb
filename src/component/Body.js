
import css from "styled-jsx/css";
import Link from "next/link";
import { useEffect, useState } from "react";

const style = css`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cute+Font&family=Do+Hyeon&family=Gaegu:wght@700&family=Gugi&family=Hahmlet:wght@300&family=IBM+Plex+Sans+KR:wght@500&family=Inspiration&family=Koulen&family=Lora&family=Nanum+Gothic+Coding:wght@400;700&family=Noto+Sans+KR:wght@500&family=Pinyon+Script&family=Single+Day&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:wght@300&family=Cute+Font&family=Do+Hyeon&family=Gaegu:wght@700&family=Gugi&family=Hahmlet:wght@300&family=IBM+Plex+Sans+KR:wght@500&family=Inspiration&family=Koulen&family=Lora&family=Nanum+Gothic+Coding:wght@400;700&family=Noto+Sans+KR:wght@500&family=Pinyon+Script&display=swap');
.title{
    font-family: 'Pinyon Script', cursive;
    margin-bottom: 0;
}

.Main{
    padding-left: 270px;
    padding-top: 250px;
}

.content{
    font-family: 'Cormorant Garamond', serif;
}

ul{
    padding-top: 70px;
    display: flex;
}

li{
    width: 300px;
    padding-right: 50px;
}

`; 

const images = ["Hand.png", "HandRing2.png", "HandRing.png"];
const btn1 = ["btn1.png", "white_btn1.png","white_btn1.png"];
const btn2 = ["btn2.png", "white_btn2.png","white_btn2.png"];


export default function Body(){

    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setValue((v) => (v == 2  ? 0 : v + 1));
        }, 5000);
      }, []);

    return(
        <div>
            <div style = {{display: "flex", height: 1180}}>
                <div className = "Main" style = {{width: 850}}>
                    <p className = "title" style = {{fontSize: 124}}>Lumier</p>
                    <p className = "content" style={{fontSize: 24}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis nunc venenatis dolor ornare placerat. Duis varius dictum maximus. Maecenas ipsum est, convallis ut volutpat vitae, maximus nec nisi. Sed viverra, lorem fermentum maximus bibendum, enim magna mollis urna, id pretium tellus lorem id tellus. Fusce at eros quam.</p>
                    <ul>
                        <li><Link href = "reservation"><img src = {"images/" + btn1[value]}/></Link></li>
                        <li><img src = {"images/" + btn2[value]}/></li>
                    </ul>
                </div>
                <div>
                    <img src = {"images/" + images[value]} style = {{width: 700, height: 1200, marginLeft: 600, paddingTop: 100}} />
                </div>
            </div>
            <style jsx>{style}</style>
        </div>
    );
}