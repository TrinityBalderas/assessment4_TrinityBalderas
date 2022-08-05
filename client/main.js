const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const popUp = document.getElementById("popUp")
const attemptBtn = document.getElementById("attempt")
const attempt2Btn = document.getElementById("attempt2")
const lsBox = document.getElementById("ls")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

const getPopUp = () => {
    axios.get("http://localhost:4000/api/popUp/")
        .then(res => {
            const data = res.data
            window.open(data)
        })
}

const getAttemptBtn = () => {
    axios.get("http://localhost:4000/api/attempt/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}
const getAttempt2Btn = () => {
    axios.get("http://localhost:4000/api/attempt2/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getls = () => {
    axios.get("http://localhost:4000/api/ls/")
    .then(res => {
        const data = res.data
    })
    displayLs(data)
}

const deletels = () => {
    axios.revome(`http://localhost:4000/api/ls/${data}`)
    .then(res => {
        const data = re.data
    })
}
const displayLs = (str) => {
    lsBox.innerHTML = ""
    const list = document.createElement(div)
    list.innerHTML =
    `
    <ul class="list">
        <li>${str}</li>
    </ul>
    `
    lsBox.appendChild(list)
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
popUp.addEventListener('click', getPopUp)
attemptBtn.addEventListener('click', getAttemptBtn)
attempt2Btn.addEventListener('click', getAttempt2Btn)
lsBox.addEventListener('submit', displayLs)
