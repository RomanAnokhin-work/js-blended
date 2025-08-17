 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

class Client {
    #login;
    #email;
    constructor(login, email) {
        this.#login = login;
        this.#email = email;
        
    }
    set email(newEmail) {
        this.#email = newEmail;
    }
    set login(newLogin) {
        this.#login = newLogin;
    }
    get email() {
        return this.#email;
    }
    get login() {
        return this.#login;
    }
}
 
const client1 = new Client("Login", "Email@mail.com");
client1.email = "client1@mail.com";
client1.login = "client1Login";
console.log(client1);
