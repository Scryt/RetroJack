<template>
    <div class="footer">
        <div class="col1">
            <i class="fas fa-phone my-phone"></i>
            <ul class="col1-ul">
                <li>Check games results: 123 123 123</li>
                <li>Help Center: 123 123 123</li>
            </ul>
        </div>
        <ul class="col2">
            <li><a href="#">Contact</a></li>
            <li><a href="#">Results</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Event calendar</a></li>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Betting points map</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Careera</a></li>
        </ul>
        <div class="col3">
            <h4 class="download-cta">
                Download free app RetroJack APP
            </h4>
            <div class="download-grid">
                <a href="#">
                    <img class="download-cta-button download-android" src="../img/downloadImg/android.png" alt="Download for android!">
                </a>
                <a href="#">
                    <img class="download-cta-button download-apple" src="../img/downloadImg/apple.png" alt="Download for apple!">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterBlock"
    }
</script>

<style>
    .footer {
        margin: 70px 0 0 0;
        padding: 30px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        color: #3D3D3D;
        background-color: #EEEEEE;
    }

    .col1 {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .my-phone {
        font-size: 2em;
        color: #00aeef;
    }

    .col1-ul li {
        padding: 10px 0;
    }

    .col2 li a {
        color: #00aeef;
    }

    .col2 li {
        padding: 7px
    }

    .download-cta {
        margin: 0;
    }

    .download-android {
        margin: 15px 15px 0 0;
    }

    .download-apple {
        margin: 15px 0 0 15px
    }

    .download-cta-button {
        height: 45px;
        width: auto;
    }


</style>