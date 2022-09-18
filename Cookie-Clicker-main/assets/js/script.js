// Variables dedicated to counting items
let counter = 0 // Total amount of constructs
let unitsPerSec = 0 // Constructs produced per second...or every 2,5 seconds
let multiplier = 1 // Base value associated to our multiplier-type bonus, aka space shuttle
let pileOfBonuses = [] // Unused???

// Variables dedicated to inventory multipliers
let hubbleCount = 0 // Total amount of hubbles, aka the basic auto-clicker
let astronautCount = 0 // Total amount of astronauts, aka auto-clicker MarkII
let spaceCraftCount = 0 // Total amount of spacecrafts, aka auto-clicker MarkIII
let spaceShuttleCount = 0 // Total amount of space shuttles, aka our multiplying mob
let NASACount = 0 // Total amount of NASA factories, aka our big gun
let TonyStarkCount = 0 // Total amount of Tony Stark generated, aka our Deus ex Machina

// Variables dedicated to bonuses'prices
let hubblePrice = 20
let astronautPrice = 100
let spaceCraftPrice = 1000
let spaceShuttlePrice = 10000
let NASAPrice = 45000
let TonyStarkPrice = 100000

// Variables dedicated to the values associated to our aforementioned bonuses
let hubbleBonus = 1 // Well, that's a basic auto-clicker for you: + 1 construct per 2,5 seconds
let astronautBonus = 10 // + 5 constructs per 2,5 seconds
let spacecraftBonus = 70 // + 70 constructs per 2,5 seconds
let NASABonus = 5000 // + 5000 constructs per 2,5 seconds
let TonyStarkBonus = 25000 // + 25000 constructs per 2,5 seconds, let's roll

/*
// Local Storage
let dataStorage = getData() // Retrieving stored data
setInterval(()=>{setData(counter, unitsPerSec)}, 1000)

function getData(){
    let displayScore = document.getElementById("score")
    let displayProd = document.getElementById("production")
    let dataStorage = JSON.parse(localStorage.getItem("data"))
    dataStorage == null ? displayScore.innerHTML = dataStorage["counter"] : displayScore.innerHTML = dataStorage["counter"]
    dataStorage == null ? displayProd.innerHTML = dataStorage["unitsPerSec"] : displayScore.innerHTML = dataStorage["unitsPerSec"]
    console.log(dataStorage["counter"])
    return dataStorage
}

// second set Data
function setData(counter, unitsPerSec) {
    let coord =
    {
        "counter": counter,
        "unitsPerSec": unitsPerSec,
    }
    
    localStorage.setItem("data", JSON.stringify(coord) )
    document.getElementById("score").innerHTML = coord["counter"] 
    document.getElementById("production").innerHTML = coord["unitsPerSec"]
}


// set score to zero
// <p><button onclick="setZero()" id="zero" type="button">replay</button></p>
function setZero() {
    let coord = {"counter": 0, "unitsPerSec": 0}
    localStorage.setItem("data", JSON.stringify(coord))
    document.getElementById("score").innerHTML = coord["counter"]
}
*/

// onclick function associated to the canvas area: click, produce constructs, rinse and repeat
function planetClick() {
    counter += 1 * multiplier 
    document.getElementById("score").innerText = counter 
}

// Check every second whether conditions are met to enable buying actions associated to our bonuses
setInterval(() => {
    counter >= 100 ? document.getElementById("buyAstronaut").disabled = false : console.log("Not enough constructs")
    counter >= 1000 ? document.getElementById("buySpaceCraft").disabled = false : console.log("Not enough constructs")
    counter >= 10000 && spaceShuttleCount < 1 ? document.getElementById("buySpaceShuttle").disabled = false : console.log("Not enough constructs")
    counter >= 45000 ? document.getElementById("buyNASA").disabled = false : console.log("Not enough constructs")
    counter >= 100000 ? document.getElementById("buyTonyStark").disabled = false : console.log("Not enough constructs")

}, 1000) // Could and should have associated the costs to specific variables

// Auto-clicker event
document.getElementById("buyHubble").addEventListener("click", () => {
    if (counter >= hubblePrice) {
        hubbleCount++
        counter -= hubblePrice
        unitsPerSec += hubbleBonus * multiplier // Add the bonus'value to the automatic production
        document.getElementById("score").innerText = counter
        document.getElementById("hubbleCount").innerHTML = hubbleCount
        document.getElementById("production").innerText = unitsPerSec
        hubblePrice = Math.round(hubblePrice * 1.2)
        document.getElementById("hubblePrice").innerText = hubblePrice
    }

    setInterval(() => {
        counter += unitsPerSec // Total amount of constructs goes up every 2,5 seconds
        document.getElementById("score").innerText = counter
    }, 2500)
})

