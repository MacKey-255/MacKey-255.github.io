<template>
  <div class="mx-auto">
    <div class="sm:mt-8"></div>
    <div class="grid gap-x-10 md:gap-y-6 md:grid-cols-2">
      <div class="md:col-span-1 lg:w-full lg:max-w-7xl lg:gap-x-8">
        <div class="mb-4 ">
          <h1 class="mt-2 mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
            {{ $t('project_education_title') }}:
          </h1>
          <Card v-for="item in educations" v-bind:key="item.title"
                image-class="img-education"
                :title="item.title" :description="item.description"
                :extra="item.institution"
                :image-url="item.image"
                :url="item.link"
                :technologies="item.techs"
                :end-date="item.endDate"
                :start-date="item.startDate"/>
        </div>
        <div class="mb-4">
          <h1 class="my-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
            {{ $t('project_work_title') }}:
          </h1>
          <Card v-for="item in works" v-bind:key="item.title"
                image-class="img-education"
                :title="item.title" :description="item.description"
                :extra="item.company"
                :image-url="item.image"
                :url="item.link"
                :technologies="item.techs"
                :end-date="item.endDate"
                :start-date="item.startDate"/>
        </div>
      </div>

      <div class="md:col-span-1">
        <h1 class="my-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
          {{ $t('project_title') }}:
        </h1>
        <ol class="border-l-2 border-blue-300 dark:border-blue-500 text-gray-900 dark:text-gray-200">
          <li v-for="item in projects" v-bind:key="item.id">
            <bg-saturate class="rounded-r-lg">
              <div class="flex-start items-center flex flex-wrap pt-3">
                <div class="-ml-[8px] h-[16px] w-[16px] rounded-full bg-blue-300 dark:bg-blue-500"></div>
                <p class="text-sm ml-2">{{ item.date }}</p>
                <span v-for="item in item.language"
                      class="inline-block ml-2 mb-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {{ item }}
                </span>
              </div>
              <div class="mb-6 px-4 mt-2 pb-3">
                <client-only placeholder="Loading...">
                  <h4 class="pb-1.5 text-xl font-semibold">
                    <span>{{ item.title }}</span>
                  </h4>
                  <p class="pb-3" v-html="item.description"></p>

                  <div class="group inline-flex flex-wrap items-center gap-3" v-if="item.images.length > 0 || item.url">
                    <button
                      v-if="item.images.length > 0"
                      @click="open_gallery('project_' + item.id)"
                      type="button"
                      class="inline-block rounded bg-blue-500 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      {{ $t('preview') }}
                    </button>
                    <a
                      v-if="item.url"
                      target="_blank"
                      rel="noreferrer"
                      :href="item.url"
                      type="button"
                      class="inline-block rounded bg-blue-500 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase
                      leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out
                      hover:bg-info-600 focus:bg-info-600 focus:outline-none focus:ring-0 active:bg-info-700
                      hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]
                      focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]
                      active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]
                      dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)]
                      dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]
                      dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]
                      dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                    >
                      <span class="mr-2">{{ $t('project_link') }}</span>
                      <font-awesome-icon class="text-xs font-norma" :icon="['fas', 'external-link']"/>
                    </a>
                    <fancy-box :ref="'project_' + item.id">
                      <span :data-fancybox="item.id" v-for="img in item.images" :data-src="img"></span>
                    </fancy-box>
                  </div>
                </client-only>
              </div>
            </bg-saturate>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/utils/Card";
import FancyBox from "@/components/utils/FancyBox";
import BgSaturate from "@/components/layout/BgSaturate";
import {education, project, work} from "@/store/resume.data";

export default {
  name: "Portfolio",
  components: {Card, FancyBox, BgSaturate},
  data() {
    return {
      /* Data */
      project,
      education,
      work,
    }
  },
  computed: {
    projects() {
      return this.project[this.$i18n.locale].map((value) => {
        return {
          ...value,
          date: this.dateToString(new Date(value.date)),
        };
      }).sort((a, b) => b.id - a.id);
    },
    educations() {
      return this.education[this.$i18n.locale].map((value) => {
        const startDate = new Date(value.startDate),
          endDate = value.endDate === undefined ? undefined : new Date(value.endDate);
        return {
          ...value,
          startDate: this.dateToString(startDate),
          endDate: this.isSameDate(startDate, endDate) ? undefined : this.dateToString(endDate),
        };
      });
    },
    works() {
      return this.work[this.$i18n.locale].map((value) => {
        const startDate = new Date(value.startDate),
          endDate = value.endDate === undefined ? undefined : new Date(value.endDate);
        return {
          ...value,
          startDate: this.dateToString(startDate),
          endDate: this.isSameDate(startDate, endDate) ? undefined : this.dateToString(endDate),
        };
      });
    },
  },
  methods: {
    open_gallery(id) {
      const element = this.$refs[id][0];
      if (!element) {
        return;
      }
      element.click();
    },
    dateToString(date) {
      if (date === undefined) {
        return this.$t('present');
      }
      return `${this.$t('months')[date.getMonth()]} ${date.getFullYear()}`;
    },
    isSameDate(first, second) {
      if (first === undefined || second === undefined) {
        return false;
      }
      return first.getMonth() === second.getMonth() && first.getFullYear() === second.getFullYear();
    }
  }
}
</script>

<style>
.img-education {
  width: 128px;
}
</style>
