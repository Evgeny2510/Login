const users=[
{ name: 'dima', login:'dima',login:'Dima', password:'1234', key:'' },
{ name: 'donni',login:'donni',login:'Donni', password:'1234', key:'' },
{ name: 'alon', login:'alon',login:'Alon', password:'1234', key:'' },
{ name: 'amil', login:'amil', password:'1234', key:'' },
{ name: 'Evgeny',login:'Evgeny', login:'evgeny',  password:'1234', key:'' },
{ name: 'Tolik',login:'Tolik',  password:'1234', key:'' },
];
    let login_user = {
            login: prompt('login'),
            password: prompt('password')   
        }
    
// function click() {
    // let logins = document.getElementById('login').value;
    // let pass = document.getElementById('password').value;
    for(let i = 0; i < users.length; i++){
        if(login_user.login === users[i].login && login_user.password === users[i].password){
            alert('Hello ' + users[i].name+'!!!');
            window.location.href = '../index/index2.html';
            break;
        }else if (i === users.length -1){
            console.log('problem');
            // window.location.href ='index.html';
        }
    }
// }
// click();