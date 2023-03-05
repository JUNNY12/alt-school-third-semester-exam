export default {
    namespaced: true,
    state: {
      count: 0,
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
      },
      setValue(state, value) {
        const parsedValue = Number(value);
        if (!isNaN(parsedValue)) {
          state.count += parsedValue;
        }
      },
    },
  };
  