# City Defense Z - Türkçe Onboarding Tutorial Sistemi

## Genel Bakış

City Defense Z için yumuşak onboarding (soft onboard) sistemi. Sağ taraftan açılan panel ile adım adım oyuncuyu oyuna alıştırma süreci.

## Onboarding Adımları

### 1. Adım: Kamera Kontrolleri
**Konum**: Oyun başladıktan sonra ilk adım  
**Panel Konumu**: Sağ taraftan kayarak gelen panel  
**Süre**: Oyuncu NEXT butonuna basana kadar

#### Panel İçeriği:
```
📷 KAMERA KONTROLU

City Defense Z'ye hoş geldin! 

Kamerayı kontrol etmeyi öğrenelim:

🎮 WASD tuşları ile kamerayı hareket ettir
🖱️ Orta fare tuşunu (scroll) basılı tutarak etrafına bak

[GIF 1: WASD ile kamera hareketi]
[GIF 2: Orta fare tuşu ile kamera döndürme]

Kamerayı hareket ettirmeyi dene!

[NEXT BUTONU]
```

#### Teknik Notlar:
- Panel sağ taraftan slide animasyonu ile gelir
- GIF'ler otomatik loop olur
- NEXT butonuna basılana kadar panel açık kalır

---

### 2. Adım: Bina Yerleştirme
**Konum**: Kamera building grid alanına odaklanır  
**Panel Konumu**: Sağ panel güncellenir  
**Etkileşim**: Building cards pop-up olur

#### Panel İçeriği:
```
🏗️ BİNA YERLEŞTİRME

Şimdi base'ini inşa etmeyi öğren!

Kartlardan birini seç ve grid'e yerleştir:

[GIF: Fare ile kart seçme ve grid'e yerleştirme]

🏭 Fabrika (Sarı)
Kaynak üretir. Temel inşaat malzemesi.

🔫 Mühimmat Deposu (Yeşil)  
Silah ve mermi üretir. Askerler için gerekli.

🏠 Ev (Gri)
Nüfus kapasitesi sağlar. İşçiler için gerekli.

🔬 Laboratuvar (Mavi)
Araştırma puanı üretir. Kalıcı yükseltmeler için.

⚔️ Kışla (Turuncu)
Asker üretir. Savunman için gerekli.

[NEXT BUTONU BİNA YERLEŞTİRMEDEN BASILAMAZ] 
```

#### Teknik Notlar:
- Kamera otomatik olarak building grid'e odaklanır
- Building cards pop-up animasyonu ile açılır
- Oyuncu herhangi bir bina yerleştirebilir

---

### 3. Adım: Asker Yerleştirme
**Konum**: Kamera unit placement grid'ine odaklanır  
**Panel Konumu**: Sağ panel güncellenir  
**UI Değişikliği**: Units panel sol altta açılır (ilk kez)

#### Panel İçeriği:
```
⚔️ ASKERLERİNİ YERLEŞTİR

Savunma zamanı! Askerlerini yerleştir.

Sol alttaki Units panelini kullan:

[GIF: Units panelinden asker seçme ve yerleştirme]
[GIF: Mine satın alma ve yerleştirme]

1️⃣ Soldierları grid'e yerleştir
2️⃣ "Buy" ile mine satın al  
3️⃣ Mine'ları stratejik noktalara koy

⚠️ Tüm temel askerlerin yerleştirilmesi gerekli!

[NEXT BUTONU - İNAKTİF]
```

#### Teknik Notlar:
- Units panel bu adımda ilk kez açılır
- NEXT butonu tüm basic soldier'lar yerleştirilene kadar inaktif
- Oyuncu tüm başlangıç askerlerini yerleştirmeli
- Mine satın alma ve yerleştirme gösterilir

---

### 4. Adım: Günü Bitirme
**Konum**: Mevcut konum  
**Panel Konumu**: Sağ panel güncellenir  
**Etkileşim**: "End Day" butonuna odaklama

