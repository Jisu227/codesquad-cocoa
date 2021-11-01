## 2021.11.02 (화요일)
### *📝 debugging 이란?*

=> ‘디버깅’이라는 용어는 여러 다양한 것을 의미할 수 있지만 대부분의 경우 코드에서 버그를 제거하는 것을
    의미한다. 즉, 오동작되는 현상을 해결하는 것을 말하며 오류들을 찾아내기 위한 테스트 과정을 의미한다.
###### VScode 디버거 인터페이스 알아보기
    디버깅을 시작하면 vscode에서 아래와 같은 요소들이 제공된다. 해당 요소들을 이용해서 코드 실행을 제어하고 
    디버깅 결과를 확인할 수 있다.

<img width="900" alt="스크린샷 2021-11-02 오전 3 12 45" src="https://user-images.githubusercontent.com/86669143/139720091-aa4a7c7a-b0f4-409c-97d4-fbfed0adc1af.png">

----------

#### *2.🚫 breakpoint*
   => breakpoint 는 디버깅을 목적으로 실행중인 디버깅 대상 프로세스를 의도적으로 멈추게 하는 장소를
   가르킨다. 프로세스가 멈추면 멈춘 시점의 변수정보나 콜스택,혹은 특정 메모리 지점의 값 등을 
   조사할 수 있다.
   

####  VScode 에서 breakpoint 추가하기
###### 1. breakpoint는 아래 이미지에서 화살표가 가리키는 부분(에디터 영역의 왼쪽 마진)을 클릭하거나, 코드를 클릭한 후 F9를 눌러서 추가(또는 제거)할 수 있다.

<img width="344" alt="스크린샷 2021-11-02 오전 2 41 48" src="https://user-images.githubusercontent.com/86669143/139715745-e1cbc994-85c8-4b80-84b9-a0cb35fe0d4e.png">

###### 2. breakpoint가 지정되면 위와 같이 빨간색 점이 표시된다.

###### cf. BREAKPOINTS (Debug View)
    - 사용자가 지정한 모든 breakpoint를 보여주는 섹션이다. 체크박스를 사용해서 특정 breakpoint를 활성화 또는 비활성화 할 수 있다.

    - 활성화 상태인 breakpoint는 빨간색 동그라미가 표시되고, 비활성화 상태인 breakpoint는 회색 동그라미가 표시된다

<img width="393" alt="스크린샷 2021-11-02 오전 3 07 28" src="https://user-images.githubusercontent.com/86669143/139719368-904beef0-c31f-4d28-8a4d-a4b367480e7a.png">

--------

#### *3. watch 사용법*
=> 코드의 실행에 따른 여러개의 변수 또는 표현식 (expression)의 값을 표시하는 섹션이다.

##### 🔖 사용방법
- WATCH 섹션의 빈 공간을 더블클릭 하거나 우측 상단의 ➕ 버튼을 클릭하여 검사하고자 하는 변수 또는 표현식을 추가할 수 있다.
<img width="298" alt="스크린샷 2021-11-02 오전 2 49 10" src="https://user-images.githubusercontent.com/86669143/139716764-45ebd02f-9557-4267-8090-c6bc57d785e2.png">

- 이때, WATCH 섹션에서 검사할 변수는 현재 디버깅 중인 프로그램 안에 정의된 것이어야 하며, 표현식 역시 프로그램 내에서 정의된 변수에 대한 내용이어야 한다.

- 변수의 타입을 체크하거나 변수가 가리키는 배열의 길이를 체크하는 등 유효한 자바스크립트 표현식이라면 무엇이든 추가할 수 있다.
<img width="343" alt="스크린샷 2021-11-02 오전 2 52 07" src="https://user-images.githubusercontent.com/86669143/139717196-dccd4dc4-3d34-4379-9915-5936e5e8f9da.png">

--------
#### *4. CALL STACK (Debug view)*
=> 함수와 메서드가 호출되는 순서가 표시되는 섹션으로, 프로그램의 실행 흐름을 파악하는데 유용하다.
<img width="407" alt="스크린샷 2021-11-02 오전 2 56 16" src="https://user-images.githubusercontent.com/86669143/139717793-1df5a942-ab65-4cfe-9604-3aac854bfc9c.png">

##### 콜스택(call stack)

-  콜스택이란 ‘함수의 호출 정보가 차곡차곡 쌓여있는 스택’을 의미한다. 프로그램 내에서 코드의 실행 순서를
   기록하는 자료구조인 셈이다.
-  콜스택 역시 스택이기 때문에 LIFO 방식으로 동작한다. 함수가 호출된 순서대로 스택에 추가되고(push)되고,
   호출 순서와는 반대로 맨 마지막에 호출된 함수부터 실행되면서 스택에서 제거(pop)된다.

--------
#### *5. Step into / Step over / Step out(Debug Toolbar)*

- <img width="22" alt="스크린샷 2021-11-02 오전 3 20 48" src="https://user-images.githubusercontent.com/86669143/139721129-6336a1e2-3355-4134-a9b2-5e1443c8fe4e.png"> Step into : 중단점의 다음 라인으로 이동한다. 이때 다음 라인이 함수라면 함수 내부로 들어간다.


- <img width="24" alt="스크린샷 2021-11-02 오전 3 22 40" src="https://user-images.githubusercontent.com/86669143/139721362-64012b35-04c3-4642-a74e-25c28cc7d043.png"> Step over : 중단점의 다음 라인으로 이동한다. 이때 다음 라인이 함수라면 함수를 실행하되 내부로 들어가지는 않는다.

- <img width="19" alt="스크린샷 2021-11-02 오전 3 23 26" src="https://user-images.githubusercontent.com/86669143/139721451-64fe5001-4d27-4660-92c1-5c8afef6cfc7.png"> Step over : 현재 함수의 리턴으로 이동한다. 즉 현재 함수를 빠져나온다.


----

##### 💡 조금 더 궁굼하다면 [여기](https://velog.io/@proshy/VScode-%EB%94%94%EB%B2%84%EA%B9%85-breakpoints-watch-step) 를 눌러 주세요! 