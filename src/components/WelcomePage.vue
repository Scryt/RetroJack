<template>
    <div class="WelcomePage">
        <div class="container">
            <small-game-card
                    v-for="game in games"
                    v-bind:key="game.id"
                    :name="game.name"
                    :jackpot="game.jackpot"
                    :description="game.description"
                    :price="game.price"
                    :logoPath="game.logoPath"
            />
        </div>
    </div>
</template>

<script>
    import diamondsImageUrl from '../img/logo/Diamonds.png'
    import retroJackImageUrl from '../img/logo/RetroJack.png'
    import fallingStarImageUrl from '../img/logo/FallingStar.png'

    import SmallGameCard from './SmallGameCard'
    export default {
        name: "WelcomePage",
        components: {
            SmallGameCard
        },
        data() {
            return {
                games: [
                    {'id': 1, 'name': 'RetroJack', 'logoPath': retroJackImageUrl ,'jackpot': '45 000 000 $', 'description': 'Highest jackpot!', 'price': '4$ per bet'},
                    {'id': 3, 'name': 'Diamond Rain', 'logoPath': diamondsImageUrl, 'jackpot': '10 000 000 $', 'description': 'Most popular in UK!', 'price': '2$ per bet'},
                    {'id': 2, 'name': 'Falling Star', 'logoPath': fallingStarImageUrl, 'jackpot': '100 000 $', 'description': 'Cheap and fast! Winners announced every 15min!', 'price': 'Only 1$ per bet!'},
                    {'id': 4, 'name': 'RetroJack', 'logoPath': retroJackImageUrl ,'jackpot': '45 000 000 $', 'description': 'Highest jackpot!', 'price': '4$ per bet'},
                    {'id': 5, 'name': 'Diamond Rain', 'logoPath': diamondsImageUrl, 'jackpot': '10 000 000 $', 'description': 'Most popular in UK!', 'price': '2$ per bet'},
                    {'id': 6, 'name': 'Falling Star', 'logoPath': fallingStarImageUrl, 'jackpot': '100 000 $', 'description': 'Cheap and fast! Winners announced every 15min!', 'price': 'Only 1$ per bet!'},
                    {'id': 7, 'name': 'RetroJack', 'logoPath': retroJackImageUrl ,'jackpot': '45 000 000 $', 'description': 'Highest jackpot!', 'price': '4$ per bet'},
                    {'id': 8, 'name': 'Diamond Rain', 'logoPath': diamondsImageUrl, 'jackpot': '10 000 000 $', 'description': 'Most popular in UK!', 'price': '2$ per bet'},
                    {'id': 9, 'name': 'Falling Star', 'logoPath': fallingStarImageUrl, 'jackpot': '100 000 $', 'description': 'Cheap and fast! Winners announced every 15min!', 'price': 'Only 1$ per bet!'}
                ]
            }
        }
    }
</script>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    }

    @media screen and (max-width: 1200px) {
        .container {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media screen and (max-width: 700px) {
        .container {
            grid-template-columns: 1fr;
        }
    }
</style>