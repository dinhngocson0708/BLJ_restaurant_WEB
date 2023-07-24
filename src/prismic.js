import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'restaurantt'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: 'MC5aTDNZd1JJQUFDWUE1M1FJ.77-977-9cVxZ77-977-9E--_vW_vv73vv73vv73vv73vv73vv70GbHvvv71N77-977-977-9FCfvv73vv73vv73vv719Nw',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    // {
    //   type: 'homepage',
    //   path: '/',
    // },
  ],
})