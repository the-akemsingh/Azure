import  AzureKeyCredential  from "openai";
import { AzureOpenAI } from "openai";
const apiKey =process.env.apiKey;
const endpoint = "https://azureopenai1484.openai.azure.com";
const apiVersion = "2024-10-21"

const client = new AzureOpenAI({ apiKey, endpoint, apiVersion });


async function print(){
    const result = await client.chat.completions.create({messages:[{
        content:"hi",
        role:"user",
        name:"akem"
    }], model: 'gpt-4', max_tokens: 100 },);
    console.log(JSON.stringify(result.choices[0].message));
}
print();
