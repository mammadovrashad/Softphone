# Softphone UI React Komponenti

Layihə React ilə hazırlanmış sadə bir softphone (software phone) istifadəçi interfeysidir. İstifadəçi mikrofon və kameranı işə salaraq zəngə başlaya, zəngi səsini bağlayıb aça və zəngi sonlandıra bilər.

## Xüsusiyyətlər

- İstifadəçinin mikrofon və kameraya giriş əldə etməsi (getUserMedia API vasitəsilə)
- Zəngin başlaması, davam etməsi və sonlandırılması
- Zəng müddətinin saniyə dəqiqə formatında sayğacla göstərilməsi
- Mikrofon səsini söndürüb yandırmaq
- Audio və video axınlarının browser-da göstərilməsi

## Texnologiyalar və Asılılıqlar

- **React 19.1.0** - Əsas frontend framework
- **TypeScript** - Type-safe development
- **Vite** - Build tool və development server
- **CSS Modules** - Scoped styling
- **classnames** - Conditional CSS class management

## Quraşdırma

### Tələblər

- Node.js (v16 və ya daha yuxarı)
- npm və ya yarn

### Quraşdırma addımları

1. Layihəni klonlayın:
```bash
git clone <repository-url>
cd ReactRTC/softphone
```

2. Lazımı paketləri quraşdırın:
```bash
npm install
# və ya
yarn install
```

3. Development serveri başladın:
```bash
npm start
# və ya
yarn start
```


## İstifadə

### Zəng başlatmaq
1. "Zəngi Başlat" düyməsinə basın
2. Browser sizdən mikrofon və kamera icazəsi istəyəcək
3. İcazə verdikdən sonra video və audio axınları başlayacaq

### Zəng idarəetməsi
- **Səsi bağla/aç**: Mikrofonu söndürmək və ya yandırmaq üçün
- **Zəngi Sonlandır**: Aktiv zəngi dayandırmaq üçün

### Zəng müddəti
Zəng başladıqdan sonra ekranda zəng müddəti dəqiqə:saniyə formatında göstəriləcək


## API istifadəsi

Layihə aşağıdakı Web API-lərindən istifadə edir:

- **getUserMedia()**: Mikrofon və kamera axınlarını əldə etmək üçün
- **MediaStream**: Audio və video axınlarını idarə etmək üçün
- **MediaTrack**: Fərdi audio/video yollarını idarə etmək üçün

## Təhlükəsizlik
- Layihə yalnız HTTPS və ya localhost-da işləyir (getUserMedia tələbi)
- İstifadəçi icazəsi tələb olunur
- Media axınları yalnız client tərəfdə işlənir

