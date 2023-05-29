// @todo use env vars instead
const ALLOW_USER_TO_OPTIONALLY_ENABLE_DEBUG_UTILS = true;
const ENABLED_DEBUG_UTILS_BY_DEFAULT = true;

export const useDebugProvider = () => {
  const enabledDebugOptions = ref({
    space: false,
  });

  onMounted(() => {
    if (!ALLOW_USER_TO_OPTIONALLY_ENABLE_DEBUG_UTILS) {
      return;
    }

    (window as any).enableDebug = () => {
      addEventListener('keydown', (event) => {
        if (event.key === 's') {
          // toggle visibility of <Space /> component
          const toggleEnableSpaceDebugging = !enabledDebugOptions.value.space;

          enabledDebugOptions.value = {
            ...enabledDebugOptions.value,
            space: toggleEnableSpaceDebugging,
          };
        }
      });
    };

    if (
      ALLOW_USER_TO_OPTIONALLY_ENABLE_DEBUG_UTILS &&
      ENABLED_DEBUG_UTILS_BY_DEFAULT
    ) {
      (window as any).enableDebug();
    }
  });

  provide('debug', enabledDebugOptions);
};
