<script setup lang="ts">
import { background } from '~/styles';
// @todo fix imports
import Box from '~/component-library/Box.vue';
import Positioned from '~/component-library/Positioned.vue';
</script>

<template>
  <Box width="100%" height="100vh" style="position: relative">
    <Positioned mode="absolute" all="24px" class="cover">
      <slot />
    </Positioned>
  </Box>
</template>

<style lang="scss" scoped>
.cover {
  background-color: v-bind('background.primary');
  border-radius: 16px;
}
</style>
