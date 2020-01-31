<template>
  <v-container style="height:100%">
    <v-row justify="center" align-content="center" style="height:100%">
      <v-col cols="12" sm="7" lg="5" xl="4">
        <v-form ref="form" v-model="valid" @submit.prevent="login">
          <v-card class="pb-4" shaped elevation="6">
            <v-card class="primary header-bar py-3" dark elevation="3">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline text-center font-weight-bold">Login</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
            <v-card-title class="ma-0 px-0 pt-0 pb-6 justify-center">
              <div v-if="error" class="red--text">{{errorMessage}}</div>
            </v-card-title>
            <v-card-text>
              <v-text-field
                outlined
                prepend-icon="mdi-account"
                label="Email Id"
                placeholder="Enter email address"
                :rules="rules.emailRule"
                v-model="user.email"
              />
              <v-text-field
                outlined
                prepend-icon="mdi-lock-open"
                :type="viewPassword?'text':'password'"
                label="Password"
                placeholder="Enter password"
                v-model="user.password"
                :rules="rules.passwordRule"
                :append-icon="viewPassword?'mdi-eye-off':'mdi-eye'"
                @click:append="switchViewPassword"
              />
              <div class="ml-8">
                <router-link
                  class="forgot red--text"
                  :to="{ name: 'ForgotPassword'}"
                >Forgot your password?</router-link>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="mr-3" fab color="white" type="submit">
                <v-icon x-large>mdi-arrow-right-bold-circle</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      error: false,
      errorMessage: null,
      viewPassword: false,
      user: {
        email: '',
        password: '',
      },
      emailReg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      rules: {
        emailRule: [
          v => !!v || 'Email is Required',
          v => this.emailReg.test(v) || 'Invalid Email Address'
        ],
        passwordRule: [
          v => !!v || 'Password is Required',
          v => (v && v.length >= 8) || 'Password must be more than 8 characters',
        ]

      }
    }
  },
  methods: {
    login(){

    },
    switchViewPassword() {
      this.viewPassword = !this.viewPassword
    },
  }
}
</script>

<style scoped>
.forgot {
  text-decoration: none;
}
</style>