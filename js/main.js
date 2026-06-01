// [다국어 지원 버전] 언어 선택 및 자동 번역 스크립트
const translations = {
    ko: {
        home: "홈",
        products: "제품정보",
        solutions: "솔루션",
        guide: "가이드",
        board: "자유게시판",
        community: "커뮤니티",
        consult: "문의하기",
        hero_title: "미래를 움직이는<br>AI 로봇 솔루션",
        hero_desc: "AI-ROBO는 산업 자동화의 새로운 기준을 제시합니다. 더 똑똑하고 안전한 협동 로봇으로 생산성을 혁신하세요.",
        quick_links: "Quick Links",
        connect: "Connect",
        footer_desc: "산업 자동화의 혁신을 이끄는 AI 협동로봇 솔루션 전문 기업입니다.",
        hero_btn_product: "제품 알아보기",
        hero_btn_video: "영상 보기",
        stat_partners: "글로벌 파트너사",
        stat_prod: "생산성 향상",
        stat_accident: "사고 발생률",
        stat_monitoring: "실시간 모니터링",
        lang_modal_title: "언어를 선택해주세요",
        news_title: "최신 소식",
        news_desc: "AI-ROBO의 최신 기술 업데이트와 기업 뉴스를 확인하세요.",
        news_more: "모든 소식 보기",
        news1_title: "AI Vision 업데이트: 야간 작업 정밀도 30% 향상",
        news1_desc: "새로운 AI 비전 알고리즘을 통해 저조도 환경에서도 정밀한 작업이 가능해졌습니다.",
        news2_title: "2026 글로벌 로보틱스 엑스포 참가 리포트",
        news2_desc: "독일에서 열린 최대 규모의 로봇 박람회에서 AI-ROBO의 기술력이 극찬을 받았습니다.",
        news3_title: "협동로봇 안전 가이드: 펜스 없는 작업장의 설계",
        news3_desc: "함께 일하는 동료로서의 로봇, 안전을 위한 최적의 배치 방법을 안내합니다.",
        prod_title: "AI 협동로봇 라인업",
        prod_desc: "귀하의 작업장에 최적화된 AI 파트너를 만나보세요.",
        sol_title: "산업별 맞춤형 솔루션",
        sol_desc: "AI-ROBO는 다양한 현장의 문제를 해결합니다.",
        sol1_title: "자동차 산업",
        sol1_desc: "정밀한 볼트 체결, 실링 도포, 부품 검사 등 복잡한 공정을 AI 비전 기술로 자동화합니다.",
        sol2_title: "전자/반도체",
        sol2_desc: "ESD 보호 기능을 갖춘 로봇으로 민감한 전자 부품의 핸들링과 PCB 검사를 수행합니다.",
        sol3_title: "물류/팔레타이징",
        sol3_desc: "다양한 크기의 박스를 인식하고 최적의 경로로 적재하는 AI 알고리즘을 제공합니다.",
        sol4_title: "의료/실험실",
        sol4_desc: "정확한 용량 취급과 반복적인 테스트 공정을 24시간 오차 없이 수행합니다.",
        guide_title: "기술 문서 및 설치 가이드",
        guide1_title: "하드웨어 설치 가이드",
        guide1_desc: "로봇 베이스 설치부터 전원 공급, 기구적 연결 방법을 단계별로 안내합니다.",
        guide2_title: "AI 비전 세팅 방법론",
        guide2_desc: "작업 공간 학습 및 객체 인식을 위한 소프트웨어 초기 보정 가이드입니다.",
        guide3_title: "안전 프로토콜 및 유지보수",
        guide3_desc: "정기 점검 리스트와 비상 정지 시스템 확인 절차를 포함합니다.",
        btn_download_pdf: "Download PDF",
        btn_step_by_step: "Step-by-Step",
        btn_read_online: "Read Online",
        guide1_full: "본 가이드는 AI-ROBO 하드웨어의 안전한 설치를 위한 지침서입니다.\n\n[주요 설치 단계]\n1. 로봇 베이스 고정: M8 볼트를 사용하여 15mm 이상의 강철 지지대에 고정\n2. 전원 연결: 220V 단상 전원을 컨트롤 박스에 연결\n3. 하중 설정: 제품 사양에 맞는 Tool Weight 설정\n4. 초기 기동: 비상 정지 버튼 해제 후 캘리브레이션 모드 진입",
        guide2_full: "AI 비전 알고리즘의 정확도를 극대화하기 위한 보정 가이드입니다.\n\n[세팅 절차]\n1. 조명 설정: 작업 영역에 500 Lux 이상의 균일한 조도 확보\n2. 체커보드 인식: 제공된 캘리브레이션판을 4가지 각도에서 인식\n3. ROI 설정: 로봇의 유효 작업 영역 내 관심 구역을 드래그하여 지정\n4. 딥러닝 학습: 인공지능이 부품을 인식하도록 100장 이상의 이미지 데이터 수집",
        guide3_full: "안전한 작업 환경을 유지하기 위한 필수 프로토콜입니다.\n\n[유지보수 리스트]\n- 주간 점검: 관절 소음 및 볼트 풀림 여부 확인\n- 월간 점검: 컨트롤 박스 필터 청소 및 팬 작동 확인\n- 분기 점검: 케이블 피복 마모 상태 정밀 검사\n\n[안전 수칙]\n- 로봇 가동 중 반경 내 절대 진입 금지\n- 비상 정지 시스템은 매 정가 기동 전 테스트 필수",
        comm_desc: "기술 소식과 전문 상담을 한 곳에서 확인하세요.",
        tab_news: "AI 로봇 뉴스",
        tab_qna: "기술 문의 (Q&A)",
        qna_main_title: "기술 문의 및 도입 상담",
        // Products
        spec_payload: "가용 하중",
        spec_reach: "반경",
        spec_precision: "반복 정밀도",
        // Community
        qna_title: "1:1 기술 문의",
        form_name: "성함/기업명",
        form_name_ph: "작성자 이름을 입력하세요",
        form_contact: "연락처/이메일",
        form_contact_ph: "연락처를 입력하세요",
        form_email: "이메일",
        form_title: "제목",
        form_content: "내용",
        form_title_ph: "제목을 입력하세요",
        form_content_ph: "자세한 문의 내용을 입력해 주세요",
        board_write: "문의 등록하기",
        board_search_ph: "관심 있는 주제를 검색해 보세요",
        new_post_btn: "새로운 글 작성",
        modal_write_title: "당신의 생각을 들려주세요",
        form_author_ph: "작성자 성함",
        form_pw_ph: "비밀번호",
        form_board_content_ph: "자유롭게 내용을 작성해 보세요. 로봇 기술뿐만 아니라 일상의 이야기도 좋습니다.",
        btn_post: "Lounge 게시하기",
        btn_edit: "수정",
        btn_delete: "삭제",
        modal_edit_title: "이야기 다듬기",
        prompt_pw: "비밀번호를 입력하세요:",
        board_empty: "아직 라운지에 이야기가 없습니다. 첫 번째 글을 남겨보세요!",
        board_recommend: "추천",
        alert_wrong_pw: "비밀번호가 일치하지 않습니다.",
        confirm_delete: "정말로 삭제하시겠습니까?",
        comment_title: "댓글",
        comment_name_ph: "이름",
        comment_content_ph: "따뜻한 댓글을 남겨주세요",
        comment_btn: "등록",
        alert_already_voted: "이미 추천하셨습니다.",
        // Board
        lounge_title: "Lounge & Connect",
        lounge_desc: "사용자들이 들려주는 로봇 기술의 살아있는 이야기",
        detail_btn: "상세 정보 보기",
        ai3_detail: "컴팩트한 디자인으로 좁은 공간에서도 정밀한 작업이 가능한 엔트리 모델입니다. 전자/반도체 등 소형 부품 조립에 최적화되어 있습니다.",
        ai5_detail: "가장 균형 잡힌 성능으로 다양한 산업 현장에 즉시 투입 가능한 베스트셀러 모델입니다. 자동차 부품 조립부터 패키징까지 폭넓게 활용됩니다.",
        ai10_detail: "강력한 파워와 넓은 작업 반경을 갖춘 고성능 모델입니다. 중량물 팔레타이징 및 대규모 용접 공정에서 탁월한 성능을 발휘합니다.",
        key_features: "주요 특징",
        ai3_f1: "공간 절약형 디자인", ai3_f2: "정밀 전자 부품 조립",
        ai5_f1: "베스트셀러 범용 모델", ai5_f2: "고성능 AI 비전 통합",
        ai10_f1: "10kg 고하중 지원", ai10_f2: "산업용 용접 및 모듈화",
        ai3_f3: "충돌 감지 및 즉시 정지", ai3_f4: "직관적인 티칭 시스템",
        ai5_f3: "IP54 방진 방수 지원", ai5_f4: "고성능 궤적 제어",
        ai10_f3: "견고한 내구성 설계", ai10_f4: "스마트 안전 모드 탑재",
        ai3_long_desc: "AI-3는 정밀함과 공간 효율성을 극대화한 모델로, 인간과 공존하며 고도의 세밀함을 요구하는 작업에 특화되어 있습니다. 초소형 풋프린트를 통해 기존 생산 라인의 변경 없이 즉시 배치가 가능합니다.",
        ai5_long_desc: "AI-5는 업계 표준을 제시하는 가장 다재다능한 협동 로봇입니다. 중량과 리치 사이의 최적의 밸런스를 통해 조립, 검사, 머신 텐딩 등 대부분의 제조 공정에서 생산성을 극대화합니다.",
        ai10_long_desc: "AI-10은 강력한 리프팅 성능과 동급 최강의 작업 반경을 제공합니다. 대형 부품의 핸들링, 팔레타이징, 용접 작업 등에 최적화되어 생산 현장의 물리적 제약을 뛰어넘는 효율을 제공합니다.",
        desc_title: "제품 상세 설명", spec_title: "기술 사양", spec_weight: "무게", spec_dof: "자유도",
        close: "닫기",
        // News Tags
        tag_update: "업데이트", tag_event: "이벤트", tag_guide: "가이드",
        tag_tech: "기술뉴스", tag_case: "도입사례", tag_software: "소프트웨어", tag_info: "정보",
        // News Full Content (Community)
        news4_title: "차세대 고정밀 액추에이터 'RA-X1' 발표",
        news4_desc: "기존 모델 대비 정밀도를 2배 이상 높인 새로운 액추에이터 기술이 적용되었습니다.",
        news5_title: "반도체 패키징 라인 AI-5 도입 성공 사례",
        news5_desc: "ESD 보호 기능이 강화된 AI-5 모델을 통해 반도체 패키징 공정의 불량률을 15% 감축시켰습니다.",
        news6_title: "RoboOS 2.1 업데이트: 경로 최적화 알고리즘",
        news6_desc: "새로운 AI 경로 탐색 알고리즘 업데이트를 통해 작업 사이클 타임을 평균 10% 단축했습니다.",
        news7_title: "협동로봇 구독형(RaaS) 모델 정식 런칭",
        news7_desc: "초기 도입 비용 부담을 획기적으로 낮춘 구독형 서비스를 시작합니다. 지금 상담받으세요.",
        news1_full: "AI-ROBO의 차세대 비전 알고리즘 'NightWatch v2'가 정식 출시되었습니다.\n\n이번 업데이트는 저조도 및 특수 조명 환경에서의 객체 인식 능력을 극적으로 향상시키는 데 초점을 맞추었습니다. 실제 공장 야간 가동 테스트 결과, 부품의 형태를 인식하고 파지하는 정밀도가 이전 버전 대비 30% 가량 향상되었음을 확인했습니다.\n\n주요 변경 사항:\n- 저고도 노이즈 제거 필터 개선\n- 딥러닝 기반 실시간 명암 보정 기술 적용\n- 엣지 컴퓨팅 최적화로 처리 속도 15% 단축",
        news2_full: "독일 뮌헨에서 개최된 '2026 글로벌 로보틱스 엑스포'에서 AI-ROBO가 선도적인 협동로봇 솔루션을 선보여 큰 주목을 받았습니다.\n\n이번 전시회에서 당사는 독자 개발한 AI 기반 안전 감지 시스템을 시연했습니다. 펜스 없이도 인간과 로봇이 완벽하게 협업할 수 있음을 증명하며, 현장을 방문한 글로벌 파트너사들로부터 12건의 MOU 제안을 받는 성과를 거두었습니다.",
        news3_full: "협동로봇을 도입할 때 가장 중요한 것은 작업자의 안전입니다. AI-ROBO가 제안하는 안전 가이드를 확인하세요.\n\n[핵심 체크리스트]\n1. 작업 반경 내 비상 정지 구역 설정\n2. AI 센서의 사각지대 유무 확인\n3. 로봇 파지 무게에 따른 충돌 에너지 계산\n\n당사의 AI 로봇은 ISO 10218-1 및 ISO/TS 15066 표준을 준수하며, 지능형 감화 감지 기능을 내장하고 있습니다.",
        news4_full: "AI-ROBO 하드웨어 팀이 3년 간의 연구 끝에 고정밀 액추에이터 RA-X1을 정식 발표했습니다.\n\nRA-X1은 나노미터 단위의 오차를 제어할 수 있는 초정밀 기어 박스와 자체 개발한 고출력 BLDC 모터를 결합했습니다. 반도체 조립, 고정밀 의료 기기 제조 등 극도로 예민한 작업에 최적화되어 있습니다.\n\n양산 일정은 금년 하반기로 예정되어 있으며, 현재 사전 예약 파트너사를 모집 중입니다.",
        news5_full: "국내 굴지의 반도체 제조 기업 S사와 진행한 스마트 공정 고도화 프로젝트의 성과를 공유합니다.\n\n기존 수동 작업으로 이루어지던 패키징 분류 공정에 AI-5 모델 12대를 투입했습니다. 그 결과 시간 당 생산량 22% 증가 및 제품 불량률 15% 감소라는 놀라운 성과를 거두었습니다. AI-5의 정전기 방지(ESD) 특화 설계가 반도체 환경에서 빛을 발한 사례입니다.",
        news6_full: "운영체제인 RoboOS의 2.1 안정화 버전이 배포되었습니다.\n\n이번 버전의 핵심은 '지능형 경로 단축 알고리즘'입니다. 머신러닝이 현재 작업 패턴을 분석하여, 불필요한 관절 이동을 최소화하는 최적의 경로를 실시간으로 다시 생성합니다. 이 기능을 통해 작업 사이클 타임을 평균 10~12% 단축하고 전력 효율을 높일 수 있습니다.",
        news7_full: "중소/벤처 기업의 접근성을 높이기 위해 로봇 구독 서비스(RaaS)를 시작합니다.\n\n이제 고가의 초기 구매 비용 없이도 월 구독료 지불만으로 최신 AI 협동로봇을 현장에 즉시 투입할 수 있습니다. 유지 보수 및 소프트웨어 업데이트 서비스가 기본 포함되어 있어 관리 부담이 전혀 없습니다."
    },
    en: {
        home: "Home",
        products: "Products",
        solutions: "Solutions",
        guide: "Guide",
        board: "Board",
        community: "Community",
        consult: "Contact Us",
        hero_title: "Driving the Future with<br>AI Robot Solutions",
        hero_desc: "AI-ROBO sets new standards in industrial automation. Innovate productivity with smarter, safer collaborative robots.",
        quick_links: "Quick Links",
        connect: "Connect",
        footer_desc: "A leading provider of collaborative robot solutions, driving innovation in industrial automation.",
        hero_btn_product: "Learn More",
        hero_btn_video: "Watch Video",
        stat_partners: "Global Partners",
        stat_prod: "Productivity Up",
        stat_accident: "Accident Rate",
        stat_monitoring: "24/7 Monitoring",
        lang_modal_title: "Select Language",
        news_title: "Latest News",
        news_desc: "Check out AI-ROBO's latest technology updates and corporate news.",
        news_more: "View All News",
        news1_title: "AI Vision Update: 30% Improvement in Night Precision",
        news1_desc: "New AI vision algorithms enable precise tasks even in low-light environments.",
        news2_title: "2026 Global Robotics Expo Participation Report",
        news2_desc: "AI-ROBO's technology was highly praised at the largest robot fair held in Germany.",
        news3_title: "Robot Safety Guide: Design of Fenceless Workplaces",
        news3_desc: "Robot as a colleague working together, guiding optimal layout for safety.",
        prod_title: "AI Collaborative Robot Lineup",
        prod_desc: "Meet the AI partner optimized for your workplace.",
        sol_title: "Customized Industry Solutions",
        sol_desc: "AI-ROBO solves problems in various fields.",
        sol1_title: "Automotive Industry",
        sol1_desc: "Automate complex processes such as precise bolt fastening and parts inspection with AI vision.",
        sol2_title: "Electronics/Semiconductors",
        sol2_desc: "Perform handling of sensitive electronic parts and PCB inspection with ESD protection robots.",
        sol3_title: "Logistics/Palletizing",
        sol3_desc: "We provide AI algorithms that recognize boxes of various sizes and load them in optimal paths.",
        sol4_title: "Medical/Laboratory",
        sol4_desc: "Perform accurate volume handling and repetitive test processes 24 hours a day without error.",
        guide_title: "Technical Documents & Setup Guides",
        guide1_title: "Hardware Installation Guide",
        guide1_desc: "Step-by-step guidance on robot base installation, power supply, and connection.",
        guide2_title: "AI Vision Setup Methodology",
        guide2_desc: "Initial software calibration guide for workspace learning and object recognition.",
        guide3_title: "Safety Protocols & Maintenance",
        guide3_desc: "Includes periodic inspection lists and emergency stop system check procedures.",
        btn_download_pdf: "Download PDF",
        btn_step_by_step: "Step-by-Step",
        btn_read_online: "Read Online",
        guide1_full: "This guide provides instructions for the safe installation of AI-ROBO hardware.\n\n[Key Installation Steps]\n1. Mounting: Secure robot base with M8 bolts to a 15mm+ steel support.\n2. Power: Connect 220V single-phase power to the control box.\n3. Payload: Set tool weight matching product specs.\n4. Power-up: Release emergency stop and enter calibration mode.",
        guide2_full: "A calibration guide to maximize the accuracy of AI vision algorithms.\n\n[Setting Procedures]\n1. Lighting: Ensure 500+ Lux uniform illumination in the workspace.\n2. Checkerboard: Recognize calibration plate from 4 different angles.\n3. ROI: Drag to define the area of interest within the robot's workspace.\n4. DL Training: Collect 100+ images for AI to learn parts recognition.",
        guide3_full: "Essential protocols to maintain a safe working environment.\n\n[Maintenance List]\n- Weekly: Check joint noise and bolt tightness.\n- Monthly: Clean control box filters and check fan operation.\n- Quarterly: Detailed inspection of cable wear.\n\n[Safety Rules]\n- Do NOT enter the operation radius while the robot is active.\n- Test the emergency stop system before initial startup daily.",
        comm_desc: "Check out technology news and expert consultation in one place.",
        tab_news: "AI Robot News",
        tab_qna: "Technical Inquiries (Q&A)",
        qna_main_title: "Technical Inquiry & Consultation",
        // Products
        spec_payload: "Payload",
        spec_reach: "Reach",
        spec_precision: "Precision",
        // Community
        qna_title: "1:1 Technical Inquiry",
        form_name: "Name/Company",
        form_name_ph: "Please enter your name",
        form_contact: "Contact/Email",
        form_contact_ph: "Please enter contact info",
        form_email: "Email",
        form_title: "Subject",
        form_content: "Message",
        form_title_ph: "Enter subject",
        form_content_ph: "Enter your message in detail",
        board_write: "Submit Inquiry",
        board_search_ph: "Search for topics of interest",
        new_post_btn: "Write New Post",
        modal_write_title: "Share your thoughts",
        form_author_ph: "Author Name",
        form_pw_ph: "Password",
        form_board_content_ph: "Feel free to write. Topics about robot technology or daily life are both welcome.",
        btn_post: "Post to Lounge",
        btn_edit: "Edit",
        btn_delete: "Delete",
        modal_edit_title: "Refine your story",
        prompt_pw: "Please enter your password:",
        board_empty: "No stories in the lounge yet. Be the first to post!",
        board_recommend: "Rec.",
        alert_wrong_pw: "Incorrect password.",
        confirm_delete: "Are you sure you want to delete this post?",
        comment_title: "Comments",
        comment_name_ph: "Name",
        comment_content_ph: "Leave a warm comment",
        comment_btn: "Post",
        alert_already_voted: "You have already recommended this post.",
        // Board
        lounge_title: "Lounge & Connect",
        lounge_desc: "Vibrant stories shared by users",
        detail_btn: "View Details",
        ai3_detail: "A compact entry model for precision tasks in tight spaces. Perfect for small electronics and semiconductor assembly.",
        ai5_detail: "Our best-selling model with balanced performance, ready for immediate deployment in various industries.",
        ai10_detail: "A high-performance model with robust power and a wide working radius, excelling in heavy palletizing.",
        key_features: "Key Features",
        applications: "Applications",
        ai3_f1: "Space-saving design", ai3_f2: "Precision electronics assembly",
        ai5_f1: "Best-selling versatile model", ai5_f2: "Integrated high-performance AI Vision",
        ai10_f1: "10kg High-payload support", ai10_f2: "Industrial welding & modularity",
        ai3_f3: "Collision Detection & Stop", ai3_f4: "Intuitive Teaching System",
        ai5_f3: "IP54 Dust & Waterproof", ai5_f4: "Advanced Trajectory Control",
        ai10_f3: "Heavy-duty Durability", ai10_f4: "Smart Safety Mode",
        ai3_long_desc: "The AI-3 is a model that maximizes precision and space efficiency, specialized for tasks that require high detail in coexistence with humans.",
        ai5_long_desc: "The AI-5 is the most versatile collaborative robot setting industry standards. It maximizes productivity in most manufacturing processes.",
        ai10_long_desc: "The AI-10 provides powerful lifting performance and best-in-class working radius. Optimized for heavy part handling and palletizing.",
        desc_title: "Detailed Description", spec_title: "Technical Specs", spec_weight: "Weight", spec_dof: "Degrees of Freedom",
        close: "Close",
        // News Tags
        tag_update: "UPDATE", tag_event: "EVENT", tag_guide: "GUIDE",
        tag_tech: "TECH", tag_case: "CASE", tag_software: "SOFTWARE", tag_info: "INFO",
        // News Full Content (Community)
        news4_title: "Announcement of Next-Gen Precision Actuator 'RA-X1'",
        news4_desc: "New actuator technology with more than double the precision of existing models.",
        news5_title: "Success Case of AI-5 in Semiconductor Packaging Line",
        news5_desc: "Reduced defect rates by 15% through ESD-protected AI-5 models in semiconductor processes.",
        news6_title: "RoboOS 2.1 Update: Path Optimization Algorithm",
        news6_desc: "Reduced work cycle times by an average of 10% with the new AI pathfinding update.",
        news7_title: "Official Launch of RaaS (Robot-as-a-Service) Model",
        news7_desc: "Starting a subscription service with significantly lower initial costs. Consult now.",
        news1_full: "AI-ROBO's next-generation vision algorithm 'NightWatch v2' has been officially released.\n\nThis update focuses on dramatically improving object recognition in low-light and special lighting environments. Night operational tests confirmed a 30% improvement in precision compared to the previous version.",
        news2_full: "AI-ROBO showcased leading collaborative robot solutions at the '2026 Global Robotics Expo' in Munich, Germany, receiving significant attention.\n\nWe demonstrated our proprietary AI-based safety sensing system, proving that humans and robots can collaborate perfectly without fences.",
        news3_full: "Safety is the most important factor when introducing collaborative robots. Check the safety guide proposed by AI-ROBO.\n\n[Key Checklist]\n1. Emergency stop zones\n2. AI sensor blind spots\n3. Collision energy calculation\nOur robots comply with ISO 10218-1 and ISO/TS 15066 standards.",
        news4_full: "The AI-ROBO hardware team officially announced the RA-X1 high-precision actuator after three years of research.\n\nIt combines an ultra-precision gearbox capable of nanometer-scale error control with a self-developed high-power BLDC motor. Optimized for semiconductor assembly and medical device manufacturing.",
        news5_full: "Sharing results from a smart process enhancement project with S-Electronics. 12 AI-5 models were deployed in the packaging line, resulting in a 22% increase in hourly production and a 15% reduction in defects. The ESD-specialized design was key.",
        news6_full: "Stable version 2.1 of RoboOS has been deployed. The core is the 'Intelligent Path Shortening Algorithm,' which analyzes work patterns to minimize unnecessary joint movements. This reduces cycle times by 10-12% and improves power efficiency.",
        news7_full: "Starting the Robot-as-a-Service (RaaS) to increase accessibility for SMEs and startups. Deploy the latest AI cobots immediately with only monthly fees. Maintenance and software updates are included by default."
    },
    ja: {
        home: "ホーム",
        products: "製品情報",
        solutions: "ソリューション",
        guide: "ガイド",
        board: "掲示板",
        community: "コミュニティ",
        consult: "お問い合わせ",
        hero_title: "未来を動かす<br>AIロボットソリューション",
        hero_desc: "AI-ROBOは産業自動化の新しい基準を提示します。よりスマートで安全な協働ロボットで生産性を革新してください。",
        quick_links: "クイックリンク",
        connect: "接続",
        footer_desc: "産業自動化の革新をリードするAI協働ロボットソリューションの専門企業です。",
        hero_btn_product: "製品の詳細",
        hero_btn_video: "動画を見る",
        stat_partners: "グローバルパートナー",
        stat_prod: "生産性の向上",
        stat_accident: "事故発生率",
        stat_monitoring: "リアルタイム監視",
        lang_modal_title: "言語を選択してください",
        news_title: "最新ニュース",
        news_desc: "AI-ROBOの最新技術アップデートと企業ニュースを確認してください。",
        news_more: "すべてのニュースを見る",
        news1_title: "AI Visionアップデート：夜間作業の精度が30%向上",
        news1_desc: "新しいAIビジョンアルゴリズムにより、低照度環境でも精密な作業が可能になりました。",
        news2_title: "2026グローバルロボティクスエキスポ参加レポート",
        news2_desc: "ドイツで開催された最大規模のロボット見本市で、AI-ROBOの技術力が高く評価されました。",
        news3_title: "協働ロボット安全ガイド：フェンスのない作業場の設計",
        news3_desc: "共に働く同僚としてのロボット、安全のための最適な配置方法を案内します。",
        prod_title: "AI協働ロボットラインナップ",
        prod_desc: "貴社の作業場に最適化されたAIパートナーに会ってみてください。",
        sol_title: "産業別カスタマイズソリューション",
        sol_desc: "AI-ROBOは多様な現場の問題を解決します。",
        sol1_title: "自動車産業",
        sol1_desc: "精密なボルト締結、シーリング塗布、部品検査などの複雑な工程をAIビジョン技術で自動化します。",
        sol2_title: "電子/半導体",
        sol2_desc: "ESD保護機能を備えたロボットで、敏感な電子部品のハンドリングとPCB検査を遂行します。",
        sol3_title: "物流/パレタイジング",
        sol3_desc: "多様なサイズの箱を認識し、最適な経路で積載するAIアルゴリズムを提供します。",
        sol4_title: "医療/実験室",
        sol4_desc: "正確な用量取り扱いと反復的なテスト工程を24時間誤差なく遂行します。",
        guide_title: "技術文書および設置ガイド",
        guide1_title: "ハードウェア設置ガイド",
        guide1_desc: "ロボットベースの設置から電源供給、機構的な接続方法を段階別に案内します。",
        guide2_title: "AIビジョン設定方法論",
        guide2_desc: "作業空間の学習およびオブジェクト認識のためのソフトウェア初期キャリブレーションガイドです。",
        guide3_title: "安全プロトコルおよびメンテナンス",
        guide3_desc: "定期点検リストと緊急停止システムの確認手順を含みます。",
        btn_download_pdf: "Download PDF",
        btn_step_by_step: "Step-by-Step",
        btn_read_online: "Read Online",
        guide1_full: "本ガイドはAI-ROBOハードウェアの安全な設置のための指針書です。\n\n[主要設置段階]\n1. ロボットベースの固定：M8ボルトを使用して15mm以上の鋼鉄製台に固定\n2. 電源接続：220V単相電源をコントロールボックスに接続\n3. 荷重設定：製品仕様に合わせたツール重量(Tool Weight)を設定\n4. 初期起動：非常停止ボタン解除後、キャリブレーションモードに移行",
        guide2_full: "AIビジョンアルゴリズムの精度を最大化するためのキャリブレーションガイドです。\n\n[設定手順]\n1. 照明設定：作業エリアに500 Lux以上の均一な照度を確保\n2. チェッカーボード認識：提供された校正板を4つの角度から認識\n3. ROI設定：ロボットの有効作業エリア内に関心領域をドラッグして指定\n4. ディープラーニング学習：AIが部品を認識するように100枚以上の画像データを収集",
        guide3_full: "安全な作業環境を維持するための必須プロトコルです。\n\n[メンテナンスリスト]\n- 週間点検：各関節の異音およびボルトの緩みを確認\n- 月間点検：コントロールボックスのフィルター清掃とファンの動作確認\n- 四半期点検：ケーブル被覆の摩耗状態を精密検査\n\n[安全規則]\n- ロボット稼働中は絶対に作業半径内に入らないでください\n- 非常停止システムは、毎日の始動前に必ずテストしてください",
        comm_desc: "技術ニュースと専門的な相談を一箇所で確認してください。",
        tab_news: "AIロボットニュース",
        tab_qna: "技術的な問い合わせ (Q&A)",
        qna_main_title: "技術的な問い合わせおよび導入相談",
        spec_payload: "可搬重量",
        spec_reach: "リーチ",
        spec_precision: "繰り返し精度",
        qna_title: "1:1 技術的な問い合わせ",
        form_name: "お名前/企業名",
        form_name_ph: "作成者の名前を入力してください",
        form_contact: "連絡先/メール",
        form_contact_ph: "連絡先を入力してください",
        form_email: "メールアドレス",
        form_title: "タイトル",
        form_content: "内容",
        form_title_ph: "タイトルを入力してください",
        form_content_ph: "詳細な問い合わせ内容を入力してください",
        board_write: "問い合わせを登録する",
        board_search_ph: "興味のあるトピックを検索",
        new_post_btn: "新しい記事を作成",
        modal_write_title: "あなたの考えを聞かせてください",
        form_author_ph: "作成者の名前",
        form_pw_ph: "パスワード",
        form_board_content_ph: "自由に内容を書いてみてください。ロボット技術だけでなく日常の話も歓迎です。",
        btn_post: "Loungeに投稿",
        btn_edit: "修正",
        btn_delete: "削除",
        modal_edit_title: "お話を整える",
        prompt_pw: "パスワードを入力してください:",
        board_empty: "まだラウンジに話がありません。最初の投稿をしてみてください！",
        board_recommend: "おすすめ",
        alert_wrong_pw: "パスワードが一致しません。",
        confirm_delete: "本当に削除しますか？",
        comment_title: "コメント",
        comment_name_ph: "名前",
        comment_content_ph: "温かいコメントを残してください",
        comment_btn: "登録",
        alert_already_voted: "すでに推薦されました。",
        lounge_title: "Lounge & Connect",
        lounge_desc: "ユーザーが語るロボット技術の生きた物語",
        detail_btn: "詳細を見る",
        ai3_detail: "狭いスペースでも精密な作業が可能な、コンパクトなエントリーモデルです。電子部品の組み立てに最適です。",
        ai5_detail: "最もバランスの取れた性能を持つベストセラーモデルです。自動車部品から梱包まで幅広く活用されます。",
        ai10_detail: "強力なパワーと広い作業半径を備えた高性能モデルです。重量物のパレタイジングや溶接工程で威力を発揮します。",
        key_features: "主な特徴",
        applications: "主な応用分野",
        ai3_f1: "省スペース設計", ai3_f2: "精密電子部品の組み立て",
        ai5_f1: "ベストセラー汎用モデル", ai5_f2: "高性能AIビジョン統合",
        ai10_f1: "10kg高荷重サポート", ai10_f2: "産業用溶接およびモジュール化",
        ai3_f3: "衝突感知および即時停止", ai3_f4: "直感的なティーチングシステム",
        ai5_f3: "IP54防塵・防水対応", ai5_f4: "高性能軌道制御",
        ai10_f3: "堅牢な耐久性設計", ai10_f4: "スマート安全モード搭載",
        ai3_long_desc: "AI-3は精密さと空間効率を極限まで高めたモデルで、人間と共存し高度な細密さを要求する作業に特化しています。超小型フットプリントにより、既存の生産ラインを変更することなく即座に配置が可能です。",
        ai5_long_desc: "AI-5は業界標準を示す最も多才な協働ロボットです。重量とリーチの最適なバランスにより、組立て、検査、マシンテンディングなど、ほとんどの製造工程で生産性を最大化します。",
        ai10_long_desc: "AI-10は強力なリフティング性能とクラス最高の作業半径を提供します。重量物のパレタイジングや溶接作業に最適化されており、生産現場の物理的制約を超える効率を提供します。",
        desc_title: "製品詳細説明", spec_title: "技術仕様", spec_weight: "重量", spec_dof: "自由度",
        close: "閉じる",
        // News Tags
        tag_update: "更新", tag_event: "イベント", tag_guide: "ガイド",
        tag_tech: "技術ニュース", tag_case: "導入事例", tag_software: "ソフトウェア", tag_info: "情報",
        // News Full Content (Community)
        news4_title: "次世代高精度アクチュエータ'RA-X1'発表",
        news4_desc: "従来モデルに比べ精度を2倍以上に高めた新しいアクチュエータ技術が適用されました。",
        news5_title: "半導体パッケージングラインAI-5導入成功事例",
        news5_desc: "ESD保護機能が強化されたAI-5モデルを通じて、プロセス不良率を15%削減しました。",
        news6_title: "RoboOS 2.1アップデート：経路最適化アルゴリズム",
        news6_desc: "新しいAI経路探索アルゴリズムにより、作業サイクルタイムを平均10%短縮しました。",
        news7_title: "協働ロボットサブスクリプション(RaaS)正式ローンチ",
        news7_desc: "初期導入費用の負担を大幅に軽減したサブスクリプションサービスを開始します。",
        news1_full: "AI-ROBOの次世代ビジョンアルゴリズム'NightWatch v2'が正式にリリースされました。\n\n今回のアップデートは、低照度および特殊照明環境でのオブジェクト認識能力を劇的に向上させることに焦点を当てました。実際の工場での夜間稼働テストの結果、精度の30%向上を確認しました。",
        news2_full: "ドイツ・ミュンヘンで開催された'2026 グローバル・ロボティクス・エキスポ'で、AI-ROBOが主導的な協働ロボットソリューションを披露し、大きな注目を集めました。\n\n当社は独自開発したAIベースの安全感知システムを実演し、フェンスなしで人間とロボットが完全に協業できることを証明しました。",
        news3_full: "協働ロボットを導入する際、最も重要なのは作業者の安全です。AI-ROBOが提案する安全ガイドを確認してください。\n\n[チェックリスト]\n1. 非常停止区域の設定\n2. AIセンサーの死角確認\n3. 衝突エネルギーの計算\n当社のロボットはISO 10218-1およびISO/TS 15066規格に準拠しています。",
        news4_full: "AI-ROBOハードウェアチームは3年の研究を経て、高精度アクチュエータRA-X1を正式に発表しました。\n\nナノメートル単位の誤差制御が可能な超精密ギアボックスと、自社開発の高出力BLDCモーターを結合しました。半導体組立や医療機器製造などの精密作業に最適化されています。",
        news5_full: "S社と進めたスマート工程高度化プロジェクトの成果を共有します。AI-5モデル12台を投入した結果、生産性が22%向上し、不良率が15%減少しました。ESD特化設計が半導体環境で大きな効果を発揮した事例です。",
        news6_full: "RoboOS 2.1安定版が配布されました。中核は'インテリジェント経路短縮アルゴリズム'です。学習により不要な関節移動を最小化し、サイクルタイムを10〜12%短縮、電力効率を高めます。",
        news7_full: "中小・ベンチャー企業のアクセシビリティを高めるため、ロボットサブスクリプション(RaaS)を開始します。初期費用なしで、月額料金のみで最新AIロボットを導入可能です。メンテナンスとアップデートも含まれています。"
    },
    zh: {
        home: "首页",
        products: "产品详情",
        solutions: "解决方案",
        guide: "指南",
        board: "留言板",
        community: "社区",
        consult: "咨询",
        hero_title: "引领未来的<br>AI机器人解决方案",
        hero_desc: "AI-ROBO 正在引领工业自动化的新标准。通过更智能、更安全的协作机器人创新生产力。",
        quick_links: "快速链接",
        connect: "联系我们",
        footer_desc: "作为工业自动化创新的领导者，我们是一家专门提供AI协作机器人解决方案的企业。",
        hero_btn_product: "查看产品",
        hero_btn_video: "观看视频",
        stat_partners: "全球合作伙伴",
        stat_prod: "生产力提升",
        stat_accident: "事故发生率",
        stat_monitoring: "实时监控",
        lang_modal_title: "请选择语言",
        news_title: "最新动态",
        news_desc: "查看 AI-ROBO 的最新技术更新和企业新闻。",
        news_more: "查看全部新闻",
        news1_title: "AI Vision 更新：夜间操作精度提高 30%",
        news1_desc: "通过全新的 AI 视觉算法，即使在低光环境下也能实现精确操作。",
        news2_title: "2026 全球机器人博览会参会报告",
        news2_desc: "在德国举行的最大规模机器人展会上，AI-ROBO 的技术实力受到了高度评价。",
        news3_title: "协作机器人安全指南：无围栏工作场所的设计",
        news3_desc: "作为共同工作的同事，我们将为您介绍实现安全工作的最佳布局方法。",
        prod_title: "AI 协作机器人系列",
        prod_desc: "寻找最适合您工作场所的 AI 合作伙伴。",
        sol_title: "行业定制解决方案",
        sol_desc: "AI-ROBO 致力于解决各种现场问题。",
        sol1_title: "汽车行业",
        sol1_desc: "利用 AI 视觉技术实现精密螺栓紧固、涂胶、零件检测等复杂工序的自动化。",
        sol2_title: "电子/半导体",
        sol2_desc: "使用具备 ESD 保护功能的机器人进行敏感电子零件的处理和 PCB 检测。",
        sol3_title: "物流/码垛",
        sol3_desc: "提供可识别各种尺寸纸箱并按照最佳路径进行堆叠的 AI 算法。",
        sol4_title: "医疗/实验室",
        sol4_desc: "24 小时不间断、无误差地执行精确的容量处理和重复测试工序。",
        guide_title: "技术文档与安装指南",
        guide1_title: "硬件安装指南",
        guide1_desc: "分步骤介绍从机器人底座安装到电源供应、机械连接的方法。",
        guide2_title: "AI 视觉设置方法论",
        guide2_desc: "用于工作空间学习和对象识别的软件初始化校准指南。",
        guide3_title: "安全协议与维护",
        guide3_desc: "包括定期检查列表和紧急停止系统确认程序。",
        btn_download_pdf: "Download PDF",
        btn_step_by_step: "Step-by-Step",
        btn_read_online: "Read Online",
        guide1_full: "本指南提供AI-ROBO硬件安全安装的说明。\n\n[主要安装步骤]\n1. 机器人底座固定：使用M8螺栓固定在15mm以上的钢质底座上\n2. 电源连接：将220V单相电源连接至控制箱\n3. 负载设置：设置符合产品规格的工具重量\n4. 初始启动：释放紧急停止按钮后进入校准模式",
        guide2_full: "旨在最大限度提高AI视觉算法准确度的校准指南。\n\n[设置步骤]\n1. 照明设定：确保工作区域照度均匀分布在500 Lux以上\n2. 棋盘格识别：从4个不同角度识别提供的校准板\n3. ROI设置：拖动指定机器人有效作业区域内的感兴趣区域\n4. 深度学习训练：收集100张以上图像数据，让AI学习识别零件",
        guide3_full: "维护安全工作环境的基础协议。\n\n[维护清单]\n- 每周检查：检查关节噪音及螺栓是否有松动\n- 每月检查：清洁控制箱过滤器并确认风扇运转正常\n- 每季检查：对电缆外皮磨损情况进行精密检查\n\n[安全规则]\n- 机器人运行期间严禁进入工作半径内\n- 每日初始运行前必须测试紧急停止系统",
        comm_desc: "在一个地方确认技术新闻和专家咨询。",
        tab_news: "AI 机器人新闻",
        tab_qna: "技术咨询 (Q&A)",
        qna_main_title: "技术咨询与引入咨询",
        spec_payload: "有效负载",
        spec_reach: "工作半径",
        spec_precision: "重复定位精度",
        qna_title: "1:1 技术咨询",
        form_name: "姓名/公司名",
        form_name_ph: "请输入姓名",
        form_contact: "联系方式/邮箱",
        form_contact_ph: "请输入联系方式",
        form_email: "邮箱",
        form_title: "标题",
        form_content: "内容",
        form_title_ph: "请输入标题",
        form_content_ph: "请输入详细咨询内容",
        board_write: "提交咨询",
        board_search_ph: "搜索感兴趣的主题",
        new_post_btn: "撰写新文章",
        modal_write_title: "分享您的想法",
        form_author_ph: "作者姓名",
        form_pw_ph: "密码",
        form_board_content_ph: "请自由撰写内容。无论是关于机器人技术还是日常生活的故事都可以。",
        btn_post: "发布到 Lounge",
        btn_edit: "修改",
        btn_delete: "删除",
        modal_edit_title: "润色您的故事",
        prompt_pw: "请输入密码:",
        board_empty: "休息室里还没有故事。留下第一个故事吧！",
        board_recommend: "推荐",
        alert_wrong_pw: "密码不正确。",
        confirm_delete: "您确定要删除这篇帖子吗？",
        comment_title: "评论",
        comment_name_ph: "姓名",
        comment_content_ph: "留下温馨的评论",
        comment_btn: "提交",
        alert_already_voted: "您已经推荐过了。",
        lounge_title: "Lounge & Connect",
        lounge_desc: "用户分享的机器人技术生动案例",
        detail_btn: "查看详情",
        ai3_detail: "一款设计紧凑、可在狭小空间内进行精密作业的入门级模型。最适合电子/半导体等小型零件组装。",
        ai5_detail: "性能最均衡、可立即投入各种工业现场的畅销机型。广泛应用于汽车零部件组装到包装等领域。",
        ai10_detail: "具备强劲动力和广阔工作半径的高性能机型。在重型堆垛和大型焊接工艺中表现卓越。",
        key_features: "主要特点",
        applications: "主要应用领域",
        ai3_f1: "节省空间的设计", ai3_f2: "精密电子元器件组装",
        ai5_f1: "最畅销通用型号", ai5_f2: "集成高性能 AI 视觉",
        ai10_f1: "支持 10kg 高负载", ai10_f2: "工业焊接与模块化",
        ai3_f3: "碰撞检测与即时停止", ai3_f4: "直观的示教系统",
        ai5_f3: "IP54 防尘防水", ai5_f4: "高性能轨迹控制",
        ai10_f3: "坚固耐用的设计", ai10_f4: "配备智能安全模式",
        ai3_long_desc: "AI-3 是一款极大程度提高了精度和空间效率的模型，专门用于需要与人共存的高度精细作业。",
        ai5_long_desc: "AI-5 是设定行业标准的多功能协作机器人。通过负载与半径的最佳平衡，实现大多数制造流程的生产力最大化。",
        ai10_long_desc: "AI-10 提供强大的起重性能和同类最佳的工作半径。优化了大尺寸零件处理、码垛和焊接作业。",
        desc_title: "产品详细说明", spec_title: "技术规格", spec_weight: "重量", spec_dof: "自由度",
        close: "关闭",
        // News Tags
        tag_update: "更新", tag_event: "事件", tag_guide: "指南",
        tag_tech: "技术新闻", tag_case: "案例", tag_software: "软件", tag_info: "信息",
        // News Full Content (Community)
        news4_title: "发布下一代高精度致动器 'RA-X1'",
        news4_desc: "应用了精度比现有型号提高两倍以上的新型致动器技术。",
        news5_title: "半导体封装线 AI-5 引入成功案例",
        news5_desc: "通过具备 ESD 保护功能的 AI-5 模型，使生产不良率降低了 15%。",
        news6_title: "RoboOS 2.1 更新：路径优化算法",
        news6_desc: "通过全新的 AI 路径搜索算法，将作业循环时间平均缩短了 10%。",
        news7_title: "协作机器人订阅型 (RaaS) 模式正式上线",
        news7_desc: "推出大幅降低初始引入成本负担的订阅服务。欢迎咨询。",
        news1_full: "AI-ROBO新一代视觉算法'NightWatch v2'正式发布。\n\n本次更新重点在于大幅提升低光照及特殊光照环境下的物体识别能力。工厂夜间测试显示，识别精度较前一版本提升了约30%。",
        news2_full: "在慕尼黑举行的'2026全球机器人博览会'上，AI-ROBO展示了领先的协作机器人解决方案，备受瞩目。\n\n我们现场演示了自主研发的AI安全感应系统，证明了人机可在无围栏环境下完美协作。",
        news3_full: "引入协作机器人时，安全是最重要的规格。请查阅AI-ROBO建议的安全指南。\n\n[核心检查表]\n1. 设置紧急停止区域\n2. 检查AI传感器死角\n3. 计算碰撞能量\n我们的机器人符合ISO 10218-1及ISO/TS 15066标准。",
        news4_full: "AI-ROBO硬件团队历经3年研发，正式发布RA-X1高精度致动器。\n\nRA-X1结合了纳米级误差控制的超精密齿轮箱与自研高功率BLDC电机。专为半导体组装、医疗器械制造等极精密作业优化。",
        news5_full: "分享与S公司合作的智能流程升级项目成果。投入12台AI-5模型后，时产增长22%，不良率大幅降低15%。AI-5的ESD防护设计在半导体环境中表现优异。",
        news6_full: "RoboOS 2.1稳定版已推送。核心是'智能路径缩短算法'。通过学习工作模式，最大限度减少不必要的关节移动，缩短循环时间10-12%并提高能效。",
        news7_full: "为提高中小企业的可及性，推出机器人订阅服务(RaaS)。现在无需昂贵的初期成本，仅需支付月费即可部署最新AI协作机器人。包含维护与更新服务。"
    },
    es: {
        home: "Inicio",
        products: "Productos",
        solutions: "Soluciones",
        guide: "Guía",
        board: "Tablón",
        community: "Comunidad",
        consult: "Consultar",
        hero_title: "Impulsando el Futuro con<br>Soluciones de Robots AI",
        hero_desc: "AI-ROBO está liderando los nuevos estándares en automatización industrial. Innove la productividad con robots colaborativos más inteligentes y seguros.",
        quick_links: "Enlaces Rápidos",
        connect: "Conectar",
        footer_desc: "Líder en innovación de automatización industrial, somos una empresa especializada en soluciones de robots colaborativos AI.",
        hero_btn_product: "Ver Productos",
        hero_btn_video: "Ver Video",
        stat_partners: "Socios Globales",
        stat_prod: "Aumento de Productividad",
        stat_accident: "Tasa de Accidentes",
        stat_monitoring: "Monitoreo 24/7",
        lang_modal_title: "Seleccione Idioma",
        news_title: "Últimas Noticias",
        news_desc: "Consulte las últimas actualizaciones tecnológicas y noticias corporativas de AI-ROBO.",
        news_more: "Ver todas las noticias",
        news1_title: "Actualización de AI Vision: Precisión nocturna mejorada en un 30%",
        news1_desc: "Los nuevos algoritmos de visión AI permiten tareas precisas incluso en entornos de poca luz.",
        news2_title: "Informe de Participación en la Expo Global de Robótica 2026",
        news2_desc: "La capacidad tecnológica de AI-ROBO fue altamente elogiada en la feria de robótica más grande celebrada en Alemania.",
        news3_title: "Guía de Seguridad para Robots Colaborativos: Diseño de Lugares de Trabajo sin Cercas",
        news3_desc: "Como colegas que trabajan juntos, presentamos el método de diseño óptimo para la seguridad.",
        prod_title: "Línea de Robots Colaborativos AI",
        prod_desc: "Encuentre el socio de AI optimizado para su lugar de trabajo.",
        sol_title: "Soluciones Industriales Personalizadas",
        sol_desc: "AI-ROBO resuelve diversos problemas en el campo.",
        sol1_title: "Industria Automotriz",
        sol1_desc: "Automatización de procesos complejos como el ajuste de pernos, aplicación de sellado e inspección de piezas con visión AI.",
        sol2_title: "Electrónica/Semiconductores",
        sol2_desc: "Robots con protección ESD para el manejo de piezas electrónicas sensibles e inspección de PCB.",
        sol3_title: "Logística/Paletización",
        sol3_desc: "Algoritmos de AI que reconocen cajas de diversos tamaños y las apilan en rutas óptimas.",
        sol4_title: "Médico/Laboratorio",
        sol4_desc: "Manejo preciso de volúmenes y procesos de prueba repetitivos las 24 horas sin errores.",
        guide_title: "Documentos Técnicos y Guías de Instalación",
        guide1_title: "Guía de Instalación de Hardware",
        guide1_desc: "Guía paso a paso desde la instalación de la base del robot hasta la alimentación y conexión mecánica.",
        guide2_title: "Metodología de Configuración de Visión AI",
        guide2_desc: "Guía de calibración inicial de software para aprendizaje de espacio de trabajo y reconocimiento de objetos.",
        guide3_title: "Protocolos de Seguridad y Mantenimiento",
        guide3_desc: "Incluye listas de verificación periódicas y procedimientos de confirmación del sistema de parada de emergencia.",
        btn_download_pdf: "Download PDF",
        btn_step_by_step: "Step-by-Step",
        btn_read_online: "Read Online",
        guide1_full: "Esta guía proporciona instrucciones para la instalación segura del hardware AI-ROBO.\n\n[Pasos clave de instalación]\n1. Montaje: Asegure la base del robot con pernos M8 a un soporte de acero de 15mm+.\n2. Energía: Conecte energía monofásica de 220V a la caja de control.\n3. Carga: Configure el peso de la herramienta según las especificaciones.\n4. Arranque: Suelte la parada de emergencia y entre en modo de calibración.",
        guide2_full: "Guía de calibración para maximizar la precisión de los algoritmos de visión AI.\n\n[Procedimientos de configuración]\n1. Iluminación: Asegure 500+ Lux de iluminación uniforme en el espacio de trabajo.\n2. Checkerboard: Reconozca la placa de calibración desde 4 ángulos diferentes.\n3. ROI: Arrastre para definir el área de interés dentro del espacio del robot.\n4. Entrenamiento DL: Recopile 100+ imágenes para que la AI aprenda las piezas.",
        guide3_full: "Protocolos esenciales para mantener un entorno de trabajo seguro.\n\n[Lista de mantenimiento]\n- Semanal: Verifique ruidos en articulaciones y apriete de pernos.\n- Mensual: Limpie filtros de la caja de control y verifique ventiladores.\n- Trimestral: Inspección detallada del desgaste de cables.\n\n[Reglas de seguridad]\n- NO entre en el radio de operación mientras el robot esté activo.\n- Pruebe el sistema de parada de emergencia antes del inicio diario.",
        comm_desc: "Noticias tecnológicas y consultas de expertos en un solo lugar.",
        tab_news: "Noticias de Robots AI",
        tab_qna: "Consultas Técnicas (Q&A)",
        qna_main_title: "Consultas Técnicas y Consultoría de Introducción",
        spec_payload: "Carga Útil",
        spec_reach: "Alcance",
        spec_precision: "Repetibilidad",
        qna_title: "Consulta Técnica 1:1",
        form_name: "Nombre/Empresa",
        form_name_ph: "Ingrese su nombre",
        form_contact: "Contacto/Email",
        form_contact_ph: "Ingrese su contacto",
        form_email: "Email",
        form_title: "Asunto",
        form_content: "Mensaje",
        form_title_ph: "Ingrese el asunto",
        form_content_ph: "Ingrese los detalles de su consulta",
        board_write: "Enviar Consulta",
        board_search_ph: "Busca temas de interés",
        new_post_btn: "Escribir nueva publicación",
        modal_write_title: "Comparte tus pensamientos",
        form_author_ph: "Nombre del autor",
        form_pw_ph: "Contraseña",
        form_board_content_ph: "Siéntete libre de escribir. Historias sobre robots o la vida diaria son bienvenidas.",
        btn_post: "Publicar en Lounge",
        btn_edit: "Editar",
        btn_delete: "Eliminar",
        modal_edit_title: "Refina tu historia",
        prompt_pw: "Por favor, introduce tu contraseña:",
        board_empty: "Aún no hay historias en la sala. ¡Sé el primero en publicar!",
        board_recommend: "Rec.",
        alert_wrong_pw: "Contraseña incorrecta.",
        confirm_delete: "¿Estás seguro de que quieres eliminar esta publicación?",
        comment_title: "Comentarios",
        comment_name_ph: "Nombre",
        comment_content_ph: "Deja un comentario amable",
        comment_btn: "Publicar",
        alert_already_voted: "Ya has recomendado esta publicación.",
        lounge_title: "Lounge & Connect",
        lounge_desc: "Historias vibrantes compartidas por los usuarios",
        detail_btn: "Ver Detalles",
        ai3_detail: "Un modelo de entrada compacto para tareas de precisión en espacios reducidos. Ideal para ensamblaje electrónico.",
        ai5_detail: "Nuestro modelo más vendido con rendimiento equilibrado, listo para despliegue inmediato en diversas industrias.",
        ai10_detail: "Modelo de alto rendimiento con potencia robusta y amplio radio, excelente en paletizado pesado.",
        key_features: "Características Clave",
        applications: "Aplicaciones",
        ai3_f1: "Diseño compacto", ai3_f2: "Ensamblaje electrónico de precisión",
        ai5_f1: "Modelo versátil más vendido", ai5_f2: "Visión AI de alto rendimiento",
        ai10_f1: "Soporte de carga alta de 10 kg", ai10_f2: "Soldadura industrial y modularidad",
        ai3_f3: "Detección de Colisiones", ai3_f4: "Sistema de Enseñanza Intuitivo",
        ai5_f3: "Soporte IP54 Antipolvo/Agua", ai5_f4: "Control de Trayectoria Superior",
        ai10_f3: "Diseño de Alta Durabilidad", ai10_f4: "Modo de Seguridad Inteligente",
        ai3_long_desc: "El AI-3 maximiza la precisión y la eficiencia del espacio, especializado en tareas que requieren alta minuciosidad en coexistencia con humanos.",
        ai5_long_desc: "El AI-5 es el robot colaborativo más versátil que define los estándares de la industria. Maximiza la productividad en el ensamblaje y la inspección.",
        ai10_long_desc: "El AI-10 ofrece un potente rendimiento de elevación y el mejor radio de trabajo de su clase. Optimizado para el manejo de piezas grandes y paletizado.",
        desc_title: "Descripción Detallada", spec_title: "Especificaciones", spec_weight: "Peso", spec_dof: "Gdl",
        close: "Cerrar",
        // News Tags
        tag_update: "ACTUALIZACIÓN", tag_event: "EVENTO", tag_guide: "GUÍA",
        tag_tech: "TECNOLOGÍA", tag_case: "CASO", tag_software: "SOFTWARE", tag_info: "INFO",
        // News Full Content (Community)
        news4_title: "Anuncio del Actuador de Alta Precisión 'RA-X1'",
        news4_desc: "Nueva tecnología con más del doble de precisión que los modelos existentes.",
        news5_title: "Caso de Éxito de AI-5 en Línea de Empaque de Semiconductores",
        news5_desc: "Reducción del 15% en defectos mediante modelos AI-5 con protección ESD.",
        news6_title: "Actualización RoboOS 2.1: Algoritmo de Optimización de Rutas",
        news6_desc: "Reducción del 10% en tiempos de ciclo con la nueva actualización de IA.",
        news7_title: "Lanzamiento del Modelo de Suscripción (RaaS) de Cobots",
        news7_desc: "Servicio de suscripción con costes iniciales reducidos. Consulte ahora.",
        news1_full: "El algoritmo 'NightWatch v2' ha sido lanzado oficialmente.\n\nMejora drásticamente el reconocimiento en entornos de poca luz. Las pruebas confirmaron una mejora del 30% en la precisión nocturna.",
        news2_full: "AI-ROBO destacó en la '2026 Global Robotics Expo' en Alemania con sus soluciones de cobots.\n\nDemostramos nuestro sistema de seguridad basado en IA, permitiendo la colaboración humano-robot sin vallas.",
        news3_full: "La seguridad es lo primero. Revise nuestra guía de seguridad AI-ROBO.\n\n[Checklist clave]\n1. Zonas de parada de emergencia\n2. Ángulos muertos de sensores IA\n3. Cálculo de energía de colisión\nCumplimos con ISO 10218-1 e ISO/TS 15066.",
        news4_full: "El equipo de hardware presenta el actuador RA-X1 tras 3 años de investigación.\n\nCombina una caja de cambios ultraprecisa con un motor BLDC de alta potencia. Optimizado para ensamblaje de semiconductores.",
        news5_full: "Proyecto con S-Electronics: 12 modelos AI-5 aumentaron la producción un 22% y bajaron defectos un 15%. El diseño ESD fue clave en el entorno de semiconductores.",
        news6_full: "RoboOS 2.1 ya está disponible. El núcleo es el 'Algoritmo Inteligente de Rutas Cortas', que reduce movimientos innecesarios y mejora la eficiencia energética en un 10-12%.",
        news7_full: "Servicio de Suscripción (RaaS) para PYMES. Despliegue cobots IA de última generación solo con cuotas mensuales. Incluye mantenimiento y actualizaciones."
    },
    de: {
        home: "Startseite",
        products: "Produkte",
        solutions: "Lösungen",
        guide: "Leitfaden",
        board: "Forum",
        community: "Gemeinschaft",
        consult: "Beraten",
        hero_title: "Die Zukunft bewegen mit<br>KI-Robotiklösungen",
        hero_desc: "AI-ROBO setzt neue Maßstäbe in der industriellen Automatisierung. Innovieren Sie Ihre Produktivität mit smarteren und sichereren kollaborativen Robotern.",
        quick_links: "Schnelle Links",
        connect: "Verbinden",
        footer_desc: "Als Innovationsführer in der industriellen Automatisierung sind wir auf KI-basierte Cobot-Lösungen spezialisiert.",
        hero_btn_product: "Produkte ansehen",
        hero_btn_video: "Video ansehen",
        stat_partners: "Globale Partner",
        stat_prod: "Produktivitätssteigerung",
        stat_accident: "Unfallrate",
        stat_monitoring: "Echtzeit-Überwachung",
        lang_modal_title: "Sprache wählen",
        news_title: "Aktuelle Nachrichten",
        news_desc: "Erfahren Sie mehr über die neuesten Technologie-Updates und Unternehmensnachrichten von AI-ROBO.",
        news_more: "Alle Nachrichten ansehen",
        news1_title: "AI Vision Update: Nachtpräzision um 30 % verbessert",
        news1_desc: "Neue KI-Vision-Algorithmen ermöglichen präzise Aufgaben auch in Umgebungen mit wenig Licht.",
        news2_title: "Teilnahmebericht von der Global Robotics Expo 2026",
        news2_desc: "Die technologische Kompetenz von AI-ROBO wurde auf der größten Robotermesse in Deutschland hoch gelobt.",
        news3_title: "Sicherheitsleitfaden für Cobots: Gestaltung von Arbeitsplätzen ohne Schutzzäune",
        news3_desc: "Als Kollegen, die zusammenarbeiten, stellen wir Ihnen das optimale Layout für die Sicherheit vor.",
        prod_title: "KI-Cobot-Sortiment",
        prod_desc: "Finden Sie den optimalen KI-Partner für Ihren Arbeitsplatz.",
        sol_title: "Maßgeschneiderte Industrielösungen",
        sol_desc: "AI-ROBO löst vielfältige Probleme direkt vor Ort.",
        sol1_title: "Automobilindustrie",
        sol1_desc: "Automatisierung komplexer Prozesse wie Schraubmontage, Dichtungsauftrag und Teileinspektion mit KI-Vision.",
        sol2_title: "Elektronik/Halbleiter",
        sol2_desc: "Roboter mit ESD-Schutz für die Handhabung empfindlicher Elektronikteile und PCB-Inspektion.",
        sol3_title: "Logistik/Paletierung",
        sol3_desc: "KI-Algorithmen, die Kartons verschiedener Größen erkennen und optimal stapeln.",
        sol4_title: "Medizintechnik/Labor",
        sol4_desc: "Präzise Volumenhandhabung und iterative Testprozesse rund um die Uhr ohne Fehler.",
        guide_title: "Technische Dokumente & Installationsanleitungen",
        guide1_title: "Hardware-Installationsanleitung",
        guide1_desc: "Schritt-für-Schritt-Anleitung von der Roboterbasis-Installation bis zur Stromversorgung.",
        guide2_title: "KI-Vision-Konfigurationsmethodik",
        guide2_desc: "Software-Kalibrierungsleitfaden für Arbeitsbereichslernen und Objekterkennung.",
        guide3_title: "Sicherheitsprotokolle & Wartung",
        guide3_desc: "Enthält regelmäßige Checklisten und Bestätigungsverfahren für Not-Aus-Systems.",
        btn_download_pdf: "Download PDF",
        btn_step_by_step: "Step-by-Step",
        btn_read_online: "Read Online",
        guide1_full: "Dieser Leitfaden enthält Anweisungen für die sichere Installation der AI-ROBO-Hardware.\n\n[Wichtige Installationsschritte]\n1. Montage: Befestigen Sie die Roboterbasis mit M8-Bolzen auf einer 15mm+ Stahlplatte.\n2. Strom: Schließen Sie 220V Einphasenwechselstrom an den Schaltschrank an.\n3. Nutzlast: Stellen Sie das Werkzeuggewicht entsprechend der Produktspezifikation ein.\n4. Start: Not-Aus lösen und den Kalibrierungsmodus starten.",
        guide2_full: "Kalibrierungsleitfaden zur Maximierung der Genauigkeit von KI-Vision-Algorithmen.\n\n[Einstellungsverfahren]\n1. Beleuchtung: Sorgen Sie für 500+ Lux gleichmäßige Beleuchtung.\n2. Schachbrett: Erkennen Sie die Kalibrierplatte aus 4 verschiedenen Winkeln.\n3. ROI: Definieren Sie den Bereich von Interesse (ROI) per Drag & Drop.\n4. DL-Training: Sammeln Sie 100+ Bilder für die KI-Teileerkennung.",
        guide3_full: "Wesentliche Protokolle zur Aufrechterhaltung einer sicheren Arbeitsumgebung.\n\n[Wartungsliste]\n- Wöchentlich: Gelenkgeräusche und Bolzenfestigkeit prüfen.\n- Monatlich: Schaltschrankfilter reinigen und Lüfterfunktion prüfen.\n- Quartalsweise: Detaillierte Inspektion der Kabelabnutzung.\n\n[Sicherheitsregeln]\n- Betreten Sie den Arbeitsradius NIEMALS während des Roboterbetriebs.\n- Testen Sie das Not-Aus-System täglich vor der ersten Inbetriebnahme.",
        comm_desc: "Erfahren Sie technische Neuigkeiten und Expertenberatung an einem Ort.",
        tab_news: "KI-Robotik-News",
        tab_qna: "Technische Fragen (Q&A)",
        qna_main_title: "Technische Beratung & Einführung",
        spec_payload: "Nutzlast",
        spec_reach: "Reichweite",
        spec_precision: "Wiederholgenauigkeit",
        qna_title: "1:1 Technische Beratung",
        form_name: "Name/Firma",
        form_name_ph: "Bitte geben Sie Ihren Namen ein",
        form_contact: "Kontakt/E-Mail",
        form_contact_ph: "Bitte Kontaktinfo eingeben",
        form_email: "E-Mail",
        form_title: "Betreff",
        form_content: "Nachricht",
        form_title_ph: "Betreff eingeben",
        form_content_ph: "Geben Sie die Details Ihrer Anfrage ein",
        board_write: "Anfrage absenden",
        board_search_ph: "Nach interessanten Themen suchen",
        new_post_btn: "Neuen Beitrag schreiben",
        modal_write_title: "Teilen Sie Ihre Gedanken",
        form_author_ph: "Name des Autors",
        form_pw_ph: "Passwort",
        form_board_content_ph: "Schreiben Sie ganz frei. Geschichten über Robotertechnik oder den Alltag sind willkommen.",
        btn_post: "Im Lounge posten",
        btn_edit: "Bearbeiten",
        btn_delete: "Löschen",
        modal_edit_title: "Geschichte verfeinern",
        prompt_pw: "Bitte Passwort eingeben:",
        board_empty: "Noch keine Geschichten im Lounge. Schreiben Sie die erste!",
        board_recommend: "Empf.",
        alert_wrong_pw: "Falsches Passwort.",
        confirm_delete: "Möchten Sie diesen Beitrag wirklich löschen?",
        comment_title: "Kommentare",
        comment_name_ph: "Name",
        comment_content_ph: "Hinterlassen Sie einen freundlichen Kommentar",
        comment_btn: "Posten",
        alert_already_voted: "Sie haben diesen Beitrag bereits empfohlen.",
        lounge_title: "Lounge & Connect",
        lounge_desc: "Lebendige Geschichten, die von Benutzern geteilt werden",
        detail_btn: "Details anzeigen",
        ai3_detail: "Ein kompaktes Einsteigermodell für Präzisionsaufgaben auf engstem Raum. Ideal für die Kleinteilmontage.",
        ai5_detail: "Unser meistverkauftes Modell mit ausgewogener Leistung, bereit für den sofortigen Einsatz in verschiedenen Branchen.",
        ai10_detail: "Ein Hochleistungsmodell mit robuster Kraft und großem Radius, hervorragend geeignet für schwere Palettierung.",
        key_features: "Hauptmerkmale",
        applications: "Anwendungen",
        ai3_f1: "Platzsparendes Design", ai3_f2: "Präzise Elektronikmontage",
        ai5_f1: "Vielseitiges Bestseller-Modell", ai5_f2: "Integrierte KI-Vision",
        ai10_f1: "10 kg Traglastunterstützung", ai10_f2: "Industrielles Schweißen & Modularität",
        ai3_f3: "Kollisionserkennung & Stopp", ai3_f4: "Intuitives Teach-System",
        ai5_f3: "IP54 Staub- & Wasserschutz", ai5_f4: "Hochleistungs-Bahnsteuerung",
        ai10_f3: "Robuste Langlebigkeit", ai10_f4: "Smarte Sicherheitsmodi",
        ai3_long_desc: "Der AI-3 maximiert Präzision und Platzeffizienz, spezialisiert auf Aufgaben, die hohe Detailgenauigkeit erfordern. Dank seiner ultrakompakten Grundfläche lässt er sich ohne Änderungen an bestehenden Linien sofort einsetzen.",
        ai5_long_desc: "Der AI-5 ist der vielseitigste Cobot, der Branchenstandards setzt. Durch die optimale Balance zwischen Nutzlast und Reichweite maximiert er die Produktivität in fast allen Fertigungsprozessen.",
        ai10_long_desc: "Der AI-10 bietet kraftvolle Hubleistung und den besten Arbeitsradius seiner Klasse. Optimiert für schwere Palettierung und Schweißarbeiten, sprengt er die physischen Grenzen Ihrer Produktion.",
        desc_title: "Detaillierte Beschreibung", spec_title: "Technische Daten", spec_weight: "Gewicht", spec_dof: "Freiheitsgrade",
        close: "Schließen",
        // News Tags
        tag_update: "UPDATE", tag_event: "EVENT", tag_guide: "GUIDE",
        tag_tech: "TECH", tag_case: "FALLBEISPIEL", tag_software: "SOFTWARE", tag_info: "INFO",
        // News Full Content (Community)
        news4_title: "Ankündigung des Hochpräzisions-Aktuators RA-X1",
        news4_desc: "Neue Technologie mit mehr als der doppelten Präzision bestehender Modelle.",
        news5_title: "Erfolgsfall AI-5 in der Halbleiterverpackungslinie",
        news5_desc: "Reduzierung der Fehlerquote um 15 % durch ESD-geschützte AI-5-Modelle.",
        news6_title: "RoboOS 2.1 Update: Pfadoptimierungsalgorithmus",
        news6_desc: "Reduzierung der Zykluszeiten um durchschnittlich 10 % durch neue KI-Updates.",
        news7_title: "Offizieller Start des RaaS-Abonnementmodells für Cobots",
        news7_desc: "Abomodell mit deutlich geringeren Initialkosten. Jetzt beraten lassen.",
        news1_full: "Der Algorithmus 'NightWatch v2' wurde offiziell veröffentlicht.\n\nVerbessert die Erkennung bei schlechten Lichtverhältnissen drastisch. Tests bestätigten eine 30%ige Steigerung der Nachtpräzision.",
        news2_full: "AI-ROBO präsentierte auf der '2026 Global Robotics Expo' in München führende Cobot-Lösungen.\n\nWir demonstrierten unser KI-Sicherheitssystem, das die Zusammenarbeit von Mensch und Roboter ohne Zäune ermöglicht.",
        news3_full: "Sicherheit steht an erster Stelle. Prüfen Sie unseren Sicherheitsleitfaden.\n\n[Checkliste]\n1. Not-Aus-Zonen\n2. Totwinkel von KI-Sensoren\n3. Kollisionsenergieberechnung\nKonform mit ISO 10218-1 und ISO/TS 15066.",
        news4_full: "Das Hardware-Team präsentiert den RA-X1 Aktuator nach 3 Jahren Forschung.\n\nKombiniert ein ultrapräzises Getriebe mit einem BLDC-Hochleistungsmotor. Optimiert für die Halbleitermontage.",
        news5_full: "Projekt mit S-Electronics: 12 AI-5 Modelle steigerten die Produktion um 22% und senkten Fehler um 15%. Das ESD-Design war in der Halbleiterumgebung entscheidend.",
        news6_full: "RoboOS 2.1 ist live. Das Herzstück ist der 'Intelligente Pfadverkürzungsalgorithmus', der unnötige Bewegungen minimiert und die Effizienz um 10-12% steigert.",
        news7_full: "RaaS-Abonnementservice für KMU. Nutzen Sie modernste KI-Cobots gegen eine monatliche Gebühr. Wartung und Updates sind inklusive."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('robo_lang') || 'ko';

    // 1. 헤더 스크롤 효과
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (header) {
            header.style.background = window.scrollY > 50 ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)';
            header.style.boxShadow = window.scrollY > 50 ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none';
        }
    });

    // 2. 번역 실행 함수
    const updateTexts = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = translations[lang][key];
            
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else {
                    el.innerHTML = translation;
                }
            }
        });
        localStorage.setItem('robo_lang', lang);
        currentLang = lang;
        updateLangButton(lang);
    };

    const updateLangButton = (lang) => {
        const langBtn = document.querySelector('.lang-trigger');
        if (!langBtn) return;
        let flag, name;
        if (lang === 'en') {
            flag = 'https://flagcdn.com/w40/us.png';
            name = 'English';
        } else if (lang === 'ja') {
            flag = 'https://flagcdn.com/w40/jp.png';
            name = '日本語';
        } else if (lang === 'zh') {
            flag = 'https://flagcdn.com/w40/cn.png';
            name = '简体中文';
        } else if (lang === 'es') {
            flag = 'https://flagcdn.com/w40/es.png';
            name = 'Español';
        } else if (lang === 'de') {
            flag = 'https://flagcdn.com/w40/de.png';
            name = 'Deutsch';
        } else {
            flag = 'https://flagcdn.com/w40/kr.png';
            name = '한국어';
        }
        langBtn.innerHTML = `
            <img src="${flag}" style="width:20px; border-radius:2px; margin-right:8px;">
            <span style="font-weight:700; color:var(--primary);">${name}</span> 
            <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i>
        `;
    };

    // 3. 언어 선택 UI 관리
    const navActions = document.querySelector('.nav-actions');
    const langBtn = document.createElement('button');
    langBtn.className = 'btn lang-trigger';
    langBtn.style.background = 'transparent';
    if (navActions) navActions.appendChild(langBtn);

    const createLangModal = () => {
        const modalHTML = `
            <div class="modal-overlay" id="langModal">
                <div class="modal-content">
                    <span class="modal-close" id="closeModal">&times;</span>
                    <h2 class="modal-title" data-i18n="lang_modal_title">언어를 선택해주세요</h2>
                    <div class="lang-grid active">
                        <div class="lang-item" data-lang="ko"><img src="https://flagcdn.com/w40/kr.png" class="flag"> <span class="country">한국 (한국어)</span></div>
                        <div class="lang-item" data-lang="en"><img src="https://flagcdn.com/w40/us.png" class="flag"> <span class="country">USA (English)</span></div>
                        <div class="lang-item" data-lang="ja"><img src="https://flagcdn.com/w40/jp.png" class="flag"> <span class="country">日本 (日本語)</span></div>
                        <div class="lang-item" data-lang="zh"><img src="https://flagcdn.com/w40/cn.png" class="flag"> <span class="country">中国 (简体中文)</span></div>
                        <div class="lang-item" data-lang="es"><img src="https://flagcdn.com/w40/es.png" class="flag"> <span class="country">España (Español)</span></div>
                        <div class="lang-item" data-lang="de"><img src="https://flagcdn.com/w40/de.png" class="flag"> <span class="country">Deutschland (Deutsch)</span></div>
                    </div>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        const modal = document.getElementById('langModal');

        document.querySelectorAll('.lang-item').forEach(item => item.onclick = () => {
            const lang = item.getAttribute('data-lang');
            updateTexts(lang);
            modal.style.display = 'none';
        });

        document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
        window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };
        langBtn.onclick = () => modal.style.display = 'flex';
    };

    createLangModal();
    updateTexts(currentLang); // 초기 언어 적용

    // 4. 모바일 메뉴 제어
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        navLinks.querySelectorAll('a').forEach(l => {
            l.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').className = 'fas fa-bars';
            });
        });
    }

    // 5. 제품 상세 정보 모달 고도화 버전
    window.showProductDetail = (modelId) => {
        const lang = currentLang;
        const modelKey = modelId.toLowerCase().replace('-', '');
        const t = translations[lang];
        
        const detail = t[`${modelKey}_detail`];
        const longDesc = t[`${modelKey}_long_desc`];
        const title = modelId.toUpperCase();
        
        const specs = {
            ai3: { payload: "3 kg", reach: "500 mm", precision: "±0.03 mm", weight: "12.5 kg", dof: "6-axis" },
            ai5: { payload: "5 kg", reach: "850 mm", precision: "±0.03 mm", weight: "18.4 kg", dof: "6-axis" },
            ai10: { payload: "10 kg", reach: "1300 mm", precision: "±0.05 mm", weight: "33.5 kg", dof: "6-axis" }
        }[modelKey];

        const features = [t[`${modelKey}_f1`], t[`${modelKey}_f2`], t[`${modelKey}_f3`], t[`${modelKey}_f4`]];

        const modalHTML = `
            <div class="modal-overlay" id="productModal" style="display:flex; padding: 20px;">
                <div class="modal-content" style="max-width: 850px; max-height: 90vh; padding: 0; overflow-y: auto; border-radius: 28px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); scrollbar-width: thin;">
                    <span class="modal-close" id="closeProdModal" style="top: 20px; right: 25px; color: #94a3b8; font-size: 32px; z-index: 10;">&times;</span>
                    <div style="display: flex; flex-direction: column;">
                        <!-- Header Section with optimized space -->
                        <div style="background: linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%); padding: 40px 30px; text-align: center; border-bottom: 1px solid #e2e8f0;">
                            <img src="images/${modelId.toLowerCase()}.png" style="height: 180px; display: block; margin: 0 auto 20px; filter: drop-shadow(0 20px 35px rgba(0,0,0,0.15));">
                            <h2 style="font-size: 2.8rem; color: #0f172a; font-weight: 900; letter-spacing: -1.5px; margin: 0;">${title}</h2>
                            <div style="display: inline-block; background: #3b82f6; color: white; padding: 5px 20px; border-radius: 100px; font-weight: 800; margin-top: 15px; font-size: 0.8rem; text-transform: uppercase;">AI-Powered Cobot</div>
                        </div>

                        <div class="modal-info-grid" style="padding: 35px; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; background: white;">
                            <!-- Left Content -->
                            <div>
                                <h3 style="font-size: 1.3rem; color: #1e293b; margin-bottom: 18px; display: flex; align-items: center; gap: 10px; font-weight: 800;">
                                    <i class="fas fa-align-left" style="color: #3b82f6;"></i>
                                    ${t.desc_title}
                                </h3>
                                <p style="color: #475569; line-height: 1.8; margin-bottom: 35px; font-size: 1.05rem; text-align: justify;">${longDesc}</p>
                                
                                <h3 style="font-size: 1.3rem; color: #1e293b; margin-bottom: 18px; display: flex; align-items: center; gap: 10px; font-weight: 800;">
                                    <i class="fas fa-bolt" style="color: #f59e0b;"></i>
                                    ${t.key_features}
                                </h3>
                                <div style="display: grid; grid-template-columns: 1fr; gap: 12px;">
                                    ${features.filter(f => f).map(f => `
                                        <div style="display: flex; align-items: center; gap: 12px; padding: 12px 18px; background: #fffbeb; border-radius: 12px; border: 1px solid #fef3c7; color: #92400e; font-weight: 600; font-size: 0.95rem;">
                                            <i class="fas fa-check-circle" style="color: #f59e0b;"></i> ${f}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <!-- Right Content: Technical Specs -->
                            <div style="background: #f8fafc; padding: 30px; border-radius: 20px; border: 1px solid #f1f5f9; height: fit-content;">
                                <h3 style="font-size: 1.3rem; color: #0f172a; margin-bottom: 22px; text-align: center; font-weight: 800; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">${t.spec_title}</h3>
                                <div style="display: flex; flex-direction: column; gap: 15px;">
                                    <div style="display: flex; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px dashed #cbd5e1;">
                                        <span style="color: #64748b;">${t.spec_payload}</span>
                                        <strong style="color: #0f172a;">${specs.payload}</strong>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px dashed #cbd5e1;">
                                        <span style="color: #64748b;">${t.spec_reach}</span>
                                        <strong style="color: #0f172a;">${specs.reach}</strong>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px dashed #cbd5e1;">
                                        <span style="color: #64748b;">${t.spec_precision}</span>
                                        <strong style="color: #0f172a;">${specs.precision}</strong>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px dashed #cbd5e1;">
                                        <span style="color: #64748b;">${t.spec_weight}</span>
                                        <strong style="color: #0f172a;">${specs.weight}</strong>
                                    </div>
                                    <div style="display: flex; justify-content: space-between;">
                                        <span style="color: #64748b;">${t.spec_dof}</span>
                                        <strong style="color: #0f172a;">${specs.dof}</strong>
                                    </div>
                                </div>
                                <button class="btn btn-primary" style="width: 100%; margin-top: 35px; padding: 18px; border-radius: 12px; font-weight: 800; font-size: 1rem;" onclick="document.getElementById('productModal').remove()">${t.close}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        const closeBtn = document.getElementById('closeProdModal');
        closeBtn.onclick = () => document.getElementById('productModal').remove();
        const modal = document.getElementById('productModal');
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    };

    // 6. 히어로 이미지 슬라이더 로직
    const initHeroSlider = () => {
        const slider = document.querySelector('.hero-image-slider');
        if (!slider) return;

        const slides = slider.querySelectorAll('.slide');
        const dots = slider.querySelectorAll('.dot');
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');
        if (!slides.length) return;

        let currentIdx = 0;
        let slideInterval;

        const showSlide = (n) => {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            
            currentIdx = (n + slides.length) % slides.length;
            slides[currentIdx].classList.add('active');
            if (dots[currentIdx]) dots[currentIdx].classList.add('active');
        };

        const nextSlide = () => showSlide(currentIdx + 1);
        const prevSlide = () => showSlide(currentIdx - 1);

        if (nextBtn) nextBtn.onclick = (e) => { e.stopPropagation(); nextSlide(); resetInterval(); };
        if (prevBtn) prevBtn.onclick = (e) => { e.stopPropagation(); prevSlide(); resetInterval(); };

        dots.forEach((dot, i) => {
            dot.onclick = (e) => { e.stopPropagation(); showSlide(i); resetInterval(); };
        });

        const resetInterval = () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000); // 5초마다 전환
        };

        // 7. 라이트박스 (이미지 크게 보기) 추가
        slides.forEach(slide => {
            slide.style.cursor = 'zoom-in';
            slide.onclick = () => {
                const src = slide.getAttribute('src');
                const lightboxHTML = `
                    <div class="lightbox-overlay" id="lightbox" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.92); z-index:5000; display:flex; align-items:center; justify-content:center; cursor:zoom-out; opacity:0; transition:opacity 0.3s ease;">
                        <img src="${src}" style="max-width:90%; max-height:85%; border-radius:15px; box-shadow:0 0 60px rgba(0,0,0,0.8); transform:scale(0.9); transition:transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);">
                        <span style="position:absolute; top:30px; right:40px; color:white; font-size:40px; font-weight:300; cursor:pointer;">&times;</span>
                    </div>
                `;
                document.body.insertAdjacentHTML('beforeend', lightboxHTML);
                const lightbox = document.getElementById('lightbox');
                const img = lightbox.querySelector('img');
                
                requestAnimationFrame(() => {
                    lightbox.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                });

                const closeLightbox = () => {
                    lightbox.style.opacity = '0';
                    img.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        lightbox.remove();
                        document.removeEventListener('keydown', escHandler);
                    }, 300);
                };

                const escHandler = (e) => {
                    if (e.key === 'Escape') closeLightbox();
                };

                lightbox.onclick = closeLightbox;
                document.addEventListener('keydown', escHandler);
            };
        });

        resetInterval();
    };

    initHeroSlider();
});
