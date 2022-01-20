const mongoose = require('mongoose');

const UserSchema = mongoose.schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String, 
        trim: true, //space를 없애주는 역할
        unique: 1 //똑같은 이메일이 없게
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //관리자인지 일반유저인지
        type: Number, //0은 일반유저로 지정하고 싶음(다른 숫자는 다른 역할)
        default: 0 //기본값은 0(일반유저)
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mogoose.model('User', UserSchema) //schema를 model로 감쌈

module.exports = {User} //이 모델을 다른 파일에서도 쓸 수 있게 export