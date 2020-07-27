// 將 VeeValidate input 驗證工具載入 作為全域註冊
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);
// 將 VeeValidate 完整表單 驗證工具載入 作為全域註冊
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);

// JavaScript 加入 Bootstrap 樣式設定
VeeValidate.configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});

// 匯入語系檔案
import zh_TW from './zh_TW.js';
// 加入至 VeeValidate 的設定檔案
VeeValidate.localize('tw', zh_TW);

new Vue({
  el: '#app',
  data: {
    form: {
      name: '',
      email: '',
      phone: '',
      address: '',
      payment: '',
    },
  },
  methods: {
    submitForm() {
      console.log('送出表單');
    },
  },
});