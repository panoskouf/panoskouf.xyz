<script setup lang="ts">
export type Props = {
  mode?: 'absolute' | 'relative' | 'fixed';
  all?: string;
  x?: string;
  y?: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  allFallback?: string;
};

const props = withDefaults(defineProps<Props>(), {
  mode: 'relative',
});

const _top = ref(props.all || props.y || props.top || props.allFallback);
const _right = ref(props.all || props.x || props.right || props.allFallback);
const _bottom = ref(props.all || props.y || props.bottom || props.allFallback);
const _left = ref(props.all || props.x || props.left || props.allFallback);
</script>

<template>
  <div class="positioned"><slot /></div>
</template>

<style lang="scss" scoped>
.positioned {
  position: v-bind('mode');
  top: v-bind('_top');
  left: v-bind('_left');
  right: v-bind('_right');
  bottom: v-bind('_bottom');
}
</style>
