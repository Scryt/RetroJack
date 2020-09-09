<template>
    <div class="small-game-card">
        <div class="card-header">
            <img class="game-card-logo" :src="logoPath">
            <div class="jackpot">
                <p>Jackpot:</p>
                <h3>{{ jackpot }}</h3>
            </div>
        </div>
        <div class="game-info description">
            <i class="fas fa-list-alt"></i><p class="passed-info">{{ description }}</p>
        </div>
        <div class="game-info price">
            <i class="fas fa-ticket-alt"></i><p class="passed-info">{{ price }}</p>
        </div>
        <div class="button-game-layout">
            <a class="standard-button results-button" href="#">
                RESULTS
            </a>
            <a class="standard-button play-button" href="#">
                PLAY!
            </a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SmallGameCard",
        props: [
            'name',
            'jackpot',
            'description',
            'price',
            'logoPath'
        ]
    }
</script>

<style>
    .small-game-card {
        display: table;
        height: 15vh;

        margin: 10px 0;
        padding: 15px;

        border: 1px solid #2E2E2E;
        border-radius: 10px;

        background: linear-gradient(180deg,#00aeef,#00338d);
        box-shadow: 0 5px 16px rgba(0,0,0,0.5);
        transition: all .2s ease-in-out;
    }

    .small-game-card:hover {
        transform: scale(1.05);
    }

    .card-header {
        height: 60px;
        margin: 20px 0;

        display: flex;
        flex-direction: row;
    }

    .game-card-logo {
        height: 70px;
        width: auto;
    }

    .jackpot {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    .game-info {
        height: 30px;

        align-items: center;
        display: flex;
        flex-direction: row;
    }

    .passed-info {
        padding: 0 5px;
        margin: 5px;
    }

    .button-game-layout {
        height: calc(100% - 150px);

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .results-button {
        color: #00aeef
    }

    .play-button {
        background: linear-gradient(90deg,#ebb51e,#ff7900,#ff7900,#ebb51e);
    }

    .results-button,
    .play-button {
        border: none;

        transition: all .4s ease-in-out;
        background-size: 300% 100%;
    }

    .play-button:hover,
    .results-button:hover {
        box-shadow: 0 8px 14px rgba(194, 217, 232, 0.25), inset 0 0 100px 100px rgba(255, 255, 255, 0.2)
    }
</style>