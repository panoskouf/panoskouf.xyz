<template>
  <div class="viewportCoverContainer">
    <div class="viewportCover">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$whitespaceGap: 24px;
.viewportCoverContainer {
  width: 100%;
  height: 100vh;
  position: relative;
}
.viewportCover {
  // @todo how can I avoid including this everywhere ?
  // @todo investigate why @use throws an error
  @import '~/styles';

  position: absolute;
  @include inset($whitespaceGap);
  background-color: $backgroundColor;
  border-radius: 16px;
}
</style>
