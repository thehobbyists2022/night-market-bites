export interface PhraseEntry {
  meaning: Record<string, string>;
  breakdown?: Record<string, string>;
}

export const TW_PHRASES: Record<string, PhraseEntry> = {
  // 1. Shilin
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

  // 2. Ningxia
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

  // 3. Raohe
  "老闆，胡椒餅兩個、肉羹湯一碗，剛出爐的趁熱吃！": {
    meaning: {
      en: "Boss, two pepper buns and one bowl of pork thick soup — freshly baked, eat while hot!",
      "zh-TW": "老闆，胡椒餅兩個、肉羹湯一碗，剛出爐的趁熱吃！",
      ja: "店主、胡椒餅（ペッパーバンズ）を2個と肉羹湯を一杯、焼きたてのうちに熱々でどうぞ！",
      ko: "사장님, 후추빵 두 개와 로우겅탕 한 그릇, 막 구워낸 거 뜨거울 때 먹을게요!",
      vi: "Bác chủ, hai cái bánh tiêu và một tô canh thịt heo, vừa ra lò ăn khi còn nóng!",
      th: "เถ้าแก่ ขนมปังพริกไทยสองชิ้นและซุปหมูเข้มข้นหนึ่งชาม เพิ่งออกจากเตาร้อนๆ เลยครับ!",
      ms: "Tauke, dua ketul roti lada hitam dan satu mangkuk sup daging, baru keluar dari ketuhar, makan panas!",
      fil: "Boss, dalawang pepper bun at isang mangkok ng pork thick soup, bagong luto pa, kainin habang mainit!"
    },
    breakdown: {
      en: "胡椒餅兩個 (2 pepper buns, charcoal-baked with pork filling) · 肉羹湯一碗 (1 bowl of silky pork thick soup) · 剛出爐 (Fresh out of the oven) · 趁熱吃 (Eat while piping hot!)",
      "zh-TW": "胡椒餅兩個（炭烤外酥內嫩豬肉胡椒餅）· 肉羹湯一碗（滑順勾芡肉羹）· 剛出爐（現烤起鍋）· 趁熱吃（最佳賞味溫度）",
      ja: "胡椒餅兩個（炭火焼きペッパーバンズ2個）· 肉羹湯一碗（とろみ豚肉スープ）· 剛出爐（焼きたて）· 趁熱吃（熱々のうちに）",
      ko: "胡椒餅兩個 (탄불에 구운 후추빵 2개) · 肉羹湯一碗 (걸쭉한 돼지 스프 한 그릇) · 剛出爐 (갓 구워낸) · 趁熱吃 (뜨거울 때 바로)",
      vi: "胡椒餅兩個 (Bánh tiêu nướng than 2 cái) · 肉羹湯一碗 (Canh thịt sánh 1 tô) · 剛出爐 (Vừa ra lò) · 趁熱吃 (Ăn khi còn nóng hổi)",
      th: "胡椒餅兩個 (ขนมปังพริกไทยเผาถ่าน 2 ชิ้น) · 肉羹湯一碗 (ซุปหมูข้น 1 ชาม) · 剛出爐 (เพิ่งออกเตา) · 趁熱吃 (กินตอนร้อนๆ)",
      ms: "胡椒餅兩個 (Roti lada arang 2 biji) · 肉羹湯一碗 (Sup daging pekat) · 剛出爐 (Baru keluar ketuhar) · 趁熱吃 (Makan masa panas)",
      fil: "胡椒餅兩個 (Dalawang pepper bun) · 肉羹湯一碗 (Pork thick soup) · 剛出爐 (Bagong luto) · 趁熱吃 (Kumain habang mainit)"
    }
  },

  // 4. Keelung Miaokou
  "老闆，一份蚵仔煎加一碗肉羹湯，內用！": {
    meaning: {
      en: "Boss, one oyster omelet and one bowl of pork thick soup, for dine-in!",
      "zh-TW": "老闆，一份蚵仔煎加一碗肉羹湯，內用！",
      ja: "店主、牡蠣オムレツ一つと肉羹湯を一杯、店内で食べます！",
      ko: "사장님, 굴전 하나에 로우겅탕 한 그릇, 여기서 먹고 갈게요!",
      vi: "Bác chủ, một đĩa trứng chiên hàu và một tô canh thịt heo, ăn tại quán!",
      th: "เถ้าแก่ หอยทอดหนึ่งจานและซุปหมูหนึ่งชาม ทานที่นี่ครับ!",
      ms: "Tauke, satu telur dadar tiram dan satu mangkuk sup daging pekat, makan sini!",
      fil: "Boss, isang oyster omelet at isang mangkok ng pork thick soup, dine-in po!"
    },
    breakdown: {
      en: "蚵仔煎 (Oyster omelet with red sauce) · 肉羹湯 (Silky starch pork thick soup) · 內用 (Dine-in)",
      "zh-TW": "蚵仔煎（鮮蚵蔬菜蛋煎）· 肉羹湯（傳統勾芡肉羹）· 內用（在攤位後方享用）",
      ja: "蚵仔煎（牡蠣オムレツ）· 肉羹湯（豚肉とろみスープ）· 內用（イートイン）",
      ko: "蚵仔煎 (굴 오믈렛) · 肉羹湯 (돼지고기 스프) · 內用 (매장 식사)",
      vi: "蚵仔煎 (Hàu chiên trứng) · 肉羹湯 (Canh thịt sánh) · 內用 (Ăn tại quán)",
      th: "蚵仔煎 (หอยทอด) · 肉羹湯 (ซุปหมูข้น) · 內用 (ทานที่ร้าน)",
      ms: "蚵仔煎 (Telur dadar tiram) · 肉羹湯 (Sup daging pekat) · 內用 (Makan sini)",
      fil: "蚵仔煎 (Oyster omelet) · 肉羹湯 (Pork thick soup) · 內用 (Dine-in)"
    }
  },

  // 5. Fengjia
  "老闆，大腸包小腸一份加辣，再來一份原味蛋餅！": {
    meaning: {
      en: "Boss, one sausage in sticky rice with chili, and an original scallion egg pancake!",
      "zh-TW": "老闆，大腸包小腸一份加辣，再來一份原味蛋餅！",
      ja: "店主、もち米ソーセージ包み（辛口）一つと、プレーンの台湾風卵クレープ（蛋餅）を一つ！",
      ko: "사장님, 대창포소창(찹쌀 핫도그) 맵게 하나랑 기본 단빙 하나 주세요!",
      vi: "Bác chủ, một phần xôi bọc xúc xích thêm cay, và một phần bánh crepe trứng truyền thống!",
      th: "เถ้าแก่ ไส้กรอกข้าวเหนียวหนึ่งชุดใส่เผ็ด และโรตีไข่ต้นตำรับอีกหนึ่งที่ครับ!",
      ms: "Tauke, satu sosej pulut pedas, dan satu lempeng telur asli ya!",
      fil: "Boss, isang sausage in sticky rice na maanghang, at isang original egg crepe!"
    },
    breakdown: {
      en: "大腸包小腸 (Taiwanese sausage wrapped in sticky rice) · 加辣 (Add spicy sauce) · 原味蛋餅 (Classic flaky egg crepe)",
      "zh-TW": "大腸包小腸（糯米腸夾炭烤香腸）· 加辣（刷特製辣醬）· 原味蛋餅（經典酥皮手工蛋餅）",
      ja: "大腸包小腸（もち米ソーセージに豚肉ソーセージを挟む）· 加辣（辛口）· 原味蛋餅（プレーン蛋餅）",
      ko: "大腸包小腸 (찹쌀 소시지 번에 구운 소시지) · 加辣 (매운맛) · 原味蛋餅 (전통 단빙)",
      vi: "大腸包小腸 (Xôi lạp xưởng kẹp xúc xích) · 加辣 (Thêm ớt) · 原味蛋餅 (Bánh crepe trứng)",
      th: "大腸包小腸 (ไส้กรอกข้าวเหนียวห่อไส้กรอก) · 加辣 (ใส่พริก) · 原味蛋餅 (โรตีไข่)",
      ms: "大腸包小腸 (Sosej pulut balut sosej) · 加辣 (Pedas) · 原味蛋餅 (Lempeng telur)",
      fil: "大腸包小腸 (Sausage in sticky rice) · 加辣 (Maanghang) · 原味蛋餅 (Egg pancake)"
    }
  },

  // 6. Yizhong
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

  // 7. Tainan Flower
  "老闆，棺材板一份、地瓜球一包，趁熱吃！": {
    meaning: {
      en: "Boss, one coffin bread and one bag of sweet potato balls, best eaten while hot!",
      "zh-TW": "老闆，棺材板一份、地瓜球一包，趁熱吃！",
      ja: "店主、棺材板（シチュー入り揚げトースト）一つとさつまいもボール一袋、熱々のうちに食べます！",
      ko: "사장님, 관재판(식빵 튀김 크림스튜) 하나랑 고구마볼 한 봉지, 따뜻할 때 바로 먹을게요!",
      vi: "Bác chủ, một bánh mì quan tài và một túi bánh khoai lang viên, ăn lúc còn nóng hổi!",
      th: "เถ้าแก่ ขนมปังโลงศพหนึ่งที่และลูกชิ้นมันเทศทอดหนึ่งถุง กินตอนร้อนๆ เลยครับ!",
      ms: "Tauke, roti keranda satu dan bebola ubi satu beg, makan masa panas!",
      fil: "Boss, isang coffin bread at isang bag ng sweet potato balls, kainin habang mainit!"
    },
    breakdown: {
      en: "棺材板 (Crispy deep-fried toast box filled with creamy chowder) · 地瓜球 (Chewy hollow sweet potato balls) · 趁熱吃 (Enjoy while hot)",
      "zh-TW": "棺材板（台南名產炸土司填入濃郁海鮮濃湯）· 地瓜球（外酥內Q現壓地瓜球）· 趁熱吃（剛出鍋酥脆不油膩）",
      ja: "棺材板（揚げパンにシチューを入れた台南名物）· 地瓜球（さつまいもボール）· 趁熱吃（熱いうちに）",
      ko: "棺材板 (바삭한 토스트에 해산물 크림소스를 채운 타이난 명물) · 地瓜球 (쫄깃한 고구마볼) · 趁熱吃 (뜨거울 때)",
      vi: "棺材板 (Bánh mì chiên giòn sốt kem hải sản) · 地瓜球 (Bánh khoai lang viên giòn) · 趁熱吃 (Ăn khi nóng)",
      th: "棺材板 (ขนมปังทอดกรอบไส้สตูว์ครีม) · 地瓜球 (ไข่นกกระทามันเทศทอด) · 趁熱吃 (ทานร้อนๆ)",
      ms: "棺材板 (Roti goreng berinti sup krim) · 地瓜球 (Bebola ubi keledek) · 趁熱吃 (Makan panas)",
      fil: "棺材板 (Crispy toast na may creamy seafood chowder) · 地瓜球 (Sweet potato balls) · 趁熱吃 (Mainit pa)"
    }
  },

  // 8. Kaohsiung Ruifeng
  "老闆，厚切雞排一份，不要切要梅子粉！": {
    meaning: {
      en: "Boss, one thick-cut chicken steak — don't cut it, and add plum powder seasoning!",
      "zh-TW": "老闆，厚切雞排一份，不要切要梅子粉！",
      ja: "店長、厚切りチキンステーキ（厚切雞排）一つ、切らずにそのまま、プラムパウダー（梅子粉）かけてください！",
      ko: "사장님, 두꺼운 닭가슴살 스테이크 하나, 자르지 말고 매실 파우더 뿌려주세요!",
      vi: "Bác chủ, một phần ức gà chiên dày, không cắt ra, rắc bột mận lên nhé!",
      th: "เถ้าแก่ ไก่ทอดหนาหนึ่งชิ้น ไม่ต้องหั่น ขอโรยผงพลัมครับ!",
      ms: "Tauke, satu bahagian ayam goreng tebal, jangan potong, tabur serbuk plum ya!",
      fil: "Boss, isang thick-cut na chicken steak, huwag hiwain, budburan ng plum powder!"
    },
    breakdown: {
      en: "厚切雞排 (Extra-thick crispy chicken steak - juicy & meaty inside) · 不要切 (Do NOT cut - keeps all the juices locked in!) · 要梅子粉 (Add plum powder - a sweet-sour Taiwanese seasoning dusted on top)",
      "zh-TW": "厚切雞排（厚實多汁的炸雞排，肉質豐厚）· 不要切（整片保留肉汁，鎖住鮮嫩口感）· 要梅子粉（台式梅子粉撒在雞排表面，酸甜畫龍點睛）",
      ja: "厚切雞排（ジューシーな厚切りフライドチキン）· 不要切（切らずに肉汁を閉じ込める）· 要梅子粉（梅子粉：甘酸っぱい台湾の梅パウダーをふりかける）",
      ko: "厚切雞排 (두툼하고 육즙 풍부한 닭 스테이크) · 不要切 (자르지 않아야 육즙 보존) · 要梅子粉 (매실 파우더 뿌리기 - 달콤새콤한 대만식 토핑)",
      vi: "厚切雞排 (Gà chiên dày, bên trong mọng nước) · 不要切 (Để nguyên miếng, giữ trọn nước thịt) · 要梅子粉 (Rắc bột mận - gia vị chua ngọt đặc trưng Đài Loan)",
      th: "厚切雞排 (ไก่ทอดหนาฉ่ำมาก) · 不要切 (ไม่หั่น เพื่อเก็บน้ำในเนื้อ) · 要梅子粉 (โรยผงพลัม - รสหวานเปรี้ยวสไตล์ไต้หวัน)",
      ms: "厚切雞排 (Ayam goreng tebal, berair di dalam) · 不要切 (Jangan potong supaya jus terkunci) · 要梅子粉 (Tabur serbuk plum manis-masam gaya Taiwan)",
      fil: "厚切雞排 (Makapal na chicken steak, malambot at makatas) · 不要切 (Huwag hiwain para manatiling makatas) · 要梅子粉 (Budburan ng plum powder - matamis-maasim na toping)"
    }
  },

  // 9. Luodong
  "老闆，當歸羊肉湯一碗加麵線，內用！": {
    meaning: {
      en: "Boss, one bowl of herbal angelica lamb soup with thin noodles, dine-in please!",
      "zh-TW": "老闆，當歸羊肉湯一碗加麵線，內用！",
      ja: "店主、当帰（トウキ）羊肉スープを一杯に素麺（麵線）追加、店内で食べます！",
      ko: "사장님, 당귀 양고기 탕 한 그릇에 소면 추가해서 여기서 먹고 갈게요!",
      vi: "Bác chủ, một tô súp thịt cừu hầm đương quy thêm mì sợi, ăn tại quán!",
      th: "เถ้าแก่ ซุปแพะตุ๋นตังกุยหนึ่งชามใส่หมี่ซั่ว ทานที่ร้านครับ!",
      ms: "Tauke, satu mangkuk sup kambing herba angelica dengan mi sua, makan sini!",
      fil: "Boss, isang mangkok ng angelica lamb soup na may noodles, dine-in po!"
    },
    breakdown: {
      en: "當歸羊肉湯 (Herbal angelica mutton broth - warming & fragrant) · 加麵線 (Add Taiwanese wheat vermicelli) · 內用 (Dine-in)",
      "zh-TW": "當歸羊肉湯（中藥當歸慢熬羊肉片清湯）· 加麵線（吸飽湯汁的手工紅麵線）· 內用（攤位坐席享用）",
      ja: "當歸羊肉湯（漢方トウキで煮込んだ羊肉スープ）· 加麵線（極細素麺追加）· 內用（イートイン）",
      ko: "當歸羊肉湯 (한약재 당귀로 끓인 양고기 보양식) · 加麵線 (소면 사리 추가) · 內用 (매장 식사)",
      vi: "當歸羊肉湯 (Canh thịt cừu hầm thuốc bắc đương quy) · 加麵線 (Thêm mì miến mềm) · 內用 (Ăn tại quán)",
      th: "當歸羊肉湯 (ซุปเนื้อแพะตุ๋นยาจีนตังกุย) · 加麵線 (เพิ่มเส้นหมี่ซั่ว) · 內用 (ทานที่ร้าน)",
      ms: "當歸羊肉湯 (Sup kambing herba cina danggui) · 加麵線 (Tambah mi sua) · 內用 (Makan sini)",
      fil: "當歸羊肉湯 (Herbal lamb soup) · 加麵線 (Dagdag vermicelli noodles) · 內用 (Dine-in)"
    }
  },

  // 10. Hualien Dongdamen
  "老闆，原住民烤山豬肉香腸兩條，加洋蔥！": {
    meaning: {
      en: "Boss, two indigenous grilled wild boar sausages with raw onions please!",
      "zh-TW": "老闆，原住民烤山豬肉香腸兩條，加洋蔥！",
      ja: "店主、先住民族風の炭火焼きイノシシ肉ソーセージを2本、生玉ねぎ添えで！",
      ko: "사장님, 원주민식 멧돼지 숯불 소시지 두 개, 양파 곁들여서 주세요!",
      vi: "Bác chủ, hai cây xúc xích heo rừng nướng kiểu bản địa, thêm hành tây sống nhé!",
      th: "เถ้าแก่ ไส้กรอกหมูป่าย่างสไตล์ชนเผ่าพื้นเมืองสองชิ้น ใส่หอมใหญ่ด้วยครับ!",
      ms: "Tauke, dua batang sosej daging babi hutan panggang orang asli, tambah bawang besar!",
      fil: "Boss, dalawang piraso ng indigenous grilled wild boar sausage, lagyan ng sibuyas!"
    },
    breakdown: {
      en: "原住民烤山豬肉香腸 (Indigenous Taiwanese mountain boar sausage) · 兩條 (Two links) · 加洋蔥 (Served with fresh pungent sweet onions)",
      "zh-TW": "原住民烤山豬肉香腸（花蓮原民馬告/木姜子醃烤山豬肉腸）· 兩條（兩支）· 加洋蔥（辛甜生洋蔥切片提味解膩）",
      ja: "原住民烤山豬肉香腸（台湾原住民秘伝のイノシシ肉ソーセージ）· 兩條（2本）· 加洋蔥（スライス玉ねぎ追加）",
      ko: "原住民烤山豬肉香腸 (대만 원주민식 산돼지 숯불 수제 소시지) · 兩條 (두 개) · 加洋蔥 (알싸한 양파 채 곁들임)",
      vi: "原住民烤山豬肉香腸 (Xúc xích heo rừng nướng than gia vị rừng Makauy) · 兩條 (Hai cây) · 加洋蔥 (Thêm hành tây sống)",
      th: "原住民烤山豬肉香腸 (ไส้กรอกหมูป่าย่างถ่านสูตรชนเผ่า) · 兩條 (สองชิ้น) · 加洋蔥 (แกล้มหอมใหญ่ซอย)",
      ms: "原住民烤山豬肉香腸 (Sosej babi hutan panggang herba makauy) · 兩條 (Dua batang) · 加洋蔥 (Tambah hirisan bawang)",
      fil: "原住民烤山豬肉香腸 (Indigenous mountain boar sausage) · 兩條 (Dalawang piraso) · 加洋蔥 (May kasamang sibuyas)"
    }
  },

  // 11. Recipe: popcorn-chicken
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

  // 12. Recipe: braised-pork-rice
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

  // 13. Recipe: boba-milk-tea
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

  // 14. Recipe: oyster-omelet
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

  // 15. Recipe: sweet-potato-balls
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

  // 16. Recipe: sausage-in-sausage
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

  // 17. Recipe: beef-noodles
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

  // 18. Recipe: mango-shaved-ice
  "老闆，大碗芒果雪花冰，加一球芒果冰淇淋": {
    meaning: {
      en: "Boss, large bowl of mango snowflake shaved ice with a scoop of mango ice cream!",
      "zh-TW": "老闆，大碗芒果雪花冰，加一球芒果冰淇淋！",
      ja: "店主、特大マンゴーふわふわ雪花氷にマンゴーアイスを一玉トッピングで！",
      ko: "사장님, 대형 망고 눈꽃빙수 하나, 망고 아이스크림 한 스쿱 올려주세요!",
      vi: "Bác chủ, một tô đá tuyết xoài lớn thêm một viên kem xoài nhé!",
      th: "เถ้าแก่ บิงซูเกล็ดหิมะมะม่วงชามใหญ่ เพิ่มไอศกรีมมะม่วงหนึ่งลูกครับ!",
      ms: "Tauke, satu mangkuk besar ais salji mangga tambah satu skop aiskrim mangga!",
      fil: "Boss, malaking bowl ng mango snowflake shaved ice, dagdagan ng isang scoop ng mango ice cream!"
    },
    breakdown: {
      en: "芒果雪花冰 (Milk snowflake shaved ice with fresh mango & condensed milk) · 加一球芒果冰淇淋 (Add 1 scoop of artisanal mango ice cream)",
      "zh-TW": "芒果雪花冰（綿密牛奶雪花冰＋現切愛文芒果＋煉乳）· 加一球芒果冰淇淋（頂部加一球香濃芒果冰淇淋）",
      ja: "芒果雪花冰（ふわふわミルク雪花氷＋新鮮マンゴー）· 加一球芒果冰淇淋（マンゴーアイス1スクープ追加）",
      ko: "芒果雪花冰 (우유 눈꽃빙수와 생망고 토핑) · 加一球芒果冰淇淋 (망고 아이스크림 한 스쿱 추가)",
      vi: "芒果雪花冰 (Đá bào tuyết sữa xoài tươi) · 加一球芒果冰淇淋 (Thêm 1 viên kem xoài)",
      th: "芒果雪花冰 (บิงซูเกล็ดหิมะรสมะม่วง) · 加一球芒果冰淇淋 (เพิ่มไอศกรีมมะม่วง 1 สกู๊ป)",
      ms: "芒果雪花冰 (Ais salji susu dengan mangga) · 加一球芒果冰淇淋 (Tambah satu skop aiskrim mangga)",
      fil: "芒果雪花冰 (Mango snowflake shaved ice) · 加一球芒果冰淇淋 (Dagdag isang scoop ng mango ice cream)"
    }
  },

  // 19. Recipe: pork-thick-soup
  "肉羹湯，烏醋加多一點": {
    meaning: {
      en: "Pork thick soup, please add extra black vinegar!",
      "zh-TW": "肉羹湯，烏醋加多一點！",
      ja: "豚肉のとろみスープ（肉羹湯）、黒酢多めでお願いします！",
      ko: "돼지고기 걸쭉한 스프 (로우겅탕), 흑초 넉넉히 넣어주세요!",
      vi: "Canh thịt heo sốt đặc Đài Loan, cho thêm nhiều giấm đen nhé!",
      th: "ซุปหมูเข้มข้นไต้หวัน ขอน้ำส้มสายชูดำเพิ่มหน่อยนะครับ!",
      ms: "Sup daging pekat Taiwan, tambah cuka hitam lebih ya!",
      fil: "Pork thick soup ng Taiwan, dagdagan ng black vinegar po!"
    },
    breakdown: {
      en: "肉羹湯 (Silky pork thick soup with starch broth) · 烏醋 (Taiwanese black vinegar - adds sourness & depth) · 加多一點 (Add more / extra portion)",
      "zh-TW": "肉羹湯（勾芡肉羹香滑湯底）· 烏醋（台式烏醋提酸解膩）· 加多一點（多加一些，讓味道更豐富）",
      ja: "肉羹湯（片栗粉でとろみをつけた豚肉スープ）· 烏醋（台湾黒酢で風味をプラス）· 加多一點（追加多めに）",
      ko: "肉羹湯 (전분으로 걸쭉하게 만든 돼지고기 스프) · 烏醋 (대만식 흑초로 산미 추가) · 加多一點 (더 많이 넣어주세요)",
      vi: "肉羹湯 (Canh thịt heo sánh mịn với tinh bột) · 烏醋 (Giấm đen Đài Loan thêm vị chua thơm) · 加多一點 (Cho thêm nhiều hơn)",
      th: "肉羹湯 (ซุปหมูเข้มข้นใส่แป้ง) · 烏醋 (น้ำส้มสายชูดำเพิ่มรสเปรี้ยว) · 加多一點 (ขอเพิ่มมากขึ้นหน่อย)",
      ms: "肉羹湯 (Sup daging pekat bertepung) · 烏醋 (Cuka hitam Taiwan untuk rasa masam) · 加多一點 (Tambah lebih banyak)",
      fil: "肉羹湯 (Malapot na sopas na baboy) · 烏醋 (Black vinegar para sa asim) · 加多一點 (Dagdag pa nang kaunti)"
    }
  },

  // 20. Recipe: scallion-pancake-roll
  "蛋餅一份，加蛋加起司": {
    meaning: {
      en: "One scallion pancake roll, double egg and add melted cheese please!",
      "zh-TW": "蛋餅一份，加蛋加起司！",
      ja: "台湾風卵クレープ（蛋餅）一つ、卵追加＆チーズトッピングで！",
      ko: "단빙 하나, 계란 추가하고 치즈도 넣어주세요!",
      vi: "Một phần bánh crepe trứng, thêm trứng và phô mai kéo sợi!",
      th: "โรตีไข่ไต้หวันหนึ่งที่ เพิ่มไข่อีกฟองและใส่ชีสด้วยครับ!",
      ms: "Satu lempeng telur Taiwan, tambah telur dan keju meleleh ya!",
      fil: "Isang egg crepe pancake, double egg at lagyan ng cheese!"
    },
    breakdown: {
      en: "蛋餅一份 (1 scallion egg pancake) · 加蛋 (Double the egg) · 加起司 (Add melted cheese slice)",
      "zh-TW": "蛋餅一份（現擀現煎脆皮蛋餅）· 加蛋（雙蛋增香）· 加起司（爆漿濃郁起司片）",
      ja: "蛋餅（台湾式モチモチ卵クレープ）· 加蛋（卵2個）· 加起司（とろけるチーズ）",
      ko: "蛋餅 (대만식 계란 전병) · 加蛋 (계란 2개) · 加起司 (고소한 치즈 추가)",
      vi: "蛋餅 (Bánh crepe trứng) · 加蛋 (Gấp đôi trứng) · 加起司 (Thêm phô mai)",
      th: "蛋餅 (โรตีไข่) · 加蛋 (เพิ่มไข่) · 加起司 (ใส่ชีส)",
      ms: "蛋餅 (Lempeng telur) · 加蛋 (Tambah telur) · 加起司 (Tambah keju)",
      fil: "蛋餅 (Egg pancake) · 加蛋 (Dagdag itlog) · 加起司 (May keso)"
    }
  },

  // 21. Recipe: coffin-bread
  "棺材板一份，趁熱吃": {
    meaning: {
      en: "One order of coffin bread, please serve hot!",
      "zh-TW": "棺材板一份，趁熱吃！",
      ja: "棺材板（シチュー揚げパン）一つ、熱々をいただきます！",
      ko: "관재판 하나, 뜨거울 때 바로 먹을게요!",
      vi: "Một bánh mì nắp quan tài sốt kem, ăn khi còn nóng hổi!",
      th: "ขนมปังโลงศพหนึ่งชุด ทานตอนร้อนๆ ครับ!",
      ms: "Satu roti keranda, nak makan panas-panas!",
      fil: "Isang coffin bread, kakainin habang mainit pa!"
    },
    breakdown: {
      en: "棺材板 (Deep-fried thick toast box filled with rich seafood/poultry chowder) · 趁熱吃 (Eat while crispy and hot)",
      "zh-TW": "棺材板（厚片吐司酥炸挖空，淋入滾燙白醬海鮮餡）· 趁熱吃（剛出鍋酥脆不油膩）",
      ja: "棺材板（台南名物シチュー入り揚げパントースト）· 趁熱吃（熱いうちが最高）",
      ko: "棺材板 (식빵을 튀겨 속을 파낸 뒤 크림스튜를 채운 타이난 요리) · 趁熱吃 (따뜻할 때)",
      vi: "棺材板 (Bánh mì chiên giòn xốt kem hải sản) · 趁熱吃 (Ăn nóng)",
      th: "棺材板 (ขนมปังทอดกรอบราดสตูว์ครีม) · 趁熱吃 (ทานตอนร้อน)",
      ms: "棺材板 (Roti goreng sos krim sup) · 趁熱吃 (Makan panas)",
      fil: "棺材板 (Fried toast filled with chowder) · 趁熱吃 (Habang mainit)"
    }
  },

  // 22. Recipe: fried-milk
  "老闆，來兩串現炸熱騰騰的炸牛奶": {
    meaning: {
      en: "Boss, two skewers of piping-hot freshly deep-fried milk please!",
      "zh-TW": "老闆，來兩串現炸熱騰騰的炸牛奶！",
      ja: "店主、揚げたて熱々のフライドミルク（ミルクカツ）を2串ください！",
      ko: "사장님, 갓 튀긴 뜨끈뜨끈한 우유 튀김 꼬치 두 개 주세요!",
      vi: "Bác chủ, cho hai xiên sữa chua/sữa tươi chiên giòn nóng hổi!",
      th: "เถ้าแก่ ขอนมสดทอดร้อนๆ เพิ่งขึ้นจากกระทะสองไม้ครับ!",
      ms: "Tauke, bagi dua cucuk susu goreng panas yang baru dimasak!",
      fil: "Boss, dalawang tuhog ng bagong pritong deep-fried milk po!"
    },
    breakdown: {
      en: "兩串 (2 skewers) · 現炸熱騰騰 (Freshly deep-fried & piping hot) · 炸牛奶 (Crispy outside, custardy milk pudding inside)",
      "zh-TW": "兩串（兩支竹籤串）· 現炸熱騰騰（剛起鍋外脆內溶）· 炸牛奶（凝固香濃煉乳牛奶膏裹漿酥炸）",
      ja: "兩串（2串）· 現炸熱騰騰（揚げたてアツアツ）· 炸牛奶（外はカリッ、中はトロトロのミルクプリン）",
      ko: "兩串 (꼬치 2개) · 現炸熱騰騰 (갓 튀겨 김이 모락모락) · 炸牛奶 (겉은 바삭 속은 부드러운 우유 푸딩 튀김)",
      vi: "兩串 (2 xiên) · 現炸熱騰騰 (Vừa mới chiên nóng hổi) · 炸牛奶 (Sữa tươi bọc bột chiên giòn thơm ngậy)",
      th: "兩串 (สองไม้) · 現炸熱騰騰 (ทอดใหม่ๆ ร้อนฉ่า) · 炸牛奶 (นมทอดกรอบนอกนุ่มในสไตล์คัสตาร์ด)",
      ms: "兩串 (Dua cucuk) · 現炸熱騰騰 (Panas baru goreng) · 炸牛奶 (Susu pekat goreng rangup berkrim)",
      fil: "兩串 (Dalawang tuhog) · 現炸熱騰騰 (Bagong prito at mainit) · 炸牛奶 (Crispy deep-fried custard milk)"
    }
  },

  // 23. Recipe: night-market-steak
  "老闆，牛排一份七分熟，醬要綜合雙醬": {
    meaning: {
      en: "Boss, one night market steak medium-well, with mixed black pepper & mushroom sauce!",
      "zh-TW": "老闆，牛排一份七分熟，醬要綜合雙醬！",
      ja: "店主、鉄板ステーキ一つミディアムウェル（7分焼き）で、黒胡椒＆マッシュルームのダブルソースで！",
      ko: "사장님, 스테이크 하나 미디엄 웰던으로 구워주시고, 소스는 후추소스랑 버섯소스 반반 섞어주세요!",
      vi: "Bác chủ, một phần bít tết chín vừa (7 phần), sốt trộn cả tiêu đen lẫn sốt nấm nhé!",
      th: "เถ้าแก่ สเต็กเนื้อหนึ่งที่ ความสุกระดับมีเดียมเวลล์ ขอซอสผสมพริกไทยดำกับเห็ดครับ!",
      ms: "Tauke, satu stik daging masak 70%, sos campur lada hitam dan cendawan!",
      fil: "Boss, isang steak medium-well, halo pong black pepper at mushroom sauce!"
    },
    breakdown: {
      en: "牛排 (Sizzling iron plate steak with fried egg & noodles) · 七分熟 (Medium-well) · 綜合雙醬 (Mix of spicy black pepper and sweet mushroom sauce)",
      "zh-TW": "牛排（夜市鐵板牛排配油麵生蛋）· 七分熟（鮮嫩不過老）· 綜合雙醬（黑胡椒醬微辣＋蘑菇醬鹹甜混合）",
      ja: "牛排（鉄板焼きステーキ）· 七分熟（ミディアムウェル）· 綜合雙醬（黒胡椒＋マッシュルームソース）",
      ko: "牛排 (지글거리는 철판 스테이크와 달걀, 면) · 七分熟 (미디엄 웰) · 綜合雙醬 (블랙페퍼 소스와 머쉬룸 소스 믹스)",
      vi: "牛排 (Bít tết đĩa gang kèm mì và trứng) · 七分熟 (Chín vừa 70%) · 綜合雙醬 (Sốt đôi: tiêu đen và sốt nấm)",
      th: "牛排 (สเต็กเนื้อกระทะร้อน) · 七分熟 (มีเดียมเวลล์) · 綜合雙醬 (ซอสพริกไทยดำผสมซอสเห็ด)",
      ms: "牛排 (Stik kuali besi) · 七分熟 (Masak 70%) · 綜合雙醬 (Sos lada hitam campur cendawan)",
      fil: "牛排 (Sizzling steak) · 七分熟 (Medium-well) · 綜合雙醬 (Kombinasyon ng black pepper at mushroom sauce)"
    }
  },

  // 24. Recipe: stinky-tofu
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

  // 25. Recipe: ba-wan
  "肉圓兩顆，要加辣、皮要炸酥一點": {
    meaning: {
      en: "Two Taiwanese meat bawan dumplings, add chili and fry the translucent skin extra crispy!",
      "zh-TW": "肉圓兩顆，要加辣、皮要炸酥一點！",
      ja: "肉圓（バーワン）を2個、辛口で皮をカリッと香ばしく揚げてください！",
      ko: "바완(대만식 고기 찹쌀만두) 두 개, 맵게 해주시고 껍질을 바삭하게 튀겨주세요!",
      vi: "Hai cái bánh Ba-wan nhân thịt, thêm ớt và chiên lớp vỏ thật giòn rụm nhé!",
      th: "บะหวันสองลูก ขอใส่พริกและทอดแป้งให้กรอบนอกนุ่มในหน่อยครับ!",
      ms: "Dua ketul Ba-wan dumpling daging, tambah cili dan goreng kulit garing sikit!",
      fil: "Dalawang pirasong Ba-wan meat dumpling, lagyan ng sili at patuyuin ang balat na crispy!"
    },
    breakdown: {
      en: "肉圓兩顆 (2 giant tapioca crystal dumplings stuffed with pork & bamboo shoots) · 要加辣 (Add hot chili sauce) · 皮要炸酥一點 (Fry the outer crust extra crunchy)",
      "zh-TW": "肉圓兩顆（彰化低溫泡油或酥皮脆肉圓）· 要加辣（淋上特調米醬與辣醬）· 皮要炸酥一點（高溫搶酥，外脆內Q）",
      ja: "肉圓（でんぷんの皮で豚肉やタケノコを包んだ台湾名物）· 要加辣（辛口タレ）· 皮要炸酥（皮をパリッと揚げる）",
      ko: "肉圓 (타피오카 전분 피에 돼지고기와 죽순을 넣은 요리) · 要加辣 (매운 소스) · 皮要炸酥一點 (껍질을 바삭하게)",
      vi: "肉圓 (Bánh thịt bọc bột năng hấp chiên) · 要加辣 (Thêm ớt cay) · 皮要炸酥一點 (Chiên vỏ giòn xốp)",
      th: "肉圓 (ลูกชิ้นแป้งมันเหนียวนุ่มไส้หมูหน่อไม้) · 要加辣 (ใส่เผ็ด) · 皮要炸酥一點 (ทอดผิวให้กรอบ)",
      ms: "肉圓 (Dumpling ubi kayu isi daging) · 要加辣 (Tambah pedas) · 皮要炸酥一點 (Goreng kulit lebih rangup)",
      fil: "肉圓 (Crystal meat dumpling) · 要加辣 (Maanghang) · 皮要炸酥一點 (Gawing crispy ang balat)"
    }
  },

  // 26. Recipe: giant-chicken-cutlet
  "老闆，大雞排一份要辣、不切！": {
    meaning: {
      en: "Boss, one giant fried chicken cutlet, spicy and uncut please!",
      "zh-TW": "老闆，大雞排一份要辣、不切！",
      ja: "店主、ジャンボフライドチキン（大鶏排）一つ、スパイシーで切らずにそのまま！",
      ko: "사장님, 대왕 지파이 하나 맵게 해주시고 자르지 마세요!",
      vi: "Bác chủ, một miếng gà rán khổng lồ thêm ớt cay, không cắt nhỏ nhé!",
      th: "เถ้าแก่ ไก่ทอดชิ้นยักษ์หนึ่งชิ้น ขอเผ็ดๆ และไม่ต้องหั่นครับ!",
      ms: "Tauke, ayam goreng gergasi satu keping, nak pedas dan jangan potong!",
      fil: "Boss, isang giant chicken cutlet, maanghang at huwag hiwain!"
    },
    breakdown: {
      en: "大雞排 (Giant deep-fried chicken cutlet) · 要辣 (Dust with chili powder) · 不切 (Leave whole to keep juicy)",
      "zh-TW": "大雞排（酥脆多汁特大雞排）· 要辣（均勻撒上特調辣椒粉）· 不切（整塊大口咬鎖住飽滿肉汁）",
      ja: "大雞排（特大台湾チキン）· 要辣（唐辛子パウダー）· 不切（切らずにジューシーさをキープ）",
      ko: "大雞排 (대왕 지파이) · 要辣 (고춧가루 팍팍) · 不切 (자르지 않고 통째로 베어먹기)",
      vi: "大雞排 (Gà rán đại bản) · 要辣 (Rắc bột ớt) · 不切 (Không cắt để giữ nước thịt ngọt thơm)",
      th: "大雞排 (ไก่ทอดชิ้นยักษ์) · 要辣 (โรยพริก) · 不切 (ไม่หั่น คงความฉ่ำ)",
      ms: "大雞排 (Ayam goreng besar) · 要辣 (Mahu pedas) · 不切 (Jangan potong supaya basah berjus)",
      fil: "大雞排 (Giant fried chicken) · 要辣 (Maanghang) · 不切 (Huwag hiwain para makatas)"
    }
  },

  // 27. Recipe: tian-bu-la
  "老闆，甜不辣一碗，要小辣，等一下要加湯": {
    meaning: {
      en: "Boss, one bowl of Taiwanese Tian Bu La (fish cakes), mild spicy, and I'll add soup later!",
      "zh-TW": "老闆，甜不辣一碗，要小辣，等一下要加湯！",
      ja: "店主、台湾風おでん（甜不辣）一杯、ピリ辛で！後でダシスープ足してください！",
      ko: "사장님, 톈부라(대만식 어묵탕) 한 그릇 덜 맵게 해주시고, 나중에 육수 더 부어주세요!",
      vi: "Bác chủ, một tô chả cá Tian Bu La cay nhẹ, lát nữa cho tôi thêm nước súp nhé!",
      th: "เถ้าแก่ โอเด้งไต้หวันเทียนปู้ล่าหนึ่งชาม เผ็ดน้อย เดี๋ยวทานเสร็จขอเติมน้ำซุปนะครับ!",
      ms: "Tauke, satu mangkuk kek ikan Tian Bu La, kurang pedas, nanti nak tambah sup ya!",
      fil: "Boss, isang mangkok ng Tian Bu La fish cakes, kaunting anghang, at hihingi ng sabaw mamaya!"
    },
    breakdown: {
      en: "甜不辣 (Taiwanese tempura fish cakes & radish in sweet-savory brown miso sauce) · 要小辣 (Mild spicy) · 等一下要加湯 (Night market tradition: drink hot radish broth mixed with leftover sauce)",
      "zh-TW": "甜不辣（煮甜不辣、油豆腐、白蘿蔔、豬血糕淋鹹甜味噌甜辣醬）· 要小辣（微辣提鮮）· 等一下要加湯（吃完乾料後將熱大骨蘿蔔清湯倒入碗中拌殘醬喝，老饕靈魂吃法）",
      ja: "甜不辣（台湾式おでん・練り物）· 要小辣（ピリ辛）· 等一下要加湯（具を食べた後、残ったタレに熱いスープを注いで飲むのが本場の流儀）",
      ko: "甜不辣 (어묵, 무, 유부 등을 달콤짭조름한 소스에 비벼먹는 요리) · 要小辣 (약간 매콤) · 等一下要加湯 (다 먹고 남은 소스에 육수를 부어 마시는 대만 전통 방식)",
      vi: "甜不辣 (Chả cá kiểu Đài kèm củ cải và sốt ngọt béo) · 要小辣 (Cay nhẹ) · 等一下要加湯 (Ăn hết cái thì chan nước dùng hầm củ cải vào trộn sốt húp)",
      th: "甜不辣 (ลูกชิ้นปลาโอเด้งไต้หวัน) · 要小辣 (เผ็ดน้อย) · 等一下要加湯 (ธรรมเนียมกินเสร็จแล้วขอน้ำซุปหัวไชเท้ามาผสมน้ำจิ้มดื่ม)",
      ms: "甜不辣 (Kek ikan oden gaya Taiwan) · 要小辣 (Kurang pedas) · 等一下要加湯 (Amalan tradisi: tambah sup panas campur baki sos)",
      fil: "甜不辣 (Taiwanese fish cakes) · 要小辣 (Medyo maanghang) · 等一下要加湯 (Tradisyon: sabawan ang natirang sauce sa bowl)"
    }
  },

  // 28. Recipe: candied-fruit
  "老闆，番茄蜜餞糖葫蘆來兩支，要脆皮冰過的": {
    meaning: {
      en: "Boss, two sticks of cherry tomato & preserved plum candied skewers, extra chilled & crunchy please!",
      "zh-TW": "老闆，番茄蜜餞糖葫蘆來兩支，要脆皮冰過的！",
      ja: "店主、ミニトマトと干し梅のフルーツ飴（糖葫芦）を2本、冷やしてカリカリのやつで！",
      ko: "사장님, 방울토마토 자두절임 탕후루 두 꼬치, 시원하고 설탕 코팅 바삭한 걸로 주세요!",
      vi: "Bác chủ, cho hai xiên kẹo hồ lô cà chua kẹp mứt mận, lấy loại ướp lạnh vỏ đường giòn tan!",
      th: "เถ้าแก่ ถังหูลู่มะเขือเทศสอดไส้บ๊วยสองไม้ ขอแบบแช่เย็นเคลือบน้ำตาลกรอบๆ ครับ!",
      ms: "Tauke, tanghulu tomato ceri isi asam plum dua cucuk, nak yang sejuk kulit rangup!",
      fil: "Boss, dalawang tuhog ng candied cherry tomato na may preserved plum, malamig at crispy!"
    },
    breakdown: {
      en: "番茄蜜餞糖葫蘆 (Juicy cherry tomatoes stuffed with dark Taiwanese dried plums, glazed with glassy sugar) · 兩支 (Two skewers) · 要脆皮冰過的 (Chilled until sugar shell is glass-like and snaps)",
      "zh-TW": "番茄蜜餞糖葫蘆（小番茄夾化應子黑蜜餞，酸甘甜雙重滋味）· 兩支（兩串）· 要脆皮冰過的（冷藏薄脆糖衣，咬下喀滋作響）",
      ja: "番茄蜜餞糖葫蘆（プチトマトに干し梅を挟んだ台湾伝統フルーツ飴）· 兩支（2本）· 要脆皮冰過的（冷やして飴がパリパリ）",
      ko: "番茄蜜餞糖葫蘆 (방울토마토 사이에 말린 자두를 끼운 대만식 탕후루) · 兩支 (두 개) · 要脆皮冰過的 (차갑게 얼려 설탕 코팅이 파삭거림)",
      vi: "番茄蜜餞糖葫蘆 (Kẹo hồ lô cà chua bi kẹp mứt mận chua ngọt) · 兩支 (Hai xiên) · 要脆皮冰過的 (Vỏ đường lạnh giòn kêu rôm rốp)",
      th: "番茄蜜餞糖葫蘆 (มะเขือเทศสอดไส้บ๊วยเคลือบน้ำตาลกรอบ) · 兩支 (สองไม้) · 要脆皮冰過的 (แช่เย็นให้กรอบกร๊อบ)",
      ms: "番茄蜜餞糖葫蘆 (Tanghulu tomato kepingan asam manis) · 兩支 (Dua cucuk) · 要脆皮冰過的 (Disejukkan supaya kerak gula berderap)",
      fil: "番茄蜜餞糖葫蘆 (Candied tomato na may preserved plum) · 兩支 (Dalawang tuhog) · 要脆皮冰過的 (Pinalamig para malutong ang asukal)"
    }
  },

  // 29. Recipe: aiyu-frog-eggs
  "老闆，檸檬愛玉青蛙下蛋一杯，半糖少冰": {
    meaning: {
      en: "Boss, one cup of lemon Aiyu jelly with chewy frog egg tapioca, half sugar, less ice!",
      "zh-TW": "老闆，檸檬愛玉青蛙下蛋一杯，半糖少冰！",
      ja: "店主、レモン愛玉ゼリー青蛙下蛋（大粒タピオカ入り）一杯、甘さ控えめ（半糖）・氷少なめで！",
      ko: "사장님, 레몬 아이위 젤리 개구리알(타피오카 버블) 한 잔, 당도 50%에 얼음 적게 해주세요!",
      vi: "Bác chủ, một ly thạch ái ngọc chanh trứng ếch (trân châu bột báng), 50% đường, ít đá!",
      th: "เถ้าแก่ วุ้นอ้ายยวี่รสมะนาวใส่ไข่กบ (ไข่มุกเม็ดใหญ่) หนึ่งแก้ว หวาน 50% น้ำแข็งน้อยครับ!",
      ms: "Tauke, satu cawan jeli aiyu lemon dengan boba telur katak, separuh gula, kurang ais!",
      fil: "Boss, isang baso ng lemon Aiyu jelly with chewy frog egg tapioca, half sugar, less ice!"
    },
    breakdown: {
      en: "檸檬愛玉 (Natural wild fig jelly in freshly squeezed lemon juice) · 青蛙下蛋 (Chewy translucent tapioca pearls resembling frog eggs) · 半糖少冰 (50% sweetness, 30% ice)",
      "zh-TW": "檸檬愛玉（台灣野生天然搓洗愛文檸檬凍）· 青蛙下蛋（中央黑、周圍透亮的特大粉圓）· 半糖少冰（黃金比例酸甜適中）",
      ja: "檸檬愛玉（手もみ天然アイギョクシゼリーとレモン）· 青蛙下蛋（カエルの卵に見立てた大粒タピオカ）· 半糖少冰（甘さ半分・氷少なめ）",
      ko: "檸檬愛玉 (천연 애옥 젤리와 생레몬즙) · 青蛙下蛋 (개구리알처럼 투명한 대형 타피오카 펄) · 半糖少冰 (반당・얼음 적게)",
      vi: "檸檬愛玉 (Thạch hạt ái ngọc vắt chanh tươi thanh mát) · 青蛙下蛋 (Trân châu dai trong veo) · 半糖少冰 (Nửa đường, ít đá)",
      th: "檸檬愛玉 (วุ้นธรรมชาติรสเปรี้ยวมะนาวสด) · 青蛙下蛋 (ไข่มุกใสหนึบหนับ) · 半糖少冰 (หวานครึ่งหนึ่ง น้ำแข็งน้อย)",
      ms: "檸檬愛玉 (Jeli aiyu semula jadi dan jus lemon) · 青蛙下蛋 (Boba mutiara jernih kenyal) · 半糖少冰 (Gula separuh, kurang ais)",
      fil: "檸檬愛玉 (Natural wild fig jelly with fresh lemon) · 青蛙下蛋 (Malalaking tapioca pearls) · 半糖少冰 (Kalahating asukal, kaunting yelo)"
    }
  },

  // 30. Recipe: oyster-vermicelli
  "大腸蚵仔麵線一碗，大碗、多蒜泥、多烏醋香菜": {
    meaning: {
      en: "One large bowl of braised intestine & oyster vermicelli, extra minced garlic, black vinegar, and cilantro!",
      "zh-TW": "大腸蚵仔麵線一碗，大碗、多蒜泥、多烏醋香菜！",
      ja: "豚ホルモンと牡蠣の素麺（麵線）大盛一杯、にんにく・黒酢・パクチー全部多めで！",
      ko: "곱창 굴 미엔센(국수) 큰 그릇 하나, 다진 마늘 듬뿍, 흑초랑 고수 팍팍 넣어주세요!",
      vi: "Một tô mì sợi lớn lòng heo và hàu, cho nhiều tỏi băm, giấm đen và rau mùi nhé!",
      th: "หมี่ซั่วหอยนางรมใส่ไส้หมูพะโล้ชามใหญ่ ขอใส่กระเทียมสับ น้ำส้มสายชูดำ และผักชีเยอะๆ ครับ!",
      ms: "Satu mangkuk besar mi sua tiram dan usus babi, lebih bawang putih, cuka hitam dan daun ketumbar!",
      fil: "Isang malaking mangkok ng intestine & oyster vermicelli, dagdagan ng bawang, black vinegar, at wansoy!"
    },
    breakdown: {
      en: "大腸蚵仔麵線 (Red wheat noodles in bonito broth with stewed pork intestine & fresh oysters) · 大碗 (Large bowl) · 多蒜泥 (Extra minced garlic) · 多烏醋香菜 (Extra Taiwanese black vinegar and fresh cilantro)",
      "zh-TW": "大腸蚵仔麵線（柴魚高湯紅麵線，雙拼滷大腸與東石鮮蚵）· 大碗（份量升級）· 多蒜泥（辛香提味）· 多烏醋香菜（酸香解膩黃金搭配）",
      ja: "大腸蚵仔麵線（カツオだし極細麺＋煮込みモツ＆新鮮牡蠣）· 大碗（大盛り）· 多蒜泥（ニンニク増量）· 多烏醋香菜（黒酢とパクチー多め）",
      ko: "大腸蚵仔麵線 (가쓰오부시 육수의 붉은 면선 국수, 쫄깃한 곱창과 싱싱한 굴) · 大碗 (곱빼기) · 多蒜泥 (다진 마늘 듬뿍) · 多烏醋香菜 (흑초와 고수 넉넉히)",
      vi: "大腸蚵仔麵線 (Mì miến nấu nước dùng cá ngừ bào, lòng heo kho và hàu sữa tươi) · 大碗 (Tô lớn) · 多蒜泥 (Nhiều tỏi tươi) · 多烏醋香菜 (Nhiều giấm đen và rau mùi)",
      th: "大腸蚵仔麵線 (หมี่ซั่วสีแดงต้มน้ำซุปปลาแห้ง ไส้พะโล้และหอยนางรม) · 大碗 (ชามใหญ่) · 多蒜泥 (กระเทียมสับเยอะๆ) · 多烏醋香菜 (น้ำส้มสายชูดำและผักชีเยอะๆ)",
      ms: "大腸蚵仔麵線 (Mi sua sup bonito bersama usus perap dan tiram) · 大碗 (Mangkuk besar) · 多蒜泥 (Bawang putih lebih) · 多烏醋香菜 (Cuka hitam dan ketumbar lebih)",
      fil: "大腸蚵仔麵線 (Bonito broth vermicelli with pork intestine & oysters) · 大碗 (Malaking mangkok) · 多蒜泥 (Maraming bawang) · 多烏醋香菜 (Maraming black vinegar at wansoy)"
    }
  },

  // 31. Recipe: tube-rice-cake
  "米糕兩筒，都要加辣醬加香菜，再配一碗肉羹湯": {
    meaning: {
      en: "Two tube rice cakes, both with sweet chili sauce and cilantro, plus one bowl of pork thick soup!",
      "zh-TW": "米糕兩筒，都要加辣醬加香菜，再配一碗肉羹湯！",
      ja: "筒仔米糕（蒸しおこわ）2本、チリソースとパクチーをかけて、豚肉のとろみスープ（肉羹湯）をセットで！",
      ko: "원통 찹쌀밥(미까오) 두 통 다 칠리소스와 고수 올려주시고, 로우겅탕 한 그릇 같이 주세요!",
      vi: "Hai ống xôi mặn hấp ống tre, chan tương ớt ngọt và rau mùi, ăn kèm một tô canh thịt heo sánh đặc!",
      th: "ข้าวเหนียวนึ่งกระบอกไม้ไผ่สองกระบอก ราดซอสพริกและผักชีทั้งคู่ พร้อมซุปหมูเข้มข้นหนึ่งชามครับ!",
      ms: "Dua tiub pulut kukus, dua-dua letak sos cili dan daun ketumbar, tambah satu mangkuk sup daging pekat!",
      fil: "Dalawang tube rice cake na may chili sauce at cilantro, saka isang mangkok ng pork thick soup!"
    },
    breakdown: {
      en: "米糕兩筒 (2 cylindrical steamed savory sticky rice cakes with braised pork & mushrooms) · 加辣醬加香菜 (Drizzle sweet-spicy red sauce and chopped cilantro) · 肉羹湯 (Silky pork starch soup)",
      "zh-TW": "米糕兩筒（清水經典鐵筒炊蒸油飯糯米糕）· 加辣醬加香菜（甜辣米醬＋現切芫荽）· 肉羹湯（甘甜滑順古早味肉羹）",
      ja: "米糕兩筒（円筒で蒸しあげた台湾もち米ご飯）· 加辣醬加香菜（甘辛タレとパクチー）· 肉羹湯（とろみ豚肉スープ）",
      ko: "米糕兩筒 (대통에 쪄낸 고기와 버섯을 얹은 찹쌀밥 2통) · 加辣醬加香菜 (특제 칠리소스와 고수) · 肉羹湯 (걸쭉한 고기 스프)",
      vi: "米糕兩筒 (Xôi nếp hấp trong ống nhôm/tre) · 加辣醬加香菜 (Tương ớt ngọt và ngò rí) · 肉羹湯 (Canh thịt heo sệt)",
      th: "米糕兩筒 (ข้าวเหนียวหน้าหมูตุ๋นนึ่งในกระบอก) · 加辣醬加香菜 (ราดซอสพริกและผักชี) · 肉羹湯 (ซุปหมูข้น)",
      ms: "米糕兩筒 (Pulut kukus berinti daging) · 加辣醬加香菜 (Sos cili dan ketumbar) · 肉羹湯 (Sup daging pekat)",
      fil: "米糕兩筒 (Steamed savory glutinous rice) · 加辣醬加香菜 (May chili sauce at cilantro) · 肉羹湯 (Pork thick soup)"
    }
  },

  // 32. Recipe: dry-rice-noodles
  "米苔目乾的一碗，加一顆滷蛋、柴魚多一點": {
    meaning: {
      en: "One bowl of dry rice noodles, add a braised egg, and lots of bonito flakes!",
      "zh-TW": "米苔目乾的一碗，加一顆滷蛋、柴魚多一點！",
      ja: "汁なし米苔目（短め米粉うどん）一杯に煮卵追加、カツオ節たっぷりで！",
      ko: "국물 없는 비빔 미타이무(쌀우동) 한 그릇, 조림 계란 추가하고 가쓰오부시 듬뿍 뿌려주세요!",
      vi: "Một tô bánh lọt gạo khô trộn thịt băm, thêm một quả trứng kho và thật nhiều cá ngừ bào!",
      th: "เส้นลอดช่องข้าวเจ้าแบบแห้งหนึ่งชาม ใส่ไข่พะโล้หนึ่งฟอง และโรยปลาแห้งเยอะๆ ครับ!",
      ms: "Satu mangkuk mi beras pendek kering, tambah satu telur rebus dan kepingan bonito lebih!",
      fil: "Isang bowl ng dry rice noodles, dagdag isang braised egg, at maraming bonito flakes!"
    },
    breakdown: {
      en: "米苔目乾的 (Tossed thick chewy rice noodles with fried shallot pork lard) · 加一顆滷蛋 (Add 1 soy-braised egg) · 柴魚多一點 (Generous bonito fish flakes dancing on top)",
      "zh-TW": "米苔目乾的（台東經典純米磨漿粗短米麵，拌肉燥與油蔥酥）· 加一顆滷蛋（老滷入味滷蛋）· 柴魚多一點（現刨柴魚片遇熱翻舞）",
      ja: "米苔目乾的（汁なし米粉うどん、豚そぼろ和え）· 加一顆滷蛋（煮卵）· 柴魚多一點（鰹節たっぷり）",
      ko: "米苔目乾的 (돼지고기 소스와 샬롯 기름에 비빈 쫄깃한 쌀우동) · 加一顆滷蛋 (조림 달걀) · 柴魚多一點 (가쓰오부시 듬뿍)",
      vi: "米苔目乾的 (Bánh lọt gạo trộn thịt băm mỡ hành) · 加一顆滷蛋 (Một quả trứng kho) · 柴魚多一點 (Nhiều cá bào katsuobushi)",
      th: "米苔目乾的 (เส้นหมี่สั้นอวบคลุกน้ำมันเจียวหมูสับแบบแห้ง) · 加一顆滷蛋 (ใส่ไข่ต้มพะโล้) · 柴魚多一點 (โรยปลาคัตสึโอะแห้งเยอะๆ)",
      ms: "米苔目乾的 (Mi pendek beras kering gaul daging cincang) · 加一顆滷蛋 (Telur kicap) · 柴魚多一點 (Kepingan bonito lebih)",
      fil: "米苔目乾的 (Dry thick rice noodles tossed in pork sauce) · 加一顆滷蛋 (Braised egg) · 柴魚多一點 (Maraming bonito flakes)"
    }
  },

  // 33. Recipe: pot-burn-noodles
  "鍋燒意麵一碗，蛋要半熟，加一份炸蝦": {
    meaning: {
      en: "One pot-burned egg noodles, soft-boiled egg, and add an extra fried tempura shrimp!",
      "zh-TW": "鍋燒意麵一碗，蛋要半熟，加一份炸蝦！",
      ja: "鍋焼き意麺（揚げ卵麺）一杯、卵は半熟、揚げエビ天ぷらトッピングで！",
      ko: "냄비 이면(튀긴 계란국수) 한 그릇, 계란은 반숙으로 해주시고 새우튀김 하나 추가요!",
      vi: "Một thố mì trứng chiên nấu nước dùng bonito, trứng lòng đào và thêm tôm chiên giòn!",
      th: "หมี่อีหมี่หม้อไฟไต้หวันหนึ่งชาม ขอไข่ลวกยางมะตูม และเพิ่มกุ้งชุบแป้งทอดหนึ่งตัวครับ!",
      ms: "Satu mangkuk mi telur goreng periuk panas, telur separuh masak, tambah udang celup tepung!",
      fil: "Isang pot-cooked egg noodles, malasado ang itlog, at dagdagan ng fried tempura shrimp!"
    },
    breakdown: {
      en: "鍋燒意麵 (Fried porous egg noodles simmered in rich dashi seafood broth) · 蛋要半熟 (Silky soft-boiled runny egg) · 加一份炸蝦 (Add a crunchy fried tempura shrimp)",
      "zh-TW": "鍋燒意麵（台南府城油炸蓬鬆意麵吸飽柴魚大骨鮮高湯）· 蛋要半熟（半熟蛋黃流心濃郁）· 加一份炸蝦（經典古早味酥炸小河蝦天婦羅）",
      ja: "鍋燒意麵（揚げた卵麺を鰹ダシで煮込む台南名物）· 蛋要半熟（とろとろ半熟卵）· 加一份炸蝦（エビ天ぷら追加）",
      ko: "鍋燒意麵 (바삭하게 튀겨 구멍이 송송 뚫린 에그누들을 가쓰오 육수에 끓인 요리) · 蛋要半熟 (반숙 계란 노른자 톡) · 加一份炸蝦 (새우 튀김 추가)",
      vi: "鍋燒意麵 (Mì trứng chiên xốp nấu trong niêu đất) · 蛋要半熟 (Trứng lòng đào tan chảy) · 加一份炸蝦 (Thêm tôm tẩm bột chiên)",
      th: "鍋燒意麵 (หมี่ไข่ทอดกรอบต้มในน้ำซุปปลาแห้ง) · 蛋要半熟 (ไข่ลวกกึ่งสุก) · 加一份炸蝦 (เพิ่มกุ้งทอดกรอบ)",
      ms: "鍋燒意麵 (Mi telur goreng sup dashi periuk kecil) · 蛋要半熟 (Telur goyang separuh masak) · 加一份炸蝦 (Tambah udang goreng tepung)",
      fil: "鍋燒意麵 (Egg noodles in dashi pot) · 蛋要半熟 (Malasadong itlog) · 加一份炸蝦 (Dagdag fried tempura shrimp)"
    }
  },

  // 34. Recipe: hot-pot-luwei
  "老闆，籃子夾好了，要加一包王子麵、小辣、酸菜多一點": {
    meaning: {
      en: "Boss, here is my basket, please add Prince Instant Noodles, mild spicy, with extra pickled mustard greens!",
      "zh-TW": "老闆，籃子夾好了，要加一包王子麵、小辣、酸菜多一點！",
      ja: "店主、カゴに入れました！プリンスラーメン（王子麺）を一袋追加、ピリ辛で高菜漬け多めで！",
      ko: "사장님, 바구니 담았습니다! 왕자면(대만 라면사리) 한 봉지 추가하고 덜 맵게, 쏸차이(갓절임) 많이 넣어주세요!",
      vi: "Bác chủ, giỏ của tôi đây rồi, thêm một gói mì Hoàng Tử, cay nhẹ và cho nhiều dưa cải chua nhé!",
      th: "เถ้าแก่ เลือกของในตะกร้าเสร็จแล้วครับ เพิ่มบะหมี่สำเร็จรูปเจ้าชายหนึ่งซอง เผ็ดน้อย และขอผักกาดดองเยอะๆ ครับ!",
      ms: "Tauke, ini bakul pilihan saya, tambah satu pek mi Prince, kurang pedas, sayur masin lebih ya!",
      fil: "Boss, tapos na po ang basket, pakidagdagan ng isang Prince instant noodles, medyo maanghang, at maraming pickled greens!"
    },
    breakdown: {
      en: "籃子夾好了 (Basket ready with selected skewers & veggies) · 王子麵 (Taiwan's iconic Prince brand instant noodles boiled in master broth) · 小辣 (Mild spicy) · 酸菜多一點 (Extra stir-fried pickled mustard greens)",
      "zh-TW": "籃子夾好了（自選食材放紅塑膠籃）· 王子麵（必點老滷汁煮黃金泡麵）· 小辣（特調中藥辣椒醬）· 酸菜多一點（甜脆解膩炒酸菜增量）",
      ja: "籃子夾好了（トングで選んだ具材のカゴ）· 王子麵（台湾定番のインスタント麺）· 小辣（ピリ辛）· 酸菜多一點（高菜漬け増量）",
      ko: "籃子夾好了 (원하는 꼬치와 채소를 담은 바구니) · 王子麵 (한방 육수에 삶아먹는 대만 대표 라면사리) · 小辣 (살짝 매콤) · 酸菜多一點 (갓절임 듬뿍)",
      vi: "籃子夾好了 (Rổ đồ ăn tự chọn các món luộc kho) · 王子麵 (Mì gói Hoàng Tử chần nước súp thảo mộc) · 小辣 (Cay nhẹ) · 酸菜多一點 (Nhiều dưa chua xào)",
      th: "籃子夾好了 (ตะกร้าที่คีบของเสียบไม้เรียบร้อย) · 王子麵 (บะหมี่กึ่งสำเร็จรูปแบรนด์เจ้าชายยอดฮิต) · 小辣 (เผ็ดน้อย) · 酸菜多一點 (ใส่ผักกาดดองเยอะๆ)",
      ms: "籃子夾好了 (Bakul pilihan sate luwei) · 王子麵 (Mi segera Prince rebus sup herba) · 小辣 (Kurang pedas) · 酸菜多一點 (Sayur jeruk masin lebih)",
      fil: "籃子夾好了 (Handa na ang napiling skewers sa basket) · 王子麵 (Prince brand instant noodles) · 小辣 (Medyo maanghang) · 酸菜多一點 (Maraming pickled mustard greens)"
    }
  },

  // 35. Recipe: hot-grass-jelly
  "老闆，燒仙草熱的一碗，要芋圓、紅豆、珍珠，花生多給一包": {
    meaning: {
      en: "Boss, one bowl of hot grass jelly with taro balls, red beans, boba pearls, and an extra bag of crunchy roasted peanuts!",
      "zh-TW": "老闆，燒仙草熱的一碗，要芋圓、紅豆、珍珠，花生多給一包！",
      ja: "店主、温かい仙草ゼリー（焼仙草）を一杯、タロ芋団子・あずき・タピオカ入り、炒りピーナッツを一袋多めで！",
      ko: "사장님, 따뜻한 솨오셴차오(선초 젤리 수프) 한 그릇, 타로볼, 팥, 펄 넣고 볶은 땅콩 한 봉지 더 챙겨주세요!",
      vi: "Bác chủ, một tô thạch tiên thảo nóng, lấy viên khoai môn, đậu đỏ, trân châu, và cho thêm một gói đậu phộng giòn nhé!",
      th: "เถ้าแก่ เฉาก๊วยร้อนหนึ่งชาม ใส่บัวลอยเผือก ถั่วแดง ไข่มุก และขอถั่วลิสงคั่วเพิ่มอีกหนึ่งซองครับ!",
      ms: "Tauke, satu mangkuk jeli cincau panas, nak bebola keladi, kacang merah, boba, dan lebih satu pek kacang tanah goreng!",
      fil: "Boss, isang mangkok ng mainit na grass jelly na may taro balls, red beans, boba, at dagdag isang bag ng roasted peanuts!"
    },
    breakdown: {
      en: "燒仙草熱的 (Hot aromatic herbal grass jelly that thickens as it cools) · 芋圓紅豆珍珠 (Chewy taro balls, sweet red adzuki beans, tapioca pearls) · 花生多給一包 (Extra pouch of crunchy roasted peanuts added on top)",
      "zh-TW": "燒仙草熱的（客家仙草乾熬煮甘醇熱甜湯）· 芋圓紅豆珍珠（三色嚼感配料）· 花生多給一包（酥脆硬花生米撒入熱湯激發香氣）",
      ja: "燒仙草（台湾ハーブ仙草の温かいとろみデザート）· 芋圓・紅豆・珍珠（タロ芋団子・小豆・タピオカ）· 花生多給一包（別添えカリカリ香ばし落花生追加）",
      ko: "燒仙草熱的 (따뜻하게 마시며 점점 젤리로 굳어가는 선초차) · 芋圓紅豆珍珠 (타로볼, 통팥, 쫄깃한 버블) · 花生多給一包 (바삭한 볶은 땅콩 추가)",
      vi: "燒仙草熱的 (Chè sương sáo nóng thảo mộc thanh lọc) · 芋圓紅豆珍珠 (Viên dẻo khoai môn, đậu đỏ mềm ngọt, trân châu) · 花生多給一包 (Thêm gói lạc rang thơm giòn rụm)",
      th: "燒仙草熱的 (เฉาก๊วยร้อนหอมกลิ่นสมุนไพร) · 芋圓紅豆珍珠 (บัวลอยเผือกหนึบ ถั่วแดงหวาน ไข่มุก) · 花生多給一包 (เพิ่มถั่วลิสงคั่วกรอบ 1 ห่อ)",
      ms: "燒仙草熱的 (Sup cincau herba panas) · 芋圓紅豆珍珠 (Bebola keladi, kacang merah, boba) · 花生多給一包 (Tambah satu pek kacang tanah rangup)",
      fil: "燒仙草熱的 (Mainit na herbal grass jelly soup) · 芋圓紅豆珍珠 (Taro balls, red beans, boba) · 花生多給一包 (Dagdag isang balot ng toasted peanuts)"
    }
  }
};
