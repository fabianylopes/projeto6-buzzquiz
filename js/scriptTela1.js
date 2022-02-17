
function userQuizzes(){
    
}

function quizzesCreated(){
    const userQuizz = document.querySelector('.created-quizzes');
    userQuizz.classList.remove('hidden');
}

function noQuizzes(){
    const userQuizz = document.querySelector('.create-quizz');
    userQuizz.classList.remove('hidden');
}

getQuizzes();

function getQuizzes(){
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promise.then(quizzesList);
}

function quizzesList(response){
    const quizzes = document.querySelector('.all-quizzes');
    quizzes.innerHTML = '';

    let info = response.data;

    for(let i = 0; i < info.length; i++){
        quizzes.innerHTML += `
        <div class="quizzes-list" onclick="showQuizz(${info[i].id})">
            <img src="${info[i].image}">
            <div class="overlay"></div>
            <div class="title">${info[i].title}</div>
        </div>
        `
    }
}

function showQuizz(id){

    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`);
    promise.then(success);

    choseQuizz();

}

function choseQuizz(){   
    const screenTwo = document.querySelector('.quiz-open');
    screenTwo.classList.remove('hidden');

    const screenOne = document.querySelector('.screen-one');
    screenOne.classList.add('hidden');

}

function success(response){
    console.log(response)
}

function createQuizz(){
    const screenThree = document.querySelector('.your-quiz-basic-info');
    screenThree.classList.remove('hidden');

    const screenOne = document.querySelector('.screen-one');
    screenOne.classList.add('hidden');
}
