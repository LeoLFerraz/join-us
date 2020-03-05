<template>
  <div>
    <Header></Header>
    <transition name="collapse" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header/Header';
  import Footer from '@/components/Footer/Footer';
  import SectionCollapse from '@/components/CollapseSection.vue';

  export default {
    name: 'App',

    components: {
        Header,
        Footer,
        SectionCollapse
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    }
  };
</script>

<style lang="scss">

</style>
