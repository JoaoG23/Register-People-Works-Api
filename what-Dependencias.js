        const dependecias = `
        Instale os seguintes PACOTES em seu NODEjs
        npm init -y
        npm install
        npm install express, 
        npm install ejs
        npm install mongoose --save `;
        
        let fs = require('fs');
        // Criar um Arquivo -------
        fs.writeFile('./Documents/Dependencias.txt',dependecias, function (error) {

            if (error) { throw error };

            console.log("ARQUIVO DE TESTE CRIADO COM SUCESSO");
        });