#### Panel İçeriği:
```
🌙 GECEYİ BAŞLAT

Hazırlıkların tamam! Şimdi geceyi başlat.

"End Day" butonuna tıkla:

[GIF: End Day butonuna tıklama]

Zombiler gelecek! Savunman hazır mı?

[NEXT BUTONU]
```

#### Teknik Notlar:
- "End Day" butonuna highlight/glow efekti
- GIF End Day butonuna tıklamayı gösterir
- Bu adımdan sonra gece savaşı başlar ve otomatik olarak 5. adıma geçer

---

### 5. Adım: Gece Savaşı
**Konum**: Kamera war grid pozisyonuna odaklanır  
**Panel Konumu**: Sağ panel güncellenir  
**Tetikleyici**: Gece başladıktan sonra otomatik  
**Süre**: 120 saniye gece süresi boyunca

#### Panel İçeriği:
```
⚔️ GECE SAVAŞI

Zombiler geldi! Savaş başladı!

⏰ 120 saniye hayatta kal veya tüm zombileri öldür!

Gece savaşında:
• Zombiler dalgalar halinde gelir
• Askerler otomatik savaşır  
• Boost'ları toplamayı unutma!

✈️ HAVA DESTEĞİ:
Kalabalık zombie bölgelerine hava desteği kullan!

[GIF: Airstrike kullanımı - zombilere hava saldırısı]

• Gecede maksimum 2 hava desteği kullanabilirsin
• Crowded zombie gruplarına kullan
• Büyük hasar verir!

[NEXT BUTONU - basılabilir ]
```

#### Teknik Notlar:
- Kamera otomatik olarak war grid'e odaklanır
- Zombiler spawn olmaya başlar
- NEXT butonu 120 saniye sonra veya tüm zombiler öldükten sonra aktif olur
- Airstrike kullanımı GIF ile gösterilir
- Panel gece boyunca açık kalır

---

### 6. Adım: Kaynak Toplama
**Konum**: Kamera building grid'deki yerleştirilmiş binaya odaklanır  
**Panel Konumu**: Sağ panel güncellenir  
**Etkileşim**: Binadan kaynak toplama zorunlu

#### Panel İçeriği:
```
💰 KAYNAK TOPLAMA

Gece bitti! Şimdi kaynaklarını topla.

Binalardan kaynak toplamayı öğren:

[GIF: Binaya tıklayarak kaynak toplama]

• Binalar sürekli kaynak üretir
• Kaynak simgesi belirdiğinde binaya tıkla
• Kaynakları toplamayı unutma!

⚠️ Bir binadan kaynak toplaman gerekli!

[NEXT BUTONU - İNAKTİF]
```

#### Teknik Notlar:
- Kamera yerleştirilmiş bir binaya odaklanır
- Oyuncu binaya tıklayarak kaynak toplamak zorunda
- NEXT butonu kaynak toplanana kadar inaktif
- Kaynak toplama animasyonu vurgulanır

---

### 7. Adım: Çiftlik Yönetimi
**Konum**: Kamera farm alanına odaklanır  
**Panel Konumu**: Sağ panel güncellenir  
**Etkileşim**: Mahsul toplama zorunlu

#### Panel İçeriği:
```
🌾 ÇİFTLİK YÖNETİMİ

Son adım! Çiftlik alanını öğren.

Yiyecek kaynağın çok önemli:

[GIF: Mahsullara tıklayarak yiyecek toplama]

• Mahsullere tıklayarak yiyecek topla
• Yiyecek olmadan AÇLIK debuff'ı alırsın!
• AÇLIK askerlerin hasarını azaltır

⚠️ Savaş yeteneğin etkilenir, dikkatli ol!

Mahsullardan yiyecek toplaman gerekli:

[NEXT BUTONU - İNAKTİF]
```

#### Teknik Notlar:
- Kamera farm alanına odaklanır
- Oyuncu mahsullara tıklayarak yiyecek toplamak zorunda
- NEXT butonu yiyecek toplanana kadar inaktif
- HUNGER debuff'ının önemi vurgulanır
- Bu son tutorial adımı

