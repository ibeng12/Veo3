const translations = {
    "nama_karakter": "character's name",
    "kewarganegaraan": "nationality",
    "karakteristik_subjek": "subject characteristics",
    "aksi_utama": "main action",
    "emosi": "emotion",
    "lokasi": "location",
    "suara_lingkungan": "ambient sound",
    "background_music": "background music",
    "detail_tambahan": "additional details",
    "karakter_dialog": "dialogue characters",
    "isi_dialog": "dialogue content",
    "mood_suara": "sound mood",

    "pagi hari yang cerah": "bright morning",
    "siang hari yang terik": "scorching noon",
    "sore hari menjelang senja": "late afternoon nearing dusk",
    "malam hari yang tenang": "peaceful night",
    "dini hari berkabut": "foggy early morning",

    "cerah dan berawan": "clear and cloudy",
    "hujan deras": "heavy rain",
    "bersalju": "snowy",
    "berkabut tebal": "dense fog",
    "berangin kencang": "strong winds",
    "badai petir": "thunderstorm",

    "musim semi": "spring",
    "musim panas": "summer",
    "musim gugur": "autumn",
    "musim dingin": "winter",

    "realistis dan sinematik": "realistic and cinematic",
    "gaya dokumenter": "documentary style",
    "futuristik dan berteknologi tinggi": "futuristic and high-tech",
    "vintage dengan efek VHS": "vintage with VHS effect",
    "animasi 3D": "3D animation",
    "gaya lukisan": "painterly style",
    "gaya seni piksel": "pixel art style",

    "Bullet Time": "Bullet Time",
    "Crash Zoom-in": "Crash Zoom-in",
    "Dolly Zoom-in": "Dolly Zoom-in",
    "Robo Arm": "Robo Arm",
    "Super Dolly-in": "Super Dolly-in",
    "Focus Change": "Focus Change",
    "360 Orbit": "360 Orbit",
    "FPV Drone": "FPV Drone",
    "Through Object-in": "Through Object-in",
    "Crane-up": "Crane-up",
    "Lazy Susan": "Lazy Susan",
    "Action Run": "Action Run",
    "Handheld": "Handheld",
    "Dutch Angle": "Dutch Angle",
    "Car Grip": "Car Grip",
    "Levitation": "Levitation",
    "Hyperlapse": "Hyperlapse",
    "Low Shutter": "Low Shutter",
    "Fisheye": "Fisheye",
    "Lens Flare": "Lens Flare",
    "Rap Flex": "Rap Flex",
    "Pan": "Pan",
    "Tilt": "Tilt",
    "Zoom In": "Zoom In",
    "Zoom Out": "Zoom Out",
    "Dolly In": "Dolly In",
    "Dolly Out": "Dolly Out",
    "Tracking Shot": "Tracking Shot",
    "Crane Shot": "Crane Shot",
    "Pedestal": "Pedestal",
    "Reveal": "Reveal",
    "Static": "Static",
    "Whip Pan": "Whip Pan",
    "Arc Shot": "Arc Shot",
    "POV": "POV",
    "Rack Focus": "Rack Focus",

    "eye-level": "eye-level",
    "low angle": "low angle",
    "high angle": "high angle",
    "bird's eye view": "bird's eye view",
    "worm's eye view": "worm's eye view",
    "dutch angle": "dutch angle",
    "over-the-shoulder": "over-the-shoulder",
    "point of view": "point of view",

    "fokus tajam pada subjek utama": "sharp focus on main subject",
    "fokus dangkal dengan latar belakang blur": "shallow focus with blurred background",
    "fokus dalam pada seluruh adegan": "deep focus on entire scene",

    "cahaya alami yang lembut": "soft natural light",
    "pencahayaan studio yang dramatis": "dramatic studio lighting",
    "siluet saat matahari terbenam": "silhouette at sunset",
    "cahaya neon yang vibrant": "vibrant neon light",
    "pencahayaan remang-remang": "dim lighting",
    "cahaya terang dan cerah": "bright and clear light",
    "cahaya kontras tinggi": "high contrast lighting",

    "hangat dan cerah": "warm and bright",
    "dingin dan gelap": "cool and dark",
    "monokromatik": "monochromatic",
    "vibrant dan saturasi tinggi": "vibrant and high saturation",
    "pudar dan nostalgik": "desaturated and nostalgic",
    "gradasi warna alami": "natural color grading",

    "tanpa dialog": "no dialogue",
    "informatif": "informative",
    "natural dialog": "natural dialogue",
    "monolog": "monologue",
    "interview": "interview",
    
    "Happy": "Happy",
    "Sad": "Sad",
    "Cheerful": "Cheerful",
    "Angry": "Angry",
    "Tense": "Tense",
    "Calm": "Calm",
    "Excited": "Excited",
    "Mysterious": "Mysterious",

    "4K Ultra HD": "4K Ultra HD",
    "Full HD": "Full HD",
    "Cinematic 8K": "Cinematic 8K",
    "VFX Quality": "VFX Quality",
    "Photorealistic": "Photorealistic",

    "6 Detik": "6 Seconds",
    "7 Detik": "7 Seconds",
    "8 Detik": "8 Seconds",

    "LANDSCAPE 16:9": "LANDSCAPE 16:9",
    "PORTRAIT 9:16": "PORTRAIT 9:16"
};

