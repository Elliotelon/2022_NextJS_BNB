import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RegisterRoomState = {
  largeBuildingType: string | null;
  buildingType: string | null;
  roomType: string | null;
  isSetUpForGuest: boolean | null;
};

//* 초기상태
const initialState: RegisterRoomState = {
  //*건물유형 큰 범주
  largeBuildingType: null,
  //*건물 유형
  buildingType: null,
  //*숙소 유형
  roomType: null,
  //*게스트만을 위해 만들어진 숙소인가
  isSetUpForGuest: null,
};

const registerRoom = createSlice({
  name: "registerRoom",
  initialState,
  reducers: {
    //* 큰 건물 유형 변경하기
    setLargeBuildingType(state, action: PayloadAction<string>) {
      if (action.payload === "") {
        state.largeBuildingType = null;
      }
      state.largeBuildingType = action.payload;
      return state;
    },
    //* 건물 유형 변경하기
    setBuildingType(state, action: PayloadAction<string>) {
      if (action.payload === "") {
        state.buildingType = null;
      }
      state.buildingType = action.payload;
      return state;
    },
  },
});

export const registerRoomActions = { ...registerRoom.actions };

export default registerRoom;
