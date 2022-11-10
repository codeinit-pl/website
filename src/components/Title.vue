<template>
	<span>
		{{randomItem?.static}}<span v-if="randomItem?.animated" class='animate-pulse' v-html='randomItem.animated'/>
	</span>
</template>

<script setup lang='ts'>
	import { onMounted, ref } from 'vue';

	onMounted(()=>{
		let rand = (Math.random()*(items.value.length-1)).toFixed(0);
		randomItem.value = items.value[rand];
	})

	const randomItem = ref();
	const items = ref<Array<{
		static: string,
		animated?: string,
	}>>([
		{
			static:'#code --init',
			animated:'&block;',
		},
		{
			static:'code::init'
		},
		{
			static:'code.init()'
		},
		{
			static:'$code->init()'
		},
		{
			static:'code=$(init)'
		},
	]);
</script>

<style scoped>

</style>
