import { ContactModel } from "./ContactSchema.ts";
import { ContactModelType } from "./ContactSchema.ts";

export const Query = {
    getContact: async(_:unknown, args : {id:string}):Promise <ContactModelType> => {
        const {id} = args;
        const contacto = await ContactModel.findById(id).exec();
        if (!contacto) {
            throw new Error("Contacto no encontrado");
        }
        return contacto;

    },
    getContacts: async():Promise <Array<ContactModelType>> => {
        const contactos = await ContactModel.find().exec();
        if (!contactos) {
            throw new Error("Error");
        }
        return contactos;

    }
};