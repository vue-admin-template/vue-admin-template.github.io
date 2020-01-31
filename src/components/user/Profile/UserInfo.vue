<template>
  <v-form ref="form" v-model="valid" @submit.prevent="update">
    <v-card shaped class="pb-4" elevation="6">
      <v-card class="header-bar-content primary white--text" style="margin-top:7px;">
        <v-card-title class="px-4 py-2">
          <span>User Detail</span>
          <v-spacer></v-spacer>
          <v-btn v-if="!editable" icon class="white--text" @click="edit">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn v-if="editable" icon class="white--text" @click="save">
            <v-icon>mdi-check</v-icon>
          </v-btn>
          <v-btn v-if="editable" icon class="white--text" @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
      <v-card-text>
        <v-text-field
          outlined
          :disabled="!editable"
          prepend-icon="mdi-email"
          label="Email Id"
          placeholder="Enter email address"
          :rules="rules.emailRule"
          v-model="user.email"
        />
        <v-text-field
          outlined
          :disabled="!editable"
          prepend-icon="mdi-account"
          label="Username"
          placeholder="Enter username"
          :rules="rules.usernameRule"
          v-model="user.username"
        />
        <v-text-field
          outlined
          :disabled="!editable"
          prepend-icon="mdi-account"
          label="First Name"
          placeholder="Enter first name"
          :rules="rules.firstNameRule"
          v-model="user.firstname"
        />
        <v-text-field
          outlined
          :disabled="!editable"
          prepend-icon="mdi-account"
          label="Middle Name"
          placeholder="Enter middle name"
          :rules="rules.middleNameRule"
          v-model="user.middlename"
        />
        <v-text-field
          outlined
          :disabled="!editable"
          prepend-icon="mdi-account"
          label="Last Name"
          placeholder="Enter last name"
          :rules="rules.lastnameRule"
          v-model="user.lastname"
        />
        <v-text-field
          outlined
          :disabled="!editable"
          prepend-icon="mdi-phone"
          label="Phone"
          placeholder="Enter phone"
          :rules="rules.phoneRule"
          v-model="user.phone"
        />
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script>
export default {
    data(){
        return {
            valid: false,
            editable: false,
            user: {
                email: 'test@test.',
                username: 'test',
                firstname: 'test',
                middlename: 'test',
                lastname: 'test',
                phone: '1234567'
            },
            emailReg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            rules: {
                emailRule: [
                    v => !!v || 'Email is Required',
                    v => this.emailReg.test(v) || 'Invalid Email Address'
                ],
                usernameRule: [
                    v => !!v || 'Username is Required',
                ],
                firstnameRule: [
                    v => !!v || 'First name is Required',
                ],
                middlenameRule: [
                    v => !!v || 'Middle name is Required',
                ],
                lastnameRule: [
                    v => !!v || 'Last name is Required',
                ],
                phoneRule: [
                    v => !!v || 'Phone is Required',
                ],
            }
        }
    },
    methods: {
        edit(){
            this.editable = true
        },
        close(){
            this.editable = false
        },
        save(){
            if(this.$refs.form.validate()){
                this.editable = false
            }
        }
    }
}
</script>