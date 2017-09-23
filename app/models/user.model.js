import mongoose from 'mongoose';
import crypto from 'crypto';
var Schema = mongoose.Schema;

var UserSchema = new Schema({  //Class schema
       firstName: String,
       lastName: String,
       username: { 
              type: String, 
              unique: true, //ห้ามซ้ำ
              required: 'Username is required', //ถ้าซ้ำจะโชว์คำแบบนี้
              trim: true
       },
       email: { type: String, unique: true },
       password: {
              type: String,
              required: 'Password is required',
              validate: [
                     (password) => { return password && password.length>=1; },
                     'Password cannot be empty'
              ] //ถ้ามันผิดแปลก มันจะโชว์ password cannot be empty
       },
       created: {
              type: Date,
              default: Date.now
       },
       salt: {
              type: String
       },//
       provider: {
              type: String,
               default : 'local'
       },
       providerId: String,
       providerData: {}
}); 
UserSchema.pre('save', function(next){
    if (this.password) {
          this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
          this.password = this.hashPassword(this.password);
    }
   next();
});

UserSchema.methods.hashPassword = function(password){
       return crypto.pbkdf2Sync(password, this.salt, 10000, 64,'sha512').toString('base64');
} //ทำการhashกี่ครั้ง (1000) , 64ได้กี่ตัวอักษร
//2functionบน ทำการhash function
mongoose.model('User', UserSchema);