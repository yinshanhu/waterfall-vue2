<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
}
input,
textarea {
  -webkit-touch-callout: inherit;
  -webkit-user-select: text;
}

img {
  display: block;
}

#app {
  height: 100%;
}

.global-mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100000;
}

.flex-box {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

*::-webkit-scrollbar {
  display: none;
}

.text-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.one-text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.two-text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fontNum {
  font-family: 'dinpro-bold';
}
</style>
