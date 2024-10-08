// import json-server
const jsonServer= require ('json-server')
// cretae  a server
const mpServer = jsonServer.create()
// set path for db.json file
const router=jsonServer.router("db.json")
// create a middleware 
const middleware =jsonServer.defaults()
// define a port for running json
const PORT=3000|| process.env.PORT 
// we have to use middleware ,router
mpServer.use(middleware)
mpServer.use(router)
// run seerver in givenn port to resolve client request 
mpServer.listen(PORT,()=>{
    console.log(`mp server started at port ${PORT} and waiting for client rerquest`);
    
})
