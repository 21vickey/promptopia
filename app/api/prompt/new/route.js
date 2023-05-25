import Prompt from "@models/prompt";
import { connecttoDB } from "@utils/database";

export const POST= async (req) => {
    const {userId, prompt, tag} = await req.json();

    try {
        await connecttoDB();
        const newPrompt = new Prompt({ 
            creator: userId,
             prompt, 
             tag 
        });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        console.log(error)
    }
} 