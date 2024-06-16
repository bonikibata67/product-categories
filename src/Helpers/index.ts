import Joi from 'joi';

export const RegisterSchema = Joi.object({
    Name: Joi.string().required().messages({
        'string.empty': "Please enter a name",
    }),
    Email: Joi.string().required().email().messages({
        'string.empty': "Please enter an email",
        'string.email': "Please enter a valid email"
    }),
    Password: Joi.string().required().pattern(
        new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$")
    ).messages({
        'string.empty': "Please enter a password",
        'string.pattern.base': "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long"
    })
});


// import Joi from 'joi'

// export const RegisterSchema= Joi.object({
//     Name:Joi.string().required(),
//     Email:Joi.string().required().email().messages({
//         'string.empty':"Please enter an email",
//         'string.email':"Please enter a valid email"
//     }),
    
//     Password:Joi.string().required().pattern
//     (
//         new RegExp( "^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$"
//         )
//     )
   
   
// })
