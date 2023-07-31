<template>
  <bg-saturate class="relative mb-4 flex rounded-xl text-gray-900 dark:text-gray-200 bg-clip-border shadow-lg">
    <div v-if="imageUrl" class="relative pl-2 md:pl-4 pt-2 md:pt-4 overflow-hidden">
      <img :src="imageUrl" alt="logo icon" class="my-auto rounded-xl" :class="imageClass"/>
    </div>
    <div class="p-2 md:p-4">
      <div class="flex items-center justify-between">
        <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal antialiased" v-html="title"></h5>
      </div>
      <a v-if="url" :href="url" class="text-blue-500 mb-1" target="_blank" rel="noreferrer" v-html="extra"></a>
      <p v-else class="mb-1" v-html="extra"></p>
      <p class="mb-3">{{ date_representation }}</p>
      <div class="block font-sans text-base font-light leading-relaxed antialiased">
        <ul class="list-disc sm:list-inside">
          <li v-for="item in description" v-html="item"></li>
        </ul>
      </div>
      <div class="group mt-4 inline-flex flex-wrap items-center gap-3">
        <span v-for="tech in technologies"
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {{ tech }}
        </span>
      </div>
    </div>
  </bg-saturate>
</template>

<script>
import BgSaturate from "@/components/layout/BgSaturate";

export default {
  name: "Card",
  props: {
    title: String,
    description: Array,
    imageUrl: {
      type: [String, undefined],
      default: undefined
    },
    imageClass: {
      type: [String, undefined],
      default: undefined
    },
    extra: {
      type: [String, undefined],
      default: undefined
    },
    url: {
      type: [String, undefined],
      default: undefined
    },
    startDate: String,
    endDate: String,
    technologies: {
      type: Array,
      default: []
    },
  },
  components: {BgSaturate},
  computed: {
    date_representation() {
      if (this.endDate && this.endDate.length) {
        return `${this.startDate} - ${this.endDate}`;
      }
      return this.startDate;
    }
  }
}
</script>

<style scoped>

</style>