function getTranslation(key) {
    return translations[key.toLowerCase()] || key;
}

let characterCount = 1;
let promptHistory = [];

function generatePrompt() {
    // Save current prompts to history before generating new ones
    const currentIDPrompt = document.getElementById('prompt_indonesia').value;
    const currentENPrompt = document.getElementById('prompt_english').value;
    if (currentIDPrompt || currentENPrompt) {
        promptHistory.push({ id: currentIDPrompt, en: currentENPrompt });
    }

    // DETAIL SUBJEK
    const charactersData = [];
    document.querySelectorAll('.character-group').forEach((group, index) => {
        const charData = {};
        charData.namaKarakter = group.querySelector('.character-name').value;
        charData.kewarganegaraan = group.querySelector('.character-nationality').value;
        charData.karakteristikSubjek = group.querySelector('.character-characteristics').value;
        charData.aksiUtama = group.querySelector('.character-action').value;
        charData.emosi = group.querySelector('.character-emotion').value;
        charactersData.push(charData);
    });

    // LATAR
    const lokasi = document.getElementById('lokasi').value;
    const waktu = document.getElementById('waktu').value;
    const cuaca = document.getElementById('cuaca').value;
    const musim = document.getElementById('musim').value;

    // KAMERA
    const gayaKamera = document.getElementById('gaya_kamera').value;
    const pergerakanKamera = document.getElementById('pergerakan_kamera').value;
    const sudutKamera = document.getElementById('sudut_kamera').value;
    const fokus = document.getElementById('fokus').value;
    const pencahayaanKamera = document.getElementById('pencahayaan_kamera').value;
    const gradasiWarna = document.getElementById('gradasi_warna').value;

    // AUDIO
    const dialogType = document.getElementById('dialog_type').value;
    const karakterDialog = document.getElementById('karakter_dialog').value;
    const isiDialog = document.getElementById('isi_dialog').value; // This is raw, not translated
    const moodSuara = document.getElementById('mood_suara').value;
    const suaraLingkungan = document.getElementById('suara_lingkungan').value;
    const backgroundMusic = document.getElementById('background_music').value;

    // KUALITAS VIDEO & DURASI
    const kualitasVideo = document.getElementById('kualitas_video').value;
    const durasiVideo = document.getElementById('durasi_video').value;
    const rasioVideo = document.getElementById('rasio_video').value;

    // DETAIL TAMBAHAN
    const detailTambahan = document.getElementById('detail_tambahan').value;

    // Prompt Bahasa Indonesia
    let promptID = [];
    promptID.push(`Video berfokus pada:`);
    charactersData.forEach(char => {
        if (char.namaKarakter) promptID.push(`- Nama Karakter: ${char.namaKarakter}`);
        if (char.kewarganegaraan) promptID.push(`  Kewarganegaraan: ${char.kewarganegaraan}`);
        if (char.karakteristikSubjek) promptID.push(`  Karakteristik Subjek: ${char.karakteristikSubjek}`);
        if (char.aksiUtama) promptID.push(`  Aksi Utama: ${char.aksiUtama}`);
        if (char.emosi) promptID.push(`  Emosi: ${char.emosi}`);
    });
    
    promptID.push(`\nLatar Adegan:`);
    if (lokasi) promptID.push(`- Lokasi: ${lokasi}`);
    if (waktu) promptID.push(`- Waktu: ${waktu}`);
    if (cuaca) promptID.push(`- Cuaca: ${cuaca}`);
    if (musim) promptID.push(`- Musim: ${musim}`);

    promptID.push(`\nPengaturan Kamera:`);
    if (gayaKamera) promptID.push(`- Gaya: ${gayaKamera}`);
    if (pergerakanKamera) promptID.push(`- Pergerakan Kamera: ${pergerakanKamera}`);
    if (sudutKamera) promptID.push(`- Sudut Kamera: ${sudutKamera}`);
    if (fokus) promptID.push(`- Fokus: ${fokus}`);
    if (pencahayaanKamera) promptID.push(`- Pencahayaan: ${pencahayaanKamera}`);
    if (gradasiWarna) promptID.push(`- Gradasi Warna: ${gradasiWarna}`);

    promptID.push(`\nElemen Audio:`);
    if (dialogType) promptID.push(`- Dialog: ${dialogType}`);
    if (karakterDialog) promptID.push(`- Karakter Dialog: ${karakterDialog}`);
    if (isiDialog) promptID.push(`- Isi Dialog:\n${isiDialog.split('\n').map(line => `  - ${line}`).join('\n')}`); // Format per baris
    if (moodSuara) promptID.push(`- Mood Suara: ${moodSuara}`);
    if (suaraLingkungan) promptID.push(`- Suara Lingkungan: ${suaraLingkungan}`);
    if (backgroundMusic) promptID.push(`- Background Music: ${backgroundMusic}`);

    promptID.push(`\nSpesifikasi Video:`);
    if (kualitasVideo) promptID.push(`- Kualitas Video: ${kualitasVideo}`);
    if (durasiVideo) promptID.push(`- Durasi Video: ${durasiVideo}`);
    if (rasioVideo) promptID.push(`- Rasio Video: ${rasioVideo}`);

    if (detailTambahan) {
        promptID.push(`\nDetail Tambahan: ${detailTambahan}`);
    }

    document.getElementById('prompt_indonesia').value = promptID.join('\n').trim();

    // Prompt Bahasa Inggris
    let promptEN = [];
    promptEN.push(`Video focusing on:`);
    charactersData.forEach(char => {
        if (char.namaKarakter) promptEN.push(`- Character's Name: ${getTranslation(char.namaKarakter)}`);
        if (char.kewarganegaraan) promptEN.push(`  Nationality: ${getTranslation(char.kewarganegaraan)}`);
        if (char.karakteristikSubjek) promptEN.push(`  Subject Characteristics: ${getTranslation(char.karakteristikSubjek)}`);
        if (char.aksiUtama) promptEN.push(`  Main Action: ${getTranslation(char.aksiUtama)}`);
        if (char.emosi) promptEN.push(`  Emotion: ${getTranslation(char.emosi)}`);
    });
    
    promptEN.push(`\nScene Setting:`);
    if (lokasi) promptEN.push(`- Location: ${getTranslation(lokasi)}`);
    if (waktu) promptEN.push(`- Time: ${getTranslation(waktu)}`);
    if (cuaca) promptEN.push(`- Weather: ${getTranslation(cuaca)}`);
    if (musim) promptEN.push(`- Season: ${getTranslation(musim)}`);

    promptEN.push(`\nCamera Settings:`);
    if (gayaKamera) promptEN.push(`- Style: ${getTranslation(gayaKamera)}`);
    if (pergerakanKamera) promptEN.push(`- Camera Movement: ${getTranslation(pergerakanKamera)}`);
    if (sudutKamera) promptEN.push(`- Camera Angle: ${getTranslation(sudutKamera)}`);
    if (fokus) promptEN.push(`- Focus: ${getTranslation(fokus)}`);
    if (pencahayaanKamera) promptEN.push(`- Lighting: ${getTranslation(pencahayaanKamera)}`);
    if (gradasiWarna) promptEN.push(`- Color Grading: ${getTranslation(gradasiWarna)}`);

    promptEN.push(`\nAudio Elements:`);
    if (dialogType) promptEN.push(`- Dialogue Type: ${getTranslation(dialogType)}`);
    if (karakterDialog) promptEN.push(`- Dialogue Characters: ${getTranslation(karakterDialog)}`);
    if (isiDialog) promptEN.push(`- Dialogue Content:\n${isiDialog.split('\n').map(line => `  - ${line}`).join('\n')}`); // This remains in original language
    if (moodSuara) promptEN.push(`- Sound Mood: ${getTranslation(moodSuara)}`);
    if (suaraLingkungan) promptEN.push(`- Ambient Sound: ${getTranslation(suaraLingkungan)}`);
    if (backgroundMusic) promptEN.push(`- Background Music: ${getTranslation(backgroundMusic)}`);

    promptEN.push(`\nVideo Specifications:`);
    if (kualitasVideo) promptEN.push(`- Video Quality: ${getTranslation(kualitasVideo)}`);
    if (durasiVideo) promptEN.push(`- Video Duration: ${getTranslation(durasiVideo)}`);
    if (rasioVideo) promptEN.push(`- Aspect Ratio: ${getTranslation(rasioVideo)}`);

    if (detailTambahan) {
        promptEN.push(`\nAdditional Details: ${getTranslation(detailTambahan)}`);
    }

    document.getElementById('prompt_english').value = promptEN.join('\n').trim();
}

