import {Nitro} from "nitropack";
import mongoose from "mongoose";

export default async(_nitroApp:Nitro )=>{
    const config = useRuntimeConfig();
    try{
        mongoose.connect(config.mongodbUri)
        .then(()=>console.log('Base de donnée connectée'))
    }catch (e){
        console.log('Échec de connexion à la base de donnée'+ e)
    }
    console.log("Nitro plugin OK")
}