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
  position: absolute;
  top: $whitespaceGap;
  left: $whitespaceGap;
  background-color: #f9f3e7;
  height: calc(100% - #{$whitespaceGap * 2});
  width: calc(100% - #{$whitespaceGap * 2});
  border-radius: 16px;
}
</style>