function addCharacterField() {
    characterCount++;
    const characterContainer = document.getElementById('character_inputs');
    const newCharacterGroup = document.createElement('div');
    newCharacterGroup.className = 'character-group';
    newCharacterGroup.id = `character_group_${characterCount}`;
    newCharacterGroup.innerHTML = `
        <hr style="border-top: 1px dashed #30363d; margin: 20px 0;">
        <label for="nama_karakter_${characterCount}">Nama Karakter #${characterCount}:</label>
        <input type="text" id="nama_karakter_${characterCount}" class="character-name"><br>

        <label for="kewarganegaraan_${characterCount}">Kewarganegaraan #${characterCount}:</label>
        <input type="text" id="kewarganegaraan_${characterCount}" class="character-nationality"><br>

        <label for="karakteristik_subjek_${characterCount}">Karakteristik Subjek #${characterCount}:</label>
        <input type="text" id="karakteristik_subjek_${characterCount}" class="character-characteristics"><br>

        <label for="aksi_utama_${characterCount}">Aksi Utama #${characterCount}:</label>
        <input type="text" id="aksi_utama_${characterCount}" class="character-action"><br>

        <label for="emosi_${characterCount}">Emosi #${characterCount}:</label>
        <input type="text" id="emosi_${characterCount}" class="character-emotion" placeholder="Contoh: bahagia, sedih, marah"><br>
        <button type="button" onclick="removeCharacterField('character_group_${characterCount}')" style="background-color: #d9534f; margin-top: 10px;">Hapus Karakter</button>
    `;
    characterContainer.appendChild(newCharacterGroup);
}

