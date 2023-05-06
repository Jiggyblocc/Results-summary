const contents = {
    Reaction: {
        score: 73,
        scoreSummary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        `,
        icon: 'icon-reaction.svg'
    },
    Memory: {
        score: 20,
        scoreSummary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        `,
        icon: 'icon-memory.svg'
    },
    Verbal: {
        score: 51,
        scoreSummary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        `,
        icon: 'icon-verbal.svg'
    },
    Visual: {
        score: 75,
        scoreSummary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        `,
        icon: 'icon-visual.svg'
    }
}

const container = document.getElementById("summary-items");


const keys = Object.keys(contents);
console.log(keys)
// (arg1, arg2, arg3, ...args) => {} anonymous function

        //   <div class="icon2">
        //     <img id="icon2" src="icon-memory.svg" />

        //     <span
        //       >Memory
        //       <span class="text2"
        //         ><b>92</b> / <span class="text1">100</span></span
        //       >
        //     </span>
        //   </div>
keys.forEach((category, index) => {
    const categoryValue = contents[category]

    const b = document.createElement("b")
    b.appendChild(document.createTextNode(categoryValue.score));

    const smallSpan = document.createElement("span")
    smallSpan.appendChild(document.createTextNode(' / 100'));
    smallSpan.setAttribute('class', 'text1')

    const mediumSpan = document.createElement('span')
    mediumSpan.appendChild(b)
    mediumSpan.appendChild(smallSpan)
    mediumSpan.setAttribute('class', 'text2')
    
    const bigSpan = document.createElement("span")
    bigSpan.appendChild(document.createTextNode(category))
    bigSpan.appendChild(mediumSpan)

    const imgTag = document.createElement('img')
    imgTag.setAttribute('id', `icon${index + 1}`)
    imgTag.setAttribute('src', categoryValue.icon)

    const ogaButton = document.createElement('button')
    ogaButton.appendChild(bigSpan)
    ogaButton.appendChild(imgTag)
    ogaButton.setAttribute('class', `icon${index + 1} btn`)
    ogaButton.setAttribute('onclick', 'handleClick(event)')
    ogaButton.setAttribute('data-category', category)

    container.appendChild(ogaButton)
})

const resultSummaryElement = document.querySelector("#result-summary")
const resultStatusElement = document.querySelector("#result-status")
const resultElement = document.querySelector("#result")

function handleClick(event) {
    console.log(event.target.dataset)
    const clickedCategory = event.target.dataset.category
    const clickedCategoryDetails = contents[clickedCategory]
    resultSummaryElement.innerHTML = clickedCategoryDetails.scoreSummary
    if (clickedCategoryDetails.score > 60) {
        resultStatusElement.innerHTML = 'GREAT'
        console.log('GREAT')
    }
    else if (clickedCategoryDetails.score < 30) {
        resultStatusElement.innerHTML = 'POOR'
        console.log('POOR')
    }
    else {
        resultStatusElement.innerHTML = 'GOOD'
        console.log('GOOD')
    }
    resultElement.innerHTML = clickedCategoryDetails.score
}