<script setup lang="ts">
export type Props = {
  width?: string;
  height?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <div class="box"><slot /></div>
</template>

<style lang="scss" scoped>
.box {
  flex-shrink: 0;
  width: v-bind('width');
  height: v-bind('height');
}
</style>
