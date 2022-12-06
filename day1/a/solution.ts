const text = await Deno.readTextFile("input.txt");
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
