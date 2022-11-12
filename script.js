let state = {
    previousOperand: "",
    currentOperand: "",
    operator: "",
};

//create calculator box
const box = document.createElement("div");
box.setAttribute("class", "box");
box.setAttribute('class','d-flex align-items-center justify-content-center')

//create calculator body
const calculatorBody = document.createElement("div");
calculatorBody.setAttribute("class", "container");

const innerElem = document.createElement("div");
innerElem.setAttribute("class", "col inner-elements");
innerElem.innerHTML = `
    <div class="row logo">
      <h1 id="title" class="text-center">calculator</h1><br/>
      <p id="description" class="text-center">This calculator is designed with DOM JS</p>
    </div>

    <div class=" row display" id="dis">
      <div class="previous-op">${state.previousOperand}</div>
      <div class="current-op">${state.currentOperand}</div>
      <input type="text" id="result" class="previous-op" val="${state.currentOperand}"/>
    </div>

    <div class=" row calc-buttons mt-5">    
      <div class="col"><button class="num-button">7</button></div>
      <div class="col"><button class="num-button">8</button></div>
      <div class="col"><button class="num-button">9</button></div>
      <div class="col"><button onclick="opSubButtonClicked()" class="op-button sub" id="subtract">-</button></div>
    </div>

    <div class=" row calc-buttons">    
      <div class="col"><button class="num-button">4</button></div>
      <div class="col"><button class="num-button">5</button></div>
      <div class="col"><button class="num-button">6</button></div>
      <div class="col"><button onclick="opAddButtonClicked()" class="op-button add" id="add">+</button></div>
    </div>

    <div class=" row calc-buttons">    
      <div class="col"><button class="num-button">1</button></div>
      <div class="col"><button class="num-button">2</button></div>
      <div class="col"><button class="num-button">3</button></div>
      <div class="col"><button onclick="opDivButtonClicked()" class="op-button div">/</button></div>
    </div>

    <div class=" row calc-buttons">    
      <div class="col"><button class="num-button">.</button></div>
      <div class="col"><button class="num-button">0</button></div>
      <div class="col"><button onclick="opModButtonClicked()" class="op-button mod">%</button></div>
      <div class="col"><button onclick="opMulButtonClicked()" class="op-button mul">X</button></div>
    </div>

    <div class=" row calc-buttons">    
      <div class="col"><button class="delete-button"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button></div>
      <div class="col"><button class="clear-button" id="clear">C</button></div>
      <div class="col-6"><button onClick="result()" class="result-button" id="equal">=</button></div>
    </div>
`;
  
calculatorBody.append(innerElem);
box.append(calculatorBody);
document.body.appendChild(box);
  
const numberButton = document.querySelectorAll(".num-button");
const disp = document.querySelector(".display");
const prevOp = document.querySelector(".previous-op");
const currentOp = document.querySelector(".current-op");

numberButton.forEach((button) => {
  button.onclick = function refreshDisp() {
    state.currentOperand = state.currentOperand + button.innerText;
    currentOp.innerText = state.currentOperand;
  };
});
  
const clearButton = document.querySelector(".clear-button");
clearButton.onclick = () => {
  currentOp.innerText = "";
  prevOp.innerText = "";
  state.currentOperand = "";
  state.previousOperand = "";
};

const deleteButton = document.querySelector(".delete-button");
deleteButton.onclick = () => {
  currentOp.innerText = "";
  state.currentOperand = "";
  state.previousOperand = "";
};
  
function result() {
  state.currentOperand = currentOp.innerText;
    
  let res;
  switch (state.operator) {
    case "+":
      console.log(state.currentOperand, state.previousOperand, state.operator)
      res = +state.previousOperand + +state.currentOperand;
      console.group(res);
      refreshDisp(res);
    break;

    case "-":
      res = +state.previousOperand - +state.currentOperand;
      refreshDisp(res);
    break;

    case "/":
      res = +state.previousOperand / +state.currentOperand;
      refreshDisp(res);
    break;

    case "*":
      res = +state.previousOperand * +state.currentOperand;
      refreshDisp(res);
    break;

    case "%":
      res = +state.previousOperand % +state.currentOperand;
      refreshDisp(res);
    break;
  }
}
  
function refreshDisp(res) {
  prevOp.innerText = prevOp.innerText + currentOp.innerText;
  currentOp.innerText = res;
}
  
//functions for performing operations

function opAddButtonClicked() {
  // console.log("addition")
  operation("+");
}
  
function opSubButtonClicked() {
  operation("-");
}
  
function opDivButtonClicked() {
  operation("/");
}
  
function opMulButtonClicked() {
  operation("*");
}
function opModButtonClicked() {
  operation("%");
}
  
function operation(opr) {
  state.operator = opr;
  state.previousOperand = state.currentOperand;
  console.log(state.previousOperand);
  state.currentOperand = "";
  prevOp.innerText = state.previousOperand + state.operator;
  currentOp.innerText = "";
}