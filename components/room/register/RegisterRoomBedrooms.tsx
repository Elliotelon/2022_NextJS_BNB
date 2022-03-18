import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import palette from "../../../styles/palette";
import { useSelector } from "../../../store";
import { registerRoomActions } from "../../../store/registerRoom";
import Counter from "../../common/Counter";
import { getNumber } from "../../../lib/utils";
import Selector from "../../common/Selector";
import { bedroomCountList } from "../../../lib/staticData";

const Container = styled.div`
  padding: 62px 30px 100px;
  h2 {
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 56px;
  }
  h3 {
    font-size: 14px;
    font-weight: bold;
    color: ${palette.gray_76};
    margin-bottom: 6px;
  }

  .register-room-step-info {
    font-size: 14px;
    max-width: 400px;
    margin-bottom: 24px;
    max-width: 400px;
    word-break: keep-all;
  }
  .register-room-mamximum-guest-count-wrapper {
    width: 320px;
    margin-bottom: 32px;
  }
  .register-room-bedroom-count-wrapper {
    width: 320px;
    margin-bottom: 32px;
  }
  .register-room-bed-count-wrapper {
    width: 320px;
    margin-bottom: 50px;
  }
`;

const RegisterRoomBedroom: React.FC = () => {
  const dispatch = useDispatch();

  const maximumGuestCount = useSelector(
    (state) => state.registerRoom.maximumGuestCount
  );
  const bedroomCount = useSelector((state) => state.registerRoom.bedroomCount);
  const bedCount = useSelector((state) => state.registerRoom.bedCount);

  //* 최대 숙박 인원 변경시
  const onChangeMaximumGuestCount = (value: number) => {
    dispatch(registerRoomActions.setMaximumGuestCount(value));
  };

  //* 침실 갯수 변경시
  const onChangeBedroomCount = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(
      registerRoomActions.setBedroomCount(getNumber(event.target.value) || 0)
    );

  //* 침대 갯수 변경시
  const onChangeBedCount = (value: number) =>
    dispatch(registerRoomActions.setBedCount(value));

  return (
    <Container>
      <h2>숙소에 얼마나 많은 인원이 숙박할 수 있나요?</h2>
      <h3>2단계</h3>
      <p className="register-room-step-info">
        모든 게스트가 편안하게 숙박할 수 있도록 침대가 충분히 구비되어 있는지
        확인하세요.
      </p>
      <div className="register-room-mamximum-guest-count-wrapper">
        <Counter
          label="최대 숙박 인원"
          value={maximumGuestCount}
          onChange={onChangeMaximumGuestCount}
        />
      </div>
      <div className="register-room-bedroom-count-wrapper">
        <Selector
          type="register"
          value={`침실 ${bedroomCount}개`}
          onChange={onChangeBedroomCount}
          label="게스트가 사용할 수 있는 침실은 몇 개인가요?"
          options={bedroomCountList}
        />
      </div>
      <div className="register-room-bed-count-wrapper">
        <Counter label="침대" value={bedCount} onChange={onChangeBedCount} />
      </div>
    </Container>
  );
};

export default RegisterRoomBedroom;
