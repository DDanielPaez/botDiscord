require('dotenv').config();
const axios = require('axios');
const {Client,GatewayIntentBits} = require('discord.js');
const client = new Client({intents:[GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages]})

client.on('ready', ()=>{
    console.log('El bot esta conectado');
})

client.on('messageCreate', async(mensaje)=>{
        if (mensaje.content === 'Hola') {
            mensaje.reply({
                content:'Bienvenido'
            })
        }else if(mensaje.content === 'ping'){
            mensaje.reply({
                content:'pong'
        })
    }else if(mensaje.content === 'dime una frase'){
        let frase = await axios.get('https://api.quotable.io/random')
        const respuesta = frase.data.content;
            mensaje.reply({
                content: respuesta
            })
    }else if(mensaje.content === 'dolar'){    
    let Monitor = require('consulta-dolar-venezuela');
    // getMonitor("BCV", "lastUpdate").then($ =>{console.log($)}); /*Obtener la ultima actualizacion del dólar en BCV*/

        Monitor.getMonitor().then(i=> mensaje.reply({
            content: `El dolar esta a: ${i.bcv.price.toString()} Bs.`
        }))
    }
})

client.login(process.env.TOKENBOT)


// const { getMonitor } = require("consulta-dolar-venezuela");

// getMonitor("bcb").then($ =>{console.log($)}); /*Obtener los valores de todos los monitores*/