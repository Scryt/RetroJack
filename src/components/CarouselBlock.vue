<template>
    <div class="carouselBlock">
        <carousel :per-page="1" :loop="true" :autoplay="true" :autoplayTimeout="3500" paginationActiveColor="Yellow">
            <slide><img src="../img/big/FallingStar.png" alt="FallingStar"></slide>
            <slide><img src="../img/big/Diamonds.png" alt="Diamond"></slide>
            <slide><img src="../img/big/RetroJackpot.png" alt="RetroJackpot"></slide>
        </carousel>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: 'CarouselBlock',
        components: {
            Carousel,
            Slide
        }
    }
</script>
<style>
    img {
        width: 100%;
    }

    /* paginationPosition seams not to work in my case therefor I had to overwrite it's position */
    .carouselBlock .VueCarousel-pagination {
        bottom: 5px;
        position: absolute;
        display: block;
    }
</style>