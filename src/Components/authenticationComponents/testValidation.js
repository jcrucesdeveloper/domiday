import axios from 'axios';

const optionValid = async () => {

    let res = await axios.get('http://localhost:5000/api/users/jorgecrucescolegio@gmail.com');
    return res.data;

}

const testValidation  = async () => {
 
    const a = "hola mundo";
    const b =  await optionValid();

    console.log(b,a);
}



export default testValidation;