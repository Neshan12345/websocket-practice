const io = require('socket.io')(3000, {
    cors: {
//         add your client domain name here
        origin: ['http://localhost:5500','http://127.0.0.1:5000','https://admin.socket.io/']
    }
})

const { instrument } = require('@socket.io/admin-ui')

io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('typing', textFromClient => {
        socket.broadcast.emit('received', textFromClient)
    })
})

instrument(io, {auth: false})
