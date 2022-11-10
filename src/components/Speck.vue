<template>
	<span :class='color' :style='styles'/>
</template>

<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps<{
	type:number,
}>();

const color = computed(() : string =>{
	switch (props.type){
		case 0: return "text-secondary";
		case 1: return "text-accent";
		default: return "text-neutral";
	}
});
const styles = computed(():object=>{
	return {
		top: `${getRadomInt(100)}%`,
		left: `${getRadomInt(100)}%`,
		animationDuration: `${45 + getRadomInt(25)}s`,
		animationDelay: `${-1 -getRadomInt(150)}s`,
		transformOrigin: `${getRandomSign() * getRadomInt(100)}vw ${getRandomSign() * getRadomInt(100)}vh`,
		boxShadow: `${getRandomSign() *2}vmin 0 ${0.2+Math.random()}vmin currentColor`,
	};
});

function getRadomInt(maxValue: number):number{
	return Number((Math.random()*maxValue).toFixed(0))
}
enum SIGNS{
	PLUS=1,
	MINUS=-1,
}
function getRandomSign():SIGNS{
	return getRadomInt(10) >=5 ? SIGNS.MINUS : SIGNS.PLUS;
}
</script>

<style scoped>
	@keyframes move {
		100% {
			transform: translate3d(0, 0, 1px) rotate(360deg);
		}
	}

	span {
		width: 3px;
		height: 3px;
		border-radius: 1vmin;
		backface-visibility: hidden;
		position: absolute;
		animation: move;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
</style>
