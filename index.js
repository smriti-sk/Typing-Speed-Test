const setOfWords = ["Iam Smriti Kuamri",
                    "I am learning JavaScript anguage, this is my first projects",
                    "Please review this, any feedbacks are welcomed."]

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = ()=>{
    let randomNummber = Math.floor(Math.random()* setOfWords.length);
    msg.innerText = setOfWords[randomNummber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = ()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime= ((endTime - startTime) / 1000); //divide by 1000 to convert from ms to seconds
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount/totalTime)*60) //to convert in minutes

    let finalMsg = "You typed total at "+speed+" words per minute. ";

    finalMsg += compareWords(msg.innerText, totalStr);

    msg.innerText= finalMsg;
}

const compareWords = (str1, str2)=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;

    words1.forEach(function(item, index){
        if (item == words2[index]){
            count++;
        }
    })

    let errorWords = (words1.length - count);
    return (count+ " correct out of "+ words1.length+ " words and the total number of errors are "+errorWords+".");

}

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

btn.addEventListener('click', function (){
    console.log(this);
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }
    else if (this.innerText == 'Done'){
        typeWords.disabled = true;
        this.innerText = 'Start';
        endPlay();
    }
})