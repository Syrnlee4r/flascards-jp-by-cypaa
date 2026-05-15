// ============================================================
// MINNA NO NIHONGO - DATA KOSAKATA & KANJI
// ============================================================

const VOCAB_DATA = {
  1: [
    { jp: "わたし", romaji: "watashi", id: "saya", type: "kata ganti", hiragana: "わたし" },
    { jp: "あなた", romaji: "anata", id: "kamu / Anda", type: "kata ganti", hiragana: "あなた" },
    { jp: "かいしゃいん", romaji: "kaishain", id: "karyawan perusahaan", type: "kata benda", hiragana: "かいしゃいん" },
    { jp: "せんせい", romaji: "sensei", id: "guru / dokter", type: "kata benda", hiragana: "せんせい" },
    { jp: "がくせい", romaji: "gakusei", id: "pelajar / mahasiswa", type: "kata benda", hiragana: "がくせい" },
    { jp: "にほんご", romaji: "nihongo", id: "bahasa Jepang", type: "kata benda", hiragana: "にほんご" },
    { jp: "なまえ", romaji: "namae", id: "nama", type: "kata benda", hiragana: "なまえ" },
    { jp: "なんさい", romaji: "nansai", id: "berapa tahun / umur berapa", type: "kata tanya", hiragana: "なんさい" },
    { jp: "はじめまして", romaji: "hajimemashite", id: "perkenalkan / salam kenal", type: "ungkapan", hiragana: "はじめまして" },
    { jp: "どうぞよろしく", romaji: "douzo yoroshiku", id: "senang berkenalan dengan Anda", type: "ungkapan", hiragana: "どうぞよろしく" },
    { jp: "おはようございます", romaji: "ohayou gozaimasu", id: "selamat pagi", type: "ungkapan", hiragana: "おはようございます" },
    { jp: "こんにちは", romaji: "konnichiwa", id: "selamat siang / halo", type: "ungkapan", hiragana: "こんにちは" },
  ],
  2: [
    { jp: "これ", romaji: "kore", id: "ini (dekat pembicara)", type: "kata tunjuk", hiragana: "これ" },
    { jp: "それ", romaji: "sore", id: "itu (dekat lawan bicara)", type: "kata tunjuk", hiragana: "それ" },
    { jp: "あれ", romaji: "are", id: "itu (jauh dari keduanya)", type: "kata tunjuk", hiragana: "あれ" },
    { jp: "ほん", romaji: "hon", id: "buku", type: "kata benda", hiragana: "ほん" },
    { jp: "じしょ", romaji: "jisho", id: "kamus", type: "kata benda", hiragana: "じしょ" },
    { jp: "ざっし", romaji: "zasshi", id: "majalah", type: "kata benda", hiragana: "ざっし" },
    { jp: "しんぶん", romaji: "shinbun", id: "surat kabar / koran", type: "kata benda", hiragana: "しんぶん" },
    { jp: "ノート", romaji: "nooto", id: "buku catatan", type: "kata benda", hiragana: "ノート" },
    { jp: "テキスト", romaji: "tekisuto", id: "buku teks", type: "kata benda", hiragana: "テキスト" },
    { jp: "えんぴつ", romaji: "enpitsu", id: "pensil", type: "kata benda", hiragana: "えんぴつ" },
    { jp: "かさ", romaji: "kasa", id: "payung", type: "kata benda", hiragana: "かさ" },
    { jp: "かばん", romaji: "kaban", id: "tas", type: "kata benda", hiragana: "かばん" },
  ],
  3: [
    { jp: "ここ", romaji: "koko", id: "di sini", type: "kata tempat", hiragana: "ここ" },
    { jp: "そこ", romaji: "soko", id: "di situ", type: "kata tempat", hiragana: "そこ" },
    { jp: "あそこ", romaji: "asoko", id: "di sana", type: "kata tempat", hiragana: "あそこ" },
    { jp: "でんわ", romaji: "denwa", id: "telepon", type: "kata benda", hiragana: "でんわ" },
    { jp: "トイレ", romaji: "toire", id: "toilet / kamar mandi", type: "kata benda", hiragana: "トイレ" },
    { jp: "かいだん", romaji: "kaidan", id: "tangga", type: "kata benda", hiragana: "かいだん" },
    { jp: "エレベーター", romaji: "erebeetaa", id: "lift / elevator", type: "kata benda", hiragana: "エレベーター" },
    { jp: "じむしょ", romaji: "jimusho", id: "kantor", type: "kata benda", hiragana: "じむしょ" },
    { jp: "しょくどう", romaji: "shokudou", id: "kafetaria / kantin", type: "kata benda", hiragana: "しょくどう" },
    { jp: "うけつけ", romaji: "uketsuke", id: "resepsionis / meja penerimaan", type: "kata benda", hiragana: "うけつけ" },
    { jp: "いくら", romaji: "ikura", id: "berapa harganya", type: "kata tanya", hiragana: "いくら" },
    { jp: "ひゃく", romaji: "hyaku", id: "seratus", type: "angka", hiragana: "ひゃく" },
  ],
  4: [
    { jp: "いま", romaji: "ima", id: "sekarang", type: "kata keterangan", hiragana: "いま" },
    { jp: "〜じ", romaji: "~ji", id: "jam ~", type: "kata benda", hiragana: "〜じ" },
    { jp: "〜ふん／ぷん", romaji: "~fun/pun", id: "~ menit", type: "kata benda", hiragana: "〜ふん／ぷん" },
    { jp: "はん", romaji: "han", id: "setengah", type: "kata benda", hiragana: "はん" },
    { jp: "ひる", romaji: "hiru", id: "siang hari", type: "kata benda", hiragana: "ひる" },
    { jp: "あさ", romaji: "asa", id: "pagi hari", type: "kata benda", hiragana: "あさ" },
    { jp: "よる", romaji: "yoru", id: "malam hari", type: "kata benda", hiragana: "よる" },
    { jp: "ごぜん", romaji: "gozen", id: "pagi / sebelum tengah hari (AM)", type: "kata benda", hiragana: "ごぜん" },
    { jp: "ごご", romaji: "gogo", id: "siang / setelah tengah hari (PM)", type: "kata benda", hiragana: "ごご" },
    { jp: "やすみ", romaji: "yasumi", id: "istirahat / libur", type: "kata benda", hiragana: "やすみ" },
    { jp: "ひるやすみ", romaji: "hiruyasumi", id: "istirahat siang", type: "kata benda", hiragana: "ひるやすみ" },
    { jp: "なんじ", romaji: "nanji", id: "jam berapa", type: "kata tanya", hiragana: "なんじ" },
  ],
  5: [
    { jp: "いきます", romaji: "ikimasu", id: "pergi", type: "kata kerja", hiragana: "いきます" },
    { jp: "きます", romaji: "kimasu", id: "datang", type: "kata kerja", hiragana: "きます" },
    { jp: "かえります", romaji: "kaerimasu", id: "pulang / kembali", type: "kata kerja", hiragana: "かえります" },
    { jp: "バス", romaji: "basu", id: "bis", type: "kata benda", hiragana: "バス" },
    { jp: "でんしゃ", romaji: "densha", id: "kereta listrik", type: "kata benda", hiragana: "でんしゃ" },
    { jp: "ひこうき", romaji: "hikouki", id: "pesawat terbang", type: "kata benda", hiragana: "ひこうき" },
    { jp: "くるま", romaji: "kuruma", id: "mobil", type: "kata benda", hiragana: "くるま" },
    { jp: "じてんしゃ", romaji: "jitensha", id: "sepeda", type: "kata benda", hiragana: "じてんしゃ" },
    { jp: "あした", romaji: "ashita", id: "besok", type: "kata keterangan", hiragana: "あした" },
    { jp: "きのう", romaji: "kinou", id: "kemarin", type: "kata keterangan", hiragana: "きのう" },
    { jp: "きょう", romaji: "kyou", id: "hari ini", type: "kata keterangan", hiragana: "きょう" },
    { jp: "ひとりで", romaji: "hitoride", id: "sendiri", type: "kata keterangan", hiragana: "ひとりで" },
  ],
  6: [
    { jp: "たべます", romaji: "tabemasu", id: "makan", type: "kata kerja", hiragana: "たべます" },
    { jp: "のみます", romaji: "nomimasu", id: "minum", type: "kata kerja", hiragana: "のみます" },
    { jp: "すいます", romaji: "suimasu", id: "menghisap / merokok", type: "kata kerja", hiragana: "すいます" },
    { jp: "みます", romaji: "mimasu", id: "melihat / menonton", type: "kata kerja", hiragana: "みます" },
    { jp: "ききます", romaji: "kikimasu", id: "mendengar", type: "kata kerja", hiragana: "ききます" },
    { jp: "よみます", romaji: "yomimasu", id: "membaca", type: "kata kerja", hiragana: "よみます" },
    { jp: "かきます", romaji: "kakimasu", id: "menulis / menggambar", type: "kata kerja", hiragana: "かきます" },
    { jp: "かいます", romaji: "kaimasu", id: "membeli", type: "kata kerja", hiragana: "かいます" },
    { jp: "とります", romaji: "torimasu", id: "mengambil", type: "kata kerja", hiragana: "とります" },
    { jp: "ごはん", romaji: "gohan", id: "nasi / makan", type: "kata benda", hiragana: "ごはん" },
    { jp: "パン", romaji: "pan", id: "roti", type: "kata benda", hiragana: "パン" },
    { jp: "たまご", romaji: "tamago", id: "telur", type: "kata benda", hiragana: "たまご" },
  ],
  7: [
    { jp: "きります", romaji: "kirimasu", id: "memotong", type: "kata kerja", hiragana: "きります" },
    { jp: "おくります", romaji: "okurimasu", id: "mengirim / mengantarkan", type: "kata kerja", hiragana: "おくります" },
    { jp: "あげます", romaji: "agemasu", id: "memberi", type: "kata kerja", hiragana: "あげます" },
    { jp: "もらいます", romaji: "moraimasu", id: "menerima / mendapat", type: "kata kerja", hiragana: "もらいます" },
    { jp: "でんわします", romaji: "denwa shimasu", id: "menelepon", type: "kata kerja", hiragana: "でんわします" },
    { jp: "はな", romaji: "hana", id: "bunga", type: "kata benda", hiragana: "はな" },
    { jp: "チョコレート", romaji: "chokoreeto", id: "coklat", type: "kata benda", hiragana: "チョコレート" },
    { jp: "プレゼント", romaji: "purezento", id: "hadiah", type: "kata benda", hiragana: "プレゼント" },
    { jp: "たんじょうび", romaji: "tanjoubi", id: "hari ulang tahun", type: "kata benda", hiragana: "たんじょうび" },
    { jp: "クリスマス", romaji: "kurisumasu", id: "Natal", type: "kata benda", hiragana: "クリスマス" },
    { jp: "おみやげ", romaji: "omiyage", id: "oleh-oleh / suvenir", type: "kata benda", hiragana: "おみやげ" },
    { jp: "なに", romaji: "nani", id: "apa", type: "kata tanya", hiragana: "なに" },
  ],
  8: [
    { jp: "あります", romaji: "arimasu", id: "ada (benda mati)", type: "kata kerja", hiragana: "あります" },
    { jp: "います", romaji: "imasu", id: "ada (makhluk hidup)", type: "kata kerja", hiragana: "います" },
    { jp: "うえ", romaji: "ue", id: "atas", type: "kata tempat", hiragana: "うえ" },
    { jp: "した", romaji: "shita", id: "bawah", type: "kata tempat", hiragana: "した" },
    { jp: "まえ", romaji: "mae", id: "depan", type: "kata tempat", hiragana: "まえ" },
    { jp: "うしろ", romaji: "ushiro", id: "belakang", type: "kata tempat", hiragana: "うしろ" },
    { jp: "みぎ", romaji: "migi", id: "kanan", type: "kata tempat", hiragana: "みぎ" },
    { jp: "ひだり", romaji: "hidari", id: "kiri", type: "kata tempat", hiragana: "ひだり" },
    { jp: "なか", romaji: "naka", id: "dalam / tengah", type: "kata tempat", hiragana: "なか" },
    { jp: "そと", romaji: "soto", id: "luar", type: "kata tempat", hiragana: "そと" },
    { jp: "となり", romaji: "tonari", id: "sebelah / di samping", type: "kata tempat", hiragana: "となり" },
    { jp: "ちかく", romaji: "chikaku", id: "dekat / sekitar", type: "kata tempat", hiragana: "ちかく" },
  ],
  9: [
    { jp: "すきです", romaji: "suki desu", id: "suka", type: "kata sifat na", hiragana: "すきです" },
    { jp: "きらいです", romaji: "kirai desu", id: "tidak suka / benci", type: "kata sifat na", hiragana: "きらいです" },
    { jp: "じょうずです", romaji: "jouzu desu", id: "pandai / mahir", type: "kata sifat na", hiragana: "じょうずです" },
    { jp: "へたです", romaji: "heta desu", id: "tidak pandai / kurang mahir", type: "kata sifat na", hiragana: "へたです" },
    { jp: "わかります", romaji: "wakarimasu", id: "mengerti / paham", type: "kata kerja", hiragana: "わかります" },
    { jp: "あります", romaji: "arimasu", id: "ada / punya (benda)", type: "kata kerja", hiragana: "あります" },
    { jp: "スポーツ", romaji: "supootsu", id: "olahraga", type: "kata benda", hiragana: "スポーツ" },
    { jp: "やきゅう", romaji: "yakyuu", id: "baseball", type: "kata benda", hiragana: "やきゅう" },
    { jp: "おんがく", romaji: "ongaku", id: "musik", type: "kata benda", hiragana: "おんがく" },
    { jp: "うた", romaji: "uta", id: "lagu / nyanyian", type: "kata benda", hiragana: "うた" },
    { jp: "りょうり", romaji: "ryouri", id: "masakan / memasak", type: "kata benda", hiragana: "りょうり" },
    { jp: "え", romaji: "e", id: "gambar / lukisan", type: "kata benda", hiragana: "え" },
  ],
  10: [
    { jp: "あります", romaji: "arimasu", id: "ada (peristiwa/jadwal)", type: "kata kerja", hiragana: "あります" },
    { jp: "いつ", romaji: "itsu", id: "kapan", type: "kata tanya", hiragana: "いつ" },
    { jp: "ようび", romaji: "youbi", id: "hari dalam seminggu", type: "kata benda", hiragana: "ようび" },
    { jp: "にちようび", romaji: "nichiyoubi", id: "hari Minggu", type: "kata benda", hiragana: "にちようび" },
    { jp: "もくようび", romaji: "mokuyoubi", id: "hari Kamis", type: "kata benda", hiragana: "もくようび" },
    { jp: "きんようび", romaji: "kin'youbi", id: "hari Jumat", type: "kata benda", hiragana: "きんようび" },
    { jp: "どようび", romaji: "doyoubi", id: "hari Sabtu", type: "kata benda", hiragana: "どようび" },
    { jp: "まいにち", romaji: "mainichi", id: "setiap hari", type: "kata keterangan", hiragana: "まいにち" },
    { jp: "まいあさ", romaji: "maiasa", id: "setiap pagi", type: "kata keterangan", hiragana: "まいあさ" },
    { jp: "まいばん", romaji: "maiban", id: "setiap malam", type: "kata keterangan", hiragana: "まいばん" },
    { jp: "せんしゅう", romaji: "senshuu", id: "minggu lalu", type: "kata keterangan", hiragana: "せんしゅう" },
    { jp: "らいしゅう", romaji: "raishuu", id: "minggu depan", type: "kata keterangan", hiragana: "らいしゅう" },
  ],
  11: [
    { jp: "〜たい", romaji: "~tai", id: "ingin ~", type: "pola kalimat", hiragana: "〜たい" },
    { jp: "どんな", romaji: "donna", id: "seperti apa / bagaimana", type: "kata tanya", hiragana: "どんな" },
    { jp: "すし", romaji: "sushi", id: "sushi", type: "kata benda", hiragana: "すし" },
    { jp: "てんぷら", romaji: "tenpura", id: "tempura", type: "kata benda", hiragana: "てんぷら" },
    { jp: "しょくじ", romaji: "shokuji", id: "makan / makan-makanan", type: "kata benda", hiragana: "しょくじ" },
    { jp: "のみもの", romaji: "nomimono", id: "minuman", type: "kata benda", hiragana: "のみもの" },
    { jp: "たべもの", romaji: "tabemono", id: "makanan", type: "kata benda", hiragana: "たべもの" },
    { jp: "みせ", romaji: "mise", id: "toko / restoran", type: "kata benda", hiragana: "みせ" },
    { jp: "デパート", romaji: "depaato", id: "department store", type: "kata benda", hiragana: "デパート" },
    { jp: "みやげもの", romaji: "miyagemono", id: "oleh-oleh / suvenir", type: "kata benda", hiragana: "みやげもの" },
    { jp: "どこか", romaji: "dokoka", id: "suatu tempat / ke mana saja", type: "kata ganti", hiragana: "どこか" },
    { jp: "なにか", romaji: "nanika", id: "sesuatu", type: "kata ganti", hiragana: "なにか" },
  ],
  12: [
    { jp: "おきます", romaji: "okimasu", id: "bangun tidur", type: "kata kerja", hiragana: "おきます" },
    { jp: "ねます", romaji: "nemasu", id: "tidur", type: "kata kerja", hiragana: "ねます" },
    { jp: "はたらきます", romaji: "hatarakimasu", id: "bekerja", type: "kata kerja", hiragana: "はたらきます" },
    { jp: "やすみます", romaji: "yasumimasu", id: "istirahat / libur / absen", type: "kata kerja", hiragana: "やすみます" },
    { jp: "べんきょうします", romaji: "benkyou shimasu", id: "belajar", type: "kata kerja", hiragana: "べんきょうします" },
    { jp: "おわります", romaji: "owarimasu", id: "selesai / berakhir", type: "kata kerja", hiragana: "おわります" },
    { jp: "はじまります", romaji: "hajimarimasu", id: "mulai / dimulai", type: "kata kerja", hiragana: "はじまります" },
    { jp: "じゅぎょう", romaji: "jugyou", id: "kelas / pelajaran", type: "kata benda", hiragana: "じゅぎょう" },
    { jp: "しごと", romaji: "shigoto", id: "pekerjaan", type: "kata benda", hiragana: "しごと" },
    { jp: "ひま", romaji: "hima", id: "waktu luang / tidak sibuk", type: "kata sifat na", hiragana: "ひま" },
    { jp: "たいへん", romaji: "taihen", id: "berat / sulit / repot", type: "kata sifat na", hiragana: "たいへん" },
    { jp: "いつも", romaji: "itsumo", id: "selalu / setiap saat", type: "kata keterangan", hiragana: "いつも" },
  ],
};

