
const complimentBtn = document.getElementById("complimentButton");

const fortuneBtn = document.getElementById("fortuneButton");

const popUp = document.getElementById("popUp");

const attemptBtn = document.getElementById("attempt");

const postBtn = document.getElementById("postExample")

const submitBtn = document.getElementById("numSubmit")


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
};

const getPopUp = () => {
    axios.get("http://localhost:4000/api/popUp/")
        .then(res => {
            const data = res.data
            window.open(data)
        })
};

const putAttemptBtn = () => {
    axios.put("http://localhost:4000/api/attempt/:id")
    .then(res => {
        const data = res.data
        alert(data)
    })
};

const postBtnExample = () => {
    axios.post("http://localhost:4000/api/postExample")
        .then(res => {
            const data = res.data
            alert(data)
        })
};

const submitionHandler = () => {
    const numTxt = document.getElementById("numText") 
    console.log('text',numTxt.value); 
    const body = { num: numTxt.value }
    axios.post("http://localhost:4000/api/postNumButton", body)
    .then(res => {
        const data = res.data
        alert(data)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
popUp.addEventListener('click', getPopUp)
attemptBtn.addEventListener('click', putAttemptBtn)
postBtn.addEventListener('click', postBtnExample)
submitBtn.addEventListener('click', submitionHandler)
