<template>
  <v-form ref="form" v-model="valid" @submit.prevent="update">
    <v-card shaped elevation="6">
      <v-card class="primary white--text header-bar-content" style="margin-top:7px;">
        <v-card-title class="px-4 py-2">
          <span>Avatar</span>
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
      <v-card-text class="pt-0 pb-4 text-center">
        <v-icon size="160">mdi-account-circle</v-icon>
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
                image: ''
            },
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