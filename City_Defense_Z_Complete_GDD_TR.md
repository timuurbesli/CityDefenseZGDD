# Oyun Tasarım Belgesi - City Defense Z
**Sürüm 1.0**  
**Tarih: Aralık 2024**  
**Belge Durumu: Taslak**

---

## 1. Yönetici Özeti

### 1.1 Oyun Genel Bakış

**City Defense Z**, taktiksel üs inşasını dinamik savaş mekanikleriyle birleştiren rogue-lite, dalga tabanlı bir zombi savunma strateji oyunudur. Oyuncular, yenilikçi bir kart tabanlı yerleştirme sistemi aracılığıyla savunmalarını inşa edip yükselterek giderek zorlaşan zombi dalgalarına karşı hayatta kalmalıdır.

**Ana Konsept:** Oyuncular, acımasız zombi sürülerine karşı stratejik bir üs konumunu savunur. Her gün, ızgara tabanlı bir haritaya stratejik olarak yerleştirilmesi gereken rastgele bina kartları alırlar. Eşsiz bir birleştirme mekaniği, aynı türden üç bitişik binanın otomatik olarak daha güçlü yapılara dönüşmesini sağlar, bu da yerleştirme ve zamanlama hakkında derin taktiksel kararlar yaratır.

**Ana Oynanış İlkeleri:**

- **Stratejik Bina Yerleştirme:** Mekansal bulmaca çözmeyi gerektiren ızgara yerleştirmeli kart tabanlı bina sistemi

- **Birleştirme ve Yükseltme Mekanikleri:** Üçten bire bina evrim sistemi, üstel güç artışı yaratır

- **Dinamik Savaş:** Etkileşimli güçlendirme toplama ve acil müdahale ile gerçek zamanlı zombi dalgaları

- **Meta İlerleme:** Gelecek oyunları etkileyen kalıcı üs yükseltmeleri ve NPC ilişkileri

- **Ortaya Çıkan Tehditler:** Anında oyuncu müdahalesi gerektiren dinamik zombi deliği oluşumu

### 1.2 Hedef Kitle

| **Kitle** | **Demografi** | **Anahtar Oyunlar** | **Platform** |
|--------------|------------------|---------------|--------------|
| **Birincil** | Strateji/TD meraklıları, 18-35 | Bloons TD, Plants vs. Zombies, FTL | PC (Steam) |
| **İkincil** | Birleştirme oyunu oyuncuları, 25-45 | Merge Dragons, Triple Town | Mobil |
| **Üçüncül** | Zombi temalı hayranlar, 18-40 | State of Decay, This War of Mine | Çapraz platform |

**Oyuncu Çekiciliği ve Acı Noktaları:**

- **Kule Savunma Veteranları:** Tekrarlayan oynanışın ötesinde daha derin yükseltme sistemleri ve stratejik yerleştirme zorlukları arayanlar

- **Birleştirme Oyunu Göçmenleri:** Pay-to-win sistemleri olmadan sıradan birleştirme mekaniklerinin ötesinde stratejik derinlik isteyenler

- **Rogue-lite Meraklıları:** Anlamlı kalıcı yükseltmeleri ve tekrar oynanabilirliği olan zorlu oynanışı takdir edenler

### 1.3 Platform ve Teknik Gereksinimler

| **Platform** | **Minimum Gereksinimler** | **Önerilen Gereksinimler** | **Depolama** |
|--------------|-------------------------|----------------------------|-------------|
| **PC** | Win10, i3-6100, 4GB RAM, DirectX 11 | Win11, i5-8400, 8GB RAM, GTX 1050 | 2GB / 4GB |
| **Mobil** | iOS 14/Android 8.0, 3GB RAM | iOS 15/Android 11, 4GB RAM | 1.5GB |

**Platform Stratejisi:**

- **Birincil Platform:** PC (Steam) ile tam özellik seti ve klavye/fare optimizasyonu

- **İkincil Platform:** Dokunmatik optimize edilmiş arayüz ve uyarlanmış kontrollerle Mobil (iOS/Android)

- **Gelecek Düşüncesi:** Nintendo Switch adaptasyon potansiyeli

### 1.4 Ana Özellikler ve Benzersiz Satış Noktaları

**Yenilik Noktaları:**

1. **Hibrit Birleştirme-Savunma Mekanikleri:** 3-maç birleştirme mekaniklerini dalga tabanlı kule savunmasıyla başarıyla birleştiren ilk oyun

2. **Dinamik Tehdit Sistemi:** Gerçek zamanlı zombi deliği oluşumu, savaş sırasında anında taktiksel yanıt gerektirir

3. **Yaşayan Üs Ekosistemi:** Kalıcı ilişkileri olan NPC'ler, keşif sistemleri ve anlamlı üs özelleştirmesi

4. **Bağlamsal Güçlendirme Sistemi:** Hedeflenmiş AoE dağıtımı ile stratejik tüketilebilir yönetimi

**Ana Özellikler:**

- **6 Bina Türü** ile birleştirme evrim yolları (Fabrika, Cephane, Kışla, Laboratuvar, Ev, Çiftlik)

- **5 Birbirine Bağlı Kaynak** (Kaynak, Cephane, Araştırma Puanları, Gıda, Nüfus)

- **11 Ana Yükseltme Ağacı** ile 40+ kalıcı iyileştirme

- **4 Uzman NPC** ile benzersiz yetenekler, diyaloglar ve keşif mekanikleri

- **4 Benzersiz Harita** ile ilerleyici zorluk ve anlatı bağlamı

- **Dinamik Savaş** 5 temel zombi türü + 4 patron varyantı içerir

**Rekabetçi Avantajlar:**

- Geleneksel birleştirme oyunlarından daha derin stratejik derinlik

- Karmaşık 4X strateji oyunlarından daha erişilebilir

- Kule savunma oyunlarında sıklıkla eksik olan güçlü anlatı çerçevesi

- Savaş aşamaları sırasında yenilikçi gerçek zamanlı etkileşim mekanikleri

### 1.5 Geliştirme Kapsamı

**Geliştirme Zaman Çizelgesi:**

| **Aşama** | **Süre** | **Durum** | **Ana Başarılar** |
|-----------|--------------|------------|---------------------|
| **Başlangıç Geliştirme** | Kasım 2023 - Mart 2024 | ✅ Tamamlandı | Çekirdek sistemler, Steam demo sürümü |
| **Keşif Aşaması** | Mart 2024 - Haziran 2025 | ✅ Tamamlandı | Pazar araştırması, RTS deneyleri |
| **Mevcut Aşama** | Haziran 2025 - Eylül 2025 | 🔄 Aktif | Son cilalama, içerik tamamlama |
| **Hedef Yayın** | Eylül 2025 | 📅 Planlandı | Steam lansmanı |

**Geliştirme Ekibi (7 üye):**

- **Çekirdek Geliştirme:** Ercan Karadaş (Geliştirici), Alperen Erdoğan (Geliştirici), Celalcan Ulucan (3D Sanatçı), Hasan Hüseyin Kıdeyş (3D Sanatçı), Timur Beşli (Ürün Müdürü)

- **Liderlik:** Zafer Çelik (Baş Geliştirici, yarı zamanlı), Batuhan Yurtseven (Oyun Tasarımcısı, yarı zamanlı)

**Mevcut Geliştirme Durumu:**

- **Çekirdek Sistemler:** ✅ İlk demo ile tamamlandı ve doğrulandı

- **Sanat ve Ses:** 🔄 Geri bildirimlere dayalı olarak iyileştirme aşamasında

- **İçerik Oluşturma:** 🔄 Son haritalar, düşmanlar ve denge ayarlamaları

- **UI/UX Cilası:** 🔄 Demo geri bildirim iyileştirmeleri uygulanıyor

- **Test ve QA:** 📅 Temmuz-Ağustos 2025 için planlandı

**Stratejik Avantajlar:**

- **Kanıtlanmış Çekirdek Mekanikler:** İlk demo, oyuncu ilgisini ve çekirdek oyun döngüsünü doğruladı

- **Pazar Doğrulaması:** Steam demosu gerçek oyuncu verileri ve geri bildirim sağladı

- **Odaklanmış Geliştirme:** Kurulmuş temelle 3 aylık lansman sprinti

- **Topluluk Tabanı:** Steam demosu, lansman için erken benimseyen bir topluluk oluşturdu

**Risk Azaltma:**

- Doğrulanmış kart tabanlı konsepte geri dönmek, geliştirme riskini en aza indirir

- Askerlik yükümlülükleri için ekip ayarlamaları planlandı (Ağustos-Eylül 2025)

- Geliştirme hızını korumak için ek geliştirici desteği planlandı

--- 

## 2. Oyun Konsepti

### 2.1 Çekirdek Vizyon

**City Defense Z**, birleştirme bulmaca mekaniklerini kule savunma taktik derinliği ve rogue-lite ilerleme tatmini ile birleştirerek benzersiz bir oyun deneyimi yaratır.

**Tasarım Felsefesi:**

| **Prensip** | **Uygulama** |
|---------------|-------------------|
| **"Öğrenmesi Kolay, Ustalaşması Zor"** | Basit kart yerleştirme mekanikleri, karmaşık stratejik kararlara dönüşür |
| **"Her Karar Önemlidir"** | Bina yerleştirme ve kaynak tahsisi doğrudan hayatta kalma sonuçlarını etkiler |
| **"Kalıcı Büyüme"** | Meta ilerleme, her koşunun uzun vadeli gelişime katkıda bulunmasını sağlar |
| **"Dinamik Zorluklar"** | Ortaya çıkan tehditler ve rastgele unsurlar, oynanışı taze tutar |

**Çekirdek Duygusal Deneyim:**
Oyuncular, kaynak kıtlığından kaynaklanan gerilim, başarılı birleştirmelerden gelen tatmin, stratejik keşiflerden gelen heyecan ve giderek zorlaşan dalgalardan hayatta kalırken gelişen bir üs topluluğu inşa etmenin getirdiği başarı duygusunu yaşarlar.

### 2.2 Tür ve İlhamlar

**Birincil Tür:** Strateji - Kule Savunma / Rogue-lite  
**İkincil Unsurlar:** Birleştirme Bulmaca, Üs İnşası, Kaynak Yönetimi

| **Tür Etkisi** | **Anahtar Oyunlar** | **Ödünç Alınan Unsurlar** |
|---------------------|---------------|----------------------|
| **Kule Savunma** | Plants vs. Zombies, Bloons TD 6, Kingdom Rush | Erişilebilir mekanikler, derin yükseltmeler, stratejik derinlik |
| **Birleştirme Mekanikleri** | Triple Town, Merge Dragons, 2048 | Mekansal bulmacalar, zincir reaksiyonlar, basitten karmaşığa kurallar |
| **Rogue-lite** | FTL, Risk of Rain 2, Dead Cells | Kalıcı yükseltmeler, geçici güçlendirmeler, kalıcı ilerleme |
| **Üs İnşası** | Fallout Shelter, This War of Mine, State of Decay | Yaşayan üsler, karakter kişilikleri, hayatta kalma yönetimi |

**Benzersiz Yenilik:** Bu farklı mekanikleri uyumlu bir deneyime başarıyla birleştiren ilk oyun, gerçek zamanlı savaş ile bulmaca benzeri bina yerleştirmeyi birleştirerek benzersiz bir stratejik katman oluşturur.

### 2.3 Benzersiz Satış Noktaları

| **Yenilik** | **Açıklama** | **Stratejik Etki** |
|----------------|-----------------|---------------------|
| **Hibrit Birleştirme-Savunma** | 3-maç birleştirme mekanikleri + dalga tabanlı kule savunması | Hazırlık aşamalarında mekansal bulmaca katmanı oluşturur |
| **Yaşayan Üs Ekosistemi** | Kalıcı kişiliklere ve ilişkilere sahip NPC'ler | Mekanik odaklı türde karakter odaklı anlatı |
| **Dinamik Gerçek Zamanlı Tehditler** | Savaş sırasında anında yanıt gerektiren zombi delikleri | Geleneksel kule savunma pasifliğini kırar |
| **Stratejik Güçlendirme Yönetimi** | Taktik zamanlamayla AoE hedefli tüketilebilir güçlendirmeler | Yoğun savaş anlarında kaynak yönetimi |
| **Yol Manipülasyonu** | Stratejik duvar yerleştirme ile özel savunma yolları | Oyuncular kendi kule savunma rotalarını tasarlar |
| **Meta İlerleme** | 11 yükseltme ağacı ile 40+ iyileştirme | Her koşu kalıcı ilerlemeye katkıda bulunur |

### 2.4 Oyuncu Deneyimi Hedefleri

**Deneyim Zaman Çizelgesi:**

| **Aşama** | **Süre** | **Ana Duygular** | **Oynanış Odakları** |
|-----------|--------------|------------------|-------------------|
| **Anlık** | Saniyeler | Zaman baskısı, taktiksel gerilim | Hızlı kararlar, mekansal akıl yürütme |
| **Oturum Seviyesi** | 45-90 dakika | İlerleme tatmini, ustalık | Stratejik gelişim, anlatı katılımı |
| **Uzun Vadeli** | 50+ saat | Topluluk oluşturma, tekrar oynanabilirlik | Üs özelleştirme, ustalık ifadesi |

**Duygusal Yolculuk:**

1. **Keşif** → Mekanikleri ve sistemleri öğrenme

2. **Yeterlilik** → Stratejiler geliştirme ve daha uzun süre hayatta kalma

3. **Ustalık** → Yapıları optimize etme ve zorlukların üstesinden gelme

4. **İfade** → Üssü kişiselleştirme ve yaklaşımları keşfetme

**Ana Deneyim Unsurları:**

- **Zaman Baskısı:** Gün/gece döngüsü stratejik kararlar için aciliyet yaratır

- **Taktiksel Gerilim:** Tehditlerin ve kaynak tahsisinin sürekli değerlendirilmesi

- **İlerleme Tatmini:** Her koşu anlamlı bir ilerleme sağlar

- **Anlatı Katılımı:** Hikaye odaklı hedefler net bir hayatta kalma amacı sağlar

**Erişilebilirlik ve Tasarım Hedefleri:**

- **Görsel Netlik:** Tüm sistemler ve mekanikler için net görsel dil

- **Sezgisel Kontroller:** Karmaşık stratejik kararlar için basit giriş yöntemleri

- **Esnek Zorluk:** Birden fazla zorluk seçeneği ve yardım özellikleri

- **Evrensel Çekicilik:** Kültürler arası erişilebilir temalar ve ikonografi

**Ana Tasarım Unsurları:**

**Gün/Gece Döngüsü Baskısı:**
Hazırlık (gün) ve savaş (gece) aşamaları arasında kesin ayrım, 10 saniyelik kesin uyarı süresi.

**Gün Aşaması Sınırlamaları (Gece Başladığında):**

- Asker yerleştirme değişiklikleri yok

- Kara mayını/duvar eklemeleri yok  

- Manuel asker birleştirme yok

- Kaynak toplama yok

- Savunma ayarlamaları yok

**Stratejik Zaman Dengesi Gereklidir:**

1. **Üs Yönetimi** → Bina birleştirmeleri ve kaynak toplama

2. **Savaş Alanı Hazırlığı** → Asker yerleştirme ve savunma konumlandırma  

3. **Zaman Yönetimi** → Hazırlıkları süre dolmadan tamamla