// Bab 13-50 dengan data sample
for (let i = 13; i <= 50; i++) {
  if (!VOCAB_DATA[i]) {
    VOCAB_DATA[i] = [
      { jp: `ことば${i}-1`, romaji: `kotoba${i}1`, id: `kosakata bab ${i} no.1`, type: "kata benda", hiragana: `ことば${i}-1` },
      { jp: `ことば${i}-2`, romaji: `kotoba${i}2`, id: `kosakata bab ${i} no.2`, type: "kata kerja", hiragana: `ことば${i}-2` },
      { jp: `ことば${i}-3`, romaji: `kotoba${i}3`, id: `kosakata bab ${i} no.3`, type: "kata sifat", hiragana: `ことば${i}-3` },
      { jp: `ことば${i}-4`, romaji: `kotoba${i}4`, id: `kosakata bab ${i} no.4`, type: "kata benda", hiragana: `ことば${i}-4` },
      { jp: `ことば${i}-5`, romaji: `kotoba${i}5`, id: `kosakata bab ${i} no.5`, type: "kata keterangan", hiragana: `ことば${i}-5` },
      { jp: `ことば${i}-6`, romaji: `kotoba${i}6`, id: `kosakata bab ${i} no.6`, type: "kata kerja", hiragana: `ことば${i}-6` },
      { jp: `ことば${i}-7`, romaji: `kotoba${i}7`, id: `kosakata bab ${i} no.7`, type: "kata benda", hiragana: `ことば${i}-7` },
      { jp: `ことば${i}-8`, romaji: `kotoba${i}8`, id: `kosakata bab ${i} no.8`, type: "kata sifat", hiragana: `ことば${i}-8` },
      { jp: `ことば${i}-9`, romaji: `kotoba${i}9`, id: `kosakata bab ${i} no.9`, type: "ungkapan", hiragana: `ことば${i}-9` },
      { jp: `ことば${i}-10`, romaji: `kotoba${i}10`, id: `kosakata bab ${i} no.10`, type: "kata benda", hiragana: `ことば${i}-10` },
    ];
  }
}

// ============================================================
// DATA KANA
// ============================================================
const HIRAGANA_DATA = [
  // Dasar
  { kana: "あ", romaji: "a", group: "dasar" }, { kana: "い", romaji: "i", group: "dasar" },
  { kana: "う", romaji: "u", group: "dasar" }, { kana: "え", romaji: "e", group: "dasar" },
  { kana: "お", romaji: "o", group: "dasar" },
  { kana: "か", romaji: "ka", group: "dasar" }, { kana: "き", romaji: "ki", group: "dasar" },
  { kana: "く", romaji: "ku", group: "dasar" }, { kana: "け", romaji: "ke", group: "dasar" },
  { kana: "こ", romaji: "ko", group: "dasar" },
  { kana: "さ", romaji: "sa", group: "dasar" }, { kana: "し", romaji: "shi", group: "dasar" },
  { kana: "す", romaji: "su", group: "dasar" }, { kana: "せ", romaji: "se", group: "dasar" },
  { kana: "そ", romaji: "so", group: "dasar" },
  { kana: "た", romaji: "ta", group: "dasar" }, { kana: "ち", romaji: "chi", group: "dasar" },
  { kana: "つ", romaji: "tsu", group: "dasar" }, { kana: "て", romaji: "te", group: "dasar" },
  { kana: "と", romaji: "to", group: "dasar" },
  { kana: "な", romaji: "na", group: "dasar" }, { kana: "に", romaji: "ni", group: "dasar" },
  { kana: "ぬ", romaji: "nu", group: "dasar" }, { kana: "ね", romaji: "ne", group: "dasar" },
  { kana: "の", romaji: "no", group: "dasar" },
  { kana: "は", romaji: "ha", group: "dasar" }, { kana: "ひ", romaji: "hi", group: "dasar" },
  { kana: "ふ", romaji: "fu", group: "dasar" }, { kana: "へ", romaji: "he", group: "dasar" },
  { kana: "ほ", romaji: "ho", group: "dasar" },
  { kana: "ま", romaji: "ma", group: "dasar" }, { kana: "み", romaji: "mi", group: "dasar" },
  { kana: "む", romaji: "mu", group: "dasar" }, { kana: "め", romaji: "me", group: "dasar" },
  { kana: "も", romaji: "mo", group: "dasar" },
  { kana: "や", romaji: "ya", group: "dasar" }, { kana: "ゆ", romaji: "yu", group: "dasar" },
  { kana: "よ", romaji: "yo", group: "dasar" },
  { kana: "ら", romaji: "ra", group: "dasar" }, { kana: "り", romaji: "ri", group: "dasar" },
  { kana: "る", romaji: "ru", group: "dasar" }, { kana: "れ", romaji: "re", group: "dasar" },
  { kana: "ろ", romaji: "ro", group: "dasar" },
  { kana: "わ", romaji: "wa", group: "dasar" }, { kana: "を", romaji: "wo", group: "dasar" },
  { kana: "ん", romaji: "n", group: "dasar" },
  // Dakuten
  { kana: "が", romaji: "ga", group: "dakuten" }, { kana: "ぎ", romaji: "gi", group: "dakuten" },
  { kana: "ぐ", romaji: "gu", group: "dakuten" }, { kana: "げ", romaji: "ge", group: "dakuten" },
  { kana: "ご", romaji: "go", group: "dakuten" },
  { kana: "ざ", romaji: "za", group: "dakuten" }, { kana: "じ", romaji: "ji", group: "dakuten" },
  { kana: "ず", romaji: "zu", group: "dakuten" }, { kana: "ぜ", romaji: "ze", group: "dakuten" },
  { kana: "ぞ", romaji: "zo", group: "dakuten" },
  { kana: "だ", romaji: "da", group: "dakuten" }, { kana: "ぢ", romaji: "di", group: "dakuten" },
  { kana: "づ", romaji: "du", group: "dakuten" }, { kana: "で", romaji: "de", group: "dakuten" },
  { kana: "ど", romaji: "do", group: "dakuten" },
  { kana: "ば", romaji: "ba", group: "dakuten" }, { kana: "び", romaji: "bi", group: "dakuten" },
  { kana: "ぶ", romaji: "bu", group: "dakuten" }, { kana: "べ", romaji: "be", group: "dakuten" },
  { kana: "ぼ", romaji: "bo", group: "dakuten" },
  // Handakuten
  { kana: "ぱ", romaji: "pa", group: "handakuten" }, { kana: "ぴ", romaji: "pi", group: "handakuten" },
  { kana: "ぷ", romaji: "pu", group: "handakuten" }, { kana: "ぺ", romaji: "pe", group: "handakuten" },
  { kana: "ぽ", romaji: "po", group: "handakuten" },
  // Youon
  { kana: "きゃ", romaji: "kya", group: "youon" }, { kana: "きゅ", romaji: "kyu", group: "youon" },
  { kana: "きょ", romaji: "kyo", group: "youon" },
  { kana: "しゃ", romaji: "sha", group: "youon" }, { kana: "しゅ", romaji: "shu", group: "youon" },
  { kana: "しょ", romaji: "sho", group: "youon" },
  { kana: "ちゃ", romaji: "cha", group: "youon" }, { kana: "ちゅ", romaji: "chu", group: "youon" },
  { kana: "ちょ", romaji: "cho", group: "youon" },
  { kana: "にゃ", romaji: "nya", group: "youon" }, { kana: "にゅ", romaji: "nyu", group: "youon" },
  { kana: "にょ", romaji: "nyo", group: "youon" },
  { kana: "ひゃ", romaji: "hya", group: "youon" }, { kana: "ひゅ", romaji: "hyu", group: "youon" },
  { kana: "ひょ", romaji: "hyo", group: "youon" },
  { kana: "みゃ", romaji: "mya", group: "youon" }, { kana: "みゅ", romaji: "myu", group: "youon" },
  { kana: "みょ", romaji: "myo", group: "youon" },
  { kana: "りゃ", romaji: "rya", group: "youon" }, { kana: "りゅ", romaji: "ryu", group: "youon" },
  { kana: "りょ", romaji: "ryo", group: "youon" },
  { kana: "ぎゃ", romaji: "gya", group: "youon" }, { kana: "ぎゅ", romaji: "gyu", group: "youon" },
  { kana: "ぎょ", romaji: "gyo", group: "youon" },
  { kana: "じゃ", romaji: "ja", group: "youon" }, { kana: "じゅ", romaji: "ju", group: "youon" },
  { kana: "じょ", romaji: "jo", group: "youon" },
  { kana: "びゃ", romaji: "bya", group: "youon" }, { kana: "びゅ", romaji: "byu", group: "youon" },
  { kana: "びょ", romaji: "byo", group: "youon" },
  { kana: "ぴゃ", romaji: "pya", group: "youon" }, { kana: "ぴゅ", romaji: "pyu", group: "youon" },
  { kana: "ぴょ", romaji: "pyo", group: "youon" },
];

