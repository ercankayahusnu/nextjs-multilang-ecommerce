<h1>🛒 Next.js MultiLang E-Commerce </h1>

<table>
  <tr>
    <th>📌 Proje Hakkında</th>
    <td>
      Bu proje <b>Next.js 14+ (App Router)</b> kullanılarak geliştirilmiş SEO dostu bir e-ticaret uygulamasıdır.<br/>
      Veriler <a href="https://fakestoreapi.com/">Fake Store API</a> üzerinden çekilmektedir.
      <ul>
        <li><b>Ana Sayfa</b> → Öne çıkan ilk 4 ürün</li>
        <li><b>Ürün Listesi</b> → Kategori & fiyat filtresi, sıralama</li>
        <li><b>Ürün Detay</b> → Görsel, fiyat, açıklama, "Sepete Ekle"</li>
        <li><b>Sepet</b> → Sepet yönetimi (ürün adedi, silme, toplam fiyat)</li>
      </ul>
    </td>
  </tr>
</table>

<h2>🚀 Kullanılan Teknolojiler</h2>
<table>
  <tr><th>Teknoloji</th><th>Açıklama</th></tr>
  <tr><td><b>Next.js 14+ (App Router)</b></td><td>SSR/ISR ile SEO uyumlu sayfalar</td></tr>
  <tr><td><b>TypeScript</b></td><td>Tip güvenliği</td></tr>
  <tr><td><b>Tailwind CSS</b></td><td>Responsive ve modern UI</td></tr>
  <tr><td><b>Redux Toolkit (RTK)</b></td><td>Sepet state yönetimi</td></tr>
</table>

<h2>📂 Proje Yapısı</h2>
<table>
  <tr><th>Klasör</th><th>Açıklama</th></tr>
  <tr><td><b>app/</b></td><td>Ana sayfa, ürün listesi, ürün detay, sepet</td></tr>
  <tr><td><b>components/</b></td><td>Reusable UI bileşenleri (Card, Button, Layout)</td></tr>
  <tr><td><b>Store/</b></td><td>Redux slice’ları (cart vs.)</td></tr>
</table>

<h2>⚙️ Kurulum ve Çalıştırma</h2>
<table>
  <tr><th>Adım</th><th>Komut</th></tr>
  <tr>
    <td>Projeyi klonla</td>
    <td><code>git clone &lt;repo-url&gt; && cd nextjs-multilang-ecommerce</code></td>
  </tr>
  <tr>
    <td>Bağımlılıkları yükle</td>
    <td><code>npm install</code></td>
  </tr>
  <tr>
    <td>Dev modda çalıştır</td>
    <td><code>npm run dev</code> → <a href="http://localhost:3000">http://localhost:3000</a></td>
  </tr>
</table>

<h2>✅ Özellikler</h2>
<table>
  <tr><th>Özellik</th><th>Açıklama</th></tr>
  <tr><td>Çok Dilli</td><td>Türkçe & İngilizce destek</td></tr>
  <tr><td>Ürün Listeleme</td><td>Kategori ve fiyat filtresi, sıralama</td></tr>
  <tr><td>Ürün Detayı</td><td>Görsel, açıklama, fiyat, kategori</td></tr>
  <tr><td>Sepet Yönetimi</td><td>Adet güncelleme, silme, toplam fiyat</td></tr>
  <tr><td>SEO Optimizasyonu</td><td>Dinamik meta tag, SSR/ISR</td></tr>
  <tr><td>Performans</td><td>Lazy load (next/image), ISR ile cache</td></tr>
</table>

<h2>👨‍💻 Geliştirici</h2>
<table>
  <tr>
    <th>Branch Yapısı</th>
    <td>
      <ul>
        <li><b>dev/v1.0.0</b> → Geliştirme branch’i</li>
        <li><b>prod/v1.0.0</b> → Yayın branch’i</li>
      </ul>
    </td>
  </tr>
</table>
