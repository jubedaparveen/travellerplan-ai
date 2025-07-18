const { GoogleGenAI, Type } = require("@google/genai");
const TripPlan = require("../models/tripplanmodel");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function requestGeneration(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    destination: { type: Type.STRING },
                    travelMode: { type: Type.STRING },
                    accommodation: { type: Type.STRING },
                    activities: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING },
                    },
                    budgetBreakdown: {
                        type: Type.OBJECT,
                        properties: {
                            travel: { type: Type.NUMBER },
                            stay: { type: Type.NUMBER },
                            food: { type: Type.NUMBER },
                            activities: { type: Type.NUMBER },
                            total: { type: Type.NUMBER },
                        },
                    },
                    tripType: { type: Type.STRING },
                    tripPlanday:{
                        type: Type.ARRAY, 
                        items: { type: Type.STRING },
                    },
                    tipsWarnings:{
                        type: Type.ARRAY, items: 
                        { type: Type.STRING },
                    },
                },
                propertyOrdering: [
                    "destination",
                    "travelMode",
                    "accommodation",
                    "activities",
                    "budgetBreakdown",
                    "tripType",
                   "tripPlanday",
                   "tipsWarnings"
                ],
            },
        },
    });

    const data = JSON.parse(response.text);
    return data
}


const generatePlan = async (req, res) => {

    const { fromDate, toDate, budget } = req.body

    if (!fromDate || !toDate || !budget) {
        return res.status(400).json({ error: "Please provide From Date, To Date, and Budget." });
    }

    const prompt = `You are an expert travel planner AI.

        Your job is to generate a detailed and realistic travel itinerary based on the following user inputs:
            - Total travel budget (in Indian Rupees)
            - Travel start date and end date
            - Desired travel locations (can include cities, states, or general areas of interest)
            - Number of days available for travel

        Goals:
            - Create a trip plan that fits within the budget and within the number of days available
            - Suggest which of the desired locations are possible to visit in the given budget and time
            - If all desired locations cannot be covered, select the most suitable ones and mention why others are excluded
            - Provide a day-wise itinerary including:
            - City/town for each day
            - Key attractions/activities for that day
            - Time suggestion (morning, afternoon, evening)
            - Mention suggested travel methods (bus, train, car, flight) between cities, based on cost-effectiveness
            - Include budget-friendly options for accommodation and meals
            - Mention the estimated cost breakdown (travel, stay, food, entry fees, etc.)
            - Ensure the total cost remains within or close to the user’s budget
            - Provide practical tips or warnings (e.g., weather conditions, local customs, safety tips)

        Output Format:
            1. Trip Overview
            - Total Days
            - Cities to Visit
            - Approximate Total Cost

            2. Day-by-Day Itinerary
            - Day 1 : [City], [Activities]
            - Day 2 : ...
            - Day 3 : ....

            3. Recommendations
            - Travel options
            - Stay suggestions
            - Food options (optional)

            4. Budget Summary
            - Travel: ₹
            - Stay: ₹
            - Food: ₹
            - Activities: ₹
            - Total: ₹

            5. Tips or Warnings
            - e.g., "Monsoon season, carry rain gear" or "Avoid weekend crowd at XYZ place"

        Be clear, practical, and helpful. The goal is to make the user feel confident about taking the trip with this plan.

    Respond in a clear and friendly format using bullet points and headings.

    
    Example Input:
    From Date: ${fromDate}
    To Date: ${toDate}
    Budget (INR): ${budget}
    `
    const data = await requestGeneration(prompt);
    
    console.log( "Generated Plan===============:", data);

    const newPlan = new TripPlan(data);
    const savedPlan = await newPlan.save();
    console.log("Saved Plan=================:", savedPlan);

    res.status(200).json( { data, 
        message: "Trip plan generated successfully"   
    });
}

const getallplans = async (req, res) =>{

    const travetPlan = await TripPlan.find()
    if (!travetPlan) {
        res.status(404)
        throw new Error('Traveller Plan not found')
    }

    res.status(200).json({travetPlan, message: "Traveller Plan fetch Successfully"})
}
module.exports = { generatePlan, getallplans }