const KATAKANA_DATA = [
  { kana: "ア", romaji: "a", group: "dasar" }, { kana: "イ", romaji: "i", group: "dasar" },
  { kana: "ウ", romaji: "u", group: "dasar" }, { kana: "エ", romaji: "e", group: "dasar" },
  { kana: "オ", romaji: "o", group: "dasar" },
  { kana: "カ", romaji: "ka", group: "dasar" }, { kana: "キ", romaji: "ki", group: "dasar" },
  { kana: "ク", romaji: "ku", group: "dasar" }, { kana: "ケ", romaji: "ke", group: "dasar" },
  { kana: "コ", romaji: "ko", group: "dasar" },
  { kana: "サ", romaji: "sa", group: "dasar" }, { kana: "シ", romaji: "shi", group: "dasar" },
  { kana: "ス", romaji: "su", group: "dasar" }, { kana: "セ", romaji: "se", group: "dasar" },
  { kana: "ソ", romaji: "so", group: "dasar" },
  { kana: "タ", romaji: "ta", group: "dasar" }, { kana: "チ", romaji: "chi", group: "dasar" },
  { kana: "ツ", romaji: "tsu", group: "dasar" }, { kana: "テ", romaji: "te", group: "dasar" },
  { kana: "ト", romaji: "to", group: "dasar" },
  { kana: "ナ", romaji: "na", group: "dasar" }, { kana: "ニ", romaji: "ni", group: "dasar" },
  { kana: "ヌ", romaji: "nu", group: "dasar" }, { kana: "ネ", romaji: "ne", group: "dasar" },
  { kana: "ノ", romaji: "no", group: "dasar" },
  { kana: "ハ", romaji: "ha", group: "dasar" }, { kana: "ヒ", romaji: "hi", group: "dasar" },
  { kana: "フ", romaji: "fu", group: "dasar" }, { kana: "ヘ", romaji: "he", group: "dasar" },
  { kana: "ホ", romaji: "ho", group: "dasar" },
  { kana: "マ", romaji: "ma", group: "dasar" }, { kana: "ミ", romaji: "mi", group: "dasar" },
  { kana: "ム", romaji: "mu", group: "dasar" }, { kana: "メ", romaji: "me", group: "dasar" },
  { kana: "モ", romaji: "mo", group: "dasar" },
  { kana: "ヤ", romaji: "ya", group: "dasar" }, { kana: "ユ", romaji: "yu", group: "dasar" },
  { kana: "ヨ", romaji: "yo", group: "dasar" },
  { kana: "ラ", romaji: "ra", group: "dasar" }, { kana: "リ", romaji: "ri", group: "dasar" },
  { kana: "ル", romaji: "ru", group: "dasar" }, { kana: "レ", romaji: "re", group: "dasar" },
  { kana: "ロ", romaji: "ro", group: "dasar" },
  { kana: "ワ", romaji: "wa", group: "dasar" }, { kana: "ヲ", romaji: "wo", group: "dasar" },
  { kana: "ン", romaji: "n", group: "dasar" },
  { kana: "ガ", romaji: "ga", group: "dakuten" }, { kana: "ギ", romaji: "gi", group: "dakuten" },
  { kana: "グ", romaji: "gu", group: "dakuten" }, { kana: "ゲ", romaji: "ge", group: "dakuten" },
  { kana: "ゴ", romaji: "go", group: "dakuten" },
  { kana: "ザ", romaji: "za", group: "dakuten" }, { kana: "ジ", romaji: "ji", group: "dakuten" },
  { kana: "ズ", romaji: "zu", group: "dakuten" }, { kana: "ゼ", romaji: "ze", group: "dakuten" },
  { kana: "ゾ", romaji: "zo", group: "dakuten" },
  { kana: "ダ", romaji: "da", group: "dakuten" }, { kana: "デ", romaji: "de", group: "dakuten" },
  { kana: "ド", romaji: "do", group: "dakuten" },
  { kana: "バ", romaji: "ba", group: "dakuten" }, { kana: "ビ", romaji: "bi", group: "dakuten" },
  { kana: "ブ", romaji: "bu", group: "dakuten" }, { kana: "ベ", romaji: "be", group: "dakuten" },
  { kana: "ボ", romaji: "bo", group: "dakuten" },
  { kana: "パ", romaji: "pa", group: "handakuten" }, { kana: "ピ", romaji: "pi", group: "handakuten" },
  { kana: "プ", romaji: "pu", group: "handakuten" }, { kana: "ペ", romaji: "pe", group: "handakuten" },
  { kana: "ポ", romaji: "po", group: "handakuten" },
];

// ============================================================
// DATA KANJI
// ============================================================
const KANJI_DATA = [
  { kanji: "日", meaning: "hari / matahari / Jepang", on: "ニチ / ジツ", kun: "ひ / か", level: "N5", example: "日本語 (nihongo)" },
  { kanji: "本", meaning: "buku / asal / Jepang", on: "ホン", kun: "もと", level: "N5", example: "日本 (nihon)" },
  { kanji: "人", meaning: "orang / manusia", on: "ジン / ニン", kun: "ひと", level: "N5", example: "日本人 (nihonjin)" },
  { kanji: "山", meaning: "gunung", on: "サン", kun: "やま", level: "N5", example: "富士山 (fujisan)" },
  { kanji: "川", meaning: "sungai", on: "セン", kun: "かわ", level: "N5", example: "川 (kawa)" },
  { kanji: "田", meaning: "sawah / ladang", on: "デン", kun: "た", level: "N5", example: "田中 (tanaka)" },
  { kanji: "大", meaning: "besar", on: "ダイ / タイ", kun: "おお", level: "N5", example: "大学 (daigaku)" },
  { kanji: "小", meaning: "kecil", on: "ショウ", kun: "ちい / こ", level: "N5", example: "小学校 (shougakkou)" },
  { kanji: "上", meaning: "atas / naik", on: "ジョウ / ショウ", kun: "うえ / あ / のぼ", level: "N5", example: "上手 (jouzu)" },
  { kanji: "下", meaning: "bawah / turun", on: "カ / ゲ", kun: "した / お / さ", level: "N5", example: "下手 (heta)" },
  { kanji: "中", meaning: "tengah / dalam", on: "チュウ", kun: "なか", level: "N5", example: "中学校 (chuugakkou)" },
  { kanji: "国", meaning: "negara", on: "コク", kun: "くに", level: "N5", example: "外国 (gaikoku)" },
  { kanji: "年", meaning: "tahun", on: "ネン", kun: "とし", level: "N5", example: "今年 (kotoshi)" },
  { kanji: "月", meaning: "bulan / rembulan", on: "ガツ / ゲツ", kun: "つき", level: "N5", example: "月曜日 (getsuyoubi)" },
  { kanji: "火", meaning: "api", on: "カ", kun: "ひ", level: "N5", example: "火曜日 (kayoubi)" },
  { kanji: "水", meaning: "air", on: "スイ", kun: "みず", level: "N5", example: "水曜日 (suiyoubi)" },
  { kanji: "木", meaning: "pohon / kayu", on: "モク / ボク", kun: "き / こ", level: "N5", example: "木曜日 (mokuyoubi)" },
  { kanji: "金", meaning: "emas / uang / Jumat", on: "キン / コン", kun: "かね / かな", level: "N5", example: "金曜日 (kin'youbi)" },
  { kanji: "土", meaning: "tanah / Sabtu", on: "ド / ト", kun: "つち", level: "N5", example: "土曜日 (doyoubi)" },
  { kanji: "学", meaning: "belajar / ilmu", on: "ガク", kun: "まな", level: "N5", example: "学校 (gakkou)" },
  { kanji: "校", meaning: "sekolah", on: "コウ", kun: "-", level: "N5", example: "学校 (gakkou)" },
  { kanji: "先", meaning: "dulu / depan / guru", on: "セン", kun: "さき", level: "N5", example: "先生 (sensei)" },
  { kanji: "生", meaning: "lahir / hidup / siswa", on: "セイ / ショウ", kun: "い / う / なま / お", level: "N5", example: "先生 (sensei)" },
  { kanji: "何", meaning: "apa / berapa", on: "カ", kun: "なに / なん", level: "N5", example: "何時 (nanji)" },
  { kanji: "時", meaning: "waktu / jam", on: "ジ", kun: "とき", level: "N5", example: "何時 (nanji)" },
  { kanji: "間", meaning: "antara / ruang / waktu", on: "カン / ケン", kun: "あいだ / ま", level: "N4", example: "時間 (jikan)" },
  { kanji: "食", meaning: "makan", on: "ショク", kun: "た / く", level: "N4", example: "食べ物 (tabemono)" },
  { kanji: "飲", meaning: "minum", on: "イン", kun: "の", level: "N4", example: "飲み物 (nomimono)" },
  { kanji: "見", meaning: "melihat", on: "ケン", kun: "み", level: "N4", example: "見る (miru)" },
  { kanji: "行", meaning: "pergi", on: "コウ / ギョウ / アン", kun: "い / ゆ / おこな", level: "N4", example: "銀行 (ginkou)" },
  { kanji: "来", meaning: "datang", on: "ライ", kun: "く / き / こ", level: "N4", example: "来年 (rainen)" },
  { kanji: "帰", meaning: "pulang / kembali", on: "キ", kun: "かえ", level: "N4", example: "帰る (kaeru)" },
  { kanji: "語", meaning: "bahasa / kata", on: "ゴ", kun: "かた", level: "N4", example: "日本語 (nihongo)" },
  { kanji: "書", meaning: "menulis", on: "ショ", kun: "か", level: "N4", example: "書く (kaku)" },
  { kanji: "読", meaning: "membaca", on: "ドク / トク", kun: "よ", level: "N4", example: "読む (yomu)" },
  { kanji: "聞", meaning: "mendengar / bertanya", on: "ブン / モン", kun: "き / きこ", level: "N4", example: "聞く (kiku)" },
  { kanji: "言", meaning: "mengatakan", on: "ゲン / ゴン", kun: "い / こと", level: "N4", example: "言語 (gengo)" },
  { kanji: "思", meaning: "berpikir / merasa", on: "シ", kun: "おも", level: "N4", example: "思う (omou)" },
  { kanji: "知", meaning: "tahu / mengetahui", on: "チ", kun: "し", level: "N4", example: "知る (shiru)" },
  { kanji: "分", meaning: "menit / memahami / bagian", on: "フン / ブン / ブ", kun: "わ / わか", level: "N4", example: "分かる (wakaru)" },
];

// ============================================================
// DATA BUNPOU (Grammar Patterns)
// ============================================================
const BUNPOU_DATA = [
  { pola: "〜は〜です", chapter: 1, arti: "~ adalah ~", contoh: "わたしはがくせいです。", contoh_id: "Saya adalah pelajar." },
  { pola: "〜は〜じゃありません", chapter: 1, arti: "~ bukan ~", contoh: "わたしはせんせいじゃありません。", contoh_id: "Saya bukan guru." },
  { pola: "〜は〜ですか", chapter: 1, arti: "Apakah ~ adalah ~?", contoh: "あなたはかいしゃいんですか。", contoh_id: "Apakah Anda karyawan?" },
  { pola: "〜の〜", chapter: 2, arti: "~ punya ~ / ~ milik ~", contoh: "これはわたしのほんです。", contoh_id: "Ini adalah buku saya." },
  { pola: "〜はどこですか", chapter: 3, arti: "Di mana ~?", contoh: "トイレはどこですか。", contoh_id: "Di mana toilet?" },
  { pola: "〜でいきます", chapter: 5, arti: "Pergi dengan (kendaraan) ~", contoh: "バスできます。", contoh_id: "Datang dengan bus." },
  { pola: "〜をたべます", chapter: 6, arti: "Makan ~", contoh: "ごはんをたべます。", contoh_id: "Makan nasi." },
  { pola: "〜といっしょに〜ます", chapter: 7, arti: "Pergi/melakukan ~ bersama ~", contoh: "ともだちといっしょにいきます。", contoh_id: "Pergi bersama teman." },
  { pola: "〜にあります／います", chapter: 8, arti: "~ ada di ~", contoh: "ねこはつくえのうえにいます。", contoh_id: "Kucing ada di atas meja." },
  { pola: "〜がすきです", chapter: 9, arti: "Suka ~", contoh: "わたしはおんがくがすきです。", contoh_id: "Saya suka musik." },
  { pola: "〜がわかります", chapter: 9, arti: "Mengerti ~", contoh: "にほんごがわかります。", contoh_id: "Mengerti bahasa Jepang." },
  { pola: "〜からまで", chapter: 10, arti: "Dari ~ sampai ~", contoh: "げつようびからきんようびまではたらきます。", contoh_id: "Bekerja dari Senin sampai Jumat." },
  { pola: "〜たいです", chapter: 11, arti: "Ingin ~", contoh: "にほんへいきたいです。", contoh_id: "Ingin pergi ke Jepang." },
  { pola: "〜てください", chapter: 14, arti: "Tolong lakukan ~", contoh: "ゆっくりはなしてください。", contoh_id: "Tolong bicara pelan-pelan." },
  { pola: "〜ています", chapter: 15, arti: "Sedang ~ / Sudah ~ (keadaan)", contoh: "あめがふっています。", contoh_id: "Hujan sedang turun." },
];

