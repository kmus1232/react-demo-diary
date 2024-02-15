export const getStringDate = (date) => {
  // 로컬 시간대의 오프셋을 분 단위로 계산합니다.
  const offset = date.getTimezoneOffset();
  // 새로운 Date 객체를 생성하여 로컬 시간대의 오프셋을 적용합니다.
  const localDate = new Date(date.getTime() - offset * 60000);
  // ISO 스트링 형식으로 변환한 후, 날짜 부분만 추출합니다.
  return localDate.toISOString().slice(0, 10);
};
