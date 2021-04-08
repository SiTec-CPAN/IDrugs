import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    },
    order:{
        type:String
        //Adicionar futuramente a chave estrangeira
    }

});

module.exports = mongoose.model('User', userSchema);