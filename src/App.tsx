import { useState } from 'react'
import dogImg from './assets/강아지.png'
import catImg from './assets/고양이.png'
import rabbitImg from './assets/토끼.png'
import bearImg from './assets/곰곰.webp'
import './App.css'

function App() {
  const [activeAnimal, setActiveAnimal] = useState<string | null>(null);
  const [dogCount, setDogCount] = useState(0)
  const [catCount, setCatCount] = useState(0)
  
  /* 💥 [나무위키 검색을 위한 새로운 상태(State)] */
  const [searchQuery, setSearchQuery] = useState('')

  const triggerMotion = (animalName: string) => {
    setActiveAnimal(animalName);
    setTimeout(() => {
      setActiveAnimal(null);
    }, 500);
  };

  /* 💥 [검색창 입력 후 엔터나 버튼 클릭 시 나무위키로 이동시키는 함수] */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // 페이지 새로고침 방지
    if (!searchQuery.trim()) return; // 빈 값 입력 방지
    
    // 입력한 동물명으로 나무위키 검색 URL 주소 생성 및 새 탭 열기
    const wikiUrl = `https://namu.wiki/w/${encodeURIComponent(searchQuery.trim())}`;
    window.open(wikiUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section id="center">
        <div className="animal-list">
          <img 
            src={dogImg} 
            className={`animal-item ${activeAnimal === 'dog' ? 'bounce-motion' : ''}`} 
            alt="강아지" 
            onClick={() => triggerMotion('dog')}
          />
          <img 
            src={catImg} 
            className={`animal-item ${activeAnimal === 'cat' ? 'bounce-motion' : ''}`} 
            alt="고양이" 
            onClick={() => triggerMotion('cat')}
          />
          <img 
            src={rabbitImg} 
            className={`animal-item ${activeAnimal === 'rabbit' ? 'bounce-motion' : ''}`} 
            alt="토끼" 
            onClick={() => triggerMotion('rabbit')}
          />
          <img 
            src={bearImg} 
            className={`animal-item ${activeAnimal === 'bear' ? 'bounce-motion' : ''}`} 
            alt="곰" 
            onClick={() => triggerMotion('bear')}
          />
        </div>
        
        <div>
          <h1 className="header-with-logo">
              💫방문을 환영합니다💫
          </h1>
          <p>
            귀여운 동물 친구들을 보여드릴게요!
          </p>
        </div>

        {/* 💥 기존 <div className="card"> 구역을 지우고 이 박스로 교체하세요 */}
        <div className="vote-box">
          <div className="vote-badge">막간 투표!</div>
          
          <p className="count-text">
            <span>🐶 강아지파: <strong>{dogCount}</strong>표</span>
            <span className="vs-text">VS</span>
            <span>🐱 고양이파: <strong>{catCount}</strong>표</span>
          </p>

          {/* 💥 실시간 득표율을 보여주는 애니메이션 게이지 바 */}
          <div className="gauge-container">
            <div 
              className="gauge-bar dog-bar" 
              style={{ 
                width: `${dogCount + catCount === 0 ? 50 : (dogCount / (dogCount + catCount)) * 100}%` 
              }}
            ></div>
            <div 
              className="gauge-bar cat-bar" 
              style={{ 
                width: `${dogCount + catCount === 0 ? 50 : (catCount / (dogCount + catCount)) * 100}%` 
              }}
            ></div>
          </div>
          
          <div className="button-row">
            <button type="button" className="vote-btn dog-btn" onClick={() => setDogCount((prev) => prev + 1)}>
              강아지 표 추가 +
            </button>
            <button type="button" className="vote-btn cat-btn" onClick={() => setCatCount((prev) => prev + 1)}>
              고양이 표 추가 +
            </button>
            <button type="button" className="reset-btn" onClick={() => { setDogCount(0); setCatCount(0); }}>
              초기화
            </button>
          </div>  
        </div>
      </section>

      <div className="ticks"></div>

      {/* 💥 [하단 전체 레이아웃을 감싸는 섹션] */}
      <section id="bottom-sections">
        
        {/* 첫 번째 섹션: 동물 별 이미지 보러가기 */}
        <div id="docs">
          <h2>동물 별 이미지 보러가기</h2>
          <p>🩵🩵🩵힐링시간을 가져보아요🩵🩵🩵</p>
          
          <div className="animal-card-container">
            <a href="https://www.google.com/search?udm=2&q=%EA%B0%95%EC%95%84%EC%A7%80+%EC%82%AC%EC%A7%84" target="_blank" rel="noreferrer" className="animal-card dog-card">
              <span className="card-emoji">🐶</span>
              <span className="card-title">강아지</span>
              <span className="card-btn-mock">보러가기</span>
            </a>
            <a href="https://www.google.com/search?udm=2&q=%EA%B3%A0%EC%96%91%EC%9D%B4+%EC%82%AC%EC%A7%84" target="_blank" rel="noreferrer" className="animal-card cat-card">
              <span className="card-emoji">🐱</span>
              <span className="card-title">고양이</span>
              <span className="card-btn-mock">보러가기</span>
            </a>
            <a href="https://www.google.com/search?udm=2&q=%ED%86%A0%EB%81%BC+%EC%82%AC%EC%A7%84" target="_blank" rel="noreferrer" className="animal-card rabbit-card">
              <span className="card-emoji">🐰</span>
              <span className="card-title">토끼</span>
              <span className="card-btn-mock">보러가기</span>
            </a>
            <a href="https://www.google.com/search?udm=2&q=%EA%B3%B0+%EC%82%AC%EC%A7%84" target="_blank" rel="noreferrer" className="animal-card bear-card">
              <span className="card-emoji">🐻</span>
              <span className="card-title">곰</span>
              <span className="card-btn-mock">보러가기</span>
            </a>
          </div>
        </div>

        {/* 💥 [두 번째 섹션: 세로로 배치된 나무위키 습성 검색 구역] */}
        <div id="social">
          <h2>동물들의 습성을 알아보자!</h2>
          <p>알고싶은 동물이 있나요?</p>
          
          {/* 나무위키 검색 창 폼 구조 */}
          <form onSubmit={handleSearch} className="wiki-search-form">
            <input 
              type="text" 
              placeholder="동물 이름을 입력하세요 (예: 토끼)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="wiki-search-input"
            />
            <button type="submit" className="wiki-search-btn">
              습성 검색하기
            </button>
          </form>
        </div>
        
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App