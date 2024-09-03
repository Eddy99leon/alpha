import dotenv from "dotenv";
import express from "express";
import askClaude from "../services/claudeService.js"

const router = express.Router();
dotenv.config();

//VERIFICATION MESSAGE
router.post("/", async (req, res) => {
    const { question } = req.body;

    if (!question || typeof question !== 'string' || question.trim() === '') {
        return res.status(400).json({ error: 'La question est requise et doit être une chaîne non vide.' });
    }
  
    try {
      const response = await askClaude(question);
      res.status(200).json(response);
    } catch (error) {
      console.error('Erreur lors de l\'appel à l\'API Claude:', error);
      res.status(500).json({ error: 'Erreur lors de la génération de la réponse' });
    }
  });

  export default router;