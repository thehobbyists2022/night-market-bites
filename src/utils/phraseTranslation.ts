import type { Language, CountryCode } from '../types/unified';

export interface PhraseDetails {
  meaning: string;
  breakdown?: string;
}

// Curated dictionary for high-frequency night market slang & recipe ordering phrases
const PHRASE_DICTIONARY: Record<string, {
  meaning: Record<string, string>;
  breakdown?: Record<string, string>;
}> = {
  // --- Taiwan Night Markets & Recipes ---
  "老闆，大包鹽酥雞一份，小辣九層塔多一點！": {
    meaning: {
      en: "Boss, one large bag of popcorn chicken, mild spicy with extra Thai basil!",
      "zh-TW": "老闆，大包鹽酥雞一份，小辣九層塔多一點！",
      ja: "店長、塩唐揚げ（塩酥鶏）大袋を一つ、ピリ辛で台湾バジル多めで！",
      ko: "사장님, 옌수지(팝콘치킨) 큰 봉지 하나, 덜 맵게 하고 바질 넉넉히 넣어주세요!",
      vi: "Bác chủ, một gói gà lắc muối tiêu lớn, cay nhẹ và cho nhiều húng quế nhé!",
      th: "เถ้าแก่ ไก่ทอดเกลือไต้หวันถุงใหญ่หนึ่งชุด เผ็ดน้อยใส่โหระพาเยอะๆ ครับ!",
      ms: "Tauke, ayam goreng rangup satu bungkus besar, kurang pedas tambah daun selasih ya!",
      fil: "Boss, isang malaking bag ng Taiwanese popcorn chicken, kaunting anghang at maraming basil!"
    },
    breakdown: {
      en: "老闆 (Boss/Vendor) · 大包 (Large bag) · 小辣 (Mild spicy) · 九層塔多一點 (Extra flash-fried Thai basil)",
      "zh-TW": "老闆（夜市親切稱呼）· 大包（大份量）· 小辣（微辣提味）· 九層塔多一點（油爆九層塔增量香氣）",
      ja: "老闆（屋台の店主）· 大包（大サイズ）· 小辣（ピリ辛）· 九層塔多一點（台湾バジルの素揚げ多め）",
      ko: "老闆 (사장님) · 大包 (큰 봉지) · 小辣 (덜 맵게) · 九層塔多一點 (바질 튀김 넉넉히)",
      vi: "老闆 (Bác chủ) · 大包 (Gói lớn) · 小辣 (Cay nhẹ) · 九層塔多一點 (Nhiều húng quế thơm lừng)",
      th: "老闆 (เถ้าแก่) · 大包 (ถุงใหญ่) · 小辣 (เผ็ดน้อย) · 九層塔多一點 (ใส่ใบโหระพาเยอะๆ)",
      ms: "老闆 (Tauke) · 大包 (Saiz besar) · 小辣 (Kurang pedas) · 九層塔多一點 (Lebih daun selasih)",
      fil: "老闆 (Boss) · 大包 (Malaking bag) · 小辣 (Medyo maanghang) · 九層塔多一點 (Dagdag basil)"
    }
  },
  "老闆，一碗大滷肉飯加一顆滷蛋，內用！": {
    meaning: {
      en: "Boss, one large bowl of braised pork rice with a braised egg, for dine-in!",
      "zh-TW": "老闆，一碗大滷肉飯加一顆滷蛋，內用！",
      ja: "店主、特大ルーロー飯に煮卵一つ追加、店内で食べます！",
      ko: "사장님, 루로우판 큰 공기에 조림 계란 하나 추가해서 여기서 먹고 갈게요!",
      vi: "Bác chủ, một tô cơm thịt kho lớn thêm quả trứng kho, ăn tại quán!",
      th: "เถ้าแก่ ข้าวหมูพะโล้ชามใหญ่ใส่ไข่พะโล้หนึ่งฟอง ทานที่นี่ครับ!",
      ms: "Tauke, satu mangkuk besar nasi daging kicap tambah telur, makan sini!",
      fil: "Boss, isang malaking braised pork rice na may itlog, dine-in po!"
    },
    breakdown: {
      en: "大滷肉飯 (Large bowl braised pork rice) · 加一顆滷蛋 (Add 1 braised egg) · 內用 (Dine-in)",
      "zh-TW": "大滷肉飯（手切五花肉燥）· 加一顆滷蛋（吸滿肉汁的老滷蛋）· 內用（在攤位後方享用）",
      ja: "大滷肉飯（ルーロー飯大盛）· 加一顆滷蛋（煮卵をトッピング）· 內用（店内で食べる）",
      ko: "大滷肉飯 (루로우판 곱빼기) · 加一顆滷蛋 (조림 계란 추가) · 內用 (매장 식사)",
      vi: "大滷肉飯 (Cơm thịt kho tô lớn) · 加一顆滷蛋 (Thêm 1 trứng kho) · 內用 (Ăn tại chỗ)",
      th: "大滷肉飯 (ข้าวหมูพะโล้ชามใหญ่) · 加一顆滷蛋 (เพิ่มไข่พะโล้ 1 ฟอง) · 內用 (ทานที่ร้าน)",
      ms: "大滷肉飯 (Nasi daging kicap besar) · 加一顆滷蛋 (Tambah telur rebus) · 內用 (Makan sini)",
      fil: "大滷肉飯 (Malaking braised pork rice) · 加一顆滷蛋 (Dagdag itlog) · 內用 (Dine-in)"
    }
  },
  "鹽酥雞，要辣加九層塔": {
    meaning: {
      en: "Popcorn chicken, make it spicy with extra Thai basil!",
      "zh-TW": "鹽酥雞，要辣加九層塔！",
      ja: "塩唐揚げ（塩酥鶏）、ピリ辛で台湾バジル追加で！",
      ko: "팝콘 치킨 (옌수지), 맵게 바질 추가해 주세요!",
      vi: "Gà lắc muối tiêu, ăn cay và thêm lá húng quế!",
      th: "ไก่ป๊อปไต้หวัน ขอเผ็ดและใส่ใบโหระพาด้วยครับ!",
      ms: "Ayam popcorn Taiwan, nak pedas dan tambah daun selasih!",
      fil: "Popcorn chicken, maanghang at dagdagan ng basil!"
    },
    breakdown: {
      en: "鹽酥雞 (Popcorn chicken) · 要辣 (Add spicy chili powder) · 加九層塔 (Add fried Thai basil)",
      "zh-TW": "鹽酥雞（招牌酥炸雞）· 要辣（撒特調辣椒粉）· 加九層塔（起鍋前大火油爆九層塔）",
      ja: "鹽酥雞（台湾塩唐揚げ）· 要辣（唐辛子粉をかける）· 加九層塔（台湾バジル素揚げ追加）",
      ko: "鹽酥雞 (대만식 치킨 튀김) · 要辣 (매운맛 추가) · 加九層塔 (튀긴 바질 잎 추가)",
      vi: "鹽酥雞 (Gà rán lắc muối tiêu) · 要辣 (Ăn cay) · 加九層塔 (Thêm húng quế thơm)",
      th: "鹽酥雞 (ไก่ทอดเกลือ) · 要辣 (เอาเผ็ด) · 加九層塔 (ใส่ใบโหระพาทอด)",
      ms: "鹽酥雞 (Ayam goreng rangup) · 要辣 (Mahu pedas) · 加九層塔 (Tambah daun selasih)",
      fil: "鹽酥雞 (Popcorn chicken) · 要辣 (Maanghang) · 加九層塔 (Dagdag basil)"
    }
  },
  "老闆，來一碗大滷肉飯加一顆滷蛋": {
    meaning: {
      en: "Boss, one large bowl of braised pork rice with a braised egg please!",
      "zh-TW": "老闆，來一碗大滷肉飯加一顆滷蛋！",
      ja: "店主、特大ルーロー飯に煮卵を一つトッピングで！",
      ko: "사장님, 루로우판 큰 그릇에 조림 계란 하나 얹어주세요!",
      vi: "Bác chủ, cho một tô cơm thịt kho lớn thêm quả trứng kho!",
      th: "เถ้าแก่ ขอข้าวหมูพะโล้ชามใหญ่ใส่ไข่หนึ่งฟองครับ!",
      ms: "Tauke, bagi satu mangkuk besar nasi daging kicap tambah telur!",
      fil: "Boss, pahingi ng isang malaking braised pork rice na may itlog!"
    },
    breakdown: {
      en: "來一碗 (Bring one bowl) · 大滷肉飯 (Large braised pork rice) · 加一顆滷蛋 (Add one soy-braised egg)",
      "zh-TW": "來一碗（請上一碗）· 大滷肉飯（大碗手切五花肉燥）· 加一顆滷蛋（吸滿老滷汁入味雞蛋）",
      ja: "來一碗（一杯ください）· 大滷肉飯（ルーロー飯大盛り）· 加一顆滷蛋（煮卵を1個トッピング）",
      ko: "來一碗 (한 그릇 주세요) · 大滷肉飯 (루로우판 큰 공기) · 加一顆滷蛋 (간장 조림 계란 추가)",
      vi: "來一碗 (Cho một tô) · 大滷肉飯 (Cơm thịt kho lớn) · 加一顆滷蛋 (Thêm 1 quả trứng kho)",
      th: "來一碗 (ขอหนึ่งชาม) · 大滷肉飯 (ข้าวหมูพะโล้ชามใหญ่) · 加一顆滷蛋 (ใส่ไข่พะโล้ 1 ฟอง)",
      ms: "來一碗 (Bagi satu mangkuk) · 大滷肉飯 (Nasi daging kicap) · 加一顆滷蛋 (Tambah telur rebus)",
      fil: "來一碗 (Bigyan ng isang mangkok) · 大滷肉飯 (Malaking braised pork rice) · 加一顆滷蛋 (Dagdag itlog)"
    }
  },
  "老闆，一杯黑糖珍珠鮮奶，微冰不加糖": {
    meaning: {
      en: "Boss, one brown sugar boba fresh milk, light ice, no extra sugar!",
      "zh-TW": "老闆，一杯黑糖珍珠鮮奶，微冰不加糖！",
      ja: "店長、黒糖タピオカ生ミルク一つ、氷少なめ砂糖追加なしで！",
      ko: "사장님, 흑당 버블티 한 잔, 얼음 조금에 당도 추가 없이 주세요!",
      vi: "Bác chủ, một ly sữa tươi trân châu đường đen, ít đá không thêm đường!",
      th: "เถ้าแก่ ขอนมสดไข่มุกน้ำตาลแดง น้ำแข็งน้อยไม่เพิ่มน้ำตาลครับ!",
      ms: "Tauke, satu cawan susu segar boba gula merah, kurang ais tanpa gula!",
      fil: "Boss, isang brown sugar boba fresh milk, kaunting yelo, walang dagdag na asukal!"
    },
    breakdown: {
      en: "黑糖珍珠鮮奶 (Brown sugar boba milk) · 微冰 (Light ice 30%) · 不加糖 (No extra sugar syrup)",
      "zh-TW": "黑糖珍珠鮮奶（手炒熱黑糖蜜＋小農鮮乳）· 微冰（3分冰）· 不加糖（不加果糖，甜度全靠黑糖香）",
      ja: "黑糖珍珠鮮奶（黒糖タピオカ生ミルク）· 微冰（氷3割）· 不加糖（追加シロップなし、黒糖本来の甘みのみ）",
      ko: "黑糖珍珠鮮奶 (흑당 버블 생우유) · 微冰 (얼음 30%) · 不加糖 (흑당 자체 단맛만으로 시럽 제외)",
      vi: "黑糖珍珠鮮奶 (Sữa tươi trân châu đường đen) · 微冰 (Ít đá 30%) · 不加糖 (Không thêm đường)",
      th: "黑糖珍珠鮮奶 (ชานมไข่มุกน้ำตาลแดง) · 微冰 (น้ำแข็ง 30%) · 不加糖 (ไม่เติมน้ำตาลเพิ่ม)",
      ms: "黑糖珍珠鮮奶 (Boba susu gula merah) · 微冰 (Kurang ais) · 不加糖 (Tanpa gula tambahan)",
      fil: "黑糖珍珠鮮奶 (Brown sugar boba milk) · 微冰 (Kaunting yelo) · 不加糖 (Walang dagdag na asukal)"
    }
  },
  "老闆，一份蚵仔煎，醬多一點菜多一點": {
    meaning: {
      en: "Boss, one oyster omelet, extra sweet-savory sauce and extra greens please!",
      "zh-TW": "老闆，一份蚵仔煎，醬多一點菜多一點！",
      ja: "店長、牡蠣オムレツ（蚵仔煎）一つ、特製タレ多め野菜多めで！",
      ko: "사장님, 굴전(오이스터 오믈렛) 하나, 소스 넉넉히 채소 많이 넣어주세요!",
      vi: "Bác chủ, một đĩa trứng chiên hàu, nhiều sốt và nhiều rau nhé!",
      th: "เถ้าแก่ หอยทอดไต้หวันหนึ่งจาน ขอซอสเยอะๆ ผักเยอะๆ ครับ!",
      ms: "Tauke, satu telur dadar tiram, sos lebih dan sayur lebih ya!",
      fil: "Boss, isang oyster omelet, pakidagdagan ng sauce at gulay!"
    },
    breakdown: {
      en: "蚵仔煎 (Oyster omelet) · 醬多一點 (Extra red sweet sauce) · 菜多一點 (Extra greens/veggies)",
      "zh-TW": "蚵仔煎（鮮蚵小白菜粉漿煎）· 醬多一點（特調鹹甜海山醬加量）· 菜多一點（小白菜加多）",
      ja: "蚵仔煎（牡蠣と野菜のオムレツ）· 醬多一點（特製タレ多め）· 菜多一點（白菜などの野菜多め）",
      ko: "蚵仔煎 (굴과 전분으로 부친 굴전) · 醬多一點 (특제 달콤매콤 소스 많이) · 菜多一點 (야채 많이)",
      vi: "蚵仔煎 (Trứng chiên hàu) · 醬多一點 (Nhiều sốt ngọt cay) · 菜多一點 (Nhiều rau xanh)",
      th: "蚵仔煎 (หอยทอดแป้งเหนียวนุ่ม) · 醬多一點 (ราดซอสเยอะๆ) · 菜多一點 (ใส่ผักเยอะๆ)",
      ms: "蚵仔煎 (Telur dadar tiram) · 醬多一點 (Sos lebih) · 菜多一點 (Sayur lebih)",
      fil: "蚵仔煎 (Oyster omelet) · 醬多一點 (Dagdagan ng sauce) · 菜多一點 (Dagdagan ng gulay)"
    }
  },
  "老闆，大包地瓜球一份，黃色紫色都要": {
    meaning: {
      en: "Boss, one large bag of sweet potato balls, mixed yellow and purple please!",
      "zh-TW": "老闆，大包地瓜球一份，黃色紫色都要！",
      ja: "店長、さつまいもボール（地瓜球）大袋を一つ、黄色と紫色のミックスで！",
      ko: "사장님, 고구마볼 큰 봉지 하나, 노란색이랑 자색 섞어서 주세요!",
      vi: "Bác chủ, một túi bánh khoai lang viên lớn, lấy cả màu vàng lẫn màu tím!",
      th: "เถ้าแก่ ไข่นกกระทาทอดถุงใหญ่หนึ่งชุด ขอทั้งสีเหลืองและสีม่วงครับ!",
      ms: "Tauke, satu bungkus besar bebola ubi keledek, nak campur kuning dan ungu ya!",
      fil: "Boss, isang malaking bag ng sweet potato balls, halo po ang dilaw at ube!"
    },
    breakdown: {
      en: "大包地瓜球 (Large bag of sweet potato balls) · 黃色紫色都要 (Mix both regular and purple yam balls)",
      "zh-TW": "大包地瓜球（反覆油壓現炸膨脹Q彈）· 黃色紫色都要（黃肉地瓜與紫薯雙色混合）",
      ja: "大包地瓜球（押し揚げモチモチボール）· 黃色紫色都要（黄芋と紫芋の両方ミックス）",
      ko: "大包地瓜球 (바삭 쫄깃한 고구마볼) · 黃色紫色都要 (노란 고구마와 자색 고구마 반반 혼합)",
      vi: "大包地瓜球 (Viên khoai lang chiên) · 黃色紫色都要 (Trộn cả khoai vàng và khoai lang tím)",
      th: "大包地瓜球 (ลูกกลมมันเทศทอดกรอบ) · 黃色紫色都要 (เอาทั้งสีเหลืองและสีม่วง)",
      ms: "大包地瓜球 (Bebola ubi rangup) · 黃色紫色都要 (Campur ubi kuning dan ubi ungu)",
      fil: "大包地瓜球 (Sweet potato balls) · 黃色紫色都要 (Parehong dilaw at ube)"
    }
  },
  "老闆，一份大腸包小腸，蒜味加辣": {
    meaning: {
      en: "Boss, one sausage in sticky rice, garlic flavor with spicy chili!",
      "zh-TW": "老闆，一份大腸包小腸，蒜味加辣！",
      ja: "店長、もち米ソーセージ包み（大腸包小腸）一つ、生ニンニク入りでピリ辛で！",
      ko: "사장님, 대창포소창(찹쌀 소시지 핫도그) 하나, 생마늘 넣고 맵게 해주세요!",
      vi: "Bác chủ, một phần xôi lạp xưởng kẹp xúc xích, vị tỏi và thêm ớt cay!",
      th: "เถ้าแก่ ไส้กรอกข้าวเหนียวห่อไส้กรอกหมูหนึ่งชุด ขอกระเทียมและเผ็ดครับ!",
      ms: "Tauke, satu sosej pulut balut sosej daging, perisa bawang putih dan pedas!",
      fil: "Boss, isang order ng sausage wrapped in sticky rice, may bawang at sili!"
    },
    breakdown: {
      en: "大腸包小腸 (Sticky rice sausage wrapping a grilled pork sausage) · 蒜味 (Fresh garlic cloves) · 加辣 (Add chili)",
      "zh-TW": "大腸包小腸（糯米腸夾炭烤香腸）· 蒜味（夾生大蒜片解膩）· 加辣（刷特製辣醬）",
      ja: "大腸包小腸（もち米ソーセージに豚ソーセージを挟む）· 蒜味（生ニンニク入り）· 加辣（唐辛子ソース追加）",
      ko: "大腸包小腸 (찹쌀 순대 모양 빵에 소시지를 끼운 핫도그) · 蒜味 (생마늘) · 加辣 (매콤 소스)",
      vi: "大腸包小腸 (Xôi lạp xưởng kẹp xúc xích) · 蒜味 (Tỏi tươi) · 加辣 (Tương ớt cay)",
      th: "大腸包小腸 (ไส้กรอกข้าวเหนียวห่อไส้กรอก) · 蒜味 (ใส่กระเทียม) · 加辣 (ใส่พริก)",
      ms: "大腸包小腸 (Sosej pulut balut sosej daging) · 蒜味 (Bawang putih) · 加辣 (Tambah pedas)",
      fil: "大腸包小腸 (Sausage in sticky rice) · 蒜味 (May bawang) · 加辣 (Maanghang)"
    }
  },
  "老闆，一碗紅燒半筋半肉麵，寬麵加酸菜": {
    meaning: {
      en: "Boss, one bowl of braised half-tendon half-beef noodles, wide noodles with pickled greens!",
      "zh-TW": "老闆，一碗紅燒半筋半肉麵，寬麵加酸菜！",
      ja: "店主、牛すじ＆牛肉の紅焼牛肉麺一つ、平打ち幅広麺に高菜漬け追加で！",
      ko: "사장님, 홍소 소고기 반・스지 반 우육면 하나, 넓은 면에 쏸차이(갓절임) 넣어주세요!",
      vi: "Bác chủ, một tô mì bò hầm nửa gân nửa nạc, sợi mì to thêm dưa cải chua!",
      th: "เถ้าแก่ ขอหมี่เนื้อตุ๋นเอ็นแก้วหนึ่งชาม เส้นใหญ่ใส่ผักกาดดองครับ!",
      ms: "Tauke, mi daging lembu tendon rebus satu, mi lebar tambah sayur jeruk masin!",
      fil: "Boss, isang mangkok ng braised beef & tendon noodles, wide noodles na may pickled greens!"
    },
    breakdown: {
      en: "紅燒半筋半肉 (Braised beef & soft tendon) · 寬麵 (Handmade wide noodles) · 加酸菜 (Add pickled mustard greens)",
      "zh-TW": "紅燒半筋半肉（牛腱肉與Q彈牛筋各半）· 寬麵（手工粗寬麵）· 加酸菜（解膩炒酸菜）",
      ja: "紅燒半筋半肉（牛スネ肉と牛すじのハーフ）· 寬麵（幅広麺）· 加酸菜（高菜漬け追加）",
      ko: "紅燒半筋半肉 (사태살과 쫀득한 스지) · 寬麵 (넓은 면) · 加酸菜 (갓절임 추가)",
      vi: "紅燒半筋半肉 (Bắp bò và gân bò mềm) · 寬麵 (Sợi mì to dai) · 加酸菜 (Dưa chua xào cay)",
      th: "紅燒半筋半肉 (เนื้อตุ๋นและเอ็นแก้ว) · 寬麵 (เส้นใหญ่) · 加酸菜 (ผักกาดดอง)",
      ms: "紅燒半筋半肉 (Daging lembu dan urat) · 寬麵 (Mi lebar) · 加酸菜 (Sayur masin)",
      fil: "紅燒半筋半肉 (Braised beef & tendon) · 寬麵 (Malapad na noodles) · 加酸菜 (Pickled greens)"
    }
  },
  "老闆，臭豆腐一份大辣，泡菜多一點": {
    meaning: {
      en: "Boss, one order of crispy stinky tofu, extra spicy with extra pickled cabbage!",
      "zh-TW": "老闆，臭豆腐一份大辣，泡菜多一點！",
      ja: "店長、揚げ臭豆腐一つ激辛で、台湾風甘酢ピクルス多めで！",
      ko: "사장님, 취두부 튀김 하나 아주 맵게 하고, 대만식 양배추 피클 넉넉히 주세요!",
      vi: "Bác chủ, một phần đậu hũ thối chiên thật cay, cho nhiều bắp cải muối chua nhé!",
      th: "เถ้าแก่ เต้าหู้เหม็นทอดหนึ่งจาน เผ็ดมาก ขอผักดองเยอะๆ ครับ!",
      ms: "Tauke, satu tauhu busuk goreng rangup pedas gila, jeruk kubis lebih ya!",
      fil: "Boss, isang order ng stinky tofu, sobrang anghang at maraming pickled cabbage!"
    },
    breakdown: {
      en: "臭豆腐 (Crispy golden stinky tofu) · 大辣 (Heavy spicy chili sauce) · 泡菜多一點 (Extra sweet-tangy pickled cabbage)",
      "zh-TW": "臭豆腐（酥脆臭豆腐）· 大辣（辣醬灌入豆腐孔洞）· 泡菜多一點（酸甜台式泡菜加量）",
      ja: "臭豆腐（外カリ中ジュワの揚げ豆腐）· 大辣（激辛唐辛子を注入）· 泡菜多一點（台湾ピクルス増量）",
      ko: "臭豆腐 (겉바속촉 취두부 튀김) · 大辣 (매운 소스 듬뿍) · 泡菜多一點 (양배추 피클 넉넉히)",
      vi: "臭豆腐 (Đậu hũ thối chiên giòn) · 大辣 (Rất cay) · 泡菜多一點 (Nhiều bắp cải chua ngọt)",
      th: "臭豆腐 (เต้าหู้เหม็นทอดกรอบ) · 大辣 (เผ็ดจัด) · 泡菜多一點 (ผักดองเยอะๆ)",
      ms: "臭豆腐 (Tauhu busuk goreng) · 大辣 (Sangat pedas) · 泡菜多一點 (Jeruk kubis lebih)",
      fil: "臭豆腐 (Crispy stinky tofu) · 大辣 (Sobrang anghang) · 泡菜多一點 (Dagdag pickled cabbage)"
    }
  },
  "老闆，大雞排一份不要切、大辣！": {
    meaning: {
      en: "Boss, one giant chicken cutlet, uncut, extra spicy please!",
      "zh-TW": "老闆，大雞排一份不要切、大辣！",
      ja: "店長、ジャンボフライドチキン（大鶏排）一つ、切らずにそのままで激辛で！",
      ko: "사장님, 대왕 지파이 하나, 자르지 말고 아주 맵게 해주세요!",
      vi: "Bác chủ, một miếng gà rán khổng lồ để nguyên không cắt, thật cay!",
      th: "เถ้าแก่ ไก่ทอดไซส์ยักษ์หนึ่งชิ้น ไม่ต้องหั่น ขอเผ็ดมากครับ!",
      ms: "Tauke, ayam goreng gergasi satu keping, jangan potong dan pedas gila!",
      fil: "Boss, isang giant chicken cutlet, huwag hiwain, sobrang anghang!"
    },
    breakdown: {
      en: "大雞排 (Giant fried chicken cutlet) · 不要切 (Do not cut - locks in juices!) · 大辣 (Extra spicy chili powder)",
      "zh-TW": "大雞排（超大酥炸雞排）· 不要切（整片吃鎖住飽滿肉汁）· 大辣（重磅辣椒粉）",
      ja: "大雞排（手のひら超えの巨大チキン）· 不要切（切らずに肉汁を閉じ込める）· 大辣（激辛）",
      ko: "大雞排 (대왕 지파이) · 不要切 (자르지 않아야 육즙 유지) · 大辣 (아주 매운맛)",
      vi: "大雞排 (Gà rán khổng lồ) · 不要切 (Để nguyên miếng giữ nước thịt ngọt) · 大辣 (Cay nhiều)",
      th: "大雞排 (ไก่ทอดชิ้นยักษ์) · 不要切 (ไม่ต้องหั่น เพื่อความฉ่ำของเนื้อ) · 大辣 (เผ็ดมาก)",
      ms: "大雞排 (Ayam goreng saiz gergasi) · 不要切 (Jangan potong supaya berjus) · 大辣 (Pedas gila)",
      fil: "大雞排 (Giant fried chicken) · 不要切 (Huwag hiwain para makatas) · 大辣 (Sobrang anghang)"
    }
  },

  // --- Thailand Night Markets & Recipes ---
  "เอาผัดไทยกุ้งสดหนึ่งจาน ไม่เผ็ดมากครับ (Ao Pad Thai Goong Sod Neung Jan, Mai Phet Mak Khrap)": {
    meaning: {
      en: "One plate of Pad Thai with fresh shrimp, not too spicy please!",
      "zh-TW": "請給我一份鮮蝦泰式炒河粉，不要太辣！",
      ja: "生エビ入りパッタイを一皿、あまり辛くしないでください！",
      ko: "생새우 팟타이 한 접시 주세요, 너무 맵지 않게 부탁해요!",
      vi: "Cho tôi một đĩa Pad Thai tôm tươi, không cay quá nhé!",
      th: "เอาผัดไทยกุ้งสดหนึ่งจาน ไม่เผ็ดมากครับ",
      ms: "Bagi satu pinggan Pad Thai udang segar, kurang pedas ya!",
      fil: "Isang Pad Thai na may sariwang hipon, huwag masyadong maanghang po!"
    },
    breakdown: {
      en: "เอาผัดไทย (Want Pad Thai) · กุ้งสด (Fresh shrimp) · หนึ่งจาน (1 plate) · ไม่เผ็ดมาก (Not too spicy) · ครับ (Polite particle)",
      "zh-TW": "ผัดไทย (泰式炒金邊粉) · กุ้งสด (鮮蝦) · หนึ่งจาน (一盤) · ไม่เผ็ดมาก (不要太辣)",
      ja: "ผัดไทย (パッタイ) · กุ้งสด (生エビ) · หนึ่งจาน (一皿) · ไม่เผ็ดมาก (辛さ控えめ)",
      ko: "ผัดไทย (팟타이) · กุ้งสด (생새우) · หนึ่งจาน (한 접시) · ไม่เผ็ดมาก (안 맵게)",
      vi: "ผัดไทย (Phở xào Thái) · กุ้งสด (Tôm tươi) · หนึ่งจาน (Một đĩa) · ไม่เผ็ดมาก (Ít cay)",
      th: "ผัดไทย (ก๋วยเตี๋ยวผัดไทย) · กุ้งสด (กุ้งแม่น้ำสด) · หนึ่งจาน · ไม่เผ็ดมาก",
      ms: "ผัดไทย (Mi goreng Thai) · กุ้งสด (Udang segar) · หนึ่งจาน (Satu pinggan) · ไม่เผ็ดมาก (Kurang pedas)",
      fil: "ผัดไทย (Pad Thai) · กุ้งสด (Sariwang hipon) · หนึ่งจาน (Isang plato) · ไม่เผ็ดมาก (Medyo maanghang lang)"
    }
  },
  "ขอโรตีกล้วยไข่ ใส่ชีสและนมข้นเยอะๆ ค่ะ (Kho Roti Gluay Khai, Sai Cheese Lae Nom Khon Yoe Yoe Kha)": {
    meaning: {
      en: "One banana & egg roti with cheese, and lots of condensed milk please!",
      "zh-TW": "請給我一份香蕉雞蛋煎餅，加起司和滿滿的煉乳！",
      ja: "バナナと卵のロティにチーズ入り、練乳たっぷりでお願いします！",
      ko: "바나나 계란 로티에 치즈 추가하고 연유 듬뿍 뿌려주세요!",
      vi: "Cho tôi một bánh Roti chuối trứng, thêm phô mai và nhiều sữa đặc!",
      th: "ขอโรตีกล้วยไข่ ใส่ชีสและนมข้นเยอะๆ ค่ะ",
      ms: "Bagi roti canai pisang telur satu, tambah keju dan susu pekat lebih ya!",
      fil: "Pabili ng banana & egg roti na may keso, at maraming condensed milk!"
    },
    breakdown: {
      en: "โรตีกล้วยไข่ (Banana egg roti) · ใส่ชีส (Add cheese) · นมข้นเยอะๆ (Lots of condensed milk)",
      "zh-TW": "โรตี (泰式香脆煎餅) · กล้วยไข่ (香蕉＋蛋) · ใส่ชีส (加起司) · นมข้นเยอะๆ (多加煉乳)",
      ja: "โรตี (タイ風クレープロティ) · กล้วยไข่ (バナナ卵) · ใส่ชีส (チーズ追加) · นมข้นเยอะๆ (練乳多め)",
      ko: "โรตี (로티) · กล้วยไข่ (바나나와 달걀) · ใส่ชีส (치즈 추가) · นมข้นเยอะๆ (연유 듬뿍)",
      vi: "โรตี (Bánh Roti) · กล้วยไข่ (Chuối trứng) · ใส่ชีส (Thêm phô mai) · นมข้นเยอะๆ (Nhiều sữa đặc)",
      th: "โรตีกล้วยไข่ (โรตีใส่กล้วยหอมและไข่ไก่) · ใส่ชีส · นมข้นเยอะๆ",
      ms: "โรตี (Roti canai manis) · กล้วยไข่ (Pisang telur) · ใส่ชีส (Tambah keju) · นมข้นเยอะๆ (Susu pekat manis)",
      fil: "โรตี (Roti) · กล้วยไข่ (Saging at itlog) · ใส่ชีส (May keso) · นมข้นเยอะๆ (Maraming condensed milk)"
    }
  },

  // --- Japan Night Markets & Recipes ---
  "たこ焼き８個、マヨネーズと青のり多めで、めっちゃアツアツでちょうだい！": {
    meaning: {
      en: "8 pieces of Takoyaki, extra mayo and green seaweed, make it piping hot please!",
      "zh-TW": "章魚燒 8 顆，美乃滋和海苔粉多一點，要現做熱騰騰的！",
      ja: "たこ焼き８個、マヨネーズと青のり多めで、めっちゃアツアツでちょうだい！",
      ko: "타코야키 8알, 마요네즈랑 파래가루 많이 뿌려서 아주 뜨겁게 주세요!",
      vi: "8 viên bánh bạch tuộc Takoyaki, cho nhiều sốt mayonnaise và rong biển, làm thật nóng nhé!",
      th: "ทาโกะยากิ 8 ชิ้น ขอมายองเนสกับสาหร่ายเยอะๆ และร้อนๆ เลยนะครับ!",
      ms: "Takoyaki 8 biji, mayonis dan rumpai laut hijau lebih, nak yang panas berasap!",
      fil: "8 pirasong Takoyaki, dagdagan ng mayo at seaweed, pakiinitan po nang husto!"
    },
    breakdown: {
      en: "たこ焼き８個 (8 octopus balls) · マヨネーズ (Japanese Kewpie mayo) · 青のり多め (Extra Aonori green seaweed flakes) · アツアツ (Piping hot)",
      "zh-TW": "たこ焼き（章魚燒）· ８個（8顆一份）· マヨネーズ多め（美乃滋加多）· 青のり（青海苔粉）· アツアツ（熱氣蒸騰）",
      ja: "たこ焼き（大阪名物タコ入り焼き）· マヨネーズ多め（マヨ増量）· 青のり多め（青のりたっぷり）· アツアツ（焼きたて熱々）",
      ko: "たこ焼き (타코야키) · ８個 (8개) · マヨネーズ (마요네즈) · 青のり多め (파래가루 많이) · アツアツ (갓 구워 뜨겁게)",
      vi: "たこ焼き (Bánh bạch tuộc) · ８個 (8 viên) · マヨネーズ (Sốt mayo) · 青のり (Rong biển xanh) · アツアツ (Nóng hổi vừa thổi vừa ăn)",
      th: "たこ焼き (ทาโกะยากิ) · ８個 (8 ลูก) · マヨネーズ (มายองเนส) · 青のり (สาหร่ายผง) · アツアツ (ร้อนๆ)",
      ms: "たこ焼き (Bebola kurita) · ８個 (8 biji) · マヨネーズ (Mayonis) · 青のり (Rumpai laut) · アツアツ (Panas menggelegak)",
      fil: "たこ焼き (Takoyaki octopus balls) · ８個 (8 piraso) · マヨネーズ (Mayonnaise) · 青のり (Seaweed flakes) · アツアツ (Napakainit)"
    }
  },

  // --- Korea Night Markets & Recipes ---
  "사장님, 떡볶이 1인분 국물 넉넉하게 주시고, 튀김도 섞어주세요!": {
    meaning: {
      en: "Boss, one serving of Tteokbokki with extra spicy broth, and mix in some fried fritters please!",
      "zh-TW": "老闆，辣炒年糕一人份湯汁多一點，炸物也幫我混進去！",
      ja: "店長、トッポギ1人前スープ多めで、天ぷら（ティギム）も和えてください！",
      ko: "사장님, 떡볶이 1인분 국물 넉넉하게 주시고, 튀김도 섞어주세요!",
      vi: "Bác chủ, một phần bánh gạo cay Tteokbokki nhiều nước sốt, và trộn thêm đồ chiên vào nhé!",
      th: "เถ้าแก่ ต๊อกบกกีหนึ่งที่ ขอน้ำซอสเยอะๆ แล้วคลุกของทอดรวมไปด้วยครับ!",
      ms: "Bos, satu hidangan Tteokbokki kuah lebih, campur sekali dengan cucur goreng ya!",
      fil: "Boss, isang order ng Tteokbokki na may maraming sabaw, at haluan ng pritong tempura!"
    },
    breakdown: {
      en: "떡볶이 1인분 (1 serving spicy rice cakes) · 국물 넉넉하게 (Generous red pepper broth) · 튀김도 섞어주세요 (Mix in crispy fried tempura fritters)",
      "zh-TW": "떡볶이 1인분（辣炒年糕一人份）· 국물 넉넉하게（辣醬湯多給一些）· 튀김도 섞어주세요（把炸物泡進辣醬中裹汁吃）",
      ja: "떡볶이 (トッポギ) · 1인분 (一人前) · 국물 넉넉하게 (甘辛スープ多め) · 튀김 (揚げ物天ぷらティギムをタレに絡める)",
      ko: "떡볶이 1인분 (혼자 먹는 정량) · 국물 넉넉하게 (국물떡볶이 스타일) · 튀김도 섞어주세요 (김말이/야채튀김 떡볶이 국물 범벅)",
      vi: "떡볶이 (Bánh gạo xào cay) · 국물 넉넉하게 (Nhiều nước sốt đỏ) · 튀김도 섞어주세요 (Nhúng chả ram chiên vào sốt)",
      th: "떡볶이 (ต๊อกบกกี) · 국물 넉넉하게 (ซอสชุ่มๆ) · 튀김 (ของทอดคลุกซอส)",
      ms: "떡볶이 (Kek beras pedas) · 국물 넉넉하게 (Kuah merah pekat lebih) · 튀김 (Cucur celup kuah)",
      fil: "떡볶이 (Tteokbokki rice cake) · 국물 넉넉하게 (Maraming maanghang na sabaw) · 튀김 (Ihalo ang pritong gulay)"
    }
  },

  // --- Malaysia Night Markets & Recipes ---
  "Boss, Nasi Lemak satu bungkus, sambal lebih, telur mata satu!": {
    meaning: {
      en: "Boss, one pack of Nasi Lemak, extra spicy sambal, and one sunny-side-up egg!",
      "zh-TW": "老闆，辣死你媽（椰漿飯）打包一份，森巴辣醬多一點，加一顆荷包蛋！",
      ja: "店長、ナシレマ（ココナッツライス）一つ持ち帰り、サンバル多め、目玉焼き乗せで！",
      ko: "사장님, 나시레막 한 봉지 포장이요, 삼발 소스 많이 주시고 계란 프라이 하나 얹어주세요!",
      vi: "Bác chủ, một gói cơm dừa Nasi Lemak mang về, nhiều sốt cay Sambal và thêm trứng ốp la!",
      th: "บอส ข้าวคลุกกะทินาซิเลอมักห่อกลับบ้านหนึ่งชุด ขอซอสซัมบัลเยอะๆ ไข่ดาวหนึ่งฟองครับ!",
      ms: "Boss, Nasi Lemak satu bungkus, sambal lebih, telur mata satu!",
      fil: "Boss, isang balot ng Nasi Lemak, dagdag sambal, at isang sunny-side-up egg!"
    },
    breakdown: {
      en: "Nasi Lemak (Fragrant coconut rice) · satu bungkus (1 takeaway pack) · sambal lebih (Extra spicy sambal chili paste) · telur mata (Sunny-side-up fried egg)",
      "zh-TW": "Nasi Lemak（椰漿斑蘭飯）· satu bungkus（外帶一包）· sambal lebih（特調辣椒參巴醬加量）· telur mata（太陽荷包蛋）",
      ja: "Nasi Lemak（ココナッツ香るマレー風炊き込みご飯）· satu bungkus（1つテイクアウト）· sambal lebih（辛口サンバル多め）· telur mata（目玉焼き）",
      ko: "Nasi Lemak (코코넛 밥과 멸치 볶음) · satu bungkus (포장 하나) · sambal lebih (매콤한 삼발 소스 넉넉히) · telur mata (반숙 계란 프라이)",
      vi: "Nasi Lemak (Cơm dừa Mã Lai lá chuối) · satu bungkus (Một gói mang về) · sambal lebih (Nhiều sốt ớt sambal) · telur mata (Trứng ốp la)",
      th: "Nasi Lemak (ข้าวหุงกะทิหอมกรุ่น) · satu bungkus (ห่อกลับบ้าน 1 ห่อ) · sambal lebih (น้ำพริกซัมบัลเยอะๆ) · telur mata (ไข่ดาว)",
      ms: "Nasi Lemak (Nasi wangi santan) · satu bungkus (Bungkus bawa pulang) · sambal lebih (Sambal pedas manis lebih) · telur mata (Telur goreng mata kerbau)",
      fil: "Nasi Lemak (Coconut rice na may sambal) · satu bungkus (Isang balot to go) · sambal lebih (Dagdag anghang) · telur mata (Fried egg)"
    }
  },

  // --- Philippines Night Markets & Recipes ---
  "Boss, isang order ng Crispy Sisig na may itlog at dagdag na kanin!": {
    meaning: {
      en: "Boss, one order of Crispy Sisig with an egg and extra rice please!",
      "zh-TW": "老闆，鐵板脆皮 Sisig 一份加蛋，再來一碗大碗白飯！",
      ja: "店長、熱々鉄板シシグ（豚肉の細切れ炒め）卵乗せ一つ、ご飯大盛りで！",
      ko: "사장님, 바삭한 시식(Sisig) 철판구이 달걀 올려서 하나, 밥 추가해 주세요!",
      vi: "Bác chủ, một phần thịt heo xào giòn Sisig trên chảo gang có trứng, thêm cơm trắng!",
      th: "บอส ซิซิกหมูกรอบกระทะร้อนใส่ไข่หนึ่งที่ และขอข้าวสวยเพิ่มด้วยครับ!",
      ms: "Bos, satu hidangan Sisig daging rangup bertelur, tambah nasi putih!",
      fil: "Boss, isang order ng Crispy Sisig na may itlog at dagdag na kanin!"
    },
    breakdown: {
      en: "Crispy Sisig (Sizzling minced pork jowl with calamansi and chili) · may itlog (Topped with raw egg cooked by sizzling plate) · dagdag na kanin (Extra garlic or steamed rice)",
      "zh-TW": "Crispy Sisig（菲律賓國民鐵板脆皮豬頭肉碎）· may itlog（打入生雞蛋藉由鐵板熱度拌熟）· dagdag na kanin（加一碗白飯/大蒜飯）",
      ja: "Crispy Sisig（豚肉とレバーの鉄板炒め、カラマンシー仕立て）· may itlog（生卵トッピング）· dagdag na kanin（ライス追加）",
      ko: "Crispy Sisig (철판에 지글지글 볶은 바삭한 돼지고기 요리) · may itlog (계란 토핑) · dagdag na kanin (밥 추가)",
      vi: "Crispy Sisig (Thịt heo băm giòn xào đĩa gang) · may itlog (Đập trứng gà) · dagdag na kanin (Thêm cơm)",
      th: "Crispy Sisig (หมูกรอบสับผัดกระทะร้อนสไตล์ฟิลิปปินส์) · may itlog (ใส่ไข่ดิบคลุกกระทะ) · dagdag na kanin (เพิ่มข้าว)",
      ms: "Crispy Sisig (Daging babi cincang kuali panas) · may itlog (Telur mata) · dagdag na kanin (Tambah nasi)",
      fil: "Crispy Sisig (Sizzling pork mask) · may itlog (May kasamang itlog) · dagdag na kanin (Extra rice)"
    }
  },

  // --- Vietnam Night Markets & Recipes ---
  "Cho tôi một tô phở bò tái nạm nhiều hành không lấy giá!": {
    meaning: {
      en: "Please give me a bowl of beef Pho with rare beef and flank, lots of scallions, no bean sprouts!",
      "zh-TW": "請給我一碗生牛肉拼牛腩牛肉河粉，蔥花多一點、不要豆芽菜！",
      ja: "半生牛肉と牛バラ肉のフォーを一杯、ネギ多め・もやし抜きでお願いします！",
      ko: "소고기 쌀국수 한 그릇, 생고기와 양지 반반, 파 듬뿍 넣고 숙주는 빼주세요!",
      vi: "Cho tôi một tô phở bò tái nạm nhiều hành không lấy giá!",
      th: "ขอเฝอเนื้อสดผสมเนื้อน่องหนึ่งชาม ใส่ต้นหอมเยอะๆ ไม่เอาถั่วงอกครับ!",
      ms: "Bagi satu mangkuk Pho daging lembu hiris empuk, daun bawang lebih, tanpa taugeh ya!",
      fil: "Pahingi po ng isang mangkok ng beef Pho na may rare beef at brisket, maraming sibuyas, walang toge!"
    },
    breakdown: {
      en: "tô phở bò (Bowl of beef Pho) · tái nạm (Half rare beef steak slices, half tender well-done flank) · nhiều hành (Extra fresh spring onions) · không lấy giá (No bean sprouts - authentic northern style)",
      "zh-TW": "phở bò（越南牛肉河粉）· tái nạm（粉嫩生牛肉片＋軟嫩牛腩雙拼）· nhiều hành（青蔥多一點）· không lấy giá（道地北越河粉吃法：不加綠豆芽）",
      ja: "phở bò (牛肉フォー) · tái nạm (レア牛肉と煮込みバラ肉のコンビ) · nhiều hành (青ネギ増量) · không lấy giá (本場ハノイ流：もやし抜き)",
      ko: "phở bò (소고기 쌀국수) · tái nạm (살짝 익힌 얇은 고기와 푹 삶은 양지 부위) · nhiều hành (송송 썬 파 듬뿍) · không lấy giá (하노이 전통 방식: 숙주 제외)",
      vi: "phở bò (Phở bò truyền thống) · tái nạm (Thịt bò tươi mềm và thịt nạm dẻo) · nhiều hành (Hành lá tươi thơm) · không lấy giá (Ăn chuẩn vị Bắc)",
      th: "phở bò (ก๋วยเตี๋ยวเฝอเนื้อ) · tái nạm (เนื้อสดลวกพอสุกกับเนื้อน่อง) · nhiều hành (ต้นหอมซอยเยอะๆ) · không lấy giá (ไม่ใส่ถั่วงอกตามสูตรฮานอยดั้งเดิม)",
      ms: "phở bò (Mi sup daging lembu) · tái nạm (Daging segar hiris nipis dan daging empuk) · nhiều hành (Daun bawang lebih) · không lấy giá (Tanpa taugeh)",
      fil: "phở bò (Beef noodle soup) · tái nạm (Rare beef at flank) · nhiều hành (Maraming scallions) · không lấy giá (Walang toge)"
    }
  },
  "Cho tôi hai ổ bánh mì thịt nướng đầy đủ, nhiều ớt cay!": {
    meaning: {
      en: "Give me two grilled pork Banh Mi sandwiches with everything on them, extra chili!",
      "zh-TW": "請給我兩份烤肉越式法國麵包，配料全加、多加生辣椒！",
      ja: "炭火焼き豚肉のバインミーを2つ、トッピング全載せで唐辛子多めで！",
      ko: "돼지 숯불구이 반미 두 개, 모든 토핑 다 넣고 매운 고추 많이 넣어주세요!",
      vi: "Cho tôi hai ổ bánh mì thịt nướng đầy đủ, nhiều ớt cay!",
      th: "ขอบั๋นหมี่หมูย่างสองชิ้น ใส่เครื่องครบทุกอย่างและใส่พริกเผ็ดๆ ครับ!",
      ms: "Bagi dua Banh Mi daging babi bakar lengkap semua inti, cili pedas lebih ya!",
      fil: "Pabili ng dalawang inihaw na baboy na Banh Mi, kumpletong palaman, maraming sili!"
    },
    breakdown: {
      en: "hai ổ bánh mì (2 crispy French baguettes) · thịt nướng (Charcoal-grilled fragrant pork) · đầy đủ (Full works: liver pâté, pickled daikon/carrots, cilantro, mayo) · nhiều ớt cay (Extra fresh bird's eye chilies)",
      "zh-TW": "hai ổ bánh mì（兩條脆皮越式短棍麵包）· thịt nướng（炭火醃漬烤肉）· đầy đủ（全配：抹豬肝醬、醃蘿蔔絲、香菜）· nhiều ớt cay（鮮切朝天椒多放）",
      ja: "bánh mì (外サク中フワのフランスパンサンド) · thịt nướng (炭火焼きポーク) · đầy đủ (レバーペースト・なます・パクチー全部入り) · nhiều ớt (激辛生唐辛子多め)",
      ko: "bánh mì (바삭한 바게트 샌드위치) · thịt nướng (숯불에 구운 돼지고기) · đầy đủ (파테, 당근절임, 고수 등 풀토핑) · nhiều ớt (베트남 고추 팍팍)",
      vi: "hai ổ bánh mì (Hai ổ giòn rụm) · thịt nướng (Thịt nướng than hoa thơm lừng) · đầy đủ (Pate, bơ, dưa góp, rau thơm) · nhiều ớt cay (Ớt tươi thái lát)",
      th: "bánh mì (แซนด์วิชบาแก็ตกรอบ) · thịt nướng (หมูย่างหอมเตาถ่าน) · đầy đủ (ใส่ตับบด ผักดอง ผักชีครบ) · nhiều ớt (พริกขี้หนูเผ็ดแซ่บ)",
      ms: "bánh mì (Roti beguet rangup) · thịt nướng (Daging panggang) · đầy đủ (Pate, acar lobak dan herba lengkap) · nhiều ớt (Cili padi lebih)",
      fil: "bánh mì (Crispy baguette sandwich) · thịt nướng (Grilled pork) · đầy đủ (Kumpletong pate at gulay) · nhiều ớt (Maraming sili)"
    }
  }
};

