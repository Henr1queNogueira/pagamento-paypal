const router = require('express').Router();
const paypal = require('paypal-rest-sdk');
//const paypalConfig = require('../config/paypal');

//paypal.configure(paypalConfig);

const {valores} = require("../config/valores");

//rotar para exibir a pagina e os valores para doacao
router.get('/', (req, res) => res.render('index', { valores }));

//rotar quando o cliente for doar, nela que o cliente será redirencionando quando for pro paypal
router.post('/doar', (req, res) => {
    //quando o cliente clicar pra doar
    res.send({sucesso: true});
}); 

router.get('/sucesso', (req, res) => {
    //quando o cliente doar com sucesso
    res.render('sucesso');
});

router.get('/cancelar', (req, res) => {
    //quando o cliente cancelar a doação
    res.render('cancelada');
});

module.exports = router;