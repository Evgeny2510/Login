const persons=[
{ name: 'Dima', login:'dima',login:'Dima', password:'1234', key:'' },
{ name: 'Donni',login:'Donni', password:'1234', key:'' },
{ name: 'Alon', login:'alon',login:'Alon', password:'1234', key:'' },
{ name: 'Tolik', login:'tolik',login:'Tolik', password:'1234', key:'' },
{ name: 'Evgeny', login:'evgeny',login:'Evgeny', password:'1234', key:'' },
];


    let user_persons = {
            login: prompt('login'),
            password: prompt('password')   
        }
    // function click(){
        // if (persons === login && persons === password){
            // window.location.href = 'index2.html';
        // }
    
        // let login = document.getElementById("login").value;
        // let password = document.getElementById("password").value;
    // }  

    for(let i = 0; i < persons.length; i++){
        if(user_persons.login === persons[i].login && user_persons.password === persons[i].password){
            alert('Hello ' + persons[i].name+'!!!');
            // click();
            window.location.href = 'index2.html';
            break;
        }else if (i === persons.length -1){
            console.log('problem');
            // window.location.href ='index.html';
        }
    }
