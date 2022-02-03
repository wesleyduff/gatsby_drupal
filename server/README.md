# Headless Drupal using Gatsby for a JAM Stack Architecture Approach

The basics :
- Lando:
  - The main piece of software used to orchestrate your local dev environment
  - Can be used to deploy code to different environments
  - Abstration from Docker Comppose
  - Builds and manages your docker containers
  - Provides the ability execute commands within the docker containers
- Drupal:
  - Drupal ver. 9.3
  - Used only as the backend content management software
  - Can be hosted in house (internally)
  - Exposes a JSON API to be consumed
- React
  - Components 
  - Pages
  - etc..
- Gatsby
  - Build tool
  - Queries the Drupal JSON API during the build process to create static assets
  - Used by React to generate pages and components
  - Supplies the Live Preview ability via the Gatsby Dev Server
- GraphQL
  - Gatsby provides a graphQL playground to view and test graph queries before you write your code
  - This can be found here : [https://gatsby.server.lndo.site/___graphql](https://gatsby.server.lndo.site/___graphql)
- Nginx
  - Use to route traffic to the gatsby/drupal site
  - Allows connection to the front-end
  - Allows Drupal to be exposed for JSON API connections

## Run Locally
1. Install lando if you have not done so 
   1. Will install Docker if not already installed
2. lando commands as follows
- lando start
  - Might see some errors due to drupal content not being available. That is ok. We have to install the database
- lando db-import <path to sql gz file>
- lando gatsbyBuild
- lando deployGatsby
- lando gatsbyDevServerStart

## Make changes on machine w/o lando
This will require updates to your gatsby config
1. Make changes on gatsby server (./server)
2. Install via `yarn add global gatsby-cli && yarn install && gatsby develop`

## Make changes using lando environment (prefered)
1. Make changes on gatsby server (./server)
- lando gatsbyBuild
- lando deployGatsby
- view changes on "http://gatsbydrupal.lgd.lndo.site/"

## View and test GraphQL queries from the Drupal JSON API
