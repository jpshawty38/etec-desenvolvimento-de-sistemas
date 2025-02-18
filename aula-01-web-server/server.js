// fazendo o require, importando a biblioteca
// buscando a biblioteca
//configurando o arquivo '.env'
require('dotenv').config();

// usando o app
const application = require('./app');

// criando a porta para uso, tendo cuidado para nao usar uma existente
// para não haver conflitos
// configurando a PORT com o arquivo '.env'
const PORT = process.env.PORT || 3000;

application.listen(
    PORT, () => {
        console.log(process.env.ISRUN); //linkando com a variavel ISRUN do arquivo .env
        console.log(`Na porta ${PORT}`);
        console.log(`URL http://localhost:${PORT}`);

    }
);