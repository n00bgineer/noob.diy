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

    input CreateDeletedPostInput {
        content: String!
        slug: String!
        deletedAt: DateTime!
    }

    input UpdateDeletedPostInput {
        content: String
        slug: String
        deletedAt: DateTime
    }

    type Mutation {
        createDeletedPost(input: CreateDeletedPostInput!): DeletedPost!
            @requireAuth
        updateDeletedPost(
            id: String!
            input: UpdateDeletedPostInput!
        ): DeletedPost! @requireAuth
        deleteDeletedPost(id: String!): DeletedPost! @requireAuth
    }
`