// ============================================================
// DATA SSW (Specified Skilled Worker)
// ============================================================
const SSW_DATA = {
  pertanian: [
    { jp: "のうぎょう", romaji: "nougyo", id: "pertanian", hiragana: "のうぎょう" },
    { jp: "たんぼ", romaji: "tanbo", id: "sawah", hiragana: "たんぼ" },
    { jp: "はたけ", romaji: "hatake", id: "ladang / kebun", hiragana: "はたけ" },
    { jp: "しゅうかく", romaji: "shuukaku", id: "panen", hiragana: "しゅうかく" },
    { jp: "たねまき", romaji: "tanemaki", id: "menabur benih", hiragana: "たねまき" },
    { jp: "ひりょう", romaji: "hiryou", id: "pupuk", hiragana: "ひりょう" },
    { jp: "のうやく", romaji: "nouyaku", id: "pestisida", hiragana: "のうやく" },
    { jp: "ビニールハウス", romaji: "biniiruhousu", id: "greenhouse / rumah kaca", hiragana: "ビニールハウス" },
    { jp: "かんがい", romaji: "kangai", id: "irigasi", hiragana: "かんがい" },
    { jp: "しょくぶつ", romaji: "shokubutsu", id: "tanaman", hiragana: "しょくぶつ" },
  ],
  perawatan: [
    { jp: "かいご", romaji: "kaigo", id: "perawatan lansia / orang cacat", hiragana: "かいご" },
    { jp: "にゅうよく", romaji: "nyuuyoku", id: "mandi (orang lain)", hiragana: "にゅうよく" },
    { jp: "はいせつ", romaji: "haisetsu", id: "buang air / eliminasi", hiragana: "はいせつ" },
    { jp: "しょくじかいじょ", romaji: "shokuji kaijo", id: "bantuan makan", hiragana: "しょくじかいじょ" },
    { jp: "いどう", romaji: "idou", id: "perpindahan / mobilitas", hiragana: "いどう" },
    { jp: "りはびりてーしょん", romaji: "rihabiriTEshon", id: "rehabilitasi", hiragana: "リハビリテーション" },
    { jp: "いりょう", romaji: "iryou", id: "medis / perawatan medis", hiragana: "いりょう" },
    { jp: "ふくし", romaji: "fukushi", id: "kesejahteraan sosial", hiragana: "ふくし" },
    { jp: "こうれいしゃ", romaji: "koureisha", id: "lansia / orang tua", hiragana: "こうれいしゃ" },
    { jp: "しょうがいしゃ", romaji: "shougaisha", id: "orang berkebutuhan khusus", hiragana: "しょうがいしゃ" },
  ],
  konstruksi: [
    { jp: "けんちく", romaji: "kenchiku", id: "konstruksi / arsitektur", hiragana: "けんちく" },
    { jp: "とびこう", romaji: "tobiko", id: "pekerja scaffolding", hiragana: "とびこう" },
    { jp: "コンクリート", romaji: "konkuriito", id: "beton", hiragana: "コンクリート" },
    { jp: "てっきん", romaji: "tekkin", id: "besi beton / rebar", hiragana: "てっきん" },
    { jp: "あんぜんぼうし", romaji: "anzen boushi", id: "helm keselamatan", hiragana: "あんぜんぼうし" },
    { jp: "げんば", romaji: "genba", id: "lokasi kerja / lapangan", hiragana: "げんば" },
    { jp: "くみたて", romaji: "kumitate", id: "perakitan / assembly", hiragana: "くみたて" },
    { jp: "そうこう", romaji: "soukou", id: "scaffolding / perancah", hiragana: "そうこう" },
    { jp: "すいどうかん", romaji: "suidoukan", id: "pipa air", hiragana: "すいどうかん" },
    { jp: "でんきこうじ", romaji: "denki kouji", id: "pekerjaan listrik", hiragana: "でんきこうじ" },
  ],
};

// ============================================================
// NIHONGO PLATFORM — app.js
// みんなの日本語 Learning Platform
// ============================================================

// ===================== NAVIGATION =====================
const pages = document.querySelectorAll('.page');
const navItems = document.querySelectorAll('.nav-item[data-page]');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger');
const sidebarClose = document.getElementById('sidebarClose');
const darkToggle = document.getElementById('darkToggle');
const darkToggleMini = document.getElementById('darkToggleMini');
const pageTitle = document.getElementById('pageTitle');

const pageTitles = {
  home: 'Beranda',
  kana: 'Kuis Kana',
  kotoba: 'Kuis Kosakata',
  bunpou: 'Kuis Tata Bahasa',
  'kanji-quiz': 'Kuis Kanji',
  'vocab-list': 'Daftar Kosakata',
  'kanji-list': 'Daftar Kanji',
  flashcard: 'Flashcard Kanji',
  stroke: 'Cara Tulis',
  ssw: 'Kuis SSW',
  stats: 'Statistik',
};

function navigateTo(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  navItems.forEach(n => n.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');
  const navItem = document.querySelector(`.nav-item[data-page="${pageId}"]`);
  if (navItem) navItem.classList.add('active');
  if (pageTitle) pageTitle.textContent = pageTitles[pageId] || pageId;
  closeSidebar();
  // Lazy init
  if (pageId === 'vocab-list') initVocabList();
  if (pageId === 'kanji-list') initKanjiList();
  if (pageId === 'stats') renderStats();
  if (pageId === 'stroke') loadStrokeGrid('hiragana');
  window.scrollTo(0, 0);
}

navItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(item.dataset.page);
  });
});

hamburger?.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
});
sidebarClose?.addEventListener('click', closeSidebar);
overlay?.addEventListener('click', closeSidebar);
function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
}

// Dark mode
function applyDark(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  if (darkToggle) {
    darkToggle.querySelector('.toggle-icon').textContent = isDark ? '☀️' : '🌙';
    darkToggle.querySelector('.toggle-label').textContent = isDark ? 'Light Mode' : 'Dark Mode';
  }
  if (darkToggleMini) darkToggleMini.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('darkMode', isDark ? '1' : '0');
}
const savedDark = localStorage.getItem('darkMode') === '1';
applyDark(savedDark);
darkToggle?.addEventListener('click', () => applyDark(!document.body.classList.contains('dark-mode')));
darkToggleMini?.addEventListener('click', () => applyDark(!document.body.classList.contains('dark-mode')));

// ===================== UTILITIES =====================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pick(arr, n) { return shuffle(arr).slice(0, n); }
function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// ===================== STATS / STORAGE =====================
function getStats() {
  return JSON.parse(localStorage.getItem('nihongoStats') || '{"totalAnswered":0,"totalCorrect":0,"totalSessions":0,"highScore":0,"history":[]}');
}
function saveStats(s) { localStorage.setItem('nihongoStats', JSON.stringify(s)); }
function recordSession(type, correct, total) {
  const s = getStats();
  s.totalAnswered += total;
  s.totalCorrect += correct;
  s.totalSessions += 1;
  const pct = Math.round((correct / total) * 100);
  if (pct > s.highScore) s.highScore = pct;
  s.history.unshift({ type, correct, total, pct, date: new Date().toLocaleDateString('id-ID') });
  if (s.history.length > 50) s.history = s.history.slice(0, 50);
  saveStats(s);
  updateHomeStats();
}
function updateHomeStats() {
  const s = getStats();
  const ta = document.getElementById('totalAnswered'); if (ta) ta.textContent = s.totalAnswered;
  const tc = document.getElementById('totalCorrect'); if (tc) tc.textContent = s.totalCorrect;
  const ts = document.getElementById('totalSessions'); if (ts) ts.textContent = s.totalSessions;
  const hs = document.getElementById('highScore'); if (hs) hs.textContent = s.highScore + '%';
}
updateHomeStats();

// ===================== TOGGLE BUTTONS HELPER =====================
function initToggleGroup(selector, dataKey) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.btn-group, .chapter-quick-btns')?.querySelectorAll('.toggle-btn, .ch-range-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
}
function getActive(selector) {
  const btn = document.querySelector(selector + ' .active');
  return btn ? (Object.values(btn.dataset)[0] || btn.textContent.trim()) : null;
}

// ===================== KANA QUIZ =====================
const KANA_STATE = {
  questions: [], idx: 0, score: 0, type: 'hiragana', group: 'basic',
  mode: 'read', count: 10, timer: 0, timerInterval: null, answers: [],
  selectedChapters: []
};

// Toggle group wiring for kana
document.querySelectorAll('[data-kana-type]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-kana-type]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); KANA_STATE.type = this.dataset.kanaType;
}));
document.querySelectorAll('[data-kana-group]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-kana-group]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); KANA_STATE.group = this.dataset.kanaGroup;
}));
document.querySelectorAll('[data-kana-mode]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-kana-mode]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); KANA_STATE.mode = this.dataset.kanaMode;
}));
document.querySelectorAll('[data-kana-count]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-kana-count]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); KANA_STATE.count = parseInt(this.dataset.kanaCount);
}));
document.querySelectorAll('[data-kana-timer]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-kana-timer]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); KANA_STATE.timer = parseInt(this.dataset.kanaTimer);
}));

function getKanaPool() {
  let pool = [];
  const grp = KANA_STATE.group;
  const grpMap = { basic: 'dasar', dakuten: 'dakuten', handakuten: 'handakuten', youon: 'youon', all: null };
  const grpVal = grpMap[grp];
  if (KANA_STATE.type === 'hiragana' || KANA_STATE.type === 'both') {
    pool.push(...(grpVal ? HIRAGANA_DATA.filter(k => k.group === grpVal) : HIRAGANA_DATA).map(k => ({ ...k, script: 'hiragana' })));
  }
  if (KANA_STATE.type === 'katakana' || KANA_STATE.type === 'both') {
    pool.push(...(grpVal ? KATAKANA_DATA.filter(k => k.group === grpVal) : KATAKANA_DATA).map(k => ({ ...k, script: 'katakana' })));
  }
  return pool;
}

function startKanaQuiz() {
  const pool = getKanaPool();
  if (pool.length === 0) { alert('Tidak ada data kana untuk pilihan ini.'); return; }
  KANA_STATE.questions = pick(pool, Math.min(KANA_STATE.count, pool.length));
  KANA_STATE.idx = 0; KANA_STATE.score = 0; KANA_STATE.answers = [];
  document.getElementById('kana-setup').classList.add('hidden');
  document.getElementById('kana-result').classList.add('hidden');
  document.getElementById('kana-quiz').classList.remove('hidden');
  renderKanaQuestion();
}

function renderKanaQuestion() {
  clearKanaTimer();
  const q = KANA_STATE.questions[KANA_STATE.idx];
  const total = KANA_STATE.questions.length;
  document.getElementById('kana-q-num').textContent = KANA_STATE.idx + 1;
  document.getElementById('kana-q-total').textContent = total;
  document.getElementById('kana-score').textContent = KANA_STATE.score;
  document.getElementById('kana-progress-fill').style.width = (KANA_STATE.idx / total * 100) + '%';
  document.getElementById('kana-feedback').classList.add('hidden');
  document.getElementById('kana-question-card').classList.remove('correct','wrong');

  const qEl = document.getElementById('kana-question');
  const hintEl = document.getElementById('kana-hint');
  const typeArea = document.getElementById('kana-type-area');
  const optionsEl = document.getElementById('kana-options');

  if (KANA_STATE.mode === 'read') {
    qEl.textContent = q.kana;
    qEl.style.fontFamily = 'var(--font-jp)';
    qEl.style.fontSize = '72px';
    hintEl.textContent = q.script === 'hiragana' ? 'Hiragana' : 'Katakana';
  } else if (KANA_STATE.mode === 'write') {
    qEl.textContent = q.romaji.toUpperCase();
    qEl.style.fontFamily = 'var(--font-mono)';
    qEl.style.fontSize = '52px';
    hintEl.textContent = q.script === 'hiragana' ? '→ Hiragana' : '→ Katakana';
  } else { // type
    qEl.textContent = q.kana;
    qEl.style.fontFamily = 'var(--font-jp)';
    qEl.style.fontSize = '72px';
    hintEl.textContent = 'Ketik dalam romaji';
  }

  if (KANA_STATE.mode === 'type') {
    optionsEl.innerHTML = '';
    typeArea.classList.remove('hidden');
    const inp = document.getElementById('kana-type-input');
    inp.value = '';
    inp.focus();
    inp.onkeydown = e => { if (e.key === 'Enter') checkKanaTyped(); };
  } else {
    typeArea.classList.add('hidden');
    const pool = getKanaPool();
    const distractors = shuffle(pool.filter(k => k.romaji !== q.romaji)).slice(0, 3);
    const options = shuffle([q, ...distractors]);
    optionsEl.innerHTML = '';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = KANA_STATE.mode === 'read' ? opt.romaji : opt.kana;
      if (KANA_STATE.mode === 'write') { btn.style.fontFamily = 'var(--font-jp)'; btn.style.fontSize = '28px'; }
      btn.onclick = () => handleKanaOption(btn, opt.romaji === q.romaji, q);
      optionsEl.appendChild(btn);
    });
  }

  if (KANA_STATE.timer > 0) startKanaTimer();
}

