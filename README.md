# Letro

This project is made to test out the public API from (metrojobb.se).
Build in React/Typescript.

### How to run
* npm install
* npm run build-css
* npm start

Project is served at `http://localhost:3000/`
`
I had some problem with developing on localhost using the public API, so I had to use:
`https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi`

## Framtida förbättrningar
* Just nu så fungerar inte det att komma till ansökningslänken.
* Några funktioner så som när paginator-sidan uppdateras (loadNext, loadPrevious) skulle t.ex kunna skrivas om till en.
* Skulle endast vilja visa sökfältet i filtren och ha en expand button för ett snyggare interface.
* URL ändras inte just nu när man byter sida, kategorier etc.
* Många saker som t.ex. Select-Boxes i filtren kan flyttas/brytas ut till andra komponenter.
* Modalen är inte stylad överhuvudtaget. 
* Paginatorn börjar på sida 0.
* Skulle vilja bygga om filtren där man väljer kategori så att man väljer huvudkategori först, sedan subkategori i samma "box".