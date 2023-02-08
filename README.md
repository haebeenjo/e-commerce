# e-commerce 사이트 제작

---

### 프로젝트명 : 일아쌰이마쎄 (いらっしゃいませ)

- 프로젝트 기간 : 2023.02.01 ~ 2023.02.08 (8일)
- 내일배움캠프 Node.js A반 1조의 숫자 **1** 을 언어유희적으로 접근하여
  다양한 분야에서 **일**하는 사람들을 위한 e-commerce 쇼핑몰을 제작하게 되었습니다.
  <br/>

  |  멤버  |                                 역할                                 |
  | :----: | :------------------------------------------------------------------: |
  | 조해빈 |         상품등록 / 상품관리 / 이미지 업로드 / 실시간 채팅 /          |
  | 조봉진 |             회원가입 / 로그인 / 로그아웃 / 회원정보수정              |
  | 김정민 |           장바구니 / 주문하기 / 주문내역조회 / 포인트차감            |
  | 김형섭 | 전체 상품 목록 조회 / 카테고리 목록 조회 / 페이지네이션 / 상세페이지 |
  | 한정훈 |       주문조회 / 주문상태 업데이트 / 회원관리 / 블랙리스트지정       |

<br/>

### 개발 환경

<br/>
<div align="center">
  <p style="font-size:20px;">📚Tech Stack📚</p>
  <p>⭐ Platforms & Languages ⭐</p>
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
	<img src="https://img.shields.io/badge/JavaScript-f7df1e?style=flat&logo=JavaScript&logoColor=white" />
	<img src="https://img.shields.io/badge/jQuery-0769ad?style=flat&logo=jQuery&logoColor=white" />
	<img src="https://img.shields.io/badge/.env-ecd53f?style=flat&logo=.env&logoColor=white" />
  <br/>
	<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white" />
	<img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white" />
	<img src="https://img.shields.io/badge/MySQL-4479a1?style=flat&logo=.env&logoColor=white" />
	<img src="https://img.shields.io/badge/Sequelize-52b0e7?style=flat&logo=Sequelize&logoColor=white" />
	<img src="https://img.shields.io/badge/Socket.io-010101?style=flat&logo=Socket.io&logoColor=white" />
	<img src="https://img.shields.io/badge/JSON-000000?style=flat&logo=JSON&logoColor=white" />
  <br/>
  <br/>
  <p>🛠 Tools 🛠</p>
	<img src="https://img.shields.io/badge/Visual Studio Code-007acc?style=flat&logo=Visual Studio Code&logoColor=white" />
	<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&181717=white" />
	<img src="https://img.shields.io/badge/slack-4a154b?style=flat&logo=slack&4a154b=white" />
	<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&4a154b=white" />
</div>
<br/><br/>

### Installation

```
 $ npm install
```

### Running the app

```
# .dnv 파일 생성 (port, host, password, secret_key 작성)
# touch .env

# mysql database 생성
$ npx sequelize db:create

# mysql database table 생성
$ npx sequelize db:migrate

# 서버 실행
$ node app.js
```

### 시연 영상

[유튜브 시연영상](https://youtu.be/hKy79Qv50L0)

### API

[API 명세서 링크](https://www.notion.so/5ee76c8814964f78944d1ba048f1bbe8?v=12001c38685144c18bff06fae92e56f1)

<img src="./public/images/API 명세서.png" style="width:100%" />
