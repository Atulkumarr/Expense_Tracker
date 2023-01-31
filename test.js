let submit_button = document.querySelector('#submit')
let transactions = document.querySelector('#transactions')
let total_amount = document.querySelector('#balance')


// let details = []
let details = JSON.parse(localStorage.getItem('details')) || []
submit_button.addEventListener('click', () => {
    let description = document.querySelector('#text-value').value
    let amount = document.querySelector('#amount-value').value



    // adding data into transactions
    if (description.trim().length >= 1 && amount.length >= 1) {

        details.push({
            item: description, price: amount
        })
        localStorage.setItem('details', JSON.stringify(details))

        data = `<li class="items">
                    <span class="left">${description}</span>
                    <span class="right">${amount}</span>
                    <span class="delete fa-solid fa-xmark"></span>
                 </li>`

        transactions.innerHTML = transactions.innerHTML + data;


        let final_value = details.reduce((accumulator, current) => {
            return parseFloat(accumulator) + parseInt(current.price)
        }, 0)
        total_amount.innerText = final_value
    }



    // adding id in items
    let items = document.getElementsByClassName('items')
    let item_to_array = Array.from(items)
    // console.log(item_to_array)
    item_to_array.forEach((value, index) => {
        value.setAttribute('id', index)
    })

    // reset button
    document.querySelector('.new-transaction').reset()

})

details.forEach(function (list) {
    transactions.innerHTML = transactions.innerHTML + `<li class="items">
    <span class="left">${list.item}</span>
    <span class="right">${list.price}</span>
    <span class="delete fa-solid fa-xmark"></span>
 </li>`

})
      let final_value = details.reduce((accumulator, current) => {
            return parseFloat(accumulator) + parseInt(current.price)
        }, 0)
        total_amount.innerText = final_value

// console.log(transactions)



// click on transaction -> ->
transactions.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove()
        let deleted_value = (event.target.parentElement.id)
        // console.log(deleted_value)
        details.splice(deleted_value, 1)

        // local storage
        localStorage.setItem('details', JSON.stringify(details));

        // adding id in items
        let items = document.getElementsByClassName('items')
        let item_to_array = Array.from(items)
        // console.log(item_to_array)
        item_to_array.forEach((value, index) => {
            value.setAttribute('id', index)
        })
        
        
        // calculation of total
        final_value = details.reduce((accumulator, current) => {
            return parseFloat(accumulator) + parseInt(current.price)
        }, 0)
        // showing total value
        total_amount.innerText = final_value
    }
})


/**
*! TODO: Have to complete local storage 
* *  Logic For local Storage
* ? have some issues but completed first task
** 1. we need to show to the data of local storage inside ul(transaction)
* ? Need to work on this noe
** 2. whenever we click on close button it should be remove that array index from local storage 
** 3. Also need to remove the amount of that array from the total amount  
** * 4. on refresh show the total amount.
*/