---

### 8. Adım: Game Over Sonrası - Meta Upgrades
**Tetikleyici**: İlk kez Game Over ekranı görüldüğünde  
**Konum**: Game Over ekranında  
**Panel Konumu**: Sağ panel açılır

#### Panel İçeriği:
```
📈 META YÜKSELTMELERİ

Üzülme! Ölüm de öğrenmenin bir parçası.

"Continue to Meta Upgrades" butonuna tıkla:

[GIF: Meta upgrades butonuna tıklama]

Araştırma puanlarını burada harca:

🔬 Kalıcı yükseltmeler
🏗️ Daha güçlü binalar
⚔️ Daha iyi askerler
🎯 Yeni yetenekler

Her ölümde daha güçlü ol!

[NEXT BUTONU]
```

#### Teknik Notlar:
- Bu sadece ilk Game Over'da tetiklenir
- "Continue to Meta Upgrades" butonuna highlight
- Meta upgrade sisteminin önemini vurgular

---

### 9. Adım: Ana Menü - Permanent Upgrades
**Tetikleyici**: Ana menüye dönüş sonrası  
**Konum**: Save slots ekranında  
**Panel Konumu**: Sağ panel açılır

#### Panel İçeriği:
```
🔧 KALİCİ YÜKSELTMELER

Bir bonus bilgi daha!

Save slot'larının yanındaki "Permanent Upgrades" butonunu gör:

[GIF: Permanent upgrades butonunu gösterme]

Buradan da kalıcı yükseltmelere erişebilirsin:

• Oyun içi meta upgrades
• Ana menüden permanent upgrades
• İkisi de aynı sistem!

Artık hazırsın! İyi şanslar!

[KAPAT BUTONU]
```

#### Teknik Notlar:
- Ana menüye dönüşte tetiklenir
- Permanent upgrades butonuna işaret
- Son adım olarak onboarding'i tamamlar

---

## Teknik Özellikler

### Panel Sistemi
- **Konum**: Ekranın sağ tarafından slide animasyonu
- **Genişlik**: Ekranın %30-35'i
- **Arka Plan**: Semi-transparent overlay
- **Animasyon**: Smooth slide-in/slide-out

### GIF Entegrasyonu
- **Format**: Looped GIF animasyonları
- **Boyut**: 300x200 piksel önerilen
- **Kalite**: Oyun UI'ına uygun çözünürlük
- **İçerik**: Her adım için spesifik etkileşimler

### Buton Durumları
- **NEXT**: Varsayılan aktif, bazı adımlarda koşullu
- **KAPAT**: Sadece son adımda
- **Highlight**: Önemli UI elementlerinde glow efekti

### Koşullu Mantık
- **Adım 3**: Tüm basic soldier yerleştirilene kadar NEXT inaktif
- **Adım 5**: Sadece ilk Game Over'da tetiklenir
- **Adım 6**: Ana menü dönüşünde bir kez gösterilir

### Çoklu Dil Desteği
- Tüm metinler localization key'leri ile
- Türkçe karakterler destekli
- Marketing terimleri İngilizce kalabilir (örn: "HOOK")

---

## Uygulama Notları

### Oyuncu Deneyimi
- **Kesintisiz**: Oyun devam ederken öğretim
- **İsteğe Bağlı**: Her adımda atlama seçeneği
- **Görsel**: Metin yerine GIF ağırlıklı öğretim

### Performans
- GIF'ler lazy loading ile yüklenir
- Panel sadece gerektiğinde render edilir
- Animasyonlar GPU accelerated

### Test Senaryoları
- Yeni oyuncu deneyimi testi
- Her adımın doğru tetiklenmesi
- UI elementlerinin doğru highlight'ı
- GIF'lerin düzgün çalışması

Bu onboarding sistemi oyuncuların City Defense Z'yi kolayca öğrenmesini ve oyunun temel mekaniklerini kavramasını sağlayacaktır.
