import { createBrianAgent } from "@brian-ai/langchain";
import { ChatOpenAI } from "@langchain/openai";
 
const main = async () => {

  const agent = await createBrianAgent({
    apiKey: process.env.BRIAN_API_KEY!,
    privateKeyOrAccount: process.env.AGENT_PRIVATE_KEY! as `0x${string}`,
    llm: new ChatOpenAI(),
  });
 
  // Execute blockchain operations using natural language
  const result = await agent.invoke({
    input: "Swap 1 USDT for BNB on BNB Smart Chain",
  });

  console.log(result);

};
 
main();