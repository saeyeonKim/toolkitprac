// src/redux/modules/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};
// 9~21번 줄에 action value, action creator, reducer가 하나로 합쳐짐.
const counterSlice = createSlice({
  //slice라는 api를 사용하면 사용가능
  name: "counter",
  initialState,
  reducers: {
    //reducers 부분은 reducer임과 동시에 action creator가 된다.
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    }, // 함수의 이름이 action value가 되고, state.number~부분을 통해 reducer에 로직과 action creator가 생성된다.

    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
// reducer에 로직이 추가할 때 마다 객체 안에 함수만 추가해주면 된다.
export default counterSlice.reducer;
