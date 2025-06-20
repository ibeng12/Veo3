document.addEventListener('DOMContentLoaded', () => {

    const data = {
        waktu: [
            { value: 'golden hour', text: 'Golden Hour (Jam Emas)' },
            { value: 'blue hour', text: 'Blue Hour (Jam Biru)' },
            { value: 'midday', text: 'Midday (Tengah Hari)' },
            { value: 'afternoon', text: 'Afternoon (Sore Hari)' },
            { value: 'night', text: 'Night (Malam Hari)' },
            { value: 'dawn', text: 'Dawn (Fajar)' },
            { value: 'dusk', text: 'Dusk (Senja)' },
        ],
        gerakanKamera: [
            // Gerakan Umum
            { value: 'static shot', text: 'Static Shot (Diam)' },
            { value: 'pan right', text: 'Pan Right (Geser Kanan)' },
            { value: 'pan left', text: 'Pan Left (Geser Kiri)' },
            { value: 'tilt up', text: 'Tilt Up (Miring ke Atas)' },
            { value: 'tilt down', text: 'Tilt Down (Miring ke Bawah)' },
            { value: 'dolly in', text: 'Dolly In (Maju)' },
            { value: 'dolly out', text: 'Dolly Out (Mundur)' },
            { value: 'zoom in', text: 'Zoom In (Perbesar)' },
            { value: 'zoom out', text: 'Zoom Out (Perkecil)' },
            { value: 'crane up', text: 'Crane Up (Naik)' },
            { value: 'crane down', text: 'Crane Down (Turun)' },
            { value: 'tracking shot', text: 'Tracking Shot (Mengikuti Objek)' },
            // Higgsfield.ai Motions
            { value: '3D rotation', text: '3D Rotation (Rotasi 3D)' },
            { value: 'slow motion', text: 'Slow Motion (Gerak Lambat)' },
            { value: 'fast forward', text: 'Fast Forward (Gerak Cepat)' },
            { value: 'rewind', text: 'Rewind (Putar Balik)' },
            { value: 'shake', text: 'Shake (Guncangan)' },
            { value: 'dutch angle', text: 'Dutch Angle (Sudut Miring)' },
            { value: 'orbit', text: 'Orbit (Mengorbit)' },
            { value: 'arc', text: 'Arc (Gerakan Melengkung)' },
            { value: 'spiral in', text: 'Spiral In (Spiral ke Dalam)' },
            { value: 'spiral out', text: 'Spiral Out (Spiral ke Luar)' },
            { value: 'vertigo effect', text: 'Vertigo Effect (Efek Vertigo)' },
        ],
        pencahayaan: [
            { value: 'cinematic lighting', text: 'Cinematic Lighting (Pencahayaan Sinematik)' },
            { value: 'soft light', text: 'Soft Light (Cahaya Lembut)' },
            { value: 'hard light', text: 'Hard Light (Cahaya Keras)' },
            { value: 'natural light', text: 'Natural Light (Cahaya Alami)' },
            { value: 'Rembrandt lighting', text: 'Rembrandt Lighting' },
            { value: 'backlight', text: 'Backlight (Cahaya dari Belakang)' },
            { value: 'neon lights', text: 'Neon Lights (Lampu Neon)' },
            { value: 'dramatic lighting', text: 'Dramatic Lighting (Pencahayaan Dramatis)' },
        ],
        gayaVideo: [
            { value: 'cinematic', text: 'Cinematic (Sinematik)' },
            { value: 'hyperrealistic', text: 'Hyperrealistic (Sangat Realistis)' },
            { value: 'documentary', text: 'Documentary (Dokumenter)' },
            { value: 'vintage film', text: 'Vintage Film (Film Jadul)' },
            { value: '3D animation', text: '3D Animation (Animasi 3D)' },
            { value: 'anime', text: 'Anime' },
            { value: 'fantasy', text: 'Fantasy (Fantasi)' },
            { value: 'sci-fi', text: 'Sci-fi (Fiksi Ilmiah)' },
            { value: 'vlog', text: 'Vlog' },
        ],
        suasanaVideo: [
            { value: 'epic', text: 'Epic (Epik)' },
            { value: 'dreamy', text: 'Dreamy (Seperti Mimpi)' },
            { value: 'mysterious', text: 'Mysterious (Misterius)' },
            { value: 'cheerful', text: 'Cheerful (Ceria)' },
            { value: 'romantic', text: 'Romantic (Romantis)' },
            { value: 'tense', text: 'Tense (Tegang)' },
            { value: 'calm', text: 'Calm (Tenang)' },
            { value: 'nostalgic', text: 'Nostalgic (Nostalgia)' },
        ]
    };

    function populateSelect(selectId, dataArray) {
        const select = document.getElementById(selectId);
        // Tambahkan opsi default yang tidak bisa dipilih
        const defaultOption = document.createElement('option');
        defaultOption.textContent = `Pilih ${select.previousElementSibling.textContent.split('. ')[1]}...`;
        defaultOption.value = '';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        select.appendChild(defaultOption);

        dataArray.forEach(item => {
            const option = document.createElement('option');
            option.value = item.value;
            option.textContent = item.text;
            option.dataset.indo = item.text.split(' (')[0];
            select.appendChild(option);
        });
    }

    populateSelect('waktu', data.waktu);
    populateSelect('gerakan-kamera', data.gerakanKamera);
    populateSelect('pencahayaan', data.pencahayaan);
    populateSelect('gaya-video', data.gayaVideo);
    populateSelect('suasana-video', data.suasanaVideo);

    const form = document.getElementById('prompt-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const getSelectedData = (id) => {
            const select = document.getElementById(id);
            if (select.selectedIndex <= 0) return { value: '', indo: '' };
            const selectedOption = select.options[select.selectedIndex];
            return {
                value: selectedOption.value,
                indo: selectedOption.dataset.indo || selectedOption.textContent
            };
        };

        const inputs = {
            subjek: document.getElementById('subjek').value.trim(),
            aksi: document.getElementById('aksi').value.trim(),
            ekspresi: document.getElementById('ekspresi').value.trim(),
            tempat: document.getElementById('tempat').value.trim(),
            waktu: getSelectedData('waktu'),
            gerakanKamera: getSelectedData('gerakan-kamera'),
            pencahayaan: getSelectedData('pencahayaan'),
            gayaVideo: getSelectedData('gaya-video'),
            suasanaVideo: getSelectedData('suasana-video'),
            suaraMusik: document.getElementById('suara-musik').value.trim(),
            kalimatDiucapkan: document.getElementById('kalimat-diucapkan').value.trim(),
            detailTambahan: document.getElementById('detail-tambahan').value.trim()
        };

        // Generate Indonesian Prompt
        let promptIndo = `Sebuah video dengan gaya ${inputs.gayaVideo.indo || 'sinematik'}`;
        if (inputs.subjek) promptIndo += ` menampilkan ${inputs.subjek}`;
        if (inputs.aksi) promptIndo += ` yang sedang ${inputs.aksi}`;
        if (inputs.ekspresi) promptIndo += ` ${inputs.ekspresi}`;
        if (inputs.tempat) promptIndo += `, berlokasi di ${inputs.tempat}`;
        if (inputs.waktu.indo) promptIndo += `, pada waktu ${inputs.waktu.indo}`;
        promptIndo += `.`;

        promptIndo += ` Video ini memiliki suasana yang ${inputs.suasanaVideo.indo || 'menarik'}`;
        if (inputs.pencahayaan.indo) promptIndo += ` dengan ${inputs.pencahayaan.indo}`;
        promptIndo += `.`;

        if (inputs.gerakanKamera.indo) {
            promptIndo += ` Kamera bergerak dengan gerakan ${inputs.gerakanKamera.indo}.`;
        }

        if (inputs.suaraMusik) {
            promptIndo += ` Terdengar ${inputs.suaraMusik}.`;
        }
        
        if (inputs.kalimatDiucapkan) {
            promptIndo += ` Seseorang mengucapkan: "${inputs.kalimatDiucapkan}".`;
        }

        if (inputs.detailTambahan) {
            promptIndo += ` Detail tambahan: ${inputs.detailTambahan}`;
        }

        // Generate English Prompt
        let promptEng = `${inputs.gayaVideo.value || 'cinematic'} style video`;
        if (inputs.subjek) promptEng += ` of a ${inputs.subjek}`;
        if (inputs.aksi) promptEng += ` ${inputs.aksi}`;
        if (inputs.ekspresi) promptEng += ` ${inputs.ekspresi}`;
        if (inputs.tempat) promptEng += `, set in ${inputs.tempat}`;
        if (inputs.waktu.value) promptEng += `, during ${inputs.waktu.value}`;
        promptEng += `.`;

        promptEng += ` The video has a ${inputs.suasanaVideo.value || 'compelling'} mood,`;
        if (inputs.pencahayaan.value) promptEng += ` with ${inputs.pencahayaan.value}`;
        promptEng += `.`;

        if (inputs.gerakanKamera.value) {
            promptEng += ` The camera uses a ${inputs.gerakanKamera.value} motion.`;
        }

        if (inputs.suaraMusik) {
            promptEng += ` Accompanied by ${inputs.suaraMusik}.`;
        }

        if (inputs.kalimatDiucapkan) {
            // Sesuai permintaan, bagian ini tidak diterjemahkan
            promptEng += ` Someone says: "${inputs.kalimatDiucapkan}".`;
        }
        
        if (inputs.detailTambahan) {
            promptEng += ` Additional details: ${inputs.detailTambahan}`;
        }
        
        // Final polish for English prompt
        promptEng = promptEng.replace(/ ,/g, ',').replace(/ \./g, '.').trim();


        document.getElementById('hasil-indonesia').value = promptIndo;
        document.getElementById('hasil-inggris').value = promptEng;
        
        document.getElementById('hasil-container').classList.remove('hidden');
    });
}); 