$(document).ready(onReady);


//console.log('Here are all the available people:', people);

let current = 0;

function onReady(){

    $('#people').on('click', '.person', checkAnswer);
    render();
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function shuffleArr(){
    // this can be done with the fisher-yates algorithm
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

    for (i = people.length - 1; i > 0; i--){
        let random = Math.floor(Math.random() * (i + 1));
        let temp = people[i];
        people[i] = people[random];
        people[random] = temp;
    }
}

function checkAnswer(){
    //console.log('clicked:', $(this).data().name);
    if ($(this).data().name === people[current].name){
        console.log('correct');
        render();
    } else {
        console.log('incorrect');
    }
}

function render(){
    // first shuffle the array and then select a random person
    shuffleArr();
    current = randomNumber(0, people.length-1);
    $('h1').empty();
    $('h1').append(`
        Click on: ${people[current].name}
    `);

    // display all people
    $('#people').empty();
    for (let person of people){
        $('#people').append(`
            <span class="person" data-name="${person.name}">
                <img src="https://github.com/${person.githubUsername}.png?size=150" alt="Profile image of ${person.name}">
            </span>
        `);
    }
}