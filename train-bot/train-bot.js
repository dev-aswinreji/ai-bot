import { NlpManager } from "node-nlp";


const manager = new NlpManager({ languages: ["en"] });

export async function trainManager() {
  manager.addDocument("en", "How are you", "greeting");
  manager.addAnswer("en", "greeting", `I'm doing well, thank you`);
  await manager.train();
}

export async function chatbotFunc(message) {
  const response = await manager.process("en", message);
//   console.log(response);
  return response.answer
}
