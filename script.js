// Data Mahasiswa
const dataMahasiswa = [
    {
        id: 1,
        nama: "Okta Ramadhani",
        nim: "24.24.032095",
        prodi: "Pendidikan Teknologi Informasi",
        fakultas: "Bahasa Ilmu Pengetahuan dan Teknologi",
        universitas: "Universitas Muhammadiyah Palangkaraya"
    },
    {
        id: 2,
        nama: "Novy Astoty",
        nim: "24.24.032569",
        prodi: "Pendidikan Teknologi Informasi",
        fakultas: "Bahasa Ilmu Pengetahuan dan Teknologi",
        universitas: "Universitas Muhammadiyah Palangkaraya"
    }
];

// Elemen DOM
const studentGrid = document.getElementById('student-grid');
const searchInput = document.getElementById('search-input');
const btnReset = document.getElementById('btn-reset');

// Elemen Modal
const modal = document.getElementById('detail-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalName = document.getElementById('modal-name');
const modalNim = document.getElementById('modal-nim');
const modalDetailNim = document.getElementById('modal-detail-nim');
const modalProdi = document.getElementById('modal-prodi');
const modalFakultas = document.getElementById('modal-fakultas');
const modalUniv = document.getElementById('modal-univ');

// Fungsi Render Kartu Mahasiswa
function renderMahasiswa(list) {
    studentGrid.innerHTML = '';

    if (list.length === 0) {
        studentGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #64748b;">
                <i class="fa-solid fa-user-slash" style="font-size: 48px; margin-bottom: 12px; color: #cbd5e1;"></i>
                <p>Data mahasiswa tidak ditemukan.</p>
            </div>
        `;
        return;
    }

    list.forEach(mhs => {
        const card = document.createElement('div');
        card.className = 'student-card';
        card.innerHTML = `
            <div class="card-profile">
                <div class="avatar-large">
                    <i class="fa-solid fa-user-graduate"></i>
                </div>
                <div class="profile-info">
                    <h3>${mhs.nama}</h3>
                    <span class="badge">NIM: ${mhs.nim}</span>
                </div>
            </div>
            <div class="card-details">
                <div class="detail-item">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <span><strong>Prodi:</strong> ${mhs.prodi}</span>
                </div>
                <div class="detail-item">
                    <i class="fa-solid fa-building-columns"></i>
                    <span><strong>Fakultas:</strong> ${mhs.fakultas}</span>
                </div>
                <div class="detail-item">
                    <i class="fa-solid fa-university"></i>
                    <span>${mhs.universitas}</span>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-primary" onclick="showDetail(${mhs.id})">
                    <i class="fa-solid fa-eye"></i> Detail Profil
                </button>
            </div>
        `;
        studentGrid.appendChild(card);
    });
}

// Fungsi Pencarian Data
function filterData() {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = dataMahasiswa.filter(mhs => 
        mhs.nama.toLowerCase().includes(query) || 
        mhs.nim.toLowerCase().includes(query)
    );
    renderMahasiswa(filtered);
}

// Fungsi Menampilkan Detail di Modal
function showDetail(id) {
    const mhs = dataMahasiswa.find(item => item.id === id);
    if (!mhs) return;

    modalName.textContent = mhs.nama;
    modalNim.textContent = `NIM: ${mhs.nim}`;
    modalDetailNim.textContent = mhs.nim;
    modalProdi.textContent = mhs.prodi;
    modalFakultas.textContent = mhs.fakultas;
    modalUniv.textContent = mhs.universitas;

    modal.classList.add('active');
}

// Event Listener
searchInput.addEventListener('input', filterData);

btnReset.addEventListener('click', () => {
    searchInput.value = '';
    renderMahasiswa(dataMahasiswa);
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Jalankan saat pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderMahasiswa(dataMahasiswa);
});
