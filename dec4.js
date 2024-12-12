const names = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
    { name: "John", age: 30 },
    { name: "Jane", age: 35 },
    { name: "Joe", age: 40 },
  ];
  const name2 = [
    { name: "Andy", age: 20 },
    { name: "Bilguun", age: 25 },
    { name: "Jargalmaa", age: 30 },
    { name: "Anguuch", age: 35 },
    { name: "Mah", age: 40 },
    { name: "Chinguun", age: 45 },
  ];
  // 1. FIND FIRST PERSON THAT NAME STARTS WITH 'C'
  // 2. FIND FIRST PERSON THAT OLDER THAN 25
  let allNames = [...names, ...name2]
  const firstStartNameWc = allNames.find(person => person.name.startsWith("C"));
  console.log(firstStartNameWc)
  const firstPersonOlderThan25 = allNames.find(person => person.age > 24)
  console.log(firstPersonOlderThan25)