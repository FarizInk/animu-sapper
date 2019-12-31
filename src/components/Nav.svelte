<script>
  // export let segment;
  function toggleNavbar() {
    document.querySelector(".navbar-menu").classList.toggle("show-navbar");
  }
</script>

<!-- <nav>
	<ul>
		<li><a class:selected='{segment === undefined}' href='.'>home</a></li>
		<li><a class:selected='{segment === "about"}' href='about'>about</a></li>
		<li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a></li>
	</ul>
</nav> -->
<div class="container">

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
          alt="logo" />
      </a>

      <a
        href="javascript:void(0)"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        on:click={toggleNavbar}>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a href="." class="navbar-item">Home</a>
        <a href="top" class="navbar-item">Top</a>
        <a href="schedule" class="navbar-item">Schedule</a>
        <a href="genre" class="navbar-item">Genre</a>
        <a href="season" class="navbar-item">Season</a>
      </div>
    </div>
  </nav>

</div>
