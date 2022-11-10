<template>
	<ul class='flex gap-4 flex-row md:flex-col md:justify-center'>
		<li v-for='item in items' :key='item.label' class='scale-150 sm:scale-100'>
			<div class="md:tooltip tooltip-md hover:z-10" :data-tip="$t(`social.${item.label}`)">
				<a class='link text-secondary whitespace-nowrap' :href='item.url' target='_blank'>
					<component v-if='item.icon' :is='item.icon' size='24' stroke-width='1' class='inline'/>
					<img v-if='item.img' :src='item.img' class='w-[22px] m-[1px] inline-block' :alt='`${item.label} icon`'/>
					<span class='hidden sm:inline-block'>{{item.label}}</span>
				</a>
			</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
	import { onMounted, shallowRef } from 'vue';
	import {AtIcon, BrandGithubIcon, BrandTwitterIcon, BrandLinkedinIcon} from 'vue-tabler-icons';
	import Itch from './img/itch-dot-io.svg';

	const items = shallowRef<Array<{
		icon?: any
		img?: ImageData,
		label: string,
		url: string,
	}>>();

	onMounted(()=>{
		items.value = [
			{
				icon:AtIcon,
				label: 'email',
				url: 'mailto:mikolaj@codeinit.pl',
			},
			{
				icon:BrandGithubIcon,
				label: 'github',
				url: 'https://github.com/mikouaji',
			},
			{
				icon:BrandTwitterIcon,
				label: 'twitter',
				url: 'https://twitter.com/mikouaji',
			},
			{
				img:Itch,
				label: 'itch',
				url: 'https://mikouaji.itch.io/',
			},
			{
				icon:BrandLinkedinIcon,
				label: 'linkedin',
				url: 'https://www.linkedin.com/in/miko%C5%82aj-misztal-9a2102177/',
			},
		];
	});
</script>

<style scoped>
	.tooltip-md{
		@apply tooltip-left;
	}
	.tooltip-md:before{
		@apply text-background bg-accent/90;
		box-shadow: 0 0 30px 0 rgba(255, 191, 133, 0.25);
	}
</style>
