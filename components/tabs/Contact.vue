<template>
  <div class="mx-auto">
    <div class="sm:mt-8"></div>
    <div class="grid gap-x-10 md:gap-y-6 md:grid-cols-2">
      <div class="md:col-span-1 md:px-6 py-3">
        <!--Introduction-->
        <div class="mb-4 lg:col-span-2 lg:w-full lg:max-w-7xl lg:gap-x-8">
          <div class="lg:pr-4">
            <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
              {{ $t('contact_title') }}
            </h1>
            <p class="mt-3 text-xl leading-8 text-gray-700 dark:text-gray-200">
              {{ $t('contact_subtitle') }}
            </p>
          </div>
        </div>

        <!-- LinkedIn -->
        <div class="md:pr-6 py-2 flex gap-x-3">
          <font-awesome-icon class="my-auto md:mx-2 flex-none contact-icon text-gray-800 dark:text-gray-300"
                             :icon="['fab', 'linkedin']"/>
          <div>
            <div class="font-bold text-gray-900 dark:text-gray-200 text-xl mb-1">
              {{ $t('contact_linkedin_profile') }}
            </div>
            <a :href="linkedin_url"
               class="font-bold text-blue-500 text-xl mb-2"
               target="_blank"
               rel="noreferrer"
               aria-label="linkedin url">
              {{ $store.getters.LINKEDIN_PROFILE_URL }}
            </a>
          </div>
        </div>

        <!-- Github -->
        <div class="md:pr-6 py-2 flex gap-x-3">
          <font-awesome-icon class="my-auto md:mx-2 flex-none contact-icon text-gray-800 dark:text-gray-300"
                             :icon="['fab', 'github']"/>
          <div>
            <div class="font-bold text-gray-900 dark:text-gray-200 text-xl mb-1">
              {{ $t('contact_github_profile') }}
            </div>
            <a :href="$store.getters.GITHUB_PROFILE_URL" class="font-bold text-blue-500 text-xl mb-2"
               target="_blank"
               rel="noreferrer"
               aria-label="github url">
              {{ $store.getters.GITHUB_PROFILE_URL }}
            </a>
          </div>
        </div>

        <!-- Phone -->
        <div class="md:pr-6 py-2 flex gap-x-3">
          <font-awesome-icon class="my-auto md:mx-2 flex-none contact-icon text-gray-800 dark:text-gray-300"
                             :icon="['fas', 'phone']"/>
          <div>
            <div class="font-bold text-gray-900 dark:text-gray-200 text-xl mb-1">
              {{ $t('contact_phone') }}
            </div>
            <a :href="tel_phone" class="font-bold text-blue-500 text-xl mb-2">
              {{ phone }}
            </a>
          </div>
        </div>

        <!-- Email -->
        <div class="md:pr-6 py-2 flex gap-x-3">
          <font-awesome-icon class="my-auto md:mx-2 flex-none contact-icon text-gray-800 dark:text-gray-300"
                             :icon="['fas', 'envelope']"/>
          <div>
            <div class="font-bold text-gray-900 dark:text-gray-200 text-xl mb-1">
              {{ $t('contact_email') }}
            </div>
            <a :href="email" class="font-bold text-blue-500 text-xl mb-2"
               target="_blank"
               rel="noreferrer"
               aria-label="email url">
              {{ $store.getters.EMAIL }}
            </a>
          </div>
        </div>
      </div>

      <div class="md:col-span-1 md:px-6 py-3">
        <div class="mb-4 lg:col-span-2 lg:w-full lg:max-w-7xl lg:gap-x-8">
          <div class="lg:pr-4">
            <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
              {{ $t('contact_form') }}:
            </h1>
          </div>
        </div>
        <div class="w-full flex">
          <form class="w-full xl:w-4/5 flex flex-col gap-4 justify-center items-center" @submit.prevent="send_email">
            <div class="w-full flex flex-col md:flex-row gap-4">
              <div class="w-full md:w-6/12 flex flex-col">
                <label class="mb-2 text-gray dark:text-white" for="name">{{ $t('contact_email_name') }}</label>
                <input required=""
                       title="Name"
                       name="name"
                       :placeholder="$t('contact_email_name_placeholder')"
                       v-model="form.name"
                       class="p-2 text-gray border-solid border-slate-200 dark:border-gray-700 border
                        rounded bg-white dark:text-white dark:bg-gray-800 focus:outline outline-blue-500 outline-2
                         focus:border-blue-500">
              </div>
              <div class="w-full md:w-6/12 flex flex-col">
                <label class="mb-2 text-gray dark:text-white" for="email">{{ $t('contact_email') }}</label>
                <input required=""
                       title="Email"
                       type="email"
                       name="email"
                       placeholder="me@mail.com"
                       v-model="form.email"
                       class="p-2 text-gray border-solid border-slate-200 dark:border-gray-700 border
                        rounded bg-white dark:text-white dark:bg-gray-800 focus:outline outline-blue-500 outline-2
                         focus:border-blue-500">
              </div>
            </div>
            <div class="w-full flex flex-col">
              <label class="mb-2 text-gray dark:text-white" for="message">{{ $t('contact_email_message') }}</label>
              <textarea name="message"
                        required=""
                        rows="5"
                        :placeholder="$t('contact_email_message_placeholder')"
                        v-model="form.message"
                        class="resize-none p-2 text-gray border-solid border-slate-200 dark:border-gray-700 border
                         rounded bg-white dark:text-white dark:bg-gray-800 focus:outline outline-blue-500 outline-2
                          focus:border-blue-500"></textarea>
            </div>

            <div class="flex items-center rounded-full bg-teal-200 text-teal-900 text-sm font-bold px-4 py-3"
                 role="alert" v-if="sending">
              <font-awesome-icon class="text-teal-500 text-lg mr-2" :icon="['fas', 'check']"/>
              <p>{{$t('contact_email_sent')}}</p>
            </div>
            <div class="flex items-center rounded-full bg-red-200 text-red-900 text-sm font-bold px-4 py-3"
                 role="alert" v-if="error">
              <font-awesome-icon class="text-red-500 text-md mr-2" :icon="['fas', 'x']"/>
              <p>{{$t('contact_email_sent_error')}}</p>
            </div>

            <div class="w-full">
              <button class="bg-blue-500 w-100 block text-white p-2 w-full rounded-lg">
                {{ $t('contact_email_send') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: "Contact",
  data() {
    return {
      phone: '+34 604256897',
      form: {
        name: '',
        email: '',
        message: '',
      },
      sending: false,
      error: false,
    }
  },
  computed: {
    tel_phone() {
      return 'tel:' + this.phone;
    },
    linkedin_url() {
      return this.$store.getters.LINKEDIN_PROFILE_URL + '?locale=' + (this.$i18n.locale === 'en' ? 'en_US' : 'es_ES');
    },
    email() {
      let subject = 'Oferta%20de%20trabajo';
      if (this.$i18n.locale === 'en') {
        subject = 'Work%20offer';
      }
      return 'mailto:' + this.$store.getters.EMAIL + '?Subject=' + subject;
    }
  },
  methods: {
    send_email() {
      emailjs.send('portfolio', 'template_portfolio', {
        user_name: this.form.name, user_email: this.form.email, message: this.form.message
      }, 'u0e_FkHOlD75wLr8g')
      .then((_) => {
        this.sending = true;
        this.clear_email();
        setTimeout(() => {this.sending = false}, 5000);
      }, (_) => {
        this.error = true;
        this.clear_email();
        setTimeout(() => {this.error = false}, 5000);
      });
    },
    clear_email() {
      this.form = {
        name: '',
        email: '',
        message: '',
      };
    }
  }
}
</script>

<style scoped>
.contact-icon {
  font-size: 32px;
}
</style>
