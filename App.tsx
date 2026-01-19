
import React, { useState } from 'react';
import { 
  InputField, RadioGroup, SegmentControl, SelectionButtonGroup, 
  Checkbox, Switch, Dropdown, Tag, Button, Card, Accordion, Stepper, Badge as UIBadge,
  TabGroup, DataTable, ListRow, Banner, Pagination, Keypad, ImageRadioGroup,
  TimePicker, Disclosure, LinkText, ModalPreview, BottomSheetPreview, Header,
  CalendarView, DropdownList, Notice, Tooltip, BoxLink, FileButton, InfoCard, ContactBanner, BillCard, PlanAccordion, ComparisonTable, ProcessTimeline, EmptyState, AreaInput, CoverageCheckItem, AutocompleteInput, DoubleUnitInput, PlanCarousel, StickyBottomBar, FloorInput, AmountSelect, ProductSummaryCard, SearchInput, TextareaField, PaymentCard, ThumbnailListItem, UnitInput, OptionCard, PhotoRegistration, DateTimeGroup, FileUploadBox, InstallmentSelection, CoverageAmountRadio, SplitButtonGroup, HierarchyList, InsuranceTablePC, ResidentNumberInput, DateRangeInput, InfoBox, TermsAgreement, SecurePasswordDisplay, DataCard, LoadingSpinner, IconActionList, AccountButton, AddressInputGroup, ImageBottomSheetPreview
} from './components/UIComponents';
import { MenuSection } from './types';
import { 
  Layout, Type, MousePointer, Image, CheckSquare, MessageSquare, 
  Palette, Box, ChevronLeft, Menu, ChevronDown, PlusCircle
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuSection>('Input');

  const renderContent = () => {
    switch(activeTab) {
      case 'General': return <GeneralGuide />;
      case 'Layout': return <LayoutGuide />;
      case 'Text': return <TextGuide />;
      case 'Input': return <InputGuide />;
      case 'Selection': return <SelectionGuide />;
      case 'Action': return <ActionGuide />;
      case 'Display': return <DisplayGuide />;
      case 'Feedback': return <FeedbackGuide />;
      default: return <InputGuide />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Header & Navigation */}
      <header className="bg-[#222] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 border-b border-gray-700">
            <h1 className="text-lg font-bold">
              현대해상 다이렉트 <span className="text-[#ff6600] text-sm font-normal ml-2">UI/UX 공통 가이드 v1.0</span>
            </h1>
            <div className="text-xs text-gray-400">다이렉트 보험 플랫폼 고도화 구축</div>
          </div>
          <nav className="flex space-x-1 overflow-x-auto no-scrollbar py-2">
            <TopNavItem active={activeTab === 'General'} onClick={() => setActiveTab('General')} icon={<Palette size={14}/>}>00. 공통</TopNavItem>
            <TopNavItem active={activeTab === 'Layout'} onClick={() => setActiveTab('Layout')} icon={<Layout size={14}/>}>01. 레이아웃</TopNavItem>
            <TopNavItem active={activeTab === 'Text'} onClick={() => setActiveTab('Text')} icon={<Type size={14}/>}>02. 텍스트</TopNavItem>
            <TopNavItem active={activeTab === 'Input'} onClick={() => setActiveTab('Input')} icon={<Box size={14}/>}>03. 입력</TopNavItem>
            <TopNavItem active={activeTab === 'Selection'} onClick={() => setActiveTab('Selection')} icon={<CheckSquare size={14}/>}>04. 선택</TopNavItem>
            <TopNavItem active={activeTab === 'Action'} onClick={() => setActiveTab('Action')} icon={<MousePointer size={14}/>}>05. 액션</TopNavItem>
            <TopNavItem active={activeTab === 'Display'} onClick={() => setActiveTab('Display')} icon={<Image size={14}/>}>06. 표현</TopNavItem>
            <TopNavItem active={activeTab === 'Feedback'} onClick={() => setActiveTab('Feedback')} icon={<MessageSquare size={14}/>}>07. 피드백</TopNavItem>
          </nav>
        </div>
      </header>

      {/* Main Document Area */}
      <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
        <div className="max-w-7xl mx-auto bg-white p-10 shadow-sm min-h-[800px]">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

// --- Helper Components ---

const TopNavItem: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; children: React.ReactNode }> = ({ active, onClick, icon, children }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors whitespace-nowrap
      ${active ? 'bg-[#ff6600] text-white font-bold' : 'text-gray-300 hover:text-white hover:bg-gray-700'}
    `}
  >
    {icon}
    {children}
  </button>
);

// --- Guide Sections ---

const LayoutGuide = () => (
  <>
    <h1 className="doc-h1">레이아웃 (Layout)</h1>
    <p className="doc-desc">
      사용자가 서비스를 일관되게 경험할 수 있도록 화면의 기본 구조와 영역별 배치 규칙을 정의합니다.<br/>
      헤더, 바디, 푸터의 역할과 팝업 등 레이어드 UI의 구조를 포함합니다.
    </p>

    <h2 className="doc-h2">1. 기본 구조 (Basic Structure)</h2>
    <div className="flex gap-4 mb-10">
        <div className="border border-gray-300 rounded-lg bg-gray-50 w-[320px] h-[480px] relative flex flex-col shadow-sm overflow-hidden">
            <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-center text-xs text-gray-400">Header</div>
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
                Body (Content Area)
            </div>
            <div className="h-14 bg-white border-t border-gray-200 flex items-center justify-center text-xs text-gray-400">Footer (Button)</div>
        </div>
        <div className="flex-1">
            <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 mt-4">
                <li><strong>헤더(Header):</strong> 페이지명, 뒤로가기, 전체메뉴(햄버거) 등 네비게이션 요소를 배치합니다.</li>
                <li><strong>바디(Body):</strong> 실제 서비스 콘텐츠와 입력 폼 등이 위치하는 영역입니다. (Padding: 20px)</li>
                <li><strong>푸터(Footer):</strong> 화면 하단에 고정되는 주요 액션 버튼(Sticky Bottom)이나 정보 영역입니다.</li>
            </ul>
        </div>
    </div>

    <h2 className="doc-h2">2. 헤더 유형 (Header Types)</h2>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>예시 (Preview)</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>홈 헤더</strong></td>
          <td className="wf-col bg-gray-50 p-4">
            <Header type="home" />
          </td>
          <td>
            <span className="badge bg-com">공통</span>
            <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>서비스의 메인(홈) 화면에 사용합니다.</li>
              <li>좌측에 현대해상 다이렉트 CI 로고를 배치하고, 우측에 전체 메뉴를 배치합니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td><strong>콘텐츠 헤더<br/>(기본형)</strong></td>
          <td className="wf-col bg-gray-50 p-4">
            <Header type="content" title="자동차보험" />
          </td>
          <td>
            <span className="badge bg-com">공통</span>
            <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>가장 일반적으로 사용되는 상세 페이지 헤더입니다.</li>
              <li>뒤로가기 버튼, 페이지 타이틀, 전체 메뉴 버튼으로 구성됩니다.</li>
              <li>타이틀이 길어질 경우 말줄임(...) 처리합니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td><strong>프로세스 헤더</strong></td>
          <td className="wf-col bg-gray-50 p-4">
            <Header type="process" title="여행정보 입력" />
          </td>
          <td>
            <span className="badge bg-com">공통</span>
            <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>가입 설계 등 단계별 프로세스가 진행될 때 사용합니다.</li>
              <li>우측에 '닫기(X)' 버튼을 배치하여, 진행 중단 및 이탈 가능성을 사용자에게 인지시킵니다.</li>
              <li>닫기 버튼 선택 시 작업 취소에 대한 알림(Alert)을 제공해야 합니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td><strong>헤드카피 헤더</strong></td>
          <td className="wf-col bg-gray-50 p-4">
            <Header type="hidden" />
            <div className="px-4 py-4">
                <h2 className="text-xl font-bold text-[#222]">현대해상과 함께라서 든든한<br/>자동차보험</h2>
            </div>
          </td>
          <td>
            <span className="badge bg-com">공통</span>
            <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>페이지 본문의 대제목(헤드카피)이 타이틀 역할을 대신할 때 사용합니다.</li>
              <li>초기에는 헤더 영역의 타이틀을 숨기고, 스크롤 시 타이틀이 나타나는 인터랙션을 적용할 수 있습니다.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">3. 팝업 레이아웃 (Popup Layouts)</h2>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>구조 예시</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>모달 팝업<br/>(Modal)</strong></td>
          <td className="wf-col bg-gray-50 p-4">
             <ModalPreview />
          </td>
          <td>
            <span className="badge bg-com">공통</span>
            <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>사용자의 작업 흐름을 잠시 중단하고 중요한 확인이나 알림을 제공할 때 사용합니다.</li>
              <li>배경을 어둡게 처리(Dimmed)하여 팝업 내용에 집중하게 합니다.</li>
              <li>타이틀, 본문, 버튼(취소/확인) 구조를 기본으로 합니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td><strong>바텀 시트<br/>(Bottom Sheet)</strong></td>
          <td className="wf-col bg-gray-50 p-4">
             <BottomSheetPreview />
          </td>
          <td>
            <span className="badge bg-com">공통</span>
            <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>화면 하단에서 위로 슬라이드되어 나타나는 패널입니다.</li>
              <li>옵션 선택, 약관 동의 등 모바일에서 입력 편의성을 높이기 위해 주로 사용됩니다.</li>
              <li>상단에 닫기 버튼이나 드래그 핸들을 제공하여 쉽게 닫을 수 있어야 합니다.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">4. 하단 고정 바 (Sticky Bottom Bar)</h2>
    <table className="wf-table">
        <thead><tr><th>유형</th><th>예시 (Preview)</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
                <td><strong>버튼 고정형</strong></td>
                <td className="wf-col bg-gray-100 p-4 h-32 relative">
                    <div className="absolute bottom-0 left-0 right-0">
                        <StickyBottomBar>
                            <Button variant="secondary" size="full">이전</Button>
                            <Button variant="primary" size="full">다음</Button>
                        </StickyBottomBar>
                    </div>
                </td>
                <td>
                    <span className="badge bg-com">공통</span>
                    <ul className="list-disc pl-4 space-y-1 text-gray-600">
                        <li>화면 스크롤과 무관하게 하단에 항상 고정되는 영역입니다.</li>
                        <li>주요 액션 버튼('다음', '가입하기' 등)을 배치하여 사용자 접근성을 높입니다.</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
  </>
);

const TextGuide = () => (
  <>
    <h1 className="doc-h1">텍스트 (Typography)</h1>
    <p className="doc-desc">
      정보의 위계와 가독성을 고려한 폰트 시스템 가이드입니다.<br/>
      기본 폰트는 <strong>Noto Sans KR</strong>을 사용하며, 모바일 환경에 최적화된 크기와 굵기를 정의합니다.
    </p>
    
    <table className="wf-table">
        <thead>
            <tr>
                <th style={{ width: '20%' }}>분류</th>
                <th style={{ width: '20%' }}>PDF 기준 (pt)</th>
                <th style={{ width: '20%' }}>Web 적용 (px)</th>
                <th style={{ width: '40%' }}>예시 (Preview)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>헤드카피 (H1)</strong></td>
                <td>14pt / Bold</td>
                <td>19px (approx)</td>
                <td><span className="text-[19px] font-bold text-[#222]">다이렉트 자동차보험</span></td>
            </tr>
            <tr>
                <td><strong>본문 타이틀 (H2)</strong></td>
                <td>10pt / Bold</td>
                <td>14px</td>
                <td><span className="text-[14px] font-bold text-[#222]">고객 정보를 입력해주세요</span></td>
            </tr>
            <tr>
                <td><strong>입력폼 텍스트</strong></td>
                <td>10pt / Regular</td>
                <td>14px</td>
                <td><span className="text-[14px] font-normal text-[#222]">김현대</span></td>
            </tr>
            <tr>
                <td><strong>본문 콘텐츠 (Body)</strong></td>
                <td>8pt / Regular</td>
                <td>11px ~ 12px</td>
                <td><span className="text-[12px] font-normal text-[#444]">보험기간은 1년입니다. 자세한 내용은 약관을 참조하세요.</span></td>
            </tr>
            <tr>
                <td><strong>레이블 / 캡션</strong></td>
                <td>8pt / Regular</td>
                <td>11px ~ 12px</td>
                <td><span className="text-[12px] font-normal text-[#888]">※ 필수 입력 항목입니다.</span></td>
            </tr>
        </tbody>
    </table>

    <div className="mt-8 p-4 bg-gray-50 border rounded text-sm text-gray-600">
        <p className="mb-2"><strong>※ 폰트 적용 가이드</strong></p>
        <ul className="list-disc pl-4 space-y-1">
            <li>모바일 해상도(iPhone SE 기준)를 바탕으로, 한 줄에 표현되는 글자 수를 고려하여 크기를 설정했습니다.</li>
            <li>디자인 및 퍼블리싱 단계에서 가독성 확보를 위해 미세한 px 조정이 가능합니다.</li>
            <li>중요한 정보(금액, 날짜 등)는 Bold 처리를 통해 강조할 수 있습니다.</li>
        </ul>
    </div>
  </>
);

const GeneralGuide = () => (
  <>
    <h1 className="doc-h1">공통 규칙 (General)</h1>
    <p className="doc-desc">
      현대해상 다이렉트 서비스의 브랜드 아이덴티티를 유지하고 일관된 사용자 경험을 제공하기 위한 기본적인 디자인 원칙입니다.
    </p>

    <h2 className="doc-h2">1. 컬러 시스템 (Color System)</h2>
    <table className="wf-table">
      <thead><tr><th>분류</th><th>색상 (Preview)</th><th>Hex / 설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>Primary</strong></td>
          <td className="wf-col">
            <div className="flex gap-4">
              <div className="text-center"><div className="w-16 h-16 bg-[#ff6600] rounded mb-1"></div><span className="text-xs">Main</span></div>
              <div className="text-center"><div className="w-16 h-16 bg-[#fff5eb] rounded mb-1"></div><span className="text-xs">Light</span></div>
            </div>
          </td>
          <td>
            <p><strong>#FF6600 (Orange)</strong></p>
            <p>브랜드 메인 컬러로, 주요 액션 버튼, 활성 상태, 강조 텍스트 등에 사용하여 사용자의 시선을 유도합니다.</p>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);

const InputGuide = () => (
  <>
    <h1 className="doc-h1">입력(Input) 컴포넌트 가이드</h1>
    <p className="doc-desc">
      사용자로부터 텍스트, 숫자, 날짜 등의 정보를 입력받기 위해 사용하는 컴포넌트입니다.<br/>
      입력 데이터의 성격에 따라 적절한 키패드(숫자, 문자)와 유효성 검증 피드백을 제공해야 합니다.
    </p>

    <h2 className="doc-h2">1. 식별 및 인적사항 입력</h2>
    <table className="wf-table">
      <thead><tr><th>항목</th><th>입력 전 (Before)</th><th>입력 후 (After)</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
            <td>성명 (한글)</td>
            <td className="col-before">
                <span className="wf-label">이름</span>
                <div className="wf-input-box"><input type="text" placeholder="이름 입력"/></div>
            </td>
            <td className="col-after">
                <span className="wf-label">이름</span>
                <div className="wf-input-box focus"><input type="text" defaultValue="김현대"/><span className="wf-clear">ⓧ</span></div>
                <div style={{height:5}}></div>
                <div className="wf-input-box error"><input type="text" defaultValue="김현대!"/><span className="wf-clear">ⓧ</span></div>
                <p className="text-[11px] text-[#E53935] mt-1">한글만 입력해주세요.</p>
            </td>
            <td className="col-guide"><span className="badge bg-com">공통</span> 한글 완성형 이름만 입력 가능하며, 특수문자나 숫자는 허용되지 않습니다.</td>
        </tr>
        <tr>
            <td>성명 (영문)</td>
            <td className="col-before">
                <span className="wf-label">영문이름</span>
                <div className="wf-input-box"><input type="text" placeholder="여권과 동일한 영문명"/></div>
            </td>
            <td className="col-after">
                <span className="wf-label">영문이름</span>
                <div className="wf-input-box focus"><input type="text" defaultValue="KIM HYUNDAE"/><span className="wf-clear">ⓧ</span></div>
            </td>
            <td className="col-guide"><span className="badge bg-com">공통</span> 여권상의 영문명과 동일하게 입력해야 하며, 입력 시 자동으로 대문자로 변환됩니다.</td>
        </tr>
        <tr>
            <td>생년월일/성별</td>
            <td className="col-before">
                <span className="wf-label">생년월일/성별</span>
                <div className="flex-row">
                    <div className="wf-input-box" style={{flex:2}}><input type="text" placeholder="예) 900101"/></div>
                    <div className="btn-group" style={{flex:1}}>
                        <button className="btn-gender">남</button>
                        <button className="btn-gender">여</button>
                    </div>
                </div>
            </td>
            <td className="col-after">
                <span className="wf-label">생년월일/성별</span>
                <div className="flex-row">
                    <div className="wf-input-box focus" style={{flex:2}}><input type="text" defaultValue="950101"/></div>
                    <div className="btn-group" style={{flex:1}}>
                        <button className="btn-gender active">남</button>
                        <button className="btn-gender">여</button>
                    </div>
                </div>
            </td>
            <td className="col-guide"><span className="badge bg-com">공통</span> 주민등록번호 앞 6자리 입력과 성별 선택(남/여)을 조합한 형태입니다.</td>
        </tr>
        <tr>
            <td>주민등록번호<br/>(Type 1)</td>
            <td className="col-before">
                <ResidentNumberInput />
            </td>
            <td className="col-after">
                <ResidentNumberInput frontValue="950101" backValue="1" />
            </td>
            <td className="col-guide"><span className="badge bg-com">공통</span> 뒷자리 첫 번째 숫자만 입력받고, 나머지 뒷자리는 마스킹 처리(●●●●●●)하여 노출합니다.</td>
        </tr>
        <tr>
            <td>주민등록번호<br/>(Type 2: 보안)</td>
            <td className="col-before">
                <ResidentNumberInput type="secure" />
            </td>
            <td className="col-after">
                <ResidentNumberInput type="secure" frontValue="950101" />
            </td>
            <td className="col-guide"><span className="badge bg-com">공통</span> 전체 주민등록번호 입력이 필요한 경우 사용하며, 뒷자리는 보안 키패드와 연동되어 마스킹 처리됩니다.</td>
        </tr>
        <tr>
            <td>읽기 전용<br/>(Read Only)</td>
            <td className="col-before">
                <span className="wf-label">차량번호</span>
                <div className="wf-input-box read-only"><input type="text" value="123가4567" readOnly /></div>
            </td>
            <td className="col-after">
                 <span className="wf-label">차량번호</span>
                 <div className="wf-input-box read-only"><input type="text" value="123가4567" readOnly /></div>
            </td>
            <td className="col-guide"><span className="badge bg-com">공통</span> 정보를 수정할 수 없는 상태입니다. 회색 배경으로 표시됩니다.</td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">2. 연락처 및 인증</h2>
    <table className="wf-table">
        <thead><tr><th>항목</th><th>입력 전 (Before)</th><th>입력 후 (After)</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
                <td>통신사/휴대폰</td>
                <td className="col-before">
                    <span className="wf-label">통신사/휴대폰번호</span>
                    <div className="flex gap-2">
                        <div className="w-1/3"><div className="dropdown-box"><span>통신사</span><span>▼</span></div></div>
                        <div className="w-2/3"><div className="wf-input-box"><input type="text" placeholder="'-'없이 입력"/></div></div>
                    </div>
                </td>
                <td className="col-after">
                    <span className="wf-label">통신사/휴대폰번호</span>
                    <div className="flex gap-2 mb-2">
                        <div className="w-1/3"><div className="dropdown-box"><span>SKT</span><span>▼</span></div></div>
                        <div className="w-2/3"><div className="wf-input-box focus"><input type="text" defaultValue="010-1234-5678"/><span className="wf-clear">ⓧ</span></div></div>
                    </div>
                    {/* Open State for Dropdown */}
                    <div className="w-1/3 relative">
                        <div className="dropdown-box border-[#333] mb-1"><span>SKT</span><span className="rotate-180">▼</span></div>
                        <DropdownList options={['SKT', 'KT', 'LG U+', 'SKT 알뜰폰', 'KT 알뜰폰', 'LG U+ 알뜰폰']} selected="SKT" />
                    </div>
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 통신사 선택(드롭다운)과 휴대폰 번호 입력을 결합한 형태입니다. 드롭다운 선택 시 하단에 목록이 펼쳐집니다.</td>
            </tr>
            <tr>
                <td>휴대폰번호<br/>(인증요청)</td>
                <td className="col-before">
                    <span className="wf-label">휴대폰번호</span>
                    <div className="wf-input-box">
                        <input type="text" placeholder="'-'없이 입력"/>
                        <button className="btn-in">인증요청</button>
                    </div>
                </td>
                <td className="col-after">
                    <span className="wf-label">휴대폰번호</span>
                    <div className="wf-input-box focus">
                        <input type="text" defaultValue="010-1234-5678"/>
                        <button className="btn-in active">인증요청</button>
                    </div>
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 휴대폰 번호 입력 후 우측의 버튼을 통해 인증번호 발송을 요청합니다.</td>
            </tr>
            <tr>
                <td>인증번호</td>
                <td className="col-before">
                    <span className="wf-label">인증번호</span>
                    <div className="wf-input-box">
                        <input type="text" placeholder="인증번호 6자리"/>
                        <div className="flex-row" style={{width:'auto'}}>
                            <span className="wf-timer">03:00</span>
                            <button className="btn-in">시간연장</button>
                        </div>
                    </div>
                </td>
                <td className="col-after">
                    <span className="wf-label">인증번호</span>
                    <div className="wf-input-box focus">
                        <input type="text" defaultValue="123456"/>
                        <div className="flex-row" style={{width:'auto'}}>
                            <span className="wf-timer">02:45</span>
                            <button className="btn-in">시간연장</button>
                        </div>
                    </div>
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 수신된 인증번호를 입력하며, 제한 시간 타이머와 시간 연장 기능이 포함되어야 합니다.</td>
            </tr>
            <tr>
                <td>이메일</td>
                <td className="col-before">
                    <span className="wf-label">이메일</span>
                    <div className="flex items-center gap-1">
                        <div className="wf-input-box"><input type="text" placeholder="아이디"/></div>
                        <span>@</span>
                        <div className="dropdown-box"><span>직접입력</span><span>▼</span></div>
                    </div>
                </td>
                <td className="col-after">
                    <span className="wf-label">이메일</span>
                    <div className="flex items-center gap-1 mb-2">
                        <div className="wf-input-box focus"><input type="text" defaultValue="hyundai"/></div>
                        <span>@</span>
                        <div className="dropdown-box"><span>naver.com</span><span>▼</span></div>
                    </div>
                    {/* Dropdown Open View */}
                    <div className="flex items-start gap-1">
                         <div className="flex-1"></div>
                         <div className="w-[12px]"></div>
                         <div className="flex-1 relative">
                             <div className="dropdown-box border-[#333] mb-1"><span>naver.com</span><span className="rotate-180">▼</span></div>
                             <DropdownList options={['naver.com', 'hanmail.net', 'gmail.com', '직접입력']} selected="naver.com" />
                         </div>
                    </div>
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 이메일 아이디 입력과 도메인 선택(또는 직접 입력)으로 구성됩니다. 도메인 선택 시 드롭다운이 활성화됩니다.</td>
            </tr>
        </tbody>
    </table>

    <h2 className="doc-h2">3. 금융 및 자동차 정보</h2>
    <table className="wf-table">
        <thead><tr><th>항목</th><th>입력 전 (Before)</th><th>입력 후 (After)</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
                <td>카드번호<br/>(4분할)</td>
                <td className="col-before">
                    <span className="wf-label">카드번호</span>
                    <div className="secure-box">
                        <div className="secure-input"><input type="text" placeholder="4자리" style={{width: '100%', textAlign: 'center', border: 'none', outline: 'none', background: 'transparent'}}/></div>
                        <div className="secure-input"><input type="text" placeholder="4자리" style={{width: '100%', textAlign: 'center', border: 'none', outline: 'none', background: 'transparent'}}/></div>
                        <div className="secure-input"><input type="text" placeholder="4자리" style={{width: '100%', textAlign: 'center', border: 'none', outline: 'none', background: 'transparent'}}/></div>
                        <div className="secure-input"><input type="text" placeholder="4자리" style={{width: '100%', textAlign: 'center', border: 'none', outline: 'none', background: 'transparent'}}/></div>
                    </div>
                </td>
                <td className="col-after">
                    <span className="wf-label">카드번호</span>
                    <div className="secure-box">
                        <div className="secure-input" style={{borderColor:'#333'}}>1234</div>
                        <div className="secure-input" style={{borderColor:'#333'}}>5678</div>
                        <div className="secure-input mask">●●●●</div>
                        <div className="secure-input mask">●●●●</div>
                    </div>
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 카드번호 16자리를 4자리씩 4개 필드로 나누어 입력받으며, 보안을 위해 일부는 마스킹 처리될 수 있습니다.</td>
            </tr>
            <tr>
                <td>유효기간/비번</td>
                <td className="col-before">
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <span className="wf-label">유효기간</span>
                            <div className="wf-input-box"><input type="text" placeholder="MM/YY"/></div>
                        </div>
                        <div className="flex-1">
                            <span className="wf-label">비밀번호</span>
                            <div className="wf-input-box"><input type="password" placeholder="앞 2자리"/></div>
                        </div>
                    </div>
                </td>
                <td className="col-after">
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <span className="wf-label">유효기간</span>
                            <div className="wf-input-box focus"><input type="text" defaultValue="12/28"/></div>
                        </div>
                        <div className="flex-1">
                            <span className="wf-label">비밀번호</span>
                            <div className="wf-input-box focus"><input type="password" defaultValue="**"/></div>
                        </div>
                    </div>
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 카드 유효기간(월/년)과 비밀번호 앞 2자리를 입력받는 필드입니다.</td>
            </tr>
            <tr>
                <td>계좌번호</td>
                <td className="col-before">
                    <span className="wf-label">계좌 정보</span>
                    <div className="flex gap-2">
                        <div className="w-1/3"><div className="dropdown-box"><span>은행선택</span><span>▼</span></div></div>
                        <div className="w-2/3"><div className="wf-input-box"><input type="text" placeholder="'-'없이 입력"/></div></div>
                    </div>
                </td>
                <td className="col-after">
                    <span className="wf-label">계좌 정보</span>
                    <div className="flex gap-2 mb-2">
                        <div className="w-1/3"><div className="dropdown-box"><span>국민은행</span><span>▼</span></div></div>
                        <div className="w-2/3"><div className="wf-input-box focus"><input type="text" defaultValue="1234567890"/></div></div>
                    </div>
                    {/* Bank Dropdown Open */}
                    <div className="w-1/3 relative">
                         <div className="dropdown-box border-[#333] mb-1"><span>국민은행</span><span className="rotate-180">▼</span></div>
                         <DropdownList options={['KB국민', '신한', '우리', 'KEB하나', 'NH농협']} selected="KB국민" />
                    </div>
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 은행 선택 드롭다운과 계좌번호 입력 필드(하이픈 제외)를 조합하여 사용합니다.</td>
            </tr>
            <tr>
                <td>차량번호</td>
                <td className="col-before">
                    <span className="wf-label">차량번호</span>
                    <div className="wf-input-box"><input type="text" placeholder="예) 123가4567"/></div>
                </td>
                <td className="col-after">
                    <span className="wf-label">차량번호</span>
                    <div className="wf-input-box focus"><input type="text" defaultValue="123가4567"/><span className="wf-clear">ⓧ</span></div>
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 차량번호 전체를 띄어쓰기 없이 입력합니다.</td>
            </tr>
             <tr>
                <td>단위 입력<br/>(Unit)</td>
                <td className="col-before">
                    <div className="wf-input-box">
                        <input type="text" placeholder="0" style={{textAlign:'right'}}/>
                        <span className="wf-unit">km</span>
                    </div>
                </td>
                <td className="col-after">
                     <div className="wf-input-box focus">
                        <input type="text" defaultValue="15,000" style={{textAlign:'right'}}/>
                        <span className="wf-unit">km</span>
                    </div>
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 숫자 입력 후 우측에 단위(km, 원 등)를 고정 텍스트로 표시합니다. 숫자는 우측 정렬합니다.</td>
            </tr>
            {/* NEW UNIT INPUT */}
            <tr>
                <td>단일 단위 입력<br/>(Unit Only)</td>
                <td className="wf-col" colSpan={2}>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <UnitInput label="흡연량 (1일)" placeholder="숫자만 입력" unit="개피" />
                        </div>
                        <div className="flex-1">
                            <UnitInput label="흡연 기간" placeholder="숫자만 입력" unit="년" />
                        </div>
                    </div>
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 단위가 고정된 입력 필드로, 숫자만 입력받을 때 사용합니다.</td>
            </tr>
            {/* NEW AREA INPUT */}
            <tr>
                <td>면적 입력<br/>(Area)</td>
                <td className="wf-col" colSpan={2}>
                    <span className="wf-label">주택 면적(전용)</span>
                    <AreaInput />
                </td>
                <td className="col-guide"><span className="badge bg-gen">일반</span> 제곱미터(㎡)와 평수를 나란히 보여주며, 자동 변환이 필요한 경우 사용합니다.</td>
            </tr>
            {/* NEW FLOOR INPUT */}
            <tr>
                <td>층수 입력<br/>(Floor)</td>
                <td className="wf-col" colSpan={2}>
                    <span className="wf-label">층수</span>
                    <FloorInput />
                </td>
                <td className="col-guide"><span className="badge bg-gen">일반</span> 층수를 입력하고, 지상/지하 여부를 선택하는 복합 컴포넌트입니다. (주택화재)</td>
            </tr>
            {/* NEW DOUBLE UNIT INPUT */}
            <tr>
                <td>이중 단위 입력<br/>(Double Unit)</td>
                <td className="wf-col" colSpan={2}>
                    <span className="wf-label">키 / 몸무게</span>
                    <DoubleUnitInput 
                        label1="키" unit1="cm" 
                        label2="몸무게" unit2="kg" 
                    />
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 두 가지 연관된 단위 정보를 한 행에서 박스형태로 입력받을 때 사용합니다.</td>
            </tr>
        </tbody>
    </table>

    <h2 className="doc-h2">4. 검색, 날짜, 파일 업로드</h2>
    <table className="wf-table">
        <thead><tr><th>항목</th><th>입력 전 (Before)</th><th>입력 후 (After)</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
                <td>검색어 입력</td>
                <td className="col-before">
                    <SearchInput placeholder="검색어를 입력해 주세요" />
                </td>
                <td className="col-after">
                    <SearchInput placeholder="검색어를 입력해 주세요" value="자동차상해" />
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 회색 배경에 둥근 모서리가 적용된 검색 전용 필드입니다. 돋보기 아이콘을 포함합니다.</td>
            </tr>
            {/* NEW AUTOCOMPLETE INPUT */}
            <tr>
                <td>자동완성 검색<br/>(Autocomplete)</td>
                <td className="col-before">
                    <AutocompleteInput 
                        label="품종 입력" 
                        placeholder="검색어 입력" 
                        suggestions={['말티즈', '말티폼(말티즈+포메라니안)', '말티푸', '알라스칸 말라뮤트']}
                    />
                </td>
                <td className="col-after">
                    <AutocompleteInput 
                        label="품종 입력" 
                        placeholder="검색어 입력"
                        defaultValue="말티즈"
                        suggestions={['말티즈', '말티폼(말티즈+포메라니안)', '말티푸', '알라스칸 말라뮤트']}
                    />
                </td>
                <td className="col-guide"><span className="badge bg-gen">일반</span> 입력 시 하단에 연관 검색어를 노출하여 선택을 돕습니다. 박스형 디자인을 사용합니다.</td>
            </tr>
            {/* REPLACED ADDRESS SEARCH WITH ADDRESS INPUT GROUP */}
            <tr>
                <td>주소 검색<br/>(Address)</td>
                <td className="wf-col" colSpan={2}>
                    <span className="wf-label">주소</span>
                    <AddressInputGroup />
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 우편번호 찾기 버튼, 기본 주소(Read-only), 상세 주소 입력 필드로 구성된 그룹입니다.</td>
            </tr>
            <tr>
                <td>날짜 (기간)</td>
                <td className="col-before">
                    <span className="wf-label">보험 기간</span>
                    <div className="flex-row">
                        <div className="wf-input-box"><input type="text" placeholder="YYYY.MM.DD"/><span>📅</span></div>
                        <span>~</span>
                        <div className="wf-input-box"><input type="text" placeholder="YYYY.MM.DD"/><span>📅</span></div>
                    </div>
                </td>
                <td className="col-after">
                    <DateRangeInput startDate="2025.01.01" endDate="2026.01.01" />
                    {/* Calendar View */}
                    <div className="relative mt-2">
                        <CalendarView />
                    </div>
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 시작일과 종료일을 입력받아 기간을 설정합니다. 달력 아이콘 선택 시 캘린더 UI가 팝업됩니다.</td>
            </tr>
            {/* NEW DATE TIME GROUP */}
            <tr>
                <td>날짜+시간<br/>(Date+Time)</td>
                <td className="col-before">
                     <DateTimeGroup />
                </td>
                <td className="col-after">
                     <div className="flex gap-2 items-end">
                        <div className="flex-1">
                            <label className="block text-xs mb-1.5 font-medium text-gray-500">대여종료일</label>
                            <div className="w-full h-10 border border-black rounded px-3 flex items-center justify-between bg-white">
                                <input type="text" defaultValue="20250201" className="outline-none text-sm w-full"/>
                                <span className="text-gray-400 text-lg">📅</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="w-full border border-black rounded px-3 h-10 bg-white flex justify-between items-center cursor-pointer">
                                    <span className="text-gray-900 text-sm font-bold">14시 00분</span>
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                </div>
                        </div>
                    </div>
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 날짜 입력과 시간 선택(드롭다운)을 함께 사용할 때 구성합니다.</td>
            </tr>
            <tr>
                <td>시간 선택<br/>(Time Picker)</td>
                <td className="wf-col" colSpan={2}>
                    <span className="wf-label">출발시간</span>
                    <TimePicker />
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 오전/오후 및 시간을 선택하는 UI입니다. 스크롤 또는 버튼 방식으로 시간을 지정합니다.</td>
            </tr>
            {/* NEW PHOTO REGISTRATION */}
            <tr>
                <td><strong>사진 등록<br/>(Photo Reg)</strong></td>
                <td className="wf-col" colSpan={2}>
                    <PhotoRegistration title="블랙박스 장착 사진" status="open-empty" description="블랙박스 할인특약 가입을 위한 사진을 등록해주세요." />
                    <div className="h-4"></div>
                    <PhotoRegistration title="블랙박스 장착 사진" status="open-filled" imageSrc="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=300" />
                    <div className="h-4"></div>
                    <PhotoRegistration title="차량번호판 사진" status="closed" />
                </td>
                <td className="col-guide">
                    <span className="badge bg-auto">자동차</span>
                    <ul className="list-disc pl-4 space-y-1 text-gray-600">
                        <li>'직접 사진 등록'과 '문자로 링크 받기' 탭을 제공합니다.</li>
                        <li>등록 전(샘플 이미지 노출), 등록 후(이미지 썸네일 노출) 상태가 구분됩니다.</li>
                        <li>할인특약 제외 체크박스가 포함될 수 있습니다.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>텍스트 영역<br/>(Textarea)</td>
                <td className="col-before">
                    <TextareaField 
                        label="내용" 
                        placeholder="상담받을 내용 자세히 입력" 
                        helperText="이메일 상담신청을 위해 고객님의 개인정보처리 동의가 필요합니다."
                    />
                </td>
                <td className="col-after">
                    <TextareaField 
                        label="내용" 
                        value="보험금 청구 문의드립니다."
                        maxLength={1000}
                    />
                </td>
                <td className="col-guide"><span className="badge bg-com">공통</span> 상단에 레이블과 글자 수 카운터가 배치된 박스형 입력 필드입니다.</td>
            </tr>
        </tbody>
    </table>

    <h2 className="doc-h2">5. 키패드 (Keypad)</h2>
    <table className="wf-table">
        <thead><tr><th>유형</th><th>사례 (Preview)</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
                <td><strong>보안 키패드</strong></td>
                <td className="wf-col">
                    <span className="wf-label">주민등록번호 뒷자리</span>
                    <div className="wf-input-box disabled"><input type="password" placeholder="●●●●●●●" disabled/></div>
                    <Keypad />
                </td>
                <td>
                    <span className="badge bg-com">공통</span>
                    <ul className="list-disc pl-4 space-y-1 text-gray-600">
                        <li>주민등록번호 뒷자리, 카드 비밀번호 등 민감한 개인정보를 입력할 때 사용합니다.</li>
                        <li>화면 하단에 오버레이 형태로 제공되며, 입력된 값은 마스킹 처리됩니다.</li>
                    </ul>
                </td>
            </tr>
            {/* NEW PASSWORD DOTS */}
            <tr>
                <td><strong>비밀번호 입력<br/>(Secure Dots)</strong></td>
                <td className="wf-col">
                    <SecurePasswordDisplay length={4} maxLength={6} />
                </td>
                <td>
                    <span className="badge bg-com">공통</span>
                    <ul className="list-disc pl-4 space-y-1 text-gray-600">
                        <li>간편 비밀번호(6자리) 입력 시 현재 입력 상태를 표시합니다.</li>
                        <li>입력된 자리는 브랜드 컬러(Orange)로 채워집니다.</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
  </>
);

const SelectionGuide = () => (
  <>
    <h1 className="doc-h1">선택(Selection) 컴포넌트 가이드</h1>
    <p className="doc-desc">
      사용자가 옵션을 선택하는 다양한 방식에 대한 상세 가이드라인입니다. (PDF 25~30p)<br/>
      기본(Default), 선택(Selected), 비활성(Disabled) 상태를 명확히 구분하여 제공해야 합니다.
    </p>

    <h2 className="doc-h2">1. 라디오 버튼 (Radio Button)</h2>
    <p className="text-sm text-gray-600 mb-2">단일 선택 컴포넌트입니다. 선택 시 원형 아이콘 내부에 점이 표시됩니다.</p>
    <table className="wf-table">
      <thead><tr><th>유형/상태</th><th>기본 (Default)</th><th>선택 (Selected)</th><th>비활성 (Disabled)</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>텍스트형<br/>(Text Type)</strong></td>
          <td className="wf-col">
             <RadioGroup name="r1" options={['옵션 A']} />
          </td>
          <td className="wf-col">
             <RadioGroup name="r2" options={['옵션 B']} value="옵션 B" />
          </td>
          <td className="wf-col">
             <RadioGroup name="r3" options={[{label: '옵션 C', value:'C', disabled: true}]} />
          </td>
        </tr>
      </tbody>
    </table>
    <div className="mt-4">
        <h3 className="doc-h3">배치 유형</h3>
        <table className="wf-table">
            <thead><tr><th>배치</th><th>예시</th><th>설명</th></tr></thead>
            <tbody>
                <tr>
                    <td><strong>가로 배치</strong></td>
                    <td className="wf-col">
                        <RadioGroup name="r_h" direction="row" options={['이메일 답변', '전화 답변']} value="이메일 답변" />
                    </td>
                    <td><span className="badge bg-com">공통</span> 항목이 적고 텍스트가 짧을 때 사용합니다.</td>
                </tr>
                <tr>
                    <td><strong>세로 배치</strong></td>
                    <td className="wf-col">
                        <RadioGroup name="r_v" direction="col" options={['자가용', '영업용', '업무용']} value="자가용" />
                    </td>
                    <td><span className="badge bg-com">공통</span> 항목이 많거나 텍스트가 길 때 사용합니다.</td>
                </tr>
            </tbody>
        </table>
    </div>

    {/* NEW COVERAGE AMOUNT RADIO */}
    <h3 className="doc-h3">추천/할인 정보 포함형 (Coverage Select)</h3>
    <table className="wf-table">
        <thead><tr><th>유형</th><th>예시</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
                <td><strong>목록형<br/>(List Type)</strong></td>
                <td className="wf-col">
                    <CoverageAmountRadio />
                </td>
                <td><span className="badge bg-com">공통</span> 담보 금액 선택 시 추천 배지와 할인율 배지(Best)를 함께 표시하여 선택을 유도합니다.</td>
            </tr>
        </tbody>
    </table>

    <h2 className="doc-h2">2. 체크박스 및 동의 (Checkbox & Agreement)</h2>
    <p className="text-sm text-gray-600 mb-2">다중 선택 컴포넌트입니다. 선택 시 사각형 박스가 색칠되며 체크 표시가 나타납니다.</p>
    <table className="wf-table">
      <thead><tr><th>유형/상태</th><th>예시</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>기본형</strong></td>
          <td className="wf-col">
             <Checkbox label="옵션 선택" />
             <div className="h-2"></div>
             <Checkbox label="옵션 선택" checked />
             <div className="h-2"></div>
             <Checkbox label="옵션 선택" disabled />
          </td>
          <td><span className="badge bg-com">공통</span> 기본, 선택, 비활성 상태를 제공합니다.</td>
        </tr>
        {/* NEW TERMS AGREEMENT BOX */}
        <tr>
            <td><strong>약관 동의 박스<br/>(Agreement Box)</strong></td>
            <td className="wf-col">
                <TermsAgreement 
                    items={[
                        { label: '개인정보 수집 및 이용 동의', required: true },
                        { label: '고유식별정보 처리 동의', required: true },
                        { label: '마케팅 활용 동의' }
                    ]}
                />
            </td>
            <td>
                <span className="badge bg-com">공통</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>전체 동의와 개별 항목 동의를 그룹화한 박스형 UI입니다.</li>
                    <li>헤더 영역은 배경색 없이 깔끔하게 처리하고 구분선을 적용합니다.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><strong>담보 선택<br/>(Coverage Selection)</strong></td>
            <td className="wf-col">
                <div className="border border-gray-200 rounded-lg p-4 bg-white max-w-md">
                    <CoverageCheckItem 
                        title="해외여행 상해급여" 
                        desc="국내의료실비보장(통원한도: 20만원)" 
                        amount="5,000만원" 
                        checked 
                    />
                    <CoverageCheckItem 
                        title="해외여행 질병급여" 
                        desc="국내의료실비보장(통원한도: 20만원)" 
                        amount="5,000만원" 
                        checked 
                    />
                </div>
            </td>
            <td><span className="badge bg-long">장기</span> 보험 가입 시 세부 보장 내역을 선택하고 금액을 확인할 때 사용합니다.</td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">3. 박스 선택형 (Box Selection)</h2>
    <p className="text-sm text-gray-600 mb-2">라디오 버튼의 변형으로, 터치 영역을 넓혀 선택 편의성을 높인 형태입니다.</p>
    <table className="wf-table">
        <thead><tr><th>유형</th><th>예시</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
                <td><strong>텍스트 박스형</strong></td>
                <td className="wf-col">
                    <RadioGroup type="box" name="box_type" options={['승용차', '화물차']} value="승용차" />
                </td>
                <td><span className="badge bg-com">공통</span> 차종 선택 등 텍스트 위주의 간단한 옵션 선택 시 사용합니다.</td>
            </tr>
            {/* NEW OPTION CARD */}
            <tr>
                <td><strong>옵션 선택 카드<br/>(Option Card)</strong></td>
                <td className="wf-col">
                    <div className="flex flex-col">
                        <OptionCard title="현대스마트센스I" checked={true} price="54만원">
                            <ul className="list-disc pl-4 space-y-1 text-xs">
                                <li>차선이탈 경고장치 (기본장착)</li>
                                <li>전방충돌 경고장치 (옵션장착)</li>
                            </ul>
                        </OptionCard>
                        <OptionCard title="커넥티드카 할인특약" badge="7.1% 할인" />
                    </div>
                </td>
                <td><span className="badge bg-auto">자동차</span> 체크박스/라디오 버튼이 포함된 카드형 선택 컴포넌트입니다. 특약 선택 등에 사용됩니다.</td>
            </tr>
            {/* NEW DETAILED RADIO BOX */}
            <tr>
                <td><strong>상세 설명형<br/>(Detailed Box)</strong></td>
                <td className="wf-col">
                    <RadioGroup 
                        type="box" 
                        name="box_detail" 
                        options={[
                            { label: '자가 소유', value: 'own', description: '실제 거주 중' },
                            { label: '자가 소유', value: 'own_rent', description: '다른 사람이 거주 중' }
                        ]} 
                        value="own" 
                    />
                </td>
                <td><span className="badge bg-gen">일반</span> 타이틀과 상세 설명을 함께 제공하여 선택의 정확도를 높일 때 사용합니다.</td>
            </tr>
            <tr>
                <td><strong>이미지 카드형</strong></td>
                <td className="wf-col">
                    <ImageRadioGroup items={[
                        { label: '철골/철근', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=200' },
                        { label: '벽돌조', image: 'https://images.unsplash.com/photo-1605333224258-290072b2260f?w=200' },
                        { label: '블럭조', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=200' }
                    ]} />
                </td>
                <td><span className="badge bg-gen">일반</span> 시각적 정보 전달이 필요할 때 이미지와 함께 배치합니다. 선택 시 테두리와 체크 아이콘이 활성화됩니다.</td>
            </tr>
            <tr>
                <td><strong>배지 포함형<br/>(With Badge)</strong></td>
                <td className="wf-col">
                    <RadioGroup 
                        type="box" 
                        name="box_badge" 
                        direction="row"
                        options={[
                            { label: '등록 안함', value: 'no' }, 
                            { label: '등록함', value: 'yes', badge: '5% 할인' }
                        ]} 
                        value="yes" 
                    />
                </td>
                <td><span className="badge bg-com">공통</span> 강조가 필요한 옵션에 배지(Badge)를 추가하여 혜택 등을 시각적으로 표현합니다.</td>
            </tr>
        </tbody>
    </table>

    <h2 className="doc-h2">4. 스위치 (Switch)</h2>
    <p className="text-sm text-gray-600 mb-2">기능의 On/Off 상태를 즉각적으로 변경할 때 사용합니다.</p>
    <table className="wf-table">
      <thead><tr><th>상태</th><th>예시</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>On / Off</strong></td>
          <td className="wf-col">
             <div className="flex flex-col gap-4">
                <Switch label="알림 수신 동의 (On)" checked />
                <Switch label="위치 정보 사용 (Off)" />
             </div>
          </td>
          <td><span className="badge bg-com">공통</span> 활성 상태일 때 브랜드 컬러(#FF6600)가 적용됩니다.</td>
        </tr>
        <tr>
          <td><strong>비활성 (Disabled)</strong></td>
          <td className="wf-col">
             <Switch label="설정 불가 항목" disabled />
          </td>
          <td><span className="badge bg-com">공통</span> 제어할 수 없는 상태임을 나타내며, 흐릿하게 표시됩니다.</td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">5. 세그먼트 컨트롤 (Segment Control)</h2>
    <p className="text-sm text-gray-600 mb-2">상호 배타적인 옵션 중 하나를 선택할 때 사용합니다.</p>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>예시</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>2분할</strong></td>
          <td className="wf-col">
             <SegmentControl options={['남성', '여성']} activeIndex={0} />
          </td>
          <td><span className="badge bg-com">공통</span> 성별 등 양자택일 구조에서 사용합니다.</td>
        </tr>
        <tr>
          <td><strong>3분할 이상</strong></td>
          <td className="wf-col">
             <SegmentControl options={['1인 한정', '부부 한정', '가족 한정']} activeIndex={1} />
          </td>
          <td><span className="badge bg-com">공통</span> 3개 이상의 옵션을 가로로 균등하게 배치합니다.</td>
        </tr>
        <tr>
          <td><strong>비활성</strong></td>
          <td className="wf-col">
             <SegmentControl options={['옵션 A', '옵션 B']} disabled />
          </td>
          <td><span className="badge bg-com">공통</span> 선택이 불가능한 상태입니다.</td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">6. 버튼 선택 (Button Selection)</h2>
    <p className="text-sm text-gray-600 mb-2">나열된 키워드 중 하나 이상을 선택할 때 사용합니다.</p>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>예시</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>키워드 선택형</strong></td>
          <td className="wf-col">
            <div className="p-4 bg-gray-50 rounded border border-gray-200 mb-2">
                <h4 className="text-sm font-bold mb-2">운전자 범위 선택</h4>
                <SelectionButtonGroup options={['본인', '배우자', '자녀', '부모님', '형제자매']} />
            </div>
          </td>
          <td><span className="badge bg-com">공통</span> 나열된 키워드 중 하나 이상을 선택할 때 사용합니다. 터치 영역을 확실히 확보해야 할 때 유용합니다.</td>
        </tr>
        {/* NEW INSTALLMENT SELECTION */}
        <tr>
            <td><strong>그리드 선택형<br/>(Grid Layout)</strong></td>
            <td className="wf-col">
                <div className="p-4 bg-gray-50 rounded border border-gray-200 mb-2">
                    <h4 className="text-sm font-bold mb-2">납부방법 선택</h4>
                    <InstallmentSelection />
                </div>
            </td>
            <td><span className="badge bg-com">공통</span> 납부 방식 등 옵션이 많을 때 그리드 형태로 배치합니다. 자동이체 여부 등 부가 정보를 작게 표시합니다.</td>
        </tr>
      </tbody>
    </table>

    {/* NEW AMOUNT SELECT */}
    <h2 className="doc-h2">7. 가입금액 선택 (Amount Select)</h2>
    <table className="wf-table">
        <thead><tr><th>유형</th><th>예시</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
                <td><strong>드롭다운형</strong></td>
                <td className="wf-col">
                    <span className="wf-label">건물 보장</span>
                    <AmountSelect value="3억원" />
                </td>
                <td><span className="badge bg-gen">일반</span> 보장 금액을 선택할 때 사용하며, 텍스트가 굵게 강조됩니다. (주택화재)</td>
            </tr>
        </tbody>
    </table>

    <h2 className="doc-h2">8. 유의사항 아코디언 (Notice)</h2>
    <p className="doc-desc">강조해야 할 유의사항이나 팁을 제공할 때 사용하는 전용 아코디언 스타일입니다.</p>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>예시</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>박스형 아코디언</strong></td>
          <td className="wf-col">
            <div className="w-full max-w-md">
                <Notice title="꼭 알아두세요">
                    <ul className="list-disc pl-4 space-y-2">
                        <li>사고과실 판정은 과실기준도표를 기준으로 산정하며 실제 적용되는 과실은 사고현장, 사고형태 등에 따라 변경될 수 있습니다.</li>
                        <li>보상처리 관련 내용은 담당자에게 문의해주세요.</li>
                    </ul>
                </Notice>
            </div>
          </td>
          <td><span className="badge bg-com">공통</span> 강조해야 할 유의사항이나 팁을 제공할 때 사용하는 전용 아코디언 스타일입니다.</td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">9. 플랜 선택 캐러셀 (Plan Carousel)</h2>
    <table className="wf-table">
        <thead><tr><th>유형</th><th>예시</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
                <td><strong>카드 캐러셀</strong></td>
                <td className="wf-col">
                    <PlanCarousel plans={[
                        { name: '실속형', price: '10,000원', features: ['기본 보장', '저렴한 보험료'] },
                        { name: '표준형', price: '25,000원', features: ['균형 잡힌 보장', '합리적인 선택'], recommended: true },
                        { name: '고급형', price: '50,000원', features: ['최대 보장', '프리미엄 혜택'] }
                    ]} />
                </td>
                <td>
                    <span className="badge bg-long">장기</span>
                    <ul className="list-disc pl-4 space-y-1 text-gray-600">
                        <li>여러 보험 플랜을 좌우 스크롤로 비교하고 선택할 수 있는 카드형 UI입니다.</li>
                        <li>추천 플랜에 배지를 표시하여 선택을 유도할 수 있습니다.</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>

    {/* ADDED: Icon Action List from Addition Tab */}
    <h2 className="doc-h2">10. 아이콘 액션 리스트 (Icon Action List)</h2>
    <table className="wf-table">
        <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
                <td><strong>인증수단 선택</strong></td>
                <td className="wf-col">
                    <IconActionList />
                </td>
                <td>
                    <span className="badge bg-com">공통</span>
                    <ul className="list-disc pl-4 space-y-1 text-gray-600">
                        <li>로그인이나 본인인증 시 다양한 수단을 목록 형태로 제공합니다.</li>
                        <li>좌측 아이콘, 중앙 텍스트, 우측 화살표로 구성된 버튼 형태입니다.</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
  </>
);

const ActionGuide = () => (
  <>
    <h1 className="doc-h1">액션(Action) 컴포넌트 가이드</h1>
    <p className="doc-desc">
      사용자가 특정 기능을 실행하거나 페이지를 이동할 때 사용하는 버튼 및 링크 컴포넌트입니다.<br/>
      중요도에 따라 버튼의 위계(Primary, Secondary 등)를 구분하여 사용합니다.
    </p>

    <h2 className="doc-h2">1. 버튼 (Button)</h2>
    <table className="wf-table">
      <thead><tr><th>유형 (Variant)</th><th>예시 (Preview)</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>Primary</strong></td>
          <td className="wf-col">
             <Button variant="primary" size="full">확인</Button>
          </td>
          <td><span className="badge bg-com">공통</span> 페이지의 가장 주된 액션(저장, 다음, 완료 등)에 사용합니다. (Orange)</td>
        </tr>
        <tr>
          <td><strong>Secondary</strong></td>
          <td className="wf-col">
             <Button variant="secondary" size="full">취소</Button>
          </td>
          <td><span className="badge bg-com">공통</span> Primary 버튼을 보조하거나, 대등한 위계의 선택지(이전 등)에 사용합니다.</td>
        </tr>
        {/* NEW SPLIT BUTTON GROUP */}
        <tr>
            <td><strong>분할 버튼 그룹<br/>(Split Group)</strong></td>
            <td className="wf-col">
                <SplitButtonGroup />
            </td>
            <td><span className="badge bg-com">공통</span> 서로 다른 성격의 액션을 나란히 배치할 때 사용합니다. 좌측은 회색(보조), 우측은 브랜드 컬러(주요)를 적용합니다.</td>
        </tr>
        <tr>
          <td><strong>Outline</strong></td>
          <td className="wf-col">
             <Button variant="outline">인증번호 요청</Button>
          </td>
          <td><span className="badge bg-com">공통</span> 강조가 필요하지만 배경색이 채워질 정도는 아닌 중간 중요도의 액션에 사용합니다.</td>
        </tr>
        <tr>
          <td><strong>크기 (Size)</strong></td>
          <td className="wf-col">
             <div className="flex flex-wrap gap-2 items-center">
                <Button size="sm" variant="primary">Small</Button>
                <Button size="md" variant="primary">Medium</Button>
                <Button size="lg" variant="primary">Large</Button>
             </div>
             <div className="mt-2">
                <Button size="full" variant="secondary">Full Width</Button>
             </div>
          </td>
          <td><span className="badge bg-com">공통</span> 버튼의 크기는 영역의 중요도와 터치 편의성을 고려하여 사용합니다. 하단 고정 버튼은 Full Width를 사용합니다.</td>
        </tr>
         <tr>
          <td><strong>상태 (State)</strong></td>
          <td className="wf-col">
             <div className="flex gap-2 w-full">
                <div className="flex-1">
                    <Button variant="primary" size="full">Normal</Button>
                </div>
                <div className="flex-1">
                    <Button variant="primary" disabled size="full">Disabled</Button>
                </div>
             </div>
          </td>
          <td><span className="badge bg-com">공통</span> 비활성 상태일 경우 회색조로 처리하여 클릭 불가능함을 나타냅니다.</td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">2. 링크 및 기타 액션</h2>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>예시</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>텍스트 링크</strong></td>
          <td className="wf-col">
             <div className="flex gap-4">
                <LinkText text="자세히 보기" icon="arrow" />
                <LinkText text="약관 다운로드" icon="download" type="primary" />
             </div>
          </td>
          <td><span className="badge bg-com">공통</span> 텍스트와 아이콘(화살표, 다운로드)을 조합하여 페이지 이동이나 파일 다운로드를 유도합니다.</td>
        </tr>
        <tr>
          <td><strong>박스형 링크</strong></td>
          <td className="wf-col">
             <div className="w-64">
                <BoxLink title="필요 서류 안내" linkText="청구 서류 확인하기" />
             </div>
          </td>
          <td><span className="badge bg-com">공통</span> 별도의 영역(박스)을 할당하여 클릭 가능함을 명확히 인지시키는 링크입니다.</td>
        </tr>
        <tr>
          <td><strong>파일 버튼</strong></td>
          <td className="wf-col">
             <div className="flex gap-2">
                <FileButton type="pdf" />
                <FileButton type="doc" />
                <FileButton type="view" label="약관보기" />
             </div>
          </td>
          <td><span className="badge bg-com">공통</span> 문서 다운로드나 미리보기 기능을 제공할 때 사용하는 작은 버튼입니다.</td>
        </tr>
      </tbody>
    </table>

    {/* ADDED: Account Button from Addition Tab */}
    <h2 className="doc-h2">3. 계좌/카드 선택 (Account Selection)</h2>
    <table className="wf-table">
        <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
                <td><strong>계좌 정보 표시</strong></td>
                <td className="wf-col">
                    <AccountButton bankName="국민은행" accountNumber="6556201895455***" />
                    <div className="h-2"></div>
                    <AccountButton bankName="신한은행" accountNumber="6556201895454***" />
                </td>
                <td>
                    <span className="badge bg-my">MY</span>
                    <ul className="list-disc pl-4 space-y-1 text-gray-600">
                        <li>등록된 계좌나 카드 정보를 선택할 때 사용합니다.</li>
                        <li>상단에 기관명(은행/카드사), 하단에 번호를 굵게 표시합니다.</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
  </>
);

const DisplayGuide = () => (
  <>
    <h1 className="doc-h1">데이터 표현(Display) 컴포넌트 가이드</h1>
    <p className="doc-desc">
      데이터와 콘텐츠를 시각적으로 구조화하여 사용자에게 명확하게 전달하기 위한 가이드라인입니다.<br/>
      정보의 성격과 양에 따라 적절한 컴포넌트(표, 리스트, 카드 등)를 선택하여 사용합니다.
    </p>

    <h2 className="doc-h2">1. 탭 (Tab)</h2>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>기본형</strong></td>
          <td className="wf-col">
             <TabGroup tabs={['문자로 링크 받기', '직접 사진 등록']} />
             <div className="h-4"></div>
             <TabGroup tabs={['동일동시', '동일추가']} />
          </td>
          <td>
             <span className="badge bg-com">공통</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>콘텐츠를 성격에 따라 분류하고, 사용자가 원하는 정보를 빠르게 찾을 수 있도록 돕습니다.</li>
              <li>현재 선택된 탭을 명확하게 강조(Bold, Underline)하여 위치를 인지시킵니다.</li>
             </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">2. 카드 (Card)</h2>
    <p className="doc-desc">관련된 정보를 하나의 그룹으로 묶어 시각적으로 명확하게 구분합니다.</p>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>기본 카드</strong></td>
          <td className="wf-col">
            <Card title="계약 관리">
               <p className="text-sm text-gray-500">정상 유지중인 계약이 있습니다.</p>
            </Card>
          </td>
          <td>
             <span className="badge bg-com">공통</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>정보를 단순 그룹화하여 보여줄 때 사용합니다.</li>
              <li>제목과 본문으로 구성되며, 그림자 효과로 배경과 구분합니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td><strong>선택형 카드</strong></td>
          <td className="wf-col">
            <Card title="프리미엄 플랜" badge="추천" selected={true}>
               <p className="text-sm text-gray-500">월 50,000원</p>
            </Card>
          </td>
          <td>
             <span className="badge bg-com">공통</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>사용자가 선택 가능한 항목을 카드 형태로 보여줄 때 사용합니다.</li>
              <li>선택된 상태(테두리 색상 등)와 배지(Badge)를 통해 상태 정보를 제공할 수 있습니다.</li>
            </ul>
          </td>
        </tr>
        {/* NEW DATA CARD */}
        <tr>
            <td><strong>데이터 카드<br/>(Data Card)</strong></td>
            <td className="wf-col">
                <DataCard 
                    badge="은행개인"
                    title="홍길동"
                    rows={[
                        { label: '발급기관', value: '국민은행' },
                        { label: '만료일', value: '2025-02-10' }
                    ]}
                />
                <div className="h-3"></div>
                <DataCard 
                    badge="기간만료"
                    title="자동차보험 (80고**44)"
                    rows={[
                        { label: '보험기간', value: '25.01.18~25.01.19' },
                        { label: '보험료', value: '1,014,320원' }
                    ]}
                    footerText="진행단계: 보험료 계산"
                    onClick={() => {}}
                />
            </td>
            <td>
                <span className="badge bg-auto">자동차</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>좌측 레이블과 우측 데이터가 정렬된 명세형 카드입니다.</li>
                    <li>상단 배지를 통해 상태(은행개인, 기간만료 등)를 구분합니다.</li>
                </ul>
            </td>
        </tr>
        {/* NEW INFOBOX */}
        <tr>
            <td><strong>InfoBox<br/>(요약)</strong></td>
            <td className="wf-col">
                <InfoBox rows={[
                    { label: '차량번호', value: '18루**22' },
                    { label: '운전자 범위', value: '가족한정' },
                    { label: '운전자 연령', value: '만 35세 이상' }
                ]} />
            </td>
            <td>
                <span className="badge bg-auto">자동차</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>핵심 정보(차량, 운전자 정보 등)를 간결하게 요약하여 전달합니다.</li>
                    <li>디자인 명칭: infobox</li>
                </ul>
            </td>
        </tr>
        {/* NEW CARD TYPES */}
        <tr>
            <td><strong>정보형 카드<br/>(기본)</strong></td>
            <td className="wf-col">
                <InfoCard 
                    title="109조**33 Hicar개인용(CM)" 
                    rows={[
                        { label: '휴대폰번호', value: '010-****-1234' },
                        { label: '신청서비스', value: '배터리 충전' }
                    ]}
                />
            </td>
            <td>
                <span className="badge bg-auto">자동차</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>계약 정보나 신청 내역 등 핵심 정보를 요약하여 보여줄 때 사용합니다.</li>
                    <li>타이틀 하단에 레이블(Label)과 값(Value) 형태의 목록을 배치합니다.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><strong>정보형 카드<br/>(링크)</strong></td>
            <td className="wf-col">
                <InfoCard 
                    type="link"
                    title="18루 **22 Hicar 개인용" 
                    rows={[
                        { label: '접수번호', value: '1907030701' },
                        { label: '사고일', value: '2023.03.02' },
                        { label: '사고접수일', value: '2023.03.02' }
                    ]}
                />
            </td>
            <td>
                <span className="badge bg-auto">자동차</span> <span className="badge bg-my">MY</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>상세 화면으로 이동 가능한 정보 카드입니다.</li>
                    <li>우측 상단에 화살표(Chevron) 아이콘을 배치하여 이동 가능함을 나타냅니다.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><strong>정보형 카드<br/>(상세/단계)</strong></td>
            <td className="wf-col">
                <InfoCard 
                    type="detail"
                    title="고*기"
                    badge="대인"
                    step="2-1"
                    rows={[
                        { label: '치료병원', value: '삼********' },
                        { label: '담당자', value: '홍길동(010-5678-5678)' }
                    ]}
                />
            </td>
            <td>
                <span className="badge bg-com">공통</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>진행 단계(Step)나 상태(Badge) 정보를 포함하는 상세 카드입니다.</li>
                    <li>접수 내역, 보상 처리 현황 등을 보여줄 때 유용합니다.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><strong>결제/영수증 카드<br/>(Bill Card)</strong></td>
            <td className="wf-col">
                <BillCard 
                    title="해외여행보험"
                    rows={[
                        { label: '피보험자', value: '김*대 (910101-*******)' },
                        { label: '보험 기간', value: '2025.03.24 00시 ~ 03.28 19시' }
                    ]}
                    originalPrice="100,000원"
                    finalPrice="75,000원"
                    discountInfo="다이렉트할인(10%), 동반형할인(15%)"
                />
            </td>
            <td>
                <span className="badge bg-gen">일반</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>최종 보험료와 할인 내역을 영수증 형태로 보여주는 카드입니다.</li>
                    <li>상단에 상품명 헤더, 하단에 강조된 최종 금액이 위치합니다.</li>
                </ul>
            </td>
        </tr>
        {/* NEW PRODUCT SUMMARY CARD */}
        <tr>
            <td><strong>상품 요약 카드<br/>(Product Summary)</strong></td>
            <td className="wf-col">
                <ProductSummaryCard />
            </td>
            <td>
                <span className="badge bg-long">장기</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>어린이보험 등 복합 설계 상품의 핵심 정보를 요약합니다.</li>
                    <li>플랜 등급, 보장 개수, 출생 전/후 보험료 정보를 포함합니다.</li>
                </ul>
            </td>
        </tr>
        {/* NEW PAYMENT CARD */}
        <tr>
            <td><strong>결제 수단 카드<br/>(Payment Card)</strong></td>
            <td className="wf-col">
                <PaymentCard 
                    title="삼성카드" 
                    benefits={[
                        "6개월 부분 무이자 할부 (1~3회차 이자 고객 부담)",
                        "5만원 이상 결제 시 단일 결제 승인건 기준"
                    ]}
                />
            </td>
            <td>
                <span className="badge bg-com">공통</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>카드사 로고, 상품명, 화살표 아이콘을 포함하는 목록형 카드입니다.</li>
                    <li>하단에 혜택 정보를 불릿 포인트로 상세히 나열합니다.</li>
                </ul>
            </td>
        </tr>
        {/* NEW THUMBNAIL LIST ITEM */}
        <tr>
            <td><strong>썸네일 목록<br/>(Thumbnail List)</strong></td>
            <td className="wf-col">
                <ThumbnailListItem 
                    title="초록우산 어린이재단"
                    description="작은 몸으로 병을 이겨내는 은우에게 도움의 손길을 내밀어 주세요!"
                    date="2025.01.01 ~ 2025.01.31"
                    badge="종료"
                />
            </td>
            <td>
                <span className="badge bg-cont">콘텐츠</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>좌측 썸네일 이미지와 함께 상태 배지, 타이틀, 설명글을 표시합니다.</li>
                    <li>기부 내역이나 이벤트 목록 등에 사용됩니다.</li>
                </ul>
            </td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">3. 테이블 (Table)</h2>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>데이터 테이블</strong></td>
          <td className="wf-col">
             <DataTable />
          </td>
          <td>
             <span className="badge bg-com">공통</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>복잡한 데이터를 행과 열로 정렬하여 비교/분석을 돕습니다.</li>
              <li>헤더(항목명)와 바디(데이터)를 시각적으로 구분합니다.</li>
              <li>모바일 환경에서는 가로 스크롤이나 행/열 전환을 고려해야 합니다.</li>
             </ul>
          </td>
        </tr>
        {/* NEW PC TABLE */}
        <tr>
          <td><strong>PC 복합 테이블<br/>(Complex Table)</strong></td>
          <td className="wf-col">
             <InsuranceTablePC />
          </td>
          <td>
             <span className="badge bg-auto">자동차</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>PC 환경에서 사용하는 복합적인 테이블입니다.</li>
              <li>행 내부에 체크박스, 텍스트 입력, 버튼, 드롭다운 등 다양한 컨트롤이 포함됩니다.</li>
             </ul>
          </td>
        </tr>
        <tr>
          <td><strong>비교 테이블<br/>(Comparison)</strong></td>
          <td className="wf-col">
             <ComparisonTable />
          </td>
          <td>
             <span className="badge bg-long">장기</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>3개 이상의 플랜(실속/표준/고급)을 비교할 때 사용합니다.</li>
              <li>기준이 되는 열(표준형)을 강조하여 보여줍니다.</li>
             </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">4. 목록 (List)</h2>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>링크 이동형</strong></td>
          <td className="wf-col">
             <div className="border-t border-gray-200">
                <ListRow text="보험만기일/중고차/신차 안내" />
                <ListRow text="차량 정보 직접 선택하기" />
                <ListRow text="차량 정보 재조회하기" subText="2025.01.01 조회 기준" />
            </div>
          </td>
          <td>
             <span className="badge bg-com">공통</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>동일한 형태의 콘텐츠를 수직으로 나열하여 제공합니다.</li>
              <li>상세 화면으로 이동이 가능한 경우 우측에 화살표(Chevron) 아이콘을 배치합니다.</li>
             </ul>
          </td>
        </tr>
        {/* NEW HIERARCHY LIST */}
        <tr>
          <td><strong>계층형 목록<br/>(Hierarchy List)</strong></td>
          <td className="wf-col">
             <HierarchyList />
          </td>
          <td>
             <span className="badge bg-auto">자동차</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>제조사 > 차종 > 연식 등 단계적 선택이 필요할 때 사용합니다.</li>
              <li>상위 항목 선택 시 하위 목록이 갱신되는 구조를 가집니다.</li>
             </ul>
          </td>
        </tr>
        <tr>
          <td><strong>이미지 목록형<br/>(Image List)</strong></td>
          <td className="wf-col">
            <div className="border border-gray-200 rounded p-4">
                <Banner title="병원비 청구" desc="질병/상해로 병원을 방문한 경우" icon={true} />
                <Banner title="배터리 충전" desc="비상출동 서비스 이용" icon={true} />
            </div>
          </td>
          <td>
             <span className="badge bg-com">공통</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>이미지 아이콘을 포함하여 시각적 인지도를 높인 목록입니다.</li>
              <li>주로 메인 서비스나 카테고리 이동 시 사용합니다.</li>
             </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">5. 배너 (Banner)</h2>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>정보/혜택 배너</strong></td>
          <td className="wf-col">
             <Banner title="연간 주행거리에 따른" desc="내 보험료 얼마일까요?" icon={true} />
             <Banner title="자동차보험료 결제혜택" desc="최대 3만원! 카드사/간편결제 제공" />
          </td>
          <td>
             <span className="badge bg-com">공통</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>이벤트, 공지사항 등 강조하고 싶은 정보를 시각적으로 돋보이게 표현합니다.</li>
              <li>아이콘이나 그래픽 요소를 활용하여 주목도를 높일 수 있습니다.</li>
             </ul>
          </td>
        </tr>
        {/* NEW BANNER TYPE */}
        <tr>
            <td><strong>고객센터 배너<br/>(Contact)</strong></td>
            <td className="wf-col">
                <ContactBanner title="현대해상 고객센터" phone="1588-5656" time="평일 09:00 ~ 18:00" />
            </td>
            <td>
                <span className="badge bg-com">공통</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>고객센터 전화번호와 운영 시간을 안내하는 전용 배너입니다.</li>
                    <li>회색 배경을 사용하여 정보 영역과 구분하며, 전화번호를 크게 강조합니다.</li>
                </ul>
            </td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">6. 아코디언 (Accordion)</h2>
    <p className="doc-desc">정보의 양이 많을 때 제목만 노출하고, 사용자가 원할 때 상세 내용을 펼쳐볼 수 있게 하여 스크롤 부담을 줄여줍니다.</p>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>목록형</strong></td>
          <td className="wf-col">
            <Accordion title="유의사항 확인하기" isOpen={true}>
              <ul className="list-disc pl-4 text-xs text-gray-500 space-y-1">
                <li>보험료 납입 연체 시 해지될 수 있습니다.</li>
                <li>청약 철회는 15일 이내 가능합니다.</li>
              </ul>
            </Accordion>
          </td>
          <td>
             <span className="badge bg-com">공통</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>약관, 유의사항 등 긴 텍스트 정보를 제공할 때 효율적입니다.</li>
              <li>우측 화살표 아이콘으로 확장/축소 상태를 표시합니다.</li>
             </ul>
          </td>
        </tr>
        <tr>
            <td><strong>플랜 선택형<br/>(Plan Select)</strong></td>
            <td className="wf-col">
                <div className="flex flex-col">
                    <PlanAccordion planName="고급형" price="18,600원" tag="추천" features={['상해사망 3억원', '질병사망 3천만원', '휴대품손해 50만원']} isOpen={true} />
                    <PlanAccordion planName="표준형" price="11,500원" features={['상해사망 1억원', '질병사망 1천만원']} />
                </div>
            </td>
            <td>
                <span className="badge bg-long">장기</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>보험 플랜(실속/표준/고급)을 선택하고 상세 내용을 확인할 때 사용합니다.</li>
                    <li>선택 시 테두리가 강조되며 상세 보장 내용이 펼쳐집니다.</li>
                </ul>
            </td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">7. 디스클로저 (Disclosure)</h2>
    <p className="doc-desc">부가적인 설명이나 도움말 등 보조적인 성격의 콘텐츠를 기본적으로 숨겨두고, 사용자가 선택적으로 확인할 수 있게 합니다.</p>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>상세펼침</strong></td>
          <td className="wf-col">
            <Disclosure title="연말정산시 기부금이 포함되나요?">
                <p>아니요, 연말정산 기부금에는 포함되지 않습니다.</p>
            </Disclosure>
            <Disclosure title="기부 이벤트 참여주기가 어떻게 되나요?">
                <p>기부 이벤트는 매월 1회 참여 가능합니다.</p>
            </Disclosure>
          </td>
          <td>
             <span className="badge bg-com">공통</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>Q&A 리스트나 툴팁 성격의 정보를 보여줄 때 주로 사용합니다.</li>
              <li>아코디언보다 가벼운 위계의 정보를 다룹니다.</li>
             </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">8. 페이지네이션 (Pagination)</h2>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>점 유형<br/>(Dots)</strong></td>
          <td className="wf-col">
             <Pagination current={1} total={3} type="dots" />
          </td>
          <td>
             <span className="badge bg-com">공통</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>온보딩이나 단순 배너 슬라이드 등 페이지 수가 적을 때 사용합니다.</li>
             </ul>
          </td>
        </tr>
        <tr>
          <td><strong>숫자 유형<br/>(Number)</strong></td>
          <td className="wf-col">
             <Pagination current={1} total={5} />
          </td>
          <td>
             <span className="badge bg-com">공통</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>목록형 데이터 등 페이지 이동이 빈번할 때 사용합니다.</li>
              <li>현재 페이지와 전체 페이지 수를 명확히 표시합니다.</li>
             </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">9. 스텝퍼 (Stepper)</h2>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>숫자형</strong></td>
          <td className="wf-col">
            <div className="mb-2 text-sm font-bold">고객 정보 입력</div>
            <Stepper current={1} total={3} />
          </td>
          <td>
             <span className="badge bg-com">공통</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>단계별 프로세스에서 현재 진행 상황과 남은 단계를 보여줍니다.</li>
              <li>사용자가 전체 과정을 예측하고 이탈하지 않도록 돕습니다.</li>
             </ul>
          </td>
        </tr>
        <tr>
            <td><strong>타임라인형<br/>(Timeline)</strong></td>
            <td className="wf-col">
                <ProcessTimeline startLabel="성별을 알려주세요" endLabel="이제 보험료를 알아볼게요" />
            </td>
            <td>
                <span className="badge bg-com">공통</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>현재 진행 중인 프로세스의 시작과 끝, 그리고 현재 위치를 시각적으로 보여줍니다.</li>
                    <li>비행기 아이콘 등을 활용하여 진행 방향을 나타냅니다.</li>
                </ul>
            </td>
        </tr>
      </tbody>
    </table>

    <h2 className="doc-h2">10. 배지 (Badge)</h2>
    <p className="doc-desc">콘텐츠의 상태나 속성을 텍스트와 색상으로 간결하게 표시하여 정보를 강조합니다.</p>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>변형 (Variant)</strong></td>
          <td className="wf-col">
             <div className="flex flex-wrap gap-2">
                <UIBadge text="D-7" variant="orange" />
                <UIBadge text="가입가능" variant="green" />
                <UIBadge text="심사중" variant="blue" />
                <UIBadge text="마감" variant="gray" />
             </div>
          </td>
          <td>
             <span className="badge bg-com">공통</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>색상을 통해 상태의 긍정/부정/중립 의미를 전달합니다.</li>
              <li>공간 효율을 위해 텍스트는 짧고 명확하게 유지해야 합니다.</li>
             </ul>
          </td>
        </tr>
      </tbody>
    </table>
    
    <h2 className="doc-h2">11. 툴팁 (Tooltip)</h2>
    <table className="wf-table">
      <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>도움말 툴팁</strong></td>
          <td className="wf-col">
            <div className="p-10 bg-gray-50 border border-gray-200 rounded flex justify-center items-center h-40">
                <Tooltip content="오후 6시 이후에 지급이 확정되면, 보험금은 다음날(영업일 기준)에 송금돼요." />
            </div>
          </td>
          <td>
             <span className="badge bg-com">공통</span>
             <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li>용어 설명이나 부가적인 안내가 필요할 때 사용합니다. 아이콘을 클릭하면 말풍선 형태로 정보가 제공됩니다.</li>
             </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);

const FeedbackGuide = () => (
    <>
        <h1 className="doc-h1">피드백(Feedback) 컴포넌트 가이드</h1>
        <p className="doc-desc">
        사용자의 행동에 대한 처리 결과, 시스템 상태, 알림 등을 전달하여 사용자와 시스템 간의 원활한 소통을 돕는 컴포넌트입니다.
        </p>

        <h2 className="doc-h2">1. 모달 팝업 (Modal)</h2>
        <table className="wf-table">
        <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
            <td><strong>알림/확인</strong></td>
            <td className="wf-col">
                <ModalPreview />
            </td>
            <td>
                <span className="badge bg-com">공통</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                <li>사용자의 작업 흐름을 강제로 중단하고, 즉각적인 확인이나 선택이 필요할 때 사용합니다.</li>
                <li>중요한 경고, 삭제 확인, 프로세스 이탈 방지 등에 활용됩니다.</li>
                <li>배경을 어둡게(Dimmed) 처리하여 팝업 내용에 집중하게 합니다.</li>
                </ul>
            </td>
            </tr>
        </tbody>
        </table>

        <h2 className="doc-h2">2. 바텀 시트 (Bottom Sheet)</h2>
        <table className="wf-table">
        <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
            <td><strong>목록 선택형</strong></td>
            <td className="wf-col">
                <BottomSheetPreview />
            </td>
            <td>
                <span className="badge bg-com">공통</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                <li>모바일 환경에서 다수의 옵션 중 하나를 선택하거나 부가 정보를 입력할 때 유용합니다.</li>
                <li>화면 하단에서 위로 올라오는 애니메이션을 사용하며, 한 손 조작이 용이합니다.</li>
                </ul>
            </td>
            </tr>
            {/* ADDED: Image Bottom Sheet Banner from Addition Tab */}
            <tr>
                <td><strong>배너형</strong></td>
                <td className="wf-col">
                    <ImageBottomSheetPreview />
                </td>
                <td>
                    <span className="badge bg-com">공통</span>
                    <ul className="list-disc pl-4 space-y-1 text-gray-600">
                        <li>관리자가 등록한 이미지를 바텀시트 상단에 배너 형태로 노출합니다.</li>
                        <li>닫기 버튼이 이미지 위에 오버레이되거나 상단 우측에 배치됩니다.</li>
                    </ul>
                </td>
            </tr>
        </tbody>
        </table>

        <h2 className="doc-h2">3. 엠티 스테이트 (Empty State)</h2>
        <table className="wf-table">
        <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
            <td><strong>데이터 없음</strong></td>
            <td className="wf-col">
                <EmptyState text="중복 가입된 담보가 없습니다." />
            </td>
            <td>
                <span className="badge bg-com">공통</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                <li>표시할 데이터가 없거나 초기 상태일 때 사용자에게 안내 메시지를 제공합니다.</li>
                <li>느낌표 아이콘과 간결한 문구로 상황을 명확히 전달합니다.</li>
                </ul>
            </td>
            </tr>
        </tbody>
        </table>

        <h2 className="doc-h2">4. 로딩 (Loading)</h2>
        <table className="wf-table">
        <thead><tr><th>유형</th><th>사례</th><th>설명</th></tr></thead>
        <tbody>
            <tr>
            <td><strong>스피너형</strong></td>
            <td className="wf-col">
                <LoadingSpinner text="서비스 처리 중이에요. 잠시만 기다려주세요." />
            </td>
            <td>
                <span className="badge bg-com">공통</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                <li>데이터 로딩이나 처리 대기 시간이 필요할 때 사용합니다.</li>
                <li>브랜드 컬러가 적용된 회전 애니메이션과 안내 문구를 함께 표시합니다.</li>
                </ul>
            </td>
            </tr>
        </tbody>
        </table>
    </>
);

export default App;
