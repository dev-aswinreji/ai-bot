
import {NlpManager} from 'node-nlp'

const manager = new NlpManager({languages:['en']})

async function trainManager(){
    manager.addDocument('en','How are you','greeting');
    manager.addAnswer('en','greeting',`I'm doing well, thank you`)
    await manager.train()
}


async function chatbot (message){
    const response = await manager.process('en',message)
    console.log(response.answer);
}

trainManager().then(()=>{
    const message = 'hello how are you'
    chatbot(message)
    
})