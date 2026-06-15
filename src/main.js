import {VRQuizApp} from './App.js?v=20260615-white-scifi';

const root = document.querySelector('#app');
const config = window.VR_QUIZ_CONFIG || {};

const app = new VRQuizApp(root, config);
app.start();