Bu, kötü zaman yönetiminin savunmaları eksik bırakacağı anlamına gelirken, verimli planlama hayatta kalma şansını en üst düzeye çıkarır.

**Anlatı Odaklı Harita İlerlemesi:**

| **Harita** | **Senaryo** | **Günler** | **Açılış İletişimi** |
|---------|-------------|----------|---------------------------|
| **1. Nevada** | Acil Tahliye | 50 | "Uçaklarımızı tamir etmemiz gerekiyor, ancak bu 50 gün sürecek." |
| **2. Kentsel** | [Belirlenecek] | 75 | [Hikaye-özel senaryo] |
| **3. Endüstriyel** | [Belirlenecek] | Belirlenecek | [Hikaye-özel senaryo] |
| **4. Laboratuvar** | Aşı | 100 | "Aşıyı bulduk, ancak üretimi 100 gün sürecek." |

**Anlatı Faydaları:**

- **Net Hedefler:** Oyuncular neden savunduklarını ve ne kadar süreyle savunmaları gerektiğini anlar

- **Duygusal Yatırım:** Hikaye bağlamı hayatta kalmayı anlamlı kılar

- **Oyuncu Ajansı:** Sonsuzca devam etme veya bir sonraki haritaya geçme seçeneği

- **Sürükleyici Teslimat:** Telsiz iletişimleri kıyamet atmosferini korur

**3 Günlük Teklifler Sistemi:**

| **Öğe** | **Detaylar** |
|-------------|-------------|
| **Sıklık** | Her 3 günde bir, otomatik olarak tetiklenir |
| **Seçim Yapısı** | 3 rastgele oluşturulmuş ödül seçeneği, 1 tanesi seçilmelidir |
| **Ödül Türleri** | Cephane, Kaynak, Gıda veya Araştırma Puanları |

**Stratejik Karar Çerçevesi:**

- **Anında Hayatta Kalma** → Mevcut koşu gücü için oyun içi para birimlerini (Cephane, Kaynak, Gıda) seçin

- **Uzun Vadeli Yatırım** → Kalıcı meta ilerleme yükseltmeleri için Araştırma Puanlarını seçin

**Tasarım Faydaları:** Düzenli anlamlı kararlar, stratejik derinlik değerlendirmesi, koşu çeşitliliği, oyuncu ajansı korunması

**NPC Sistemi ve Keşifler:**

**NPC Uzmanlıkları:**

| **Tür** | **Üs Güçlendirmesi** | **Keşif Performansı** |
|----------|---------------|---------------------------|
| **Bilim İnsanı** | +%30 araştırma puanı | Zayıf hayatta kalma, araştırma odaklı |
| **Askeri Uzman** | Gelişmiş asker savaşı | İyi hayatta kalma, orta ödüller |
| **Çiftçi** | Artırılmış çiftlik üretimi | Orta hayatta kalma, gıda odaklı |
| **Gerilla** | Orta üs güçlendirmeleri | Mükemmel hayatta kalma, yüksek ganimet şansı |

**NPC İşe Alımı ve Etkileşim:**

- **Seçim Etkinlikleri:** Belirli günlerde (örneğin, gün 5) 2 NPC seçeneği sunulur, 1 tanesi seçilir

- **Yaşayan Üs:** NPC'ler fiziksel olarak dolaşır, her biri 6 benzersiz diyalog satırına sahiptir

- **Duygusal Yatırım:** Oyuncular etkileşim yoluyla bağ kurar

**Keşif Sistemi:**

| **Tür** | **Süre** | **Risk Seviyesi** | **Kilitleme Gereksinimi** |
|----------|--------------|---------------|------------------------|
| **Küçük** | 2 gün | Yüksek hayatta kalma oranı | Başlangıçta mevcut |
| **Orta** | 4 gün | Orta hayatta kalma oranı | Araştırma Puanı kilidi |
| **Büyük** | 5 gün | Orta hayatta kalma oranı | İleri Araştırma kilidi |

**Stratejik Unsurlar:**

- **Tekli vs Grup:** Daha yüksek bireysel risk ancak çoklu ödüller vs daha güvenli tek ödül

- **Kaynak Maliyeti:** NPC başına Gıda ve Cephane

- **Kalıcı Kayıp:** NPC'ler ölebilir ve bir daha geri dönmez

- **Ödüller:** Gıda, Kaynak, Cephane, Araştırma Puanları

**Stratejik Güçlendirme Yönetim Sistemi:**
Çok katmanlı bir taktik sistem, gerçek zamanlı toplama baskısını stratejik dağıtım kararlarıyla birleştirerek savaş aşamaları sırasında sürekli taktiksel katılım yaratır:

**Güçlendirme Toplama Mekanikleri:**

- **Zaman Baskısı:** Zombiler, toplanmazsa 5 saniye içinde kaybolan güçlendirmeler düşürür

- **Hızlı Karar Verme:** Oyuncular, güçlendirme değeri ile savaş odaklanması arasında hızla değerlendirme yapmalıdır

- **Risk Değerlendirmesi:** Güçlendirmeleri toplamak, birlikleri açığa çıkarmayı veya dikkati kaydırmayı gerektirebilir

**Güçlendirme Türleri ve Süresi:**

- **Hasar Güçlendirmesi (30s):** +%50 asker hasar çıktısı

- **Ateş Hızı Güçlendirmesi (20s):** +%35 asker saldırı hızı  

- **Kalkan Güçlendirmesi (10s):** Gelen hasarın %50'sini emer

- **Kaynak Güçlendirmesi:** Sonraki 6 toplama için +%50 kaynak üretimi

**Stratejik Dağıtım Sistemi:**

- **Manuel Hedefleme:** Güçlendirme uygulama alanlarını belirlemek için tıklayın

- **AoE Yarıçapı:** Clash of Clans tarzı alan hedefleme, birden fazla askeri etkiler

- **Zamanlama Kararları:** Kritik anlar için güçlendirmeleri sakla veya hemen kullan

- **Konumlandırma Stratejisi:** Oyuncular, güçlendirme etkinliğini en üst düzeye çıkarmak için askerleri düzenler

**Çok Katmanlı Karar Çerçevesi:**
Oyuncular, kademeli stratejik seçimlerle karşı karşıya kalır:

1. **Toplama Aşaması:** "Bu güçlendirme dikkat/riske değer mi?"

2. **Depolama Yönetimi:** "Bunu şimdi mi kullanmalıyım yoksa patron dalgaları için mi saklamalıyım?"

3. **Hedefleme Aşaması:** "Bunu maksimum etki için nereye dağıtmalıyım?"

4. **Konumlandırma Stratejisi:** "Güçlendirme örtüşmesini en üst düzeye çıkarmak için askerleri gruplamalı mıyım?"

**Tasarım Faydaları:**

- **Aktif Katılım:** Pasif "bekle ve izle" kule savunma oynanışını önler

- **Kaynak Yönetimi:** Sınırlı güçlendirme depolama, envanter kararları yaratır

- **Taktiksel Derinlik:** Güçlendirme konumlandırması, savaş akışının anlaşılmasını gerektirir

- **Risk/Ödül:** Toplama zamanlaması, anlık gerilim yaratır

- **Stratejik Planlama:** Oyuncular, güçlendirme etkinliği için birlik konumlandırmasını düşünmelidir

- **Savaş Çeşitliliği:** Farklı güçlendirme türleri, çeşitli taktik yaklaşımları teşvik eder

**Dinamik Tehdit Sistemi - Zombi Delikleri:**
Geleneksel kule savunma pasifliğini kırarak, savaş sırasında anında oyuncu müdahalesi gerektiren öngörülemeyen, beceriye dayalı tehditler sunan bir ortaya çıkan zorluk sistemi:

**Zombi Deliği Mekanikleri:**

- **Rastgele Ortaya Çıkış:** Çatlaklar savaş sırasında haritanın herhangi bir yerinde öngörülemeyen bir şekilde belirir

- **Anında Tehdit:** Delikler kapatılmadığında sürekli olarak ek zombiler üretir

- **Beceriye Dayalı Çözüm:** Oyuncular, delikleri kapatmak için hızlı bir şekilde 5 kez dokunmalıdır

- **Zaman Baskısı:** Diziyi zamanında tamamlayamama ilerlemeyi sıfırlar

- **Tatmin Edici Geri Bildirim:** Başarılı kapatma, uçaklarla füze saldırısı animasyonunu tetikler

**Stratejik Etki:**

- **Dikkat Yönetimi:** Oyuncuları tüm savaş alanını aynı anda izlemeye zorlar

- **Öncelik Değerlendirmesi:** Oyuncular, deliklerle ne zaman ilgileneceklerine karşı diğer savaş unsurlarına odaklanmalıdır

- **Beceri Gelişimi:** Hızlı tıklama doğruluğu ve zamanlaması gerektirir

- **Tehdit Artışı:** Göz ardı edilen delikler zombi baskısını üstel olarak artırır

- **Harita Farkındalığı:** Oyuncular, tüm savaş alanının mekansal farkındalığını korumalıdır

**Adrenalin ve Katılım Faydaları:**

- **Aktif Katılım:** Pasif "kur ve unut" kule savunma oynanışını ortadan kaldırır

- **Sürekli Uyanıklık:** Oyuncular, tüm savaş aşaması boyunca tetikte kalmalıdır

- **Beceri İfadesi:** Hızlı tepki süreleri ve doğruluk, oynanış avantajları haline gelir

- **Acil Durum Yanıtı:** Gerçek "kriz yönetimi" anları yaratır

- **Gerilim Bakımı:** Öngörülemeyen zamanlama, oyuncuları tetikte tutar

- **Ödül Tatmini:** Başarılı delik kapatma, anında tatmin sağlar

**Diğer Sistemlerle Entegrasyon:**

- **Gün/Gece Baskısını Artırır:** Delikler, kritik son anlarda ortaya çıkabilir

- **Güçlendirme Toplama ile Çatışır:** Oyuncular, güçlendirmeleri toplamak veya delikleri kapatmak arasında seçim yapmalıdır

- **Kaynak Planlamasını Etkiler:** Acil delikler, dikkatli stratejik planlamayı bozabilir

- **Çoklu Görev Zorlukları Yaratır:** Oyuncular, aynı anda birden fazla gerçek zamanlı talebi dengelemelidir

**Atmosferik Dünya İnşası - Küresel Haber Sistemi:**
Oyuncunun anlık hayatta kalma durumunun ötesindeki daha büyük dünyayla duygusal bağlantı kurarak küresel kıyamet ortamını güçlendiren ince ama güçlü bir daldırma sistemi:

**Haber Ticker Uygulaması:**

- **Sürekli Akış:** Haber başlıkları ekranın üst kısmında yatay olarak kayar

- **Atmosferik İçerik:** Zombi kıyameti hakkında dünya genelinden raporlar

- **Sürükleyici Örnekler:** "Zombiler artık Antarktika'da da görülmeye başlandı"

- **Dikkat Dağıtmayan Tasarım:** Oynanıştan dikkat dağıtmayacak kadar ince ama atmosferi artıracak kadar görünür

**Dünya İnşası Faydaları:**

- **Küresel Kapsam:** Bu sadece yerel bir felaket değil, dünya çapında bir felaket olduğunu pekiştirir

- **Duygusal Ağırlık:** Oyuncular, insanlığın hayatta kalma mücadelesinin bir parçası gibi hisseder

- **Anlatı Bağlamı:** Açık anlatım olmadan arka plan hikayesi ve bilgi sağlar

- **Daldırma Artışı:** Gerçek dünya acil durum yayınlarını izleme hissi yaratır

- **Kıyamet Otantizmi:** İnsanların bir kriz sırasında nasıl bilgi alacaklarını taklit eder

**Psikolojik Etki:**

- **Ölçek Tanıma:** Oyuncular, üs savunmalarının küresel bir savaşın parçası olduğunu anlar

- **Acil Durum Güçlendirmesi:** Yayılma haberleri hayatta kalma risklerini artırır

- **Yalıtım Hissi:** Oyuncunun üssünün ne kadar yalnız ve kesilmiş olduğunu vurgular

- **Umut ve Umutsuzluk:** Rapor karışımı hem cesaret verici hem de vahim güncellemeler sağlayabilir

- **Yaşayan Dünya:** Oyun dünyası, oyuncunun hemen çevresinin ötesinde aktif ve gelişen bir dünya gibi hissedilir

Bu sistem, City Defense Z'yi basit bir hayatta kalma oyunundan daha büyük bir kıyamet dünyasına açılan bir pencereye dönüştürerek her başarılı savunmayı insanlığın hayatta kalmasına anlamlı bir katkı gibi hissettirir.

**Gelişmiş Kart Tabanlı Bina Sistemi:**
Bina yerleştirme sistemi, basit yapı kartlarının ötesine geçerek stratejik esneklik ve gelişmiş üs yönetimi seçenekleri sunan sofistike yardımcı kartlar içerir:

**Çekirdek Bina Kart Mekanikleri:**

- **Kart Seçimi:** Her gün üç rastgele bina kartı sunulur

- **Izgara Yerleştirme:** Kartı tıklayın, ardından mevcut ızgara karelerine yerleştirin

- **Birleştirme Gereksinimleri:** Üç bitişik bina (yatay/dikey) otomatik olarak bir sonraki seviyeye birleşir

- **Görsel Geri Bildirim:** Binalar seviye numaralarını ve birleştirme hazırlık göstergelerini gösterir

- **Renk Kodlu Sistem:** Her bina türü, anında tanınma için farklı renk kodlamasına sahiptir

  - **Fabrika:** Sarı/Yeşil kartlar ve binalar

  - **Cephane:** Gri kartlar ve binalar

  - **Kışla:** Turuncu/Kırmızı kartlar ve binalar

  - **Diğer Türler:** Her biri benzersiz renk kimliğiyle

**Stratejik Yardımcı Kartlar:**
Basit bina kartlarının ötesinde, sistem güçlü yönetim araçları içerir:

**Bina Taşıma Kartı:**

- **Amaç:** Seçilen herhangi bir binayı istenen ızgara konumuna taşıyın

- **Stratejik Değer:** Yerleştirme hatalarını düzeltin ve birleştirme konumlandırmasını optimize edin

- **Kullanım Durumu:** Birleştirme fırsatları engellendiğinde düzeni yeniden organize edin

- **Esneklik:** Farklı üs yapılandırmaları ile denemeler yapma imkanı sağlar

**Doğrudan Seviye Atlama Kartı:**

- **Amaç:** Seçilen herhangi bir binayı bir sonraki seviyeye anında yükseltin

- **Stratejik Güç:** 3-bitişik birleştirme gereksinimini atlar

- **Yüksek Seviye Verimlilik:** Özellikle seviye 4+ binaları yükseltmek için değerlidir

- **Kaynak Alternatifi:** Kart kaynağını birleştirme konumlandırma gereksinimleriyle değiştirir

**Gelişmiş Stratejik Faydalar:**

- **Hata Düzeltme:** Taşıma kartları kalıcı düzen hatalarını önler

- **Optimizasyon Araçları:** Oyuncular zamanla üs düzenlerini iyileştirebilir

- **Acil Yükseltmeler:** Doğrudan seviye atlama kartları anında güç artışları sağlar

- **Stratejik Esneklik:** Bina yükseltmelerine ulaşmak için birden fazla yol

- **Derinlik Katmanı:** İleri düzey oyuncular, yardımcı kartlarla temel birleştirme kalıplarını optimize edebilir

