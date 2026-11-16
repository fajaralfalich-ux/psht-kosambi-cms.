import React, { useState } from 'react';
import kiHadjarPhoto from '/ki hajar.jpg';
import soeroPhoto from '/ki soero.jpg';
import soetomoPhoto from '/soetomo.jpg';
import imamPhoto from '/r.m imam.jpg';

export default function Sejarah() {
  const [selectedTokoh, setSelectedTokoh] = useState(null);

  const tokohData = {
    kiSoero: {
      nama: "KI NGABEHI SOERODIWIRJO",
      foto: soeroPhoto,
      deskripsiLengkap: `Ki Ngabehi Soerodiwiryo atau yang dikenal dengan sebutan Eyang Suro merupakan salah satu tokoh penting dalam sejarah lahirnya Persaudaraan Setia Hati Terate (PSHT). Beliau dikenal sebagai pendiri Persaudaraan Setia Hati yang menjadi akar sejarah dan sumber ajaran pencak silat PSHT. Nama kecil beliau adalah Muhammad Masdan. Menurut salah satu riwayat, beliau lahir pada tahun 1876 di Surabaya, Jawa Timur. Sejak muda, beliau memiliki ketertarikan terhadap ilmu pencak silat dan berusaha mempelajari berbagai aliran bela diri dari sejumlah guru di berbagai daerah.\n\nDalam perjalanan hidupnya, beliau pernah mempelajari ilmu pencak silat di wilayah Bandung, Jakarta, Lampung, Padang, dan Aceh. Berbagai ilmu dan pengalaman yang diperolehnya kemudian dikembangkan menjadi sebuah ajaran pencak silat yang memiliki ciri khas tersendiri. Pada tahun 1903, beliau mendirikan perkumpulan yang dikenal dengan nama Sedulur Tunggal Kecer (STK). Perkumpulan ini menjadi salah satu tonggak awal perkembangan ajaran Setia Hati. Selanjutnya, pada tahun 1917, beliau mendirikan Persaudaraan Setia Hati di Desa Winongo, Madiun, Jawa Timur.\n\nAjaran Setia Hati tidak hanya mengajarkan kemampuan bela diri, tetapi juga menanamkan nilai-nilai persaudaraan, kesetiaan, pengendalian diri, dan budi pekerti luhur. Salah satu murid beliau yang memiliki peranan besar dalam sejarah PSHT adalah Ki Hadjar Hardjo Oetomo. Setelah mempelajari ilmu dan ajaran Setia Hati, Ki Hadjar Hardjo Oetomo memiliki keinginan untuk mengembangkan pencak silat sebagai sarana pendidikan dan perjuangan bagi para pemuda Indonesia. Kemudian, pada tanggal 1 September 1922, beliau merintis organisasi Setia Hati Pencak Sport Club (SH PSC) di Pilangbango, Madiun, yang menjadi cikal bakal Persaudaraan Setia Hati Terate.\n\nDengan demikian, Ki Ngabehi Soerodiwiryo merupakan tokoh yang meletakkan dasar ajaran Setia Hati, sedangkan Ki Hadjar Hardjo Oetomo merupakan pendiri dan perintis organisasi yang menjadi cikal bakal PSHT. Ki Ngabehi Soerodiwiryo wafat pada tanggal 10 November 1944 di Madiun, Jawa Timur. Meskipun beliau telah wafat, ajaran dan nilai-nilai yang diwariskannya tetap menjadi bagian penting dalam perjalanan sejarah PSHT. Oleh karena itu, nama Ki Ngabehi Soerodiwiryo tidak dapat dipisahkan dari sejarah PSHT karena ajaran Setia Hati yang dikembangkannya menjadi salah satu dasar perjalanan lahir dan berkembangnya Persaudaraan Setia Hati Terate.\n\nInti yang perlu dipahami: Ki Ngabehi Soerodiwiryo adalah pendiri Setia Hati, sedangkan Ki Hadjar Hardjo Oetomo adalah tokoh yang merintis cikal bakal PSHT pada tahun 1922.`
    },
    kiHadjar: {
      nama: "KI HADJAR HARDJO OETOMO",
      foto: kiHadjarPhoto,
      deskripsiLengkap: `Ki Hadjar Hardjo Oetomo merupakan tokoh utama dan pendiri organisasi yang menjadi cikal bakal Persaudaraan Setia Hati Terate (PSHT). Beliau dikenal sebagai seorang pendekar pencak silat sekaligus pejuang perintis kemerdekaan Republik Indonesia yang berasal dari Madiun, Jawa Timur. Menurut riwayat yang dimuat di situs resmi PSHT, beliau lahir di Winongo, Madiun, pada tahun 1883. Sejak kecil hingga remaja, beliau tinggal di daerah Madiun dan menjalani kehidupan dengan berbagai pengalaman yang membentuk kepribadiannya. Sebelum dikenal sebagai tokoh pencak silat, beliau pernah bekerja sebagai tenaga magang guru di SD Banteng Madiun. Setelah itu, beliau bekerja di lingkungan perusahaan kereta api Staatsspoorwegen (SS), kemudian menjadi mantri pasar di wilayah Mlilir, Madiun, dan pernah bekerja di Pabrik Gula Redjo Agung. Pada tahun 1917, Ki Hadjar Hardjo Oetomo mulai bergabung menjadi saudara Persaudaraan Setia Hati dan mendapatkan pengesahan langsung atau dikecer oleh Ki Ngabehi Soerodiwiryo, yang dikenal sebagai Eyang Suro. Dari sinilah beliau mulai mendalami ilmu pencak silat dan ajaran Setia Hati. Selain mempelajari pencak silat, beliau juga memiliki semangat perjuangan yang tinggi terhadap bangsa Indonesia. Beliau aktif dalam pergerakan kebangsaan dan tercatat bergabung dengan organisasi Boedi Oetomo serta Sarekat Islam. Melalui pengalaman tersebut, beliau memiliki pemikiran bahwa pencak silat dapat dijadikan sebagai sarana pendidikan, pembentukan mental, serta perjuangan untuk melawan penjajahan Belanda. Pada tanggal 1 September 1922, Ki Hadjar Hardjo Oetomo mendirikan organisasi bernama Setia Hati Pencak Sport Club (SH PSC) di Desa Pilangbango, Madiun, Jawa Timur. Organisasi ini merupakan cikal bakal berdirinya Persaudaraan Setia Hati Terate. Tujuan pendiriannya adalah memberikan pendidikan pencak silat kepada para pemuda agar memiliki keberanian, kedisiplinan, kekuatan fisik, mental, dan semangat perjuangan. Pada masa penjajahan Belanda, kegiatan SH PSC dianggap membahayakan pemerintah kolonial karena berkaitan dengan pergerakan pemuda dan semangat perlawanan. Pada tahun 1925, Ki Hadjar Hardjo Oetomo ditangkap oleh pemerintah Belanda dan dipenjara di Cipinang, kemudian dipindahkan ke Padang, Sumatra Barat. Organisasi SH PSC juga mendapat tekanan dan pembubaran dari pemerintah kolonial. Namun, setelah kembali dari masa tahanan, beliau berusaha mengaktifkan kembali kegiatan perguruannya. Untuk menghindari kecurigaan pemerintah Belanda, istilah Pencak Sport Club kemudian disesuaikan menjadi Pemuda Sport Club, sehingga dikenal dengan nama SH PSC. Perjuangan beliau tidak hanya dilakukan melalui pencak silat, tetapi juga melalui pendidikan dan kegiatan sosial. Beliau mendirikan perkumpulan Harta Djaja yang bertujuan membantu masyarakat agar tidak terjerat praktik lintah darat. Setelah Indonesia merdeka, perkembangan perguruan Setia Hati Terate terus dilanjutkan oleh para murid dan saudara seperguruannya. Pada tahun 1948, para tokoh seperti R.M. Soetomo Mangkoedjojo dan Darsono mulai melakukan pembaruan organisasi agar perguruan berkembang menjadi organisasi persaudaraan yang lebih terstruktur. Selanjutnya, pada 25 Maret 1951, dalam kongres pertama di Madiun, nama Persaudaraan Setia Hati Terate ditetapkan sebagai nama organisasi. Ki Hadjar Hardjo Oetomo wafat pada tanggal 13 April 1952 dan dimakamkan di Desa Pilangbango, Madiun. Atas jasa-jasanya dalam perjuangan melawan penjajahan, beliau mendapatkan penghargaan sebagai Pahlawan Perintis Kemerdekaan Republik Indonesia pada tahun 1952. Dengan demikian, Ki Hadjar Hardjo Oetomo merupakan tokoh yang memiliki jasa besar dalam sejarah PSHT karena beliau merintis organisasi pencak silat pada tahun 1922 yang kemudian berkembang menjadi Persaudaraan Setia Hati Terate seperti yang dikenal hingga sekarang.`
    },
    soetomo: {
      nama: "R.M. SOETOMO MANGKOEDJOJO",
      foto: soetomoPhoto,
      deskripsiLengkap: `R.M. Soetomo Mangkoedjojo merupakan salah satu tokoh penting dalam sejarah perkembangan Persaudaraan Setia Hati Terate (PSHT). Beliau adalah murid langsung Ki Hadjar Hardjo Oetomo, pendiri PSHT, dan memiliki peranan besar dalam mengembangkan perguruan menjadi organisasi persaudaraan yang lebih terstruktur. Beliau dikenal sebagai pendekar tingkat III yang memiliki pengabdian besar terhadap perkembangan PSHT.\n\nPada tahun 1928, R.M. Soetomo Mangkoedjojo disahkan menjadi pendekar tingkat I oleh Ki Hadjar Hardjo Oetomo. Pengesahan tersebut dilaksanakan di kediaman Ki Hadjar Hardjo Oetomo di Desa Pilangbango, Madiun. Pada masa itu, beliau bersama beberapa murid lainnya, seperti Hardjosajano atau Hardjo Girin dan Moch. Irsad, menjadi bagian dari generasi awal murid yang mendapatkan pengesahan langsung dari pendiri PSHT.\n\nSetelah mendapatkan kepercayaan dan pengalaman dalam mengembangkan ilmu Setia Hati, pada tahun 1936 R.M. Soetomo Mangkoedjojo mendirikan PSHT Cabang Ponorogo. Pendirian cabang tersebut merupakan salah satu langkah penting dalam memperluas perkembangan PSHT ke luar wilayah Madiun. Pengesahan warga pertama di cabang Ponorogo dilaksanakan pada tahun 1938 dengan jumlah empat orang. Hal tersebut menunjukkan bahwa beliau tidak hanya mengembangkan ilmu pencak silat, tetapi juga berusaha memperluas persaudaraan dan melahirkan generasi penerus PSHT.\n\nPada tahun 1948, R.M. Soetomo Mangkoedjojo bersama Darsono dan beberapa saudara seperguruan lainnya memiliki prakarsa untuk mengadakan konferensi di kediaman Ki Hadjar Hardjo Oetomo, Madiun. Konferensi tersebut bertujuan mengubah bentuk perguruan yang sebelumnya lebih berfokus pada kegiatan pencak silat menjadi organisasi persaudaraan yang memiliki Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART). Perubahan ini merupakan langkah penting dalam perjalanan PSHT karena organisasi mulai memiliki sistem kepengurusan dan aturan yang lebih jelas. Dalam proses tersebut, R.M. Soetomo Mangkoedjojo terpilih menjadi Ketua Umum Pusat pertama setelah perubahan organisasi, sedangkan Darsono dipercaya menjadi wakil ketua.\n\nPada tahun 1953, karena pekerjaan beliau dipindah tugaskan ke Surabaya, kepemimpinan PSHT kemudian diserahkan kepada M. Irsad. Meskipun demikian, pengabdian R.M. Soetomo Mangkoedjojo terhadap PSHT tetap berlanjut. Beliau kembali memegang tanggung jawab kepemimpinan organisasi pada periode berikutnya. Dalam perjalanan organisasi, beliau tercatat kembali menjabat sebagai Ketua Umum Pusat dan kemudian menjadi Ketua Dewan Pusat.\n\nPeranan beliau juga sangat besar dalam membimbing generasi penerus PSHT, khususnya R.M. Imam Koesoepangat. Pada tahun 1958, R.M. Soetomo Mangkoedjojo mengesahkan R.M. Imam Koesoepangat, Kuswanto, dan Harsanto sebagai warga tingkat I. Selanjutnya, beliau membimbing R.M. Imam Koesoepangat dalam pendidikan tingkat II pada tahun 1963 hingga disahkan pada tahun 1964. Pada tahun 1966, R.M. Imam Koesoepangat mulai menjalani pendidikan tingkat III di bawah bimbingan langsung R.M. Soetomo Mangkoedjojo. Hubungan guru dan murid tersebut menjadi bagian penting dalam kesinambungan ajaran Setia Hati Terate.\n\nPada Musyawarah Besar PSHT tahun 1974, R.M. Soetomo Mangkoedjojo dipercaya menjadi Ketua Dewan Pusat, sedangkan R.M. Imam Koesoepangat diangkat menjadi Ketua Umum Pusat. Keputusan tersebut menjadi bagian dari proses regenerasi kepemimpinan agar perkembangan organisasi dan ajaran PSHT dapat terus dilanjutkan oleh generasi berikutnya.\n\nR.M. Soetomo Mangkoedjojo wafat pada tanggal 14 Desember 1975 dan dimakamkan di Makam Cangkring, Madiun, Jawa Timur. Beliau meninggalkan jasa besar bagi PSHT, terutama dalam membangun organisasi, memperluas cabang, menjaga ajaran persaudaraan, serta membimbing para penerusnya. Oleh karena itu, beliau dikenang sebagai salah satu tokoh penting yang berperan dalam perkembangan PSHT dari sebuah perguruan pencak silat menjadi organisasi persaudaraan yang lebih terstruktur.`
    },
    imam: {
      nama: "R.M. IMAM KOESOPANGAT",
      foto: imamPhoto,
      deskripsiLengkap: `R.M. Imam Koesoepangat merupakan salah satu tokoh penting dalam sejarah Persaudaraan Setia Hati Terate (PSHT). Beliau dikenal dengan julukan “Penditho Wesi Kuning” dan memiliki peran besar dalam mengembangkan PSHT, terutama dalam bidang kerohanian, budi pekerti, dan kepemimpinan. R.M. Imam Koesoepangat lahir di Madiun pada tahun 1938 dari pasangan Raden Ayu Koesmiyatoen dan R.M. Ambar Koessensi. Sejak kecil, beliau telah mendapatkan pendidikan mengenai tata krama, penghormatan kepada orang tua, ketakwaan kepada Tuhan Yang Maha Esa, serta nilai-nilai budi luhur dari keluarganya. Ketertarikannya terhadap ilmu pencak silat dan kebatinan kemudian membawanya untuk bergabung dengan PSHT ketika masih berusia sekitar 16 tahun. Beliau belajar pencak silat di bawah bimbingan Mas Irsyad, yang merupakan murid Ki Hadjar Hardjo Oetomo. Setelah menjalani proses latihan dan pendidikan, pada tahun 1959 beliau dinyatakan lulus dan memperoleh gelar Pendekar Tingkat I.\n\nPerjalanan R.M. Imam Koesoepangat di PSHT tidak berhenti setelah memperoleh gelar pendekar. Berkat pengalaman, ketekunan, dan pengabdiannya, beliau kemudian dipercaya menjadi Ketua Pusat PSHT pada tahun 1974 hingga 1977, menggantikan R.M. Soetomo Mangkoedjojo. Pada masa kepemimpinannya, beliau turut memperkuat PSHT sebagai organisasi yang tidak hanya mengajarkan ilmu bela diri, tetapi juga menanamkan nilai persaudaraan, kerohanian, kedisiplinan, dan budi luhur. Beliau mengajarkan bahwa tujuan belajar pencak silat bukan semata-mata untuk menjadi kuat atau mengalahkan orang lain, melainkan untuk membentuk manusia yang mampu mengendalikan diri, menghormati sesama, dan mengamalkan kebaikan dalam kehidupan sehari-hari. Salah satu falsafah beliau yang sangat dikenal adalah “Sepiro gedhening sengsoro yen tinompo amung dadi cobo”, yang berarti sebesar apa pun penderitaan apabila diterima dengan ikhlas, semuanya hanyalah cobaan. Setelah masa kepemimpinannya sebagai Ketua Pusat, beliau tetap mengabdikan diri kepada PSHT dan kemudian dipercaya menjadi Ketua Dewan Pusat. Bersama tokoh-tokoh lainnya, termasuk H. Tarmadji Boedi Harsono, beliau turut berperan dalam perkembangan PSHT pada masa berikutnya. R.M. Imam Koesoepangat dikenal sebagai sosok sederhana, teguh pendirian, menghormati orang tua, dan memiliki kecintaan yang besar terhadap persaudaraan. Beliau wafat pada tahun 1988, tetapi ajaran, nasihat, dan pengabdiannya tetap menjadi bagian penting dari sejarah PSHT.\n\nKesimpulannya, R.M. Imam Koesoepangat merupakan tokoh penting yang mewariskan nilai-nilai kerohanian dan budi luhur dalam PSHT. Julukan Pendhita Wesi Kuning menggambarkan sosok yang teguh, berwibawa, dan mengabdikan hidupnya untuk persaudaraan.`
    }
  };

  if (selectedTokoh) {
    const data = tokohData[selectedTokoh];
    return (
      <div style={styles.detailContainer}>
        <button onClick={() => setSelectedTokoh(null)} style={styles.backButton}>
          &larr; Kembali ke Daftar Tokoh
        </button>
        <div style={styles.detailContentBox}>
          <h1 style={styles.detailTitle}>{data.nama}</h1>
          
          <div style={styles.detailImageBox}>
            <img src={data.foto} alt={data.nama} style={styles.detailImg} />
          </div>

          <div style={styles.detailTextWrapper}>
            <p style={styles.detailText}>{data.deskripsiLengkap}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.pageContainer}>
      <style>{`
        .card-hover {
          transition: all 0.25s ease-in-out;
          border: 1px solid #1e293b;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          border-color: rgba(194, 65, 12, 0.6) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
      `}</style>

      {/* Header Sejarah */}
      <div style={styles.headerBox}>
        <span style={styles.tag}>SEJARAH PERJUANGAN</span>
        <h1 style={styles.title}>Sejarah Singkat Berdirinya PSHT</h1>
        <p style={styles.subtitle}>
          Mengenal akar perjuangan, tokoh pendiri, serta perjalanan panjang Persaudaraan Setia Hati Terate dari masa ke masa.
        </p>
      </div>

      {/* Bagian Tokoh Utama di Atas (Tengah) */}
      <div style={styles.topCardWrapper}>
        <div style={styles.cardMain} className="card-hover">
          <div style={styles.imageBox}>
            <img src={soeroPhoto} alt="Ki Ngabehi Soerodiwiryo" style={styles.tokohImg} />
          </div>
          <h3 style={styles.cardTitle}>Ki Ngabehi Soerodiwiryo</h3>
          <p style={styles.cardText}>
            Ki Ngabehi Soerodiwiryo (Eyang Suro) adalah pendiri ajaran Ilmu Setia Hati (SH)...
          </p>
          <div style={styles.btnWrapper}>
            <button onClick={() => setSelectedTokoh('kiSoero')} style={styles.btnRed}>
              Baca selengkapnya
            </button>
          </div>
        </div>
      </div>

      {/* Bagian 3 Kotak Tokoh di Bawah */}
      <div style={styles.contentGrid}>
        {/* Tokoh 1: Ki Hadjar */}
        <div style={styles.card} className="card-hover">
          <div style={styles.imageBox}>
            <img src={kiHadjarPhoto} alt="Ki Hadjar Hardjo Oetomo" style={styles.tokohImg} />
          </div>
          <h3 style={styles.cardTitle}>Ki Hadjar Hardjo Oetomo</h3>
          <p style={styles.cardText}>
            Ki Hadjar Hardjo Oetomo Lahir di Winongo, Kota Madiun, Jawa Timur, Tahun 1883...
          </p>
          <div style={styles.btnWrapper}>
            <button onClick={() => setSelectedTokoh('kiHadjar')} style={styles.btnRed}>
              Baca selengkapnya
            </button>
          </div>
        </div>

        {/* Tokoh 2: Soetomo */}
        <div style={styles.card} className="card-hover">
          <div style={styles.imageBox}>
            <img src={soetomoPhoto} alt="R.M. Soetomo Mangkoedjojo" style={styles.tokohImg} />
          </div>
          <h3 style={styles.cardTitle}>R.M. Soetomo Mangkoedjojo</h3>
          <p style={styles.cardText}>
            Merupakan tokoh penting yang memiliki jasa besar dalam perjalanan sejarah PSHT...
          </p>
          <div style={styles.btnWrapper}>
            <button onClick={() => setSelectedTokoh('soetomo')} style={styles.btnRed}>
              Baca selengkapnya
            </button>
          </div>
        </div>

        {/* Tokoh 3: Imam Koesoepangat */}
        <div style={styles.card} className="card-hover">
          <div style={styles.imageBox}>
            <img src={imamPhoto} alt="R.M. Imam Koesoepangat" style={styles.tokohImg} />
          </div>
          <h3 style={styles.cardTitle}>RM. Imam Koesoepangat</h3>
          <p style={styles.cardText}>
            R.M. Imam Koesoepangat lahir di Madiun pada 18 November 1938 dan dikenal dengan julukan...
          </p>
          <div style={styles.btnWrapper}>
            <button onClick={() => setSelectedTokoh('imam')} style={styles.btnRed}>
              Baca selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: { 
    padding: '6rem 4rem', 
    width: '100%', 
    boxSizing: 'border-box',
    backgroundColor: '#070f1e',
    minHeight: 'calc(100vh - 80px)'
  },
  headerBox: { marginBottom: '3.5rem', textAlign: 'center', maxWidth: '1400px', margin: '0 auto 3.5rem auto' },
  tag: { color: '#c2410c', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block', letterSpacing: '0.5px' },
  title: { fontSize: '2.8rem', color: '#ffffff', fontWeight: '800', marginBottom: '0.75rem', textAlign: 'center' },
  subtitle: { color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto', textAlign: 'center' },
  
  topCardWrapper: { display: 'flex', justifyContent: 'center', marginBottom: '2.5rem', maxWidth: '1400px', margin: '0 auto 2.5rem auto' },
  cardMain: { background: '#0e1d32', borderRadius: '20px', padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', maxWidth: '420px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' },

  contentGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', maxWidth: '1400px', margin: '0 auto', width: '100%' },
  card: { background: '#0e1d32', borderRadius: '20px', padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' },
  imageBox: { width: '100%', height: '220px', borderRadius: '14px', overflow: 'hidden', border: '1px solid #1e293b', marginBottom: '1.5rem', backgroundColor: '#070f1e', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  tokohImg: { width: '100%', height: '100%', objectFit: 'contain' },
  cardTitle: { fontSize: '1.3rem', color: '#ffffff', fontWeight: '800', marginBottom: '0.75rem', textAlign: 'center' },
  cardText: { color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem', textAlign: 'center', flexGrow: 1 },
  btnWrapper: { textAlign: 'center' },
  btnRed: { background: '#c2410c', color: '#ffffff', border: 'none', padding: '0.85rem 2rem', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', fontSize: '0.95rem', width: '100%', transition: 'background 0.2s', boxShadow: '0 4px 12px rgba(194, 65, 12, 0.3)' },

  detailContainer: { padding: '6rem 4rem', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box', backgroundColor: '#070f1e', minHeight: 'calc(100vh - 80px)' },
  backButton: { background: 'none', border: 'none', color: '#c2410c', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' },
  detailContentBox: { background: '#0e1d32', padding: '3.5rem', borderRadius: '20px', border: '1px solid #1e293b', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', textAlign: 'center' },
  detailTitle: { fontSize: '2.2rem', color: '#ffffff', fontWeight: '800', marginBottom: '2rem', textTransform: 'uppercase' },
  detailImageBox: { width: '100%', maxWidth: '400px', height: '320px', margin: '0 auto 2rem auto', borderRadius: '14px', overflow: 'hidden', background: '#070f1e', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #1e293b' },
  detailImg: { width: '100%', height: '100%', objectFit: 'contain' },
  detailTextWrapper: { textAlign: 'left' },
  detailText: { color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.8', margin: 0, whiteSpace: 'pre-line' }
};