__path = process.cwd()

//_______________________ ┏  Info  ┓ _______________________\\
//
//   Credit : Bintang 1302
//   
//   Note 
//   Jangan Jual SC ini ,
//   Jangan Buang Text ini,
//   Siapa Mau Upload Jangan Lupa Credit :),
//   
//_______________________ ┏ Make By Bintang 1302 ┓ _______________________\\

var express = require('express');
var router = express.Router();
const { runtime,fetchJson } = require('../lib/myfunc')

router.get('/statistic', async (req, res, next) => {

	let hits = await fetchJson('https://api.countapi.xyz/hit/zeroone-api.herokuapp.com/visitor')

	res.json({
	status: true,
	creator: `${creator}`,
	runtime: runtime(process.uptime()),
	visitor: hits.value,

	})

})

router.get('/', (req, res) => {
    res.sendFile(__path + '/view/home.html')
})

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/view/docs.html')
})

router.get('/minigame', (req, res) => {
    res.sendFile(__path + '/view/pingpong.html')
})

module.exports = router
