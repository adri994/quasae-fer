<template>
  <q-page>
    <span class="text-h3">Form</span>
    <q-separator spaced/>
    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-sm col-xs-12 col-sm-12 col-md-6"
      >
        <q-input
          filled
          v-model="userForm.email"
          type="email"
          label="Correo"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something', isValidEmail]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password1"
          label="password"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something', isSamePassword]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password2"
          label="password2"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

          <q-checkbox
            v-model="userForm.conditions"
            label="Acepto las condiciones y términos de uso"
            :style="userForm.errorInConditions
                    && !userForm.conditions
                    && 'color: red'"
          />

        <div class="row justify-end">
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
      </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'PageIndex',
  setup () {
    const $q = useQuasar()
    const userForm = ref({
      email: '',
      password1: '',
      password2: '',
      conditions: false,
      errorInConditions: false
    })

    return {
      userForm,
      onSubmit () {
        userForm.value.errorInConditions = false
        if (!userForm.value.conditions) {
          $q.notify({
            message: 'Debe de aceptar las condiciones',
            icon: 'las la-exclamation-circle'
          })
          userForm.value.errorInConditions = true
          return
        }
        console.log(userForm.value)
      },
      onReset () {
        userForm.value = {
          email: '',
          password1: '',
          password2: '',
          conditions: false,
          errorInConditions: false
        }
      },

      isValidEmail (val) {
        const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
        return emailPattern.test(val) || 'El correo no parece ser válido'
      },
      isSamePassword (val) {
        return (val === userForm.value.password1) || 'Las contraseñas no son iguales'
      }
    }
  }
})
</script>
