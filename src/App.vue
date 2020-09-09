<template>
    <div id="app">
      <MenuBar/>
      <CarouselBlock/>
      <NavigationBar
              @pageSelectionUpdate="onSelectedPage"
      />
      <keep-alive>
        <component :is="selectedPage"></component>
      </keep-alive>
      <FooterBlock/>
    </div>
</template>

<script>
import MenuBar from './components/MenuBar'
import CarouselBlock from "./components/CarouselBlock";
import NavigationBar from "./components/NavigationBar";
import WelcomePage from "./components/WelcomePage";
import ResultPage from "./components/ResultPage";
import FooterBlock from "./components/FooterBlock";

export default {
  name: 'App',
  components: {
    MenuBar,
    NavigationBar,
    Home: WelcomePage,
    Results: ResultPage,
    CarouselBlock,
    FooterBlock
  },
  data() {
    return {
      selectedPage: 'Home'
    }
  },
  methods: {
    onSelectedPage (selectedPage) {
      this.selectedPage = selectedPage

    }
  }
}
</script>
