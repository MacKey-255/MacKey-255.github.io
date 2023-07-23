<template>
  <div class="grid gap-x-10 md:grid-cols-3 mt-2">
    <div class="md:col-span-1 justify-self-center md:justify-self-start md:order-2">
      <div class="mb-4">
        <img
          :src="require('@/assets/images/profile.jpg')"
          class="img-avatar rounded-t-xl justify-self-center"
          alt="Avatar" />
        <div
          class="flex justify-center gap-4 p-2 rounded-b-lg bg-slate-300/[0.8] text-gray-800 dark:text-gray-200 dark:bg-slate-600/[0.8]">
          <a
            class="transition ease-in-out hover:scale-150 hover:-translate-y-1 duration-150"
            :href="$store.getters.LINKEDIN_PROFILE_URL"
            target="_blank"
            aria-label="linkedin url"
            rel="noreferrer">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>

          <a
            class="transition ease-in-out hover:scale-150 hover:-translate-y-1 duration-150"
            :href="$store.getters.GITHUB_PROFILE_URL"
            target="_blank"
            rel="noreferrer"
            aria-label="github url">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>

          <a
            class="transition ease-in-out hover:scale-150 hover:-translate-y-1 duration-150"
            :href="get_email"
            target="_blank"
            rel="noreferrer"
            aria-label="send email">
            <font-awesome-icon icon="envelope" />
          </a>

          <a
            class="transition ease-in-out hover:scale-150 hover:-translate-y-1 duration-150"
            href="/cv/es/portfolio.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="download cv"
            download>
            <font-awesome-icon :icon="['fas', 'file-lines']" />
          </a>
        </div>
      </div>
    </div>

    <div class="md:col-span-2 justify-self-center md:justify-self-end md:order-1">
      <h1 class="md:text-right text-4xl dark:text-white font-medium">Michel Suárez</h1>
      <p class="text-md mb-1 text-justify text-blue-800 dark:text-blue-200 max-w-xl mx-auto md:text-x md:text-right">
        <vue-typer
          :text='$t("profile_profession")'
          :repeat='Infinity'
          :shuffle='false'
          initial-action='typing'
          :pre-type-delay='70'
          :type-delay='70'
          :pre-erase-delay='2000'
          :erase-delay='250'
          erase-style='select-all'
          :erase-on-complete='false'
          caret-animation='blink'
        ></vue-typer>
      </p>
      <p class="text-sm text-justify text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl dark:text-white">
        {{ $t('profile_description') }}
      </p>
      <div class="flex mt-2 justify-center md:justify-end">
        <button class="btn-more bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                @click="updateActivePage(2)">
          <span class="mr-2">{{ $t('see_more') }}</span>
          <font-awesome-icon icon="arrow-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    activePage: Number,
  },
  computed: {
    get_email() {
      let subject = 'Oferta%20de%20trabajo';
      if (this.$i18n.locale === 'en') {
        subject = 'Work%20offer';
      }
      return 'mailto:' + this.$store.getters.EMAIL + '?Subject=' + subject;
    }
  },
  methods: {
    updateActivePage(page) {
      this.$emit('update:activePage', page);
    }
  },
}
</script>

<style>
.vue-typer .custom.char {
  color: #3b82f6;
  font-weight: bold;
}
.img-avatar {
  width: 250px;
  height: 250px;
}
.btn-more {
  margin-top: -15px;
}

@media only screen and (max-device-width: 640px) {
  .btn-more {
    margin-top: 0;
  }
}
</style>
