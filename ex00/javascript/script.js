import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY securely
const API_KEY = "AIzaSyD84uSJR_acygc8KdqayD6Dg37QyUFiROk"; // replace with your actual API key

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Generate Text Button Click Handler
async function handleGenerateText() {
    const prompt1 = document.getElementById('promp1').value;

    const responseText = await generateText(prompt1);
    if (responseText) {
        document.getElementById('response-container').style.display = 'block';
        document.getElementById('response-container').textContent = responseText;
    }
}

async function generateText(prompt1) {
    const prompt = `This is a placeholder description for ${prompt1}. Please generate a detailed, unique response.`;
    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };

    // Use the model's generateContent method
    const result = await model.generateContent(prompt, generationConfig);
    console.log("Prompt: " + prompt);
    console.log(result.response.text());
    return result.response.text() || "No response received";
}

// Event listener for the generate button
document.getElementById('generate-button').addEventListener('click', handleGenerateText);
