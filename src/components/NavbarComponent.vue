<template>
  <nav class="text-uppercase">
    <ul class="nav-list">
      <li class="logo"><router-link to="/">irup</router-link></li>
      <li class="listitem"><router-link to="/about">about<i class="fas fa-caret-down"></i></router-link>
        <ul class="dropdown">
          <li><router-link to="/about/operationalstructure">operational structure</router-link></li>
          <li><router-link to="/about/executiveboard">executive board</router-link></li>
        </ul>
      </li>
      <li class="listitem"><router-link to="/news">news<i class="fas fa-caret-down"></i></router-link>
        <ul class="dropdown">
          <li><router-link to="/news/videos">videos</router-link></li>
          <li><router-link to="/news/publication">publication</router-link></li>
        </ul>
      </li>
      <li class="listitem"><router-link to="/casestudies">case studies</router-link></li>
      <li class="authority"><i class="fas fa-user-lock"></i></li>
    </ul>
  </nav>

</template>

<style scoped lang="scss">
    nav {
    padding: 30px;
    position: sticky;
    top: 0;
    right: 0;
    width: 100vw;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 99;

    li {
      list-style: none;
    }

    .logo {
      margin-right: auto;
      font-weight: 600;
      font-size: 2rem;
      letter-spacing: 0.12em;

      a {
        text-decoration: none;
        color: #66BB6A;
      }
    }

    .nav-list {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;
      margin: 0 1rem;

      .authority {
        color: #66BB6A;
        margin-left: 3rem;
      }
    }

    .listitem {
      font-weight: 500;
      font-size: 1rem;
      color: #333;
      position: relative;
      padding: 1rem 0.5rem;

      a {
        text-decoration: none;
        color: #333;

        .fa-caret-down {
          color: #66BB6A;
          margin-left: 5px;
        }
      }

      &:hover ul {
        opacity: 1;
        visibility: visible;
      }

      .dropdown {
        position: absolute;
        top: 3.2rem;
        right: -1rem;
        border: 1px solid #66BB6A;
        text-align: end;
        font-size: 0.9rem;
        background: white;
        border-radius: 5px;
        width: 12rem;
        padding: 0.5rem;
        gap: 0.2rem;
        opacity: 0;
        visibility: hidden;
        transition: opacity 200ms ease-in-out;
      }

      li {
        padding: 0.5rem 1rem;
        border-radius: 5px;
        transition: background-color 200ms ease-in-out;

        &:hover {
          background-color:#F9F9FA
        }
      }
    }
  }
</style>