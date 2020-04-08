
import axios from 'axios';
import API from '../backendConnection/api';
//Validate user in the following parameters 

// Email -> Should be and email and not repeated in the database 
// Username -> No more than 20 characters and with not special char
// First name -> No more than 15 characters and with no special char
// Last name -> Same as first name
// Password -> No more than 30 characters, with one uppercase, one lowercase and a number
// Confirm password -> The same as the password

//Then hash the password and sent a new object user. 
// put everything lowercase into the database

// If the validation is correct return true, else false

const validateCorrectEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateUniqueEmail = async(email) => {
    try{
        let res = await API.get(`/api/users/${email}`);
        const {accountExist} = res.data;
        return !accountExist;
    }
    catch{
        return false;
    }
    
}

const validateUsername = (username) => {
    let re = /^[a-zA-Z0-9]{1,20}$/;
    return re.test(username);
    
    
}
const validateFirstName = (firstName) => {
    let re = /^[a-zA-Z0-9]{3,20}$/;
    return re.test(firstName);

}
const validateLastName = (lastName) => {
    let re = /^[a-zA-Z0-9]{1,20}$/;
    return re.test(lastName);

}
const validatePassword = (password) => {
    let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    return re.test(password);
}
const validateConfirmPassword = (password, confirmPassword) => {
    
    if(password === confirmPassword) return true;
    else return false;

} 





const userError = (user,message) => {
    return Object.assign({},user,{
        status: false,
        message: message
    });
}


/**
 * Rules:
 * Email: Valid email and unique (One email per user)
 * Username : Without spaces 1,20 characters
 * First name: same as Username
 * Last name : same as Username 
 * Password: min 5 characteres, one uppercase, one lowercase and one digit
 */

export default async function validateUser(user){
    const {email, username, firstName, lastName, password, confirmPassword} = user;

   
 
    if(validateCorrectEmail(email) === true){

        if( await validateUniqueEmail(email) === true){

    
            if(validateUsername(username) === true){
                
               
            if(validateFirstName(firstName) === true){
     
                if(validateLastName(lastName) === true){
 
                    if(validatePassword(password) === true){
             
                        if(validateConfirmPassword(password,confirmPassword) === true){

                            let createUser = await API.post('/api/users',{
                                "username": username,
                                "firstName": firstName,
                                "lastName": lastName,
                                "user_password": password,
                                "email" : email
                            });
                            const {message,status,accessToken} = createUser.data;
                            const newUser = Object.assign({},user,{status: status,accessToken : accessToken});
                            return newUser;
                            

                        }else{
                            return userError(user,"Password are not equal");
                        }     
                
                    
                    }else{
                        return userError(user,"Password must contain more than 5 characters with one number");
                    }

                


                }else{
                    return userError(user,"Please enter a valid Last name");
                }


                
            }else{
                return userError(user,"Please enter a valid First name");
            }

            

            }else{
                return userError(user,"Enter a valid Username");
            }


        }else{
            return userError(user, "Email already taken");
        }

        

    }else{

        return userError(user,"Please enter a valid email");
        
    }
    
    
}