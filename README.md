# react-bucketplace

## 실행 방법
### 프로젝트 빌드 및 실행
1. 아래 명령어를 입력해 프로젝트를 설치한다.
```
$npm install
```

2. 아래 명령어를 입력해 앱을 실행한다.
```
$npm start
```

## 기술 스택 및 선정 이유
### Create React App
가장 빠르게 앱을 만들 수 있기 때문에 선정했습니다.
Babel 이나 Webpack 등의 Build 도구를 특별한 설정 없이 사용할 수 있고, 환경 셋팅에 많은 부분 할애하지 않아도 되기 때문에
주어진 시간 내에 개발하기 적합하다고 판단해 사용했습니다.

### [Material UI](https://mui.com/)
구현해야 하는 레이아웃인 카트 목록과 총 결제 금액 부분이 2단으로 구성되어 있어 UI 라이브러리를 활용해 Grid로 화면을 구성해야 겠다는 생각이 들었습니다.
리액트 기반의 UI 라이브러리를 써본 적이 없어서 어떤 걸 써야할까 찾아보고 고민한 결과, Material UI를 선정하게 되었습니다.
이유는 다음과 같습니다. 

#### 1. Vuetify와 사용 방법이 비슷
저는 Vue.js와 Material UI 기반의 UI 프레임워크인 Vueitfy로만 프론트엔드 개발을 해왔습니다. 
그렇기 때문에 Material Design 기반의 UI에 굉장히 익숙하고, Material UI의 공식 문서를 보니 사용 방법이 비슷해 금방 적용할 수 있을 거라는 판단이 들었습니다.

#### 2. 가장 많이 사용하고 있는 라이브러리
리액트 기반의 여러 가지 UI 라이브러리들이 있지만 Material UI가 가장 많이 사용되고 있었고, 그만큼 자료를 찾는 것도 쉬울 거라는 생각이 들었습니다.

### Redux
컴포넌트 단위로 화면을 구성하면서 Depth가 조금 깊어지다 보니 체크박스 기능과 결제 금액을 계산해 전달하는 것이 복잡하겠다는 생각이 들었습니다.
그래서 상태관리의 필요성을 느꼈고, Context API 와 Redux 둘 중 고민하다가 Redux 를 선택하게 되었습니다. 제가 선택한 이유는 `Vuex에 익숙`했기 때문입니다.
사실 많은 사람들이 Redux가 어렵다고 해서 괜히 사용하다가 기한 내에 구현을 못하지 않을까 걱정했었습니다.
그렇지만 Vuex가 Redux에서 영감을 받아 만들어진 만큼 맥락이나 개념 등이 비슷할 거라는 생각이 들었습니다.

그래서 실제 리액트 프로젝트에 적용한 사례를 참고해 Redux 를 구현하였고, 다음과 같은 경우 리듀서를 통해 상태관리할 수 있도록 만들었습니다.

- SET_SELECTED_ALL: 카트 내 상품 전체 선택 시 카트 목록(`selectedAll`) 및 각각의 상품들의 선택 여부(`checked`) 업데이트
- CHANGE_OPTION: 카트 내 상품 부분 선택 시 해당 상품의 옵션 property 업데이트
- SET_CART_LIST: API를 통해 받은 카트 목록을 스토어에 저장
- UPDATE_CART_LIST: 카트 목록 중 일부 상품 정보가 변경된 경우 업데이트

## 아쉬운 부분
### 1. CSS 관련된 부분을 많이 Customize하지 못함
[MUI-How to Customize](https://mui.com/customization/how-to-customize/#overriding-styles-with-class-names) 를 참고해 
공통으로 적용할 CSS 요소들을 커스텀하고 싶었지만 하지 못했습니다. 몇 개의 컴포넌트에
[스타일을 오버라이드](https://mui.com/customization/how-to-customize/#overriding-styles-with-class-names) 해
재정의해서 사용하는 부분들이 있긴 하지만, 중복되는 CSS 요소 (ex. `letterSpacing`) 가 있어 한번 더 추상화해서 사용했으면 좋았을 것 같다는 생각이 들었습니다.

```js
const DefaultTypography = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
  letterSpacing: '-0.3px',
}));

const BoldTypography = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: 16,
  lineHeight: '20px',
  letterSpacing: '-0.3px',
}));
```

### 2. 반응형 웹 미구현
Material UI 라이브러리를 사용해서 반응형으로 웹을 만들 수 있었는데, 구현하지 못해 아쉬웠습니다.

### 3. 카트 내 상품 및 옵션 삭제 기능 미구현
카트 내 상품 및 옵션 삭제 기능을 구현하지 못해서 아쉬웠습니다. 
요구사항에 없는 내용이긴 하지만 Redux로 카트 상태관리 리듀서들을 구현했기 때문에 이를 활용해서 다음과 같이 만들어 볼 수 있을 것 같습니다.

#### Case 1) 상품 삭제
1. Redux cart 모듈에 삭제 액션 타입 및 삭제할 상품의 id 를 파라미터로 받는 함수 선언
2. 상품 삭제 리듀서 생성
   1. 파라미터로 받은 상품의 id로 해당 상품의 인덱스를 찾는다.
   2. 찾은 인덱스의 object를 cartList 배열에서 제거한다.

#### Case 2) 옵션 삭제
1. Redux cart 모듈에 옵션 삭제 액션 타입 및 삭제할 옵션의 id 를 파라미터로 받는 함수 선언
2. 옵션 삭제 리듀서 생성
   1. 파라미터로 받은 옵션의 id로 해당 상품과 옵션 정보를 찾는다.
   2. 해당 상품의 옵션 정보에서 매칭되는 옵션을 제거한다.
