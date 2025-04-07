

const connectionDB = async ()=>{

try{
await mongoose.connect("URL");
console.log("estamos logados na base de dados")
} catch(err){
console.log("ERRO NA CONEX DB:", err);
process.exit(1);
}

}

export default connectionDB;