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

                complete: '#3cd1c2',
                ongoing: '#ffaa2c',
                overdue: '#f83e70',
            }
        }
    }
}

export default new Vuetify(opts)