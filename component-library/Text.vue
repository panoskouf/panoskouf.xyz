<script setup lang="ts">
import { Color, getColor } from '~/styles';

export type Props = {
  is?: string;
  // @todo implement variants
  color?: Color;
  align?: 'inherit' | 'left' | 'right' | 'center' | 'justify';
};

const props = withDefaults(defineProps<Props>(), {
  // @todo should the default be 'span' or 'p'?
  is: 'span',
  // why TS complains here ????
  // color: 'inherit',
  // this is fine --> const x: Color = 'inherit';
  align: 'inherit',
});

const _color = computed(() =>
  props.color ? getColor(props.color) : 'inherit'
);
</script>

<template>
  <component :is="is" class="text"><slot /></component>
</template>

<style lang="scss" scoped>
.text {
  display: inline-block;
  font-family: inherit;
  font-style: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;

  color: v-bind('_color');
  text-align: v-bind('align');
}
</style>
