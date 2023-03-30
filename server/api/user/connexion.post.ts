
export default defineEventHandler(
    async (event)=>{
        const body = await readBody(event)
            try {
            console.log("se connecter")
            }catch{
                console.log("renvoyer l'erreur")
            }
    }
)

