
// function choseQuizz(){   
//     const secondScreen = document.querySelector('.quiz-open');
//     secondScreen.classList.remove('hidden');

//     const firstScreen = document.querySelector('.screen-one');
//     firstScreen.classList.add('hidden');

// }

getQuizzes();

function getQuizzes(){
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promise.then(quizzesList);
}

function quizzesList(response){
    const quizzes = document.querySelector('.all-quizzes');
    quizzes.innerHTML = '';

    let info = response.data;

    console.log(info);

    for(let i = 0; i < info.length; i++){
        quizzes.innerHTML += `
        <div class="quizzes-list">
            <img src="${info.image}">
            <div class="overlay"></div>
            <div class="title">${info.title}</div>
        </div>
        `

    }
}