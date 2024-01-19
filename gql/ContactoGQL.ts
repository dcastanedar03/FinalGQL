import { ContactModelType } from "./ContactSchema.ts";

export const ContactoGQL = {
    pais: async(parent: ContactModelType):Promise<string> =>{
        const BASE_URL = "https://api.api-ninjas.com/v1/validatephone?number="
        const API_KEY = Deno.env.get("NINJA_KEY");
        const url = `${BASE_URL}${parent.NumeroTelef}`;
        if (!API_KEY)throw new Error;
        const data = await fetch (url ,{headers: {'X-Api-Key': API_KEY}})
        return data.json();

    }
}