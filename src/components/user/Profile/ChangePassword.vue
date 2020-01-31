<template>
  <v-form ref="form" v-model="valid" @submit.prevent="update">
    <v-card shaped elevation="6">
      <v-card class="primary white--text header-bar-content" style="margin-top:7px;">
        <v-card-title class="px-4 py-2">
          <span>Change Password</span>
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
          prepend-icon="mdi-lock-open"
          label="Current Password"
          placeholder="Enter current password"
          :rules="rules.currentPasswordRule"
          v-model="user.currentPassword"
          :type="currentPassword?'text':'password'"
          :append-icon="currentPassword?'mdi-eye-off':'mdi-eye'"
          @click:append="switchCurrentPassword"
        />
        <v-text-field
          outlined
          :disabled="!editable"
          prepend-icon="mdi-lock"
          label="New Password"
          placeholder="Enter new password"
          :rules="rules.newPasswordRule"
          v-model="user.newPassword"
          :type="newPassword?'text':'password'"
          :append-icon="newPassword?'mdi-eye-off':'mdi-eye'"
          @click:append="switchNewPassword"
        />
        <v-text-field
          outlined
          :disabled="!editable"
          prepend-icon="mdi-lock"
          label="Retype Password"
          placeholder="Retype new password"
          :rules="rules.retypePasswordRule"
          v-model="user.retyePassword"
          :type="retypePassword?'text':'password'"
          :append-icon="retypePassword?'mdi-eye-off':'mdi-eye'"
          @click:append="switchRetypePassword"
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
            currentPassword: false,
            newPassword: false,
            retypePassword: false,
            user: {
                currentPassword: '',
                newPassword: '',
                retypePassword: ''
            },
            rules: {
                currentPasswordRule: [
                    v => !!v || 'Current password is Required',
                ],
                newPasswordRule: [
                    v => !!v || 'New password is Required',
                ],
                retypePasswordRule: [
                    v => !!v || 'Retype password is Required',
                    v => v===this.user.newPassword || 'New Password and Retype Password does not match'
                ]
            }
        }
    },
    methods: {
        switchCurrentPassword() {
            this.currentPassword = !this.currentPassword
        },
        switchNewPassword() {
            this.newPassword = !this.newPassword
        },
        switchRetypePassword() {
            this.retypePassword = !this.retypePassword
        },
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