- **Risk Azaltma:** Erken yerleştirme kararlarının cezasını azaltır

**Kullanılabilirlik ve Erişilebilirlik Özellikleri:**

- **Anında Tanıma:** Renk kodlamı, zaman baskısı sırasında kart metnini okuma gereksinimini ortadan kaldırır

- **Bilişsel Yük Azaltma:** Görsel sistem, hızlı yerleştirme sırasında zihinsel işlemi azaltır

- **Birleştirme Planlaması:** Oyuncular, birleştirme fırsatları için aynı tür binaları hızla tanımlayabilir

- **Hata Önleme:** Belirgin renkler, bina türlerinin yanlış yerleştirilmesini önler

- **Erişilebilirlik Desteği:** Renk sistemi, farklı okuma hızlarına veya dil engellerine sahip oyunculara yardımcı olur

Bu sofistike kart sistemi, üs inşasını basit yerleştirmeden karmaşık stratejik yönetime dönüştürerek oyuncuların bina türlerini, yardımcı kartları ve konumlandırma optimizasyonunu dengeleyerek en etkili savunma düzenlerini oluşturmasını sağlar.

**Stratejik Hava Saldırısı Sistemi:**
Savaş aşamaları sırasında pasif oynanışı önlerken anlatı ilerlemesini güçlendiren ve oyunculara güçlü taktik seçenekler sunan aktif bir gece aşaması sistemi:

**Hava Saldırısı Mekanikleri:**

- **Gece Aşaması Aktivasyonu:** Hava saldırıları yalnızca savaş aşamaları sırasında kullanılabilir

- **UI Entegrasyonu:** Alt arayüz çubuğu, mevcut uçak seçeneklerini gösterir

- **Manuel Hedefleme:** Oyuncular, saldırı konumlarını ve zamanlamasını belirlemek için tıklar

- **Kaynak Maliyeti:** Hava saldırıları cephane kaynaklarını tüketir

- **Taktik Çeşitlilik:** Farklı uçaklar, farklı saldırı desenleri sağlar

**Uçak Türleri ve Saldırı Desenleri:**

- **Standart Saldırı Uçağı:** Seçilen yarıçap konumunda hedefli bombalama

- **Halı Bombacısı:** Dikey formasyon deseninde 3 bomba bırakır

- **Ek Uçaklar:** İlerleme yoluyla açılabilir (gelecek varyantlar)

**Anlatı Odaklı İlerleme:**

- **Başlangıç Kilidi:** Hava saldırısı yetenekleri oyun başlangıcında kullanılamaz

- **Hikaye Entegrasyonu:** Hava saldırıları, Harita 1 hikaye hattı tamamlandıktan sonra açılır

- **Anlatı Bağlamı:** "Uçak tamiri tamamlandı" mantıklı bir açılma nedeni sağlar

- **İlerleyici Erişim:** Farklı uçaklar, harita ilerlemesi yoluyla açılır

- **Başarı Ödülü:** Hikaye tamamlanması, anlamlı bir oynanış geliştirmesi sağlar

**Stratejik Etki:**

- **Aktif Katılım:** Gece aşaması sırasında pasif gözlemi önler

- **Taktik Kararlar:** Oyuncular, maksimum etki için zamanlama ve hedefleme seçmelidir

- **Kaynak Yönetimi:** Hava saldırısı maliyetleri, stratejik kaynak tahsisi seçimleri yaratır

- **Acil Durum Yanıtı:** Ezici zombi durumlarıyla başa çıkmak için araçlar sağlar

- **Kombinasyon Potansiyeli:** Güçlendirme sistemi ve savunma konumlandırması ile sinerji oluşturur

**Tasarım Faydaları:**

- **Hikaye-Oynanış Entegrasyonu:** Açılmalar kazanılmış ve anlatı açısından gerekçelendirilmiş hissi verir

- **Oyuncu Ajansı:** Tüm savaş aşaması boyunca aktif karar verme

- **Taktiksel Derinlik:** Birden fazla uçak türü, çeşitli stratejik yaklaşımları teşvik eder

- **İlerleme Tatmini:** Hava saldırılarının açılması, önemli bir güç artışı sağlar

- **Görsel Şölen:** Dramatik hava saldırısı efektleri, savaş heyecanını artırır

**Kapsamlı UI ve Zaman Yönetimi Sistemi:**
Oyunculara stratejik zaman yönetimi ve durumsal farkındalık sağlayarak oyun temposu üzerinde kontrol sağlayan kapsamlı bir arayüz tasarımı:

**Üst Panel Arayüz Öğeleri:**

**Zaman Kontrol Sistemi:**

- **Oyun Hızı Kontrolleri:** Duraklat, 1x, 2x ve 3x hız seçenekleri (sağ üstte)

- **Oyuncu Hızı:** Planlama sırasında hızlandırma veya hassas zamanlama için yavaşlatma imkanı sağlar

- **Stratejik Avantaj:** Güvenli dönemlerde hızlı ilerleme, kritik anlarda yavaşlama

**Gün/Gece Aşama Göstergesi:**

- **Görsel Durum:** Dinamik güneş/ay simgesi mevcut aşamayı gösterir

- **İlerleme Görselleştirme:** İkon etrafındaki dairesel ilerleme çubuğu, aşama değişimine kadar kalan zamanı gösterir

- **Hazırlık Planlaması:** Oyuncular, gün aşaması aktiviteleri için mevcut zamanı değerlendirebilir

- **Geçiş Uyarısı:** Görsel geri sayım, sürpriz aşama değişikliklerini önler

**Oturum Bilgisi:**

- **Gün Sayacı:** Mevcut günü net bir şekilde gösterir (örneğin, "Gün 3")

- **İlerleme Takibi:** Oyuncuların harita hedeflerine doğru ilerlemelerini anlamalarına yardımcı olur

- **Stratejik Bağlam:** Uzun vadeli kaynak tahsisi hakkında kararlar verir

**Manuel Aşama Kontrolü:**

- **"Günü Bitir" Butonu:** Oyuncuların gece aşamasına manuel olarak geçiş yapmasına olanak tanır

- **Zaman Optimizasyonu:** Tüm hazırlıklar tamamlandığında beklemeyi atla

- **Stratejik Seçim:** Kalan gün zamanını anında savaş katılımı için değiştir

- **Verimlilik Aracı:** Deneyimli oyuncular oturum temposunu en üst düzeye çıkarabilir

**Üs Sağlık Sistemi:**

- **Sağlık Yüzdesi:** Ana üssün bütünlüğünü belirgin bir şekilde gösterir (0-100%)

- **Kritik Bilgi:** Ana hayatta kalma metriği her zaman görünür

- **Görsel Geri Bildirim:** Yeşil ilerleme çubuğu anında durum tanıma sağlar

- **Son Durum:** %0 sağlık, oyunun hemen sona ermesine neden olur

**Arayüz Tasarım Faydaları:**

- **Bilgi Hiyerarşisi:** En kritik veriler belirgin bir şekilde gösterilir

- **Oyuncu Ajansı:** Birden fazla kontrol seçeneği farklı oyun stillerine uyum sağlar

- **Görsel Netlik:** Temiz, okunabilir tasarım bilgi aşırı yüklenmesini önler

- **Stratejik Destek:** Arayüz, taktiksel karar verme sürecini destekler

- **Erişilebilirlik:** Büyük, net öğeler yoğun anlarda hızlı tanımayı destekler

**Menü Sistemi ve Gezinme Tasarımı:**
Temiz, sezgisel menü tasarımı, netlik ve tematik tutarlılığı vurgularken temel işlevsellik sağlar:

**Ana Menü Özellikleri:**

- **Basit Gezinme:** Devam Et, Yeni Oyun, Ayarlar, Çıkış seçenekleri

- **Tema Tutarlılığı:** Askeri/kıyamet estetiği boyunca

- **Platform Entegrasyonu:** Steam istek listesi işlevselliği ve sosyal medya bağlantıları

- **Görsel Parlaklık:** Profesyonel logo tasarımı ve atmosferik arka plan

**Harita Seçim Arayüzü:**

- **"Kurtarılacak Şehri Seçin":** Harita seçimi için anlatı çerçevesi

- **Görsel İlerleme:** Mevcut (Nevada) ve kilitli haritalar arasında net ayrım

- **Coğrafi Çeşitlilik:** İstanbul, Paris, Pekin küresel kapsamı temsil eder

- **İlerleme Netliği:** Kilitli içerik için "Tam Sürümde Mevcut" mesajı

- **Tutarlı Stil:** Askeri temalı UI kenarlıkları ve tipografi

**Tasarım Felsefesi:**

- **Fonksiyonel Sadelik:** Gereksiz karmaşıklık veya kafa karıştırıcı gezinme yok

- **Net Hiyerarşi:** Önemli seçenekler belirgin bir şekilde gösterilir

- **Tematik Daldırma:** Her öğe kıyamet askeri ortamını pekiştirir

- **Kullanıcı Dostu:** Açıklama gerektirmeyen sezgisel düzen

---

## 3. Oynanış Genel Bakış

### 3.1 Çekirdek Oynanış Döngüsü

**Çift Aşamalı Sistem:**

| **Aşama** | **Süre** | **Ana Aktiviteler** | **Oyuncu Odakları** |
|-----------|--------------|-------------------|------------------|
| **Gün (Hazırlık)** | Değişken | Kaynak toplama, kart yerleştirme, asker konuşlandırma | Stratejik planlama |
| **Gece (Savaş)** | Sabit | Dalga savunması, güçlendirme toplama, zombi deliği kapatma | Taktiksel uygulama |

**Gün Aşaması Aktiviteleri:**

- **Kaynak Yönetimi:** Binalara tıklayarak kaynakları/askerleri topla

- **Kart Seçimi:** 3 bina/yardımcı karttan birini seç

- **Stratejik Yerleştirme:** Binaları optimal birleştirmeler için konumlandır

- **Askeri Konuşlandırma:** Askerleri ve savunma yapıları yerleştir

- **Zaman Baskısı:** Gece aşamasından önce 10 saniyelik geri sayım uyarısı

**Gece Aşaması Aktiviteleri:**

- **Dalga Savunması:** Yerleştirilen savunmalarla zombi saldırılarına karşı hayatta kal

- **Aktif Katılım:** Zaman sınırlı güçlendirmeleri topla (5 saniyelik zamanlayıcı)

- **Acil Durum Yanıtı:** 5 dokunuşlu mekanikle zombi deliklerini kapat

- **Taktik Araçlar:** AoE hedefleme ile güçlendirmeleri dağıt, hava saldırılarını koordine et

**İlerleme Olayları:**

- **3 Günlük Teklifler:** Her 3. günde stratejik ödül seçimleri

- **NPC Olayları:** Belirli günlerde işe alım fırsatları

- **Hikaye Teslimi:** Harita-özel anlatı telsizle

- **Keşif Yönetimi:** NPC görevlerini takip et ve planla

### 3.2 Oturum Yapısı

**Koşu İlerleme Zaman Çizelgesi:**

| **Aşama** | **Günler** | **Odak** | **Ana Unsurlar** |
|-----------|----------|-----------|------------------|
| **Erken Oyun** | 1-10 | Temel Öğrenme | Kaynak zincirleri, kart yerleştirme, NPC işe alımı |
| **Orta Oyun** | 11-30 | Optimizasyon | Verimli düzenler, gelişmiş sistemler, zorluk ölçekleme |
| **Geç Oyun** | 31+ | Ustalık | Karmaşık stratejiler, hikaye çözümü, tamamlama seçimleri |

**Koşu Mimarisi:**

**Başlangıç:**

- **Harita Seçimi:** İlerleme ile açılan haritalardan seçim yap

- **Hikaye Bilgilendirmesi:** Telsiz iletişimleri aracılığıyla hedefleri al

- **Başlangıç Kaynakları:** Belirlenmiş miktarlarda Kaynak, Cephane, Gıda, Nüfus

**İlerleme Unsurları:**

- **Temel Aşama:** Üretim zincirlerini kur ve temel mekanikleri öğren

- **Stratejik Aşama:** Verimli stratejiler geliştir ve gelişmiş sistemleri aç

- **Ustalık Aşaması:** Baskı altında karmaşık çoklu sistem yönetimini uygula

**Tamamlama:**

- **Zafer:** Belirlenen günleri (50/75/100) hayatta kal veya tamamlamayı seç

- **Yenilgi:** Üs sağlığı %0'a ulaşır

- **Ödüller:** Meta ilerleme için performansa dayalı Araştırma Puanları

### 3.3 İlerleme Genel Bakış

**Çok Katmanlı İlerleme Sistemi:**

| **İlerleme Türü** | **Kapsam** | **Ana Unsurlar** |
|---------------------|-----------|------------------|
| **Oturum Seviyesi** | Tek Koşu | Bina/asker birleşmeleri, kaynak birikimi, taktik ustalık |
| **Kampanya Seviyesi** | Birden Fazla Koşu | Araştırma Puanı yükseltmeleri, harita açılışları, sistem erişimi |
| **Anlatı** | Hikaye Arkı | Harita hikayeleri, NPC ilişkileri, dünya inşası |

**Oturum İlerlemesi (Koşu İçinde):**

- **Bina Evrimi:** Binaları daha güçlü yapılara birleştir

- **Asker İlerlemesi:** Askerleri birleştirerek elit birimler oluştur

- **Taktik Ustalık:** Güçlendirme dağıtımı ve zombi deliği yönetimini geliştir

**Kampanya İlerlemesi (Koşular Arasında):**

- **Araştırma Yatırımı:** 11 ana yükseltme ağacı ile kalıcı faydalar

- **İçerik Açılışları:** Haritalar, keşifler, hava saldırıları, yardımcı kartlar

- **NPC Koleksiyonu:** Özel yeteneklere sahip çeşitli üs topluluğu oluştur

**Anlatı İlerlemesi:**

- **Hikaye Deneyimi:** Harita-özel hikayeler ve karakter gelişimi

- **Dünya Bağlamı:** Haber sistemi ve iletişimler aracılığıyla küresel kıyamet

### 3.4 Zafer ve Yenilgi Koşulları

**Zafer Koşulları:**

| **Zafer Türü** | **Açıklama** | **Gereksinimler** |
|------------------|-----------------|------------------|
| **Harita Tamamlama** | Hikaye odaklı hedefler | Harita başına 50/75/100 gün hayatta kal |
| **Sonsuz Hayatta Kalma** | Sonsuz mod rekabeti | Hikaye hedeflerinin ötesine geç |

**Harita Tamamlama Hedefleri:**

| **Harita** | **Gerekli Günler** | **Hikaye Hedefi** |
|---------|-------------------|-------------------|
| **1. Nevada** | 50 | Uçak tamirinin tamamlanması |
| **2. Kentsel** | 75 | [Hikaye-özel] |
| **3. Endüstriyel** | [TBD] gün | [Hikaye-özel] |
| **4. Laboratuvar** | 100 | Aşı üretiminin tamamlanması |

**Oyuncu Seçimi:** Tamamlandıktan sonra sonsuz devam etme veya bir sonraki haritaya geçme seçeneği

**Yenilgi Koşulları:**

| **Yenilgi Türü** | **Tetikleyici** | **Açıklama** |
|-----------------|-------------|-----------------|
| **Üs Yıkımı** | Sağlık %0'a ulaşır | Yetersiz savunmalardan kaynaklanan kümülatif hasar |
| **Kaynak Başarısızlığı** | Kritik eksiklikler | Gıda eksikliği, ekonomik çöküş, nüfus krizi |

