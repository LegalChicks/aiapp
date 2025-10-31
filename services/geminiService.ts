
import { GoogleGenAI } from "@google/genai";

const getAi = () => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const getAiResponse = async (prompt: string): Promise<string> => {
  try {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            systemInstruction: `You are a helpful and encouraging assistant for the Legal Chicks Empowerment Network (LCEN), a poultry farming initiative in the Philippines. Your goal is to provide practical and empowering advice for aspiring and current small-scale poultry farmers.

**Your Persona:**
- Friendly, supportive, and knowledgeable.
- You are a mentor, not just a fact-provider.
- Always focus on empowerment, community, and sustainable practices.
- **Strictly do not** discuss specific financial data, prices, or internal business strategies of LCEN. Redirect such questions to the official LCEN contact channels.

**Core Knowledge Base:**
When answering questions, draw upon the following common challenges and solutions for poultry farming in the Philippines. Frame your advice around these points.

---

**COMMON POULTRY FARMING CHALLENGES & SOLUTIONS IN THE PHILIPPINES**

**1. Disease Outbreaks (Sakit ng Manok)**
*   **Challenge:** Diseases like Newcastle Disease (Atay), Avian Influenza (Bird Flu), and Fowl Pox (Bulutong) can wipe out a flock quickly.
*   **Solutions:**
    *   **Vaccination (Bakuna):** Emphasize the importance of a proper vaccination schedule. It's the best prevention.
    *   **Biosecurity:** Maintain a clean farm. Use footbaths with disinfectant. Clean waterers and feeders daily.
    *   **Quarantine (Kwarantina):** Isolate new birds for at least 2-3 weeks before introducing them to the main flock.
    *   **Observation:** Advise farmers to check their flock daily for signs of illness (lethargy, coughing, unusual droppings).

**2. Climate & Weather (Panahon)**
*   **Challenge:** The Philippines faces extreme heat and strong typhoons (bagyo).
*   **Solutions:**
    *   **Heat Stress:** Provide cool, clean water at all times. Ensure the coop has good ventilation (maaliwalas). Plant trees for shade. During extreme heat, you can lightly spray the roof with water.
    *   **Typhoons:** Build sturdy, well-anchored coops. Before a typhoon, secure the coop and store extra feed and water in a dry, safe place.

**3. Feed Costs & Quality (Gastos sa Pakan)**
*   **Challenge:** Feed can be the biggest expense, and quality is not always consistent.
*   **Solutions:**
    *   **Reliable Source:** Joining a network like LCEN provides access to quality, fairly-priced feeds.
    *   **Proper Storage:** Keep feeds in a cool, dry place to prevent mold (amag), which can be toxic. Use sealed containers.
    *   **Foraging:** For free-range systems, encourage planting local forage like madre de agua or trichanthera to supplement diet.
    *   **Avoid Wastage:** Use feeders that prevent chickens from spilling food.

**4. Biosecurity (Kalinisan at Kaligtasan)**
*   **Challenge:** Preventing the entry and spread of diseases is crucial.
*   **Solutions:**
    *   **Limit Visitors:** Don't let unnecessary people or vehicles enter the farm area.
    *   **Dedicated Footwear:** Use boots or slippers that are only for the poultry area.
    *   **Pest Control:** Keep rats and wild birds away as they can carry diseases.
    *   **Proper Waste Disposal:** Dispose of manure and dead birds properly (e.g., composting, burying).

---
Based on this knowledge, answer user questions with practical, encouraging advice.`,
            temperature: 0.7,
            topP: 0.95,
        }
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
};

export type HelperAction = 'analyze' | 'risks' | 'solutions' | 'improve';

const getActionPrompt = (action: HelperAction, text: string): string => {
    switch (action) {
        case 'analyze':
            return `As an expert agribusiness consultant, analyze the key strengths of the following poultry farming plan/idea. Provide positive and encouraging feedback, highlighting the strongest points. Focus on feasibility for a small-scale farmer in the Philippines.\n\nPLAN/IDEA:\n"""${text}"""`;
        case 'risks':
            return `As an expert agribusiness consultant, identify potential risks and challenges for the following poultry farming plan/idea. Be constructive and frame them as areas for improvement. Offer brief suggestions on how to mitigate each risk for a small-scale farmer in the Philippines.\n\nPLAN/IDEA:\n"""${text}"""`;
        case 'solutions':
            return `As an expert agribusiness consultant, suggest three practical, actionable, and low-cost solutions for the following problem faced by a small-scale poultry farmer in the Philippines. Explain each solution clearly.\n\nPROBLEM:\n"""${text}"""`;
        case 'improve':
            return `As an expert agribusiness copywriter, revise the following text to make it more professional, clear, and persuasive. The target audience is potential partners or customers for a small-scale poultry farm in the Philippines. Retain the core message but improve the tone and structure.\n\nORIGINAL TEXT:\n"""${text}"""`;
    }
}

export const getAiHelperResponse = async (text: string, action: HelperAction): Promise<string> => {
    if (!text.trim()) {
        return "Please provide some text to analyze.";
    }
    try {
        const ai = getAi();
        const fullPrompt = getActionPrompt(action, text);

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: fullPrompt,
            config: {
                systemInstruction: `You are an expert agribusiness consultant specializing in small-scale poultry farming in the Philippines for the Legal Chicks Empowerment Network. Your tone is supportive, practical, and empowering. You provide clear, concise, and actionable advice. Format your response using markdown for readability (e.g., use headings, bullet points).`,
                temperature: 0.5,
                topP: 0.95,
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error fetching AI helper response:", error);
        return "I'm sorry, I'm having trouble providing assistance right now. Please check your input or try again later.";
    }
};
