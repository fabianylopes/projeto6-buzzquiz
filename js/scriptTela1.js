
console.log(objectYourQuiz);

//const quizzUsersKey = "quizzes";

function usersQuizzes(){

    const quizzes = document.querySelector('.quizzes-created');
    quizzes.innerHTML = '';

    if(objectYourQuiz.length === 0){
        const userQuizz = document.querySelector('.create-quizz');
        userQuizz.classList.remove('hidden');
    }else{
        const userQuizz = document.querySelector('.created-quizzes');
        userQuizz.classList.remove('hidden');

        for(let i = 0; i < objectYourQuiz.length; i++){
            quizzes.innerHTML += `
            <div class="quizzes-list">
                <img src="${objectYourQuiz[i].image}">
                <div class="overlay"></div>
                <div class="title">${objectYourQuiz[i].title}</div>
            </div>
            `
        }
    }
}

//usersQuizzes();
getQuizzes();

// localStorage.setItem("nome", "João");
// const pessoa = localStorage.getItem("nome", "João");
// console.log(pessoa);

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
