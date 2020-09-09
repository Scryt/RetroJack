<template>
    <div class="ResultPage">
        <div v-if="loading">
            Loading...
        </div>
        <div v-else>
            <jackpot-result-card
                    v-for="result in draw.draws"
                    v-bind:key="result.date"
                    :date="result.date"
                    :numbers="result.numbers"
                    :additionalNumbers="result.additionalNumbers"
                    :jackpot="result.jackpot"
                    :gameAmount="result.gameAmount"
            />
        </div>
        <div class="more-results-box">
            <div class="more-info-button">
                Show more results
            </div>
        </div>

    </div>
</template>

<script>
    import { JACKPOT_QUERY } from '../graphql/results'
    import JackpotResultCard from './JackpotResultCard'

    export default {
        name: "ResultPage",
        components: {
            JackpotResultCard
        },
        data() {
            return {
                loading: true,
                draw: []
            }
        },
        apollo: {
            draw: {
                query: JACKPOT_QUERY,
                variables: { type: 'eurojackpot' },
                watchLoading(loading) {
                    this.loading = loading;
                }
            }
        }
    }
</script>

<style>
    .more-results-box {
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>