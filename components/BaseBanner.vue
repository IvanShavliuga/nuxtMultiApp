<template>
  <article class="banner">
    <!-- <img src="./../assets/img/banner.jpg" class="banner__img"> -->
    <div class="banner__content">
        <h1 class="banner__header">Я ищу работу</h1>
        <h2 class="banner__subheader">Middle frontend developer</h2>
        <BaseChips :list="['nuxt 3', 'vue.js 3', 'typescript', 'less', 'tailwind']"/>
        <div class="banner__contacts">
            <a class="banner__link" href="https://www.linkedin.com/in/ivanshavliugaivanov/" target="_blank">
                <img class="banner__icon" src="./../assets/icons/linkedin.svg" target="_blank"/>
            </a>
            <a class="banner__link" href="https://t.me/ivanshavliuga" target="_blank">
                <img class="banner__icon" src="./../assets/icons/telegram.svg" target="_blank"/>
            </a>
            <a class="banner__link" href="https://github.com/IvanShavliuga" target="_blank">
                <img class="banner__icon" src="./../assets/icons/github.svg" target="_blank"/>
            </a>
            <a class="banner__link" href="mailto://ivanov-ROM-88@yandex.by" target="_blank">
                <img class="banner__icon" src="./../assets/icons/email.svg" target="_blank"/>
            </a>
        </div>
    </div>
  </article>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    background-image: url('./../assets/img/banner.jpg');
    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        max-width: 353px;
        max-height: 195px;
        gap: 16px;
        background-color: rgba(silver,0.7);
        border-radius: 16px;
        padding: 16px;
        @media screen and (max-width: 390px) {
            // width: 90%;
            max-width: 80%;
        }
    }
    &__header, &__subheader {
        font-size: 14px;
    }
    &__header {
        font-weight: 700;
    }
    &__subheader {
        font-weight: 500;
    }
    &__contacts {
        display: flex;
        justify-content: flex-start;
        gap: 8px;
    }
    &__icon {
        width: 32px;
        height: 32px;
    }
}
</style>