function handleKanaOption(btn, isCorrect, q) {
  clearKanaTimer();
  document.querySelectorAll('#kana-options .option-btn').forEach(b => b.disabled = true);
  const fb = document.getElementById('kana-feedback');
  const card = document.getElementById('kana-question-card');
  if (isCorrect) {
    btn.classList.add('correct');
    KANA_STATE.score++;
    fb.className = 'feedback correct';
    fb.innerHTML = `✅ Benar! <b>${q.kana}</b> dibaca <b>${q.romaji}</b>`;
    card.classList.add('correct');
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#kana-options .option-btn').forEach(b => {
      if (b.textContent === (KANA_STATE.mode === 'read' ? q.romaji : q.kana)) b.classList.add('correct');
    });
    fb.className = 'feedback wrong';
    fb.innerHTML = `❌ Salah. <b>${q.kana}</b> dibaca <b>${q.romaji}</b>`;
    card.classList.add('wrong');
  }
  fb.classList.remove('hidden');
  KANA_STATE.answers.push({ q, correct: isCorrect });
  setTimeout(() => nextKanaQuestion(), 1200);
}

function checkKanaTyped() {
  const inp = document.getElementById('kana-type-input');
  const q = KANA_STATE.questions[KANA_STATE.idx];
  const val = inp.value.trim().toLowerCase();
  const isCorrect = val === q.romaji.toLowerCase();
  handleKanaTypedResult(isCorrect, q);
}

function handleKanaTypedResult(isCorrect, q) {
  clearKanaTimer();
  const fb = document.getElementById('kana-feedback');
  const card = document.getElementById('kana-question-card');
  const inp = document.getElementById('kana-type-input');
  inp.disabled = true;
  if (isCorrect) {
    KANA_STATE.score++;
    fb.className = 'feedback correct';
    fb.innerHTML = `✅ Benar! <b>${q.kana}</b> = <b>${q.romaji}</b>`;
    card.classList.add('correct');
  } else {
    fb.className = 'feedback wrong';
    fb.innerHTML = `❌ Salah. Jawaban: <b>${q.romaji}</b>`;
    card.classList.add('wrong');
  }
  fb.classList.remove('hidden');
  KANA_STATE.answers.push({ q, correct: isCorrect });
  setTimeout(() => nextKanaQuestion(), 1300);
}

function nextKanaQuestion() {
  KANA_STATE.idx++;
  if (KANA_STATE.idx >= KANA_STATE.questions.length) {
    showKanaResult();
  } else {
    renderKanaQuestion();
  }
}

function skipKanaQuestion() {
  const q = KANA_STATE.questions[KANA_STATE.idx];
  KANA_STATE.answers.push({ q, correct: false, skipped: true });
  KANA_STATE.idx++;
  if (KANA_STATE.idx >= KANA_STATE.questions.length) showKanaResult();
  else renderKanaQuestion();
}

function showKanaResult() {
  clearKanaTimer();
  const { score, questions, answers } = KANA_STATE;
  const total = questions.length;
  const pct = Math.round((score / total) * 100);
  recordSession('Kuis Kana', score, total);

  document.getElementById('kana-quiz').classList.add('hidden');
  document.getElementById('kana-result').classList.remove('hidden');
  document.getElementById('kana-result-emoji').textContent = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '😅';
  document.getElementById('kana-result-score').textContent = pct + '%';
  document.getElementById('kana-result-details').innerHTML = `
    Benar: <b>${score}</b> / ${total} soal &nbsp;|&nbsp; Mode: <b>${KANA_STATE.mode}</b>
  `;
  const rev = document.getElementById('kana-review');
  rev.innerHTML = '<h4 style="font-size:14px;font-weight:700;margin-bottom:10px">Review Jawaban:</h4>' +
    answers.map(a => `
      <div class="review-item ${a.correct ? 'correct' : 'wrong'}">
        <div class="r-q">${a.q.kana}</div>
        <div class="r-info">${a.correct ? '✅' : '❌'} Romaji: <b>${a.q.romaji}</b>${a.skipped ? ' (dilewati)' : ''}</div>
      </div>
    `).join('');
}

function restartKanaQuiz() { startKanaQuiz(); }
function showKanaSetup() {
  document.getElementById('kana-quiz').classList.add('hidden');
  document.getElementById('kana-result').classList.add('hidden');
  document.getElementById('kana-setup').classList.remove('hidden');
}

// Timer
function startKanaTimer() {
  let t = KANA_STATE.timer;
  const timerEl = document.getElementById('kana-timer-display');
  timerEl.classList.remove('hidden', 'urgent');
  timerEl.textContent = t + 's';
  KANA_STATE.timerInterval = setInterval(() => {
    t--;
    timerEl.textContent = t + 's';
    if (t <= 5) timerEl.classList.add('urgent');
    if (t <= 0) {
      clearInterval(KANA_STATE.timerInterval);
      const q = KANA_STATE.questions[KANA_STATE.idx];
      if (KANA_STATE.mode === 'type') handleKanaTypedResult(false, q);
      else {
        KANA_STATE.answers.push({ q, correct: false, skipped: true });
        const fb = document.getElementById('kana-feedback');
        fb.className = 'feedback wrong';
        fb.innerHTML = `⏰ Waktu habis! Jawaban: <b>${q.romaji}</b>`;
        fb.classList.remove('hidden');
        document.querySelectorAll('#kana-options .option-btn').forEach(b => b.disabled = true);
        setTimeout(() => nextKanaQuestion(), 1200);
      }
    }
  }, 1000);
}
function clearKanaTimer() {
  if (KANA_STATE.timerInterval) { clearInterval(KANA_STATE.timerInterval); KANA_STATE.timerInterval = null; }
  const el = document.getElementById('kana-timer-display');
  if (el) el.classList.add('hidden');
}

// ===================== KOTOBA QUIZ =====================
const KOT = {
  questions: [], idx: 0, score: 0,
  chapters: [1,2,3,4,5,6,7,8,9,10],
  mode: 'jp-id', format: 'mc', count: 10, timer: 0,
  timerInterval: null, answers: [], currentWord: null,
};

// Build chapter grid
function buildChapterGrid() {
  const grid = document.getElementById('chapterGrid');
  if (!grid) return;
  grid.innerHTML = '';
  for (let i = 1; i <= 50; i++) {
    const btn = document.createElement('button');
    btn.className = 'ch-btn' + (KOT.chapters.includes(i) ? ' selected' : '');
    btn.textContent = i;
    btn.onclick = function() {
      this.classList.toggle('selected');
      const idx = KOT.chapters.indexOf(i);
      if (idx > -1) KOT.chapters.splice(idx, 1);
      else KOT.chapters.push(i);
      KOT.chapters.sort((a, b) => a - b);
      // Update range buttons: clear all active
      document.querySelectorAll('.ch-range-btn').forEach(b => b.classList.remove('active'));
    };
    grid.appendChild(btn);
  }
}
buildChapterGrid();

// Chapter range buttons
document.querySelectorAll('.ch-range-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.ch-range-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const range = this.dataset.range;
    if (range === 'all') KOT.chapters = Array.from({length:50}, (_,i) => i+1);
    else {
      const [start, end] = range.split('-').map(Number);
      KOT.chapters = Array.from({length: end-start+1}, (_,i) => start+i);
    }
    // Update ch-btn visuals
    document.querySelectorAll('.ch-btn').forEach(b => {
      const n = parseInt(b.textContent);
      b.classList.toggle('selected', KOT.chapters.includes(n));
    });
  });
});

document.querySelectorAll('[data-kot-mode]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-kot-mode]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); KOT.mode = this.dataset.kotMode;
}));
document.querySelectorAll('[data-kot-format]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-kot-format]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); KOT.format = this.dataset.kotFormat;
}));
document.querySelectorAll('[data-kot-count]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-kot-count]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); KOT.count = parseInt(this.dataset.kotCount);
}));
document.querySelectorAll('[data-kot-timer]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-kot-timer]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); KOT.timer = parseInt(this.dataset.kotTimer);
}));

function getVocabPool() {
  let pool = [];
  KOT.chapters.forEach(ch => {
    if (VOCAB_DATA[ch]) pool.push(...VOCAB_DATA[ch].map(w => ({...w, chapter: ch})));
  });
  return pool;
}

function startKotobaQuiz() {
  const pool = getVocabPool();
  if (pool.length < 4) { alert('Pilih lebih banyak bab agar kuis bisa berjalan (minimal 4 kata).'); return; }
  KOT.questions = pick(pool, Math.min(KOT.count, pool.length));
  KOT.idx = 0; KOT.score = 0; KOT.answers = [];
  document.getElementById('kotoba-setup').classList.add('hidden');
  document.getElementById('kotoba-result').classList.add('hidden');
  document.getElementById('kotoba-quiz').classList.remove('hidden');
  renderKotobaQuestion();
}

function renderKotobaQuestion() {
  clearKotTimer();
  const q = KOT.questions[KOT.idx];
  KOT.currentWord = q;
  const total = KOT.questions.length;
  document.getElementById('kot-q-num').textContent = KOT.idx + 1;
  document.getElementById('kot-q-total').textContent = total;
  document.getElementById('kot-score').textContent = KOT.score;
  document.getElementById('kot-progress-fill').style.width = (KOT.idx / total * 100) + '%';
  document.getElementById('kotoba-feedback').classList.add('hidden');
  document.getElementById('kot-question-card').classList.remove('correct','wrong');
  document.getElementById('kot-chapter-badge').textContent = 'Bab ' + q.chapter;

  const qEl = document.getElementById('kot-question');
  const subEl = document.getElementById('kot-question-sub');

  if (KOT.mode === 'jp-id') {
    qEl.textContent = q.jp;
    qEl.style.fontFamily = 'var(--font-jp)';
    qEl.style.fontSize = '52px';
    subEl.textContent = q.hiragana !== q.jp ? q.hiragana : '';
  } else if (KOT.mode === 'id-jp') {
    qEl.textContent = q.id;
    qEl.style.fontFamily = 'var(--font-ui)';
    qEl.style.fontSize = '28px';
    subEl.textContent = '';
  } else { // hiragana
    qEl.textContent = q.jp;
    qEl.style.fontFamily = 'var(--font-jp)';
    qEl.style.fontSize = '52px';
    subEl.textContent = '→ Hiragana?';
  }

  const ttsBtn = document.getElementById('kot-tts-btn');
  if (ttsBtn) ttsBtn.style.display = (KOT.mode === 'jp-id' || KOT.mode === 'hiragana') ? 'block' : 'none';

  const pool = getVocabPool();
  const typeArea = document.getElementById('kotoba-type-area');
  const optionsEl = document.getElementById('kotoba-options');

  if (KOT.format === 'type') {
    optionsEl.innerHTML = '';
    typeArea.classList.remove('hidden');
    const inp = document.getElementById('kotoba-type-input');
    inp.value = ''; inp.disabled = false;
    inp.placeholder = KOT.mode === 'jp-id' ? 'Ketik arti dalam Bahasa Indonesia...' : KOT.mode === 'id-jp' ? 'Ketik dalam Jepang/Hiragana...' : 'Ketik Hiragana...';
    inp.focus();
    inp.onkeydown = e => { if (e.key === 'Enter') checkKotobaTyped(); };
  } else {
    typeArea.classList.add('hidden');
    let correctAnswer, getLabel;
    if (KOT.mode === 'jp-id') {
      correctAnswer = q.id;
      getLabel = w => w.id;
    } else if (KOT.mode === 'id-jp') {
      correctAnswer = q.jp;
      getLabel = w => w.jp;
    } else {
      correctAnswer = q.hiragana;
      getLabel = w => w.hiragana;
    }

    const distractors = shuffle(pool.filter(w => getLabel(w) !== correctAnswer)).slice(0, 3);
    const options = shuffle([{ ...q, _isCorrect: true }, ...distractors.map(w => ({ ...w, _isCorrect: false }))]);

    optionsEl.innerHTML = '';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      const label = getLabel(opt);
      btn.textContent = label;
      if (KOT.mode !== 'jp-id') { btn.style.fontFamily = 'var(--font-jp)'; }
      btn.onclick = () => handleKotobaOption(btn, opt._isCorrect, q, correctAnswer);
      optionsEl.appendChild(btn);
    });
  }

  if (KOT.timer > 0) startKotTimer();
}

