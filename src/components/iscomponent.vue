

<template>
    <div>
        <Loading :loading='loading' ></Loading>
        <component :is="com" @loadingChange='loadingChange'>
            <slot/>
        </component>
    </div>
</template>
<script>
import Loading from "../components/loading";
export default {
  props: ["com"],
  data() {
    return {
      loading: false
    };
  },
  methods: {
    loadingChange(loading) {
        debugger;
      this.loading = loading;
    }
  },
  components: { Loading }
};
</script>

