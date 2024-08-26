<template>
  <div
      class="user-info w-100 position-relative" 
      :class="{'d-flex justify-content-center align-items-center': !Object.keys(selectedProperties).length }">
    <div 
        v-if="loading" 
        class="loading w-100 d-flex align-items-center justify-content-center position-absolute ease-animation">
      <img src="@/assets/images/loader.gif" width="179" height="89" alt="Loading...">
    </div>
    
    <div v-else>
      <div v-if="Object.keys(selectedProperties).length">
        <div class="user-info__wrapper d-flex justify-content-between">
          <div class="user-info__image">
            <img v-if="selectedProperties?.image" :src="selectedProperties.image" :alt="selectedProperties.name">
            <img v-else src="@/assets/images/dummy.png" alt="1">
          </div>
          <div>
            <p id="name" class="fw-medium font-bigger mb-2">{{ selectedProperties.name }}</p>
            <div class="d-flex mb-2">
              <p class="fw-medium me-3">email</p>
              <p id="email" class="text-grey">{{ selectedProperties.email }}</p>
            </div>
            <div class="d-flex mb-3">
              <p class="fw-medium me-3">phone</p>
              <p id="phone" class="text-grey">{{ selectedProperties.phone }}</p>
            </div>

            <div>
              <p class="fw-medium font-bigger mb-4">О себе:</p>
              <p v-if="selectedProperties?.about" class="text-grey">
                {{ selectedProperties?.about }}
              </p>
              <p v-else class="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="w-100">
        <p class="">
          Выберите сотрудника, чтобы посмотреть его профиль
        </p>
      </div>
    </div>
    
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "UserInfo",
  data() {
    return {
      loading: false,
      selectedProperties: {},
    }
  },
  computed: {
    ...mapGetters(['getSelected']),
  },
  watch: {
    'getSelected': {
      handler: function () {
        this.loading = true;
        setTimeout(() => {
          if (Object.keys(this.getSelected).length) {
            this.$set(this.$data, 'selectedProperties', this.getSelected);
          } else {
            this.$set(this.$data, 'selectedProperties', {});
          }
          this.loading = false;
        }, 500)
      },
    }
  }

}
</script>

<style scoped lang="scss">
.user-info {
  .loading {
    
  }
  &__wrapper {
    padding: 30px 20px;
  }

  &__image {
    margin-right: 60px;
  }
}
</style>