function handleKotobaOption(btn, isCorrect, q, correctAnswer) {
  clearKotTimer();
  document.querySelectorAll('#kotoba-options .option-btn').forEach(b => b.disabled = true);
  const fb = document.getElementById('kotoba-feedback');
  const card = document.getElementById('kot-question-card');
  if (isCorrect) {
    btn.classList.add('correct');
    KOT.score++;
    fb.className = 'feedback correct';
    fb.innerHTML = `✅ Benar! <b>${q.jp}</b> (${q.hiragana}) = <b>${q.id}</b>`;
    card.classList.add('correct');
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#kotoba-options .option-btn').forEach(b => {
      if (b.textContent === correctAnswer) b.classList.add('correct');
    });
    fb.className = 'feedback wrong';
    fb.innerHTML = `❌ Salah! Jawaban: <b>${correctAnswer}</b> — ${q.jp} = ${q.id}`;
    card.classList.add('wrong');
  }
  fb.classList.remove('hidden');
  KOT.answers.push({ q, correct: isCorrect, correctAnswer });
  setTimeout(() => nextKotobaQuestion(), 1300);
}

function checkKotobaTyped() {
  const inp = document.getElementById('kotoba-type-input');
  const q = KOT.currentWord;
  const val = inp.value.trim().toLowerCase();
  let correct = false, correctAnswer = '';
  if (KOT.mode === 'jp-id') {
    correctAnswer = q.id;
    correct = val === q.id.toLowerCase() || val === q.romaji.toLowerCase();
  } else if (KOT.mode === 'id-jp') {
    correctAnswer = q.jp;
    correct = val === q.jp || val === q.hiragana || val === q.romaji.toLowerCase();
  } else {
    correctAnswer = q.hiragana;
    correct = val === q.hiragana || val === q.romaji.toLowerCase();
  }
  clearKotTimer();
  inp.disabled = true;
  const fb = document.getElementById('kotoba-feedback');
  const card = document.getElementById('kot-question-card');
  if (correct) {
    KOT.score++;
    fb.className = 'feedback correct';
    fb.innerHTML = `✅ Benar! <b>${q.jp}</b> (${q.hiragana}) = <b>${q.id}</b>`;
    card.classList.add('correct');
  } else {
    fb.className = 'feedback wrong';
    fb.innerHTML = `❌ Salah! Jawaban: <b>${correctAnswer}</b> — ${q.jp} = ${q.id}`;
    card.classList.add('wrong');
  }
  fb.classList.remove('hidden');
  KOT.answers.push({ q, correct, correctAnswer });
  setTimeout(() => nextKotobaQuestion(), 1400);
}

function nextKotobaQuestion() {
  KOT.idx++;
  if (KOT.idx >= KOT.questions.length) showKotobaResult();
  else renderKotobaQuestion();
}

function skipKotobaQuestion() {
  KOT.answers.push({ q: KOT.currentWord, correct: false, skipped: true, correctAnswer: '' });
  KOT.idx++;
  if (KOT.idx >= KOT.questions.length) showKotobaResult();
  else renderKotobaQuestion();
}

function showKotobaResult() {
  clearKotTimer();
  const { score, questions, answers } = KOT;
  const total = questions.length;
  const pct = Math.round((score / total) * 100);
  recordSession('Kuis Kosakata', score, total);

  document.getElementById('kotoba-quiz').classList.add('hidden');
  document.getElementById('kotoba-result').classList.remove('hidden');
  document.getElementById('kot-result-emoji').textContent = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '😅';
  document.getElementById('kot-result-score').textContent = pct + '%';
  document.getElementById('kot-result-details').innerHTML = `
    Benar: <b>${score}</b> / ${total} soal &nbsp;|&nbsp; 
    Bab: <b>${[...new Set(answers.map(a => a.q?.chapter))].join(', ')}</b>
  `;
  const rev = document.getElementById('kotoba-review');
  rev.innerHTML = '<h4 style="font-size:14px;font-weight:700;margin-bottom:10px">Review Jawaban:</h4>' +
    answers.map(a => `
      <div class="review-item ${a.correct ? 'correct' : 'wrong'}">
        <div class="r-q">${a.q?.jp || ''} <span style="font-size:13px;font-weight:400">${a.q?.hiragana || ''}</span></div>
        <div class="r-info">${a.correct ? '✅' : '❌'} ${a.q?.id || ''}${a.skipped ? ' (dilewati)' : ''}</div>
      </div>
    `).join('');
}

function speakKotoba() {
  if (!KOT.currentWord) return;
  const utterance = new SpeechSynthesisUtterance(KOT.currentWord.jp);
  utterance.lang = 'ja-JP'; utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

function restartKotobaQuiz() { startKotobaQuiz(); }
function showKotobaSetup() {
  document.getElementById('kotoba-quiz').classList.add('hidden');
  document.getElementById('kotoba-result').classList.add('hidden');
  document.getElementById('kotoba-setup').classList.remove('hidden');
}

// Kotoba Timer
function startKotTimer() {
  let t = KOT.timer;
  const timerEl = document.getElementById('kot-timer-display');
  timerEl.classList.remove('hidden', 'urgent');
  timerEl.textContent = t + 's';
  KOT.timerInterval = setInterval(() => {
    t--;
    timerEl.textContent = t + 's';
    if (t <= 5) timerEl.classList.add('urgent');
    if (t <= 0) {
      clearInterval(KOT.timerInterval);
      const q = KOT.currentWord;
      if (KOT.format === 'type') {
        KOT.answers.push({ q, correct: false, skipped: true, correctAnswer: '' });
        const fb = document.getElementById('kotoba-feedback');
        fb.className = 'feedback wrong';
        fb.innerHTML = `⏰ Waktu habis! <b>${q.jp}</b> = <b>${q.id}</b>`;
        fb.classList.remove('hidden');
        setTimeout(() => nextKotobaQuestion(), 1200);
      } else {
        document.querySelectorAll('#kotoba-options .option-btn').forEach(b => b.disabled = true);
        KOT.answers.push({ q, correct: false, skipped: true, correctAnswer: '' });
        const fb = document.getElementById('kotoba-feedback');
        fb.className = 'feedback wrong';
        fb.innerHTML = `⏰ Waktu habis! <b>${q.jp}</b> = <b>${q.id}</b>`;
        fb.classList.remove('hidden');
        setTimeout(() => nextKotobaQuestion(), 1200);
      }
    }
  }, 1000);
}
function clearKotTimer() {
  if (KOT.timerInterval) { clearInterval(KOT.timerInterval); KOT.timerInterval = null; }
  const el = document.getElementById('kot-timer-display');
  if (el) el.classList.add('hidden');
}

// ===================== VOCAB LIST =====================
let vocabInited = false;
function initVocabList() {
  if (vocabInited) { filterVocab(); return; }
  vocabInited = true;
  const sel = document.getElementById('vocab-chapter-filter');
  if (sel) {
    for (let i = 1; i <= 50; i++) {
      const opt = document.createElement('option');
      opt.value = i; opt.textContent = 'Bab ' + i;
      sel.appendChild(opt);
    }
  }
  filterVocab();
}

function filterVocab() {
  const search = document.getElementById('vocab-search')?.value.toLowerCase() || '';
  const chapter = document.getElementById('vocab-chapter-filter')?.value || 'all';
  const type = document.getElementById('vocab-type-filter')?.value || 'all';
  let rows = [];
  for (let ch = 1; ch <= 50; ch++) {
    if (chapter !== 'all' && parseInt(chapter) !== ch) continue;
    (VOCAB_DATA[ch] || []).forEach(w => {
      if (type !== 'all' && !w.type.includes(type)) return;
      if (search && !w.jp.includes(search) && !w.hiragana?.includes(search) &&
          !w.romaji.toLowerCase().includes(search) && !w.id.toLowerCase().includes(search)) return;
      rows.push({ ...w, chapter: ch });
    });
  }
  const tbody = document.getElementById('vocabTableBody');
  if (tbody) {
    tbody.innerHTML = rows.map(w => `
      <tr>
        <td class="jp-cell">${w.jp}</td>
        <td class="hira-cell">${w.hiragana || '-'}</td>
        <td class="romaji-cell">${w.romaji}</td>
        <td>${w.id}</td>
        <td><span class="type-tag ${getTypeClass(w.type)}">${w.type}</span></td>
        <td style="font-family:var(--font-mono);font-size:12px">${w.chapter}</td>
      </tr>
    `).join('');
  }
  const count = document.getElementById('vocabCount');
  if (count) count.textContent = `Menampilkan ${rows.length} kata`;
}

function getTypeClass(type) {
  if (type.includes('kerja')) return 'verb';
  if (type.includes('sifat')) return 'adj';
  if (type.includes('benda') || type.includes('ganti') || type.includes('tempat') || type.includes('tunjuk')) return 'noun';
  return 'expr';
}

// ===================== KANJI LIST =====================
let kanjiInited = false;
function initKanjiList() {
  if (kanjiInited) { filterKanji(); return; }
  kanjiInited = true;
  filterKanji();
}

function filterKanji() {
  const search = document.getElementById('kanji-search')?.value.toLowerCase() || '';
  const level = document.getElementById('kanji-level-filter')?.value || 'all';
  const filtered = KANJI_DATA.filter(k => {
    if (level !== 'all' && k.level !== level) return false;
    if (search && !k.kanji.includes(search) && !k.meaning.toLowerCase().includes(search) &&
        !k.on.toLowerCase().includes(search) && !k.kun.toLowerCase().includes(search)) return false;
    return true;
  });
  const grid = document.getElementById('kanjiGrid');
  if (grid) {
    grid.innerHTML = filtered.map(k => `
      <div class="kanji-card">
        <div class="kc-char">${k.kanji}</div>
        <div class="kc-meaning">${k.meaning}</div>
        <div class="kc-reading">On: ${k.on}</div>
        <div class="kc-reading">Kun: ${k.kun}</div>
        <div class="kc-reading" style="margin-top:4px;color:var(--text3)">${k.example}</div>
        <div class="kc-level">${k.level}</div>
      </div>
    `).join('');
  }
}

// ===================== FLASHCARD =====================
const FC = { deck: [], idx: 0, hafal: 0, belum: 0, level: 'N5', flipped: false };

document.querySelectorAll('[data-fc-level]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-fc-level]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); FC.level = this.dataset.fcLevel;
}));

function startFlashcard() {
  let pool = FC.level === 'all' ? KANJI_DATA : KANJI_DATA.filter(k => k.level === FC.level);
  FC.deck = shuffle(pool);
  FC.idx = 0; FC.hafal = 0; FC.belum = 0;
  document.getElementById('flashcard-setup').classList.add('hidden');
  document.getElementById('flashcard-done').classList.add('hidden');
  document.getElementById('flashcard-area').classList.remove('hidden');
  renderFlashcard();
}

function renderFlashcard() {
  if (FC.idx >= FC.deck.length) { showFlashcardDone(); return; }
  const k = FC.deck[FC.idx];
  FC.flipped = false;
  const card = document.getElementById('flashcard');
  card.classList.remove('flipped');
  document.getElementById('fc-kanji').textContent = k.kanji;
  document.getElementById('fc-kanji-back').textContent = k.kanji;
  document.getElementById('fc-level-badge').textContent = k.level;
  document.getElementById('fc-meaning').textContent = k.meaning;
  document.getElementById('fc-on').textContent = k.on;
  document.getElementById('fc-kun').textContent = k.kun;
  document.getElementById('fc-example').textContent = k.example;
  document.getElementById('fc-actions').style.display = 'none';
  document.getElementById('fc-hafal').textContent = FC.hafal;
  document.getElementById('fc-belum').textContent = FC.belum;
  document.getElementById('fc-sisa').textContent = FC.deck.length - FC.idx;
}

function flipCard() {
  FC.flipped = !FC.flipped;
  document.getElementById('flashcard').classList.toggle('flipped', FC.flipped);
  document.getElementById('fc-actions').style.display = FC.flipped ? 'flex' : 'none';
}

function markCard(status) {
  if (status === 'hafal') FC.hafal++;
  else if (status === 'belum') FC.belum++;
  else { FC.deck.push(FC.deck[FC.idx]); } // ulangi: push back
  FC.idx++;
  renderFlashcard();
}

function showFlashcardDone() {
  document.getElementById('flashcard-area').classList.add('hidden');
  document.getElementById('flashcard-done').classList.remove('hidden');
  document.getElementById('fc-done-stats').innerHTML = `
    ✅ Hafal: <b>${FC.hafal}</b> kartu<br>
    😅 Belum: <b>${FC.belum}</b> kartu<br>
    Total: <b>${FC.hafal + FC.belum}</b> kartu
  `;
}

function showFlashcardSetup() {
  document.getElementById('flashcard-area').classList.add('hidden');
  document.getElementById('flashcard-done').classList.add('hidden');
  document.getElementById('flashcard-setup').classList.remove('hidden');
}

// ===================== STROKE ORDER =====================
const STROKE_DATA = {};
function buildStrokeData() {
  HIRAGANA_DATA.filter(k => k.group === 'dasar').forEach(k => {
    STROKE_DATA['h_' + k.kana] = {
      kana: k.kana, romaji: k.romaji, type: 'Hiragana',
      desc: `Hiragana "${k.kana}" dibaca "${k.romaji}"`,
      strokes: generateFakeStrokes(k.kana)
    };
  });
  KATAKANA_DATA.filter(k => k.group === 'dasar').forEach(k => {
    STROKE_DATA['k_' + k.kana] = {
      kana: k.kana, romaji: k.romaji, type: 'Katakana',
      desc: `Katakana "${k.kana}" dibaca "${k.romaji}"`,
      strokes: generateFakeStrokes(k.kana)
    };
  });
}

