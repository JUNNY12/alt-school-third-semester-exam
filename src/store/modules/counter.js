export default {
    namespaced: true,
    state: {
      count: 0,
      inputValue: ''
    },
    mutations: {
      increment(state) {
        state.count++;
      },
      decrement(state) {
        state.count--;
      },
      reset(state) {
        state.count = 0;
        state.inputValue = '';
      },
      setValue(state, value) {
        const parsedValue = Number(value);
        if (!isNaN(parsedValue)) {
          state.count += parsedValue;
        }
        state.inputValue = '';
      },
    },
  };
  