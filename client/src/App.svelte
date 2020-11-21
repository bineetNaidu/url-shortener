<script lang="ts">
  import Axios from 'axios';

  type BodyTypes = {
    url: string;
    slug?: string;
  };

  let url: string = '';
  let slug: string = '';
  let apiRes: BodyTypes;

  const handleSubmit = async () => {
    if (url !== '') {
      let data: BodyTypes;
      if (slug !== '') {
        data = { url, slug };
      } else {
        data = { url };
      }
      const res = await Axios.post('http://localhost:4242/', data);
      if (res.data.success) {
        apiRes = res.data.url;
      }
    } else {
      alert('You need to fill out the fields...');
    }
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 85vh;
  }

  form.url_form {
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
  }

  form.url_form > input {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem 2rem;
    border-radius: 4px;
    border-width: 1px;
  }

  form.url_form > button {
    padding: 0.5rem 3rem;
    background-color: rgb(255 87 8 / 79%);
    border-width: 1px;
    color: white;
    outline-width: 0px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<svelte:head>
  <title>Url Shortener</title>
</svelte:head>

<main>
  <h1>Url Shortener</h1>
  <form class="url_form" on:submit|preventDefault={handleSubmit}>
    <input type="text" required bind:value={url} placeholder="Url" />
    <input type="text" bind:value={slug} hidden />
    <button type="submit">Submit</button>
  </form>

  {#if apiRes}
    <pre>{JSON.stringify(apiRes, null, 2)}</pre>
  {/if}
</main>
