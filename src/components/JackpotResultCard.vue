<template>
    <div class="jackpot-result">
        <div class="date">
            <i class="fas fa-calendar-alt"></i>
            <h2>{{ date }}</h2>
        </div>
        <div class="main-information">
            <div class="wining-numbers">
                <div class="standard-number" v-for="number in numbers"
                     :key="number">
                    {{ number }}
                </div>
                <div class="additional-number" v-for="additionalNumber in additionalNumbers"
                     :key="additionalNumber">
                    {{ additionalNumber }}
                </div>
            </div>
            <div class="result-jackpot">
                <h2 class="jackpot-header">Jackpot</h2>
                <h1 class="jackpot-value">{{ Number(jackpot).toLocaleString() }} $</h1>
            </div>
        </div>
        <div class="sum-up">
            <div class="participation-info">
                <i class="fas fa-users my-users"></i>
                <h4>
                    {{ Number(gameAmount).toLocaleString() }} bets recorded!
                </h4>
            </div>
            <a class="more-info-button">
                Show information regarding the draw and price division
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "JackpotResultsCard",
        props: [
            "date",
            "numbers",
            "additionalNumbers",
            "jackpot",
            "gameAmount"
        ]
    }
</script>

<style>
    .jackpot-result {
        height: 28vh;
        margin: 50px 0;

        background: linear-gradient(180deg,#00aeef,#00338d);
    }

    .date {
        padding: 10px 15px;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .fa-calendar-alt {
        font-size: 2em;
    }

    .wining-numbers,
    .main-information {
        display: flex;
        flex-direction: row;
    }

    .wining-numbers {
        width: 70%;
        margin: 50px;

        justify-content: space-around;
    }

    .result-jackpot {
        width: 30%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .standard-number,
    .additional-number {
        min-width: 100px;
        min-height: 100px;

        font-size: 3em;
        font-weight: 900;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;
        border: 1px solid #CDC9c9;

        color: #333333;
    }

    .standard-number {
        background-color: #ffDE59;

        box-shadow: 0 10px 7px rgba(0,0,0,0.3), inset 0 10px 7px rgba(255,169,80,0.6);
        -moz-box-shadow: 0 10px 7px rgba(0,0,0,0.3), inset 0 10px 7px rgba(255,169,80,0.6);
        -webkit-box-shadow: 0 10px 7px rgba(0,0,0,0.3), inset 0 10px 7px rgba(255,169,80,0.6);
        -o-box-shadow: 0 10px 7px rgba(0,0,0,0.3), inset 0 10px 7px rgba(255,169,80,0.6);
    }

    .additional-number {
        background-color: #9AE3FA;

        box-shadow: 0 10px 7px rgba(0,0,0,0.3), inset 0 10px 7px rgba(61,208,222,0.6);
        -moz-box-shadow: 0 10px 7px rgba(0,0,0,0.3), inset 0 10px 7px rgba(61,208,222,0.6);
        -webkit-box-shadow: 0 10px 7px rgba(0,0,0,0.3), inset 0 10px 7px rgba(61,208,222,0.6);
        -o-box-shadow: 0 10px 7px rgba(0,0,0,0.3), inset 0 10px 7px rgba(61,208,222,0.6);
    }

    .jackpot-header,
    .jackpot-value {
        margin: 0;
    }

    .jackpot-value {
        font-size: 2.7em;
        font-weight: 900;
    }

    .sum-up {
        height: calc(100% - 280px);

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        background-color: #333333;
    }

    .participation-info {
        width: 70%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .my-users {
        font-size: 2em;
    }

    .more-info-button:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);
    }

    @media screen and (max-width: 1400px) {
        .standard-number,
        .additional-number {
            min-width: 75px;
            min-height: 75px;

            font-size: 2em;
        }

        .jackpot-value {
            font-size: 2.2em;
        }

        .sum-up {
            height: calc(100% - 260px);
        }
    }

    @media screen and (max-width: 1100px) {
        .jackpot-result {
            height: 23vh;
        }

        .wining-numbers {
            margin: 30px 10px;
        }

        .standard-number,
        .additional-number {
            min-width: 50px;
            min-height: 50px;
        }

        .jackpot-value {
            font-size: 1.3em;
        }

        .jackpot-header {
            font-size: 1.2em
        }

        .jackpot-value {
            font-size: 1.4em;
        }

        .participation-info {
            width: 50%;
        }

        .sum-up {
            height: calc(100% - 200px);
        }
    }
</style>