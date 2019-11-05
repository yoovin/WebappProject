// 백엔드 서버입니다.

const app = require('express')()
const port = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send("Hello world!")
})

// git 테스트용 주석

app.listen(port, console.log(`Backend서버 ${port}에서 돌아가는중!`))