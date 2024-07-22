<template>
  <footer class="footer">
    <a class="footer__link" href="https://ivanshavliuga.github.io/" target="_blank">Ivan Shavliuga</a>
    <a  class="footer__link" href="https://github.com/IvanShavliuga/nuxtMultiApp" target="_blank">source code</a>
    <p class="footer__copyright">(C) 2024</p> 
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.footer {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    background-color: black;
    color: white;
    font-size: 14px;
    padding: 8px 16px;
    margin-top: 16px;
    &__link {
        color: purple;
        text-decoration: none;
        &:first-child {
            border-right: 1px solid white;
            padding-right: 8px;
        }
    }
    &__copyright {
        margin-left: auto;
    }
}
</style>