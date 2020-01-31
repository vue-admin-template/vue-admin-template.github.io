import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#BF360C',
                main: '#FAFAFA',
                header: '#FAFAFA',
                footer: '#FAFAFA'
            }
        }
    }
});
