const up = document.getElementById('plus')
const down = document.getElementById('minus')
const like = document.getElementById('heart')
const pause = document.getElementById('pause')
var count =  document.getElementById('counter')
//const submit = document.getElementById('submit')

function addOne(){
    up.addEventListener('click', function(){
        //count.innerHTML.value =+ 1
        //console.log (count.innerText)
        //when a click happens take the number called count.innerText from the html document, add 1 to that number to get a new number, display that new number to the screen, and change the [old]number to the new number so when click happens again, the same thing will happen to the number on the screen at that time
        //console.log(typeof count.innerText)
        let oldNumber = count.innerText;
        //console.log(oldNumber);
        let newNumber = (parseInt(oldNumber) + 1)
        //console.log(newNumber)
        let passer = newNumber.toString()
        //console.log(passer)
        document.getElementById('counter').innerText = passer
        

    })
}

function dumpOne(){
    down.addEventListener('click', function(){
        //when a click happens: take the number called count.innerText from the html document, subtract 1 from that number to get a new number, display that new number on the screen, instead of the old number that it added one to so that 
        let oldNumber = parseInt(count.innerText);
        //console.log(oldNumber)
        let newNumber = oldNumber - 1;
        //console.log(newNumber)
        passer = newNumber.toString()
        count.innerText = passer
    })
}

function likeIt(){
    //when a click happens, take the string called count.innerText and write on the screen that '[count.innerText] has been liked 1 time'
    like.addEventListener('click', function(){
        const card = document.createElement("li");
        card.innerText =  `${count.innerText} has been liked 1 time`
        document.querySelector('.likes').appendChild(card)
    })
}

function commenter(){
    //this function should be called when submit button is clicked and should take the statement that's written above the button and place it on the screen then the box in which the statement was written should reset itself
    document.addEventListener('DOMContentLoaded', () => {
        let form = document.querySelector('#comment-form')
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handleComments(e.target.comment.value)
            form.reset()
        } )
    })
}

function handleComments(comment){
    let c = document.createElement('h5');
    c.textContent = comment
    document.querySelector('#list').appendChild(c)

}

function upCount(){
    let oldNumber = parseInt(count.innerText);
        //console.log(oldNumber)
    let newNumber = oldNumber + 1;
        //console.log(newNumber)
    passer = newNumber.toString()
    count.innerText = passer 
}

let counterId = setInterval(upCount, 1000)


let pauseCount = 0
function pauseUnpause(){
    
    if (pauseCount%2 === 0){
        clearInterval(counterId)
    }else {
        counterId = setInterval(upCount, 1000)
    }
    pauseCount = parseInt(pauseCount) + 1
    console.log(pauseCount)
}

function pauseClick(){
    pause.addEventListener('click', pauseUnpause)
}


addOne();
dumpOne();
likeIt();
commenter();
pauseClick();

