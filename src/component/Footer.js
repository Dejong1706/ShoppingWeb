
import css from "styled-jsx/css";
import Link from "next/link";
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const style = css`
    .main{
        position: fixed;
        width: 100%;
        height: 100%;
        margin: 0;
        background-color: black;
        color: white;
        display: flex;
        justify-content: center;
    }

    ul{
        height: 60px;
        display: flex;
        align-items: center;
    }

    li{
        padding-right: 20px;
        font-size: 20px;
    }
`; 
export default function Footer(){
    return(
        <div className = "main">
            <div className = "MainUl">
                <ul>
                    <li><Link href = "https://www.instagram.com/" target = "_blank"><FaInstagram/></Link></li>
                    <li><Link href = "https://www.facebook.com/" target = "_blank"><FaFacebook/></Link></li>
                    <li><p>create by Dejong1706</p></li>
                </ul>
            </div>
            <style jsx>{style}</style>
        </div>
    );
}