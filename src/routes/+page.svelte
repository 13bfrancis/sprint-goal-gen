<script lang="ts">
	import GeneratedGoal from '$lib/features/goal/generated-goal.svelte';
	import GoalForm from '$lib/features/goal/goal-form.svelte';
	import Heading from '$lib/features/ui/heading.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;

	$: console.log(form);
</script>

<div class="mx-auto max-w-sm pt-4">
	<Heading>Sprint Goal Generator</Heading>
	<GoalForm />
	{#if form?.goal}
		<GeneratedGoal>{form.goal}</GeneratedGoal>
	{/if}
</div>