**Özel Sistemler:**

- **Yeniden Canlandırma Yükseltmeleri:** Pahalı araştırma yükseltmeleri ikinci şanslar sağlar

- **Araştırma Korunumu:** Tüm Araştırma Puanları meta ilerleme için koşular arasında korunur

---

## 4. Oyun Sistemleri ve Mekanikler

### 4.1 Kaynak ve Ekonomi Sistemi

**Ekonomik Felsefe:** Anlık taktik ihtiyaçları ile uzun vadeli stratejik yatırım arasında dengeli kaynak tahsisi kararları.

**Para Birimi Sistemi:**

| **Kaynak** | **Fonksiyon** | **Üretim** | **Ana Kullanımlar** |
|--------------|-------------|----------------|------------------|
| **Kaynak** | Birincil para birimi | Günlük gelir, Fabrika binaları | Bina kartları, yardımcı kartlar, üs yönetimi |
| **Cephane** | Askeri para birimi | Cephane binaları, keşifler | Askerler, duvarlar, mayınlar, hava saldırıları |
| **Gıda** | Hayatta kalma para birimi | Çiftlik binaları | Nüfusun sürdürülebilirliği, keşifler |
| **Nüfus** | Kapasite sınırı | Ev binaları | Maksimum asker kapasitesi kısıtlaması |
| **Araştırma Puanları** | Meta ilerleme | Laboratuvar, keşifler, 3 günlük teklifler | Kalıcı yükseltmeler (11 ağaç, 40+ seçenek) |

**Ana Ekonomik Mekanikler:**

- **AÇLIK Cezası:** Gıda < Nüfus olduğunda -%20 savaş etkinliği

- **Nüfus Kısıtlaması:** Konut kapasitesinin ötesinde asker eğitilemez

- **Stratejik Denge:** Anlık hayatta kalma ile uzun vadeli yatırım optimize edilmelidir

**Manuel Toplama Sistemi:**

- **Hasat İçin Tıkla:** Binalar kaynak simgeleri gösterdiğinde, oyuncular toplamak için tıklar

- **Görsel Durumlar:** Binalar dolu/boş durumları gösterir (Clash of Clans benzeri)

- **Aktif Katılım:** Gün aşamaları sırasında oyuncu etkileşimi gerektirir

- **Kapasite Sınırları:** Depo dolduğunda binalar üretimi durdurur, toplanana kadar

**Üretim ve Denge:**

- **Stratejik Zamanlama:** Toplama diğer gün aşaması aktiviteleriyle dengelenmelidir

- **Verimlilik Ölçekleme:** Daha yüksek seviyeli binalar daha hızlı daha fazla kaynak üretir

- **Birbirine Bağlı Sistemler:** Tüm para birimleri birbirinin stratejik faydasını etkiler

- **Dinamik Ölçekleme:** Kaynak ihtiyaçları üs karmaşıklığı ve zorlukla artar

### 4.2 Bina ve Yerleştirme Sistemi

**Izgara Yerleştirme:**

| **Bölge Türü** | **Binalar** | **Özel Özellikler** |
|---------------|---------------|---------------------|
| **Ana Izgara** | Evler, Kışlalar, Fabrikalar, Laboratuvarlar, Cephane | Standart bitişik birleştirme |
| **Çiftlik Izgarası** | Çiftlik binaları | Ürün üretim mekanikleri |

**Kart Sistemi:**

| **Öğe** | **Detaylar** |
|-------------|-------------|
| **Günlük Kartlar** | Günlük 3 rastgele bina/yardımcı kart |
| **Bina Türleri** | Fabrika (Sarı/Yeşil), Cephane (Gri), Kışla (Turuncu/Kırmızı), Laboratuvar, Ev, Çiftlik |
| **Yardımcı Kartlar** | Bina Taşıma, Doğrudan Seviye Atlama |
| **Yeniden Çekme Sistemi** | Başlangıçta günlük 1 yeniden çekme, 4 yeniden çekmeye kadar yükseltilebilir |

**Gelişmiş Yönetim:**

- **Bina Taşıma:** Bina Taşıma kartları ile binaları birleştirme konumunu optimize etmek için taşı

- **Doğrudan Seviye Atlama:** Doğrudan Seviye Atlama kartları ile 3 bitişik birleştirme gereksinimini atla

- **Stratejik Esneklik:** Bina ilerlemesi ve düzen optimizasyonu için birden fazla yol

### 4.3 Birleştirme ve Yükseltme Mekanikleri

**Çekirdek Birleştirme Sistemi:**

| **Birleştirme Türü** | **Tetikleyici** | **Desenler** | **Oyuncu Kontrolü** |
|----------------|-------------|-------------|-------------------|
| **Binalar** | Otomatik | 3 aynı tür/seviye (yatay, dikey, L şekilli) | Son yerleştirilen konum birleşmiş bina olur |
| **Askerler** | Manuel | 3 bitişik aynı tür/seviye | Oyuncu birleştirme açılır penceresine tıklayarak etkinleştirir |

**Birleştirme Mekanikleri:**

- **Bina Birleştirmeleri:** Geçerli 3 deseni tamamlandığında anında otomatik tetikleme

- **Asker Birleştirmeleri:** Birden fazla birim yerine tek bir yükseltilmiş birim arasında manuel oyuncu seçimi

- **Esnek Desenler:** Yatay, dikey ve L şekilli bitişiklik hepsi geçerli

- **Görsel Geri Bildirim:** Seviye numaraları ve birleştirme hazırlık göstergeleri

**Stratejik Unsurlar:**

- **Mekansal Planlama:** Optimal birleştirme fırsatları için yerleştirmeyi kontrol et

- **Kaynak Verimliliği:** Birleştirme, üstel olarak daha güçlü yapılar oluşturur

- **Alternatif Yollar:** Doğrudan Seviye Atlama kartları ve Bina Taşıma mekansal gereksinimleri atlar

### 4.4 Savaş Sistemi

**Birim Türleri:**

| **Birim Türü** | **Fonksiyon** | **Birleştirme** | **Kaynak Maliyeti** |
|---------------|-------------|-----------|------------------|
| **Temel Asker** | Birincil savunma, standart savaş | Evet (3→1 geliştirilmiş) | Cephane |
| **Havan** | Uzun menzilli topçu, AoE hasar | Hayır | Cephane |
| **Makineli Tüfek (Bixi)** | Yüksek ateş hızı, sürü karşıtı | Hayır | Cephane |
| **Roketatar** | Ağır hasar, zırh karşıtı | Hayır | Cephane |

**Savunma Yapıları:**

| **Yapı** | **Fonksiyon** | **Izgara Boyutu** | **Birleştirme** | **Maliyet** |
|---------------|-------------|---------------|-----------|----------|
| **Mayınlar** | Tek kullanımlık patlayıcı | 1x1 | Hayır | Cephane |
| **Gözetleme Kulesi** | Sürekli menzilli saldırılar | 3x3 | Evet | Cephane |
| **Savunma Duvarı** | Fiziksel bariyer | 1x1 | Hayır | Cephane |

**Yol Bulma ve Savaş:**

**Zombi Hareketi:**

- **Doğrudan Yaklaşım:** Zombiler doğrudan üsse doğru hareket eder, yoldaki duvarlara saldırır

- **Basit AI:** Karmaşık yönlendirme veya boşluk arama davranışı yok

- **Duvar Etkileşimi:** Yolu engelleyen duvarlara saldırır, belirli alanlara yönlendirir

**Duvar Sistemi:**

- **Dayanıklılık:** Duvarlar hasar alır, onarılamaz, bir sonraki güne kadar yok edilir

- **Stratejik Yerleştirme:** Zombileri yönlendir, geçici bariyerler oluştur

- **Ana Üs Duvarı:** %100 → %0 sağlık, yıkım = anında oyun sonu

**Savaş Çözümü:**

- **Otomatik Katılım:** Birimler menzil içindeki zombilere otomatik olarak saldırır

- **Hasar Hesaplaması:** Birim türlerine, seviyelere, yükseltme bonuslarına göre

- **Stratejik Konumlandırma:** Yerleştirme kararları savunma verimliliğini kritik şekilde etkiler

### 4.5 Dalga ve Düşman Sistemi

**Temel Zombi Türleri:**

| **Seviye** | **Tür** | **Özellikler** | **Taktiksel Zorluk** |
|-----------|----------|-------------------|----------------------|
| **1** | Normal | Dengeli hız/dayanıklılık temeli | Standart savunma tepkisi |
| **2** | Koşucu | Artırılmış hareket hızı | Yavaş savunma düzenlerini aşar |
| **3** | Patlayan | Yüksek HP, yavaş, ölüm patlaması | Yakındaki birimlere AoE hasar |
| **4** | Menzilli | Uzaktan saldırır | Geleneksel konumlandırmayı aşar |
| **5** | Gelişmiş | Gelişmiş yetenekler | Yükseltilmiş savunmalar gerektirir |

**Patron Zombi Türleri:**

| **Seviye** | **Patron** | **Yetenekler** | **Karşı Strateji** |
|-----------|----------|---------------|-------------------|
| **1** | Taşyumruk | Taş fırlatma, yakın dövüş vuruşları | Çift menzilli savunma düzeni |
| **2** | Ölüm Dokunuşu | Kılıç sallamaları, dokunaç kırbaçları | Sürekli hasar, konumlandırma |
| **3** | Patlayıcı | Yakın dövüş + zehirli ölüm patlaması | Uzun menzilli yok etme |
| **4** | Zehirli | Uzun menzilli zehirli mermiler | Mobil yanıt, zırh |

**Dalga Mekanikleri:**

- **İlerleyici Zorluk:** Düşman gücü/çeşitliliği gün ilerledikçe artar

- **Taktiksel Adaptasyon:** Karışık düşman kompozisyonları çeşitli savunma stratejileri gerektirir

- **Patron Entegrasyonu:** Tam savunma koordinasyonu gerektiren zirve patron karşılaşmaları

### 4.6 Güçlendirme ve Güçlendirme Sistemi

**Toplama Mekanikleri:**

- **Düşme Kaynağı:** Zombiler yenildiğinde rastgele güçlendirmeler düşer

- **Zaman Baskısı:** Güçlendirmeler 5 saniye sonra toplanmazsa kaybolur

- **Stratejik Seçim:** Toplama, savaş odaklı dikkatle rekabet eder

- **Sınırlı Depolama:** Envanter kısıtlamaları kaynak yönetimi kararları oluşturur

**Güçlendirme Türleri:**

| **Güçlendirme Türü** | **Süre** | **Etkisi** | **Stratejik Kullanım** |
|----------------|--------------|------------|------------------|
| **Hasar** | 30 saniye | +%50 asker hasarı | Patron karşılaşmaları, yüksek yoğunluklu dalgalar |
| **Ateş Hızı** | 20 saniye | +%35 saldırı hızı | Sürü düşmanları, zaman kritik anlar |
| **Kalkan** | 10 saniye | %50 hasar emilimi | Acil savunma, ezici baskı |
| **Kaynak** | 6 toplama | +%50 üretim verimliliği | Ekonomik hızlanma dönemleri |

**Dağıtım Sistemi:**

- **Manuel Hedefleme:** Güçlendirme uygulama alanlarını belirlemek için tıklayın

- **AoE Uygulaması:** Clash of Clans tarzı alan hedefleme birden fazla askeri etkiler

- **Stratejik Zamanlama:** Anında kullanım ile stratejik depolama arasında denge kur

- **Konumlandırma Optimizasyonu:** Asker düzenlemesi güçlendirme kapsamını maksimize eder

### 4.7 Dinamik Tehdit Sistemi (Zombi Delikleri)

**Delik Mekanikleri:**

| **Öğe** | **Detaylar** |
|-------------|-------------|
| **Ortaya Çıkış** | Savaş sırasında rastgele zamanlama, savaş alanının herhangi bir yerinde |
| **Tehdit Seviyesi** | Kapatılana kadar sürekli ek zombiler doğar |
| **Kapatma Süreci** | 5 hızlı dokunuş gerektirir, zaman baskısı ilerlemeyi sıfırlar |
| **Başarı Ödülü** | Uçaklardan füze saldırısı animasyonu

**Stratejik Etki:**

- **Çoklu Görev Zorluğu:** Aynı anda savaş alanı izleme ve acil durum yanıtı gerektirir

- **Öncelik Kararları:** Delik kapatma, güçlendirme toplama ve savaş yönetimi ile rekabet eder

- **Beceri İfadesi:** Hızlı tepki süreleri taktik avantajlar sağlar

- **Tehdit Artışı:** Göz ardı edilen delikler zombi baskısını üstel olarak artırır

- **Zorluk Ölçekleme:** Sıklık ve zamanlama oyun ilerledikçe artar

---

## 5. İlerleme Sistemleri

### 5.1 Meta İlerleme Genel Bakış

**İlerleme Felsefesi:**

- **Kalıcı Büyüme:** Her koşu Araştırma Puanları aracılığıyla kalıcı ilerleme sağlar

- **Stratejik Yatırım:** Oyuncular 11 ana yükseltme ağacı aracılığıyla kendi yükseltme yollarını seçer

- **Oyuncu Ajansı:** Farklı oyun tarzlarını destekleyen birden fazla geçerli ilerleme yolu

**Üç Katmanlı İlerleme Yapısı:**

| **Katman** | **Kapsam** | **Ana Unsurlar** |
|----------|-----------|------------------|
| **Oturum** | Tek Koşu İçinde | Bina/kaynak evrimi, taktik ustalık, stratejik öğrenme |
| **Kampanya** | Birden Fazla Koşu | Araştırma Puanı yükseltmeleri, harita açılışları, sistem erişimi, NPC koleksiyonu |
| **Ustalık** | Uzun Vadeli Katılım | Stratejik optimizasyon, yapı çeşitliliği, zorluk tamamlama |

**Araştırma Puanı Ekonomisi:**

- **Üretim Kaynakları:** Laboratuvar binaları, keşifler, koşu tamamlama, 3 günlük teklifler

- **Yatırım Ölçeği:** 40+ bireysel yükseltme 11 ana ağaçta

- **Kalıcı Faydalar:** Tüm yükseltmeler koşular arasında kalıcıdır ve gelecekteki oynanışı etkiler

### 5.2 Üs Yükseltme Sistemi

**11 Ana Yükseltme Ağacı:**

| **Ağaç** | **Ana Yükseltmeler** | **Stratejik Odak** |
|----------|------------------|-------------------|
| **1. Bina Kartları Seviyesi** | 5 seviye: Binalar daha yüksek temel seviyelerde başlar | Birleştirme gereksinimlerini azaltır |
| **2. Asker Seviyesi** | 5 seviye: +1 ila +5 temel asker seviyesi | Daha güçlü temel kuvvetler |
| **3. Duvar Sistemi** | +60 kapasite, artırılmış HP, elektriklendirme | Savunma güçlendirme |
| **4. Çiftlik Sistemi** | +%175 hasat, 2 gün daha hızlı büyüme, alan genişlemesi | Gıda güvenliği |
| **5. Laboratuvar** | +%150 araştırma üretimi, 1 gün daha hızlı tamamlama | Meta hızlanma |
| **6. Keşifler** | +%20 hayatta kalma, +%50 ödüller, 1 gün daha hızlı | Risk azaltma |
| **7. NPC Güçlendirmeleri** | +%225 NPC uzmanlık etkilerinin amplifikasyonu | Sinergi artırma |
| **8. Yeniden Canlandırma (Premium)** | Koşu başına 3 kullanım, yenilgi anında tüm zombileri yak | Nihai güvenlik ağı |
| **9. Silahlar** | Ateş hızı, yeniden yükleme hızı, +%50 hasar | Savaş güçlendirme |
| **10. Hava Saldırıları** | %50 maliyet azaltma, 3 bomba deseni, +%50 yarıçap | Taktik hava desteği |
| **11. Kart Yeniden Çekme** | Günlük toplam 4 yeniden çekme | Stratejik esneklik |

