<template>
  <v-main class="auth-background d-flex align-center justify-end">
    <v-card color="#121212" width="340" class="pa-16  justify-self-end" style="margin: 0 auto">
      <div class="">
        <v-form ref="form">
          <p class="text-h5">
            Login
          </p>
          <BaseTextField name="login" label="Email" v-model="credentials.identifier" :rules="[$rules.required, $rules.minLength(4)]" validate-on-blur @keyup.enter="submit" type="text" />

          <BaseTextField
            label="Password"
            v-model="credentials.password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            :rules="[$rules.required, $rules.minLength(4)]"
            validate-on-blur
            @keyup.enter="submit"
          />
        </v-form>
        <v-card-actions class="mt-4">
          <v-btn color="primary" block @click="submit" light style="border-radius: 16px !important">Login</v-btn>
        </v-card-actions>
        <div class="d-flex justify-center py-3 ">
          <router-link style="font-size: 12px" :to="'/forgot-password'" class=" text-decoration-none">Forgot Password</router-link>
        </div>
      </div>
    </v-card>
  </v-main>
</template>
<script>
import {mapActions} from 'vuex'
import BaseTextField from '@/base/BaseTextField.vue'
export default {
  components: {BaseTextField},
  data() {
    return {
      credentials: {
        identifier: '',
        password: '',
      },
      loading: false,
      showPassword: false,
      password: 'Password',
      rules: {
        min: (v) => v.length >= 6 || 'Min 6 characters',
        emailMatch: () => "The email and password you entered don't match",
      },
    }
  },
  methods: {
    ...mapActions('auth', ['signIn']),
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true
        await this.signIn(this.credentials)
        this.loading = false
      }
    },
  },
}
</script>
<style scoped>
.auth-background {
  width: 100%;
  height: 100vh;
  background: url('../../assets/background.png') repeat center center;
}
</style>
