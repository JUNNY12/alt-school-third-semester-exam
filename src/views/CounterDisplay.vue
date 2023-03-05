<template>
  <div class="container">
    <div class="counter">
      <h1>Count: {{ value }}</h1>
      <div class="btnWrap">
        <button class="btn" @click="increment">+</button>
        <button class="btn" @click="decrement">-</button>
      </div>
      <input placeholder="set value" type="number" v-model="inputValue" @input="setValue(inputValue)" />
      <button class='reset' @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
import useCounter from '@/composables/useCounter';
import { computed, ref } from 'vue';

export default {
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter();
    const value = computed(() => count.value);
    const inputValue = ref('');

    return {
      count,
      increment,
      decrement,
      reset,
      value,
      inputValue,
      setValue,
    };
  },
};
</script>
