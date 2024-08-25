<template>
  <div id="app">
    <SearchBoard/>
  </div>
</template>

<script>
import SearchBoard from './components/SearchBoard.vue';
import { mapGetters, mapMutations } from "vuex";

export default {
  name: 'App',
  components: {
    SearchBoard
  },
  
  computed: {
    ...mapGetters(['getErrorsStack'])
  },
  watch: {
    getErrorsStack() {
      this.$toast.processNew(this.getErrorsStack[0])
    }
  },
  methods: {
    ...mapMutations(["pushNewToast"]),
  },
  mounted() {
    this.pushNewToast({
      header: 'Здесь будут выводиться ошибки и другие сообщения',
      text: 'Это самодельный плагин'
    })
  }
}
</script>

<style>
</style>