// Generic pattern rules for parsing compound ordering expressions
const ORDERING_KEYWORDS: Array<{
  pattern: RegExp;
  en: string;
  "zh-TW": string;
  ja: string;
  ko: string;
  vi: string;
  th: string;
  ms: string;
  fil: string;
}> = [
  { pattern: /大包|大份|大碗|besar/i, en: "Large Portion", "zh-TW": "大份 / 大碗", ja: "大盛り・特大サイズ", ko: "큰 사이즈 / 곱빼기", vi: "Suất lớn", th: "ขนาดใหญ่", ms: "Saiz besar", fil: "Malaking parte" },
  { pattern: /小包|小份|小碗|kecil/i, en: "Small Portion", "zh-TW": "小份 / 小碗", ja: "小サイズ", ko: "작은 사이즈", vi: "Suất nhỏ", th: "ขนาดเล็ก", ms: "Saiz kecil", fil: "Maliit na parte" },
  { pattern: /要辣|加辣|大辣|cay|phet|maanghang/i, en: "Spicy (Chili added)", "zh-TW": "要辣（加辣椒粉/辣椒醬）", ja: "辛口（唐辛子あり）", ko: "매운맛 (고춧가루/칠리 추가)", vi: "Ăn cay (Thêm ớt)", th: "รสเผ็ด (ใส่พริก)", ms: "Pedas (Tambah cili)", fil: "Maanghang (May sili)" },
  { pattern: /小辣|微辣|kurang pedas|ít cay/i, en: "Mild Spicy", "zh-TW": "微辣 / 小辣", ja: "ピリ辛（控えめ）", ko: "덜 맵게 (순한 매운맛)", vi: "Cay nhẹ / Ít cay", th: "เผ็ดน้อย", ms: "Kurang pedas", fil: "Medyo maanghang lang" },
  { pattern: /不辣|不要辣|không cay|mai phet|tak pedas/i, en: "No Spicy / Not Spicy", "zh-TW": "不要辣 / 不辣", ja: "辛味抜き（辛さなし）", ko: "안 맵게 (순한맛)", vi: "Không cay", th: "ไม่เผ็ด", ms: "Tak pedas", fil: "Hindi maanghang" },
  { pattern: /加九層塔|九層塔/i, en: "Add Flash-Fried Thai Basil", "zh-TW": "加九層塔（高溫油爆香九層塔葉）", ja: "台湾バジルの素揚げ追加", ko: "튀긴 바질 잎 추가", vi: "Thêm húng quế chiên giòn", th: "ใส่ใบโหระพาทอด", ms: "Tambah daun selasih", fil: "Dagdag pritong Thai basil" },
  { pattern: /不加香菜|不要香菜|香菜抜き|고수 빼|không cho rau thơm/i, en: "No Cilantro / Coriander", "zh-TW": "不要加香菜", ja: "パクチー（香菜）抜き", ko: "고수는 빼주세요", vi: "Không cho rau thơm/ngò", th: "ไม่ใส่ผักชี", ms: "Tanpa daun ketumbar", fil: "Walang cilantro" },
  { pattern: /香菜多一點|多香菜/i, en: "Extra Fresh Cilantro", "zh-TW": "香菜多一點", ja: "パクチー増量", ko: "고수 넉넉히", vi: "Nhiều ngò gai/rau thơm", th: "ใส่ผักชีเยอะๆ", ms: "Lebih daun ketumbar", fil: "Maraming cilantro" },
  { pattern: /加一顆滷蛋|加滷蛋|ใส่ไข่|may itlog/i, en: "Add a Soy-Braised Egg", "zh-TW": "加一顆入味滷蛋", ja: "煮卵をトッピング", ko: "조림 계란 하나 추가", vi: "Thêm 1 quả trứng kho", th: "เพิ่มไข่พะโล้", ms: "Tambah telur rebus kicap", fil: "Dagdag itlog" },
  { pattern: /內用|makan sini/i, en: "For Dine-In (Eat here)", "zh-TW": "內用（在攤位後方享用）", ja: "店内・屋台席で食べる（イートイン）", ko: "여기서 먹고 갈게요 (매장 식사)", vi: "Ăn tại quán", th: "ทานที่ร้าน", ms: "Makan sini", fil: "Dine-in po" },
  { pattern: /外帶|打包|bungkus|pabalot|mang về/i, en: "Takeaway / To Go", "zh-TW": "外帶 / 打包邊走邊吃", ja: "お持ち帰り（テイクアウト）", ko: "포장해 주세요 (테이크아웃)", vi: "Cho mang về", th: "ห่อกลับบ้าน", ms: "Bungkus bawa pulang", fil: "Takeout / Pabalot po" },
  { pattern: /微冰|少冰|kurang ais|ít đá/i, en: "Light Ice (30%)", "zh-TW": "微冰（3分冰）", ja: "氷少なめ", ko: "얼음 적게", vi: "Ít đá", th: "น้ำแข็งน้อย", ms: "Kurang ais", fil: "Kaunting yelo" },
  { pattern: /無糖|不加糖|không đường/i, en: "No Added Sugar (0%)", "zh-TW": "不加額外果糖 / 無糖", ja: "砂糖追加なし", ko: "당도 0% (무설탕)", vi: "Không đường", th: "ไม่เพิ่มน้ำตาล", ms: "Tanpa gula", fil: "Walang dagdag na asukal" },
  { pattern: /蒜味|多蒜泥|bawang putih/i, en: "Extra Fresh Garlic", "zh-TW": "加蒜片 / 蒜泥多一點", ja: "生ニンニク追加", ko: "알싸한 생마늘/다진마늘 듬뿍", vi: "Nhiều tỏi tươi thơm nồng", th: "ใส่กระเทียมเยอะๆ", ms: "Lebih bawang putih", fil: "Maraming sariwang bawang" },
  { pattern: /泡菜多一點/i, en: "Extra Pickled Cabbage", "zh-TW": "酸甜台式高麗菜泡菜多一點", ja: "台湾甘酢ピクルス多め", ko: "대만식 양배추 피클 넉넉히", vi: "Nhiều bắp cải muối chua ngọt", th: "เพิ่มผักดองกะหล่ำปลี", ms: "Lebih jeruk kubis", fil: "Maraming pickled cabbage" },
  { pattern: /不要切|不切/i, en: "Do Not Cut (Preserves Juiciness)", "zh-TW": "整片不剪切（鎖住飽滿肉汁）", ja: "切らずにそのまま（ジューシーさをキープ）", ko: "자르지 말고 통째로 (육즙 보존)", vi: "Để nguyên miếng không cắt (Giữ trọn nước thịt)", th: "ไม่ต้องหั่น (เพื่อความฉ่ำของเนื้อ)", ms: "Jangan potong (Kekalkan jus daging)", fil: "Huwag hiwain (Para manatiling makatas)" }
];