// Simulate stroke progression with partial character display
function generateFakeStrokes(kana) {
  const strokCount = Math.floor(Math.random() * 2) + 2;
  return Array.from({ length: strokCount }, (_, i) => kana);
}

buildStrokeData();

function loadStrokeGrid(type, btn) {
  if (btn) {
    document.querySelectorAll('[data-stroke-type]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  const pool = type === 'hiragana'
    ? HIRAGANA_DATA.filter(k => k.group === 'dasar')
    : KATAKANA_DATA.filter(k => k.group === 'dasar');
  const grid = document.getElementById('strokeCharGrid');
  if (!grid) return;
  grid.innerHTML = pool.map(k => `
    <button class="stroke-char-btn" onclick="showStroke('${type}','${k.kana}')">
      ${k.kana}
      <span class="romaji-hint">${k.romaji}</span>
    </button>
  `).join('');
  document.getElementById('strokeDisplay')?.classList.add('hidden');
}

function showStroke(type, kana) {
  const key = (type === 'hiragana' ? 'h_' : 'k_') + kana;
  const data = STROKE_DATA[key];
  if (!data) return;
  document.getElementById('strokeBigChar').textContent = kana;
  document.getElementById('strokeRomaji').textContent = data.romaji;
  document.getElementById('strokeDesc').textContent = data.desc;
  const steps = document.getElementById('strokeSteps');
  steps.innerHTML = data.strokes.map((_, i) => `
    <div class="stroke-step">
      <div class="stroke-step-num">${i + 1}</div>
      <div class="stroke-step-char">${kana}</div>
    </div>
  `).join('');
  document.getElementById('strokeDisplay').classList.remove('hidden');
}

// ===================== STATS PAGE =====================
function renderStats() {
  const s = getStats();
  const pct = s.totalAnswered > 0 ? Math.round((s.totalCorrect / s.totalAnswered) * 100) : 0;
  const el = document.getElementById('stats-content');
  if (!el) return;
  el.innerHTML = `
    <div class="stats-section">
      <h3>📊 Ringkasan</h3>
      <div class="stats-grid">
        <div class="stats-card"><div class="sc-value">${s.totalAnswered}</div><div class="sc-label">Total Soal Dijawab</div></div>
        <div class="stats-card"><div class="sc-value">${s.totalCorrect}</div><div class="sc-label">Jawaban Benar</div></div>
        <div class="stats-card"><div class="sc-value">${pct}%</div><div class="sc-label">Akurasi Keseluruhan</div></div>
        <div class="stats-card"><div class="sc-value">${s.totalSessions}</div><div class="sc-label">Total Sesi</div></div>
        <div class="stats-card"><div class="sc-value">${s.highScore}%</div><div class="sc-label">Skor Tertinggi</div></div>
      </div>
    </div>
    <div class="stats-section">
      <h3>📋 Riwayat Terakhir</h3>
      ${s.history.length === 0
        ? '<p style="color:var(--text2);font-size:14px">Belum ada riwayat. Mulai kuis untuk mencatat progres!</p>'
        : `<div class="history-list">${s.history.slice(0, 20).map(h => `
          <div class="history-item">
            <div class="hi-icon">${h.type.includes('Kana') ? 'あ' : h.type.includes('Kanji') ? '漢' : '💬'}</div>
            <div class="hi-info">
              <div class="hi-title">${h.type}</div>
              <div class="hi-meta">${h.date} &nbsp;•&nbsp; ${h.correct}/${h.total} benar</div>
            </div>
            <div class="hi-score ${h.pct >= 80 ? 'good' : h.pct >= 50 ? 'ok' : 'bad'}">${h.pct}%</div>
          </div>
        `).join('')}</div>`
      }
      ${s.history.length > 0 ? `<button class="btn-secondary" style="margin-top:14px" onclick="clearHistory()">🗑️ Hapus Riwayat</button>` : ''}
    </div>
  `;
}

function clearHistory() {
  if (!confirm('Yakin ingin menghapus semua riwayat?')) return;
  const s = getStats();
  s.history = []; s.totalAnswered = 0; s.totalCorrect = 0; s.totalSessions = 0; s.highScore = 0;
  saveStats(s);
  updateHomeStats();
  renderStats();
}

// ===================== KANJI QUIZ =====================
const KQ = {
  questions: [], idx: 0, score: 0,
  level: 'N5', mode: 'kanji-arti', count: 10, timer: 0,
  timerInterval: null, answers: [],
};

document.querySelectorAll('[data-kq-level]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-kq-level]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); KQ.level = this.dataset.kqLevel;
}));
document.querySelectorAll('[data-kq-mode]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-kq-mode]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); KQ.mode = this.dataset.kqMode;
}));
document.querySelectorAll('[data-kq-count]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-kq-count]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); KQ.count = parseInt(this.dataset.kqCount);
}));
document.querySelectorAll('[data-kq-timer]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-kq-timer]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); KQ.timer = parseInt(this.dataset.kqTimer);
}));

function startKanjiQuiz() {
  const pool = KQ.level === 'all' ? KANJI_DATA : KANJI_DATA.filter(k => k.level === KQ.level);
  if (pool.length < 4) { alert('Data kanji tidak cukup untuk level ini.'); return; }
  KQ.questions = pick(pool, Math.min(KQ.count, pool.length));
  KQ.idx = 0; KQ.score = 0; KQ.answers = [];
  document.getElementById('kanji-quiz-setup').classList.add('hidden');
  document.getElementById('kanji-quiz-result').classList.add('hidden');
  document.getElementById('kanji-quiz-area').classList.remove('hidden');
  renderKanjiQuestion();
}

function renderKanjiQuestion() {
  clearKQTimer();
  const q = KQ.questions[KQ.idx];
  const total = KQ.questions.length;
  document.getElementById('kq-q-num').textContent = KQ.idx + 1;
  document.getElementById('kq-q-total').textContent = total;
  document.getElementById('kq-score').textContent = KQ.score;
  document.getElementById('kq-progress-fill').style.width = (KQ.idx / total * 100) + '%';
  document.getElementById('kq-feedback').classList.add('hidden');
  document.getElementById('kq-question-card').classList.remove('correct','wrong');
  document.getElementById('kq-level-badge').textContent = q.level;

  const qEl = document.getElementById('kq-question');
  let correctAnswer, getLabel;

  if (KQ.mode === 'kanji-arti') {
    qEl.textContent = q.kanji;
    qEl.style.fontFamily = 'var(--font-jp)';
    qEl.style.fontSize = '72px';
    correctAnswer = q.meaning;
    getLabel = k => k.meaning;
  } else if (KQ.mode === 'arti-kanji') {
    qEl.textContent = q.meaning;
    qEl.style.fontFamily = 'var(--font-ui)';
    qEl.style.fontSize = '28px';
    correctAnswer = q.kanji;
    getLabel = k => k.kanji;
  } else {
    qEl.textContent = q.kanji;
    qEl.style.fontFamily = 'var(--font-jp)';
    qEl.style.fontSize = '72px';
    correctAnswer = q.on + ' / ' + q.kun;
    getLabel = k => k.on + ' / ' + k.kun;
  }

  const pool = KQ.level === 'all' ? KANJI_DATA : KANJI_DATA.filter(k => k.level === KQ.level);
  const distractors = shuffle(pool.filter(k => getLabel(k) !== correctAnswer)).slice(0, 3);
  const options = shuffle([{ ...q, _correct: true }, ...distractors.map(k => ({ ...k, _correct: false }))]);

  const optEl = document.getElementById('kq-options');
  optEl.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = getLabel(opt);
    if (KQ.mode !== 'arti-kanji' && KQ.mode !== 'kanji-arti') btn.style.fontFamily = 'var(--font-jp)';
    if (KQ.mode === 'arti-kanji') { btn.style.fontFamily = 'var(--font-jp)'; btn.style.fontSize = '28px'; }
    btn.onclick = () => handleKQOption(btn, opt._correct, q, correctAnswer, getLabel);
    optEl.appendChild(btn);
  });

  if (KQ.timer > 0) startKQTimer();
}

function handleKQOption(btn, isCorrect, q, correctAnswer, getLabel) {
  clearKQTimer();
  document.querySelectorAll('#kq-options .option-btn').forEach(b => b.disabled = true);
  const fb = document.getElementById('kq-feedback');
  const card = document.getElementById('kq-question-card');
  if (isCorrect) {
    btn.classList.add('correct');
    KQ.score++;
    fb.className = 'feedback correct';
    fb.innerHTML = `✅ Benar! <b>${q.kanji}</b> = ${q.meaning} (${q.on} / ${q.kun})`;
    card.classList.add('correct');
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#kq-options .option-btn').forEach(b => {
      if (getLabel(KQ.questions.find(x => getLabel(x) === correctAnswer) || {}) === b.textContent ||
          b.textContent === correctAnswer) b.classList.add('correct');
    });
    fb.className = 'feedback wrong';
    fb.innerHTML = `❌ Salah! <b>${q.kanji}</b> = ${q.meaning} (${q.on} / ${q.kun})`;
    card.classList.add('wrong');
  }
  fb.classList.remove('hidden');
  KQ.answers.push({ q, correct: isCorrect });
  setTimeout(() => {
    KQ.idx++;
    if (KQ.idx >= KQ.questions.length) showKQResult();
    else renderKanjiQuestion();
  }, 1300);
}

function skipKQQuestion() {
  KQ.answers.push({ q: KQ.questions[KQ.idx], correct: false, skipped: true });
  KQ.idx++;
  if (KQ.idx >= KQ.questions.length) showKQResult();
  else renderKanjiQuestion();
}

function showKQResult() {
  clearKQTimer();
  const total = KQ.questions.length;
  const pct = Math.round((KQ.score / total) * 100);
  recordSession('Kuis Kanji', KQ.score, total);
  document.getElementById('kanji-quiz-area').classList.add('hidden');
  document.getElementById('kanji-quiz-result').classList.remove('hidden');
  document.getElementById('kq-result-emoji').textContent = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '😅';
  document.getElementById('kq-result-score').textContent = pct + '%';
  document.getElementById('kq-result-details').innerHTML = `Benar: <b>${KQ.score}</b> / ${total} soal`;
  const rev = document.getElementById('kq-review');
  rev.innerHTML = '<h4 style="font-size:14px;font-weight:700;margin-bottom:10px">Review:</h4>' +
    KQ.answers.map(a => `
      <div class="review-item ${a.correct ? 'correct' : 'wrong'}">
        <div class="r-q" style="font-family:var(--font-jp)">${a.q.kanji}</div>
        <div class="r-info">${a.correct ? '✅' : '❌'} ${a.q.meaning} | On: ${a.q.on} | Kun: ${a.q.kun}</div>
      </div>
    `).join('');
}

function restartKQQuiz() { startKanjiQuiz(); }
function showKQSetup() {
  document.getElementById('kanji-quiz-area').classList.add('hidden');
  document.getElementById('kanji-quiz-result').classList.add('hidden');
  document.getElementById('kanji-quiz-setup').classList.remove('hidden');
}

function startKQTimer() {
  let t = KQ.timer;
  const timerEl = document.getElementById('kq-timer-display');
  timerEl.classList.remove('hidden', 'urgent');
  timerEl.textContent = t + 's';
  KQ.timerInterval = setInterval(() => {
    t--;
    timerEl.textContent = t + 's';
    if (t <= 5) timerEl.classList.add('urgent');
    if (t <= 0) {
      clearInterval(KQ.timerInterval);
      KQ.answers.push({ q: KQ.questions[KQ.idx], correct: false, skipped: true });
      const fb = document.getElementById('kq-feedback');
      fb.className = 'feedback wrong';
      fb.innerHTML = `⏰ Waktu habis!`;
      fb.classList.remove('hidden');
      document.querySelectorAll('#kq-options .option-btn').forEach(b => b.disabled = true);
      setTimeout(() => {
        KQ.idx++;
        if (KQ.idx >= KQ.questions.length) showKQResult();
        else renderKanjiQuestion();
      }, 1200);
    }
  }, 1000);
}
function clearKQTimer() {
  if (KQ.timerInterval) { clearInterval(KQ.timerInterval); KQ.timerInterval = null; }
  const el = document.getElementById('kq-timer-display');
  if (el) el.classList.add('hidden');
}

// ===================== BUNPOU QUIZ =====================
const BQ = {
  questions: [], idx: 0, score: 0,
  mode: 'pola-arti', count: 10, answers: [],
};

document.querySelectorAll('[data-bq-mode]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-bq-mode]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); BQ.mode = this.dataset.bqMode;
}));
document.querySelectorAll('[data-bq-count]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-bq-count]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); BQ.count = parseInt(this.dataset.bqCount);
}));

function startBunpouQuiz() {
  if (BUNPOU_DATA.length < 4) { alert('Data tata bahasa tidak cukup.'); return; }
  BQ.questions = pick(BUNPOU_DATA, Math.min(BQ.count, BUNPOU_DATA.length));
  BQ.idx = 0; BQ.score = 0; BQ.answers = [];
  document.getElementById('bunpou-setup').classList.add('hidden');
  document.getElementById('bunpou-result').classList.add('hidden');
  document.getElementById('bunpou-quiz').classList.remove('hidden');
  renderBQQuestion();
}

