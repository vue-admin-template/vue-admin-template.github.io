<template>
  <v-container style="height:100%">
    <v-row justify="center" align-content="center" style="height:100%">
      <v-col cols="12" sm="7" lg="5" xl="4">
        <v-form ref="form" v-model="valid" @submit.prevent="forgotPassword">
          <v-card class="pb-4" shaped elevation="24">
            <v-card
              class="primary header-bar py-3"
              style="position:relative; left:0; top:-20px; margin-left:20px;"
              dark
              elevation="10"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline text-center font-weight-bold">FORGOT PASSWORD</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
            <v-card-text class="mt-9">
              <v-text-field
                outlined
                prepend-icon="mdi-email"
                label="Email Address"
                placeholder="Enter a email address"
                v-model="user.email"
                :rules="rules.emailRule"
              />
              <div class="ml-8">
                <router-link class="back red--text" :to="{ name: 'Login'}">
                  <v-icon color="red">mdi-arrow-left</v-icon>Back to Login
                </router-link>
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
      user: {
        email: '',
      },
      emailReg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      rules: {
        emailRule: [
          v => !!v || 'Email Address is Required',
          v => this.emailReg.test(v) || 'Invalid Email Address'
        ],
      }
    }
  },
  methods: {
    async forgotPassword() {
    },
  }

}
</script>

<style scoped>
.back {
  text-decoration: none;
}
</style>