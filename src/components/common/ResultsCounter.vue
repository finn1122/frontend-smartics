<template>
  <div class="results-counter">
    <p>{{ customText || `Showing 1–${total} of ${total} results` }}</p>
  </div>
</template>

<script>
export default {
  name: 'ResultsCounter',
  props: {
    total: {
      type: Number,
      default: 0
    },
    customText: {
      type: String,
      default: ''
    }
  }
}
</script>