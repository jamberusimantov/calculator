"use strict"
let display = document.getElementsByTagName("div")[0];
display.style = "width:32.5vw; height:40vh;background:black; padding: 1.25vw; box-sizing:border-box; font-size:xx-large";
display.innerHTML = "<div>Jamber</div><div></div>";
display.firstElementChild.style = "width:30vw; height:21vh;background:gray;box-sizing:border-box; color:yellowgreen; font-size:10vw";
display.lastElementChild.style = "width:30vw; height:13vh;background:gray;box-sizing:border-box; color:blue; font-size:x-large";
let keyboard = display.nextElementSibling;
keyboard.style = "width:32.5vw; height:53vh; background:gray;box-sizing:border-box;  font-size:xx-large";
keyboard.innerHTML = `<table>${keypadButtuns()}</table>`;
for (let i = 0; i < document.getElementsByTagName("button").length; i++) {
  document.getElementsByTagName("button")[i].style = "width: 6.5vw; height:10vh; font-size:xx-large; color: yellowgreen; background:steelblue; margin:10px";}
function keypadButtuns() {
  let arr = [7, 8, 9, "&#10135;", 4, 5, 6, "&#10060;", 1, 2, 3, "&#10134;", '&#9760;', 0, , "&#10133;"];let string = '';let counter = 0;
  for (let i = 0; i < 4; i++) {string += "<tr>";
    for (let j = 0; j < 4; j++) {
      if (j == 3) { string += `<td><button class='keypadBtns' onclick='keypad(1${i})'>${arr[counter]}</button></td>`;}
      else if (i == 3 && j == 0) {
        string += `<td><button class='keypadBtns' onclick='keypad(14)'>${arr[counter]}</button></td>`;}
      else if (i == 3 && j == 2) { string += `<td><button class='keypadBtns' onclick='keypad(15)'><img src="/enter .png" height="35vw" alt= "enterBtn"></button></td>`;}
      else { string += `<td><button class='keypadBtns' onclick='keypad(${arr[counter]})'>${arr[counter]}</button></td>`; }
       counter += 1; }
    string += "</tr>";}
  return string;}
const arr = []; let number = 0; let counter = 0; let equation = 0;
function keypad(param) {//if operator is "/"
  if (param == 10) { arr[counter] = parseInt(number); arr[counter + 1] = '/'; display.lastChild.textContent += "/"; equation += "/"; number = ''; counter += 2; }//if operator is "*"
  if (param == 11) { arr[counter] = parseInt(number); arr[counter + 1] = '*'; display.lastChild.textContent += "*"; equation += "*"; number = ''; counter += 2; }//if operator is "-"
  if (param == 12) { arr[counter] = parseInt(number); arr[counter + 1] = '-'; display.lastChild.textContent += "-"; equation += "-"; number = ''; counter += 2; }//if operator is "+"
  if (param == 13) { arr[counter] = parseInt(number); display.lastChild.textContent += "+"; equation += "+"; arr[counter + 1] = '+'; number = ''; counter += 2; }// if delete equation
  if (param == 14) {display.lastChild.textContent = ""; display.firstChild.textContent = "";
    for (let i = 0; i < arr.length; i++) { arr[i] = null; }
    number = 0; equation = 0;} // if total
  if (param == 15) {arr[counter] = parseInt(number); let total = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (i % 2 != 0) {//multi
        if (arr[i] == "*") { total = total * arr[i + 1]; }
        if (arr[i] == "/") {//divide
          if (arr[i + 1] != 0) { total = total / arr[i + 1]; }
          else { alert("divide by 0 is prohibited "); display.lastChild.textContent = ''; number = 0; equation = ''; counter = 0; return; }
        }//minus
        if (arr[i] == "-") { total = total - arr[i + 1]; }//plus
        if (arr[i] == "+") { total = total + arr[i + 1]; }
      }
    }
    display.firstChild.textContent = `${total}`; display.lastChild.textContent = ''; equation = 0; counter = 0; number = 0;
    for (let i = 0; i < arr.length; i++) { arr[i] = null; }
    return;}// nums 0-9
  if (param < 10) { number += '' + param; equation += param; display.lastChild.textContent = `${equation}`; }
}