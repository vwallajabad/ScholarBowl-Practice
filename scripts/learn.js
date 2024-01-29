let jsonData = "";
let i = 0;
let music_mode = false;
let book_mode = false;
let art_mode = false;

if (device.mobile()) {
    document.getElementById("dropdown_id").classList.remove("w-25");
    document.getElementById("dropdown_id").classList.add("w-100");
    
    document.getElementById("drop_id").classList.remove("w-25");
    document.getElementById("drop_id").classList.add("w-100");   

    document.getElementById("next").style.width = "30%";
    document.getElementById("previous").style.width = "30%";
}

function fetchJSONData() {
    fetch("./data/learn.json")
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

function _Musicians() {
    art_mode = false;
    book_mode = false;
    music_mode = true;
    document.getElementById("dropdown_id").innerHTML = "Top 20 Famous Musicians";
    document.getElementById("title").innerHTML = jsonData.learn._20FamousMusicians[i].name;
    document.getElementById("years").innerHTML = jsonData.learn._20FamousMusicians[i].years_active;
    document.getElementById("pieces").innerHTML = "Country: " + jsonData.learn._20FamousMusicians[i].country + "<br>Work(s): " + jsonData.learn._20FamousMusicians[i].famous_pieces;
}

function _Books() {
    art_mode = false;
    music_mode = false;
    book_mode = true;
    document.getElementById("dropdown_id").innerHTML = "Top 100 Books";
    document.getElementById("title").innerHTML = jsonData.learn._100FamousBooks[i].book;
    document.getElementById("years").innerHTML = "";
    document.getElementById("pieces").innerHTML = jsonData.learn._100FamousBooks[i].author;
}

function _Artists() {
    music_mode_mode = false;
    book_mode = false;
    art_mode = true;
    document.getElementById("dropdown_id").innerHTML = "Top 20 Famous Artists";
    document.getElementById("title").innerHTML = jsonData.learn._20FamousArtists[i].artist;
    document.getElementById("years").innerHTML = jsonData.learn._20FamousArtists[i].years;
    document.getElementById("pieces").innerHTML = "Movement(s): " + jsonData.learn._20FamousArtists[i].movements + "<br>Artwork(s):" + jsonData.learn._20FamousArtists[i].artworks;
}

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    if (event.key === 'ArrowLeft') {
        if(music_mode && !art_mode && !book_mode){
            if (i == 0) {
                i = 19;
            }
            else {
                i--;
            }    
            _Musicians();
        }
        else if(art_mode && !music_mode && !book_mode){
            if (i == 0) {
                i = 19;
            }
            else {
                i--;
            }
            _Artists();
        }
        else if(!art_mode && !music_mode && book_mode){
            if (i == 0) {
                i = 19;
            }
            else {
                i--;
    
            }    
            _Books();

        }

        }

    else if (event.key === 'ArrowRight') {
        if(music_mode && !art_mode && !book_mode){
            if (i == 19) {
                i = 0;
            }
            else {
                i++;
    
            }    
            _Musicians();
        }
        else if(art_mode && !music_mode && !book_mode){
            if (i == 19) {
                i = 0;
            }
            else {
                i++;
    
            }    
            _Artists();
        }
        else if(!art_mode && !music_mode && book_mode){
            if (i == 100) {
                i = 0;
            }
            else {
                i++;
    
            }    
            _Books();
        }
    }
}

function _Previous(){
    i--;
    if(music_mode && !art_mode && !book_mode){
        _Musicians();
    }
    else if(!music_mode && art_mode && !book_mode){
        _Artists();
    }
    else if(!music_mode && !art_mode && book_mode){
        _Books();
    }
}

function _Next(){
    i++;
    if(music_mode && !art_mode && !book_mode){
        _Musicians();
    }
    else if(!music_mode && art_mode && !book_mode){
        _Artists();
    }
    else if(!music_mode && !art_mode && book_mode){
        _Books();
    }
}