// Clean phrase of quotation marks and whitespace
function cleanPhrase(p: string): string {
  return p ? p.replace(/^[“”"']+|[“”"']+$/g, '').trim() : '';
}

/**
 * Returns the localized meaning and supplementary breakdown for any ordering phrase.
 */
export function getPhraseDetails(
  rawPhrase: string,
  lang: Language,
  _country?: CountryCode
): PhraseDetails {
  if (!rawPhrase) {
    return { meaning: '' };
  }

  const cleaned = cleanPhrase(rawPhrase);

  // 1. Check exact dictionary match
  const exact = PHRASE_DICTIONARY[cleaned];
  if (exact) {
    const meaning = exact.meaning[lang] || exact.meaning.en || cleaned;
    const breakdown = exact.breakdown ? (exact.breakdown[lang] || exact.breakdown.en) : undefined;
    return { meaning, breakdown };
  }

  // 2. Check fuzzy match in dictionary
  for (const [key, item] of Object.entries(PHRASE_DICTIONARY)) {
    if (cleaned.includes(key) || key.includes(cleaned)) {
      const meaning = item.meaning[lang] || item.meaning.en || cleaned;
      const breakdown = item.breakdown ? (item.breakdown[lang] || item.breakdown.en) : undefined;
      return { meaning, breakdown };
    }
  }

  // 3. Dynamic smart breakdown using keywords
  const matchedBreakdowns: string[] = [];
  for (const kw of ORDERING_KEYWORDS) {
    if (kw.pattern.test(cleaned)) {
      const label = kw[lang] || kw.en;
      matchedBreakdowns.push(label);
    }
  }

  // If user is asking in English or another language, produce an informative explanation
  if (matchedBreakdowns.length > 0) {
    const breakdownStr = matchedBreakdowns.join(' · ');
    let meaningFallback = cleaned;
    if (lang === 'en') {
      meaningFallback = "Local ordering phrase with custom vendor instructions";
    } else if (lang === 'zh-TW') {
      meaningFallback = "在地特色點餐短語與客製指示";
    } else if (lang === 'ja') {
      meaningFallback = "現地の屋台で使える注文フレーズ";
    } else if (lang === 'ko') {
      meaningFallback = "현지 야시장 맞춤 주문 표현";
    } else if (lang === 'vi') {
      meaningFallback = "Cụm từ gọi món chuẩn vị địa phương";
    }

    return {
      meaning: meaningFallback,
      breakdown: breakdownStr
    };
  }

  // Default fallback
  const genericMeaningMap: Record<Language, string> = {
    en: "Show this card or play the audio for the street vendor",
    "zh-TW": "向攤販出示此卡片或播放發音即可點餐",
    ja: "このカードを店主に見せるか、音声を再生して注文してください",
    ko: "이 카드를 사장님께 보여주거나 음성을 들려주세요",
    vi: "Đưa thẻ này cho chủ quán hoặc bấm phát âm thanh để gọi món",
    th: "แสดงการ์ดนี้ให้พ่อค้าดู หรือกดเล่นเสียงเพื่อสั่งอาหาร",
    ms: "Tunjukkan kad ini kepada penjual atau mainkan audio untuk memesan",
    fil: "Ipakita ang card na ito sa tindero o i-play ang boses para umorder"
  };

  return {
    meaning: genericMeaningMap[lang] || genericMeaningMap.en
  };
}
