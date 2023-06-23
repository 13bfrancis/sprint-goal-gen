import { Configuration, OpenAIApi } from 'openai';
import { SECRET_OPENAI_KEY } from '$env/static/private';

export const getGoal = async (goal: string) => {
	const configuration = new Configuration({
		apiKey: SECRET_OPENAI_KEY
	});
	const openai = new OpenAIApi(configuration);

	const chatCompletion = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [
			{
				role: 'user',
				content: `Give me a sprint goal for JIRA, 2-3 sentences, and positive. Here is some additional content for it. ${goal}`
			}
		]
	});

	return {
		goal: chatCompletion.data.choices[0].message?.content
	};
};