**Yükseltme Sinergileri:**

- **Ekonomik Motor:** Çiftlik + Laboratuvar yükseltmeleri kaynak bolluğu yaratır

- **Askeri Makine:** Silahlar + Duvar + Hava saldırısı yükseltmeleri savaşı maksimize eder

- **Keşif Ağı:** NPC + Keşif yükseltmeleri keşfi optimize eder

- **Stratejik Ustalık:** Yeniden Çekme + Yeniden Canlandırma yükseltmeleri nihai esneklik sağlar

### 5.3 Araştırma Ağacı ve Yükseltmeler

**Araştırma Puanı Üretimi:**

| **Kaynak Türü** | **Üretim Yöntemi** | **Tipik Getiri** |
|-----------------|----------------------|------------------|
| **Birincil** | Laboratuvar binaları, keşifler, 3 günlük teklifler | Koşu başına 15-60 RP |
| **İkincil** | Harita tamamlama, patron yenilgileri, başarılar | Dönüm noktası başına 25-150 RP |

**Oyun Aşamasına Göre Yatırım Stratejisi:**

| **Aşama** | **RP Aralığı** | **Öncelikli Yükseltmeler** |
|-----------|-------------|--------------------|
| **Erken Oyun** | 0-100 | Çiftlik Seviyesi 1, Kart Yeniden Çekme, Bina Seviyesi 1 |
| **Orta Oyun** | 100-500 | Silahlar ağacı, Laboratuvar, NPC güçlendirmeleri |
| **Geç Oyun** | 500+ | Hava saldırıları, uzmanlaşmış yapılar, Yeniden Canlandırma sistemi |

**Maliyet Ölçekleme Katmanları:**

- **Katman 1:** 10-25 RP (temel iyileştirmeler)

- **Katman 2:** 50-100 RP (önemli geliştirmeler)

- **Katman 3:** 150-300 RP (güçlü uzmanlıklar)

- **Premium:** 500+ RP (oyun değiştiren yetenekler)

### 5.4 NPC Sistemi ve İlişkiler

**NPC İşe Alım Sistemi:**

- **Tetikleyici Olaylar:** Belirli günler 2 NPC arasında seçim sunar

- **Özel Seçim:** Her karşılaşmada tam olarak bir NPC seçin

- **Kalıcı Entegrasyon:** NPC'ler potansiyel keşif ölümü olana kadar kalır

**NPC Uzmanlık Türleri:**

| **Tür** | **Temel Güçlendirme** | **Keşif Performansı** | **Stratejik Odak** |
|----------|---------------|---------------------------|-------------------|
| **Bilim İnsanı** | +%30 araştırma puanı üretimi | Düşük hayatta kalma, araştırma ödülleri | Meta ilerleme hızlanması |
| **Askeri Uzman** | Gelişmiş asker savaş istatistikleri | İyi hayatta kalma, orta ödüller | Anında savaş gücü |
| **Çiftçi** | Artırılmış çiftlik üretimi | Orta hayatta kalma, gıda odaklı | Kaynak yönetimi, sürdürülebilirlik |
| **Gerilla** | Orta üs güçlendirmeleri | Mükemmel hayatta kalma, yüksek ganimet | Keşif, kaynak edinimi |

**Yaşayan Üs Sistemi:**

- **Fiziksel Varlık:** NPC'ler üste fiziksel olarak dolaşır, yaşayan bir ortam yaratır

- **Etkileşimli Diyalog:** Her NPC için uzmanlığı yansıtan 6 benzersiz sesli satır

- **Duygusal Yatırım:** Genişletilmiş etkileşim oyuncu bağlılığı yaratır

- **Kayıp Sonuçları:** NPC ölümü stratejik bir gerileme ve gerçek bir etki yaratır

### 5.5 Keşif Sistemi

**Keşif Türleri:**

| **Tür** | **Süre** | **Risk Seviyesi** | **Açılış Gereksinimi** | **Stratejik Rol** |
|----------|--------------|----------------|------------------------|-------------------|
| **Küçük** | 2 gün | Yüksek hayatta kalma oranı | Başlangıçta mevcut | Güvenli kaynak takviyesi |
| **Orta** | 4 gün | Orta hayatta kalma oranı | Araştırma Puanı açılışı | Dengeli risk/ödül |
| **Büyük** | 5 gün | Orta hayatta kalma oranı | İleri Araştırma açılışı | Yüksek riskli keşif |

**Kaynak Yönetimi:**

- **Maliyetler:** Gıda (NPC başına günlük) + Cephane (ekipman/savunma)

- **Stratejik Seçimler:** Solo keşifler (daha yüksek risk, birden fazla ödül) vs Grup keşifleri (daha güvenli, tek ödül)

- **Planlama:** Keşif yatırımı üs operasyonel ihtiyaçları ile dengelenmelidir

**Risk/Ödül Çerçevesi:**

- **Standart Ödüller:** Gıda, Kaynak, Cephane, Araştırma Puanları

- **Gelişmiş Ödüller:** Nadir kaynaklar, NPC işe alım fırsatları, harita istihbaratı

- **Kalıcı Kayıp:** NPC'ler ölebilir ve asla geri dönemez, duygusal ve stratejik etki yaratır

- **Hayatta Kalma Faktörleri:** NPC türü, keşif boyutu, yükseltme faydaları başarı şansını etkiler

---

## 6. İçerik Tasarımı

### 6.1 Bina Türleri ve İşlevleri

**Bina Sınıflandırması:**

- **Üretim Binaları (Toplanabilir):** Manuel toplama gerektiren kaynak üretir

- **Statik Binalar:** Toplama olmadan pasif faydalar sağlar

**Izgara Organizasyonu:**

- **Ana Izgara Bölgesi:** Çoğu yapı için birincil bina alanı

- **Çiftlik Izgara Bölgesi:** Uzmanlaşmış tarım alanı

**Altı Bina Türü:**

| **Bina** | **Izgara** | **Fonksiyon** | **Toplama** | **Stratejik Rol** |
|--------------|----------|-------------|----------------|-------------------|
| **Fabrika (Sarı/Yeşil)** | Ana | Kaynak üretimi | Simge göründüğünde tıklayın | Kart satın alımları için ekonomik motor |
| **Cephane (Gri)** | Ana | Cephane üretimi | Simge göründüğünde tıklayın | Askerler/savunmalar için askeri malzeme |
| **Kışla (Turuncu/Kırmızı)** | Ana | Asker eğitimi | Simge göründüğünde tıklayın | Birincil savunma birimi kaynağı |
| **Laboratuvar** | Ana | Araştırma Puanı üretimi | Simge göründüğünde tıklayın | Meta ilerleme gelişimi |
| **Ev** | Ana | Nüfus kapasitesi | Bildirimler için tıklayın | Asker ordusu boyut sınırları |
| **Çiftlik** | Çiftlik Bölgesi | Gıda üretimi | Simge göründüğünde tıklayın | Nüfusu sürdürüyor, AÇLIK debuff'ını önler |

**Gelişmiş Yönetim:**

- **Bina Taşıma Kartları:** Birleştirme konumunu optimize etmek için binaları taşı

- **Doğrudan Seviye Atlama Kartları:** 3 bitişik birleştirme gereksinimlerini atla

- **Birleştirme Evrimi:** Tüm binalar birleştirildiğinde üstel olarak daha fazla güç kazanır

**Kaynak Zincirleri:**

- **Ekonomik:** Fabrika → Kaynak → Bina Kartları → Üs Genişlemesi

- **Askeri:** Cephane → Askerler/Savunmalar → Savaş Yeteneği

- **Araştırma:** Laboratuvar → Araştırma Puanları → Kalıcı Yükseltmeler

- **Nüfus:** Ev → Kapasite → Asker Sınırları

- **Sürdürülebilirlik:** Çiftlik → Gıda → Nüfus Bakımı + Keşifler

### 6.2 Birim Türleri ve Yetenekleri

**Birincil Savaş Birimleri (Birleştirilebilir):**

| **Birim Türü** | **Kaynak** | **Birleştirme Mekaniği** | **Stratejik Rol** |
|---------------|------------|-------------------|-------------------|
| **Temel Asker** | Kışla binaları | 3 bitişik → Gelişmiş (manuel aktivasyon) | Esnek, maliyet-etkin savunma omurgası |
| **Gelişmiş Asker** | 3 Temel birleştirilmiş | 3 bitişik → Elit (manuel aktivasyon) | Orta seviye savunma birimi üstün yeteneklerle |
| **Elit Asker** | 3 Gelişmiş birleştirilmiş | Daha fazla birleştirme mümkün | Yüksek seviye savunma dayanak birimleri |

**Özel Birimler (Birleştirilemez):**

| **Birim** | **Savaş Rolü** | **Taktik Avantajı** | **En İyi Karşı** |
|----------|----------------|----------------------|------------------|
| **Havan Topu** | Uzun menzilli AoE hasar | Düşmanlar hatlara ulaşmadan saldırır | Yoğun gruplar, yavaş düşmanlar |
| **Makineli Tüfek (Bixi)** | Yüksek ateş hızı, sürekli hasar | Sürekli baskı ateşi | Sürü düşmanları, dar boğazlar |
| **Roketatar** | Ağır tek hedef hasar | Yıkıcı zırh karşıtı yetenek | Patron zombiler, zorlu düşmanlar |

**Birim Yönetimi:**

- **Gün Aşaması:** Askerleri savaş alanı ızgarasına yerleştir, birleştirme konumunu planla

- **Manuel Birleştirme:** Oyuncu, askerleri ne zaman birleştireceğini seçer (3 bitişik olduğunda açılır gösterge)

- **Stratejik Seçim:** Kapsama için birden fazla asker mi yoksa yoğun güç için birleştirilmiş asker mi?

- **Gece Aşaması:** Otomatik katılım, güçlendirme entegrasyonu, formasyon bakımı

- **Yükseltme Entegrasyonu:** Araştırma yükseltmeleri, NPC güçlendirmeleri ve varsayılan seviye artışları tüm birimleri geliştirir

### 6.3 Düşman Tasarımı ve Davranışı

*Not: Ayrıntılı zombi türleri ve mekanikleri için bkz. Bölüm 4.5 Dalga ve Düşman Sistemi.*

**Düşman Davranış Çerçevesi:**

- **Basit Yol Bulma:** Zombiler, temel engellerden kaçınarak doğrudan üsse doğru hareket eder

- **Duvar Etkileşimi:** Yollarını engelleyen duvarlara saldırır, karmaşık navigasyon yok

- **İlerleyici Ölçekleme:** Düşman gücü ve çeşitliliği gün ilerledikçe artar

- **Karışık Kompozisyonlar:** Farklı düşman kombinasyonları taktiksel adaptasyon gerektirir

**Görsel Tasarım İlkeleri:**

- **Açık Tehdit İletişimi:** Görsel görünüm zombi türünü ve tehlike seviyesini gösterir

- **Belirgin Silüetler:** Her zombi türü savaş sırasında kolayca ayırt edilebilir

- **Saldırı Deseni Telgrafı:** Animasyonlar zombi yeteneklerini ve zamanlamasını açıkça gösterir

- **Hasar Durumu Geri Bildirimi:** Görsel göstergeler zombi sağlığını ve savunmasızlığını gösterir

### 6.4 Haritalar ve Çevreler

**Harita İlerleme Sistemi:**

| **Harita** | **Açılış Gereksinimi** | **Hayatta Kalma Hedefi** | **Çevre Teması** | **Anlatı Bağlamı** |
|---------|------------------------|----------------------|----------------------|---------------------|
| **1. Nevada** | Başlangıçta mevcut | 50 gün | Çöl acil iniş alanı | Uçak tamir hayatta kalma senaryosu |
| **2. Kentsel** | Harita 1'i Tamamla (50 gün) | 75 gün | [Terk edilmiş şehir ayarı] | [Hikaye-özel senaryo] |
| **3. Endüstriyel** | Harita 2'yi Tamamla (75 gün) | [TBD] gün | [Endüstriyel/askeri kompleks] | [Hikaye-özel senaryo] |
| **4. Laboratuvar** | Harita 3'ü Tamamla | 100 gün | Araştırma tesisi/tıbbi kompleks | Zombi aşısı geliştirme |

**Harita-Özel Özellikler:**

**Harita 1: Nevada Acil Üs**

- **Taktik Çevre:** Açık çöl arazisi ile net görüş hatları

- **Çevresel Zorluk:** Sınırlı doğal örtü, her yönden maruz kalma

- **Stratejik Gereksinim:** Duvarlar ve bina yerleştirme ile yapay savunma yapıları oluştur

- **Hikaye Arkı:** *"Uçaklarımızı tamir etmemiz gerekiyor, ama bu 50 gün sürecek"* → *"Uçak hazır. İstediğiniz zaman ayrılabiliriz."*

**Harita 4: Son Laboratuvar**

- **Stratejik Önemi:** En yüksek risklerle nihai meydan okuma

- **Çevresel Zorluk:** Birden fazla savunma bölgesi ile karmaşık tesis düzeni

- **Anlatı Ağırlığı:** Nihai hikaye çözümü ve zombi kıyameti için çare

- **Hikaye Arkı:** *"Sonunda zombilere karşı aşıyı bulduk, ama üretimi 100 gün sürecek. Bu kadar uzun süre hayatta kalabilir miyiz?"*

**Çevresel Tasarım Unsurları:**

- **Izgara Entegrasyonu:** Ana Izgara Bölgesi (bina yerleştirme) + Çiftlik Izgara Bölgesi (tarım)

- **Görsel Netlik:** Bölge türleri ve yerleştirme alanları arasında net ayrım

- **İlerleyici Karmaşıklık:** Daha sonraki haritalar daha zorlu arazi ve düzen kısıtlamaları sunar

- **Anlatı Entegrasyonu:** Her harita, çevresel detaylar aracılığıyla hikaye bağlamını yansıtır

### 6.5 Anlatı ve Hikaye Unsurları

**Anlatı Teslim Çerçevesi:**

- **Telsiz İletişimleri:** Statik ve terminoloji ile otantik askeri radyo tarzı

- **Hikaye Entegrasyonu:** Oyun ilerlemesi ile tetiklenen üs iletişimleri aracılığıyla ana anlatı vurguları

- **Seslendirme:** Daldırma için radyo efektleri ve ortam askeri atmosfer

**Küresel Dünya İnşası:**

- **Haber Ticker Sistemi:** Küresel zombi kıyameti kapsamını pekiştiren kayan başlıklar

- **Örnek Başlıklar:** "Zombiler artık Antarktika'da da görülmeye başlandı", "Dünya çapındaki büyük şehirlerden acil yayınlar kesildi"

- **Atmosferik Amaç:** İnsanlığın hayatta kalma mücadelesine katılma hissi yaratır

**Ana Hikaye Yayları:**

