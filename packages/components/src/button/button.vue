<template>
  <button class="zm-button" :class="buttonStyle">
    <slot>发射</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import './style/index.scss';
import { ButtonProps } from './type';

defineOptions({
  name: 'zm-button'
});

const props = withDefaults(defineProps<ButtonProps>(), {});

const buttonStyle = computed(() => {
  return {
    [`zm-button--${props.type}`]: props.type
  };
});
</script>
