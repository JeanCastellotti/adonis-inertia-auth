<template>
  <div
    v-if="$page.props.errors?.login"
    class="mb-5 rounded p-5 bg-red-200 border border-red-500 text-red-500 font-semibold"
  >
    {{ $page.props.errors.login }}
  </div>

  <div class="bg-white rounded shadow p-5">
    <h1 class="border-b pb-5 mb-5 flex items-center justify-between">
      <span class="text-2xl font-semibold text-slate-800">Login</span>
      <Link href="/" class="block text-indigo-500 hover:underline">Go back home</Link>
    </h1>

    <form @submit.prevent="form.post('/login')">
      <div class="space-y-3 mb-5">
        <label for="email" class="block">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="bg-slate-100 w-full rounded px-3 py-2"
        />
      </div>

      <div class="space-y-3 mb-5">
        <label for="password" class="block">Password</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          class="bg-slate-100 w-full rounded px-3 py-2"
        />
      </div>

      <div class="mb-5">
        <label for="remember" class="space-x-3">
          <input type="checkbox" id="remember" v-model="form.remember" />
          <span>Remember me</span>
        </label>
      </div>

      <button
        :disabled="form.processing"
        class="rounded p-3 text-white bg-indigo-500 w-full disabled:bg-slate-400 disabled:text-slate-800"
      >
        {{ form.processing ? 'Loading...' : 'Login' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3'

const form = useForm({
  email: null,
  password: null,
  remember: false,
})
</script>
