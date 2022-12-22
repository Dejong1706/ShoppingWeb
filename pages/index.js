import Header from "../src/component/Header";
import Body from "../src/component/Body"
import Footer from "../src/component/Footer";
import css from "styled-jsx/css";
import { useEffect, useState } from "react";

const style = css`

`; 

const colors = ['#dcf2f4', '#006ba0', '#000000'];
const fontColors = ["#4d4d4d", "#ffffff", "#ffffff"];

export default function Home() {

  const [value, setValue] = useState(0);
  const [fontValue, setFontValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v == 2  ? 0 : v + 1));
      setFontValue((x) => (x == 2  ? 0 : x + 1));
    }, 5000);
  }, []);

  return (
      <div className = "container" style = {{backgroundColor: colors[value], color: fontColors[fontValue]}}>
        <Header cnt = "signIn"/>
        <Body/>
        <Footer/>
        <style jsx>{style}</style>
      </div>
  );
}