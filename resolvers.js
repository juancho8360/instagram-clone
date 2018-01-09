export default {
    Query: {
        holaMundo: (parent, args, context, info) => "Hola Mundo como vas ??!!"
    },
    Mutation: {
        createUser: (parent, args, {models}) => models.User.create(args)
    }
};