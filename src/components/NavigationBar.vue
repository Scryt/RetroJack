<template>
    <nav class="navigation-menu">
        <a href="#" class="navigation-item" @click="pageSelectionUpdate('Home')">Home</a>
        <a href="#" class="standard-button navigation-item" @click="pageSelectionUpdate('Results')">Results</a>
    </nav>
</template>

<script>
    export default {
        name: "NavigationBar",
        methods: {
            pageSelectionUpdate (page) {
                this.$emit('pageSelectionUpdate', page)
            }
        }
    }
</script>

<style>
    .navigation-menu {
        position: sticky;
        top: 0;

        margin: 30px 0;

        display: grid;
        grid-template-columns: 10vw 10vw;
        justify-content: center;

        border-radius: 0 0 10px 10px;

        background-color: #FFFFFF;
    }

    .navigation-item {
        padding: 10px 0;
        margin: 10px 5px;

        text-align: center;

        border-radius: 10px;

        color: #FFFFFF;
        background: linear-gradient(90deg,#00aeef,#00338d,#00338d,#00aeef);
        background-size: 300% 100%;
    }

    .navigation-item:hover {
        box-shadow: 0 8px 14px rgba(1,115,192,.25), inset 0 0 100px 100px rgba(255, 255, 255, 0.2)
    }

    @media screen and (max-width: 1800px) {
        .navigation-menu {
            grid-template-columns: 25vw 25vw;
        }
    }

    @media screen and (max-width: 700px) {
        .navigation-menu {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>