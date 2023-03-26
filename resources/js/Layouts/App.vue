<template>
  <div class="min-h-screen bg-slate-200">
    <header class="bg-white py-5 mb-10">
      <nav class="container mx-auto px-5 flex gap-5 text-slate-400">
        <Link href="/" class="hover:text-slate-600">Home</Link>
        <Link href="/dashboard" class="hover:text-slate-600">Dashboard</Link>
        <Link v-if="!$page.props.user" href="/login" class="hover:text-slate-600">Login</Link>
        <Link v-else href="/logout" method="post" as="button" class="hover:text-slate-600">
          Logout
        </Link>
      </nav>
    </header>
    <main class="container mx-auto px-5">
      <slot />
    </main>
  </div>
</template>
