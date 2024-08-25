<template>
<div class="user-info__wrapper d-flex justify-content-between">
  <div class="user-info__image">
    <img src="@/assets/images/dummy.png" alt="1">
  </div>
  <div>
    <p id="name" class="fw-medium font-bigger mb-2">Ervin Howell</p>
    <div class="d-flex mb-2">
      <p class="fw-medium me-3">email</p>
      <p id="email" class="text-grey">Shanna@melissa.tv</p>
    </div>
    <div class="d-flex mb-3">
      <p class="fw-medium me-3">phone</p>
      <p id="phone" class="text-grey">010-692-6593 x09125</p>
    </div>
    
    <div>
      <p class="fw-medium font-bigger mb-4">О себе:</p>
      <p class="text-grey">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style scoped lang="scss">
  .user-info {
    &__wrapper {
      padding: 30px 20px;
    }
    &__image {
      margin-right: 60px;
    }
  }
</style>