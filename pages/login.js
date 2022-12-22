import css from "styled-jsx/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faLock } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import React, {useState} from "react";
import { signIn, useSession } from "next-auth/react";

const style = css`
    .Main{
        //** background-image: url("images/img.jpg");
        //** background-repeat: no-repeat;
        //** background-size: cover;
        background: rgb(219,176,221);
        background: linear-gradient(90deg, rgba(219,176,221,1) 0%, rgba(220,242,244,1) 0%, rgba(0,107,160,1) 49%, rgba(0,0,0,1) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }

    .LoginDiv{
        width: 50%;
        height: 60%;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .custom-shape-divider-top-1671696500 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }
    
    .custom-shape-divider-top-1671696500 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 118px;
    }
    
    .custom-shape-divider-top-1671696500 .shape-fill {
        fill: #FFFFFF;
    }

    form{
        display: flex;
        flex-direction: column;
    }

    .search-bar {
        background-color: white;
        width: 770px;
        height: 70px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        opacity: 1;
        margin-bottom: 40px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
      }

      .search-bar__input {
        width: 600px;
        height: 50px;
        border: none;
        -webkit-appearance: none;
        text-align: center;
        margin-left: 10px;
        overflow: auto;
        z-index: -1;
        font-size: 15px;
        background: transparent;
      }

      .search-bar__input:focus {
        outline: none;
        width: 600px;
        text-align: left;
      }
      

    button{
        background: rgb(219,176,221);
        background: linear-gradient(90deg, rgba(219,176,221,1) 0%, rgba(220,242,244,1) 0%, rgba(6,218,235,1) 0%, rgba(1,124,185,1) 49%, rgba(50,151,193,1) 100%);
        font-size: 22px;
        text-align: center;
        height: 70px;
        border-radius : 50px;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    
`

export default function reservation(){

    const { data: session, status } = useSession();
    const router = useRouter();
        
    const login = async(e) => {
        e.preventDefault();
        const ID = e.target.ID.value;
        const PW = e.target.PW.value;
        const response = await signIn("user-credentials", {
            ID,
            PW,
            redirect: false,
            callbackUrl: "http://localhost:3000/main"
        });
        if ( response.error ) alert('아이디 혹은 비밀번호가 틀립니다')
        else await router.push(response.url) 
    }

    return(
        <div className = "Main">
            <div className = "LoginDiv">
                <div className="custom-shape-divider-top-1671696500">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
                <form onSubmit={login}>
                    <div className="search-bar">
                        <FontAwesomeIcon icon={faIdBadge} style = {{fontSize: 30}}/>
                        <input className = "search-bar__input" name = "ID" placeholder="ID" maxlength = "15" required/>
                    </div>
                    <div className="search-bar">
                        <FontAwesomeIcon icon={faLock} style = {{fontSize: 30}}/>
                        <input className = "search-bar__input" name = "PW" placeholder="PassWord" type= "password" maxlength = "15" required/>
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <style jsx>{style}</style>
        </div>
    );
}