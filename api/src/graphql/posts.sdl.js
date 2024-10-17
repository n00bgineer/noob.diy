export const schema = gql`
    type Post {
        id: String!
        content: String!
        slug: String!
        createdAt: DateTime!
        updatedAt: DateTime!
        published: Boolean!
    }

    type Query {
        posts: [Post!]! @requireAuth
        post(id: String!): Post @requireAuth
    }

    input CreatePostInput {
        content: String!
        slug: String!
        published: Boolean!
    }

    input UpdatePostInput {
        content: String
        slug: String
        published: Boolean
    }

    type Mutation {
        createPost(input: CreatePostInput!): Post! @requireAuth
        updatePost(id: String!, input: UpdatePostInput!): Post! @requireAuth
        deletePost(id: String!): Post! @requireAuth
    }
`
