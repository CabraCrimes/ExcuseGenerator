/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "kicked", "punched", "stabbed"];
  let what = ["my homework", "the keys", "the car", "the president"];
  let when = [
    "before the class",
    "right on time",
    "when I finished working",
    "during my lunch",
    "while I was praying"
  ];
  //let whoExcuse = who[Math.floor(Math.random(who.length) * who.length)];
  const excuseGenerator = () => {
    let whoExcuse = Math.floor(Math.random() * who.length);
    let actionExcuse = Math.floor(Math.random() * action.length);
    let whatExcuse = Math.floor(Math.random() * what.length);
    let whenExcuse = Math.floor(Math.random() * when.length);

    return `${who[whoExcuse]} ${action[actionExcuse]} ${what[whatExcuse]} ${when[whenExcuse]}`;
  };

  console.log(excuseGenerator());
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};