function renderBQQuestion() {
  const q = BQ.questions[BQ.idx];
  const total = BQ.questions.length;
  document.getElementById('bq-q-num').textContent = BQ.idx + 1;
  document.getElementById('bq-q-total').textContent = total;
  document.getElementById('bq-score').textContent = BQ.score;
  document.getElementById('bq-progress-fill').style.width = (BQ.idx / total * 100) + '%';
  document.getElementById('bq-feedback').classList.add('hidden');
  document.getElementById('bq-question-card').classList.remove('correct','wrong');

  const qEl = document.getElementById('bq-question');
  const subEl = document.getElementById('bq-question-sub');
  let correctAnswer, getLabel;

  if (BQ.mode === 'pola-arti') {
    qEl.textContent = q.pola;
    qEl.style.fontFamily = 'var(--font-jp)'; qEl.style.fontSize = '42px';
    subEl.textContent = 'Bab ' + q.chapter;
    correctAnswer = q.arti;
    getLabel = g => g.arti;
  } else if (BQ.mode === 'arti-pola') {
    qEl.textContent = q.arti;
    qEl.style.fontFamily = 'var(--font-ui)'; qEl.style.fontSize = '24px';
    subEl.textContent = 'Pilih pola kalimat yang benar';
    correctAnswer = q.pola;
    getLabel = g => g.pola;
  } else {
    qEl.textContent = q.contoh;
    qEl.style.fontFamily = 'var(--font-jp)'; qEl.style.fontSize = '22px';
    subEl.textContent = q.contoh_id;
    correctAnswer = q.pola;
    getLabel = g => g.pola;
  }

  const distractors = shuffle(BUNPOU_DATA.filter(g => getLabel(g) !== correctAnswer)).slice(0, 3);
  const options = shuffle([{ ...q, _correct: true }, ...distractors.map(g => ({ ...g, _correct: false }))]);

  const optEl = document.getElementById('bq-options');
  optEl.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = getLabel(opt);
    if (BQ.mode !== 'pola-arti') btn.style.fontFamily = 'var(--font-jp)';
    btn.onclick = () => handleBQOption(btn, opt._correct, q);
    optEl.appendChild(btn);
  });
}

function handleBQOption(btn, isCorrect, q) {
  document.querySelectorAll('#bq-options .option-btn').forEach(b => b.disabled = true);
  const fb = document.getElementById('bq-feedback');
  const card = document.getElementById('bq-question-card');
  if (isCorrect) {
    btn.classList.add('correct');
    BQ.score++;
    fb.className = 'feedback correct';
    fb.innerHTML = `✅ Benar! <b>${q.pola}</b> = ${q.arti}<br><small>${q.contoh} — ${q.contoh_id}</small>`;
    card.classList.add('correct');
  } else {
    btn.classList.add('wrong');
    fb.className = 'feedback wrong';
    fb.innerHTML = `❌ Salah! <b>${q.pola}</b> = ${q.arti}<br><small>${q.contoh}</small>`;
    card.classList.add('wrong');
  }
  fb.classList.remove('hidden');
  BQ.answers.push({ q, correct: isCorrect });
  setTimeout(() => {
    BQ.idx++;
    if (BQ.idx >= BQ.questions.length) showBQResult();
    else renderBQQuestion();
  }, 1500);
}

function skipBQQuestion() {
  BQ.answers.push({ q: BQ.questions[BQ.idx], correct: false, skipped: true });
  BQ.idx++;
  if (BQ.idx >= BQ.questions.length) showBQResult();
  else renderBQQuestion();
}

function showBQResult() {
  const total = BQ.questions.length;
  const pct = Math.round((BQ.score / total) * 100);
  recordSession('Kuis Tata Bahasa', BQ.score, total);
  document.getElementById('bunpou-quiz').classList.add('hidden');
  document.getElementById('bunpou-result').classList.remove('hidden');
  document.getElementById('bq-result-emoji').textContent = pct >= 80 ? '🎉' : pct >= 50 ? '📝' : '😅';
  document.getElementById('bq-result-score').textContent = pct + '%';
  document.getElementById('bq-result-details').innerHTML = `Benar: <b>${BQ.score}</b> / ${total} soal`;
  const rev = document.getElementById('bq-review');
  rev.innerHTML = '<h4 style="font-size:14px;font-weight:700;margin-bottom:10px">Review:</h4>' +
    BQ.answers.map(a => `
      <div class="review-item ${a.correct ? 'correct' : 'wrong'}">
        <div class="r-q" style="font-family:var(--font-jp)">${a.q.pola}</div>
        <div class="r-info">${a.correct ? '✅' : '❌'} ${a.q.arti}</div>
      </div>
    `).join('');
}

function restartBQQuiz() { startBunpouQuiz(); }
function showBQSetup() {
  document.getElementById('bunpou-quiz').classList.add('hidden');
  document.getElementById('bunpou-result').classList.add('hidden');
  document.getElementById('bunpou-setup').classList.remove('hidden');
}

// ===================== SSW QUIZ =====================
const SSW_STATE = {
  questions: [], idx: 0, score: 0,
  sector: 'pertanian', mode: 'jp-id', count: 10, timer: 0,
  timerInterval: null, answers: [], simMode: false,
  simStartTime: null,
};

document.querySelectorAll('[data-ssw-sector]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-ssw-sector]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); SSW_STATE.sector = this.dataset.sswSector;
}));
document.querySelectorAll('[data-ssw-mode]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-ssw-mode]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); SSW_STATE.mode = this.dataset.sswMode;
}));
document.querySelectorAll('[data-ssw-count]').forEach(b => b.addEventListener('click', function() {
  document.querySelectorAll('[data-ssw-count]').forEach(x => x.classList.remove('active'));
  this.classList.add('active'); SSW_STATE.count = parseInt(this.dataset.sswCount);
}));

function startSSWQuiz() {
  let pool = SSW_STATE.sector === 'all'
    ? Object.values(SSW_DATA).flat()
    : (SSW_DATA[SSW_STATE.sector] || []);
  if (pool.length < 4) { alert('Data SSW sektor ini tidak cukup.'); return; }
  SSW_STATE.questions = pick(pool, Math.min(SSW_STATE.count, pool.length));
  SSW_STATE.idx = 0; SSW_STATE.score = 0; SSW_STATE.answers = [];
  SSW_STATE.simMode = false;
  document.getElementById('ssw-setup').classList.add('hidden');
  document.getElementById('ssw-result').classList.add('hidden');
  document.getElementById('ssw-quiz').classList.remove('hidden');
  renderSSWQuestion();
}

function startSSWSim() {
  const pool = Object.values(SSW_DATA).flat();
  SSW_STATE.questions = pick(pool, 30);
  SSW_STATE.idx = 0; SSW_STATE.score = 0; SSW_STATE.answers = [];
  SSW_STATE.simMode = true;
  SSW_STATE.simStartTime = Date.now();
  SSW_STATE.timer = 40 * 60; // 40 menit dalam detik
  document.getElementById('ssw-setup').classList.add('hidden');
  document.getElementById('ssw-result').classList.add('hidden');
  document.getElementById('ssw-quiz').classList.remove('hidden');
  renderSSWQuestion();
  startSSWSimTimer();
}

function startSSWSimTimer() {
  const timerEl = document.getElementById('ssw-timer-display');
  timerEl?.classList.remove('hidden');
  let remaining = SSW_STATE.timer;
  SSW_STATE.timerInterval = setInterval(() => {
    remaining--;
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    if (timerEl) timerEl.textContent = m + ':' + String(s).padStart(2, '0');
    if (remaining <= 300) timerEl?.classList.add('urgent');
    if (remaining <= 0) {
      clearInterval(SSW_STATE.timerInterval);
      showSSWResult();
    }
  }, 1000);
}

function renderSSWQuestion() {
  const q = SSW_STATE.questions[SSW_STATE.idx];
  const total = SSW_STATE.questions.length;
  document.getElementById('ssw-q-num').textContent = SSW_STATE.idx + 1;
  document.getElementById('ssw-q-total').textContent = total;
  document.getElementById('ssw-score').textContent = SSW_STATE.score;
  document.getElementById('ssw-progress-fill').style.width = (SSW_STATE.idx / total * 100) + '%';
  document.getElementById('ssw-feedback').classList.add('hidden');
  document.getElementById('ssw-question-card').classList.remove('correct','wrong');

  const qEl = document.getElementById('ssw-question');
  const mode = SSW_STATE.mode;
  let correctAnswer, getLabel, pool;

  pool = Object.values(SSW_DATA).flat();

  if (mode === 'jp-id') {
    qEl.textContent = q.jp;
    qEl.style.fontFamily = 'var(--font-jp)'; qEl.style.fontSize = '42px';
    correctAnswer = q.id;
    getLabel = w => w.id;
  } else if (mode === 'id-jp') {
    qEl.textContent = q.id;
    qEl.style.fontFamily = 'var(--font-ui)'; qEl.style.fontSize = '24px';
    correctAnswer = q.jp;
    getLabel = w => w.jp;
  } else {
    qEl.textContent = q.jp;
    qEl.style.fontFamily = 'var(--font-jp)'; qEl.style.fontSize = '42px';
    correctAnswer = q.hiragana;
    getLabel = w => w.hiragana;
  }

  const distractors = shuffle(pool.filter(w => getLabel(w) !== correctAnswer)).slice(0, 3);
  const options = shuffle([{ ...q, _c: true }, ...distractors.map(w => ({ ...w, _c: false }))]);

  const optEl = document.getElementById('ssw-options');
  optEl.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = getLabel(opt);
    if (mode !== 'jp-id') btn.style.fontFamily = 'var(--font-jp)';
    btn.onclick = () => handleSSWOption(btn, opt._c, q, correctAnswer);
    optEl.appendChild(btn);
  });
}

function handleSSWOption(btn, isCorrect, q, correctAnswer) {
  if (!SSW_STATE.simMode && SSW_STATE.timerInterval) clearInterval(SSW_STATE.timerInterval);
  document.querySelectorAll('#ssw-options .option-btn').forEach(b => b.disabled = true);
  const fb = document.getElementById('ssw-feedback');
  const card = document.getElementById('ssw-question-card');
  if (isCorrect) {
    btn.classList.add('correct');
    SSW_STATE.score++;
    fb.className = 'feedback correct';
    fb.innerHTML = `✅ Benar! <b>${q.jp}</b> = <b>${q.id}</b>`;
    card.classList.add('correct');
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#ssw-options .option-btn').forEach(b => {
      if (b.textContent === correctAnswer) b.classList.add('correct');
    });
    fb.className = 'feedback wrong';
    fb.innerHTML = `❌ Salah! <b>${q.jp}</b> = <b>${q.id}</b>`;
    card.classList.add('wrong');
  }
  fb.classList.remove('hidden');
  SSW_STATE.answers.push({ q, correct: isCorrect });
  setTimeout(() => {
    SSW_STATE.idx++;
    if (SSW_STATE.idx >= SSW_STATE.questions.length) showSSWResult();
    else renderSSWQuestion();
  }, 1300);
}

function showSSWResult() {
  if (SSW_STATE.timerInterval) { clearInterval(SSW_STATE.timerInterval); SSW_STATE.timerInterval = null; }
  const total = SSW_STATE.questions.length;
  const pct = total > 0 ? Math.round((SSW_STATE.score / total) * 100) : 0;
  recordSession('Kuis SSW', SSW_STATE.score, total);
  document.getElementById('ssw-quiz').classList.add('hidden');
  document.getElementById('ssw-result').classList.remove('hidden');

  const pass = SSW_STATE.simMode ? SSW_STATE.score >= 20 : pct >= 65;
  document.getElementById('ssw-result-emoji').textContent = pass ? '🎊' : '😅';
  document.getElementById('ssw-result-score').textContent = pct + '%';
  let detail = `Benar: <b>${SSW_STATE.score}</b> / ${total} soal`;
  if (SSW_STATE.simMode) {
    const elapsed = Math.round((Date.now() - SSW_STATE.simStartTime) / 1000);
    const m = Math.floor(elapsed / 60), s = elapsed % 60;
    detail += `<br>Waktu: <b>${m} menit ${s} detik</b>`;
    detail += `<br><b>${pass ? '✅ LULUS! Selamat!' : '❌ Belum lulus. Terus belajar!'}</b> (Min. 20/30 benar)`;
  }
  document.getElementById('ssw-result-details').innerHTML = detail;
  const rev = document.getElementById('ssw-review');
  rev.innerHTML = '<h4 style="font-size:14px;font-weight:700;margin-bottom:10px">Review:</h4>' +
    SSW_STATE.answers.map(a => `
      <div class="review-item ${a.correct ? 'correct' : 'wrong'}">
        <div class="r-q" style="font-family:var(--font-jp)">${a.q.jp}</div>
        <div class="r-info">${a.correct ? '✅' : '❌'} ${a.q.id} (${a.q.hiragana})</div>
      </div>
    `).join('');
}

function restartSSWQuiz() { startSSWQuiz(); }
function showSSWSetup() {
  document.getElementById('ssw-quiz').classList.add('hidden');
  document.getElementById('ssw-result').classList.add('hidden');
  document.getElementById('ssw-setup').classList.remove('hidden');
}

// ===================== INIT =====================
navigateTo('home');