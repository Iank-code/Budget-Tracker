/**
 * array of objects in the shape
 *  {
 *      label: "Bike",
 *      amount: 200
 *  }
 * Example
 * 
 //  * todo: add an id to each of the expenses

 e.g {id: 1, label: 'Car', value: 200}
 * 
 * expenses = [
 * {
 *      label: "Car",
 *      amount: 100
 *  },
 * {
 *      label: "Bike",
 *      amount: 200
 *  },
 * {
 *      label: "Bike",
 *      amount: 200
 *  }
 * 
 * ]
 */
let expenses = [];
let budgetAmt = 0;


const computeBalanceAndTotalExpense = () => {
    const totalExpenses = () => {
        let amt = 0;
        if(expenses.length <= 0) return 0;
        
        expenses.forEach((value) => {
            // value = {label: 'Car', amount: 200}
            amt += parseInt(value.amount); // amt  =  amt + (value.amount as number)
        })


        return amt;
    };

    const balanceRemaining = budgetAmt - totalExpenses();
    return {balanceRemaining, totalExpenses};
}





window.addEventListener("load", ()=>{
    // variables
    const addBudgetBtn = document.getElementById("addBudget")
    const expenseValueBtn = document.getElementById("expenseValueBtn")
    var budgetInputEl = document.getElementById("budgetInput")
    budgetInputEl.value = budgetAmt;
    const expenseValueInput = document.getElementById("expenseValueInput")
    const expenseName = document.querySelector("#expenseName")


    const valueList = document.querySelector(".valueList")
    const expenseList = document.querySelector(".expenseList")


    const budgetGreenCash = document.querySelector("#budgetGreenCash")
    const expenseRedCash = document.querySelector("#expenseRedCash")
    const balanceGreenCash = document.querySelector("#balanceGreenCash")




    // Add budget function
    addBudgetBtn.addEventListener("click", ()=>{
        const budgetAmount = budgetInputEl.value
        budgetGreenCash.innerHTML = budgetAmount;
        budgetAmt = budgetAmount;
        calculateBalance()
    })

    function calculateBalance() {
        const {balanceRemaining} = computeBalanceAndTotalExpense()
        balanceGreenCash.innerText = balanceRemaining
    }


    expenseValueBtn.addEventListener("click", ()=>{

        const expenseNameEl = expenseName.value

        const expenseAmount =expenseValueInput.value;
        // expenseRedCash.innerHTML = expenseAmount



        // expense name shown here
        const p = document.createElement("p")
        p.innerHTML = expenseNameEl

        expenseList.appendChild(p)


        // expense value shown here
        const p1 = document.createElement("p")
        p1.innerText = expenseAmount
        
        valueList.appendChild(p1)
        
        // const removeBtn = document.createElement('p')
        // removeBtn.textContent = 'X'
        // const remove = document.getElementById('remove')
        
        // removeBtn.addEventListener('click', removeElement)

        // remove.appendChild(removeBtn)
        // // enfcsjlndslcldclk
        // // dv;dvsnvdlsnlsdds
        // function removeElement(){
        //     p1.remove()
        //     p.remove()
        //     removeBtn.remove()

        //     calculateBalance()
        // }

        expenses.push({
            label: expenseNameEl,
            amount: expenseAmount
        })


        const {totalExpenses} = computeBalanceAndTotalExpense()
        expenseRedCash.innerHTML = totalExpenses()
        calculateBalance()

        if(!expenseNameEl && !expenseAmount){
            alert("Please input something")
            return
        }


    })

    

})