| **Harita** | **Merkezi Çatışma** | **Tematik Odak** | **Açılış İletişimi** |
|---------|---------------------|-------------------|---------------------------|
| **Harita 1: Acil Tahliye** | Uçak tamir operasyonları sırasında hayatta kalma | Hayatta kalma, takım çalışması, kaçış | Uçak kazası, tamir için 50 gün |
| **Harita 4: Çare** | 100 gün boyunca aşı üretimini koruma | Umut, fedakarlık, kefaret | Aşı bulundu, üretim için 100 gün |

**Karakter Odaklı Unsurlar:**

| **NPC Türü** | **Anlatı Perspektifi** | **Diyalog Temaları** | **Hikaye İşlevi** |
|--------------|---------------------------|--------------------|--------------------|
| **Bilim İnsanı** | Bilimsel analiz, araştırma ilerlemesi | Araştırma keşifleri, bilgi yoluyla umut | Zombi davranışı, çare geliştirme hakkında açıklama |
| **Askeri Uzman** | Taktik analiz, stratejik değerlendirme | Savaş etkinliği, askeri onur | Askeri atmosferi pekiştirir, taktiksel otantiklik |
| **Çiftçi** | Pratik hayatta kalma, kaynak yönetimi | Gıda güvenliği, üs sürdürülebilirliği | Hikayeyi pratik hayatta kalma gereksinimlerine dayandırır |
| **Gerilla** | Keşif, dış dünya bilgisi | Dış koşullar, hayatta kalma taktikleri | Üssün ötesindeki daha geniş dünyayla bağlantı |

**Duygusal Yatırım Sistemleri:**

- **Etkileşimli Diyalog:** Her NPC için 6 benzersiz sesli satır oyuncu bağlılığı geliştirir

- **Paylaşılan Deneyimler:** Birlikte zorlukların üstesinden gelmek anlatı bağları oluşturur

- **Kayıp Sonuçları:** Keşifler sırasında NPC ölümü gerçek hikaye etkisi yaratır

- **Oyuncu Ajansı:** İşe alım, keşifler ve harita ilerlemesinde anlamlı seçimler

---

## 7. Kullanıcı Arayüzü Tasarımı

### 7.1 UI Felsefesi ve İlkeleri

**Temel UI Tasarım Felsefesi:**

| **Prensip** | **Uygulama** |
|---------------|-------------------|
| **"Bir Bakışta Bilgi"** | Kritik oyun bilgileri hızlı görsel tarama ile erişilebilir, minimum bilişsel yük |
| **"Fonksiyonel Netlik"** | Amaca yönelik tasarım, görsel gürültü azaltma, tutarlı ikonografi |
| **"Tematik Entegrasyon"** | Askeri estetik ile otantik his, sessiz askeri renkler (gri, yeşil, kehribar) |

**Ana Tasarım İlkeleri:**

- **Erişilebilirlik:** Birden fazla görsel kanal (renk + şekil + metin), ölçeklenebilir öğeler, yüksek kontrast

- **Verimlilik:** Tek tıklama eylemleri, bağlamsal menüler, kısayol desteği, dokunma optimizasyonu

- **Hata Önleme:** Net geri bildirim, onay diyalogları, etkileşimli öğeler için görsel durumlar

### 7.2 HUD ve Oyun İçi Arayüz

**Üst Arayüz Çubuğu:**

| **Öğe** | **Görüntü** | **Fonksiyon** |
|-------------|-------------|--------------|
| **Gün Sayacı** | "Gün 12" belirgin şekilde gösterilir | İlerleme takibi |
| **Aşama Göstergesi** | Güneş/ay simgesi + dairesel ilerleme çubuğu | Mevcut aşamada kalan süre |
| **Hız Kontrolleri** | Duraklat, 1x, 2x, 3x düğmeleri | Oyuncu hız kontrolü |
| **Üs Sağlığı** | %0-100 renk kodlu çubuk | Kritik hayatta kalma metriği |
| **"Günü Bitir" Düğmesi** | Manuel aşama geçişi | Kalan gün süresini atla |

**Kaynak Paneli:**

- **Beş Para Birimi Türü:** Kaynak (Fabrika simgesi), Cephane (Mermi simgesi), Gıda (Tahıl simgesi), Nüfus (Kişi simgesi + mevcut/maks), Araştırma Puanları (Şişe simgesi)

- **Görsel Göstergeler:** Renk kodlu yeterlilik (yeşil/sarı/kırmızı), üretim/tüketim için trend okları

**Arayüz Sistemleri:**

| **Sistem** | **Tasarım** | **Ana Özellikler** |
|------------|-------------|------------------|
| **Haber Ticker** | Üstte kayan başlıklar | Küresel zombi güncellemeleri, askeri estetik |
| **Kart Seçimi** | Altta yatay 3 kart | Renk kodlu türler, maliyet gösterimi, yeniden çekme sistemi |
| **Izgara Yerleştirme** | Geçerli konumlar için beyaz karolar | Üzerine gelindiğinde önizleme, anında geri bildirim |
| **Güçlendirme Yönetimi** | Zamanlayıcılarla alt arayüz | AoE hedefleme, toplama göstergeleri |
| **Hava Saldırı Sistemi** | Uçak seçimi paneli | Maliyet gösterimi, hedefleme arayüzü, bekleme süreleri |
| **Acil Durum Yanıtı** | Zombi delikleri için kırmızı çatlak görseller | Dokunma sayacı (1/5, 2/5, vb.), aciliyet uyarıları |

### 7.3 Menü Sistemi ve Navigasyon

**Ana Menü Tasarımı:**

| **Seçenek** | **Fonksiyon** | **Özellikler** |
|------------|-------------|-------------|
| **Devam Et** | En son koşuya devam et | Kayıt durumu önizlemesi |
| **Yeni Oyun** | Yeni koşuya başla | Harita seçimi arayüzü |
| **Üs Yükseltmeleri** | Meta ilerleme erişimi | Araştırma puanı yatırımı, NPC yönetimi |
| **Ayarlar** | Oyun özelleştirme | Ses, video, kontroller, erişilebilirlik |
| **Çıkış** | Oyunu sonlandır | Kayıt onayı |

**Görsel Tasarım:** Askeri temalı stil ile profesyonel logo, animasyonlu post-apokaliptik arka plan, Steam entegrasyonu

**Harita Seçimi Arayüzü:**

- **Tema:** "Kurtarılacak Şehri Seç" ile anlatı çerçevesi

- **Görsel Öğeler:** Harita önizlemeleri, ilerleme takibi, hayatta kalma kayıtları

- **İlerleme:** Harita 1 (Nevada) → Harita 2 (Kentsel) → Harita 3 (Endüstriyel) → Harita 4 (Laboratuvar)

**Üs Yükseltme Arayüzü:**

- **Araştırma Ağaçları:** 11 ana yükseltme kategorisi ile net görselleştirme

- **İlerleme Takibi:** Tamamlanan ve mevcut yükseltmeler ile maliyet gösterimi

- **NPC Yönetimi:** İşe alınan NPC'lerin görsel gösterimi, keşif takibi, diyalog erişimi

**Ayarlar ve Seçenekler:**

- **Ses:** Ana ses, müzik, ses efektleri, ses kontrolleri

- **Video:** Çözünürlük, grafik kalitesi ön ayarları

- **Kontroller:** Tuş atama özelleştirmesi, hassasiyet ayarı

- **Erişilebilirlik:** Renk körü desteği, yazı tipi ölçekleme, ses geliştirme

- **Yerelleştirme:** Birden fazla dil desteği

### 7.4 Kontrol Şeması

**PC Platform Kontrolleri:**

| **Giriş Türü** | **Kontroller** | **Fonksiyon** |
|----------------|-------------|-------------|
| **Birincil** | Sol Tıklama, Sağ Tıklama, Fare Tekerleği | Seçim, yerleştirme, bağlam menüleri, yakınlaştırma |
| **Hız Kontrolü** | Boşluk (duraklat), Sayı tuşları (1-4) | Duraklat/başlat, hız ayarı |
| **Kısayollar** | Tab, R, WASD, F1-F4, Escape | Aşama geçişi, yeniden çekme, kamera, paneller, menü |
| **Bina** | Kartı Tıkla → Izgaraya Tıkla, Sürükle ve Bırak | İki adımlı yerleştirme, üzerine gelindiğinde önizleme |
| **Savaş** | Tıkla ve Sürükle, Hızlı Tıklama, Shift | AoE hedefleme, zombi deliği kapatma, hassasiyet |

**Mobil Platform Kontrolleri:**

| **Giriş Türü** | **Hareketler** | **Fonksiyon** |
|----------------|-------------|-------------|
| **Birincil** | Dokunma, Uzun Basma, Çift Dokunma | Seçim, bağlam menüleri, onay |
| **Navigasyon** | Yakınlaştırma, İki Parmakla Sürükleme | Savaş alanı genel görünümü, kamera kaydırma |
| **Sistem** | Yukarı/Aşağı/Sola/Sağa Kaydırma, Üç Parmakla Dokunma | Kaynak paneli, ayarlar, hız kontrolü, duraklat |
| **Optimizasyon** | Büyük Dokunma Hedefleri, Haptik Geri Bildirim | Parmak etkileşimi, titreşim onayı |

**Evrensel İlkeler:**

- **Erişilebilirlik:** Özelleştirilebilir kontroller, yeniden atanabilir tuşlar, tek elle kullanım modu, sesli komutlar

- **Hata Önleme:** Onay diyalogları, geri alma sistemi, görsel geri bildirim, aşamalı açıklama

### 7.5 Erişilebilirlik Özellikleri

**Görsel Erişilebilirlik:**

| **Özellik Kategorisi** | **Ana Özellikler** | **Uygulama** |
|---------------------|------------------|-------------------|
| **Renk Körü Desteği** | Çok kanallı bilgi, renk körü dostu palet | Renk + şekil + metin/simgeler, deuteranopia/protanopia/tritanopia için test edildi |
| **Düşük Görüş Desteği** | Ölçeklenebilir UI, yazı tipi özelleştirme, ekran okuyucu uyumluluğu | %100-200 ölçekleme, disleksi dostu yazı tipleri, doğru etiketleme |
| **Görsel Netlik** | Hareket azaltma, flaş azaltma, odak göstergeleri | İsteğe bağlı azaltılmış animasyon, nöbet dikkate alma, klavye navigasyonu |

**Ses Erişilebilirliği:**

| **Özellik Kategorisi** | **Ana Özellikler** | **Uygulama** |
|---------------------|------------------|-------------------|
| **İşitme Engeli** | Görsel ses ipuçları, altyazı sistemi, titreşim uyarıları | Ekran efektleri, diyalog altyazıları, haptik geri bildirim |
| **Ses Özelleştirme** | Bireysel ses kontrolleri, sesli açıklamalar | Müzik/efektler/ses/UI için ayrı kaydırıcılar, özel ses paketleri |

**Motor Erişilebilirliği:**

| **Özellik Kategorisi** | **Ana Özellikler** | **Uygulama** |
|---------------------|------------------|-------------------|
| **Alternatif Giriş** | Tek anahtar desteği, ayarlanabilir zamanlama, basma/değiştirme seçenekleri | Tek düğme oynanışı, özelleştirilebilir zamanlama, basitleştirilmiş kontroller |
| **Özelleştirme** | Giriş yeniden atama, hassasiyet ayarı, otomatik eylemler | Tam yeniden atama desteği, her zaman duraklatma işlevi |

**Bilişsel Erişilebilirlik:**

| **Özellik Kategorisi** | **Ana Özellikler** | **Uygulama** |
|---------------------|------------------|-------------------|
| **Bilgi Yönetimi** | Eğitim tekrarı, bağlam yardımı, ilerleme göstergeleri | Duruma özel rehberlik, basitleştirilmiş mod seçeneği |
| **Hafıza Desteği** | Görsel hatırlatıcılar, eylem geçmişi, strateji kılavuzları | Hedef hatırlatıcılar, ayrıntılı kayıt durumu bilgileri |

**Platforma Özel Özellikler:**

- **PC:** Windows Erişilebilirlik API'si, klavye navigasyonu, ekran okuyucu desteği (NVDA, JAWS, Anlatıcı), yüksek DPI ölçekleme

- **Mobil:** iOS (VoiceOver, Switch Control, Assistive Touch), Android (TalkBack, Select to Speak, Live Caption)

- **İletişim:** Net mesajlaşma, tutarlı ikonografi, yardımcı hata mesajları, birden fazla dil desteği

---

## 8. Ses ve Görsel Tasarım

### 8.1 Sanat Yönetimi ve Görsel Stil

**Temel Felsefe:** "Atmosferik Derinlikle Taktiksel Gerçekçilik" - tematik özgünlüğü korurken oyun oynanabilirliğini öncelikli hale getirme.

**Görsel Tasarım İlkeleri:**

| **Öğe** | **Yaklaşım** | **Uygulama** |
|-------------|-------------|-------------------|
| **Askeri Estetik** | Özgün görsel dil | Soluk askeri renkler (zeytin yeşili, haki, gri), aşınmış ekipman dokuları, dramatik gün/gece aydınlatması |
| **Kıyamet Sonrası Atmosfer** | Çevresel hikaye anlatımı | Eskimiş yapılar, doğaçlama onarımlar, kaynak kıtlığı görsel iletişimi |
| **Oyun Oynanabilirliği** | İşlev öncelikli tasarım | Belirgin görsel hiyerarşi, tutarlı simgecilik, platformlar arası okunabilirlik |

**Görsel Stil Özellikleri:**

| **Kategori** | **Tasarım Öğeleri** |
|--------------|-------------------|
| **Karakterler** | Yükseltme seviyeleriyle aşamalı aşınma gösteren askeri üniformalar, belirgin NPC uzmanlıkları, okunabilir zombi çeşitliliği |
| **Çevreler** | Modüler üs mimarisi, harita başına arazi çeşitliliği, ince hava durumu efektleri, yıkım geri bildirimi |
| **Binalar** | Modüler inşaat görünümü, seviye ilerleme görselleştirmesi, net işlevsel iletişim |
| **UI Tasarımı** | Askeri HUD stili, entegre dünya unsurları, duyarlı platformlar arası ölçekleme |

### 8.2 Ses Tasarım Felsefesi

**Temel Felsefe:** "Sürükleyici Komuta Deneyimi" - stratejik oyun oynanışını destekleyen taktiksel sesler ve atmosferik askeri ortam.

**Ses Mimarisi:**

| **Sistem Türü** | **Fonksiyon** | **Ana Özellikler** |
|-----------------|-------------|------------------|
| **Oyun Sesleri** | Stratejik destek | Eylem geri bildirimi, durum iletişimi, tehdit farkındalığı, aşama geçişleri |
| **Mekansal Ses** | Taktik farkındalık | 3D konumlandırma, mesafe modelleme, çevresel bağlam, yönsel ipuçları |
| **Dinamik Ses** | Bağlamsal daldırma | Uyarlanabilir karışım, yoğunluk ölçekleme, kapsamlı oyuncu kontrolü, erişilebilirlik desteği |

**Ses Estetik Çerçevesi:**

- **Askeri İletişim:** Telsiz efektleri, özgün komuta yapısı, teknik terminoloji, acil durum protokolleri

- **Kıyamet Atmosferi:** Çevresel sesler, kaynak kıtlığı vurgusu, hayatta kalma gerilimi, küresel kriz bağlamı

### 8.3 Müzik ve Ses Efektleri

