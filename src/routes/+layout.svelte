<script>
	import '../app.postcss';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
	import { DarkMode } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      tpncoder
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/articles">Articles</NavLi>
    <NavLi href="/about">About</NavLi>
  </NavUl>
  <DarkMode/>
</Navbar>

<slot />
