<template>
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<title>codeinit.pl</title>
			<link rel="icon" type="image/png" href="favicon.png"/>
			<meta name="viewport" content="width=500, initial-scale=1" />
		</head>
		<body class='overflow-hidden !font-mono' :class='bg'>
		<div class='w-screen h-screen relative bg-background/[.97]'>
			<Speck v-for='i in amount' :key='i' :type='i%3' />
			<main class='w-screen h-screen flex justify-center pt-8 items-start lg:pt-0 lg:items-center'>
				<slot />
			</main>
		</div>
		</body>
	</html>
</template>

<script setup lang="ts">
	import {ref, onMounted} from 'vue';
	import Speck from './Speck.vue';

	const amount = ref(0);
	const bg = ref("");
	onMounted(()=>{
		amount.value = Number((Math.random() * 100.0).toFixed(0));
		bg.value = `bg-${(Math.random()*8).toFixed(0)}`;
	})

</script>

<style scoped>
	body{
		background-position: center center;
		background-size: cover;
		transition: background-image 10s
	}
	.bg-0,
	.bg-1{
		background-image: url("/backgrounds/1.jpg");
	}
	.bg-2{
		background-image: url("/backgrounds/2.jpg");
	}
	.bg-3{
		background-image: url("/backgrounds/3.jpg");
	}
	.bg-4{
		background-image: url("/backgrounds/4.jpg");
	}
	.bg-5{
		background-image: url("/backgrounds/5.jpg");
	}
	.bg-6{
		background-image: url("/backgrounds/6.jpg");
	}
	.bg-7{
		background-image: url("/backgrounds/7.jpg");
	}
	.bg-8{
		background-image: url("/backgrounds/8.jpg");
	}
</style>
