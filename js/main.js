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
        close: "닫기"
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
        close: "Close"
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
        lounge_title: "Lounge & Connect",
        lounge_desc: "ユーザー가語るロボット技術の生きた物語",
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
        close: "閉じる"
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
        close: "关闭"
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
        close: "Cerrar"
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
        close: "Schließen"
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
});