// Astronaut event
document.getElementById("buyAstronaut").addEventListener("click", () => {
    if (counter >= astronautPrice) {
        astronautCount++
        counter -= astronautPrice
        unitsPerSec += astronautBonus * multiplier
        document.getElementById("astronautCount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("astronautCount").innerHTML = astronautCount
        document.getElementById("production").innerText = unitsPerSec
        document.getElementById("displayAstronaut").classList.remove("hidden")
        astronautPrice = Math.round(astronautPrice * 1.25)
        document.getElementById("astronautPrice").innerText = astronautPrice
    }
    else console.log("Lacking constructs to buy more of this one")

    setInterval(() => {
        counter += unitsPerSec
        document.getElementById("score").innerText = counter
    }, 2500)
})

// Spacecraft event
document.getElementById("buySpaceCraft").addEventListener("click", () => {
    if (counter >= spaceCraftPrice) {
        spaceCraftCount++
        counter -= spaceCraftPrice
        unitsPerSec += spacecraftBonus * multiplier
        document.getElementById("spaceCraftCount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("spaceCraftCount").innerHTML = spaceCraftCount
        document.getElementById("production").innerText = unitsPerSec
        document.getElementById("displaySpaceCraft").classList.remove("hidden")
        spaceCraftPrice = Math.round(spaceCraftPrice * 1.4)
        document.getElementById("spaceCraftPrice").innerText = spaceCraftPrice
    }
    else console.log("Lacking constructs to buy more of this one")

    setInterval(() => {
        counter += unitsPerSec
        document.getElementById("score").innerText = counter
    }, 2500)
})

// Space shuttle event
document.getElementById("buySpaceShuttle").addEventListener("click", multiply = () => {
    if (counter >= spaceShuttlePrice && spaceShuttleCount < 1) {
        spaceShuttleCount++
        counter -= spaceShuttlePrice
        multiplier *= 2

        document.getElementById("buySpaceShuttle").removeEventListener("click", multiply)
        document.getElementById("spaceShuttleCount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("spaceShuttleCount").innerHTML = spaceShuttleCount
        document.getElementById("displaySpaceShuttle").classList.remove("hidden")
        spaceShuttlePrice = Math.round(spaceShuttlePrice * 1.5)
        document.getElementById("spaceShuttlePrice").innerText = spaceShuttlePrice

        let setTime = Date.now()
        let remainingTime

        let countdown = setInterval(() => {
            document.getElementById("buySpaceShuttle").disabled = true
            let clockin = Date.now() - setTime
            remainingTime = ~~(31000 - clockin)

            if (remainingTime <= 0) {
                clearInterval(countdown)
                spaceShuttleCount--
                multiplier = 1
                document.getElementById("spaceShuttleCount").innerHTML = spaceShuttleCount
                document.getElementById("buySpaceShuttle").addEventListener("click", multiply)
            }
        }, 2500)
        
    }
    else console.log("Cannot get this right now")
})

// NASA event
document.getElementById("buyNASA").addEventListener("click", () => {
    if (counter >= NASAPrice) {
        NASACount++
        counter -= NASAPrice
        unitsPerSec += NASABonus * multiplier
        document.getElementById("NASACount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("NASACount").innerHTML = NASACount
        document.getElementById("production").innerText = unitsPerSec
        document.getElementById("displayNASA").classList.remove("hidden")
        NASAPrice = Math.round(NASAPrice * 1.75)
        document.getElementById("NASAPrice").innerText = NASAPrice
    }
    else console.log("Lacking constructs to buy more of this one")

    setInterval(() => {
        counter += unitsPerSec
        document.getElementById("score").innerText = counter
    }, 2500)
})

// Tony Stark event
document.getElementById("buyTonyStark").addEventListener("click", () => {
    if (counter >= TonyStarkPrice) {
        TonyStarkCount++
        counter -= TonyStarkPrice
        unitsPerSec += TonyStarkBonus * multiplier
        document.getElementById("TonyStarkCount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("TonyStarkCount").innerHTML = TonyStarkCount
        document.getElementById("production").innerText = unitsPerSec
        document.getElementById("displayTonyStark").classList.remove("hidden")
        TonyStarkPrice = Math.round(TonyStarkPrice * 2.5)
        document.getElementById("tonyStarkPrice").innerText = TonyStarkPrice
    }
    else console.log("Lacking constructs to buy more of this one")

    setInterval(() => {
        counter += unitsPerSec
        document.getElementById("score").innerText = counter
    }, 2500)
})

window.onbeforeunload = setData(counter, unitsPerSec)