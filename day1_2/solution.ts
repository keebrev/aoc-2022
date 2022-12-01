import {executionTime, getDate} from "../common/exec_time.ts";
import {sortAsc, sum} from "../common/math.ts";
const start = getDate()

let text = "";
try {
  text = await Deno.readTextFile("input.txt");
} catch (e) {
  console.log("%cThe file %cinput.txt %cwas not found", "color: red", "color: white, background-color: red", "color: red")
}

let currentCarryingElf = 0;
const elfCalories = []

for(let line of text.split('\n')) {
  if(line === "") {
    elfCalories.push(currentCarryingElf)
    currentCarryingElf = 0;
  } else {
    currentCarryingElf += parseInt(line)
  }
}

const topElfes = elfCalories.sort(sortAsc).slice(-3);
const total = topElfes.reduce(sum)
console.log(`%cThe sum of calories from top 3 elfs is: %c${total} %ckcal`, "color: green", "color: yellow", "color: green")
const end = getDate()
executionTime(start, end)
