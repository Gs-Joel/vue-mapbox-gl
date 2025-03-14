/**
 * Provide to children components a $map function to retrieve a map object
 *
 * @return {Object}
 */
export const provideMap = () => ({
  data() {
    return {
      map: null,
    };
  },
  provide() {
    return {
      $map: () => this.map,
    };
  },
});

/**
 * Inject from parent component a $map function to retrieve a map object
 *
 * @return {Object}
 */
export const injectMap = () => ({
  inject: {
    $map: { default: null },
  },
  computed: {
    map() {
      return typeof this.$map === 'function' ? this.$map() : null;
    },
  },
});
