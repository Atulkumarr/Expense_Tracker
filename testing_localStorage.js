localStorage.setItem('name', JSON.stringify([15, 45, 454, 154, 44, 48, 45]))

let questions = JSON.parse(localStorage.getItem('name'))
console.log(questions)
// localStorage.removeItem(JSON.stringify(name.splice(1, 1)));
// localStorage.removeItem('name')
questions.forEach(function (demo, index) {
    questions.splice(index,1 );
    localStorage.setItem('name', JSON.stringify(questions));
})