**Müzik Sistemi:**

| **Aşama** | **Müzikal Yaklaşım** | **Ana Öğeler** |
|-----------|-------------------|------------------|
| **Gündüz Aşaması** | Stratejik planlama desteği | Sakin odak temaları, kaynak yönetimi motifleri, geri sayım yükselmesi, başarı vurguları |
| **Gece Aşaması** | Savaş yoğunluğu | Dinamik tehdit ölçekleme, gerilim oluşturma, belirgin patron temaları, zafer çözümü |
| **Anlatı** | Duygusal destek | Hikaye anı vurgusu, harita özel temaları, NPC motifleri, başarı kutlaması |

**Ses Efektleri Mimarisi:**

| **Kategori** | **Kapsam** | **Amaç** |
|--------------|-------------|-------------|
| **Savaş Sesleri** | Silahlar, etkiler, zombiler, yıkım | Net savaş geri bildirimi ve tehdit tanımlama |
| **Üs Yönetimi** | İnşaat, kaynaklar, birleşmeler, üretim | Tatmin edici bina ve ekonomik geri bildirim |
| **Etkileşimli Sistemler** | UI, kartlar, güçlendirmeler, acil durumlar | Kapsamlı etkileşim onayı |
| **Çevresel** | Ambiyans, hava durumu, üs etkinliği, küresel bağlam | Atmosferik daldırma ve dünya inşası |

**Özel Özellikler:**

- **Seslendirme:** Askeri özgünlükle profesyonel NPC karakterizasyonu

- **Prosedürel Sistemler:** Dinamik ses üretimi, bağlamsal varyasyon, uyarlanabilir kalite, bellek optimizasyonu

### 8.4 Animasyon Gereksinimleri

**Animasyon Felsefesi:** "Hareket Yoluyla Netlik" - oyun oynanışını anlamayı destekleyen işlevsel animasyon ve tematik tutarlılık.

**Animasyon Sistemleri:**

| **Sistem** | **Ana Animasyonlar** | **Amaç** |
|------------|-------------------|-------------|
| **Bina ve İnşaat** | Yerleştirme geri bildirimi, inşaat ilerlemesi, birleşme efektleri, üretim göstergeleri, yıkım dizileri | Net bina sistemi iletişimi |
| **Birim ve Savaş** | Asker davranışı, birleşme dizileri, savaş eylemleri, hasar geri bildirimi, formasyon hareketi | Taktik anlayış desteği |
| **Düşman Çerçevesi** | Zombi çeşitliliği, tehdit iletişimi, saldırı desenleri, yol bulma, ölüm dizileri | Stratejik düşman tanımlama |
| **Etkileşimli Sistemler** | UI geçişleri, geri bildirim sistemleri, kart mekanikleri, kaynak güncellemeleri, uyarı sistemleri | Oyuncu etkileşim onayı |

**Teknik Özellikler:**

| **Gereksinim** | **Uygulama** |
|-----------------|-------------------|
| **Performans Optimizasyonu** | LOD sistemleri, verimli render, bellek yönetimi, platform ölçekleme |
| **Erişilebilirlik** | Hareket hassasiyeti seçenekleri, çok kanallı iletişim, tutarlı zamanlama, özelleştirme kontrolleri |
| **Kalite Güvencesi** | Platformlar arası tutarlılık, performans kıyaslamaları, kültürel duyarlılık, erişilebilirlik uyumluluğu |
| **Varlık Hattı** | Modüler tasarım, sürüm kontrolü, kalite standartları, entegrasyon testi |

## 9. Teknik Tasarım

### 9.1 Platform Gereksinimleri

**Platform Stratejisi:** PC (Steam) birincil, mobil ikincil olmak üzere çapraz platform dağıtımı.

**Geliştirme Çerçevesi:**

- **Motor:** Unity 2022.3 LTS, kararlılık ve çapraz platform desteği için

- **Dağıtım:** Steam (birincil), iOS App Store, Google Play Store

- **Render:** Evrensel Render Pipeline (URP) ile optimize edilmiş performans

**Sistem Gereksinimleri:**

| **Platform** | **Minimum** | **Önerilen** | **Depolama** |
|--------------|-------------|-----------------|-------------|
| **PC** | Win10, i3-6100, 4GB RAM, DirectX 11 | Win11, i5-8400, 8GB RAM, GTX 1050 | 2GB / 4GB |
| **iOS** | iPhone 8+, iOS 14.0, 3GB RAM | iOS 15+, 4GB RAM | 1.5GB |
| **Android** | Android 8.0, ARM64, 3GB RAM | Android 11+, 4GB RAM | 1.5GB |

**Teknik Entegrasyon:**

- **Bulut Kayıtları:** Steam Cloud, iCloud, Google Play Games

- **Grafik API'leri:** DirectX 11/12, Metal, Vulkan/OpenGL ES

- **Çapraz Platform:** Platforma özgü optimizasyon ile birleşik varlık hattı

### 9.2 Performans Hedefleri

**Performans Kriterleri:**

| **Platform** | **Kare Hızı** | **Bellek** | **Yükleme** | **Ekstra** |
|--------------|----------------|------------|-------------|----------------|
| **PC** | 60 FPS (önerilen), 30 FPS (minimum) | 2-4GB RAM | <30s başlatma, <15s seviyeler | %50 CPU max, çoklu görev boşluğu |
| **Mobil** | 30-60 FPS (cihaza bağlı) | 1.5GB RAM max | Pil: 2+ saat | Termal yönetim, verimli çöp toplama |

**Optimizasyon Stratejileri:**

| **Kategori** | **Teknikler** |
|--------------|---------------|
| **Render** | LOD sistemleri, culling (frustum/occlusion/distance), doku sıkıştırma, shader optimizasyonu, dinamik toplama |
| **Bellek** | Varlık akışı, nesne havuzu, çöp toplama zamanlaması, sıkıştırılmış formatlar |
| **CPU** | Optimize edilmiş yol bulma, verimli fizik, çoklu iş parçacığı, değişken güncelleme oranları, profil entegrasyonu |
| **Platforma Özgü** | Çok çekirdekli (PC), dokunma duyarlılığı (mobil), güç verimliliği, termal ölçekleme |

### 9.3 Kayıt Sistemi ve Veri Yönetimi

**Kayıt Mimarisi:**

| **Bileşen** | **Uygulama** |
|---------------|-------------------|
| **Yerel Kayıtlar** | Şifreleme ile JSON formatı, artımlı kayıtlar, otomatik yedeklemeler, bozulma kurtarma |
| **Bulut Entegrasyonu** | Steam Cloud, iCloud, Google Play Games, çakışma çözümü, çevrimdışı işlevsellik |
| **Veri Yapısı** | MetaProgression, CurrentRun, BaseConfiguration, PlayerPreferences |

**Kayıt Verisi Organizasyonu:**
```
SaveData/
• MetaProgression/ (Araştırma puanları, yükseltme ağaçları, kilidi açılmış içerik, istatistikler)
• CurrentRun/ (Oyun durumu, üs düzeni, askeri birimler, aktif sistemler)
• BaseConfiguration/ (NPC kadrosu, özelleştirme, keşif geçmişi)
• PlayerPreferences/ (Ayarlar, arayüz, oyun seçenekleri)
```

**Veri Koruma:**

| **Güvenlik Katmanı** | **Özellikler** |
|-------------------|-------------|
| **Dosya Koruma** | MD5 checksum doğrulama, temel şifreleme, sürüm kontrolü, atomik yazımlar |
| **Hile Karşıtı** | Veri doğrulama, ilerleme takibi, kurcalama tespiti, makul sınırlar |
| **Uyumluluk** | İleri uyumluluk, geçiş betikleri, kullanımdan kaldırılmış özellik yönetimi, test çerçevesi |

### 9.4 Mimari Genel Bakış

**Çekirdek Sistemler Mimarisi:**
```
GameManager (Merkezi koordinasyon)
├── ResourceManager (Para birimi takibi)
├── BuildingSystem (Yerleştirme, birleştirme, üretim)
├── CombatSystem (Askerler, düşmanlar, çözüm)
├── ProgressionSystem (Meta yükseltmeler, araştırma puanları)
├── NPCSystem (Karakter yönetimi, keşifler)
├── UIManager (Arayüz koordinasyonu)
└── SaveManager (Veri kalıcılığı, bulut senkronizasyonu)
```

**Tasarım İlkeleri:**

| **İlke** | **Uygulama** |
|---------------|-------------------|
| **Modüler Tasarım** | Endişelerin ayrılması, net arayüzler, sıcak değiştirilebilir bileşenler |
| **İletişim** | Olay odaklı mimari, tür güvenli olaylar, öncelik tabanlı işleme |
| **Veri Akışı** | Tek yönlü akış, durum senkronizasyonu, doğrulama katmanları, geri alma yeteneği |
| **Platform Soyutlama** | Birleşik giriş işleme, soyut platform özellikleri, çapraz platform hizmetleri |

**Geliştirme Çerçevesi:**

| **Kategori** | **Uygulama** |
|--------------|-------------------|
| **Kod Organizasyonu** | Ad alanı yapısı, montaj tanımları, kodlama standartları, dokümantasyon entegrasyonu |
| **Test** | Birim testi, entegrasyon testi, performans testi, platform testi, kayıt sistemi testi |
| **İzleme** | Çalışma zamanı profil oluşturma, bellek takibi, kare hızı analizi, kullanıcı analitiği |
| **Dağıtım** | Modüler güncellemeler, otomatikleştirilmiş boru hattı, QA entegrasyonu, geri alma yeteneği, platform dağıtımı |
| **Güvenlik** | GDPR uyumluluğu, veri şifreleme, güvenli iletişim, güvenlik açığı yönetimi |


## 10. Oyun Dengesi ve Ayarlama

### 10.1 Kaynak Ekonomisi Dengesi

**Ekonomik Felsefe:** "Stratejik Seçim ile Kıtlık" - zaman baskısı altında anlamlı kaynak tahsis kararları.

**Kaynak Mimarisi:**

| **Para Birimi** | **Temel Üretim** | **Bina Üretimi** | **Ana Maliyetler** | **Stratejik Rol** |
|--------------|-------------------|----------------------|---------------|-------------------|
| **Kaynak** | 10/gün → +2/gün (gün 1-10) → +1/gün | Fabrika Seviye 1: 5/döngü | Binalar: 8-12, Yardımcı kartlar: 15-20 | Birincil ekonomi motoru |
| **Mühimmat** | 5/gün → +1/gün (gün 1-15) | Mühimmat Binası Seviye 1: 8/döngü | Askerler: 4, Duvarlar: 2, Hava saldırıları: 15-25 | Askeri yetenek |
| **Yiyecek** | Tüketim: 1/Nüfus/gün | Çiftlik Seviye 1: 6/döngü (alan etkisi) | Keşifler: 2-4/NPC/gün | Nüfus sürdürülebilirliği |
| **Nüfus** | Temel: 10 kapasite | Ev Seviye 1: +5 kapasite | N/A - kapasite kısıtlaması | Askeri boyut sınırı |
| **Araştırma Puanları** | N/A | Laboratuvar Seviye 1: 2/döngü | Yükseltmeler: 25-600 RP | Meta ilerleme |

**Ekonomik Denge Mekanizmaları:**

- **Kaynak Harcaması:** Temel harcama (%60-70), stratejik yatırım (%20-30), acil durum rezervleri (%10-20)

- **Ölçekleme Stratejisi:** Doğrusal temel büyüme, üstel bina büyümesi, gün 30+ yönetimi

- **AÇLIK Cezası:** Yiyecek < Nüfus olduğunda -%20 savaş etkinliği

### 10.2 Savaş Dengesi

**Savaş Felsefesi:** "Net Geri Bildirim ile Taktiksel Derinlik" - ilerleyici zorluk ölçeklemesi ile birden fazla çözüm.

**Birim Denge Çerçevesi:**

| **Birim Türü** | **Etkililik** | **Stratejik Rol** | **Maliyet** |
|---------------|------------------|-------------------|----------|
| **Seviye 1 Asker** | %100 temel | Esnek omurga | 4 Mühimmat |
| **Seviye 2 Asker** | %250 (3-birleştirme) | Gelişmiş savunma | Manuel birleştirme |
| **Seviye 3 Asker** | %600 (9-birleştirme) | Elit birimler | Manuel birleştirme |
| **Havan Topu** | Yüksek hasar, yavaş hız | Grup karşıtı, hızlıya karşı savunmasız | Mühimmat |
| **Makineli Tüfek** | Yüksek hız, sürekli | Sürü karşıtı, güçlüye karşı daha az | Mühimmat |
| **Roketatar** | Maksimum tek hedef | Zırh karşıtı, pahalı | Mühimmat |

**Düşman Ölçekleme İlerlemesi:**

| **Gün Aralığı** | **Zombi Kompozisyonu** | **Patron Sıklığı** | **Zorluk Odaklı** |
|---------------|----------------------|-------------------|-------------------|
| **1-10** | Seviye 1 çoğunluk, nadir Seviye 2 | Her 8-12 günde bir | Mekanik öğrenme |
| **11-20** | Seviye 1-2 çoğunluk, Seviye 3 tanıtımı | Her 6-8 günde bir | Taktik uyum |
| **21-35** | Seviye 2-3 çoğunluk, Seviye 4 tanıtımı | Daha sık | Stratejik optimizasyon |
| **36-50** | Seviye 3-4 çoğunluk, Seviye 5 tanıtımı | Birden fazla patron | Gelişmiş konumlandırma |
| **51+** | Tüm seviyeler, yüksek yoğunluk | Sık çoklu patron | Tam ustalık |

**Savaş Mekanikleri Dengesi:**

| **Sistem** | **Ana İstatistikler** | **Stratejik Amaç** |
|------------|---------------|---------------------|
| **Güçlendirme Sistemi** | Hasar: +%50 (30s), Ateş Hızı: +%35 (20s), Kalkan: %50 azaltma (10s) | Acil taktiksel yanıt |
| **Hava Saldırısı Sistemi** | Standart: 300-500 hasar (15 Mühimmat), Halı: 200x3 hasar (25 Mühimmat) | Ağır savaş desteği |
| **Duvar Sistemi** | 100 HP temel, +%50 her yükseltmede, 8-12 zombi saldırısıyla yok edilir | Taktik konumlandırma aracı |

### 10.3 İlerleme Eğrileri

**İlerleme Felsefesi:** "Sürekli Zorluk ile Anlamlı Büyüme" - 50+ saatlik ilerleme ile yeniden başlama motivasyonu.

**Araştırma Puanı Ekonomisi:**

| **Kaynak** | **Üretim Hızı** | **Stratejik Değer** |
|------------|-------------------|-------------------|
| **Laboratuvar Üretimi** | 15-30 RP (erken), 30-60 RP (geç) | Tutarlı ilerleme |
| **Keşif Ödülleri** | Başarı başına 5-20 RP | Risk/ödül yatırımı |
| **3 Günlük Teklifler** | 10-25 RP vs anında kaynaklar | Stratejik seçim |
| **Harita Tamamlama** | Performansa dayalı 50-150 RP | Büyük kilometre taşları |

**Yükseltme Yatırım Katmanları:**

