let jsonData = "";
let answer = "";

if (device.mobile()) {
    document.getElementById("dropdown_id").classList.remove("w-25");
    document.getElementById("dropdown_id").classList.add("w-100");
    
    document.getElementById("drop_id").classList.remove("w-25");
    document.getElementById("drop_id").classList.add("w-100");
    
    document.getElementById("question_id").classList.remove("w-25");
    document.getElementById("question_id").classList.add("w-100");
    
    document.getElementById("input_id").classList.remove("w-25");
    document.getElementById("input_id").classList.add("w-100");
}

function fetchJSONData() {
    fetch("./data/questions_and_answers.json")
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
    document.getElementById("dropdown_id").innerHTML = "Literature";
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
    document.getElementById("dropdown_id").innerHTML = "Science";
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
    document.getElementById("dropdown_id").innerHTML = "Mathematics";
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
    document.getElementById("dropdown_id").innerHTML = "Fine Arts";
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
    document.getElementById("dropdown_id").innerHTML = "History";
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
    document.getElementById("dropdown_id").innerHTML = "Other";
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
    document.getElementById("dropdown_id").innerHTML = "Random";
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
    if(calculateEditDistance(document.getElementById("answer").value.toUpperCase(), answer.toUpperCase())>80){
        return true;
    }
    return false;
}

function _idk(){
    alert(answer);
}

function calculateEditDistance(str1, str2) {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null))

    for (let i = 0; i <= str1.length; i += 1) {
      matrix[0][i] = i
    }

    for (let j = 0; j <= str2.length; j += 1) {
      matrix[j][0] = j
    }

    for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
        const diff = str1[i - 1] === str2[j - 1] ? 0 : 1
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + diff
        )
      }
    }

    return 100-((matrix[str2.length][str1.length])/(str1.length > str2.length ? str1.length : str2.length))*100;
  }
