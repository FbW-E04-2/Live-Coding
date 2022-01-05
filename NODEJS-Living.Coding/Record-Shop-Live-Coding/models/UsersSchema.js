const mongoose = require("mongoose");
const { Schema } = mongoose;
/* const bcrypt = require("bcrypt") */


const userSchema = new Schema( {
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: {
    city: { type: String },
  }
},{
    toJSON:{
        virtuals:true
    }
}   );

userSchema.virtual("fullname").get(function(){
    return `${this.firstname} ${this.lastname}`
})


/* userSchema.pre("save", function (next) {
  console.log("pre save method");
  if(!this.isModified("password")) return next()
  const hashPassword=bcrypt.hashSync(this.password, 10) 
  this.password= hashPassword
  next();
});
 */


const UsersCollection = mongoose.model("users", userSchema);

module.exports = UsersCollection;
