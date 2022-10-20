// let a: number = 1;
// let b: string = '1';
// let c = a + b;
//

type TUser = {
    name: string
    email: string
    password: number
    language: string
}

function greet(user: TUser) {
    console.log(user.email)
}