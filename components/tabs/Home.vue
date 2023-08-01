<template>
  <div class="flex items-center mx-auto">
    <div class="grid gap-x-10 md:grid-cols-3 mt-2">
      <div class="md:col-span-1 justify-self-center md:justify-self-start md:order-2">
        <div class="mb-4">
          <img
            src="/profile.jpg"
            class="img-avatar rounded-t-xl justify-self-center"
            alt="Avatar"/>
          <div
            class="flex justify-center gap-4 p-2 rounded-b-lg bg-gray-300/[0.8] text-gray-800 dark:text-gray-200 dark:bg-slate-600/[0.8] shadow-lg">
            <a class="transition ease-in-out hover:scale-150 hover:-translate-y-1 duration-150"
               :href="linkedin_url"
               target="_blank"
               aria-label="linkedin url"
               rel="noreferrer">
              <font-awesome-icon :icon="['fab', 'linkedin']"/>
            </a>

            <a class="transition ease-in-out hover:scale-150 hover:-translate-y-1 duration-150"
               :href="github_url"
               target="_blank"
               rel="noreferrer"
               aria-label="github url">
              <font-awesome-icon :icon="['fab', 'github']"/>
            </a>

            <a class="transition ease-in-out hover:scale-150 hover:-translate-y-1 duration-150"
               :href="email"
               target="_blank"
               rel="noreferrer"
               aria-label="send email">
              <font-awesome-icon icon="envelope"/>
            </a>
          </div>
        </div>
      </div>

      <div class="md:col-span-2 justify-self-center md:justify-self-start md:order-1">
        <bg-saturate class="p-4 md:p-6 rounded-xl">
          <h1 class="text-4xl dark:text-white font-medium">{{ full_name }}</h1>
          <p class="text-md mb-2 text-justify text-blue-800 dark:text-blue-200 max-w-xl mx-auto">
            <vue-typer
              :text='profile_professions'
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
          <p class="text-xl sm:text-justify text-gray-800 dark:text-gray-200 max-w-xl mx-auto dark:text-white">
            {{ description }}
          </p>
        </bg-saturate>
        <div class="flex mt-2 justify-center md:justify-end">
          <a class="btn-more mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
             href="/cv/es/portfolio.pdf"
             target="_blank"
             rel="noreferrer"
             aria-label="download cv"
             download>
            <span class="mr-1">{{ $t('download_cv') }}</span>
            <font-awesome-icon icon="download"/>
          </a>
          <button class="btn-more bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  @click="SET_PAGE(2)">
            <span class="mr-2">{{ $t('see_more') }}</span>
            <font-awesome-icon icon="arrow-right"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import BgSaturate from "@/components/layout/BgSaturate";
import {contact, profile} from "@/store/resume.data";

export default {
  name: "Home",
  components: {BgSaturate},
  computed: {
    full_name() {
      return `${profile.name} ${profile.last_name}`;
    },
    description() {
      return profile.description[this.$i18n.locale];
    },
    profile_professions() {
      return profile.professions[this.$i18n.locale];
    },
    email() {
      let subject = 'Oferta%20de%20trabajo';
      if (this.$i18n.locale === 'en') {
        subject = 'Job%20offer';
      }
      return 'mailto:' + contact.email + '?Subject=' + subject;
    },
    github_url() {
      return contact.github_profile;
    },
    linkedin_url() {
      return contact.linkedin_profile + '?locale=' + (this.$i18n.locale === 'en' ? 'en_US' : 'es_ES');
    },
  },
  methods: {
    ...mapMutations(["SET_PAGE"]),
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
}

.btn-more {
  margin-top: -35px;
  z-index: 1;
}

@media only screen and (max-device-width: 1030px) {
  .btn-more {
    margin-top: 0;
  }
}
</style>
