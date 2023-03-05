<template>
  <div class="container">
    <div class="counter">
      <h1>Count: {{ value }}</h1>
      <div class="btnWrap">
        <button class="btn" @click="increment">+</button>
        <button class="btn" @click="decrement">-</button>
      </div>
      <form @submit.prevent="submitValue">
        <input placeholder="set value ..." type="number" v-model="inputValue" />
        <button class='submit' type="submit">Set</button>
      </form>
      <button class='reset' @click="resetValues">Reset</button>
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

    const submitValue = () => {
      setValue(inputValue.value);
      inputValue.value = '';
    }

    const resetValues = () => {
      reset();
      inputValue.value = '';
    }

    return {
      count,
      increment,
      decrement,
      reset,
      value,
      inputValue,
      submitValue,
      resetValues,
    };
  },
};
</script>
