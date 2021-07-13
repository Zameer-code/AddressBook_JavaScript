/* @Description -To create contact class inside class we have create properties and create constructor.
 * Inside the constructor as a parameter passing the instance variable
 *for the initializing the instances set value with the possition */

const prompt = require('prompt-sync')();
class Contact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    // Constructor
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }
}

let contact1 = new Contact("Jackson", "Briggs", "Street69", "clevland", "Assam", 643112, "91 7892496608",  "jackbriggs@gmail.com")
console.log(contact1);
    
