let objectIDquiz = [];
let quiz; //para uso em reload no scriptTela2



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

usersQuizzes();
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
    quiz = id; //para tela2
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`);
    promise.then(success);
}

function choseQuizz(){   
    const screenTwo = document.querySelector('.quiz-open');
    screenTwo.classList.remove('hidden');

    const screenOne = document.querySelector('.screen-one');
    screenOne.classList.add('hidden');

    displayQuiz();  //função em scriptTela2
}

function success(response){
    objectIDquiz = response.data;
    console.log(objectIDquiz);
    choseQuizz();
}

function createQuizz(){
    const screenThree = document.querySelector('.your-quiz');
    screenThree.classList.remove('hidden');

    const screenOne = document.querySelector('.screen-one');
    screenOne.classList.add('hidden');
}
