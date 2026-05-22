# 미니멀 감성 사진 다이어리 & 아카이브 - 개발 계획

## 프로젝트 개요
React(Vite) + Tailwind CSS + framer-motion을 사용한 미니멀 감성 사진 다이어리 웹사이트

## 환경 설정
- **빌드 도구**: Vite
- **프레임워크**: React
- **스타일링**: Tailwind CSS
- **애니메이션**: framer-motion
- **아이콘**: lucide-react (예정)

## 요구사항 정리

### 레이아웃
- **PC (md 이상)**: 좌우 2분할 flex-row
  - 좌측: 7열 달력 그리드 (전체 월 표시)
  - 우측: 선택 날짜 상세 기록/작성 창
- **모바일/태블릿 (md 미만)**: 상하 배치 flex-col
  - 상단: 달력
  - 하단: 상세 창

### 달력 기능
- 7열 그리드 (월~일 한국어)
- 상단에 `[ < ] YYYY년 M월 [ > ]` 이동 버튼
- 데이터 존재 날짜: 이미지 썸네일 배경 표시
- 오늘 날짜 하이라이트
- 날짜 클릭 시 우측 상세 창에 데이터 로드

### 상세 입력창 (우측)
- 이미지: Unsplash URL 입력 필드 + 미리보기
- 카테고리: `[🎬 영화, 📚 책, ✈️ 여행, ☕ 일상]` 버튼 그룹
- 제목 입력창
- 한 줄 감상평 입력창
- 5성점(★) 클릭 가능 별점 컴포넌트
- 저장 버튼

### 데이터 구조
```javascript
// Key: 날짜 문자열 'YYYY-MM-DD'
// Value: 객체
{
  "2026-05-22": {
    id: "2026-05-22",
    date: "2026-05-22",
    imageUrl: "https://images.unsplash.com/...",
    category: "일상", // 영화 | 책 | 여행 | 일상
    title: "...",
    review: "...",
    rating: 4 // 1~5
  }
}
```

### 상태 관리
- React `useState` + Props Drilling 방식
- localStorage 연동 (데이터 persist)
  - `diary-data` 키로 저장
  - 앱 마운트 시 localStorage에서 로드
  - 데이터 변경 시 localStorage에 저장

### Mock Data
- **2026-05-22 (오늘)**: 카페 일상 데이터
- **2026-05-21 (어제)**: 영화 관람 데이터

### 디자인 감성
- Notion / Pinterest 스타일 무채색 중심
- 배경: 회색 톤 (bg-gray-50 또는 bg-neutral-50)
- 텍스트: 어두운 회색 (text-gray-800)
- 구분선: 연한 회색 (border-gray-200)
- 카드: 흰색 + subtle 그림자
- framer-motion: 페이지 전환, 카드 호버, 달력 날짜 선택 시 부드러운 애니메이션

## 컴포넌트 구조
```
src/
├── components/
│   ├── Calendar/
│   │   ├── CalendarHeader.jsx    // 월 이동 + 타이틀
│   │   ├── CalendarGrid.jsx      // 7열 그리드
│   │   └── CalendarDay.jsx       // 개별 날짜 셀
│   ├── DetailView/
│   │   ├── ImageInput.jsx        // Unsplash URL 입력 + 미리보기
│   │   ├── CategorySelect.jsx    // 카테고리 버튼 그룹
│   │   ├── StarRating.jsx        // 5성점 별점
│   │   └── DiaryForm.jsx         // 전체 폼 (제목, 감상평, 저장)
│   └── Layout/
│       └── SplitLayout.jsx       // 반응형 좌우/상하 레이아웃
├── hooks/
│   └── useDiaryStorage.js        // localStorage CRUD 훅
├── utils/
│   └── dateUtils.js              // 날짜 계산 헬퍼
├── data/
│   └── mockData.js               // 초기 Mock 데이터
└── App.jsx
```

## 구현 순서
1. Vite 프로젝트 초기화 + 의존성 설치
2. Tailwind CSS 설정
3. Mock 데이터 및 localStorage 훅 구현
4. 달력 컴포넌트 개발
5. 상세 입력창 컴포넌트 개발
6. App.jsx 조합 및 레이아웃
7. framer-motion 애니메이션 추가
8. 반응형 및 스타일 다듬기

## 참고
- 오늘 날짜: 2026-05-22
- 달력 시작 요일: 월요일
