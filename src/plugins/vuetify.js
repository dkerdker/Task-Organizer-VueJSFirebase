import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'md', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        themes: {
            light: {
                primary: '#FC636B',
                secondary: '#FFB900',
                accent: '#1AAFD0',
                error: '#f83e70',
                info: '#ffaa2c',
                success: '#3BE8B0',
                warning: '#FFC107',
            }
        }
    }
}

export default new Vuetify(opts)