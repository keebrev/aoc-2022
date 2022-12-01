import {executionTime, getDate} from "../common/exec_time.ts";
const start = getDate()

let text = "";
try {
  text = await Deno.readTextFile("input.txt");
} catch (e) {
  console.log("%cThe file %cinput.txt %cwas not found", "color: red", "color: white, background-color: red", "color: red")
}

let mostCarryingElf = 0;
let currentCarryingElf = 0;

for(let line of text.split('\n')) {
  if(line === "") {
    if(currentCarryingElf > mostCarryingElf) {
      mostCarryingElf = currentCarryingElf
    }
    currentCarryingElf = 0;
  } else {
    currentCarryingElf += parseInt(line)
  }
}

console.log(`%cThe elf carrying most calories is carrying: %c${mostCarryingElf} %ckcal`, "color: green", "color: yellow", "color: green")

const end = getDate()
executionTime(start, end)
