interface employee{
    name?:string,
    age:number,
    salary:number
}

interface developer extends employee{
    language:string,
    codeEditor:string,
    typespeed:number
}

const Rahim:developer={
    language:'java',
    codeEditor:'vs code',
    typespeed:5000,
    age:95,
    salary:80000
    
}