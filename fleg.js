let input = document.querySelector("input")
let button = document.querySelector("button")
let flegimg = document.querySelector(".flegimg")





let form = document.querySelector("form")

form.onsubmit = (e) => {
    e.preventDefault()

    let country = form.elements[0].value.toLowerCase()
    Data(country)
}

async function Data(country) {
    let response = await fetch('https://flagcdn.com/en/codes.json')
    let countrys = await response.json()



    for (let i in countrys)


    //   for(let i=0; i<countrys.length; i++)
    {
        countrys[i] = countrys[i].toLowerCase()
        if (countrys[i] === country) {
            let flag = document.createElement("img")
            flag.src = 'https://flagcdn.com/16x12/' + i + ".png"
            document.querySelector(".flegimg").appendChild(flag)
        }
    }
}

