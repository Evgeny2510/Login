const persons=[
{ name: 'dima', login:'dima', password:'1234', key:'' },
{ name: 'donni',login:'Donni', password:'1234', key:'' },
{ name: 'alon', login:'alon', password:'1234', key:'' },
{ name: 'amil', login:'amil', password:'1234', key:'' },
{ name: 'evgeny', login:'evgeny', password:'1234', key:'' },
];


    let user_persons = {
            login: prompt('login'),
            password: prompt('password')   
        }

    for(let i = 0; i < persons.length; i++){
        if(user_persons.login === persons[i].login && user_persons.password === persons[i].password){
            alert('Hello ' + persons[i].name+'!!!');
            // window.location.href = 'index2.html';
            break;
        }else if (i === persons.length -1){
            console.log('problem');
            // window.location.href ='index.html';
        }
    }