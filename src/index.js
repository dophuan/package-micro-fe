/** 
 * Note: The name of your imported component will decide its name when you import to your application
 * For instance, if YourComponentName is HomeLocalization, it will be <home-localization></home-localization>
 * in your app.
 * */

import Vue from 'vue'
import YourComponentName from './App.vue' // Import your component(s) here

const Components = {
    YourComponentName, // List your imported component(s) here
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components