function removeCharacterField(id) {
    const elementToRemove = document.getElementById(id);
    if (elementToRemove) {
        elementToRemove.remove();
    }
}

function resetInputFields() {
    document.querySelectorAll('.input-column input[type="text"], .input-column textarea, .input-column select').forEach(input => {
        if (input.tagName === 'SELECT') {
            input.value = ''; // Reset select to first option (Pilih...)
        } else {
            input.value = ''; // Clear text inputs and textareas
        }
    });
    // Reset character count and remove dynamically added character groups
    characterCount = 1;
    const characterContainer = document.getElementById('character_inputs');
    while (characterContainer.children.length > 1) { // Keep the first character group
        characterContainer.removeChild(characterContainer.lastChild);
    }
    document.getElementById('character_group_1').querySelectorAll('input').forEach(input => input.value = '');
}

function resetOutputFields() {
    document.getElementById('prompt_indonesia').value = '';
    document.getElementById('prompt_english').value = '';
    promptHistory = []; // Clear history when output is reset manually
}

function undoPrompt() {
    if (promptHistory.length > 0) {
        const lastPrompt = promptHistory.pop();
        document.getElementById('prompt_indonesia').value = lastPrompt.id;
        document.getElementById('prompt_english').value = lastPrompt.en;
    } else {
        alert('Tidak ada riwayat prompt untuk di-undo.');
    }
} 