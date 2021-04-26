/**
 * Ducks 패턴을 사용하여
 *  1. 액션 타입
 *  2. 액션 생성 함수
 *  3. 리듀서
 * 를 작성한 코드를 '모듈'이라고 한다.
 */

/**
 * 액션 타입 정의 (대문자)
 * 문자열 내용: 모듈 이름 / 액션 이름
 */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return { state };
  }
}

export default counter;