| **Katman** | **Maliyet Aralığı** | **Yükseltme Türleri** | **Stratejik Etki** |
|----------|----------------|------------------|-------------------|
| **Temel** | 25-50 RP | Temel iyileştirmeler, QoL özellikleri | Temel ilerleme |
| **Geliştirme** | 75-150 RP | Önemli iyileştirmeler, yeni seçenekler | Stratejik genişleme |
| **Özelleştirme** | 200-300 RP | Güçlü yetenekler, gelişmiş sistemler | Yapı özelleştirme |
| **Ustalık** | 400-600 RP | Oyun değiştiren yetenekler | Nihai hedefler |

**Beklenen Hayatta Kalma İlerlemesi:**

| **Aşama** | **Denemeler** | **Ortalama Hayatta Kalma** | **Anahtar Kilit Açmalar** |
|-----------|--------------|---------------------|-----------------|
| **Başlangıç** | 0-5 | 5-15 gün | Temel mekanik ustalığı |
| **Öğrenme** | 6-20 | 15-35 gün | Orta seviye keşifler (gün 10+) |
| **Yetkin** | 21-50 | 25-50 gün | Büyük keşifler (gün 25+) |
| **Ustalık** | 51+ | 50+ gün | Hava saldırıları (harita tamamlama) |

### 10.4 Zorluk Ölçekleme

**Zorluk Felsefesi:** "Oyuncu Ajansı ile Uyarlanabilir Zorluk" - beceri tabanlı ölçekleme ile erişilebilirlik seçenekleri.

**Harita İlerlemesi Zorluğu:**

| **Harita** | **Zombi Yoğunluğu** | **Düşman Türleri** | **Patron Sıklığı** | **Hedef** |
|---------|-------------------|----------------|-------------------|---------------|
| **Nevada (Öğrenme)** | 10-30/dalga | Seviye 1-2, nadir 3 | Her 8-12 günde bir | 50 gün hayatta kalma |
| **Kentsel (Gelişim)** | 20-45/dalga | Seviye 1-3, tanıtım 4 | Her 6-8 günde bir | 75 gün hayatta kalma |
| **Endüstriyel (Gelişmiş)** | 30-60/dalga | Seviye 2-4, tanıtım 5 | Birden fazla/dalga | Uzatılmış hayatta kalma |
| **Laboratuvar (Nihai)** | 40-80/dalga | Tüm seviyeler, odak 4-5 | Sık çoklu patron | 100 gün hayatta kalma |

**Dinamik Ölçekleme Faktörleri:**

- **Zaman Tabanlı:** +%5 zombi sağlığı/10 gün, +%3 hasar/10 gün, +1-2 dalga boyutu/5 gün

- **Performans Uyarlaması:** Başarı takibi, mücadele eden oyunculara yardım, uzmanlar için artış

- **Şeffaf Sistemler:** Görünür zorluk ayarlamaları ve net geri bildirim

**Erişilebilirlik Seçenekleri:**

| **Mod** | **Zorluk Değiştirici** | **Hedef Kitle** |
|----------|------------------------|-------------------|
| **Rahat** | -%25 düşman istatistikleri, +%25 kaynaklar | Öğrenme/erişilebilirlik |
| **Standart** | Tasarlandığı gibi dengeli | Çekirdek deneyim |
| **Zor** | +%25 düşman istatistikleri, -%10 kaynaklar | Zorluk arayanlar |
| **Uzman** | +%50 tüm zorluk sistemleri | Ustalık gösterimi |

**Denge Doğrulama:**

- **Başarı Metrikleri:** Harita tamamlama oranları (%60-80 Harita 1, %40-60 Harita 2, %20-40 Harita 3, %10-25 Harita 4)

- **Test:** İstatistiksel analiz, çeşitli oyun testçisi geri bildirimleri, yinelemeli iyileştirme, uç durum doğrulama

## 11. Oyuncu Katılımı ve Tutma

### 11.1 Başlangıç ve Eğitim

**Eğitim Felsefesi:** "Kılavuzlu Keşif ile Yaparak Öğrenme" - ilerleyici karmaşıklık tanıtımı ile gerçek oyun oynanışı yoluyla etkileşimli öğrenme.

**Eğitim Yapısı:**

| **Aşama** | **Günler** | **Temel Öğrenme** | **Anahtar Sistemler** |
|-----------|----------|------------------|-----------------|
| **Temel** | 1-3 | Temel yerleştirme, gün/gece döngüsü, kaynak toplama | Kart yerleştirme, birleştirme, savaş temelleri, güçlendirme tanıtımı |
| **Entegrasyon** | 4-7 | Gelişmiş sistemler, NPC işe alımı, uzmanlaşmış birimler | Çiftlik/nüfus, patron karşılaşmaları, çoklu kaynak yönetimi |
| **Meta Sistemler** | 8-15 | İlerleme mekanikleri, stratejik derinlik | Araştırma puanları, keşifler, yardımcı kartlar, hava saldırıları |

**Eğitim Tasarım İlkeleri:**

- **Uyarlanabilir Rehberlik:** Eğitim hızı oyuncu performansına uyum sağlar, deneyimli oyuncular için atlama seçenekleri

- **Bağlamsal Öğretim:** Mekanikler ilgili olduğunda tanıtılır, bağlamsal yardım sistemi

- **Erişilebilirlik:** Birden fazla öğrenme stili, hız kontrolü, dil desteği, engellilik konaklaması

### 11.2 Oyuncu Motivasyon Sistemleri

**Motivasyon Çerçevesi:** "Dışsal Tanıma ile İçsel Büyüme" - beceri ustalığı gelişimi ile başarı tanıma ve ilerleme görünürlüğü.

**Başarı Kategorileri:**

| **Kategori** | **Örnekler** | **Amaç** |
|--------------|-------------|-------------|
| **Hayatta Kalma Serileri** | İlk Hafta (7 gün), Kale Komutanı (50 gün), Efsanevi Hayatta Kalan (100 gün) | Kilometre taşı tanıma |
| **Savaş Ustalığı** | Zombi Katili (1,000 öldürme), Patron Avcısı (10 patron), Mükemmel Savunma (0 hasar günü) | Beceri gösterimi |
| **Ekonomik Mükemmeliyet** | Kaynak Baronu (500 Kaynak), Verimli İnşaatçı (50 birleştirme), Araştırma Öncüsü (1,000 RP) | Stratejik ustalık |
| **Anlatı İlerlemesi** | Harita Kurtarıcısı (tüm haritalar), Topluluk Kurucusu (tüm NPC'ler), Umut Getirici (aşı hikayesi) | Hikaye katılımı |

**Katılım Sistemleri:**

- **Günlük/Haftalık Zorluklar:** Belirli stratejileri öğreten dönen hedefler, Araştırma Puanları ödülleri

- **İlerleme Geri Bildirimi:** Görsel ilerleme çubukları, rozet sistemleri, kutlama animasyonları, kişisel en iyi izleme

- **Topluluk Entegrasyonu:** Strateji paylaşımı, başarı vitrinleri, geliştirici iletişimi, oyuncu spot ışıkları

### 11.3 Yeniden Oynanabilirlik ve Uzun Vadeli Katılım

**Yeniden Oynanabilirlik Mimarisi:** "Evrimleşen Zorluklarla Sonsuz Stratejik Derinlik" - birden fazla uygulanabilir yaklaşım ile karmaşık stratejik senaryolar yaratan basit sistemler.

**Stratejik Çeşitlilik Sistemleri:**

| **Yapı Türü** | **Örnekler** | **Stratejik Odak** |
|----------------|-------------|-------------------|
| **Ekonomik Odak** | Fabrika Maksimizasyonu, Araştırma Hızlandırma, Keşif Ekonomisi | Kaynak üretimi optimizasyonu |
| **Askeri Uzmanlaşma** | Elit Asker Odaklı, Sürü Savunması, Uzmanlaşmış Birimler | Savaş etkinliği |
| **Hibrit Stratejiler** | Dengeli Yaklaşım, Uyarlanabilir Strateji, Risk Yönetimi | Esnek uyum |
| **Gelişmiş Teknikler** | Hız Koşusu, Kısıtlama Zorlukları, Mükemmel Verimlilik | Ustalık gösterimi |

**İçerik Yeniden Oynanabilirliği:**

- **Harita Çeşitliliği:** Farklı taktiksel yaklaşımlar gerektiren 4 harita, strateji testi için sonsuz mod

- **NPC Kombinasyonları:** 4 tür, benzersiz sinerjilerle 15 farklı üs topluluğu yaratır

- **Araştırma Yatırımı:** 11 yükseltme ağacı ve 40+ seçenek, geniş özelleştirme olanakları yaratır

- **Beceri Gelişimi:** Mekanik ustalık, stratejik anlayış, optimizasyon zorlukları, yaratıcı problem çözme

**Tutma Psikolojisi:**

- **Yatırım Artışı:** Araştırma Puanı yatırımı, üs bağlılığı, başarı ilerlemesi, beceri gururu

- **Çeşitlilik Bakımı:** Prosedürel unsurlar, stratejik keşif, zorluk ölçekleme, denge güncellemeleri

### 11.4 Steam Lider Tabloları

**Lider Tablosu Felsefesi:** "Hayatta Kalma Mükemmeliyet Tanıması" - harita bazlı yarışmalarda stratejik ustalığı ödüllendiren günler hayatta kalma metriği.

**Lider Tablosu Sistemi:**

| **Özellik** | **Uygulama** | **Amaç** |
|-------------|-------------------|-------------|
| **Harita Bazlı Sıralamalar** | Her harita için ilk 10 + kişisel sıralama | Çeşitli stratejik yaklaşımlar |
| **Günler Hayatta Kalma Metrik** | Hayatta kalma süresine dayalı temel sıralama | Saf stratejik ölçüm |
| **Kişisel Takip** | Mevcut pozisyon, ilerleme takibi, sonraki kilometre taşları | Bireysel motivasyon |
| **Görsel Hiyerarşi** | Altın/Gümüş/Bronz ilk 3 stilizasyonu | Elit tanıma |

**Rekabetçi Motivasyon:**

- **Sıralama Teşvikleri:** İlk 10 prestiji, kişisel en iyiler, akran karşılaştırması, başarı hedefleri (İlk 1000/100/10)

- **Sonsuz Mod Entegrasyonu:** Hikaye sonrası motivasyon, optimizasyon zorlukları, uzun vadeli katılım

- **Teknik Uygulama:** Steam API entegrasyonu, gerçek zamanlı güncellemeler, veri bütünlüğü, performans optimizasyonu

## 12. Üretim Dikkatleri

### 12.1 Hedef Kitle Analizi

**Birincil Hedef Kitle - Strateji Oyunları Meraklıları (Yaş 18-35):**

| **Oyuncu Arketipi** | **Arka Plan Oyunları** | **Anahtar Beklentiler** | **City Defense Z Çekiciliği** |
|---------------------|---------------------|---------------------|---------------------------|
| **Kule Savunma Gazileri** | Bloons TD, Plants vs. Zombies, Kingdom Rush | Derin yükseltmeler, çeşitli düşmanlar, stratejik yerleştirme | Birleştirme mekanikleri tanıdık oyunlara taze bir dokunuş ekler |
| **Birleştirme Oyunu Göçmenleri** | Merge Dragons, Triple Town | Tatmin edici birleştirmeler, net ilerleme, erişilebilir öğrenme | Stratejik derinlik, sıradan mekaniklerin ötesinde |
| **Rogue-lite Meraklıları** | FTL, Risk of Rain, Dead Cells | Kalıcı yükseltmeler, zorlu oyun, tekrar oynanabilirlik | Araştırma puanı meta ilerlemesi ile stratejik derinlik |

**Platform ve Demografi:**

| **Kitle** | **Platform** | **Oturumlar** | **Harcamalar** | **Anahtar Motivasyonlar** |
|--------------|-------------|-------------|-------------|-------------------|
| **Birincil (PC)** | Steam odaklı, 3+ yıl strateji deneyimi | 1-3 saat | $10-15 premium oyunlar | Stratejik zorluk, ustalık gelişimi |
| **İkincil (Mobil)** | iOS/Android, yolculuk oyunları | 15-45 dakika | Premium satın alımlar, P2W yok | Dokunmatik optimize edilmiş, net durma noktaları |
| **Üçüncül (Tema)** | Zombi medya hayranları, çapraz tür ilgisi | Değişken | Tema odaklı | Kıyamet sonrası ortam, hayatta kalma anlatısı |

**Pazar Konumlandırma:**

- **Benzersiz Konum:** "Düşünen kişinin birleştirme oyunu" / "Bulmaca derinliği ile kule savunması"

- **Değer Önerisi:** Mikro işlemler olmadan premium strateji deneyimi

- **Pazar Boşluğu:** Anlamlı meta ilerleme ile yüksek kaliteli kule savunması

- **Genişleme:** İçerik oluşturucular, topluluk oluşturma, eğitim pazarı, uluslararası çekicilik

### 12.2 Lansman Sonrası İçerik Stratejisi

**Strateji Çerçevesi:** "Kaliteli İçerik Yoluyla Sürekli Katılım" - stratejik zamanlama ve topluluk entegrasyonu ile oyuncu öncelikli güncellemeler.

**İçerik Yayın Zaman Çizelgesi:**

| **Aşama** | **Zaman Çizelgesi** | **Öncelik Odaklı** | **Anahtar İçerik** |
|-----------|-------------|-------------------|-----------------|
| **Kararlılık** | Ay 1-2 | Hata düzeltmeleri, denge, optimizasyon | QoL iyileştirmeleri, erişilebilirlik geliştirmeleri |
| **Temel** | Ay 3-6 | Çekirdek genişleme | Harita 5, yeni zombiler, yükseltme ağaçları, başarılar |
| **Büyük Güncellemeler** | Ay 6-12 | Yeni sistemler | Mevsimsel etkinlikler, oyun modları, NPC'ler, topluluk araçları |
| **Evrim** | Yıl 2+ | Platform/içerik genişlemesi | Mobil versiyon, genişleme paketleri, teknoloji güncellemeleri |

**Pazarlama ve Topluluk Stratejisi:**

| **Kampanya Türü** | **Uygulama** | **Hedefler** |
|------------------|-------------------|-----------|
| **TikTok Viral** | "1000. günü hayatta kaldım" içeriği, influencer ortaklıkları, hashtag kampanyaları | Organik erişim, kullanıcı tarafından oluşturulan içerik |
| **Aylık Turnuvalar** | 500. gün başarısı için $1000 ödül, Twitch yayını | Topluluk oluşturma, beceri gelişimi motivasyonu |
| **Topluluk Entegrasyonu** | "Bir Zombi Ol" yarışmaları, e-posta toplama, kazanan entegrasyonu | E-posta pazarlama, topluluk galerisi, tekrar eden katılım |

**Paraya Çevirme (Etik Çerçeve):**

- **Felsefe:** Değer öncelikli yaklaşım, pay-to-win yok, tam oyun deneyimi

- **Gelir Akışları:** Genişleme paketleri, kozmetik içerik, kolaylık özellikleri, mobil platform

- **Başarı Metrikleri:** %70 tutma (1 ay), %40 tutma (6 ay), 6 ay içinde başa baş

**Uzun Vadeli Vizyon:**

- **Franchise Gelişimi:** Tanınabilir strateji oyun markası oluşturma

- **Topluluk Büyümesi:** Sürekli katılım için adanmış oyuncu topluluğu

- **Yenilik Liderliği:** Birleştirme-strateji hibrit türünde öncülük

- **Küresel Genişleme:** Uluslararası pazarlar ve çeşitli oyun platformları



</rewritten_file> 