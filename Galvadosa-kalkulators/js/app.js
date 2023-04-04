let waterAmount = document.getElementById("mililiters")
let alcoAmount = document.getElementById("alco")
let addResult = document.getElementById("result")


const addWater = () => {
    id1 = waterAmount.value * alcoAmount.value / 100
    result = 60 * id1 / 40 + Number(id1)
    
    addResult.innerText = result;
}

