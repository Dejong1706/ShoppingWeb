
import css from "styled-jsx/css";
import Link from "next/link";


const style = css`
    .Main{
        width: 100%;
    }

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

export default function Header({cnt}){    
    return(
        <div className = "Main">
            <div className = "HeaderMain" style = {{display: "flex", height: 80, justifyContent: "space-between" ,alignItems:"center"}}>
                <div style = {{display: "flex", alignItems: "center"}}>
                    <Link href = "/"><img src = "images/Logo.png" style = {{display: "block", width: 140, height: 50}}/></Link>
                    <ul style = {{display: "flex", listStyle: "none"}}>
                        <li>Maison</li>
                        <li>Mariage</li>
                        <li>Surveillez</li>
                        <li>Magasin</li>
                    </ul>
                </div>
                <div style = {{width: 70}}>
                    {cnt === "signIn" ? <Link href = "login"><p>sign in</p></Link> : <Link href = "/"><p>sign out</p></Link> }
                </div>
            </div>
            <style jsx>{style}</style>
        </div>
    );
}