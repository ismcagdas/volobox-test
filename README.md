# Volobox Hotels

We use AI for development of this project

Volobox Hotels, otel arama ve keşif deneyimini basit bir arayüzle gösteren bir ön yüz uygulamasıdır. Amaç, gerçek bir rezervasyon backend’i olmadan otel listesini kartlar halinde sunmak ve kullanıcıya isim, şehir, açıklama, puan ve gecelik fiyat gibi temel bilgileri tek bakışta vermektir.

Uygulama React ve Vite ile yazılmıştır. Oteller `client/src/data/hotels.js` içindeki örnek veriden okunur; henüz API veya veritabanı bağlantısı yoktur.

## Neler gösterilir?

Her otel kartında şunlar yer alır:

- Fotoğraf (yüklenemazse yedek görsel)
- Otel adı ve şehir
- Kısa açıklama
- Puan
- Gecelik fiyat

Liste, ekran genişliğine göre ızgara düzeninde açılır.

## Çalıştırma

```bash
cd client
npm install
npm run dev
```

Geliştirme sunucusu ayağa kalktıktan sonra tarayıcıda Vite’ın verdiği adresi açın.

## Proje yapısı

```
client/
  src/
    App.jsx                 # Uygulama girişi
    data/hotels.js          # Örnek otel verisi
    components/
      HotelList.jsx         # Otel listesi
      HotelCard.jsx         # Tek otel kartı
```
