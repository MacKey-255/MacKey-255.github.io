<template>
  <div class="mx-auto">
    <div class="sm:mt-8"></div>
    <div class="grid gap-x-10 gap-y-6 md:grid-cols-3 xl:grid-cols-2">
      <div class="md:col-span-2 xl:col-span-1">
        <!--Introduction-->
        <div class="lg:col-span-2 lg:w-full lg:max-w-7xl lg:gap-x-8">
          <div class="lg:pr-4">
            <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
              {{ $t('skills_title') }}
            </h1>
            <p class="mt-3 text-xl leading-8 text-gray-700 dark:text-gray-200">
              {{ $t('skills_subtitle') }}
            </p>
          </div>
        </div>

        <!--Expertises-->
        <bg-saturate class="mt-4 rounded overflow-hidden shadow-lg" v-for="item in expertises" v-bind:key="item.title">
          <div class="pl-3 pr-6 py-4 flex gap-x-3">
            <font-awesome-icon class="mt-1 h-5 w-5 flex-none text-blue-500" :icon="item.icon"/>
            <div>
              <div class="font-bold text-gray-900 dark:text-gray-200 text-xl mb-2">{{ $t(item.title) }}</div>
              <p class="text-gray-900 dark:text-gray-200 text-base">{{ $t(item.description) }}</p>
              <div class="pt-4">
                <span
                  v-for="tech in item.techs"
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </bg-saturate>
      </div>

      <div class="md:col-span-1">
        <!--Skills-->
        <div class="lg:col-span-2 lg:w-full md:max-w-lg lg:gap-x-8 lg:px-8 mb-6"
             v-for="skill in skills">
          <div class="lg:pr-4">
            <h1 class="md:mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
              {{ $t(skill.label) }}:
            </h1>
            <div class="flex flex-wrap mt-3 gap-2">
              <div v-for="item in skill.list" class="hover:scale-125 ease-in-out duration-150 mb-1">
                <!--span
                  class="pl-3 py-1.5
                   font-semibold text-sm bg-gray-300/[0.8] dark:bg-slate-600/[0.8] dark:text-white
                   rounded-l-md shadow-sm">
                  {{ item.label }}
                </span>
                <span
                  class="px-2 py-1.5
                   font-semibold text-sm bg-gray-400/[0.8] dark:bg-slate-400/[0.8] dark:text-white
                   rounded-r-md shadow-sm">
                  {{ item.xp }} {{ item.xp > 1 ? $t('years') : $t('year') }}
                </span-->
                <div class="has-tooltip flex justify-center">
                  <span class="tooltip px-3 py-1.5 font-semibold text-sm bg-gray-300 dark:bg-slate-600 dark:text-white rounded-md shadow-sm -mt-8">
                    {{item.label}}
                  </span>
                  <img :src="item.icon" :alt="item.label" class="tech-icon px-2 py-1">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Languages-->
        <div class="md:mt-8 mb-4 lg:col-span-2 lg:w-full md:max-w-lg lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <h1 class="md:mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
              {{ $t('skills_title_languages') }}:
            </h1>
            <div class="flex flex-wrap mt-3 gap-2">
              <div v-for="item in $t('skills_languages')">
                <span
                  class="pl-3 py-1.5
                   font-semibold text-sm bg-gray-300/[0.8] dark:bg-slate-600/[0.8] dark:text-white
                   rounded-l-md shadow-sm">
                  {{ item[0] }}
                </span>
                <span
                  class="px-2 py-1.5
                   font-semibold text-sm bg-gray-400/[0.8] dark:bg-slate-400/[0.8] dark:text-white
                   rounded-r-md shadow-sm">
                  {{ item[1] }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// FA Icons: https://fontawesome.com/icons/categories/coding
// Tech icons svg: https://worldvectorlogo.com/
import BgSaturate from "@/components/layout/BgSaturate";

export default {
  name: "Skills",
  components: {BgSaturate},
  data() {
    return {
      /* Expertise */
      expertises: [
        {
          icon: ['fas', 'tools'],
          title: 'skills_expertises_fullstack_title',
          description: 'skills_expertises_fullstack_description',
          techs: ['Python', 'Django', 'FastAPI', 'Javascript', 'Vue.js', 'Git', 'Docker', 'Linux'],
        },
        {
          icon: ['fas', 'code'],
          title: 'skills_expertises_engineer_title',
          description: 'skills_expertises_engineer_description',
          techs: ['Python', 'FastAPI', 'Web Scraping', 'C#', 'CLI', 'Docker', 'Git', 'Linux'],
        },
        {
          icon: ['fas', 'database'],
          title: 'skills_expertises_backend_title',
          description: 'skills_expertises_backend_description',
          techs: ['Python', 'Django', 'FastAPI', 'Docker', 'Git', 'Linux'],
        },
      ],
      /* Skills */
      skills: [
        {
          label: 'skills_title_technologies', list: [
            {label: 'Python', xp: '5', icon: '/icons/python-5.svg'},
            {label: 'Javascript', xp: '4', icon: '/icons/logo-javascript.svg'},
            {label: 'C#', xp: '2', icon: '/icons/c--4.svg'},
            {label: 'Java', xp: '2', icon: '/icons/java-14.svg'},
            {label: 'Django', xp: '4', icon: '/icons/django.svg'},
            {label: 'FastAPI', xp: '1', icon: '/icons/fastapi-1.svg'},
            {label: 'Vue.js', xp: '1', icon: '/icons/vue-js-1.svg'},
            {label: 'Bootstrap', xp: '3', icon: '/icons/bootstrap-4.svg'},
            {label: 'HTML', xp: '5', icon: '/icons/html-1.svg'},
            {label: 'CSS', xp: '5', icon: '/icons/css-3.svg'},
          ]
        },
        {
          label: 'skills_title_tools', list: [
            {label: 'Git', xp: '3', icon: '/icons/git-icon.svg'},
            {label: 'Docker', xp: '1', icon: '/icons/docker-4.svg'},
            {label: 'PostgreSQL', xp: '4', icon: '/icons/postgresql.svg'},
            {label: 'Redis', xp: '1', icon: '/icons/redis.svg'},
            {label: 'Debian', xp: '5', icon: '/icons/debian-2.svg'},
          ]
        },
      ],
    }
  },
}
</script>

<style scoped>
.tech-icon {
  height: 48px;
}
</style>
