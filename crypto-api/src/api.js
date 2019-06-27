const express = require('express'); //importacao do pacote
const       = express(); //instanciando express
const rp = require('request-promise');
const cors = require('cors');

app.use(cors()) //habilitando cors na nossa aplicacao

app.get('/cryptocurrencies/', function (req, res) { //endereco da requisicao onde e retornado informações

    const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qs: {
            'start': '1',
            'limit': '1000',
            'convert': 'BRL'
        },
        headers: {
            'X-CMC_PRO_API_KEY': 'XXXXXXXX-XXXXX-XXXXXX-XXXX-XXXXXXXX'
        },
        json: true,
        gzip: true
    };

    rp(requestOptions).then(response => {
        res.send(response.data)

    }).catch((err) => {
        res.send(err.message)
    });
})

app.listen(3000) //execucao do servidor

