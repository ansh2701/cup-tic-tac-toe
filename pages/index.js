import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Neon from "../components/Neon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/Home.module.css";
const itemArray = new Array(9).fill("empty");
let player1 = [20, 35, 50, 65, 80, 100];
let player2 = [20, 35, 50, 65, 80, 100];
export default function Home() {
  const [isRed, setIsRed] = useState(true);
  const [isIcon, setisIcon] = useState(0);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsRed(true);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
    player1 = [20, 35, 50, 65, 80, 100];
    player2 = [20, 35, 50, 65, 80, 100];
  };

  const changeIcon = (index) => {
    setisIcon(index);
  };

  const checkIsWinner = () => {
    let itemColor = itemArray.map((item) =>
      item === "empty" ? "empty" : item.split("-")[0]
    );
    if (
      itemColor[0] === itemColor[1] &&
      itemColor[0] === itemColor[2] &&
      itemColor[0] !== "empty"
    ) {
      return setWinMessage(`${itemColor[0]} wins`);
    } else if (
      itemColor[3] === itemColor[4] &&
      itemColor[3] === itemColor[5] &&
      itemColor[3] !== "empty"
    ) {
      return setWinMessage(`${itemColor[3]} wins`);
    } else if (
      itemColor[6] === itemColor[7] &&
      itemColor[6] === itemColor[8] &&
      itemColor[6] !== "empty"
    ) {
      return setWinMessage(`${itemColor[6]} wins`);
    } else if (
      itemColor[0] === itemColor[3] &&
      itemColor[0] === itemColor[6] &&
      itemColor[0] !== "empty"
    ) {
      return setWinMessage(`${itemColor[0]} wins`);
    } else if (
      itemColor[1] === itemColor[4] &&
      itemColor[1] === itemColor[7] &&
      itemColor[1] !== "empty"
    ) {
      return setWinMessage(`${itemColor[1]} wins`);
    } else if (
      itemColor[2] === itemColor[5] &&
      itemColor[2] === itemColor[8] &&
      itemColor[2] !== "empty"
    ) {
      return setWinMessage(`${itemColor[2]} wins`);
    } else if (
      itemColor[0] === itemColor[4] &&
      itemColor[0] === itemColor[8] &&
      itemColor[0] !== "empty"
    ) {
      return setWinMessage(`${itemColor[0]} wins`);
    } else if (
      itemColor[2] === itemColor[4] &&
      itemColor[2] === itemColor[6] &&
      itemColor[2] !== "empty"
    ) {
      return setWinMessage(`${itemColor[2]} wins`);
    } else if (
      (player1 === [] && (player2 === [] || player2 === [15])) ||
      (player2 === [] && player1 === [15])
    ) {
      return setWinMessage(`Match Tie`);
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (
      itemArray[itemNumber] === "empty" ||
      itemArray[itemNumber].split("-")[1] <
        (isRed ? player1[isIcon] : player2[isIcon])
    ) {
      itemArray[itemNumber] = isRed
        ? `red-${player1[isIcon]}`
        : `blue-${player2[isIcon]}`;
      setIsRed(!isRed);

      isRed
        ? (player1 = player1.filter((item, index) => index !== isIcon))
        : (player2 = player2.filter((item, index) => index !== isIcon));
      setisIcon(0);
    } else {
      return toast("Cup Is Small", { type: "error" });
    }
    checkIsWinner();
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>PLAY CUPTIC</title>
          <meta name="description" content="NEW STYLE OF TIC TAC TOE" />
          <meta
            name="keywords"
            content="play cuptic,cup tictactoe, play tictactoe, 2player game,ultimate tictactoe,tic tac toe indore,tictactoe github,tictactoe codechef solution,tictactoe github java,tictactoe android studio,tic tac toe glow,tic tac toe game,tic tac toe c++,tic tac toe game in python,tic tac toe codechef,tic tac toe tricks,tic tac toe js,tic tac toe algorithm,tic tac toe ai,tic tac toe apk,tic tac toe always win,tic tac toe ai python,tic tac toe algorithm in artificial intelligence,tic tac toe app,a tic tac toe,a tic tac toe game,a tic-tac-toe board,a tic-tac-toe meaning,tic tac toe family,tic tac toe video,tic tac toe picture,tic tac toe board,tic tac toe bot,tic tac toe bot discord,tic tac toe board game,tic tac toe background,tic tac toe bill gates,tic tac toe brain out,tic tac toe best trick,tic tac toe b,tic tac toe a b c,tic tac toe portafolio b,tictactoe codechef,tic tac toe cafe,tic tac toe code,tic tac toe c program,tic tac toe code in python,tic tac toe codeforces,c tic tac toe,c tic tac toe program,tic tac toe game in c,tic tac toe c stack overflow,tic tac toe c tutorial,tic tac toe download,tic tac toe design,tic tac toe discord bot,tic tac toe doodle,tic tac toe draw condition,tic tac toe description,tic tac toe design pattern,tic tac toe download apk,d tic tac toe game,3d tic tac toe,3-d tic-tac-toe atari 2600,juego de tic tac toe,tic tac toe earn money apk,tic tac toe earning app,tic tac toe emoji,tic tac toe extended,tic tac toe extension,tic tac toe empty board,tic tac toe explanation,tic tac toe engine,e tic tac toe,tic tac toe squares e.g. crossword,o que e tic-tac-toe,tic tac toe founder,tic tac toe free,tic tac toe flutter,tic tac toe flowchart,tic tac toe for pc,tic tac toe fungus dougie batman,tic tac toe for kids,f# tic tac toe,tic tac toe game in java,tic tac toe game download,tic tac toe github,tic tac toe glow download,tic tac toe song,tic tac toe g,tic tac toe html,tic tac toe html css javascript code,tic tac toe hard mode,tic tac toe how to play,tic tac toe hackerrank,tic tac toe hack,tic tac toe hard,tic tac toe hackerrank solution,tic tac toe h,tic tac toe in python,tic tac toe images,tic tac toe in c,tictactoe in java,tic tac toe impossible,tic tac toe invented,tic tac toe icon,i tic tac toe,tic tac toe java,tic tac toe juice wrld,tic tac toe javascript codepen,tic tac toe java source code,tic tac toe java code against computer,tic tac toe js code,tic tac toe javascript html css,tic tac toe bluej,tic tac toe kotlin,tic tac toe kivy,tic tac toe kyper,tic tac toe keyboard,tic tac toe khan academy,tic tac toe kodak,tic tac toe kindergarten,tic tac toe kmart,k significa tic tac toe,tic tac toe logic,tic tac toe leetcode,tic tac toe logo,tic tac toe low level design,tic tac toe layout,tic tac toe like games,tic tac toe lines,tic tac toe lyrics,l tic tac toe,tic tac toe multiplayer,tic tac toe meaning,tic tac toe minimax,tic tac toe meaning in hindi,tic tac toe math,tic tac toe minimax python,tic tac toe money game,tic tac toe mit app inventor,tic tac toe m,tic tac toe numbers,tic tac toe nail lacquer,tic tac toe nodejs,tic tac toe neural network,tic tac toe neon,tic tac toe npm,tic tac toe names,tic tac toe next move calculator,n tic tac toe,n*n tic tac toe,n dimensional tic tac toe,tic tac toe fiesta monterrey n.l,tic tac toe n mann,n man tic tac toe,tic tac toe n players,tic tac toe n mann lyrics,tic tac toe online,tic tac toe online multiplayer,tic tac toe online with friends,tic tac toe online multiplayer game apk,tic tac toe o png,tic tac toe origin,tic tac toe other names,o tic tac toe,tic tac toe x and o images,tic tac toe x and o template,tic tac toe o strategy,tic tac toe o(1),tic tac toe o image,tic tac toe x v o,tic tac toe python,tic tac toe python project,tic tac toe program in c,tic tac toe play,tic tac toe problem in artificial intelligence,tic tac toe program,tic tac toe png,tic tac toe play online,p tic tac toe,tic tac toe 2p,tic tac toe p v p,tic tac toe questions,tic tac toe quotes,tic tac toe q learning,tic tac toe q learning github,tic tac toe q learning python,tic tac toe quilt pattern,tic tac toe quadratic formula,tic tac toe questions and answers,q significa tic-tac-toe,tic tac toe react,tic tac toe rules,tic tac toe react native,tic tac toe reinforcement learning,tic tac toe react github,tic tac toe react codepen,tic tac toe reinforcement learning github,tic tac toe react hooks,r tic tac toe,tic tac toe r,tictactoe r package,tic tac toe toys r us,tic tac toe game in r,tic tac toe in r programming,r articulation tic tac toe,r shiny tic tac toe,tic tac toe strategy,tic tac toe source code,tic tac toe solution,tic tac toe solution codechef,tic tac toe system design,tic tac toe source code in python,tic tac toe solver,s tic tac toe,s blend tic tac toe,tic tac toe schwester s,tic tac toe template,tic tac toe template png,tic tac toe tic tac toe,tic tac toe tattoo,tic tac toe test cases,tic tac toe toy,tic tac toe tkinter,tic tac toe,tic tac toe using python,tic tac toe using minimax algorithm in python,tic tac toe using javascript,tic tac toe using c,tic tac toe using react,tic tac toe using java,tic tac toe using html css javascript,tic tac toe upgrad assignment,tic tac toe youtube,tic tac toe u bahn,tic tac toe u bahn lyrics,tic tac toe u dvoje,tic tac toe vs computer,tic tac toe validation,tic tac toe variants,tic tac toe vector,tic tac toe vs computer python,tic tac toe vanilla javascript,tic tac toe visual studio code,tic tac toe 1v1,tic tac toe with friends,tic tac toe winning strategy,tic tac toe with computer,tic tac toe winning logic,tic tac toe wooden game,tic tac toe winner,tic tac toe wikipedia,tic tac toe win,w tic tac toe,tic tac toe x,tic tac toe x png,tic tac toe x image,tic tac toe xkcd,tic tac toe xoxo,tic tac toe x always wins,tic tac toe xcode,x tic tac toe,tic tac toe x and o,tic tac toe how many x and o,tic tac toe x pill,tic tac toe 10 x 10,tic tac toe 5 x 5,tic tac toe yard game,tic tac toe y8,tic tac toy youtube channel,tic tac toe youth group game,tic tac toe yt,tic tac toe yiv,tic tac toe you have to win,y tic tac toe,y8 tic tac toe,tic tac toe zero sum game,tic tac toe zoom,tic tac toe z gallerie,tic tac toe zespół,tic tac toe zeit,tic tac toe zu zweit online,tic tac toe zoe,tic tac toe zomato,z gallerie tic tac toe,tic tac toe 0 png,tic tac toe 0,tic tac toe trackid=sp-006,tic tac toe 0190,scp 076 tic tac toe,0 tic-tac-toe,tic tac toe 0 players,tic tac toe 11,tic tac toe 1 player,tic tac toe 10x10,tic tac toe 1v1 online,tic tac toe 100x100,tic tac toe 12x12,tic tac toe 1,tic tac toe 15,1 tic tac toe,1-9 tic tac toe 15,tic tac toe part 1 codehs,1 player tic-tac-toe python beginner,tic tac toe 1 hour,tic tac toe python 1 player,tic tac toe meme 1 hour,tic tac toe 2 player,tic tac toe 2 player online link,tic tac toe 2 player unblocked,tic tac toe 2 player games,tic tac toe 2 player python code,tic tac toe 2 player download,tic tac toe 20x20,tic tac toe 2 player java code,2 tic tac toe,tic tac toe 2,angular 2 tic tac toe,tic tac toe 2 online,tic tac toe 2 spieler,tic tac toe 3 player,tic tac toe 3x3,tic tac toe 3d,tic tac toe 3 in a row,tic tac toe 3 player online,tic tac toe 3 in a row song,tic tac toe 3d print,tic tac toe 3 corners,3 tic tac toe,tictactoe 3 year old games,tic tac toe 3 letters,tic tac toe 4x4,tic tac toe 4 player,tic tac toe 4 by 4 grid,tic tac toe 4 in a row,tic tac toe 4x4 rules,tic tac toe 4d,tic tac toe 4x4 minimax,tic tac toe 4x4 strategy,4 tic tac toe,4 player tic tac toe,tic tac toe daily 4,tic tac toe connect 4,4 person tic tac toe,4 dimensional tic tac toe,tic-tac-toe 2 3 4 player,tic tac toe 5 in a row,tic tac toe 5 in a row strategy,tic tac toe 555 222,tic tac toe 5 in a row online game,tic tac toe 5x5 c++,tic tac toe 5x5 java,tic tac toe 5x5 python,tic tac toe 5x5 minimax,5 tic tac toe,5 tic tac toe strategy,5 square tic tac toe,5 dimensional tic tac toe,tic tac toe for grade 5,tic tac toe 5 santillana,tic tac toe game x5,tic tac toe 6x6,tic tac toe 6 by 6,tic tac toe 6 pieces,tic tac toe 6 in a row,tic-tac-toe 6d,6x6x6 tic tac toe,6 x's on tic tac toe,tic tac toe angular 6,tic tac toe mit 6 steinen,tic tac toe no 6,tic tac toe 7x7,tic tac toe 7 problem characteristics,tic tac toe 7×7,7 tic tac toe,24/7 tic tac toe,7 x tic tac toe,tic tac toe download windows 7,tic tac toe angular 7,tic tac toe 8x8,tic tac toe 8*8,tic tac toe-8086,tic tac toe 8051,8.11.4 tic tac toe,8086 tic tac toe,tic-tac-toe 8nv,activity 8 tic tac toe,tic tac toe 9x9,tic tac toe 9 boards,tic tac toe 9,tic tac toe 9x9 c++,tic tac toe 90s song,tic tac toe 9gag,9.1.9 tic tac toe,9.11.4 tic tac toe,9 tic tac toe,9 square tic tac toe,9 way tic tac toe"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://playcuptic.fun/" />
          <meta property="og:site_name" content="Tic-Tac-Toe" />
          <meta
            property="og:title"
            content="Cup Tic-Tac-Toe - Play New Tic-Tac-Toe online for free"
          />
          <meta
            property="og:description"
            content="Play the New Cup Tic-Tac-Toe game for free online with one or two players."
          />
        </Head>
        <ToastContainer position="bottom-center" />
        <Neon />
        <div className={styles.gameContainer}>
          {winMessage ? (
            <div className={styles.center}>
              <h1 className={styles.heading}>{winMessage}</h1>
              <button className={styles.button} onClick={reloadGame}>
                Restart
              </button>
            </div>
          ) : (
            <>
              <h1 className={styles.heading}>{isRed ? "Red" : "Blue"} Turn</h1>
              <div className={styles.icon}>
                {(isRed ? player1 : player2).map((size, index) => (
                  <div
                    className={
                      isIcon === index ? styles.iconActive : styles.iconItem
                    }
                    key={size}
                    onClick={() => changeIcon(index)}
                  >
                    <Image
                      src="/plastic-cup.png"
                      width={size}
                      height={size}
                      className={isRed ? styles.iconRed : styles.iconBlue}
                      alt={size}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
          <div className={styles.grid}>
            {itemArray.map((item, index) => (
              <div
                className={styles.box}
                // style={{ backgroundColor: item.split("-")[0] }}
                key={index}
                onClick={() => changeItem(index)}
              >
                {item !== "empty" && (
                  <Image
                    src="/plastic-cup.png"
                    width={item.split("-")[1]}
                    height={item.split("-")[1]}
                    className={
                      item.split("-")[0] === "red"
                        ? styles.iconRed
                        : styles.iconBlue
                    }
                    alt={item}
                  />
                )}
              </div>
            ))}
          </div>
          <div>
            <p>how to play</p>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://playcuptic.fun/"
          target="_blank"
          rel="noopener noreferrer"
        >
          © Copyright 2021 Playcuptic. All rights reserved.
        </a>
      </footer>
    </>
  );
}
