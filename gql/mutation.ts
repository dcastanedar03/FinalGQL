import { GraphQLError } from "graphql";
import { ContactModelType } from "./ContactSchema.ts";
import { ContactModel } from "./ContactSchema.ts";


export const Mutation = {
    addContact: async(_: unknown, args:{Nombre: string, NumeroTelef: string }) : Promise <ContactModelType>=> {
        const contact = new ContactModel({
            Nombre: args.Nombre,
            NumeroTelef: args.NumeroTelef
        })
        await contact.save();
        return contact
    },
    deleteContact: async(_: unknown, args:{id: string }) : Promise <string>=> {
            const contact = await ContactModel.findByIdAndDelete(args.id).exec();
            if(!contact){
                throw new GraphQLError("No se encontro el contacto")
            }
            return "contacto eliminado"
    },
    updateContact: async(_: unknown, args:{id:string, Nombre: string, NumeroTelef: string }) : Promise <string>=> {
        const contact = await ContactModel.findByIdAndUpdate(args.id, {
            Nombre: args.Nombre,
            NumeroTelef: args.NumeroTelef
        },{new: true}).exec();
        if(!contact){
            throw new GraphQLError("No se encontro el contacto")
        }
        return "contacto actualizado"
    },
};