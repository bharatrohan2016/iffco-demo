const validate = (values) => {
    const errors = {};
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(values.email==="") {
        errors.email = "Email is required";
    }
    else if(regex.test(values.email)==false){
        errors.email = "Email is invalid";
    }
    if(values.password===""){
        errors.password = "Password is required";
    }
    return errors;
}
export default validate;