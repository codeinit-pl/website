<template>
	<div ref='data' class='hidden'>
		<slot/>
	</div>
	<span v-if='data' v-html='$t(data.innerText)' />
</template>

<script setup lang='ts'>
import {ref} from 'vue';
const data = ref();
</script>

<style scoped>

</style>
