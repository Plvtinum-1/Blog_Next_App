// API routes provide a solution to build your API with Next.js.
// Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page. They are server-side only bundles and won't increase your client-side bundle size.
// For example, the following API route pages/api/user.js returns a json response with a status code of 200:
// Read More on Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function comment(req, res) {
  const devToken = process.env.DEV_TOKEN;
  const graphQLClient = new GraphQLClient(graphqlAPI, {
     headers: {
       authorization: `Bearer ${devToken}`
     }
  })

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } }}) { id }
    }
  `
   try {
      const result = await graphQLClient.request(query, req.body);
      return res.status(200).send(result);
   } catch (error) {
      console.log(error)
      return res.status(500).send(error);
   }
}
