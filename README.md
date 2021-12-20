# 근처 맛집을 기록하는 웹앱

항상 느끼는 거지만 우리집 근처에는 맛집이 많이 없는거같다.
통상 6곳정도 배달주문을 하면 한곳정도는 괜찮은 정도랄까?
그래서 앞으로의 맛집에 대한 기록을 위해 음식의 카테고리 별로 기록을 할 수 있는
저장 웹앱을 만들어보려한다.

## 필요한 기능 기획리스트

- [x] 맛있었던 식당에 대한 정보를 기록(저장)할 수 있는 기록칸
- [ ] 기록된 식당의 정보를 카테고리별로 뷴류하여 볼 수 있는 리스트 페이지
- [ ] 선택된 식당의 상세정보를 볼 수 있는 디테일 페이지
- [ ] 무얼 먹어야 할지 모를때를 대비한 랜덤 음식 결과값 반환

## 초기 폴더트리 구성

```
├── components
│ ├── shared
├── assets
├── context
```

## 제작환경 라이브러리

1. swiper : 식당의 리스트를 캐로셀형식으로 표현하기 위함
2. eslint, prettier : 코드 가독성 및 에러방지
3. scss, classnames : css 라이브러리 및 활용도를 올리기 위한 classnames

## DB 구상

초기 로컬 스토리지로 구성할 예정이었으나 혹시나 모를 날아감에 대비하여
좀더 안전한 firebase의 DB를 이용할 예정

##
