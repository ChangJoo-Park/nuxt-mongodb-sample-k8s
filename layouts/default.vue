<template>
  <nuxt />
</template>

<style lang="postcss">
html, body, #__nuxt, #__layout {
  width: 100%;
  height: 100%;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.button--red {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #f56565;
  color: #f56565;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--red:hover {
  color: #fff;
  background-color: #f56565;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

.page-title {
  @apply text-6xl font-bold mb-4;
}
</style>
