export const typeDefs = `#graphql

    type ContactGQL{
        id:ID!,
        Nombre: String!,
        NumeroTelef: String!,
        Pais: String!,
        Hora: String!
    },

    type Query {
        getContact(id:ID!): ContactGQL!
        getContacts: [ContactGQL!]
    },

    type Mutation { 
       addContact(Nombre: String!, NumeroTelef: String!): ContactGQL!,
       deleteContact(id: ID!):String!
       updateContact(id:ID!, Nombre: String, NumeroTelef: String): String!,
    }

`;