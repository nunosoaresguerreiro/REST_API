import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{

name:{
    type: String,
    required:[true, "Nome é obrigatório!!!"],
    trim: true,
    minLength:[3, "tens de ter mais de 3 letras"],
    maxLength:[50, "nao podes escrever mais de 50"]
},
email:{
    type: String,
    required:[true, "Email é obrigatório!!!"],
    trim: true,
unique: true,
lowercase: true,
match:[/\S+@\S+\.\S+/, "email esta errado"]
},
phone:{
    type: String,
    required:[true, "Telefone é obrigatório!!!"],
    trim: true,
    match:[/^(91|92|93|96)d{7}$/, "fornece um telefone válido"] 

},
password:{
    type: String,
    required:[true, "Password é obrigatória!!!"],
    trim: true,
    minLength: [6, "passord muito curta e fraca"]
}

},
{timestamps: true},
)

const User = mongoose.model("User", userSchema)

export default User;