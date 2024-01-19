import mongoose,{InferSchemaType} from "mongoose";

const Schema = mongoose.Schema;
const ContactSchema = new Schema({
    Nombre: {type: String, requiered: true },
    NumeroTelef: {type: String, requiered: true , unique :true},
    Pais: {type: String, requiered: false },
    Hora: {type: String, requiered: false }
})

export type ContactModelType = mongoose.Document & InferSchemaType<typeof ContactSchema>;
export const ContactModel = mongoose.model<ContactModelType>("Contact",ContactSchema);