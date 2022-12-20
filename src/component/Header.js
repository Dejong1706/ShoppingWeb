
import css from "styled-jsx/css";
import Link from "next/link";

const style = css`
    .HeaderMain{
        padding-left: 40px;
        border-bottom: solid 2px gray;
        width: 100%;
        position: fixed;
    }

    ul{
        margin-left: 50px;
    }
    ul li{
        padding-right: 40px;
        font-size: 25px;
    }
`; 

export default function Header(){
    return(
        <div>
            <div className = "HeaderMain" style = {{display: "flex", height: 80, alignItems:"center"}}>
                <Link href = "/"><img src = "images/Logo.png" style = {{display: "block", width: 140, height: 50}}/></Link>
                <ul style = {{display: "flex", listStyle: "none"}}>
                    <li>Maison</li>
                    <li>Mariage</li>
                    <li>Surveillez</li>
                    <li>Magasin</li>
                </ul>
            </div>
            <style jsx>{style}</style>
        </div>
    );
}