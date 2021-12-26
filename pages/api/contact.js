import { GraphQLClient, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function contact(req, res) {
  const devToken = process.env.DEV_TOKEN;
  const graphQLClient = new GraphQLClient(graphqlAPI, {
     headers: {
       authorization: `Bearer ${devToken}`
     }
  })

  const query = gql`
    mutation CreateContact($name: String!, $email: String!, $message: String!) {
      createContact(data: {name: $name, email: $email, message: $message }) { id } 
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