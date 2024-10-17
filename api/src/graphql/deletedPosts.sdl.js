export const schema = gql`
    type DeletedPost {
        id: String!
        content: String!
        createdAt: DateTime!
        updatedAt: DateTime!
        slug: String!
        deletedAt: DateTime!
    }

    type Query {
        deletedPosts: [DeletedPost!]! @requireAuth
        deletedPost(id: String!): DeletedPost @requireAuth
    }

    type Mutation {
        deleteDeletedPost(id: String!): DeletedPost! @requireAuth
    }
`
