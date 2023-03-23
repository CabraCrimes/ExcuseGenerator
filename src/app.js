/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { arrow } from "@popperjs/core";

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
  const dataSetArray = [who, action, what, when];
  const excuseGenerator = () => {
    let whoExcuse = Math.floor(Math.random() * who.length);
    let actionExcuse = Math.floor(Math.random() * action.length);
    let whatExcuse = Math.floor(Math.random() * what.length);
    let whenExcuse = Math.floor(Math.random() * when.length);

    return `${who[whoExcuse]} ${action[actionExcuse]} ${what[whatExcuse]} ${when[whenExcuse]}`;
  };

  const randomNumGen = arr => {
    return Math.floor(Math.random() * arr.length);
  };
  const getElement = (arr, randomNumber) => {
    return arr[randomNumber];
  };
  const getExcuse = el => {
    return `${getElement(dataSetArray, randomNumGen(dataSetArray))}`;
  };
  const makeTheExcuse = dataset => {
    return dataset.map(() => `${getExcuse()}`).join(" ");
  };

  console.log(makeTheExcuse(dataSetArray));
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
};
