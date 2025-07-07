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
    promptID.push(`Sebuah video sinematik yang mendalam, berfokus pada:`);
    charactersData.forEach((char, index) => {
        let charDesc = [];
        if (char.namaKarakter) charDesc.push(`Karakter ${index + 1}: **${char.namaKarakter}**`);
        if (char.kewarganegaraan) charDesc.push(`berkebangsaan ${char.kewarganegaraan}`);
        if (char.karakteristikSubjek) charDesc.push(`dengan karakteristik ${char.karakteristikSubjek}`);
        if (char.aksiUtama) charDesc.push(`melakukan aksi ${char.aksiUtama}`);
        if (char.emosi) charDesc.push(`dengan ekspresi emosi ${char.emosi}`);
        if (charDesc.length > 0) {
            promptID.push(`- ${charDesc.join(', ')}.`);
        }
    });
    
    promptID.push(`\n**Latar Adegan Detail:**`);
    let latarDesc = [];
    if (lokasi) latarDesc.push(`berlokasi di **${lokasi}**`);
    if (waktu) latarDesc.push(`pada ${waktu}`);
    if (cuaca) latarDesc.push(`dengan cuaca ${cuaca}`);
    if (musim) latarDesc.push(`di musim ${musim}`);
    if (latarDesc.length > 0) {
        promptID.push(`- Adegan ini ${latarDesc.join(', ')}.`);
    } else {
        promptID.push(`- Latar adegan yang detail dan imersif.`);
    }

    promptID.push(`\n**Pengaturan Kamera & Visual yang Canggih:**`);
    let kameraDesc = [];
    if (gayaKamera) kameraDesc.push(`dengan gaya kamera **${gayaKamera}**`);
    if (pergerakanKamera) kameraDesc.push(`pergerakan kamera ${pergerakanKamera}`);
    if (sudutKamera) kameraDesc.push(`dari sudut ${sudutKamera}`);
    if (fokus) kameraDesc.push(`dengan fokus ${fokus}`);
    if (pencahayaanKamera) kameraDesc.push(`pencahayaan ${pencahayaanKamera}`);
    if (gradasiWarna) kameraDesc.push(`serta gradasi warna ${gradasiWarna}`);
    if (kameraDesc.length > 0) {
        promptID.push(`- Video diambil ${kameraDesc.join(', ')}.`);
    } else {
        promptID.push(`- Pengaturan kamera yang inovatif untuk visual yang menawan.`);
    }

    promptID.push(`\n**Elemen Audio yang Kaya & Atmosferik:**`);
    let audioDesc = [];
    if (dialogType) audioDesc.push(`jenis dialog **${dialogType}**`);
    if (karakterDialog) audioDesc.push(`oleh karakter **${karakterDialog}**`);
    if (isiDialog) audioDesc.push(`dengan isi dialog:\n${isiDialog.split('\n').map(line => `    - ${line}`).join('\n')}`); // Indent dialog for clarity
    if (moodSuara) audioDesc.push(`mood suara yang **${moodSuara}**`);
    if (suaraLingkungan) audioDesc.push(`disertai suara lingkungan ${suaraLingkungan}`);
    if (backgroundMusic) audioDesc.push(`dan musik latar ${backgroundMusic}`);
    if (audioDesc.length > 0) {
        promptID.push(`- Elemen audio meliputi ${audioDesc.join(', ')}.`);
    } else {
        promptID.push(`- Pengalaman audio yang imersif dan mendalam.`);
    }

    promptID.push(`\n**Spesifikasi Teknis Video:**`);
    let videoSpecDesc = [];
    if (kualitasVideo) videoSpecDesc.push(`kualitas video **${kualitasVideo}**`);
    if (durasiVideo) videoSpecDesc.push(`berdurasi ${durasiVideo}`);
    if (rasioVideo) videoSpecDesc.push(`dengan rasio ${rasioVideo}`);
    if (videoSpecDesc.length > 0) {
        promptID.push(`- Video ini memiliki ${videoSpecDesc.join(', ')}.`);
    } else {
        promptID.push(`- Spesifikasi video yang dioptimalkan untuk hasil terbaik.`);
    }

    if (detailTambahan) {
        promptID.push(`\n**Detail Tambahan Penting:**\n- ${detailTambahan}`);
    }

    document.getElementById('prompt_indonesia').value = promptID.join('\n').trim();

    // Prompt Bahasa Inggris
    let promptEN = [];
    promptEN.push(`A deeply cinematic video, focusing on:`);
    charactersData.forEach((char, index) => {
        let charDesc = [];
        if (char.namaKarakter) charDesc.push(`Character ${index + 1}: **${getTranslation(char.namaKarakter)}**`);
        if (char.kewarganegaraan) charDesc.push(`of ${getTranslation(char.kewarganegaraan)} nationality`);
        if (char.karakteristikSubjek) charDesc.push(`with ${getTranslation(char.karakteristikSubjek)} characteristics`);
        if (char.aksiUtama) charDesc.push(`performing the main action of ${getTranslation(char.aksiUtama)}`);
        if (char.emosi) charDesc.push(`expressing ${getTranslation(char.emosi)} emotion`);
        if (charDesc.length > 0) {
            promptEN.push(`- ${charDesc.join(', ')}.`);
        }
    });
    
    promptEN.push(`\n**Detailed Scene Setting:**`);
    let latarDescEN = [];
    if (lokasi) latarDescEN.push(`located in **${getTranslation(lokasi)}**`);
    if (waktu) latarDescEN.push(`at ${getTranslation(waktu)}`);
    if (cuaca) latarDescEN.push(`with ${getTranslation(cuaca)} weather`);
    if (musim) latarDescEN.push(`during ${getTranslation(musim)}`);
    if (latarDescEN.length > 0) {
        promptEN.push(`- The scene is ${latarDescEN.join(', ')}.`);
    } else {
        promptEN.push(`- A detailed and immersive scene setting.`);
    }

    promptEN.push(`\n**Advanced Camera & Visual Settings:**`);
    let kameraDescEN = [];
    if (gayaKamera) kameraDescEN.push(`with a **${getTranslation(gayaKamera)}** camera style`);
    if (pergerakanKamera) kameraDescEN.push(`camera movement ${getTranslation(pergerakanKamera)}`);
    if (sudutKamera) kameraDescEN.push(`from a ${getTranslation(sudutKamera)} angle`);
    if (fokus) kameraDescEN.push(`with ${getTranslation(fokus)} focus`);
    if (pencahayaanKamera) kameraDescEN.push(`lighting ${getTranslation(pencahayaanKamera)}`);
    if (gradasiWarna) kameraDescEN.push(`and color grading ${getTranslation(gradasiWarna)}`);
    if (kameraDescEN.length > 0) {
        promptEN.push(`- The video is captured ${kameraDescEN.join(', ')}.`);
    } else {
        promptEN.push(`- Innovative camera settings for captivating visuals.`);
    }

    promptEN.push(`\n**Rich & Atmospheric Audio Elements:**`);
    let audioDescEN = [];
    if (dialogType) audioDescEN.push(`dialogue type **${getTranslation(dialogType)}**`);
    if (karakterDialog) audioDescEN.push(`by characters **${getTranslation(karakterDialog)}**`);
    if (isiDialog) audioDescEN.push(`with dialogue content:\n    ${isiDialog.split('\n').map(line => `- ${line}`).join('\n')}`); // Keep dialogue untranslated and indent
    if (moodSuara) audioDescEN.push(`a sound mood of **${getTranslation(moodSuara)}**`);
    if (suaraLingkungan) audioDescEN.push(`accompanied by ambient sound ${getTranslation(suaraLingkungan)}`);
    if (backgroundMusic) audioDescEN.push(`and background music ${getTranslation(backgroundMusic)}`);
    if (audioDescEN.length > 0) {
        promptEN.push(`- Audio elements include ${audioDescEN.join(', ')}.`);
    } else {
        promptEN.push(`- Immersive and profound audio experience.`);
    }

    promptEN.push(`\n**Video Technical Specifications:**`);
    let videoSpecDescEN = [];
    if (kualitasVideo) videoSpecDescEN.push(`video quality **${getTranslation(kualitasVideo)}**`);
    if (durasiVideo) videoSpecDescEN.push(`with duration ${getTranslation(durasiVideo)}`);
    if (rasioVideo) videoSpecDescEN.push(`and aspect ratio ${getTranslation(rasioVideo)}`);
    if (videoSpecDescEN.length > 0) {
        promptEN.push(`- The video features ${videoSpecDescEN.join(', ')}.`);
    } else {
        promptEN.push(`- Optimized video specifications for the best results.`);
    }

    if (detailTambahan) {
        promptEN.push(`\n**Important Additional Details:**\n- ${getTranslation(detailTambahan)}`);
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
        <input type="text" id="nama_karakter_${characterCount}" class="character-name" placeholder="Contoh: seorang ksatria, seorang detektif"><br>

        <label for="kewarganegaraan_${characterCount}">Kewarganegaraan #${characterCount}:</label>
        <input type="text" id="kewarganegaraan_${characterCount}" class="character-nationality" placeholder="Contoh: Indonesia, Jepang"><br>

        <label for="karakteristik_subjek_${characterCount}">Karakteristik Subjek #${characterCount}:</label>
        <input type="text" id="karakteristik_subjek_${characterCount}" class="character-characteristics" placeholder="Contoh: berani, cerdas, pemalu, humoris"><br>

        <label for="aksi_utama_${characterCount}">Aksi Utama #${characterCount}:</label>
        <input type="text" id="aksi_utama_${characterCount}" class="character-action" placeholder="Contoh: berlari, melompat, berbicara, bertarung"><br>

        <label for="emosi_${characterCount}">Emosi #${characterCount}:</label>
        <input type="text" id="emosi_${characterCount}" class="character-emotion" placeholder="Contoh: bahagia, sedih, marah, terkejut"><br>
        <button type="button" onclick="removeCharacterField('character_group_${characterCount}')" class="remove-char-btn" style="margin-top: 10px;">Hapus Karakter</button>
    `;
    characterContainer.appendChild(newCharacterGroup);
}

function removeCharacterField(id) {
    const elementToRemove = document.getElementById(id);
    if (elementToRemove) {
        elementToRemove.remove();
    }
}

// General function to reset a section
function resetSection(sectionId) {
    document.querySelectorAll(`#${sectionId} input[type="text"], #${sectionId} textarea, #${sectionId} select`).forEach(input => {
        if (input.tagName === 'SELECT') {
            input.value = '';
        } else {
            input.value = '';
        }
    });

    if (sectionId === 'character_inputs') {
        // Reset character count and remove dynamically added character groups
        characterCount = 1;
        const characterContainer = document.getElementById('character_inputs');
        while (characterContainer.children.length > 1) { // Keep the first character group
            characterContainer.removeChild(characterContainer.lastChild);
        }
        // Clear the initial character group too
        document.getElementById('character_group_1').querySelectorAll('input').forEach(input => input.value = '');
    }
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