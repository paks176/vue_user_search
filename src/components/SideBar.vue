<template>
  <div class="sidebar">
    <div class="sidebar__wrapper">
      <div class="search">
        <p class="mb-3 font-bigger fw-medium">
          Поиск сотрудников
        </p>
        <input
            class="rounded-8"
            type="text"
            placeholder="Enter name or ID"
            @input="transformForRequest($event.target.value)"
        >
      </div>
      <div class="results">
        <p class="mb-3 font-bigger fw-medium">
          Результаты
        </p>
        <div class="results__list">

          <div class="results__list--item">
            <input type="radio" name="currentSelect" id="thisItem1" class="d-none">
            <label for="thisItem1" class="results__list--item--body d-flex rounded-10 cursor-pointer mb-3 ease-animation">
              <div class="results__list--image flex-shrink-0"></div>
              <div class="results__list--text ease-animation p-3 w-100">
                <p class="mb-2 fw-medium">Bret</p>
                <p>Sincere@april.biz</p>
              </div>
            </label>
          </div>
          
          <div class="results__list--item">
            <input type="radio" name="currentSelect" id="thisItem2" class="d-none">
            <label for="thisItem2" class="results__list--item--body d-flex rounded-10 cursor-pointer mb-3 ease-animation">
              <div class="results__list--image flex-shrink-0"></div>
              <div class="results__list--text ease-animation p-3 w-100">
                <p class="mb-2 fw-medium">Bret</p>
                <p>Sincere@april.biz</p>
              </div>
            </label>
          </div>

          <div class="results__list--item">
            <input type="radio" name="currentSelect" id="thisItem1" class="d-none">
            <label for="thisItem1" class="results__list--item--body d-flex rounded-10 cursor-pointer mb-3 ease-animation">
              <div class="results__list--image flex-shrink-0"></div>
              <div class="results__list--text ease-animation p-3 w-100">
                <p class="mb-2 fw-medium">Bret</p>
                <p>Sincere@april.biz</p>
              </div>
            </label>
          </div>

          <div class="results__list--item">
            <input type="radio" name="currentSelect" id="thisItem2" class="d-none">
            <label for="thisItem2" class="results__list--item--body d-flex rounded-10 cursor-pointer mb-3 ease-animation">
              <div class="results__list--image flex-shrink-0"></div>
              <div class="results__list--text ease-animation p-3 w-100">
                <p class="mb-2 fw-medium">Bret</p>
                <p>Sincere@april.biz</p>
              </div>
            </label>
          </div>

          <div class="results__list--item">
            <input type="radio" name="currentSelect" id="thisItem1" class="d-none">
            <label for="thisItem1" class="results__list--item--body d-flex rounded-10 cursor-pointer mb-3 ease-animation">
              <div class="results__list--image flex-shrink-0"></div>
              <div class="results__list--text ease-animation p-3 w-100">
                <p class="mb-2 fw-medium">Bret</p>
                <p>Sincere@april.biz</p>
              </div>
            </label>
          </div>

          <div class="results__list--item">
            <input type="radio" name="currentSelect" id="thisItem2" class="d-none">
            <label for="thisItem2" class="results__list--item--body d-flex rounded-10 cursor-pointer mb-3 ease-animation">
              <div class="results__list--image flex-shrink-0"></div>
              <div class="results__list--text ease-animation p-3 w-100">
                <p class="mb-2 fw-medium">Bret</p>
                <p>Sincere@april.biz</p>
              </div>
            </label>
          </div>

          <div class="results__list--item">
            <input type="radio" name="currentSelect" id="thisItem1" class="d-none">
            <label for="thisItem1" class="results__list--item--body d-flex rounded-10 cursor-pointer mb-3 ease-animation">
              <div class="results__list--image flex-shrink-0"></div>
              <div class="results__list--text ease-animation p-3 w-100">
                <p class="mb-2 fw-medium">Bret</p>
                <p>Sincere@april.biz</p>
              </div>
            </label>
          </div>

          <div class="results__list--item">
            <input type="radio" name="currentSelect" id="thisItem2" class="d-none">
            <label for="thisItem2" class="results__list--item--body d-flex rounded-10 cursor-pointer mb-3 ease-animation">
              <div class="results__list--image flex-shrink-0"></div>
              <div class="results__list--text ease-animation p-3 w-100">
                <p class="mb-2 fw-medium">Bret</p>
                <p>Sincere@april.biz</p>
              </div>
            </label>
          </div>

          <div class="results__list--item">
            <input type="radio" name="currentSelect" id="thisItem2" class="d-none">
            <label for="thisItem2" class="results__list--item--body d-flex rounded-10 cursor-pointer mb-3 ease-animation">
              <div class="results__list--image flex-shrink-0"></div>
              <div class="results__list--text ease-animation p-3 w-100">
                <p class="mb-2 fw-medium">Bret</p>
                <p>Sincere@april.biz</p>
              </div>
            </label>
          </div>

          <div class="results__list--item">
            <input type="radio" name="currentSelect" id="thisItem1" class="d-none">
            <label for="thisItem1" class="results__list--item--body d-flex rounded-10 cursor-pointer mb-3 ease-animation">
              <div class="results__list--image flex-shrink-0"></div>
              <div class="results__list--text ease-animation p-3 w-100">
                <p class="mb-2 fw-medium">Bret</p>
                <p>Sincere@april.biz</p>
              </div>
            </label>
          </div>

          <div class="results__list--item">
            <input type="radio" name="currentSelect" id="thisItem2" class="d-none">
            <label for="thisItem2" class="results__list--item--body d-flex rounded-10 cursor-pointer mb-3 ease-animation">
              <div class="results__list--image flex-shrink-0"></div>
              <div class="results__list--text ease-animation p-3 w-100">
                <p class="mb-2 fw-medium">Bret</p>
                <p>Sincere@april.biz</p>
              </div>
            </label>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    transformForRequest(value) {
      if (value.length) {
        let result = [];
        const resultComma = value.split(/\s*(?:,|$)\s*/);
        if (resultComma.length === 1) {
          result.push(resultComma.split(' '));
        } else {
          resultComma.forEach(el => {
            let splitted = el.split(' ');
            if (splitted.length) {
              result.push(splitted);
            }
          })
        }
        result = result.flat(Infinity)
        console.log(result)
      }
    }
  },
}
    
// один два три четыре,

</script>

<style scoped lang="scss">
@import '@/assets/styles/global-styles.scss';

.sidebar {
  &__wrapper {
    padding: 27px 31px 0 20px;
    border-right: 1px solid $grey1;
    height: 100%;
  }
  & input {
    padding: 16px 24px;
    background-color: $white;
    border: 1.50px solid $grey2;
    outline: none;
    margin-bottom: 29px;
    &::placeholder {
      font-size: 14px;
      color: $grey3;
    }
  }
  .results {
    &__list {
      &--item {
        & input:checked {
          & + .results__list--item--body {
            border: 1px solid $grey1;
            & .results__list--text {
              background-color: $grey1;
            }
          }
        }
        &--body {
          box-shadow: $shadow;
          border: 1px solid transparent;
          & p:nth-child(2) {
            color: $grey3;
          }
        }
      }
      &--image {
        width: 70px;
        height: 70px;
        border-right: 1px solid $grey1;
      }
    }
  }
}

</style>