const profitMonth = document.getElementById("profitMonth")
const worktimeWeek = document.getElementById("worktimeWeek")
const worktimeClient = document.getElementById("worktimeClient")
const taxRate = document.getElementById("taxRate")
const expensesMonth = document.getElementById("expensesMonth")

const incomeHourOutput = document.getElementById("incomeHourOutput")
const priceClientOutput = document.getElementById("priceClientOutput")

function update() {
    if(Number(taxRate.value) >= 100) {
        taxRate.value = 99
    }

    const incomeMonth = (Number(profitMonth.value) + Number(expensesMonth.value)) / (1 - (Number(taxRate.value) / 100))
    const incomeHour = incomeMonth / (Number(worktimeWeek.value) * 4.35)
    const clientPrice = incomeHour * Number(worktimeClient.value)

    if(Number(profitMonth.value) > 0 && Number(worktimeWeek.value) > 0 && Number(worktimeClient.value) > 0) {
        incomeHourOutput.textContent = incomeHour.toFixed(2)
        priceClientOutput.textContent = clientPrice.toFixed(2)
        if (incomeHourOutput.textContent > 2000000000000000000) {
            incomeHourOutput.textContent = "Sorry, sounds too ilegal"
            priceClientOutput.textContent = "A lot."
        }
    } else {
        incomeHourOutput.textContent = 0
        priceClientOutput.textContent = 0
    }
}

const allInputs = [profitMonth, worktimeWeek, worktimeClient, taxRate, expensesMonth]
allInputs.forEach(
    (input) => {
        input.addEventListener("input", update)
    }
)