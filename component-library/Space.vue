<script setup lang="ts">
import { SpaceVariant } from '~/types/space';
import { spaceVariants as variants } from '~/styles';
import Box from './Box.vue';

export type Props = {
  variant?: SpaceVariant;
};

const props = withDefaults(defineProps<Props>(), {
  variant: 'xs',
});

const enabledDebugOptions = inject<Ref<{ [key: string]: any }>>('debug');
</script>
<!-- @todo check if its possible to override class from parent -->
<template>
  <Box
    :class="enabledDebugOptions?.space && `debug-${props.variant}`"
    :width="variants[props.variant].x"
    :height="variants[props.variant].y"
  >
    <slot />
  </Box>
</template>

<style lang="scss" scoped>
@import '~/styles';

// @todo clean up css
@mixin space-debug-style($hue, $borderWidth, $variant) {
  background-color: hsla($hue, 100%, 50%, 0.5);
  outline: $borderWidth dashed hsl($hue, 100%, 50%);
  outline-offset: -$borderWidth;
  position: relative;
  &::after {
    font-weight: bold;
    @include center-absolute;
    content: '#{$variant}';
  }
}
.debug {
  &-xs {
    // Red
    font-size: 12px;
    color: #333;
    @include space-debug-style(0, 2px, 'xs');
  }

  &-sm {
    // Orange
    font-size: 12px;
    color: #333;
    @include space-debug-style(30, 2px, 'sm');
  }

  &-md {
    // Yellow
    font-size: 16px;
    color: #333;
    @include space-debug-style(60, 4px, 'md');
  }

  &-lg {
    // Green
    font-size: 20px;
    color: #333;
    @include space-debug-style(120, 8px, 'lg');
  }

  &-xl {
    // Blue
    font-size: 36px;
    color: #fff;
    @include space-debug-style(240, 12px, 'xl');
  }
}
</style>
