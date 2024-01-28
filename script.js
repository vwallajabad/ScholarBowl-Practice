let jsonData = "";
let answer = "";

if (device.mobile()) {
    document.getElementById("dropdown_id").classList.remove("w-25");
    document.getElementById("drop_id").classList.remove("w-25");
    document.getElementById("question_id").classList.remove("w-25");
    document.getElementById("input_id").classList.remove("w-25");
    document.getElementById("dropdown_id").classList.add("w-100");
    document.getElementById("drop_id").classList.add("w-100");
    document.getElementById("question_id").classList.add("w-100");
    document.getElementById("input_id").classList.add("w-100");
}

function fetchJSONData() {
    fetch("./questions_and_answers.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`ERROR: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            jsonData = data;
        })
        .catch((error) =>
            console.error("Unable to fetch JSON file: ", error));
}

fetchJSONData();

async function _literature() {
    const question_h1 = document.getElementById("question");
    for (let i = 0; i < Object.keys(jsonData.quizbowl.literature).length; i++) {
        question_h1.innerHTML = jsonData.quizbowl.literature[i].question;
        answer = jsonData.quizbowl.literature[i].answer;
        await new Promise((resolve) => {
            let checkInterval = setInterval(() => {
                if (_check()) {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);
        });
        document.getElementById("answer").value = "";
    }
}

async function _science() {
    const question_h1 = document.getElementById("question");
    for (let i = 0; i < Object.keys(jsonData.quizbowl.science).length; i++) {
        question_h1.innerHTML = jsonData.quizbowl.science[i].question;
        answer = jsonData.quizbowl.science[i].answer;
        await new Promise((resolve) => {
            let checkInterval = setInterval(() => {
                if (_check()) {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);
        });
        document.getElementById("answer").value = "";
    }
}

async function _mathematics() {
    const question_h1 = document.getElementById("question");
    for (let i = 0; i < Object.keys(jsonData.quizbowl.mathematics).length; i++) {
        question_h1.innerHTML = jsonData.quizbowl.mathematics[i].question;
        answer = jsonData.quizbowl.mathematics[i].answer;
        await new Promise((resolve) => {
            let checkInterval = setInterval(() => {
                if (_check()) {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);
        });
        document.getElementById("answer").value = "";
    }
}

async function _fine_arts() {
    const question_h1 = document.getElementById("question");
    for (let i = 0; i < Object.keys(jsonData.quizbowl.fine_arts).length; i++) {
        question_h1.innerHTML = jsonData.quizbowl.fine_arts[i].question;
        answer = jsonData.quizbowl.fine_arts[i].answer;
        await new Promise((resolve) => {
            let checkInterval = setInterval(() => {
                if (_check()) {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);
        });
        document.getElementById("answer").value = "";
    }
}

async function _history() {
    const question_h1 = document.getElementById("question");
    for (let i = 0; i < Object.keys(jsonData.quizbowl.history).length; i++) {
        question_h1.innerHTML = jsonData.quizbowl.history[i].question;
        answer = jsonData.quizbowl.history[i].answer;
        await new Promise((resolve) => {
            let checkInterval = setInterval(() => {
                if (_check()) {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);
        });
        document.getElementById("answer").value = "";
    }
}

async function _other() {
    const question_h1 = document.getElementById("question");
    for (let i = 0; i < Object.keys(jsonData.quizbowl.other).length; i++) {
        question_h1.innerHTML = jsonData.quizbowl.other[i].question;
        answer = jsonData.quizbowl.other[i].answer;
        await new Promise((resolve) => {
            let checkInterval = setInterval(() => {
                if (_check()) {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);
        });
        document.getElementById("answer").value = "";
    }
}

async function _RANDOM() {
    const question_h1 = document.getElementById("question");
    for (let i = 0; i < Object.keys(jsonData.quizbowl.random).length; i++) {
        question_h1.innerHTML = jsonData.quizbowl.random[i].question;
        answer = jsonData.quizbowl.random[i].answer;
        await new Promise((resolve) => {
            let checkInterval = setInterval(() => {
                if (_check()) {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);
        });
        document.getElementById("answer").value = "";
    }
}


function _check() {
    return ((document.getElementById("answer").value) == answer);
}

function _idk(){
    alert(answer);
}