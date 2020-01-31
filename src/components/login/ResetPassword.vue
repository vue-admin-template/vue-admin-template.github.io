<template>
  <v-container style="height:100%">
    <v-row justify="center" align-content="center" style="height:100%">
      <v-col cols="12" sm="7" lg="5" xl="4">
        <v-form ref="form" v-model="valid" @submit.prevent="resetPassword">
          <v-card class="pb-0" shaped elevation="24">
            <v-card
              class="primary header-bar py-3"
              style="position:relative; left:0; top:-20px; margin-left:20px;"
              dark
              elevation="10"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline text-center font-weight-bold">RESET PASSWORD</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
            <v-card-title class="ma-0 pa-0 justify-center">
              <div v-if="invalidToken" class="red--text">{{invalidTokenMsg}}</div>
            </v-card-title>
            <v-card-text class="mt-9">
              <v-text-field
                outlined
                :disabled="invalidToken"
                prepend-icon="mdi-lock"
                :type="viewPassword?'text':'password'"
                label="Password"
                placeholder="Enter a password"
                v-model="user.password"
                :rules="rules.passwordRule"
                :append-icon="viewPassword?'mdi-eye-off':'mdi-eye'"
                @click:append="switchViewPassword"
              />
              <v-text-field
                outlined
                :disabled="invalidToken"
                prepend-icon="mdi-lock"
                :type="resetViewPassword?'text':'password'"
                label="Confirm Password"
                placeholder="Enter a confirm password"
                v-model="user.confirm_password"
                :rules="rules.resetPasswordRule"
                :append-icon="resetViewPassword?'mdi-eye-off':'mdi-eye'"
                @click:append="switchResetViewPassword"
              />
              <div class="ml-8">
                <router-link class="back red--text" :to="{ name: 'Login'}">
                  <v-icon color="red">mdi-arrow-left</v-icon>Back to Login
                </router-link>
              </div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :disabled="invalidToken" class="mr-3" fab color="white" type="submit">
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
      invalidToken: false,
      invalidTokenMsg: '',
      valid: false,
      error: false,
      errorMessage: null,
      viewPassword: false,
      resetViewPassword: false,
      user: {
        password: '',
        confirm_password: ''
      },
      rules: {
        passwordRule: [
          v => !!v || 'Password is Required',
          v => (v && v.length >= 8) || 'Password must be more than 8 characters'
        ],
        resetPasswordRule: [
          v => !!v || 'Password is Required',
          v => (v && v.length >= 8) || 'Password must be more than 8 characters',
          v => v === this.user.password || 'Password and Confirm password doesn\'t match.'
        ]
      }
    }
  },
  methods: {
    switchViewPassword() {
      this.viewPassword = !this.viewPassword
    },
    switchResetViewPassword() {
      this.resetViewPassword = !this.resetViewPassword
    },
    async resetPassword() {
    },
  }

}
</script>
<style scoped>
.back {
  text-decoration: none;
}
</style>