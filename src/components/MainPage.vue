<template>
    <div class="main-page">
        <v-container>
            <v-row>
                <v-col class="main-page-text">
                    <p>どうなる?! サロン</p>
                </v-col>
            </v-row>
        </v-container>
        <div class="float-right main-message-text">
            <p>あなたのかわりに、</p>
            <p>「 地方移住」はじめました。</p>
        </div>
    </div> 
</template>
<style scoped>
    .main-page {
        background: url("/img/yatsugatake.jpg");
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 100%;
    }
    .main-page-text {
        color: white;
        font-size: 32px;
        font-weight: bold;
        margin-top: 2rem;
    }
    .main-message-text {
        color: white;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        font-size: 32px;
        font-weight: bold;
        margin-right: 10rem;
        background-color: rgba(0, 0, 0, 0.4);
    }
</style>