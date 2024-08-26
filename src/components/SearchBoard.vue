<template>
  <div>
    <div class="d-flex align-items-center justify-content-between mb-4">
      <a href="#"><h1>Жилфонд</h1></a>
      <a href="#">Пользователь</a>
    </div>
    <div class="d-flex searchboard__wrapper rounded-10">
      <SideBar/>
      <UserInfo/>
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar';
import UserInfo from './UserInfo';
import {mapMutations} from "vuex";
export default {
  name: 'SearchBoard',
  components: {
    SideBar,
    UserInfo,
  },
  methods: {
    ...mapMutations(['pushNewToast']),
  },
  mounted() {
    this.pushNewToast({
      type: 'warning',
      header: 'Поддерживается одновременный поиск по Id и username',
      text: 'В запросе можно комбинировать id и username. <br> К примеру: <b>bret 4 5</b>'
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/global-styles.scss';
.searchboard {
  &__wrapper {
    box-shadow: $shadow;
    height: calc(100vh - 170px);
    max-height: calc(100vh - 170px);
  }
}

</style>
