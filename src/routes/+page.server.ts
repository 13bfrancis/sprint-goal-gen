import { getGoal } from '$lib/features/goal/get-goal';
import type { Actions } from './$types';

export const actions = {
	goal: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());

		return await getGoal(formData.goal.toString());
	}
} satisfies Actions;
