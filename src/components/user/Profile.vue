<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="8" xl="6">
        <user-info></user-info>
      </v-col>
      <v-col cols="12" sm="12" md="4" xl="6">
        <user-avatar></user-avatar>
        <change-password class="mt-10"></change-password>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserInfo from './Profile/UserInfo'
import UserAvatar from './Profile/Avatar'
import ChangePassword from './Profile/ChangePassword'
export default {
  components: {
    UserInfo,
    UserAvatar,
    ChangePassword
  }
}
</script>