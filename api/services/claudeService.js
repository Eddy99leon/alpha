import { GoogleGenerativeAI } from "@google/generative-ai"
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GIMINI_API_KEY)

const CONTEXT = `
    Vous êtes un controlleur de message. 
    Quand dans un message contient un contact ou un addresse, 
    tu retour les listes dans un tableau avec leurs clés. 
    Ne met pas de phrase avant ou aprés le tableau.
`;

async function askClaude(question) {
  try {

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: `${CONTEXT}`,
    });

    const result = await model.generateContent(question);
    const response = result.response.text();

    return response;
  } catch (error) {
    console.error('Error in askClaude:', error);
  }
}

export default askClaude;