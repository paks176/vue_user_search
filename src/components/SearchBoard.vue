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
export default {
  name: 'SearchBoard',
  components: {
    SideBar,
    UserInfo,
  },
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
