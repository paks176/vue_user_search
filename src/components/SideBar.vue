<template>
  <div class="sidebar">
    <div class="sidebar__wrapper">
      <div class="search">
        <p class="mb-3 font-bigger fw-medium">
          Поиск сотрудников
        </p>
        <input
            id="searchInput"
            class="rounded-8"
            type="text"
            placeholder="Введите Id или имя"
            @input="transformForRequest"
        >
      </div>
      <div class="results">
        <p class="mb-3 font-bigger fw-medium results__header">
          Результаты
        </p>
        <div class="results__list position-relative">
          
          <div v-if="loading" class="loading w-100 d-flex align-items-center justify-content-center position-absolute ease-animation">
            <img src="@/assets/images/loader.gif" width="179" height="89" alt="Loading...">
          </div>
          <div v-for="item in getAllResults" :key="item.id">
              <div class="results__list--item">
                <input type="radio" name="currentSelect" :id="item.id" class="d-none" @change="selectThis(item.id)">
                <label :for="item.id" class="results__list--item--body d-flex rounded-10 cursor-pointer mb-3 ease-animation">
                  <div class="results__list--image flex-shrink-0">
                    <img v-if="item.image" :src="item.image" :alt="item.name">
                    <img v-else src="@/assets/images/user_search.png" alt="item.name">
                  </div>
                  <div class="results__list--text ease-animation p-3 w-100">
                    <p class="mb-2 fw-medium">{{item.name}}</p>
                    <p>{{item.email}}</p>
                  </div>
                </label>
              </div>
          </div>
          
          <div v-if="!getAllResults.length && !search?.value">
            Начните поиск
          </div>

          <div v-else-if="!getAllResults.length && search?.value && !loading">
            Ничего не найдено
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: 'SideBar',
  data() {
    return {
      loading: false,
      search: null,
    }
  },
  computed: {
    ...mapGetters(['getAllResults']),
  },
  methods: {
    ...mapActions(['startSearch', 'addToSelected']),
    ...mapMutations(['clearResult', 'clearSelected']),
    setResultsHeight() {
      const sidebar = this.$el;
      if (sidebar) {
        
        const search = sidebar.querySelector('.search');
        if (search) {
          const resultsList = sidebar.querySelector('.results__list');
          const sidebarHeight = sidebar.offsetHeight;
          const searchHeight = search.offsetHeight;
          resultsList.style.height = sidebarHeight - 40 - searchHeight + 'px';
        }
      }
    },
    transformForRequest() {
      this.clearResult();
      this.loading = true;
      setTimeout(() => {
        if (this.search.value.length) {
          let result = [];
          const resultComma = this.search.value.split(/\s*(?:,|$)\s*/);
          if (resultComma.length === 1) {
            result.push(resultComma[0].split(' '));
          } else {
            resultComma.forEach(el => {
              let splitted = el.split(' ');
              if (splitted.length) {
                result.push(splitted);
              }
            })
          }
          this.startSearch(result.flat(Infinity)).then(() => {
            this.loading = false;
          });
        } else {
          this.clearResult();
          this.clearSelected();
          this.loading = false;
        }
      }, 500)
    },
    selectThis(id) {
      this.addToSelected(id)
    }
  },
  mounted() {
    this.setResultsHeight();
    this.search = this.$el.querySelector("#searchInput");
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.setResultsHeight();
      }, 1500)
    })
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/global-styles.scss';

.sidebar {
  &__wrapper {
    border-right: 1px solid $grey1;
    height: 100%;
  }
  & .search {
    padding: 27px 30px 30px 20px
  }
  & input {
    width: 100%;
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
    &__header {
      margin-left: 20px;
      margin-right: 20px;
    }
    &__list {
      width: 372px;
      padding: 10px 30px 0 20px;
      overflow-y: auto;
      overflow-x: hidden;
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
        & img {
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

</style>