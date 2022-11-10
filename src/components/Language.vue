<template>
	<div class='flex gap-1'>
		<img
			v-for='l in items'
			:key='l.lang'
			class="flag"
			:src='l.flag'
			:alt='l.lang'
			@click='locale=l.lang'/>
	</div>
</template>

<script setup lang='ts'>
	import pl from "flag-icons/flags/4x3/pl.svg";
	import en from "flag-icons/flags/4x3/gb.svg";
	import {ref, onMounted} from 'vue';
	import {useI18n} from 'vue-i18n';
	const { locale } = useI18n({ useScope: 'global' });
	const items = ref<Array<{lang: string, flag: string}>>([
		{ lang:'pl', flag: pl },
		{ lang:'en', flag: en },
	]);
	onMounted(()=>{
		let browserLang = navigator.language?.split("-")[0];
		locale.value = browserLang || "en";
	});
</script>

<style scoped>
img.flag{
	@apply opacity-25 hover:opacity-80 cursor-pointer h-[12px];
}
</style>
