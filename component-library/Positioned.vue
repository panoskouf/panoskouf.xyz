<script setup lang="ts">
export type Props = {
  mode?: 'absolute' | 'relative' | 'fixed';
  all?: string;
  x?: string;
  y?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  fallbackAll?: string;
};

const props = withDefaults(defineProps<Props>(), {
  mode: 'relative',
});

const _top = computed(
  () => props.all || props.y || props.top || props.fallbackAll
);
const _right = computed(
  () => props.all || props.x || props.right || props.fallbackAll
);
const _bottom = computed(
  () => props.all || props.y || props.bottom || props.fallbackAll
);
const _left = computed(
  () => props.all || props.x || props.left || props.fallbackAll
);
</script>

<template>
  <div class="positioned"><slot /></div>
</template>

<style lang="scss" scoped>
.positioned {
  position: v-bind('mode');
  top: v-bind('_top');
  right: v-bind('_right');
  bottom: v-bind('_bottom');
  left: v-bind('_left');
}
</style>
