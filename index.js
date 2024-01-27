//importing json-server dependency/package
const jsonServer=require('json-server')

//create server 
const server=jsonServer.create()

//create middleware
const middleware=jsonServer.defaults()

//initilaizing router with resourse
const router=jsonServer.router('db.json')

//impliment  middleware into server
server.use(middleware) 

//impliment  router into server
server.use(router) 

//defining PORT number
const PORT=process.env.PORT || 5000

//creating server into listening for request
server.listen(PORT,()=>{
    console.log("Server is running in PORT:",PORT)
})