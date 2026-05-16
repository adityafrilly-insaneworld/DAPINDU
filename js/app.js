
// ═══ STANDAR PERMENKES 2/2020 ═══
const TBU_L_M2SD=[46.1,50.8,54.4,57.3,59.7,61.7,63.3,64.8,66.2,67.5,68.7,69.9,71.0,72.1,73.1,74.1,75.0,76.0,76.9,77.7,78.6,79.4,80.2,81.0,81.7,82.5,83.3,84.1,84.8,85.5,86.1,86.7,87.3,87.9,88.5,89.1,89.7,90.3,90.9,91.4,92.0,92.5,93.0,93.5,94.0,94.5,95.1,95.6,96.1,96.6,97.1,97.6,98.1,98.6,99.1,99.6,100.2,100.7,101.2,101.7,102.3];
const TBU_L_M3SD=[44.2,48.9,52.4,55.3,57.6,59.6,61.2,62.7,64.0,65.2,66.4,67.6,68.6,69.6,70.6,71.6,72.5,73.3,74.2,75.0,75.8,76.5,77.2,78.0,78.7,79.3,79.9,80.5,81.1,81.7,82.3,82.8,83.4,83.9,84.4,84.9,85.5,86.0,86.5,87.0,87.5,88.0,88.4,88.9,89.4,89.8,90.3,90.7,91.2,91.6,92.1,92.5,93.0,93.4,93.9,94.3,94.7,95.2,95.6,96.1,96.6];
const TBU_P_M2SD=[45.4,49.8,53.0,55.6,57.8,59.6,61.2,62.7,64.0,65.3,66.5,67.7,68.9,70.0,71.0,72.0,73.0,74.0,74.9,75.8,76.7,77.5,78.4,79.2,80.0,80.8,81.5,82.2,82.9,83.6,84.3,84.9,85.6,86.2,86.8,87.4,88.0,88.6,89.2,89.8,90.4,91.0,91.6,92.2,92.8,93.4,94.0,94.6,95.2,95.8,96.4,97.0,97.6,98.2,98.8,99.4,100.0,100.7,101.3,101.9,102.6];
const TBU_P_M3SD=[43.6,47.8,51.0,53.5,55.6,57.4,58.9,60.3,61.7,62.9,64.1,65.2,66.3,67.3,68.3,69.3,70.2,71.1,72.0,72.8,73.7,74.5,75.2,76.0,76.7,77.5,78.1,78.8,79.5,80.1,80.7,81.3,81.9,82.5,83.1,83.6,84.2,84.7,85.3,85.8,86.3,86.8,87.4,87.9,88.4,88.9,89.3,89.8,90.3,90.7,91.2,91.7,92.1,92.6,93.0,93.4,93.9,94.3,94.7,95.2,95.6];
const BBU_L_M2SD=[2.5,3.4,4.3,5.0,5.6,6.0,6.4,6.7,6.9,7.1,7.4,7.6,7.7,7.9,8.1,8.3,8.4,8.6,8.8,8.9,9.1,9.2,9.4,9.5,9.7,9.8,10.0,10.1,10.2,10.4,10.5,10.7,10.8,10.9,11.0,11.2,11.3,11.4,11.5,11.6,11.8,11.9,12.0,12.1,12.2,12.4,12.5,12.6,12.7,12.8,12.9,13.1,13.2,13.3,13.4,13.5,13.6,13.7,13.8,14.0,14.1];
const BBU_L_M3SD=[2.1,2.9,3.8,4.4,4.9,5.3,5.7,5.9,6.2,6.4,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.7,7.8,8.0,8.1,8.2,8.4,8.5,8.6,8.8,8.9,9.0,9.1,9.2,9.4,9.5,9.6,9.7,9.8,9.9,10.0,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11.0,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12.0,12.1,12.2,12.3,12.4];
const BBU_P_M2SD=[2.4,3.2,3.9,4.5,5.0,5.4,5.7,6.0,6.3,6.5,6.7,6.9,7.0,7.2,7.4,7.6,7.7,7.9,8.1,8.2,8.4,8.6,8.7,8.9,9.0,9.2,9.4,9.5,9.7,9.8,10.0,10.1,10.3,10.4,10.5,10.7,10.8,10.9,11.1,11.2,11.3,11.5,11.6,11.7,11.8,12.0,12.1,12.2,12.3,12.4,12.6,12.7,12.8,12.9,13.0,13.2,13.3,13.4,13.5,13.6,13.7];
const BBU_P_M3SD=[2.0,2.7,3.4,4.0,4.4,4.8,5.1,5.3,5.6,5.8,5.9,6.1,6.3,6.4,6.6,6.7,6.9,7.0,7.2,7.3,7.5,7.6,7.8,7.9,8.1,8.2,8.4,8.5,8.6,8.8,8.9,9.0,9.1,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11.0,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12.0,12.1];

function getTBU(u,jk){const idx=Math.min(60,u);return{m2:(jk==='P'?TBU_P_M2SD:TBU_L_M2SD)[idx],m3:(jk==='P'?TBU_P_M3SD:TBU_L_M3SD)[idx]};}
function getBBU(u,jk){const idx=Math.min(60,u);return{m2:(jk==='P'?BBU_P_M2SD:BBU_L_M2SD)[idx],m3:(jk==='P'?BBU_P_M3SD:BBU_L_M3SD)[idx]};}
function statusTBU(tb,u,jk){const r=getTBU(u,jk);if(!r.m2||!tb)return{l:'—',cls:'badge-neutral',skor:0};if(tb<r.m3)return{l:'Sangat Pendek',cls:'badge-severe',skor:-3};if(tb<r.m2)return{l:'Pendek (Stunted)',cls:'badge-danger',skor:-2};return{l:'Normal',cls:'badge-ok',skor:0};}
function statusBBU(bb,u,jk){const r=getBBU(u,jk);if(!r.m2||!bb)return{l:'—',cls:'badge-neutral'};if(bb<r.m3)return{l:'BB Sangat Kurang',cls:'badge-severe'};if(bb<r.m2)return{l:'BB Kurang',cls:'badge-danger'};return{l:'BB Normal',cls:'badge-ok'};}
function cekStunting(b){const u=Math.min(60,hitungUsia(b.tglLahir)),r=getTBU(u,b.jk||'L');return r.m2&&b.tb&&b.tb<r.m2;}
function cekSangatPendek(b){const u=Math.min(60,hitungUsia(b.tglLahir)),r=getTBU(u,b.jk||'L');return r.m3&&b.tb&&b.tb<r.m3;}

// ═══ JADWAL IMUNISASI (BERURUTAN SESUAI USIA) ═══
const IMUN_STAGES=[
  {stage:'Usia 0–24 Jam',items:[{jenis:'HB-0',label:'Hepatitis B (HB-0)'}]},
  {stage:'Usia 1 Bulan',items:[{jenis:'BCG',label:'BCG'},{jenis:'OPV-1',label:'OPV 1 (Polio Tetes)'}]},
  {stage:'Usia 2 Bulan',items:[{jenis:'DPT-HB-Hib 1',label:'DPT-HB-Hib 1'},{jenis:'OPV-2',label:'OPV 2'},{jenis:'PCV-1',label:'PCV 1'},{jenis:'RV-1',label:'Rotavirus 1 (RV1)'}]},
  {stage:'Usia 3 Bulan',items:[{jenis:'DPT-HB-Hib 2',label:'DPT-HB-Hib 2'},{jenis:'OPV-3',label:'OPV 3'},{jenis:'PCV-2',label:'PCV 2'},{jenis:'RV-2',label:'Rotavirus 2 (RV2)'}]},
  {stage:'Usia 4 Bulan',items:[{jenis:'DPT-HB-Hib 3',label:'DPT-HB-Hib 3'},{jenis:'OPV-4',label:'OPV 4'},{jenis:'IPV-1',label:'IPV 1'},{jenis:'RV-3',label:'Rotavirus 3 (RV3)'}]},
  {stage:'Usia 9 Bulan',items:[{jenis:'MR-1',label:'Campak-Rubella 1 (MR-1)'},{jenis:'IPV-2',label:'IPV 2'}]},
  {stage:'Usia 12 Bulan',items:[{jenis:'PCV-3',label:'PCV 3'}]},
  {stage:'Usia 18 Bulan',items:[{jenis:'DPT-HB-Hib 4',label:'DPT-HB-Hib 4 (Booster)'},{jenis:'MR-2',label:'Campak-Rubella 2 / MR Booster'}]},
];
const ALL_IMUN=IMUN_STAGES.flatMap(s=>s.items);

// ═══ DATA STORE ═══
const SK='dapindu_v1';
let db={konfig:{namaPosyandu:'Posyandu Ceria',desa:'Desa Lestari',kec:'Kec. Bahagia',kab:'Kab. Sehat'},balita:[],lansia:[],imunisasi:[]};
let _applyingRemote=false; // Flag untuk prevent infinite loop saat Firebase update

// Firebase bridge — set by firebase-module.js after init
window._fbReady=false;
window._fbSave=null; // async (data) => {}
window._fbListen=null; // (onData) => unsubscribe

function setSyncStatus(state,label){
  const el=document.getElementById('syncStatus');
  const dot=el?.querySelector('.sync-dot');
  const lbl=document.getElementById('syncLabel');
  if(!el)return;
  el.className='sync-indicator '+state;
  if(dot)dot.className='sync-dot'+(state==='syncing'?' pulse':'');
  if(lbl)lbl.textContent=label;
  const det=document.getElementById('fbStatusDetail');
  if(det)det.textContent=label;
}

function saveDB(){
  if(_applyingRemote) return; // Jangan save ke Firebase saat apply remote data
  // Selalu simpan ke localStorage sebagai cache lokal
  localStorage.setItem(SK,JSON.stringify(db));
  // Push ke Firebase jika tersedia
  if(window._fbSave){
    // Buat deep copy agar tidak ada referensi yang berubah saat async
    const snapshot=JSON.parse(JSON.stringify(db));
    window._fbSave(snapshot).catch(e=>{
      console.warn('[DAPINDU] saveDB firebase error:',e);
      setSyncStatus('offline','Offline — data lokal');
    });
  }
}

function loadDB(){
  console.log('[DEBUG] loadDB called');
  try{const r=localStorage.getItem(SK);if(r)db={...db,...JSON.parse(r)};}catch(e){}
  ['imunisasi','balita','lansia'].forEach(k=>{if(!db[k])db[k]=[];});
  if(!db.konfig)db.konfig={namaPosyandu:'Posyandu Ceria',desa:'Desa Lestari',kec:'Kec. Bahagia',kab:'Kab. Sehat'};
  if(db.balita.length===0){
    db.balita=[
      {id:'b1',nama:'Aisyah Nur Fadila',namaIbu:'Siti Rohani',namaAyah:'Budi Santoso',tglLahir:'2023-06-15',jk:'P',posyandu:'Posyandu Panda',bb:7.2,tb:67,lk:44,lla:13,alamat:'Jl. Melati No.12',nik:'',kk:'',nikIbu:'',nikAyah:'',anakKe:1,riwayatBB:[{bulan:'2024-06',bb:7.2,tb:67,lk:44,lla:13}]},
      {id:'b2',nama:'Bima Sakti Wijaya',namaIbu:'Dewi Rahayu',namaAyah:'Hendra W',tglLahir:'2022-11-20',jk:'L',posyandu:'Posyandu Kanguru',bb:11.5,tb:82,lk:47,lla:15,alamat:'Jl. Anggrek No.5',nik:'',kk:'',nikIbu:'',nikAyah:'',anakKe:2,riwayatBB:[{bulan:'2024-01',bb:10.8,tb:79,lk:46,lla:14},{bulan:'2024-06',bb:11.5,tb:82,lk:47,lla:15}]},
      {id:'b3',nama:'Cahaya Putri Lestari',namaIbu:'Nur Aini',namaAyah:'Sugeng P',tglLahir:'2023-12-01',jk:'P',posyandu:'Posyandu Panda',bb:5.8,tb:60,lk:38,lla:11,alamat:'Jl. Kenanga No.8',nik:'',kk:'',nikIbu:'',nikAyah:'',anakKe:1,riwayatBB:[{bulan:'2024-06',bb:5.8,tb:60,lk:38,lla:11}]},
    ];
    db.imunisasi=[
      {id:'i1',balitaId:'b1',jenis:'HB-0',tanggal:'2023-06-15'},{id:'i2',balitaId:'b1',jenis:'BCG',tanggal:'2023-07-15'},
      {id:'i3',balitaId:'b1',jenis:'DPT-HB-Hib 1',tanggal:'2023-08-15'},{id:'i4',balitaId:'b1',jenis:'DPT-HB-Hib 2',tanggal:'2023-09-15'},
      {id:'i5',balitaId:'b2',jenis:'HB-0',tanggal:'2022-11-20'},{id:'i6',balitaId:'b2',jenis:'BCG',tanggal:'2022-12-20'},
      {id:'i7',balitaId:'b2',jenis:'DPT-HB-Hib 1',tanggal:'2023-01-20'},{id:'i8',balitaId:'b2',jenis:'DPT-HB-Hib 2',tanggal:'2023-02-20'},
      {id:'i9',balitaId:'b2',jenis:'DPT-HB-Hib 3',tanggal:'2023-03-20'},{id:'i10',balitaId:'b2',jenis:'MR-1',tanggal:'2023-08-20'},
    ];
    db.lansia=[
      {id:'l1',nama:'Sutini Wahyuni',tglLahir:'1958-03-10',alamat:'Jl. Cempaka No.3',nik:'',kk:'',td:'130/85',gula:118,asamUrat:5.2,kolesterol:190,riwayat:'Hipertensi ringan',riwayatPemeriksaan:[{bulan:'2024-01',td:'128/82',gula:115,asamUrat:5.0,kolesterol:185},{bulan:'2024-06',td:'130/85',gula:118,asamUrat:5.2,kolesterol:190}]},
      {id:'l2',nama:'Raharjo Santoso',tglLahir:'1952-07-25',alamat:'Jl. Mangga No.11',nik:'',kk:'',td:'148/92',gula:165,asamUrat:7.8,kolesterol:240,riwayat:'Diabetes tipe 2, Hiperurisemia',riwayatPemeriksaan:[{bulan:'2024-01',td:'145/90',gula:158,asamUrat:7.2,kolesterol:235},{bulan:'2024-06',td:'148/92',gula:165,asamUrat:7.8,kolesterol:240}]},
    ];
    saveDB();
  }
}
loadDB();

// ═══ HELPERS ═══
function hitungUsia(tgl){const l=new Date(tgl),n=new Date();return Math.max(0,(n.getFullYear()-l.getFullYear())*12+(n.getMonth()-l.getMonth()));}
function hitungUsiaDetail(tgl){
  const lahir=new Date(tgl);
  const sekarang=new Date();
  let bulan=sekarang.getMonth()-lahir.getMonth();
  let hari=sekarang.getDate()-lahir.getDate();
  let tahun=sekarang.getFullYear()-lahir.getFullYear();
  if(hari<0){bulan--;hari+=new Date(sekarang.getFullYear(),sekarang.getMonth(),0).getDate();}
  if(bulan<0){tahun--;bulan+=12;}
  if(tahun>0)return `${tahun} tahun ${bulan} bulan ${hari} hari`;
  if(bulan>0)return `${bulan} bulan ${hari} hari`;
  return `${hari} hari`;
}
function hitungUsiaThn(tgl){const l=new Date(tgl),n=new Date();let y=n.getFullYear()-l.getFullYear();if(n.getMonth()<l.getMonth()||(n.getMonth()===l.getMonth()&&n.getDate()<l.getDate()))y--;return Math.max(0,y);}
function hitungUsiaAtDate(tglLahir,tglTarget){const l=new Date(tglLahir),t=new Date(tglTarget+'-01');return Math.max(0,(t.getFullYear()-l.getFullYear())*12+(t.getMonth()-l.getMonth()));}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7);}
function fmt(d){return d?new Date(d).toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}):'-';}
function fmtBulan(ym){if(!ym)return'—';const[y,m]=ym.split('-');const nm=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];return (nm[parseInt(m)-1]||m)+' '+y;}
// Format desimal koma (Indonesian locale)
function fmtDes(n,d=1){if(n==null||isNaN(n))return'—';return Number(n).toLocaleString('id-ID',{minimumFractionDigits:0,maximumFractionDigits:d});}
// Format tanggal: yyyy-mm-dd -> dd/mm/yyyy
function fmtTglDisplay(yyyymmdd){
  if(!yyyymmdd)return'';
  const[yyyy,mm,dd]=yyyymmdd.split('-');
  return`${dd}/${mm}/${yyyy}`;
}
// Parse tanggal: dd/mm/yyyy -> yyyy-mm-dd
function parseTglInput(ddmmyyyy){
  if(!ddmmyyyy)return'';
  const parts=ddmmyyyy.trim().split('/');
  if(parts.length!==3)return'';
  const[dd,mm,yyyy]=parts;
  if(!dd||!mm||!yyyy)return'';
  return`${yyyy}-${String(mm).padStart(2,'0')}-${String(dd).padStart(2,'0')}`;
}
// Parse input value that may use comma as decimal separator
function parseNum(v){if(v===''||v==null)return null;return parseFloat(String(v).replace(',','.'));}

function toast(msg,type='success'){
  const c=document.getElementById('toastC'),t=document.createElement('div');
  t.className=`toast ${type}`;
  t.innerHTML=`<i class="ri-${type==='success'?'checkbox-circle':'error-warning'}-line" style="color:${type==='success'?'var(--mint)':'var(--coral)'}"></i>${msg}`;
  c.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(30px)';t.style.transition='.3s';setTimeout(()=>t.remove(),300);},3000);
}
function openModal(id){document.getElementById(id).classList.add('open');}
function closeModal(id){document.getElementById(id).classList.remove('open');}
function toggleSidebar(){const sb=document.getElementById('sidebar'),ov=document.getElementById('sov');sb.classList.toggle('open');ov.style.display=sb.classList.contains('open')?'block':'none';}

// STATUS HELPERS
function statusTD(td){
  if(!td)return{l:'—',cls:'badge-neutral',color:'#94a3b8'};
  const[s,d]=td.split('/').map(Number);
  if(isNaN(s)||isNaN(d))return{l:td,cls:'badge-neutral',color:'#94a3b8'};
  if(s>=180||d>=120)return{l:'Krisis Hipertensi',cls:'badge-severe',color:'#7f1d1d'};
  if(s>=160||d>=100)return{l:'Hipertensi Derajat 2',cls:'badge-danger',color:'#ef4444'};
  if(s>=140||d>=90)return{l:'Hipertensi Derajat 1',cls:'badge-warn',color:'#f59e0b'};
  if(s>=130||d>=80)return{l:'Pra-Hipertensi',cls:'badge-warn',color:'#eab308'};
  if(s<90)return{l:'Hipotensi',cls:'badge-warn',color:'#60a5fa'};
  return{l:'Normal',cls:'badge-ok',color:'#22c55e'};
}
// BB/U lengkap: tambah +1SD (risiko lebih) dan +2SD (lebih), +3SD (obesitas)
const BBU_L_P1SD=[3.9,5.1,6.3,7.2,7.8,8.4,8.8,9.2,9.6,9.9,10.2,10.5,10.8,11.0,11.3,11.5,11.7,12.0,12.2,12.5,12.7,12.9,13.2,13.4,13.6,13.9,14.1,14.3,14.5,14.8,15.0,15.2,15.4,15.6,15.8,16.0,16.4,16.4,16.6,16.8,17.0,17.2,17.4,17.6,17.8,18.0,18.2,18.4,18.6,18.8,19.0,19.2,19.4,19.6,19.6,20.0,20.2,20.4,20.6,20.8,21.0];
const BBU_P_P1SD=[3.7,4.8,5.8,6.6,7.3,7.8,8.2,8.6,9.0,9.3,9.6,9.9,10.1,10.4,10.6,10.9,11.1,11.4,11.6,11.8,12.1,12.3,12.5,12.8,13.0,13.3,13.5,13.7,14.0,14.2,14.4,14.7,14.9,15.1,15.4,15.6,16.0,16.0,16.3,16.5,16.7,16.9,17.2,17.4,17.6,17.8,18.1,18.3,18.5,18.8,19.0,19.2,19.4,19.7,20.1,20.1,20.3,20.6,20.8,21.0,21.2];
function statusBBULengkap(bb,u,jk){
  if(bb==null)return{l:'—',cls:'badge-neutral'};
  const idx=Math.min(60,u);
  const m2=(jk==='P'?BBU_P_M2SD:BBU_L_M2SD)[idx];
  const m3=(jk==='P'?BBU_P_M3SD:BBU_L_M3SD)[idx];
  const p1=(jk==='P'?BBU_P_P1SD:BBU_L_P1SD)[idx];
  if(bb<m3)return{l:'BB Sangat Kurang',cls:'badge-severe'};
  if(bb<m2)return{l:'BB Kurang',cls:'badge-danger'};
  if(p1&&bb>p1)return{l:'Risiko Gizi Lebih / Obesitas',cls:'badge-danger'};
  return{l:'BB Normal',cls:'badge-ok'};
}

function statusGula(g){
  if(g==null)return{l:'—',cls:'badge-neutral',color:'#94a3b8'};
  if(g>=200)return{l:'Diabetes (≥200)',cls:'badge-danger',color:'#ef4444'};
  if(g>=140)return{l:'Pra-Diabetes',cls:'badge-warn',color:'#f59e0b'};
  if(g<70)return{l:'Hipoglikemia (<70)',cls:'badge-danger',color:'#7c3aed'};
  if(g<80)return{l:'Gula Rendah',cls:'badge-warn',color:'#6d28d9'};
  return{l:'Normal (80-139)',cls:'badge-ok',color:'#22c55e'};
}
function statusAU(au){if(au==null)return{l:'—',cls:'badge-neutral',color:'#94a3b8'};if(au>7)return{l:'Tinggi (risiko Gout)',cls:'badge-danger',color:'#ef4444'};if(au>6)return{l:'Batas Atas',cls:'badge-warn',color:'#f59e0b'};if(au<2.5)return{l:'Rendah',cls:'badge-warn',color:'#6d28d9'};return{l:'Normal (2,5–6)',cls:'badge-ok',color:'#22c55e'};}
function statusKol(k){if(k==null)return{l:'—',cls:'badge-neutral',color:'#94a3b8'};if(k>=240)return{l:'Tinggi (≥240)',cls:'badge-danger',color:'#ef4444'};if(k>=200)return{l:'Batas (200-239)',cls:'badge-warn',color:'#f59e0b'};return{l:'Normal',cls:'badge-ok',color:'#22c55e'};}
function overallLansia(l){
  const ss=[statusTD(l.td),statusGula(l.gula),statusAU(l.asamUrat),statusKol(l.kolesterol)];
  if(ss.some(s=>s.cls==='badge-severe'||s.cls==='badge-danger'))return{l:'Perlu Perhatian',cls:'badge-danger'};
  if(ss.some(s=>s.cls==='badge-warn'))return{l:'Pantau',cls:'badge-warn'};
  if(ss.every(s=>s.cls==='badge-neutral'))return{l:'Belum Diperiksa',cls:'badge-neutral'};
  return{l:'Baik',cls:'badge-ok'};
}

// ═══ NAVIGATION ═══
function showPage(page){
  console.log('[DEBUG] showPage called with:', page);
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.page===page));
  // sync bottom nav
  document.querySelectorAll('.bnav-item').forEach(n=>n.classList.toggle('active',n.dataset.page===page));
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  const map={dashboard:'Dashboard',balita:'Data Balita',imunisasi:'Imunisasi',lansia:'Data Lansia',laporan:'Laporan & Ekspor',konfig:'Konfigurasi',pengguna:'Manajemen Pengguna'};
  const sub={dashboard:'Ringkasan Data Posyandu',balita:'Pencatatan & Pertumbuhan Balita',imunisasi:'Pencatatan Imunisasi Balita',lansia:'Pemeriksaan Kesehatan Lansia',laporan:'Ekspor PDF Laporan',konfig:'Pengaturan Identitas Posyandu',pengguna:'Kelola Akun & Role Kader Posyandu'};
  document.getElementById('tbTitle').textContent=map[page]||page;
  document.getElementById('tbMeta').textContent=sub[page]||'';
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sov').style.display='none';
  // Guard: halaman admin-only tidak bisa diakses kader
  const adminPages = ['pengguna', 'konfig'];
  if (adminPages.includes(page) && window._currentUserRole && window._currentUserRole !== 'admin') {
    showPage('dashboard');
    return;
  }

  if(page==='dashboard')renderDashboard();
  if(page==='balita')renderBalita();
  if(page==='lansia')renderLansia();
  if(page==='imunisasi'){renderImunForm();renderRiwayatImun();}
  if(page==='laporan')renderLaporan();
  if(page==='konfig')renderKonfig();
  if(page==='pengguna')renderPengguna();
}
document.querySelectorAll('.nav-item').forEach(el=>el.addEventListener('click',()=>showPage(el.dataset.page)));

// FULLSCREEN
function toggleFullscreen(){
  const icon=document.getElementById('fsIcon');
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen().catch(()=>{});
    icon.className='ri-fullscreen-exit-line';
  } else {
    document.exitFullscreen();
    icon.className='ri-fullscreen-line';
  }
}
document.addEventListener('fullscreenchange',()=>{
  const icon=document.getElementById('fsIcon');
  if(icon)icon.className=document.fullscreenElement?'ri-fullscreen-exit-line':'ri-fullscreen-line';
});

// ═══ DASHBOARD ═══
let _dc={};
function getLast12Months(){const m=[],n=new Date();for(let i=11;i>=0;i--){const d=new Date(n.getFullYear(),n.getMonth()-i,1);m.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`);}return m;}

function renderDashboard(){
  const jB=db.balita.length,jL=db.lansia.length;
  const stList=db.balita.filter(b=>cekStunting(b));
  const lRisiko=db.lansia.filter(l=>overallLansia(l).cls==='badge-danger').length;
  const lPantau=db.lansia.filter(l=>overallLansia(l).cls==='badge-warn').length;
  document.getElementById('statsGrid').innerHTML=`
    <div class="stat-card teal"><div class="stat-icon">👶</div><div class="stat-label">Balita Terdaftar</div><div class="stat-val">${jB}<span class="stat-unit"> anak</span></div></div>
    <div class="stat-card mint"><div class="stat-icon">👴</div><div class="stat-label">Lansia Terdaftar</div><div class="stat-val">${jL}<span class="stat-unit"> orang</span></div></div>
    <div class="stat-card amber" style="cursor:pointer">
      <div class="stat-icon">📏</div><div class="stat-label">Potensi Stunting</div>
      <div class="stat-val">${stList.length}<span class="stat-unit"> anak</span></div>
      <div style="font-size:11px;color:var(--mu);margin-top:4px">${jB>0?Math.round(stList.length/jB*100):0}% dari total</div>
    </div>
    <div class="stat-card purple">
      <div class="stat-icon">⚠️</div><div class="stat-label">Lansia Perlu Perhatian</div>
      <div class="stat-val">${lRisiko}<span class="stat-unit"> orang</span></div>
      <div style="font-size:11px;color:var(--mu);margin-top:4px">${lPantau} dipantau</div>
    </div>`;

  // init quick input
  updateQPeserta();
  const n=new Date();
  if(!document.getElementById('qBulan').value)document.getElementById('qBulan').value=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}`;

  // KUNJUNGAN TERAKHIR
  renderKunjunganTerakhir();

  // GRAFIK KEHADIRAN — mulai dari bulan pertama data tersedia
  const allBalitaBulans=[...new Set(db.balita.flatMap(b=>(b.riwayatBB||[]).map(r=>r.bulan||'')).filter(Boolean))].sort();
  const allLansiaBulans=[...new Set(db.lansia.flatMap(l=>(l.riwayatPemeriksaan||[]).map(r=>r.bulan||'')).filter(Boolean))].sort();

  function buildChartMonths(bulans){
    if(bulans.length===0) return getLast12Months();
    const first=bulans[0];
    const now=new Date();
    const nowYM=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
    const months=[];
    let cur=new Date(first+'-01');
    const end=new Date(nowYM+'-01');
    while(cur<=end){
      months.push(`${cur.getFullYear()}-${String(cur.getMonth()+1).padStart(2,'0')}`);
      cur.setMonth(cur.getMonth()+1);
    }
    return months;
  }

  const bMonths=buildChartMonths(allBalitaBulans);
  const lMonths=buildChartMonths(allLansiaBulans);
  const bLabels=bMonths.map(fmtBulan);
  const lLabels=lMonths.map(fmtBulan);
  const bPerBulan=bMonths.map(m=>db.balita.filter(b=>(b.riwayatBB||[]).some(r=>(r.bulan||'')===m)).length);
  const lPerBulan=lMonths.map(m=>db.lansia.filter(l=>(l.riwayatPemeriksaan||[]).some(r=>(r.bulan||'')===m)).length);

  ['dashBalitaChart','dashLansiaChart'].forEach(id=>{if(_dc[id]){_dc[id].destroy();delete _dc[id];}});
  const isDark=document.body.classList.contains('dark');
  const gridC=isDark?'rgba(255,255,255,0.06)':'rgba(0,0,0,0.04)';
  const tickC=isDark?'#7a9ab5':'#64748b';
  const cOpt=(color,label,data,labels)=>({type:'line',data:{labels,datasets:[{label,data,borderColor:color,backgroundColor:color.replace(')',',0.12)').replace('rgb','rgba'),fill:true,tension:0.4,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:color,borderWidth:2.5}]},options:{responsive:true,maintainAspectRatio:false,animation:{duration:700},plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{font:{family:'Outfit',size:10},color:tickC,maxRotation:45}},y:{beginAtZero:true,ticks:{stepSize:1,font:{family:'Outfit',size:10},color:tickC},grid:{color:gridC}}}}});
  _dc['dashBalitaChart']=new Chart(document.getElementById('dashBalitaChart'),cOpt('rgb(23,164,196)','Balita',bPerBulan,bLabels));
  _dc['dashLansiaChart']=new Chart(document.getElementById('dashLansiaChart'),cOpt('rgb(0,201,167)','Lansia',lPerBulan,lLabels));

  renderStuntingCard('stuntingInfografis');
  renderLansiaHealthCard('lansiaHealthInfografis');
}

// ═══ FILTER PENCATATAN ═══
let _kunjFilter='all';
function setFilterKunj(f){
  _kunjFilter=f;
  ['all','balita','lansia'].forEach(k=>{
    const btn=document.getElementById('filterKunj_'+k);
    if(!btn)return;
    if(k===f){btn.className='btn btn-sm btn-primary';btn.style.padding='5px 12px';btn.style.fontSize='12px';btn.style.color='';btn.style.borderColor='';}
    else{btn.className='btn btn-sm btn-outline';btn.style.padding='5px 12px';btn.style.fontSize='12px';
      if(k==='balita'){btn.style.color='#0891b2';btn.style.borderColor='#0891b2';}
      else if(k==='lansia'){btn.style.color='#d97706';btn.style.borderColor='#d97706';}
      else{btn.style.color='';btn.style.borderColor='';}
    }
  });
  renderKunjunganTerakhir();
}

function renderKunjunganTerakhir(){
  const entries=[];
  if(_kunjFilter!=='lansia') db.balita.forEach(b=>(b.riwayatBB||[]).forEach(r=>entries.push({jenis:'balita',nama:b.nama,id:b.id,bulan:r.bulan||'',detail:`BB: ${fmtDes(r.bb)} kg · TB: ${fmtDes(r.tb)} cm`})));
  if(_kunjFilter!=='balita') db.lansia.forEach(l=>(l.riwayatPemeriksaan||[]).forEach(r=>entries.push({jenis:'lansia',nama:l.nama,id:l.id,bulan:r.bulan||'',detail:`TD: ${r.td||'—'} · Gula: ${r.gula!=null?fmtDes(r.gula):'—'} mg/dL`})));
  entries.sort((a,z)=>z.bulan.localeCompare(a.bulan));
  const top=entries.slice(0,8);
  const el=document.getElementById('kunjunganTerakhir');
  if(top.length===0){el.innerHTML='<div class="empty-state" style="padding:20px"><i class="ri-calendar-close-line"></i><p>Belum ada catatan pencatatan</p></div>';return;}
  el.innerHTML=`<div class="kunjungan-list">${top.map(e=>`
    <div class="kunj-item">
      <div class="kunj-avatar ${e.jenis}">${e.jenis==='balita'?'<i class="ri-emotion-line"></i>':'<i class="ri-user-star-line"></i>'}</div>
      <div style="flex:1;min-width:0">
        <div class="kunj-name" style="cursor:pointer" onclick="${e.jenis==='balita'?`detailBalita('${e.id}')`:`detailLansia('${e.id}')`}">${e.nama}</div>
        <div class="kunj-meta">${e.detail}</div>
      </div>
      <span class="kunj-badge badge badge-info">${fmtBulan(e.bulan)}</span>
      <span class="badge" style="font-size:10px;${e.jenis==='balita'?'background:#e0f2fe;color:#0369a1':'background:#fef3c7;color:#d97706'}">${e.jenis==='balita'?'Balita':'Lansia'}</span>
    </div>`).join('')}</div>`;
}

function renderStuntingCard(elId){
  const el=document.getElementById(elId);if(!el)return;
  const jB=db.balita.length;
  if(jB===0){el.innerHTML='<div class="empty-state" style="padding:18px 0"><i class="ri-user-heart-line"></i><p>Belum ada data</p></div>';return;}
  const sangat=db.balita.filter(b=>cekSangatPendek(b)).length;
  const pendek=db.balita.filter(b=>cekStunting(b)&&!cekSangatPendek(b)).length;
  const normal=jB-sangat-pendek;
  el.innerHTML=`
    <div style="display:flex;gap:8px;margin:10px 0">
      ${[['Sangat Pendek',sangat,'badge-severe','#7f1d1d'],['Pendek (Stunted)',pendek,'badge-danger','var(--coral)'],['Normal',normal,'badge-ok','var(--mint)']].map(([l,v,cls,c])=>`
      <div style="flex:1;background:var(--t0);border:1px solid var(--bd);border-radius:10px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:800;color:${c}">${v}</div>
        <div style="font-size:9px;font-weight:700;color:var(--mu);margin-top:2px;line-height:1.3">${l}</div>
        <div style="font-size:10px;color:var(--mu)">${Math.round(v/jB*100)}%</div>
      </div>`).join('')}
    </div>
    <div style="display:flex;height:8px;border-radius:99px;overflow:hidden">
      <div style="background:#7f1d1d;width:${Math.round(sangat/jB*100)}%;transition:width .8s"></div>
      <div style="background:var(--coral);width:${Math.round(pendek/jB*100)}%;transition:width .8s"></div>
      <div style="background:var(--mint);flex:1"></div>
    </div>
    ${sangat+pendek>0?`<div style="font-size:12px;color:#991b1b;font-weight:600;margin-top:8px"><i class="ri-alert-line"></i> ${sangat+pendek} balita perlu tindak lanjut</div>`:'<div style="font-size:12px;color:var(--mint);font-weight:600;margin-top:8px">✅ Semua dalam rentang normal</div>'}`;
}

function renderLansiaHealthCard(elId){
  const el=document.getElementById(elId);if(!el)return;
  const jL=db.lansia.length;
  if(jL===0){el.innerHTML='<div class="empty-state" style="padding:18px 0"><i class="ri-parent-line"></i><p>Belum ada data</p></div>';return;}
  const perlu=db.lansia.filter(l=>overallLansia(l).cls==='badge-danger').length;
  const pantau=db.lansia.filter(l=>overallLansia(l).cls==='badge-warn').length;
  const baik=db.lansia.filter(l=>overallLansia(l).cls==='badge-ok').length;
  const belum=jL-perlu-pantau-baik;
  el.innerHTML=`
    <div style="display:flex;gap:8px;margin:10px 0;flex-wrap:wrap">
      ${[['Perlu Perhatian',perlu,'var(--coral)'],['Pantau',pantau,'var(--amber)'],['Baik',baik,'var(--mint)'],['Belum Diperiksa',belum,'#94a3b8']].map(([l,v,c])=>`
      <div style="flex:1;min-width:65px;background:var(--t0);border:1px solid var(--bd);border-radius:10px;padding:9px;text-align:center">
        <div style="font-size:18px;font-weight:800;color:${c}">${v}</div>
        <div style="font-size:9px;font-weight:700;color:var(--mu);margin-top:2px;line-height:1.3">${l}</div>
      </div>`).join('')}
    </div>
    <div style="display:flex;height:8px;border-radius:99px;overflow:hidden">
      <div style="background:var(--coral);width:${Math.round(perlu/jL*100)}%;transition:width .8s"></div>
      <div style="background:var(--amber);width:${Math.round(pantau/jL*100)}%;transition:width .8s"></div>
      <div style="background:var(--mint);width:${Math.round(baik/jL*100)}%;transition:width .8s"></div>
      <div style="background:#e2e8f0;flex:1"></div>
    </div>`;
}

// ═══ QUICK INPUT ═══
let _qList=[];
function updateQPeserta(){
  const j=document.getElementById('qJenis').value,isB=j==='balita';
  _qList=(isB?db.balita:db.lansia).map(x=>({id:x.id,nama:x.nama}));
  document.getElementById('qPesertaInput').value='';
  document.getElementById('qPesertaId').value='';
  ['qBBGrp','qTBGrp','qLKGrp','qLLAGrp'].forEach(id=>document.getElementById(id).style.display=isB?'flex':'none');
  ['qTDGrp','qGulaGrp','qAUGrp','qKolGrp'].forEach(id=>document.getElementById(id).style.display=isB?'none':'flex');
}
function filterQPeserta(){
  const q=document.getElementById('qPesertaInput').value.toLowerCase();
  document.getElementById('qPesertaId').value='';
  const filtered=_qList.filter(x=>x.nama.toLowerCase().includes(q));
  const dd=document.getElementById('qDropdown');
  dd.innerHTML=filtered.map(x=>`<div class="combobox-opt" onmousedown="selectQPeserta('${x.id}','${x.nama.replace(/'/g,"\\'")}')">` +x.nama+'</div>').join('');
  dd.classList.toggle('open',filtered.length>0&&q.length>0);
}
function openQDropdown(){
  if(_qList.length>0){
    document.getElementById('qDropdown').innerHTML=_qList.map(x=>`<div class="combobox-opt" onmousedown="selectQPeserta('${x.id}','${x.nama.replace(/'/g,"\\'")}')">` +x.nama+'</div>').join('');
    document.getElementById('qDropdown').classList.add('open');
  }
}
function closeQDropdown(){document.getElementById('qDropdown').classList.remove('open');}
function selectQPeserta(id,nama){
  document.getElementById('qPesertaInput').value=nama;
  document.getElementById('qPesertaId').value=id;
  closeQDropdown();
}
function simpanKunjungan(){
  const j=document.getElementById('qJenis').value,id=document.getElementById('qPesertaId').value,bulan=document.getElementById('qBulan').value;
  if(!id){toast('Pilih peserta dari daftar','error');return;}
  if(!bulan){toast('Pilih bulan pemeriksaan','error');return;}
  if(j==='balita'){
    const bb=parseNum(document.getElementById('qBB').value),tb=parseNum(document.getElementById('qTB').value);
    if(isNaN(bb)||isNaN(tb)){toast('Isi BB dan TB','error');return;}
    const lk=document.getElementById('qLK').value?parseNum(document.getElementById('qLK').value):null;
    const lla=document.getElementById('qLLA').value?parseNum(document.getElementById('qLLA').value):null;
    simpanRiwayatBalita(id,bulan,bb,tb,lk,lla);
  } else {
    const td=document.getElementById('qTD').value.trim();
    const gula=document.getElementById('qGula').value?parseNum(document.getElementById('qGula').value):null;
    const au=document.getElementById('qAU').value?parseNum(document.getElementById('qAU').value):null;
    const kol=document.getElementById('qKol').value?parseInt(String(document.getElementById('qKol').value).replace(',','.')):null;
    if(!td&&gula===null&&au===null&&kol===null){toast('Isi minimal satu pemeriksaan','error');return;}
    simpanRiwayatLansia(id,bulan,td,gula,au,kol);
  }
  ['qBB','qTB','qLK','qLLA','qTD','qGula','qAU','qKol'].forEach(f=>{const e=document.getElementById(f);if(e)e.value='';});
  document.getElementById('qPesertaInput').value='';document.getElementById('qPesertaId').value='';
  renderDashboard();
}

// ═══ RIWAYAT HELPERS ═══
function simpanRiwayatBalita(id,bulan,bb,tb,lk,lla){
  const idx=db.balita.findIndex(x=>x.id===id);if(idx===-1)return;
  const rw=db.balita[idx].riwayatBB||[];
  const ei=rw.findIndex(r=>r.bulan===bulan);
  const entry={bulan,bb,tb};if(lk!=null)entry.lk=lk;if(lla!=null)entry.lla=lla;
  if(ei!==-1)rw[ei]=entry;else rw.push(entry);
  rw.sort((a,z)=>a.bulan.localeCompare(z.bulan));
  db.balita[idx].riwayatBB=rw;
  const lat=rw[rw.length-1];
  db.balita[idx].bb=lat.bb;db.balita[idx].tb=lat.tb;
  if(lat.lk!=null)db.balita[idx].lk=lat.lk;if(lat.lla!=null)db.balita[idx].lla=lat.lla;
  saveDB();toast('Pengukuran balita tersimpan');
}
function simpanRiwayatLansia(id,bulan,td,gula,au,kol){
  const idx=db.lansia.findIndex(x=>x.id===id);if(idx===-1)return;
  const rp=db.lansia[idx].riwayatPemeriksaan||[];
  const ei=rp.findIndex(r=>r.bulan===bulan);
  const entry={bulan};if(td)entry.td=td;if(gula!=null)entry.gula=gula;if(au!=null)entry.asamUrat=au;if(kol!=null)entry.kolesterol=kol;
  if(ei!==-1)rp[ei]=entry;else rp.push(entry);
  rp.sort((a,z)=>a.bulan.localeCompare(z.bulan));
  db.lansia[idx].riwayatPemeriksaan=rp;
  const lat=rp[rp.length-1];
  if(lat.td)db.lansia[idx].td=lat.td;if(lat.gula!=null)db.lansia[idx].gula=lat.gula;
  if(lat.asamUrat!=null)db.lansia[idx].asamUrat=lat.asamUrat;if(lat.kolesterol!=null)db.lansia[idx].kolesterol=lat.kolesterol;
  saveDB();toast('Pemeriksaan lansia tersimpan');
}

// MODAL CATAT
let _cBId=null,_cLId=null;
function openCatatBalita(id){
  _cBId=id;const b=db.balita.find(x=>x.id===id);if(!b)return;
  document.getElementById('cBalitaInfo').textContent=`${b.nama} · ${hitungUsiaDetail(b.tglLahir)}`;
  const n=new Date();document.getElementById('cBulan').value=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}`;
  ['cBB','cTB','cLK','cLLA'].forEach(f=>document.getElementById(f).value='');
  openModal('modalCatatBalita');
}
function simpanCatatBalita(){
  const bb=parseNum(document.getElementById('cBB').value),tb=parseNum(document.getElementById('cTB').value),bulan=document.getElementById('cBulan').value;
  if(!bulan||isNaN(bb)||isNaN(tb)){toast('Isi bulan, BB, dan TB','error');return;}
  const lk=document.getElementById('cLK').value?parseNum(document.getElementById('cLK').value):null;
  const lla=document.getElementById('cLLA').value?parseNum(document.getElementById('cLLA').value):null;
  simpanRiwayatBalita(_cBId,bulan,bb,tb,lk,lla);
  closeModal('modalCatatBalita');
  if(document.getElementById('modalDetailBalita').classList.contains('open'))detailBalita(_cBId);
  renderBalita();
}
function openCatatLansia(id){
  _cLId=id;const l=db.lansia.find(x=>x.id===id);if(!l)return;
  document.getElementById('cLansiaInfo').textContent=`${l.nama} · ${hitungUsiaThn(l.tglLahir)} tahun`;
  document.getElementById('cLansiaDupWarn').style.display='none';
  const n=new Date();document.getElementById('clBulan').value=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}`;
  ['clTD','clGula','clAU','clKol'].forEach(f=>document.getElementById(f).value='');
  openModal('modalCatatLansia');
  cekDupLansia();
}
function cekDupLansia(){
  const bulan=document.getElementById('clBulan').value;
  if(!bulan||!_cLId)return;
  const l=db.lansia.find(x=>x.id===_cLId);if(!l)return;
  const rp=l.riwayatPemeriksaan||[];
  const ada=rp.find(r=>r.bulan===bulan);
  const warnEl=document.getElementById('cLansiaDupWarn');
  if(ada){
    warnEl.style.display='block';
    warnEl.innerHTML=`⚠️ Sudah ada pencatatan untuk <b>${fmtBulan(bulan)}</b>. Menyimpan akan <b>menggantikan</b> data bulan tersebut.`;
  } else {
    warnEl.style.display='none';
  }
}
function simpanCatatLansia(){
  const bulan=document.getElementById('clBulan').value,td=document.getElementById('clTD').value.trim();
  const gula=document.getElementById('clGula').value?parseNum(document.getElementById('clGula').value):null;
  const au=document.getElementById('clAU').value?parseNum(document.getElementById('clAU').value):null;
  const kol=document.getElementById('clKol').value?parseInt(String(document.getElementById('clKol').value).replace(',','.')):null;
  if(!bulan){toast('Pilih bulan','error');return;}
  if(!td&&gula===null&&au===null&&kol===null){toast('Isi minimal satu hasil pemeriksaan','error');return;}
  // upsert: replace existing entry for same month without touching other months
  const idx=db.lansia.findIndex(x=>x.id===_cLId);if(idx===-1)return;
  const rp=[...(db.lansia[idx].riwayatPemeriksaan||[])];
  const ei=rp.findIndex(r=>r.bulan===bulan);
  const entry={bulan};
  if(td)entry.td=td;
  if(gula!=null)entry.gula=gula;
  if(au!=null)entry.asamUrat=au;
  if(kol!=null)entry.kolesterol=kol;
  if(ei!==-1)rp[ei]=entry;else rp.push(entry);
  rp.sort((a,z)=>a.bulan.localeCompare(z.bulan));
  db.lansia[idx].riwayatPemeriksaan=rp;
  // Update primary fields from latest entry only
  const lat=rp[rp.length-1];
  if(lat.td)db.lansia[idx].td=lat.td;
  if(lat.gula!=null)db.lansia[idx].gula=lat.gula;
  if(lat.asamUrat!=null)db.lansia[idx].asamUrat=lat.asamUrat;
  if(lat.kolesterol!=null)db.lansia[idx].kolesterol=lat.kolesterol;
  saveDB();
  closeModal('modalCatatLansia');
  if(document.getElementById('modalDetailLansia').classList.contains('open'))detailLansia(_cLId);
  renderLansia();
  toast('Pemeriksaan tersimpan');
}

// ═══ BALITA ═══
let editBId=null,_bSortCol='',_bSortDir=1;
function setSortBalita(col){if(_bSortCol===col)_bSortDir*=-1;else{_bSortCol=col;_bSortDir=1;}renderBalita();}
function openBalitaModal(id=null){
  editBId=id;
  document.getElementById('mBalitaTitle').innerHTML=`<i class="ri-user-heart-line"></i> ${id?'Edit':'Tambah'} Balita`;
  ['bNama','bNamaIbu','bNamaAyah','bTglLahir','bAlamat','bNIK','bKK','bNIKIbu','bNIKAyah','bAnakKe'].forEach(f=>{const el=document.getElementById(f);if(el)el.value='';});
  document.getElementById('bJK').value='L';
  document.getElementById('bPosyandu').value='Posyandu Panda';
  if(id){const b=db.balita.find(x=>x.id===id);if(!b)return;
    ['Nama','NamaIbu','NamaAyah','Alamat','NIK','KK','NIKIbu','NIKAyah','AnakKe'].forEach(k=>{const el=document.getElementById('b'+k);if(el)el.value=b[k.charAt(0).toLowerCase()+k.slice(1)]||'';});
    document.getElementById('bTglLahir').value=b.tglLahir?fmtTglDisplay(b.tglLahir):'';
    document.getElementById('bJK').value=b.jk||'L';
    document.getElementById('bPosyandu').value=b.posyandu||'Posyandu Panda';
  }
  openModal('modalBalita');
}
function simpanBalita(){
  const nama=document.getElementById('bNama').value.trim(),namaIbu=document.getElementById('bNamaIbu').value.trim();
  const tglLahirInput=document.getElementById('bTglLahir').value.trim(),tglLahir=parseTglInput(tglLahirInput),jk=document.getElementById('bJK').value;
  const alamat=document.getElementById('bAlamat').value.trim();
  const posyandu=document.getElementById('bPosyandu').value;
  if(!nama||!namaIbu||!tglLahir||!alamat){toast('Isi semua field wajib (*)','error');return;}
  const obj={nama,namaIbu,namaAyah:document.getElementById('bNamaAyah').value.trim(),tglLahir,jk,posyandu,alamat,
    nik:document.getElementById('bNIK').value.trim(),kk:document.getElementById('bKK').value.trim(),
    nikIbu:document.getElementById('bNIKIbu').value.trim(),nikAyah:document.getElementById('bNIKAyah').value.trim(),
    anakKe:parseInt(String(document.getElementById('bAnakKe').value).replace(',','.'))||null};
  if(editBId){
    const idx=db.balita.findIndex(x=>x.id===editBId);if(idx!==-1){
      db.balita[idx]={...db.balita[idx],...obj};
    }
  } else {
    db.balita.push({id:uid(),...obj,bb:null,tb:null,lk:null,lla:null,riwayatBB:[]});
  }
  saveDB();closeModal('modalBalita');renderBalita();toast(editBId?'Data diperbarui':'Balita ditambahkan');editBId=null;
}
function hapusBalita(id){
  if(window._currentUserRole==='kader'){toast('Kader tidak memiliki izin menghapus data','error');return;}
  if(!confirm('Hapus data balita ini?'))return;
  db.balita=db.balita.filter(b=>b.id!==id);db.imunisasi=db.imunisasi.filter(i=>i.balitaId!==id);
  saveDB();renderBalita();toast('Balita dihapus');
}
function renderBalita(){
  console.log('[DEBUG] renderBalita called, balita count:', db.balita.length);
  const q=(document.getElementById('searchBalita')?.value||'').toLowerCase();
  const sortV=document.getElementById('sortBalita')?.value||'';
  const fpsy=document.getElementById('filterPosyandu')?.value||'';
  let list=db.balita.filter(b=>b.nama.toLowerCase().includes(q)||b.namaIbu.toLowerCase().includes(q));
  if(fpsy)list=list.filter(b=>(b.posyandu||'')=== fpsy);
  if(sortV==='usia_asc')list.sort((a,z)=>hitungUsia(z.tglLahir)-hitungUsia(a.tglLahir));
  else if(sortV==='usia_desc')list.sort((a,z)=>hitungUsia(a.tglLahir)-hitungUsia(z.tglLahir));
  else if(sortV==='jk_l')list=list.filter(b=>(b.jk||'L')==='L');
  else if(sortV==='jk_p')list=list.filter(b=>(b.jk||'L')==='P');
  if(_bSortCol==='nama')list.sort((a,z)=>_bSortDir*(a.nama.localeCompare(z.nama)));
  else if(_bSortCol==='usia')list.sort((a,z)=>_bSortDir*(hitungUsia(a.tglLahir)-hitungUsia(z.tglLahir)));
  const total=list.length;
  const limitV=document.getElementById('limitBalita')?.value||'10';
  const limit=limitV==='all'?total:Math.min(parseInt(limitV),total);
  const shown=list.slice(0,limit);
  document.getElementById('infoBalita').textContent=`Menampilkan ${shown.length} dari ${total} data`;
  const tbody=document.getElementById('balitaTbody');
  if(!tbody)return;
  if(total===0){tbody.innerHTML=`<tr><td colspan="7"><div class="empty-state"><i class="ri-user-heart-line"></i><p>${q?'Tidak ditemukan':'Belum ada data balita'}</p></div></td></tr>`;return;}
  tbody.innerHTML=shown.map((b,i)=>{
    const usia=hitungUsia(b.tglLahir);
    return `<tr>
      <td style="color:var(--mu);font-size:12px">${i+1}</td>
      <td class="td-name" style="cursor:pointer" onclick="detailBalita('${b.id}')">${b.nama}</td>
      <td style="color:var(--mu);font-size:13px">${b.namaIbu||'—'}</td>
      <td><span class="badge" style="${(b.jk||'L')==='L'?'background:#e0f2fe;color:#0369a1':'background:#fce7f3;color:#be185d'}">${(b.jk||'L')==='L'?'L':'P'}</span></td>
      <td>${hitungUsiaDetail(b.tglLahir)}</td>
      <td><span style="font-size:11px;font-weight:600;color:${(b.posyandu||'').includes('Panda')?'#7c3aed':'#0369a1'}">${b.posyandu||'—'}</span></td>
      <td><div style="display:flex;gap:6px;flex-wrap:wrap">
        <button title="Lihat Detail" onclick="detailBalita('${b.id}')" style="display:flex;flex-direction:column;align-items:center;gap:1px;background:#eff6ff;border:1.5px solid #bfdbfe;color:#1d4ed8;border-radius:9px;padding:5px 8px;cursor:pointer;font-family:inherit"><i class="ri-eye-line" style="font-size:16px"></i><span style="font-size:9px;font-weight:700">Detail</span></button>
        <button title="Catat Pengukuran" onclick="openCatatBalita('${b.id}')" style="display:flex;flex-direction:column;align-items:center;gap:1px;background:#f0fdf4;border:1.5px solid #86efac;color:#15803d;border-radius:9px;padding:5px 8px;cursor:pointer;font-family:inherit"><i class="ri-add-circle-line" style="font-size:16px"></i><span style="font-size:9px;font-weight:700">Catat</span></button>
        <button title="Edit Data" onclick="openBalitaModal('${b.id}')" style="display:flex;flex-direction:column;align-items:center;gap:1px;background:#fefce8;border:1.5px solid #fde68a;color:#92400e;border-radius:9px;padding:5px 8px;cursor:pointer;font-family:inherit"><i class="ri-pencil-line" style="font-size:16px"></i><span style="font-size:9px;font-weight:700">Edit</span></button>
        ${window._currentUserRole!=='kader'?`<button title="Hapus Data" onclick="hapusBalita('${b.id}')" style="display:flex;flex-direction:column;align-items:center;gap:1px;background:#fff1f2;border:1.5px solid #fecdd3;color:#be123c;border-radius:9px;padding:5px 8px;cursor:pointer;font-family:inherit"><i class="ri-delete-bin-line" style="font-size:16px"></i><span style="font-size:9px;font-weight:700">Hapus</span></button>`:''}
      </div></td></tr>`;
  }).join('');
}

// DETAIL BALITA
let _dtC={};
// ═══ CEK IMUNISASI TERLEWAT ═══
// Batas usia toleransi (bulan) untuk tiap tahap agar tidak terlalu ketat
const IMUN_BATAS={
  'HB-0':1,'BCG':2,'OPV-1':2,
  'DPT-HB-Hib 1':3,'OPV-2':3,'PCV-1':3,'RV-1':3,
  'DPT-HB-Hib 2':4,'OPV-3':4,'PCV-2':4,'RV-2':4,
  'DPT-HB-Hib 3':5,'OPV-4':5,'IPV-1':5,'RV-3':5,
  'MR-1':10,'IPV-2':10,
  'PCV-3':13,
  'DPT-HB-Hib 4':19,'MR-2':19,
};
function getImunTerlewat(b){
  const usia=hitungUsia(b.tglLahir);
  const sudah=db.imunisasi.filter(i=>i.balitaId===b.id).map(i=>i.jenis);
  const terlewat=[];
  ALL_IMUN.forEach(j=>{
    const batas=IMUN_BATAS[j.jenis];
    if(!batas)return;
    if(usia>=batas&&!sudah.includes(j.jenis)){
      // Cari stage label
      let stageLabel='';
      IMUN_STAGES.forEach(s=>{if(s.items.some(x=>x.jenis===j.jenis))stageLabel=s.stage;});
      terlewat.push({jenis:j.jenis,label:j.label,stage:stageLabel});
    }
  });
  return terlewat;
}

function detailBalita(id){
  const b=db.balita.find(x=>x.id===id);if(!b)return;
  document.getElementById('detailBalitaTitle').innerHTML=`<i class="ri-user-heart-line" style="color:var(--t5)"></i> ${b.nama}`;
  const usia=hitungUsia(b.tglLahir),jk=b.jk||'L';
  const imunB=db.imunisasi.filter(i=>i.balitaId===id);
  const imunDone=ALL_IMUN.filter(j=>imunB.some(i=>i.jenis===j.jenis));
  const pct=Math.round(imunDone.length/ALL_IMUN.length*100);
  const stTB=statusTBU(b.tb,usia,jk),stBB=statusBBU(b.bb,usia,jk);
  const rw=(b.riwayatBB||[]).sort((a,z)=>a.bulan.localeCompare(z.bulan));
  const rwL=rw.map(r=>fmtBulan(r.bulan));
  const rwBB=rw.map(r=>r.bb),rwTB=rw.map(r=>r.tb),rwLK=rw.map(r=>r.lk||null),rwLLA=rw.map(r=>r.lla||null);
  const rwUI=rw.map(r=>Math.min(60,hitungUsiaAtDate(b.tglLahir,r.bulan)));
  const whoTBL=rwUI.map(u=>(jk==='P'?TBU_P_M2SD:TBU_L_M2SD)[u]||null);
  const whoBBL=rwUI.map(u=>(jk==='P'?BBU_P_M2SD:BBU_L_M2SD)[u]||null);

  const terlewat=getImunTerlewat(b);
  const stBBLengkap=statusBBULengkap(b.bb,usia,jk);

  // Peringatan balita
  const balitaWarns=[];
  if(stTB.skor<=-3)balitaWarns.push({t:'danger',m:'🔴 <b>Sangat Pendek (Severely Stunted)</b> — TB jauh di bawah -3SD. Segera rujuk ke Puskesmas.'});
  else if(stTB.skor===-2)balitaWarns.push({t:'danger',m:'⚠️ <b>Pendek (Stunted)</b> — TB di bawah -2SD Permenkes No.2/2020. Perlu intervensi gizi.'});
  if(stBBLengkap.cls==='badge-severe'&&stBBLengkap.l.includes('Sangat'))balitaWarns.push({t:'danger',m:'🔴 <b>Berat Badan Sangat Kurang</b> — Risiko malnutrisi berat. Lakukan penilaian gizi segera.'});
  else if(stBBLengkap.cls==='badge-danger'&&stBBLengkap.l.includes('Kurang'))balitaWarns.push({t:'warn',m:'⚠️ <b>Berat Badan Kurang</b> — Perlu peningkatan asupan gizi dan pemantauan rutin.'});
  else if(stBBLengkap.cls==='badge-danger'&&stBBLengkap.l.includes('Obesitas'))balitaWarns.push({t:'danger',m:'🔴 <b>Risiko Gizi Lebih / Obesitas</b> — BB di atas +1SD. Batasi asupan gula & lemak, konsultasikan ke petugas gizi.'});

  document.getElementById('detailBalitaBody').innerHTML=`
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-bottom:12px">
      <button class="btn btn-mint btn-sm" onclick="openCatatBalita('${b.id}')"><i class="ri-add-circle-line"></i>Catat Pengukuran</button>
    </div>
    ${balitaWarns.map(w=>`<div class="alert-box ${w.t}" style="margin-bottom:8px"><i class="ri-alert-line"></i><span>${w.m}</span></div>`).join('')}
    ${terlewat.length>0?`<div style="background:#fef9c3;border:1.5px solid #fbbf24;border-radius:12px;padding:13px;margin-bottom:12px">
      <div style="font-weight:700;font-size:13px;color:#92400e;margin-bottom:8px;display:flex;align-items:center;gap:6px"><i class="ri-time-line" style="font-size:16px"></i>⚠️ ${terlewat.length} Imunisasi Terlewat (usia: ${hitungUsiaDetail(b.tglLahir)})</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${terlewat.map(t=>`<div style="background:#fff;border:1.5px solid #f59e0b;border-radius:8px;padding:5px 11px;font-size:12px;font-weight:600;color:#78350f"><span style="opacity:.7;font-size:10px">${t.stage}</span><br>${t.label}</div>`).join('')}
      </div>
    </div>`:''}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px" class="two-col-sm">
      <div><div class="detail-label" style="font-size:11px;color:var(--mu);text-transform:uppercase;font-weight:700">Nama Ibu</div><div style="font-weight:600">${b.namaIbu||'—'}</div></div>
      <div><div class="detail-label" style="font-size:11px;color:var(--mu);text-transform:uppercase;font-weight:700">Tanggal Lahir</div><div style="font-weight:600">${fmt(b.tglLahir)} (${hitungUsiaDetail(b.tglLahir)})</div></div>
      <div><div class="detail-label" style="font-size:11px;color:var(--mu);text-transform:uppercase;font-weight:700">Posyandu</div><div style="font-weight:600">${b.posyandu||'—'}</div></div>
      <div><div class="detail-label" style="font-size:11px;color:var(--mu);text-transform:uppercase;font-weight:700">Jenis Kelamin</div><div style="font-weight:600">${(b.jk||'L')==='L'?'Laki-laki':'Perempuan'}</div></div>
      <div><div class="detail-label" style="font-size:11px;color:var(--mu);text-transform:uppercase;font-weight:700">Berat Badan (terbaru)</div><div style="font-weight:600">${b.bb!=null?fmtDes(b.bb)+' kg':'-'} <span class="badge ${stBBLengkap.cls}" style="font-size:10px">${stBBLengkap.l}</span></div></div>
      <div><div class="detail-label" style="font-size:11px;color:var(--mu);text-transform:uppercase;font-weight:700">Tinggi Badan (terbaru)</div><div style="font-weight:600">${b.tb!=null?fmtDes(b.tb)+' cm':'-'} <span class="badge ${stTB.cls}" style="font-size:10px">${stTB.l}</span></div></div>
      ${b.lk!=null?`<div><div class="detail-label" style="font-size:11px;color:var(--mu);text-transform:uppercase;font-weight:700">Lingkar Kepala</div><div style="font-weight:600">${fmtDes(b.lk)} cm</div></div>`:''}
      ${b.lla!=null?`<div><div class="detail-label" style="font-size:11px;color:var(--mu);text-transform:uppercase;font-weight:700">Lingkar Lengan Atas</div><div style="font-weight:600">${fmtDes(b.lla)} cm</div></div>`:''}
      ${b.anakKe?`<div><div class="detail-label" style="font-size:11px;color:var(--mu);text-transform:uppercase;font-weight:700">Anak ke-</div><div style="font-weight:600">${b.anakKe}</div></div>`:''}
      <div style="grid-column:1/-1"><div class="detail-label" style="font-size:11px;color:var(--mu);text-transform:uppercase;font-weight:700">Alamat</div><div style="font-weight:600">${b.alamat||'—'}</div></div>
    </div>

    <!-- RIWAYAT PENCATATAN BALITA (collapsed by default) -->
    <div class="privasi-block" style="margin-bottom:12px">
      <button class="privasi-toggle" style="background:#e0f2fe;border-color:#7dd3fc;color:#0369a1;width:100%;justify-content:space-between" onclick="togglePrivasi('pencatatanBalita')">
        <span><i class="ri-table-line"></i> Riwayat Pencatatan (${rw.length} entri)</span>
        <i class="ri-arrow-down-s-line" id="arrowPencatatanBalita"></i>
      </button>
      <div class="privasi-content" id="pencatatanBalita" style="display:none;grid-template-columns:1fr;padding:0;background:transparent;border:none">
        ${rw.length===0
          ?`<div style="padding:12px;color:var(--mu);font-size:13px;text-align:center">Belum ada pencatatan. Gunakan tombol "Catat Pengukuran".</div>`
          :`<div style="overflow-x:auto;margin-top:8px">
            <table style="width:100%;border-collapse:collapse;font-size:12px">
              <thead><tr style="background:var(--t1)">
                <th style="padding:8px 10px;text-align:left;font-size:10px;font-weight:700;color:var(--t7);text-transform:uppercase;white-space:nowrap">Bulan</th>
                <th style="padding:8px 10px;text-align:right;font-size:10px;font-weight:700;color:var(--t7)">BB (kg)</th>
                <th style="padding:8px 10px;text-align:right;font-size:10px;font-weight:700;color:var(--t7)">TB (cm)</th>
                <th style="padding:8px 10px;text-align:right;font-size:10px;font-weight:700;color:var(--t7)">LK (cm)</th>
                <th style="padding:8px 10px;text-align:right;font-size:10px;font-weight:700;color:var(--t7)">LLA (cm)</th>
                <th style="padding:8px 10px;text-align:left;font-size:10px;font-weight:700;color:var(--t7)">Status BB</th>
                <th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:700;color:var(--t7)">Aksi</th>
              </tr></thead>
              <tbody>
                ${rw.map((r,ri)=>{
                  const uAtBulan=Math.min(60,hitungUsiaAtDate(b.tglLahir,r.bulan));
                  const stBBR=statusBBULengkap(r.bb,uAtBulan,jk);
                  const isLast=ri===rw.length-1;
                  return `<tr style="border-bottom:1px solid var(--bd);${isLast?'background:rgba(23,164,196,0.05)':''}">
                    <td style="padding:8px 10px;font-weight:${isLast?700:400};color:${isLast?'var(--t5)':'var(--tx)'}">
                      ${fmtBulan(r.bulan)}${isLast?` <span style="font-size:10px;color:var(--mint);font-weight:700">(Terbaru)</span>`:''}
                    </td>
                    <td style="padding:8px 10px;text-align:right;font-weight:600">${r.bb!=null?fmtDes(r.bb):'—'}</td>
                    <td style="padding:8px 10px;text-align:right;font-weight:600">${r.tb!=null?fmtDes(r.tb):'—'}</td>
                    <td style="padding:8px 10px;text-align:right;color:var(--mu)">${r.lk!=null?fmtDes(r.lk):'—'}</td>
                    <td style="padding:8px 10px;text-align:right;color:var(--mu)">${r.lla!=null?fmtDes(r.lla):'—'}</td>
                    <td style="padding:8px 10px"><span class="badge ${stBBR.cls}" style="font-size:10px">${stBBR.l}</span></td>
                    <td style="padding:8px 10px;text-align:center">
                      <button onclick="bukaEditRiwayatBalita('${b.id}','${r.bulan}')" title="Edit baris ini"
                        style="background:#eff6ff;border:1.5px solid #bfdbfe;color:#1d4ed8;border-radius:7px;padding:3px 9px;cursor:pointer;font-size:11px;font-weight:600;font-family:inherit">
                        <i class="ri-pencil-line"></i> Edit
                      </button>
                    </td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>`}
      </div>
    </div>

    <!-- PRIVASI -->
    <div class="privasi-block" style="margin-bottom:12px">
      <button class="privasi-toggle" onclick="togglePrivasi('privBalita')"><i class="ri-shield-keyhole-line"></i> Lihat Data Kependudukan</button>
      <div class="privasi-content" id="privBalita">
        <div><div class="detail-label" style="font-size:10px;color:var(--mu);text-transform:uppercase;font-weight:700">NIK Balita</div><div style="font-weight:600;font-size:13px">${b.nik||'—'}</div></div>
        <div><div class="detail-label" style="font-size:10px;color:var(--mu);text-transform:uppercase;font-weight:700">No. KK</div><div style="font-weight:600;font-size:13px">${b.kk||'—'}</div></div>
        <div><div class="detail-label" style="font-size:10px;color:var(--mu);text-transform:uppercase;font-weight:700">NIK Ibu</div><div style="font-weight:600;font-size:13px">${b.nikIbu||'—'}</div></div>
        <div><div class="detail-label" style="font-size:10px;color:var(--mu);text-transform:uppercase;font-weight:700">NIK Ayah</div><div style="font-weight:600;font-size:13px">${b.nikAyah||'—'}</div></div>
        <div><div class="detail-label" style="font-size:10px;color:var(--mu);text-transform:uppercase;font-weight:700">Nama Ayah</div><div style="font-weight:600;font-size:13px">${b.namaAyah||'—'}</div></div>
      </div>
    </div>
    <!-- GRAFIK -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px" class="two-col-sm">
      <div style="background:var(--t0);border:1px solid var(--bd);border-radius:12px;padding:13px">
        <div style="font-weight:700;font-size:13px;color:var(--t8);margin-bottom:8px"><i class="ri-scales-line"></i> Berat Badan
          <span style="float:right;font-size:10px;font-weight:400;color:var(--mu)"><span style="color:#2563eb">─</span> Aktual &nbsp;<span style="color:#dc2626">- -</span> -2SD</span>
        </div>
        <div style="position:relative;height:165px"><canvas id="dtBBChart"></canvas></div>
      </div>
      <div style="background:var(--t0);border:1px solid var(--bd);border-radius:12px;padding:13px">
        <div style="font-weight:700;font-size:13px;color:var(--t8);margin-bottom:8px"><i class="ri-ruler-line"></i> Tinggi Badan
          <span style="float:right;font-size:10px;font-weight:400;color:var(--mu)"><span style="color:#16a34a">─</span> Aktual &nbsp;<span style="color:#ea580c">- -</span> -2SD</span>
        </div>
        <div style="position:relative;height:165px"><canvas id="dtTBChart"></canvas></div>
      </div>
    </div>
    ${(b.lk||b.lla)?`<div style="background:var(--t0);border:1px solid var(--bd);border-radius:12px;padding:13px;margin-top:12px">
      <div style="font-weight:700;font-size:13px;color:var(--t8);margin-bottom:8px"><i class="ri-circle-line"></i> Lingkar Kepala &amp; Lingkar Lengan Atas
        <span style="float:right;font-size:10px;font-weight:400;color:var(--mu)"><span style="color:#7c3aed">─</span> LK &nbsp;<span style="color:#c2410c">─</span> LLA</span>
      </div>
      <div style="position:relative;height:145px"><canvas id="dtLKChart"></canvas></div>
    </div>`:''}
    <!-- IMUNISASI PER TAHAP -->
    <div style="background:var(--t0);border:1px solid var(--bd);border-radius:12px;padding:13px;margin-top:12px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div style="font-weight:700;font-size:13px;color:var(--t8)"><i class="ri-syringe-line"></i> Imunisasi</div>
        <span class="badge ${pct===100?'badge-ok':pct>=60?'badge-info':'badge-warn'}">${imunDone.length}/${ALL_IMUN.length} — ${pct}%</span>
      </div>
      <div class="imun-bar" style="margin-bottom:12px"><div class="imun-bar-fill" style="width:${pct}%;background:${pct===100?'var(--mint)':pct>=60?'var(--t4)':'var(--amber)'}"></div></div>
      ${IMUN_STAGES.map(stage=>`
        <div class="imun-stage">
          <div class="imun-stage-title">${stage.stage}</div>
          <div class="imun-grid">
            ${stage.items.map(j=>{
              const done=imunB.find(i=>i.jenis===j.jenis);
              return `<div class="imun-card ${done?'done':'pending'}">
                <div class="imun-icon">${done?'✅':'⏳'}</div>
                <div class="imun-name">${j.label}</div>
                <div class="imun-date">${done?`${fmt(done.tanggal)} <button onclick="openEditImun('${done.id}')" style="background:none;border:none;cursor:pointer;color:var(--t5);font-size:11px;padding:0"><i class="ri-pencil-line"></i></button>`:'Belum'}</div>
              </div>`;
            }).join('')}
          </div>
        </div>`).join('')}
    </div>`;

  openModal('modalDetailBalita');
  ['dtBBChart','dtTBChart','dtLKChart'].forEach(cid=>{if(_dtC[cid]){_dtC[cid].destroy();delete _dtC[cid];}});
  const cOpts={responsive:true,maintainAspectRatio:false,animation:{duration:800},plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{font:{family:'Outfit',size:10}}},y:{beginAtZero:false,grid:{color:'rgba(0,0,0,0.04)'},ticks:{font:{family:'Outfit',size:10}}}}};
  setTimeout(()=>{
    _dtC['dtBBChart']=new Chart(document.getElementById('dtBBChart'),{type:'line',data:{labels:rwL,datasets:[{label:'BB',data:rwBB,borderColor:'#2563eb',backgroundColor:'rgba(37,99,235,.12)',fill:true,tension:0.4,pointRadius:5,borderWidth:2.5},{label:'-2SD',data:whoBBL,borderColor:'#dc2626',borderDash:[5,4],fill:false,tension:0.3,pointRadius:2,borderWidth:1.5}]},options:cOpts});
    _dtC['dtTBChart']=new Chart(document.getElementById('dtTBChart'),{type:'line',data:{labels:rwL,datasets:[{label:'TB',data:rwTB,borderColor:'#16a34a',backgroundColor:'rgba(22,163,74,.12)',fill:true,tension:0.4,pointRadius:5,borderWidth:2.5},{label:'-2SD',data:whoTBL,borderColor:'#ea580c',borderDash:[5,4],fill:false,tension:0.3,pointRadius:2,borderWidth:1.5}]},options:cOpts});
    const lkEl=document.getElementById('dtLKChart');
    if(lkEl)_dtC['dtLKChart']=new Chart(lkEl,{type:'line',data:{labels:rwL,datasets:[{label:'Lingkar Kepala (cm)',data:rwLK,borderColor:'#7c3aed',backgroundColor:'rgba(124,58,237,.1)',fill:true,tension:0.4,pointRadius:4,borderWidth:2},{label:'Lingkar Lengan Atas (cm)',data:rwLLA,borderColor:'#c2410c',backgroundColor:'rgba(194,65,12,.08)',fill:true,tension:0.4,pointRadius:4,borderWidth:2}]},options:{...cOpts,plugins:{legend:{display:true,position:'bottom',labels:{font:{family:'Outfit',size:10}}}}}});
  },100);
}

function togglePrivasi(id){
  const el=document.getElementById(id);if(!el)return;
  // For new riwayat panels: use display none/block
  if(id==='pencatatanBalita'||id==='pencatatanLansia'){
    const isHidden=el.style.display==='none'||el.style.display==='';
    el.style.display=isHidden?'block':'none';
    const arrowId=id==='pencatatanBalita'?'arrowPencatatanBalita':'arrowPencatatanLansia';
    const arrow=document.getElementById(arrowId);
    if(arrow)arrow.className=isHidden?'ri-arrow-up-s-line':'ri-arrow-down-s-line';
    return;
  }
  // Untuk panel kependudukan — kader wajib verifikasi password
  if((id==='privBalita'||id==='privLansia') && window._currentUserRole==='kader'){
    // Kalau sudah terbuka, boleh tutup langsung tanpa verifikasi
    if(el.classList.contains('show')){
      el.classList.remove('show');
      const btn=el.previousElementSibling;
      if(btn) btn.innerHTML='<i class="ri-shield-keyhole-line"></i> Lihat Data Kependudukan';
      return;
    }
    // Belum terbuka → minta verifikasi password
    openPvModal(() => {
      el.classList.add('show');
      const btn=el.previousElementSibling;
      if(btn) btn.innerHTML='<i class="ri-eye-off-line"></i> Sembunyikan Kependudukan';
    });
    return;
  }
  // For privasi panels: use show class (admin langsung tanpa verifikasi)
  el.classList.toggle('show');
  const btn=el.previousElementSibling;if(!btn)return;
  const isShow=el.classList.contains('show');
  if(id==='privBalita'||id==='privLansia'){
    btn.innerHTML=isShow
      ?'<i class="ri-eye-off-line"></i> Sembunyikan Kependudukan'
      :'<i class="ri-shield-keyhole-line"></i> Lihat Data Kependudukan';
  }
}

// ── EDIT/HAPUS RIWAYAT BALITA (per baris) ──
function bukaEditRiwayatBalita(balitaId, bulan){
  const b=db.balita.find(x=>x.id===balitaId);if(!b)return;
  const rw=b.riwayatBB||[];
  const r=rw.find(x=>x.bulan===bulan);if(!r)return;
  document.getElementById('erBalitaId').value=balitaId;
  document.getElementById('erBulanLama').value=bulan;
  document.getElementById('erBalitaInfo').textContent=`${b.nama} · ${fmtBulan(bulan)}`;
  document.getElementById('erBulan').value=bulan;
  document.getElementById('erBB').value=r.bb!=null?r.bb:'';
  document.getElementById('erTB').value=r.tb!=null?r.tb:'';
  document.getElementById('erLK').value=r.lk!=null?r.lk:'';
  document.getElementById('erLLA').value=r.lla!=null?r.lla:'';
  openModal('modalEditRiwayatBalita');
}
function simpanEditRiwayatBalita(){
  const balitaId=document.getElementById('erBalitaId').value;
  const bulanLama=document.getElementById('erBulanLama').value;
  const bulanBaru=document.getElementById('erBulan').value;
  const bb=parseNum(document.getElementById('erBB').value);
  const tb=parseNum(document.getElementById('erTB').value);
  if(!bulanBaru||bb==null||isNaN(bb)||tb==null||isNaN(tb)){toast('Isi bulan, BB, dan TB','error');return;}
  const lk=document.getElementById('erLK').value?parseNum(document.getElementById('erLK').value):null;
  const lla=document.getElementById('erLLA').value?parseNum(document.getElementById('erLLA').value):null;
  const idx=db.balita.findIndex(x=>x.id===balitaId);if(idx===-1)return;
  const rw=db.balita[idx].riwayatBB||[];
  const filtered=rw.filter(r=>r.bulan!==bulanLama);
  const entry={bulan:bulanBaru,bb,tb};
  if(lk!=null)entry.lk=lk;if(lla!=null)entry.lla=lla;
  filtered.push(entry);
  filtered.sort((a,z)=>a.bulan.localeCompare(z.bulan));
  db.balita[idx].riwayatBB=filtered;
  const lat=filtered[filtered.length-1];
  db.balita[idx].bb=lat.bb;db.balita[idx].tb=lat.tb;
  if(lat.lk!=null)db.balita[idx].lk=lat.lk;if(lat.lla!=null)db.balita[idx].lla=lat.lla;
  saveDB();closeModal('modalEditRiwayatBalita');
  toast('Pencatatan diperbarui');
  detailBalita(balitaId);renderBalita();
}
function hapusRiwayatBalita(){
  const balitaId=document.getElementById('erBalitaId').value;
  const bulanLama=document.getElementById('erBulanLama').value;
  if(!confirm(`Hapus pencatatan ${fmtBulan(bulanLama)}?`))return;
  const idx=db.balita.findIndex(x=>x.id===balitaId);if(idx===-1)return;
  const filtered=db.balita[idx].riwayatBB.filter(r=>r.bulan!==bulanLama);
  filtered.sort((a,z)=>a.bulan.localeCompare(z.bulan));
  db.balita[idx].riwayatBB=filtered;
  if(filtered.length>0){
    const lat=filtered[filtered.length-1];
    db.balita[idx].bb=lat.bb;db.balita[idx].tb=lat.tb;
    if(lat.lk!=null)db.balita[idx].lk=lat.lk;if(lat.lla!=null)db.balita[idx].lla=lat.lla;
  } else {db.balita[idx].bb=null;db.balita[idx].tb=null;db.balita[idx].lk=null;db.balita[idx].lla=null;}
  saveDB();closeModal('modalEditRiwayatBalita');
  toast('Pencatatan dihapus');
  detailBalita(balitaId);renderBalita();
}

// ── EDIT/HAPUS RIWAYAT LANSIA (per baris) ──
function bukaEditRiwayatLansia(lansiaId, bulan){
  const l=db.lansia.find(x=>x.id===lansiaId);if(!l)return;
  const rp=l.riwayatPemeriksaan||[];
  const r=rp.find(x=>x.bulan===bulan);if(!r)return;
  document.getElementById('erLansiaId').value=lansiaId;
  document.getElementById('erLBulanLama').value=bulan;
  document.getElementById('erLansiaInfo').textContent=`${l.nama} · ${fmtBulan(bulan)}`;
  document.getElementById('erLBulan').value=bulan;
  document.getElementById('erLTD').value=r.td||'';
  document.getElementById('erLGula').value=r.gula!=null?r.gula:'';
  document.getElementById('erLAU').value=r.asamUrat!=null?r.asamUrat:'';
  document.getElementById('erLKol').value=r.kolesterol!=null?r.kolesterol:'';
  openModal('modalEditRiwayatLansia');
}
function simpanEditRiwayatLansia(){
  const lansiaId=document.getElementById('erLansiaId').value;
  const bulanLama=document.getElementById('erLBulanLama').value;
  const bulanBaru=document.getElementById('erLBulan').value;
  const td=document.getElementById('erLTD').value.trim();
  const gula=document.getElementById('erLGula').value?parseNum(document.getElementById('erLGula').value):null;
  const au=document.getElementById('erLAU').value?parseNum(document.getElementById('erLAU').value):null;
  const kol=document.getElementById('erLKol').value?parseNum(document.getElementById('erLKol').value):null;
  if(!bulanBaru){toast('Pilih bulan','error');return;}
  const idx=db.lansia.findIndex(x=>x.id===lansiaId);if(idx===-1)return;
  const rp=db.lansia[idx].riwayatPemeriksaan||[];
  const filtered=rp.filter(r=>r.bulan!==bulanLama);
  const entry={bulan:bulanBaru};
  if(td)entry.td=td;if(gula!=null)entry.gula=gula;if(au!=null)entry.asamUrat=au;if(kol!=null)entry.kolesterol=Math.round(kol);
  filtered.push(entry);
  filtered.sort((a,z)=>a.bulan.localeCompare(z.bulan));
  db.lansia[idx].riwayatPemeriksaan=filtered;
  const lat=filtered[filtered.length-1];
  if(lat.td)db.lansia[idx].td=lat.td;
  if(lat.gula!=null)db.lansia[idx].gula=lat.gula;
  if(lat.asamUrat!=null)db.lansia[idx].asamUrat=lat.asamUrat;
  if(lat.kolesterol!=null)db.lansia[idx].kolesterol=lat.kolesterol;
  saveDB();closeModal('modalEditRiwayatLansia');
  toast('Pencatatan diperbarui');
  detailLansia(lansiaId);renderLansia();
}
function hapusRiwayatLansia(){
  const lansiaId=document.getElementById('erLansiaId').value;
  const bulanLama=document.getElementById('erLBulanLama').value;
  if(!confirm(`Hapus pencatatan ${fmtBulan(bulanLama)}?`))return;
  const idx=db.lansia.findIndex(x=>x.id===lansiaId);if(idx===-1)return;
  const filtered=db.lansia[idx].riwayatPemeriksaan.filter(r=>r.bulan!==bulanLama);
  filtered.sort((a,z)=>a.bulan.localeCompare(z.bulan));
  db.lansia[idx].riwayatPemeriksaan=filtered;
  if(filtered.length>0){
    const lat=filtered[filtered.length-1];
    if(lat.td)db.lansia[idx].td=lat.td;if(lat.gula!=null)db.lansia[idx].gula=lat.gula;
    if(lat.asamUrat!=null)db.lansia[idx].asamUrat=lat.asamUrat;if(lat.kolesterol!=null)db.lansia[idx].kolesterol=lat.kolesterol;
  } else {delete db.lansia[idx].td;delete db.lansia[idx].gula;delete db.lansia[idx].asamUrat;delete db.lansia[idx].kolesterol;}
  saveDB();closeModal('modalEditRiwayatLansia');
  toast('Pencatatan dihapus');
  detailLansia(lansiaId);renderLansia();
}

// ── LEGACY (kept for backward compat but now unused) ──
function simpanEditPencatatanBalita(balitaId,bulanLama){bukaEditRiwayatBalita(balitaId,bulanLama);}
function simpanEditPencatatanLansia(lansiaId,bulanLama){bukaEditRiwayatLansia(lansiaId,bulanLama);}

// ═══ IMUNISASI ═══
function renderImunForm(){
  const sel=document.getElementById('imunBalitaSel');
  _imunList=db.balita.map(b=>({id:b.id,nama:b.nama}));
  document.getElementById('imunBalitaInput').value='';
  sel.value='';
  document.getElementById('imunChecklist').innerHTML=IMUN_STAGES.map(stage=>`
    <div style="width:100%;margin-bottom:4px">
      <div style="font-size:10px;font-weight:700;color:var(--t7);text-transform:uppercase;letter-spacing:.6px;margin-bottom:4px">${stage.stage}</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${stage.items.map(j=>`<label class="chk-item"><input type="checkbox" value="${j.jenis}" class="imun-cb"> ${j.label}</label>`).join('')}
      </div>
    </div>`).join('');
}
let _imunList=[];
function filterImunBalita(){
  const q=document.getElementById('imunBalitaInput').value.toLowerCase();
  document.getElementById('imunBalitaSel').value='';
  const filtered=_imunList.filter(x=>x.nama.toLowerCase().includes(q));
  const dd=document.getElementById('imunDropdown');
  dd.innerHTML=filtered.map(x=>`<div class="combobox-opt" onmousedown="selectImunBalita('${x.id}','${x.nama.replace(/'/g,"\\'")}')">` +x.nama+'</div>').join('');
  dd.classList.toggle('open',filtered.length>0&&q.length>0);
}
function openImunDropdown(){
  if(_imunList.length>0){
    document.getElementById('imunDropdown').innerHTML=_imunList.map(x=>`<div class="combobox-opt" onmousedown="selectImunBalita('${x.id}','${x.nama.replace(/'/g,"\\'")}')">` +x.nama+'</div>').join('');
    document.getElementById('imunDropdown').classList.add('open');
  }
}
function closeImunDropdown(){document.getElementById('imunDropdown').classList.remove('open');}
function selectImunBalita(id,nama){
  document.getElementById('imunBalitaInput').value=nama;
  document.getElementById('imunBalitaSel').value=id;
  closeImunDropdown();
  renderRiwayatImun();
}
function renderRiwayatImun(){
  const bid=document.getElementById('imunBalitaSel')?.value,el=document.getElementById('riwayatImunContainer');
  if(!bid){el.innerHTML='<div class="card-sub" style="margin:0">Pilih balita untuk melihat status imunisasi.</div>';return;}
  const imunB=db.imunisasi.filter(i=>i.balitaId===bid);
  const done=ALL_IMUN.filter(j=>imunB.some(i=>i.jenis===j.jenis)).length;
  const pct=Math.round(done/ALL_IMUN.length*100);
  el.innerHTML=`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;margin-bottom:5px"><span>${done}/${ALL_IMUN.length} selesai</span><span style="color:var(--t6)">${pct}%</span></div><div class="imun-bar"><div class="imun-bar-fill" style="width:${pct}%;background:${pct===100?'var(--mint)':pct>=60?'var(--t4)':'var(--amber)'}"></div></div></div>
    ${IMUN_STAGES.map(stage=>`
      <div class="imun-stage">
        <div class="imun-stage-title">${stage.stage}</div>
        <div class="imun-grid">
          ${stage.items.map(j=>{const rec=imunB.find(i=>i.jenis===j.jenis);
            return `<div class="imun-card ${rec?'done':'pending'}">
              <div class="imun-icon">${rec?'✅':'⏳'}</div>
              <div class="imun-name" style="font-size:10px">${j.label}</div>
              <div class="imun-date">${rec?`${fmt(rec.tanggal)} <button onclick="openEditImun('${rec.id}')" style="background:none;border:none;cursor:pointer;color:var(--t5);font-size:11px;padding:0"><i class="ri-pencil-line"></i></button>`:'Belum'}</div>
            </div>`;}).join('')}
        </div>
      </div>`).join('')}`;
}
function simpanImunisasi(){
  const bid=document.getElementById('imunBalitaSel').value,tglInput=document.getElementById('imunTgl').value.trim(),tgl=parseTglInput(tglInput);
  if(!bid||!tgl){toast('Pilih balita dan tanggal (dd/mm/yyyy)','error');return;}
  const checked=[...document.querySelectorAll('.imun-cb:checked')].map(c=>c.value);
  if(checked.length===0){toast('Pilih minimal satu imunisasi','error');return;}
  let added=0;
  checked.forEach(jenis=>{if(!db.imunisasi.some(i=>i.balitaId===bid&&i.jenis===jenis)){db.imunisasi.push({id:uid(),balitaId:bid,jenis,tanggal:tgl});added++;}});
  saveDB();renderRiwayatImun();document.querySelectorAll('.imun-cb').forEach(c=>c.checked=false);document.getElementById('imunTgl').value='';
  toast(added>0?`${added} imunisasi disimpan`:'Sudah pernah dicatat');
}
function openEditImun(id){
  const im=db.imunisasi.find(x=>x.id===id);if(!im)return;
  document.getElementById('editImunId').value=id;
  const sel=document.getElementById('editImunJenis');
  sel.innerHTML=ALL_IMUN.map(j=>`<option value="${j.jenis}" ${j.jenis===im.jenis?'selected':''}>${j.label}</option>`).join('');
  document.getElementById('editImunTgl').value=fmtTglDisplay(im.tanggal);
  openModal('modalEditImun');
}
function simpanEditImun(){
  const id=document.getElementById('editImunId').value,jenis=document.getElementById('editImunJenis').value,tglInput=document.getElementById('editImunTgl').value.trim(),tgl=parseTglInput(tglInput);
  if(!tgl){toast('Isi tanggal (dd/mm/yyyy)','error');return;}
  const idx=db.imunisasi.findIndex(x=>x.id===id);
  if(idx!==-1){db.imunisasi[idx].jenis=jenis;db.imunisasi[idx].tanggal=tgl;}
  saveDB();closeModal('modalEditImun');renderRiwayatImun();toast('Imunisasi diperbarui');
  const im=db.imunisasi[idx];
  if(im&&document.getElementById('modalDetailBalita').classList.contains('open')){const b=db.balita.find(x=>x.id===im.balitaId);if(b)detailBalita(b.id);}
}

// ═══ LANSIA ═══
let editLId=null;
function openLansiaModal(id=null){
  editLId=id;
  document.getElementById('mLansiaTitle').innerHTML=`<i class="ri-parent-line"></i> ${id?'Edit':'Tambah'} Lansia`;
  ['lNama','lTglLahir','lAlamat','lTD','lGula','lAsamUrat','lKolesterol','lRiwayat','lNIK','lKK'].forEach(f=>document.getElementById(f).value='');
  document.getElementById('lJK').value='';
  if(id){const l=db.lansia.find(x=>x.id===id);if(!l)return;
    document.getElementById('lNama').value=l.nama||'';document.getElementById('lTglLahir').value=l.tglLahir?fmtTglDisplay(l.tglLahir):'';
    document.getElementById('lAlamat').value=l.alamat||'';document.getElementById('lTD').value=l.td||'';
    document.getElementById('lGula').value=l.gula!=null?l.gula:'';document.getElementById('lAsamUrat').value=l.asamUrat!=null?l.asamUrat:'';
    document.getElementById('lKolesterol').value=l.kolesterol!=null?l.kolesterol:'';document.getElementById('lRiwayat').value=l.riwayat||'';
    document.getElementById('lNIK').value=l.nik||'';document.getElementById('lKK').value=l.kk||'';
    document.getElementById('lJK').value=l.jk||'';
  }
  openModal('modalLansia');
}
function simpanLansia(){
  const nama=document.getElementById('lNama').value.trim(),tglLahirInput=document.getElementById('lTglLahir').value.trim(),tglLahir=parseTglInput(tglLahirInput),alamat=document.getElementById('lAlamat').value.trim();
  if(!nama||!tglLahir||!alamat){toast('Isi nama, tanggal lahir (dd/mm/yyyy), dan alamat','error');return;}
  const td=document.getElementById('lTD').value.trim();
  const gula=document.getElementById('lGula').value?parseNum(document.getElementById('lGula').value):null;
  const asamUrat=document.getElementById('lAsamUrat').value?parseNum(document.getElementById('lAsamUrat').value):null;
  const kolesterol=document.getElementById('lKolesterol').value?parseInt(String(document.getElementById('lKolesterol').value).replace(',','.')):null;
  const riwayat=document.getElementById('lRiwayat').value.trim();
  const nik=document.getElementById('lNIK').value.trim(),kk=document.getElementById('lKK').value.trim();
  const jk=document.getElementById('lJK').value;
  const bulan=new Date().toISOString().slice(0,7);
  const entry={bulan};if(td)entry.td=td;if(gula!=null)entry.gula=gula;if(asamUrat!=null)entry.asamUrat=asamUrat;if(kolesterol!=null)entry.kolesterol=kolesterol;
  if(editLId){
    const idx=db.lansia.findIndex(x=>x.id===editLId);if(idx!==-1){
      const rp=db.lansia[idx].riwayatPemeriksaan||[];const ei=rp.findIndex(r=>r.bulan===bulan);
      if(ei!==-1)rp[ei]=entry;else rp.push(entry);
      const u={...db.lansia[idx],nama,tglLahir,alamat,riwayat,nik,kk,jk,riwayatPemeriksaan:rp};
      if(td)u.td=td;else delete u.td;if(gula!=null)u.gula=gula;else delete u.gula;
      if(asamUrat!=null)u.asamUrat=asamUrat;else delete u.asamUrat;if(kolesterol!=null)u.kolesterol=kolesterol;else delete u.kolesterol;
      db.lansia[idx]=u;
    }
  } else {
    const nl={id:uid(),nama,tglLahir,alamat,riwayat,nik,kk,jk,riwayatPemeriksaan:[entry]};
    if(td)nl.td=td;if(gula!=null)nl.gula=gula;if(asamUrat!=null)nl.asamUrat=asamUrat;if(kolesterol!=null)nl.kolesterol=kolesterol;
    db.lansia.push(nl);
  }
  saveDB();closeModal('modalLansia');renderLansia();toast(editLId?'Data diperbarui':'Lansia ditambahkan');editLId=null;
}
function hapusLansia(id){
  if(window._currentUserRole==='kader'){toast('Kader tidak memiliki izin menghapus data','error');return;}
  if(!confirm('Hapus data lansia ini?'))return;db.lansia=db.lansia.filter(l=>l.id!==id);saveDB();renderLansia();toast('Lansia dihapus');}
function renderLansia(){
  const q=(document.getElementById('searchLansia')?.value||'').toLowerCase();
  const filterJK=document.getElementById('filterLansiaJK')?.value||'';
  let list=db.lansia.filter(l=>{
    const namaMatch=l.nama.toLowerCase().includes(q);
    const jkMatch=!filterJK||l.jk===filterJK;
    return namaMatch&&jkMatch;
  });
  const total=list.length;
  const limitV=document.getElementById('limitLansia')?.value||'10';
  const limit=limitV==='all'?total:Math.min(parseInt(limitV),total);
  const shown=list.slice(0,limit);
  document.getElementById('infoLansia').textContent=`Menampilkan ${shown.length} dari ${total} data`;
  const tbody=document.getElementById('lansiaTbody');
  if(!tbody)return;
  if(total===0){tbody.innerHTML=`<tr><td colspan="10"><div class="empty-state"><i class="ri-parent-line"></i><p>${q||filterJK?'Tidak ditemukan':'Belum ada data'}</p></div></td></tr>`;return;}
  tbody.innerHTML=shown.map((l,i)=>{
    const st=overallLansia(l);
    const jkBadge=l.jk==='L'?`<span class="dk-badge lk" style="font-size:10px">L</span>`:l.jk==='P'?`<span class="dk-badge pr" style="font-size:10px">P</span>`:'—';
    return `<tr>
      <td style="color:var(--mu);font-size:12px">${i+1}</td>
      <td class="td-name" style="cursor:pointer" onclick="detailLansia('${l.id}')">${l.nama}</td>
      <td>${jkBadge}</td>
      <td>${hitungUsiaThn(l.tglLahir)} thn</td>
      <td><span class="badge ${statusTD(l.td).cls}">${l.td||'—'}</span></td>
      <td><span class="badge ${statusGula(l.gula).cls}">${l.gula!=null?fmtDes(l.gula)+' mg/dL':'—'}</span></td>
      <td><span class="badge ${statusKol(l.kolesterol).cls}">${l.kolesterol!=null?fmtDes(l.kolesterol)+' mg/dL':'—'}</span></td>
      <td><span class="badge ${statusAU(l.asamUrat).cls}">${l.asamUrat!=null?fmtDes(l.asamUrat)+' mg/dL':'—'}</span></td>
      <td><span class="badge ${st.cls}">${st.l}</span></td>
      <td><div style="display:flex;gap:6px;flex-wrap:wrap">
        <button title="Lihat Detail" onclick="detailLansia('${l.id}')" style="display:flex;flex-direction:column;align-items:center;gap:1px;background:#eff6ff;border:1.5px solid #bfdbfe;color:#1d4ed8;border-radius:9px;padding:5px 8px;cursor:pointer;font-family:inherit"><i class="ri-eye-line" style="font-size:16px"></i><span style="font-size:9px;font-weight:700">Detail</span></button>
        <button title="Catat Pemeriksaan" onclick="openCatatLansia('${l.id}')" style="display:flex;flex-direction:column;align-items:center;gap:1px;background:#f0fdf4;border:1.5px solid #86efac;color:#15803d;border-radius:9px;padding:5px 8px;cursor:pointer;font-family:inherit"><i class="ri-add-circle-line" style="font-size:16px"></i><span style="font-size:9px;font-weight:700">Catat</span></button>
        <button title="Edit Data" onclick="openLansiaModal('${l.id}')" style="display:flex;flex-direction:column;align-items:center;gap:1px;background:#fefce8;border:1.5px solid #fde68a;color:#92400e;border-radius:9px;padding:5px 8px;cursor:pointer;font-family:inherit"><i class="ri-pencil-line" style="font-size:16px"></i><span style="font-size:9px;font-weight:700">Edit</span></button>
        ${window._currentUserRole!=='kader'?`<button title="Hapus Data" onclick="hapusLansia('${l.id}')" style="display:flex;flex-direction:column;align-items:center;gap:1px;background:#fff1f2;border:1.5px solid #fecdd3;color:#be123c;border-radius:9px;padding:5px 8px;cursor:pointer;font-family:inherit"><i class="ri-delete-bin-line" style="font-size:16px"></i><span style="font-size:9px;font-weight:700">Hapus</span></button>`:''}
      </div></td></tr>`;
  }).join('');
}

function detailLansia(id){
  const l=db.lansia.find(x=>x.id===id);if(!l)return;
  document.getElementById('detailLansiaTitle').innerHTML=`<i class="ri-parent-line" style="color:var(--t5)"></i> ${l.nama}`;
  const usia=hitungUsiaThn(l.tglLahir);
  const stTD=statusTD(l.td),stG=statusGula(l.gula),stAU=statusAU(l.asamUrat),stK=statusKol(l.kolesterol);

  // Peringatan lengkap — semua kondisi abnormal
  const warns=[];
  // Tekanan Darah
  if(stTD.cls==='badge-severe')warns.push({t:'danger',m:`🔴 <b>Krisis Hipertensi</b> (TD: ${l.td}) — Darurat medis! Segera rujuk ke IGD/Puskesmas. Risiko stroke dan gagal jantung akut.`});
  else if(stTD.cls==='badge-danger')warns.push({t:'danger',m:`🔴 <b>${stTD.l}</b> (TD: ${l.td}) — Risiko tinggi stroke & serangan jantung. Konsultasikan ke dokter, batasi garam & lemak.`});
  else if(l.td){const[s]=l.td.split('/').map(Number);if(s<90)warns.push({t:'warn',m:`⚠️ <b>Hipotensi</b> (TD: ${l.td}) — Tekanan darah terlalu rendah. Risiko pingsan. Perbanyak cairan, hindari berdiri mendadak.`});else if(stTD.cls==='badge-warn')warns.push({t:'warn',m:`⚠️ <b>${stTD.l}</b> (TD: ${l.td}) — Batasi asupan garam (<5g/hari), olahraga ringan rutin.`});}
  // Gula Darah
  if(l.gula!=null){
    if(l.gula>=200)warns.push({t:'danger',m:`🔴 <b>Gula Darah Sangat Tinggi</b> (${fmtDes(l.gula)} mg/dL) — Indikasi Diabetes Mellitus. Segera konsultasikan ke dokter. Hindari makanan manis & karbohidrat tinggi.`});
    else if(l.gula>=140)warns.push({t:'warn',m:`⚠️ <b>Pra-Diabetes</b> (${fmtDes(l.gula)} mg/dL) — Batasi gula, nasi putih, dan makanan olahan. Perbanyak sayur & aktivitas fisik.`});
    else if(l.gula<70)warns.push({t:'danger',m:`🔴 <b>Hipoglikemia</b> (${fmtDes(l.gula)} mg/dL) — Gula darah terlalu rendah, berbahaya! Segera beri minuman/makanan manis, pantau kondisi.`});
    else if(l.gula<80)warns.push({t:'warn',m:`⚠️ <b>Gula Darah Rendah</b> (${fmtDes(l.gula)} mg/dL) — Pantau asupan karbohidrat dan jadwal makan. Konsultasikan ke dokter jika berlanjut.`});
  }
  // Asam Urat
  if(l.asamUrat!=null){
    if(l.asamUrat>7)warns.push({t:'danger',m:`🔴 <b>Hiperurisemia</b> (${fmtDes(l.asamUrat)} mg/dL) — Risiko serangan Gout/Pirai. Hindari jeroan, seafood, kacang-kacangan, dan alkohol. Perbanyak air putih.`});
    else if(l.asamUrat>6)warns.push({t:'warn',m:`⚠️ <b>Asam Urat Batas Atas</b> (${fmtDes(l.asamUrat)} mg/dL) — Kurangi makanan tinggi purin, perbanyak air putih minimal 2L/hari.`});
    else if(l.asamUrat<2.5)warns.push({t:'warn',m:`⚠️ <b>Asam Urat Rendah</b> (${fmtDes(l.asamUrat)} mg/dL) — Bisa indikasi kondisi ginjal atau hati. Konsultasikan ke dokter.`});
  }
  // Kolesterol
  if(l.kolesterol!=null){
    if(l.kolesterol>=240)warns.push({t:'danger',m:`🔴 <b>Kolesterol Tinggi</b> (${fmtDes(l.kolesterol)} mg/dL) — Risiko penyakit jantung & stroke. Kurangi lemak jenuh, gorengan, dan daging berlemak. Perbanyak sayur & buah.`});
    else if(l.kolesterol>=200)warns.push({t:'warn',m:`⚠️ <b>Kolesterol Batas Atas</b> (${fmtDes(l.kolesterol)} mg/dL) — Kurangi lemak jenuh, perbanyak serat. Rutin cek setiap 3 bulan.`});
    else if(l.kolesterol<150)warns.push({t:'warn',m:`⚠️ <b>Kolesterol Rendah</b> (${fmtDes(l.kolesterol)} mg/dL) — Bisa indikasi malnutrisi atau masalah hati. Konsultasikan ke dokter.`});
  }

  const rp=(l.riwayatPemeriksaan||[]).sort((a,z)=>a.bulan.localeCompare(z.bulan));
  const rpL=rp.map(r=>fmtBulan(r.bulan));
  const rpSis=rp.map(r=>r.td?parseInt(r.td.split('/')[0]):null);
  const rpDia=rp.map(r=>r.td?parseInt(r.td.split('/')[1]):null);
  const rpG=rp.map(r=>r.gula||null),rpK=rp.map(r=>r.kolesterol||null),rpAU=rp.map(r=>r.asamUrat||null);

  document.getElementById('detailLansiaBody').innerHTML=`
    <div style="display:flex;justify-content:flex-end;margin-bottom:12px">
      <button class="btn btn-mint btn-sm" onclick="openCatatLansia('${l.id}')"><i class="ri-add-circle-line"></i>Catat Pemeriksaan</button>
    </div>
    ${warns.length>0
      ?`<div style="display:flex;flex-direction:column;gap:7px;margin-bottom:14px">${warns.map(w=>`<div class="alert-box ${w.t}"><i class="ri-alert-line"></i><span>${w.m}</span></div>`).join('')}</div>`
      :'<div class="alert-box info" style="margin-bottom:12px"><i class="ri-checkbox-circle-line"></i><span>✅ Semua pemeriksaan dalam batas normal. Pertahankan pola hidup sehat!</span></div>'}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px" class="two-col-sm">
      <div><div style="font-size:11px;color:var(--mu);text-transform:uppercase;font-weight:700">Tanggal Lahir</div><div style="font-weight:600">${fmt(l.tglLahir)} (${usia} thn)</div></div>
      <div><div style="font-size:11px;color:var(--mu);text-transform:uppercase;font-weight:700">Alamat</div><div style="font-weight:600">${l.alamat||'—'}</div></div>
      ${l.riwayat?`<div style="grid-column:1/-1"><div style="font-size:11px;color:var(--mu);text-transform:uppercase;font-weight:700">Riwayat Penyakit</div><div style="font-weight:600;color:var(--coral)">${l.riwayat}</div></div>`:''}
    </div>

    <!-- RIWAYAT PENCATATAN LANSIA -->
    <div class="privasi-block" style="margin-bottom:12px">
      <button class="privasi-toggle" style="background:#fef3c7;border-color:#fcd34d;color:#92400e;width:100%;justify-content:space-between" onclick="togglePrivasi('pencatatanLansia')">
        <span><i class="ri-table-line"></i> Riwayat Pencatatan (${rp.length} entri)</span>
        <i class="ri-arrow-down-s-line" id="arrowPencatatanLansia"></i>
      </button>
      <div class="privasi-content" id="pencatatanLansia" style="display:none;grid-template-columns:1fr;padding:0;background:transparent;border:none">
        ${rp.length===0
          ?`<div style="padding:12px;color:var(--mu);font-size:13px;text-align:center">Belum ada pencatatan. Gunakan tombol "Catat Pemeriksaan".</div>`
          :`<div style="overflow-x:auto;margin-top:8px">
            <table style="width:100%;border-collapse:collapse;font-size:12px">
              <thead><tr style="background:var(--t1)">
                <th style="padding:8px 10px;text-align:left;font-size:10px;font-weight:700;color:var(--t7);text-transform:uppercase;white-space:nowrap">Bulan</th>
                <th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:700;color:var(--t7)">TD (mmHg)</th>
                <th style="padding:8px 10px;text-align:right;font-size:10px;font-weight:700;color:var(--t7)">Gula</th>
                <th style="padding:8px 10px;text-align:right;font-size:10px;font-weight:700;color:var(--t7)">Kolesterol</th>
                <th style="padding:8px 10px;text-align:right;font-size:10px;font-weight:700;color:var(--t7)">Asam Urat</th>
                <th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:700;color:var(--t7)">Aksi</th>
              </tr></thead>
              <tbody>
                ${rp.map((r,ri)=>{
                  const isLast=ri===rp.length-1;
                  const stTDr=statusTD(r.td),stGr=statusGula(r.gula);
                  return `<tr style="border-bottom:1px solid var(--bd);${isLast?'background:rgba(23,164,196,0.05)':''}">
                    <td style="padding:8px 10px;font-weight:${isLast?700:400};color:${isLast?'var(--t5)':'var(--tx)'}">
                      ${fmtBulan(r.bulan)}${isLast?` <span style="font-size:10px;color:var(--mint);font-weight:700">(Terbaru)</span>`:''}
                    </td>
                    <td style="padding:8px 10px;text-align:center"><span class="badge ${stTDr.cls}" style="font-size:10px">${r.td||'—'}</span></td>
                    <td style="padding:8px 10px;text-align:right"><span class="badge ${stGr.cls}" style="font-size:10px">${r.gula!=null?fmtDes(r.gula):'—'}</span></td>
                    <td style="padding:8px 10px;text-align:right"><span class="badge ${statusKol(r.kolesterol).cls}" style="font-size:10px">${r.kolesterol!=null?fmtDes(r.kolesterol):'—'}</span></td>
                    <td style="padding:8px 10px;text-align:right"><span class="badge ${statusAU(r.asamUrat).cls}" style="font-size:10px">${r.asamUrat!=null?fmtDes(r.asamUrat):'—'}</span></td>
                    <td style="padding:8px 10px;text-align:center">
                      <button onclick="bukaEditRiwayatLansia('${l.id}','${r.bulan}')" title="Edit baris ini"
                        style="background:#eff6ff;border:1.5px solid #bfdbfe;color:#1d4ed8;border-radius:7px;padding:3px 9px;cursor:pointer;font-size:11px;font-weight:600;font-family:inherit">
                        <i class="ri-pencil-line"></i> Edit
                      </button>
                    </td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>`}
      </div>
    </div>

    <!-- PRIVASI LANSIA -->
    <div class="privasi-block" style="margin-bottom:12px">
      <button class="privasi-toggle" onclick="togglePrivasi('privLansia')"><i class="ri-shield-keyhole-line"></i> Lihat Data Kependudukan</button>
      <div class="privasi-content" id="privLansia">
        <div><div style="font-size:10px;color:var(--mu);text-transform:uppercase;font-weight:700">NIK</div><div style="font-weight:600;font-size:13px">${l.nik||'—'}</div></div>
        <div><div style="font-size:10px;color:var(--mu);text-transform:uppercase;font-weight:700">No. KK</div><div style="font-weight:600;font-size:13px">${l.kk||'—'}</div></div>
      </div>
    </div>
    <div class="health-gauges" style="margin-bottom:12px">
      ${l.td?`<div class="gauge-card"><div class="gauge-title">Tekanan Darah</div><div class="gauge-value" style="color:${stTD.color}">${l.td}</div><div class="gauge-unit">mmHg</div><span class="badge ${stTD.cls}" style="margin-top:7px">${stTD.l}</span></div>`:''}
      ${l.gula!=null?`<div class="gauge-card"><div class="gauge-title">Gula Darah</div><div class="gauge-value" style="color:${stG.color}">${fmtDes(l.gula)}</div><div class="gauge-unit">mg/dL · normal: 80–139</div><span class="badge ${stG.cls}" style="margin-top:7px">${stG.l}</span><div class="gauge-bar"><div class="gauge-fill" style="width:${Math.min(100,l.gula/300*100)}%;background:${stG.color}"></div></div></div>`:''}
      ${l.asamUrat!=null?`<div class="gauge-card"><div class="gauge-title">Asam Urat</div><div class="gauge-value" style="color:${stAU.color}">${fmtDes(l.asamUrat)}</div><div class="gauge-unit">mg/dL · normal: 2,5–6</div><span class="badge ${stAU.cls}" style="margin-top:7px">${stAU.l}</span><div class="gauge-bar"><div class="gauge-fill" style="width:${Math.min(100,l.asamUrat/10*100)}%;background:${stAU.color}"></div></div></div>`:''}
      ${l.kolesterol!=null?`<div class="gauge-card"><div class="gauge-title">Kolesterol Total</div><div class="gauge-value" style="color:${stK.color}">${fmtDes(l.kolesterol)}</div><div class="gauge-unit">mg/dL · normal: 150–199</div><span class="badge ${stK.cls}" style="margin-top:7px">${stK.l}</span><div class="gauge-bar"><div class="gauge-fill" style="width:${Math.min(100,l.kolesterol/300*100)}%;background:${stK.color}"></div></div></div>`:''}
    </div>
    ${rp.length>1?`<div style="background:var(--t0);border:1px solid var(--bd);border-radius:12px;padding:13px">
      <div style="font-weight:700;font-size:13px;color:var(--t8);margin-bottom:10px"><i class="ri-line-chart-line"></i> Grafik Tren Pemeriksaan</div>
      <div style="position:relative;height:210px"><canvas id="dtLansiaChart"></canvas></div>
    </div>`:'<div class="alert-box info"><i class="ri-information-line"></i><span>Grafik tren tersedia setelah 2+ kali pemeriksaan.</span></div>'}`;

  openModal('modalDetailLansia');
  if(rp.length>1){
    setTimeout(()=>{
      if(_dtC['dtLansiaChart']){_dtC['dtLansiaChart'].destroy();}
      const ds=[];
      if(rpSis.some(v=>v))ds.push({label:'Sistol (mmHg)',data:rpSis,borderColor:'#ef4444',tension:0.4,fill:false,pointRadius:4,borderWidth:2});
      if(rpDia.some(v=>v))ds.push({label:'Diastol (mmHg)',data:rpDia,borderColor:'#f97316',tension:0.4,fill:false,pointRadius:4,borderWidth:2,borderDash:[4,3]});
      if(rpG.some(v=>v))ds.push({label:'Gula (mg/dL)',data:rpG,borderColor:'#a855f7',tension:0.4,fill:false,pointRadius:4,borderWidth:2});
      if(rpK.some(v=>v))ds.push({label:'Kolesterol (mg/dL)',data:rpK,borderColor:'#f59e0b',tension:0.4,fill:false,pointRadius:4,borderWidth:2});
      if(rpAU.some(v=>v))ds.push({label:'Asam Urat×20',data:rpAU.map(v=>v?v*20:null),borderColor:'#22c55e',tension:0.4,fill:false,pointRadius:4,borderWidth:2,borderDash:[3,3]});
      _dtC['dtLansiaChart']=new Chart(document.getElementById('dtLansiaChart'),{type:'line',data:{labels:rpL,datasets:ds},options:{responsive:true,maintainAspectRatio:false,animation:{duration:800},plugins:{legend:{position:'bottom',labels:{font:{family:'Outfit',size:10}}}},scales:{y:{beginAtZero:false,ticks:{font:{family:'Outfit'}}}}}});
    },100);
  }
}

// ═══ LAPORAN ═══
let _lapC={};
function renderLaporan(){
  console.log('[DEBUG] renderLaporan called, balita:', db.balita.length, 'lansia:', db.lansia.length, 'imunisasi:', db.imunisasi.length);
  renderStuntingCard('lapStunting');
  renderLansiaHealthCard('lapLansia');
  // Imunisasi summary
  const jB=db.balita.length,lapImEl=document.getElementById('lapImun');
  if(jB===0){lapImEl.innerHTML='<div class="empty-state" style="padding:16px 0"><i class="ri-syringe-line"></i><p>Belum ada data</p></div>';}
  else{
    const lengkap=db.balita.filter(b=>ALL_IMUN.every(j=>db.imunisasi.some(i=>i.balitaId===b.id&&i.jenis===j.jenis))).length;
    const proses=db.balita.filter(b=>db.imunisasi.some(i=>i.balitaId===b.id)&&!ALL_IMUN.every(j=>db.imunisasi.some(i=>i.balitaId===b.id&&i.jenis===j.jenis))).length;
    const belum=jB-lengkap-proses;
    lapImEl.innerHTML=`<div style="display:flex;gap:7px;margin:8px 0">${[['Lengkap',lengkap,'var(--mint)'],['Proses',proses,'var(--t5)'],['Belum',belum,'var(--amber)']].map(([l,v,c])=>`<div style="flex:1;background:var(--t0);border:1px solid var(--bd);border-radius:9px;padding:9px;text-align:center"><div style="font-size:18px;font-weight:800;color:${c}">${v}</div><div style="font-size:9px;font-weight:700;color:var(--mu);margin-top:2px">${l}</div></div>`).join('')}</div>
    <div style="display:flex;height:7px;border-radius:99px;overflow:hidden"><div style="background:var(--mint);width:${Math.round(lengkap/jB*100)}%"></div><div style="background:var(--t4);width:${Math.round(proses/jB*100)}%"></div><div style="background:var(--amber);flex:1"></div></div>`;
  }
  // Statistik
  const jL=db.lansia.length,jImun=db.imunisasi.length;
  const bLengkap=db.balita.filter(b=>ALL_IMUN.every(j=>db.imunisasi.some(i=>i.balitaId===b.id&&i.jenis===j.jenis))).length;
  const lR=db.lansia.filter(l=>overallLansia(l).cls==='badge-danger').length;
  const lP=db.lansia.filter(l=>overallLansia(l).cls==='badge-warn').length;
  document.getElementById('laporanStats').innerHTML=`<div style="display:flex;flex-direction:column;gap:9px;margin-top:10px">
    ${[['👶 Total Balita',jB+' anak',`${bLengkap} imunisasi lengkap`,'var(--t5)'],['👴 Total Lansia',jL+' orang',`${lR} perlu perhatian, ${lP} pantau`,'var(--amber)'],['💉 Catatan Imunisasi',jImun+' record',`Rata-rata ${jB>0?fmtDes(jImun/jB):0} per balita`,'var(--mint)']].map(([l,v,sub,c])=>`
    <div style="background:var(--t0);border:1px solid var(--bd);border-radius:11px;padding:12px;display:flex;justify-content:space-between;align-items:center">
      <div><div style="font-size:13px;font-weight:700;color:var(--t8)">${l}</div><div style="font-size:11px;color:var(--mu)">${sub}</div></div>
      <div style="font-size:19px;font-weight:800;color:${c}">${v}</div>
    </div>`).join('')}
  </div>`;
  if(_lapC['imunPieChart']){_lapC['imunPieChart'].destroy();}
  const iCnt={};ALL_IMUN.forEach(j=>{iCnt[j.jenis]=db.imunisasi.filter(i=>i.jenis===j.jenis).length;});
  const topI=Object.entries(iCnt).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const pieCanvas=document.getElementById('imunPieChart');
  if(topI.length>0&&pieCanvas)_lapC['imunPieChart']=new Chart(pieCanvas,{type:'doughnut',data:{labels:topI.map(([k])=>k),datasets:[{data:topI.map(([,v])=>v),backgroundColor:['#17a4c4','#00c9a7','#ffb830','#7c5cbf','#ff6b6b','#3bbedd','#22c55e','#f97316']}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{font:{family:'Outfit',size:10},boxWidth:10}}}}});
  // set tahun default
  if(!document.getElementById('pdfTahun').value)document.getElementById('pdfTahun').value=new Date().getFullYear();
  if(!document.getElementById('pdfBulan').value){const n=new Date();document.getElementById('pdfBulan').value=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}`;}
}

// ═══ EKSPOR ═══
function eksporPDF(){
  const jenis=document.getElementById('pdfJenis').value;
  const bulanVal=document.getElementById('pdfBulan').value;
  const tahunVal=parseInt(String(document.getElementById('pdfTahun').value).replace(',','.'))||new Date().getFullYear();
  const pos=db.konfig.namaPosyandu,desa=db.konfig.desa,kec=db.konfig.kec,kab=db.konfig.kab;
  const tglCetak=new Date().toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric'});

  // Filter data sesuai jenis laporan
  let balitaData=db.balita,lansiaData=db.lansia,imunData=db.imunisasi;
  let periodeLabel='';
  if(jenis==='bulanan'&&bulanVal){
    periodeLabel='Bulan: '+fmtBulan(bulanVal);
    balitaData=db.balita.filter(b=>(b.riwayatBB||[]).some(r=>r.bulan===bulanVal));
    lansiaData=db.lansia.filter(l=>(l.riwayatPemeriksaan||[]).some(r=>r.bulan===bulanVal));
  }else if(jenis==='tahunan'){
    periodeLabel='Tahun: '+tahunVal;
    balitaData=db.balita.filter(b=>(b.riwayatBB||[]).some(r=>r.bulan&&r.bulan.startsWith(String(tahunVal))));
    lansiaData=db.lansia.filter(l=>(l.riwayatPemeriksaan||[]).some(r=>r.bulan&&r.bulan.startsWith(String(tahunVal))));
  }else{periodeLabel='Laporan Lengkap';}

  const stList=balitaData.filter(b=>cekStunting(b)).length;
  const lRisiko=lansiaData.filter(l=>overallLansia(l).cls==='badge-danger').length;

  const w=window.open('','_blank');
  w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Laporan ${pos}</title>
  <style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:Arial,sans-serif;font-size:11px;color:#0f2d36;max-width:960px;margin:0 auto;padding:18px}
  h1{font-size:15px;text-align:center;margin-bottom:3px}h2{font-size:12px;border-bottom:2px solid #17a4c4;padding-bottom:3px;margin:16px 0 8px;color:#0e5060}
  .header{text-align:center;border-bottom:2px solid #0e5060;padding-bottom:10px;margin-bottom:14px}
  .hdr-sub{font-size:11px;color:#5a7a85}
  .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
  .stat{background:#f0fbfd;border:1px solid #d0eaf0;border-radius:7px;padding:9px;text-align:center}
  .stat-v{font-size:20px;font-weight:800;color:#0e5060}.stat-l{font-size:9px;color:#5a7a85}
  table{width:100%;border-collapse:collapse;margin-bottom:10px;font-size:10px}
  th{background:#f0fbfd;padding:6px;text-align:left;border:1px solid #d0eaf0;font-size:9px;white-space:nowrap}
  td{padding:5px 6px;border:1px solid #e2e8f0}
  .badge-ok{color:#15803d;background:#dcfce7;padding:1px 6px;border-radius:99px}
  .badge-danger{color:#b91c1c;background:#fee2e2;padding:1px 6px;border-radius:99px}
  .badge-warn{color:#854d0e;background:#fef9c3;padding:1px 6px;border-radius:99px}
  .badge-neutral{color:#64748b;background:#f1f5f9;padding:1px 6px;border-radius:99px}
  .badge-severe{color:#fff;background:#7f1d1d;padding:1px 6px;border-radius:99px}
  .periode{display:inline-block;background:#e0f7fc;color:#0e5060;padding:3px 10px;border-radius:99px;font-size:10px;font-weight:700;margin-bottom:10px}
  @media print{body{padding:8px}}
  </style></head><body>
  <div class="header">
    <h1>LAPORAN ${jenis.toUpperCase()} POSYANDU</h1>
    <div class="hdr-sub">${pos} &middot; ${desa} &middot; ${kec} &middot; ${kab}</div>
    <div class="hdr-sub">Dicetak: ${tglCetak}</div>
  </div>
  <div class="periode">${periodeLabel}</div>
  <div class="stats">
    <div class="stat"><div class="stat-v">${balitaData.length}</div><div class="stat-l">Balita ${jenis==='lengkap'?'Terdaftar':'Hadir'}</div></div>
    <div class="stat"><div class="stat-v">${lansiaData.length}</div><div class="stat-l">Lansia ${jenis==='lengkap'?'Terdaftar':'Hadir'}</div></div>
    <div class="stat"><div class="stat-v">${stList}</div><div class="stat-l">Potensi Stunting</div></div>
    <div class="stat"><div class="stat-v">${lRisiko}</div><div class="stat-l">Lansia Perlu Perhatian</div></div>
  </div>
  <h2>Data Balita &amp; Status Gizi (Permenkes No.2/2020)</h2>
  <table><thead><tr><th>#</th><th>Nama Balita</th><th>Ibu/Ortu</th><th>JK</th><th>Usia</th><th>BB (kg)</th><th>TB (cm)</th><th>LK (cm)</th><th>LLA (cm)</th><th>Status TB/U</th><th>Status BB/U</th><th>Imunisasi</th></tr></thead><tbody>
  ${balitaData.map((b,i)=>{const u=hitungUsia(b.tglLahir),sTB=statusTBU(b.tb,u,b.jk||'L'),sBB=statusBBU(b.bb,u,b.jk||'L');const iD=db.imunisasi.filter(im=>im.balitaId===b.id).length;const pct=Math.round(iD/ALL_IMUN.length*100);
    return `<tr><td>${i+1}</td><td>${b.nama}</td><td>${b.namaIbu||'—'}</td><td>${b.jk||'L'}</td><td>${u} bln</td><td>${fmtDes(b.bb)}</td><td>${fmtDes(b.tb)}</td><td>${b.lk!=null?fmtDes(b.lk):'—'}</td><td>${b.lla!=null?fmtDes(b.lla):'—'}</td><td><span class="${sTB.cls}">${sTB.l}</span></td><td><span class="${sBB.cls}">${sBB.l}</span></td><td>${pct}%</td></tr>`;}).join('')}
  </tbody></table>
  <h2>Data Lansia &amp; Status Kesehatan</h2>
  <table><thead><tr><th>#</th><th>Nama</th><th>Usia</th><th>TD</th><th>Gula (mg/dL)</th><th>Kolesterol (mg/dL)</th><th>Asam Urat (mg/dL)</th><th>Riwayat Penyakit</th><th>Status</th></tr></thead><tbody>
  ${lansiaData.map((l,i)=>{const s=overallLansia(l);
    return `<tr><td>${i+1}</td><td>${l.nama}</td><td>${hitungUsiaThn(l.tglLahir)} thn</td><td>${l.td||'—'}</td><td>${l.gula!=null?fmtDes(l.gula):'—'}</td><td>${l.kolesterol!=null?fmtDes(l.kolesterol):'—'}</td><td>${l.asamUrat!=null?fmtDes(l.asamUrat):'—'}</td><td>${l.riwayat||'—'}</td><td><span class="${s.cls}">${s.l}</span></td></tr>`;}).join('')}
  </tbody></table>
  <script>window.onload=()=>{window.print()}<\/script></body></html>`);
  w.document.close();
}

// ═══ KONFIGURASI ═══
function renderKonfig(){
  document.getElementById('kNama').value=db.konfig.namaPosyandu||'';
  document.getElementById('kDesa').value=db.konfig.desa||'';
  document.getElementById('kKec').value=db.konfig.kec||'';
  document.getElementById('kKab').value=db.konfig.kab||'';
  document.getElementById('dbStats').innerHTML=`📋 ${db.balita.length} balita &nbsp;|&nbsp; 👴 ${db.lansia.length} lansia &nbsp;|&nbsp; 💉 ${db.imunisasi.length} imunisasi`;
}
function simpanKonfig(){
  db.konfig.namaPosyandu=document.getElementById('kNama').value.trim();
  db.konfig.desa=document.getElementById('kDesa').value.trim();
  db.konfig.kec=document.getElementById('kKec').value.trim();
  db.konfig.kab=document.getElementById('kKab').value.trim();
  saveDB();document.getElementById('sbSub').textContent=`${db.konfig.namaPosyandu} · ${db.konfig.desa}`;renderKonfig();toast('Konfigurasi disimpan');
}
function backupData(){
  const blob=new Blob([JSON.stringify(db,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`backup_dapindu_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  toast('Backup berhasil diunduh');
}

function imporJSON(e){
  const file=e.target.files[0];if(!file)return;
  if(!confirm('Import JSON akan MENGGANTIKAN seluruh data saat ini. Lanjutkan?')){e.target.value='';return;}
  const reader=new FileReader();
  reader.onload=ev=>{
    try{
      const parsed=JSON.parse(ev.target.result);
      if(!parsed.balita&&!parsed.lansia&&!parsed.imunisasi){toast('Format JSON tidak dikenali','error');return;}
      db={...db,...parsed};
      ['balita','lansia','imunisasi'].forEach(k=>{if(!db[k])db[k]=[];});
      saveDB();
      renderDashboard();
      toast(`Impor berhasil — ${db.balita.length} balita, ${db.lansia.length} lansia`);
      renderKonfig();
    }catch(err){toast('Gagal membaca file JSON','error');console.error(err);}
    e.target.value='';
  };
  reader.readAsText(file,'UTF-8');
}

function resetData(){
  if(!confirm('PERHATIAN: Semua data lokal dan Firebase akan dihapus permanen!'))return;
  // Clear Firebase
  if(window._fbReady&&window._fbSave){
    const empty={konfig:db.konfig,balita:[],lansia:[],imunisasi:[]};
    window._fbSave(empty).catch(()=>{});
  }
  localStorage.removeItem(SK);
  location.reload();
}

// ── DUMMY DATA TEST ──
function pushDummyData(){
  if(!window._fbSave){
    toast('Firebase belum terhubung — tunggu sebentar lalu coba lagi','error');
    return;
  }
  if(!confirm('Push dummy data ke Firebase sekarang?\nData lokal tidak akan berubah, hanya dikirim ke server untuk tes sinkronisasi.')){return;}

  const now=new Date();
  const bulanIni=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
  const bulanLalu=`${now.getFullYear()}-${String(now.getMonth()).padStart(2,'0')}`;

  const dummy={
    konfig:{
      namaPosyandu:'Posyandu Ceria — TEST SYNC',
      desa:'Desa Lestari',
      kec:'Kec. Bahagia',
      kab:'Kab. Sehat'
    },
    balita:[
      {
        id:'dummy_b1',
        nama:'TEST — Siti Rahayu',
        namaIbu:'Dewi Kartika',
        namaAyah:'Arif Wibowo',
        tglLahir:'2023-09-10',
        jk:'P',
        posyandu:'Posyandu Panda',
        bb:8.1,tb:70,lk:43,lla:13.5,
        alamat:'Jl. Mawar No.5',
        nik:'',kk:'',nikIbu:'',nikAyah:'',anakKe:1,
        riwayatBB:[
          {bulan:bulanLalu,bb:7.8,tb:68.5,lk:42.5,lla:13},
          {bulan:bulanIni,bb:8.1,tb:70,lk:43,lla:13.5}
        ]
      },
      {
        id:'dummy_b2',
        nama:'TEST — Ahmad Fauzi',
        namaIbu:'Siti Aminah',
        namaAyah:'Hasan Basri',
        tglLahir:'2022-05-20',
        jk:'L',
        posyandu:'Posyandu Kanguru',
        bb:12.3,tb:85,lk:48,lla:15.5,
        alamat:'Jl. Kenanga No.7',
        nik:'',kk:'',nikIbu:'',nikAyah:'',anakKe:2,
        riwayatBB:[
          {bulan:bulanLalu,bb:11.9,tb:83,lk:47.5,lla:15},
          {bulan:bulanIni,bb:12.3,tb:85,lk:48,lla:15.5}
        ]
      }
    ],
    imunisasi:[
      {id:'dummy_i1',balitaId:'dummy_b1',jenis:'HB-0',tanggal:'2023-09-10'},
      {id:'dummy_i2',balitaId:'dummy_b1',jenis:'BCG',tanggal:'2023-10-10'},
      {id:'dummy_i3',balitaId:'dummy_b1',jenis:'DPT-HB-Hib 1',tanggal:'2023-11-10'},
      {id:'dummy_i4',balitaId:'dummy_b2',jenis:'HB-0',tanggal:'2022-05-20'},
      {id:'dummy_i5',balitaId:'dummy_b2',jenis:'BCG',tanggal:'2022-06-20'},
      {id:'dummy_i6',balitaId:'dummy_b2',jenis:'DPT-HB-Hib 1',tanggal:'2022-07-20'},
      {id:'dummy_i7',balitaId:'dummy_b2',jenis:'DPT-HB-Hib 2',tanggal:'2022-08-20'},
      {id:'dummy_i8',balitaId:'dummy_b2',jenis:'DPT-HB-Hib 3',tanggal:'2022-09-20'},
      {id:'dummy_i9',balitaId:'dummy_b2',jenis:'MR-1',tanggal:'2023-02-20'},
    ],
    lansia:[
      {
        id:'dummy_l1',
        nama:'TEST — Wagiyem Prasetyo',
        tglLahir:'1960-04-12',
        alamat:'Jl. Flamboyan No.2',
        nik:'',kk:'',
        td:'135/88',gula:125,asamUrat:5.8,kolesterol:205,
        riwayat:'Hipertensi ringan',
        riwayatPemeriksaan:[
          {bulan:bulanLalu,td:'132/85',gula:120,asamUrat:5.5,kolesterol:198},
          {bulan:bulanIni,td:'135/88',gula:125,asamUrat:5.8,kolesterol:205}
        ]
      },
      {
        id:'dummy_l2',
        nama:'TEST — Suharto Wiyono',
        tglLahir:'1955-11-08',
        alamat:'Jl. Dahlia No.14',
        nik:'',kk:'',
        td:'155/95',gula:188,asamUrat:7.2,kolesterol:242,
        riwayat:'Hipertensi, Pra-Diabetes',
        riwayatPemeriksaan:[
          {bulan:bulanLalu,td:'150/92',gula:175,asamUrat:7.0,kolesterol:238},
          {bulan:bulanIni,td:'155/95',gula:188,asamUrat:7.2,kolesterol:242}
        ]
      }
    ],
    _dummyPushedAt: new Date().toISOString(),
    _dummyNote: 'Data tes sinkronisasi Firebase DAPINDU'
  };

  setSyncStatus('syncing','Mengirim dummy data…');
  window._fbSave(dummy).then(()=>{
    toast('✅ Dummy data berhasil dikirim ke Firebase! Cek di Firebase Console → Realtime Database → dapindu/main');
    // Tampilkan link ke Firebase console
    const det=document.getElementById('fbStatusDetail');
    if(det){
      det.innerHTML=`
        <div style="color:#15803d;font-weight:600;margin-bottom:6px">✅ Dummy data berhasil dikirim!</div>
        <div style="font-size:11px;color:var(--mu)">Verifikasi di Firebase Console:</div>
        <a href="https://console.firebase.google.com/project/dapindu-62c37/database/dapindu-62c37-default-rtdb/data/dapindu/main"
           target="_blank" rel="noopener"
           style="font-size:11px;color:#0891b2;word-break:break-all">
           Buka Firebase Console →
        </a>`;
    }
  }).catch(e=>{
    toast('❌ Gagal kirim dummy data: '+(e.message||e.code||'unknown'),'error');
    const det=document.getElementById('fbStatusDetail');
    if(det)det.innerHTML=`<span style="color:#b91c1c;font-weight:600">Error: ${e.code||e.message||'unknown'}</span>`;
  });
}

// DARK MODE
function toggleDark(){
  const isDark=document.body.classList.toggle('dark');
  localStorage.setItem('dapindu_dark',isDark?'1':'0');
  const icon=isDark?'ri-sun-line':'ri-moon-line';
  document.getElementById('darkIcon').className=icon;
  document.getElementById('darkToggle').title=isDark?'Mode Terang':'Mode Gelap';
  const lsIcon=document.getElementById('lsDarkIcon');
  if(lsIcon) lsIcon.className=icon;
  setTimeout(()=>{
    const page=document.querySelector('.nav-item.active')?.dataset?.page;
    if(page==='dashboard')renderDashboard();
  },100);
}

// INIT
// Expose db, SK, dan flag ke window agar Firebase module bisa akses
window.db = db;
window.SK = SK; 
window._applyingRemote = false;
// Sync watcher: Setiap kali window.db berubah (dari Firebase), update local db
window._syncWindowDb = function() {
  if(!window._applyingRemote && window.db) {
    Object.assign(db, window.db);
  }
};
// Expose functions to window
window.setSyncStatus=setSyncStatus;
window.renderDashboard=renderDashboard;
window.renderBalita=renderBalita;
window.renderLansia=renderLansia;
window.renderKonfig=renderKonfig;

document.getElementById('sbSub').textContent=`${db.konfig.namaPosyandu} · ${db.konfig.desa}`;
if(localStorage.getItem('dapindu_dark')==='1'){
  document.body.classList.add('dark');
  document.getElementById('darkIcon').className='ri-sun-line';
  document.getElementById('darkToggle').title='Mode Terang';
  const lsIcon=document.getElementById('lsDarkIcon');
  if(lsIcon) lsIcon.className='ri-sun-line';
}
renderDashboard();

// ═══════════════════════════════════════════════════
// PASSWORD VERIFY MODAL (kader — lihat kependudukan)
// ═══════════════════════════════════════════════════
let _pvCallback = null;
let _pvGranted  = false;
let _pvGrantTimer = null;

function openPvModal(callback) {
  if (window._currentUserRole !== 'kader') { callback(); return; }
  if (_pvGranted) { callback(); return; }
  _pvCallback = callback;
  document.getElementById('pvPassInput').value = '';
  document.getElementById('pvErr').classList.remove('show');
  document.getElementById('pvEyeIcon').className = 'ri-eye-line';
  document.getElementById('pvPassInput').type = 'password';
  const btn = document.getElementById('pvOkBtn');
  btn.classList.remove('loading'); btn.disabled = false;
  document.getElementById('passwdVerifyOverlay').classList.add('open');
  setTimeout(() => document.getElementById('pvPassInput').focus(), 120);
}

function closePvModal() {
  document.getElementById('passwdVerifyOverlay').classList.remove('open');
  _pvCallback = null;
}

function pvToggleEye() {
  const inp = document.getElementById('pvPassInput');
  const ico = document.getElementById('pvEyeIcon');
  inp.type = inp.type === 'password' ? 'text' : 'password';
  ico.className = inp.type === 'password' ? 'ri-eye-line' : 'ri-eye-off-line';
}

async function pvVerify() {
  const pass = document.getElementById('pvPassInput').value;
  if (!pass) {
    document.getElementById('pvErrMsg').textContent = 'Password tidak boleh kosong';
    document.getElementById('pvErr').classList.add('show'); return;
  }
  const btn = document.getElementById('pvOkBtn');
  btn.classList.add('loading'); btn.disabled = true;
  document.getElementById('pvErr').classList.remove('show');
  try {
    const { EmailAuthProvider, reauthenticateWithCredential, getAuth } =
      await import('https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js');
    const user = getAuth().currentUser;
    if (!user) throw { code: 'no-user' };
    await reauthenticateWithCredential(user, EmailAuthProvider.credential(user.email, pass));
    // Grant akses 10 menit
    _pvGranted = true;
    clearTimeout(_pvGrantTimer);
    _pvGrantTimer = setTimeout(() => { _pvGranted = false; }, 10 * 60 * 1000);
    closePvModal();
    if (_pvCallback) { _pvCallback(); _pvCallback = null; }
  } catch(err) {
    btn.classList.remove('loading'); btn.disabled = false;
    const map = {
      'auth/wrong-password':'Password salah. Coba lagi.',
      'auth/invalid-credential':'Password salah. Coba lagi.',
      'auth/too-many-requests':'Terlalu banyak percobaan. Tunggu sebentar.',
      'auth/network-request-failed':'Tidak ada koneksi internet.',
      'no-user':'Sesi tidak valid, silakan login ulang.',
    };
    document.getElementById('pvErrMsg').textContent = map[err.code] || ('Gagal: '+(err.code||err.message));
    document.getElementById('pvErr').classList.add('show');
  }
}

document.addEventListener('keydown', (e) => {
  const ov = document.getElementById('passwdVerifyOverlay');
  if (!ov?.classList.contains('open')) return;
  if (e.key === 'Enter') pvVerify();
  if (e.key === 'Escape') closePvModal();
});

// ═══════════════════════════════════════════════════
// USER MANAGEMENT
// ═══════════════════════════════════════════════════

// Path RTDB untuk data pengguna
const USERS_PATH = 'dapindu/users';

// Cache data pengguna di memory
window._usersCache = {};
window._currentUserRole = null;
window._currentUid = null;

// ── Apply role ke UI: tampilkan/sembunyikan elemen admin-only ──
function applyRole(role) {
  window._currentUserRole = role;
  const isAdmin = role === 'admin';
  document.body.classList.toggle('is-admin', isAdmin);

  // Tampilkan/sembunyikan elemen admin-only di sidebar & topbar
  // (BUKAN halaman .page — itu dikontrol showPage())
  document.querySelectorAll('.admin-only').forEach(el => {
    // Jangan sentuh elemen yang punya class 'page' — biarkan showPage() yang urus
    if (el.classList.contains('page')) return;
    el.style.display = isAdmin
      ? (el.tagName === 'BUTTON' || el.tagName === 'SPAN' || el.tagName === 'A' ? 'inline-flex' : 'flex')
      : 'none';
  });

  // Update role chip di topbar
  const chip = document.getElementById('roleChip');
  if (chip) {
    chip.textContent = isAdmin ? '🛡️ Admin' : '🌿 Kader';
    chip.className = 'role-chip' + (isAdmin ? '' : ' kader');
    chip.style.display = 'inline-flex';
  }

  // Kalau kader sedang di halaman admin-only, redirect ke dashboard
  if (!isAdmin) {
    const activePage = document.querySelector('.nav-item.active')?.dataset?.page;
    if (activePage === 'pengguna' || activePage === 'konfig') {
      showPage('dashboard');
    }
  }
}

// ── Init user: cek/buat profil di RTDB, tentukan role ──
window.initUserProfile = async function(uid, email, rtdb) {
  window._currentUid = uid;
  const { ref, get, set, update, onValue } = await import('https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js');
  const usersRef = ref(rtdb, USERS_PATH);
  const userRef  = ref(rtdb, `${USERS_PATH}/${uid}`);

  // ── Langkah 1: cek apakah profil user ini sudah ada ──
  let myProfile = null;
  try {
    const mySnap = await get(userRef);
    if (mySnap.exists()) myProfile = mySnap.val();
  } catch(e) {
    console.warn('[DAPINDU] Tidak bisa baca profil user (mungkin rules belum update):', e.code);
  }

  if (myProfile) {
    // ── Profil sudah ada: cek status, apply role ──
    if (myProfile.status === 'nonaktif') {
      toast('Akun kamu dinonaktifkan oleh admin.', 'error');
      setTimeout(() => window.doLogout?.(), 2000);
      return;
    }
    update(userRef, { lastLogin: Date.now() }).catch(()=>{});
    applyRole(myProfile.role || 'kader');
    window._usersCache[uid] = { ...myProfile, lastLogin: Date.now() };

  } else {
    // ── Profil belum ada: tentukan role ──
    // Cek apakah ada pengguna lain di RTDB
    let isFirstUser = false;
    try {
      const allSnap = await get(usersRef);
      // Kalau node users kosong atau tidak ada → ini adalah user pertama
      if (!allSnap.exists()) {
        isFirstUser = true;
      } else {
        const others = allSnap.val();
        // Hapus uid sendiri kalau kebetulan sudah ada key-nya
        delete others[uid];
        isFirstUser = Object.keys(others).length === 0;
      }
    } catch(e) {
      // Kalau get usersRef juga gagal (belum ada rules/path) → anggap first user
      console.warn('[DAPINDU] Tidak bisa baca daftar users, asumsi first user:', e.code);
      isFirstUser = true;
    }

    const newProfile = {
      email,
      nama: email.split('@')[0],
      role: isFirstUser ? 'admin' : 'kader',
      status: 'aktif',
      createdAt: Date.now(),
      lastLogin: Date.now(),
    };

    try {
      await set(userRef, newProfile);
      console.log('[DAPINDU] Profil baru dibuat, role:', newProfile.role);
    } catch(e) {
      // Write gagal — kemungkinan rules belum update
      // Tetap apply admin kalau isFirstUser agar tidak lock out
      console.error('[DAPINDU] Gagal tulis profil baru:', e.code, '— cek Security Rules!');
      toast('⚠️ Perlu update Firebase Security Rules. Lihat panduan di komentar HTML.', 'error');
    }

    applyRole(newProfile.role);
    window._usersCache[uid] = newProfile;
  }

  // ── Realtime listener: pantau perubahan profil sendiri ──
  // (misalnya kalau admin nonaktifkan akun ini dari device lain)
  try {
    onValue(userRef, (s) => {
      if (!s.exists()) return;
      const p = s.val();
      // Hanya react ke perubahan status, bukan perubahan lain
      if (p.status === 'nonaktif' && window._currentUid === uid) {
        toast('Akun kamu dinonaktifkan. Sesi akan diakhiri.', 'error');
        setTimeout(() => window.doLogout?.(), 2500);
      }
      // Update cache
      window._usersCache[uid] = p;
    });
  } catch(e) {
    console.warn('[DAPINDU] Tidak bisa pasang listener profil:', e.code);
  }
};

// ── Render halaman manajemen pengguna ──
async function renderPengguna() {
  const tbody = document.getElementById('userTbody');
  if (!tbody) return;

  const search = (document.getElementById('searchUser')?.value || '').toLowerCase();
  const filterRole = document.getElementById('filterUserRole')?.value || '';
  const filterStatus = document.getElementById('filterUserStatus')?.value || '';

  const users = window._usersCache;
  let rows = Object.entries(users);

  // Filter
  if (search) rows = rows.filter(([,u]) =>
    (u.nama||'').toLowerCase().includes(search) ||
    (u.email||'').toLowerCase().includes(search));
  if (filterRole)   rows = rows.filter(([,u]) => u.role === filterRole);
  if (filterStatus) rows = rows.filter(([,u]) => u.status === filterStatus);

  // Stats
  const all = Object.values(users);
  document.getElementById('uStatTotal').textContent   = all.length;
  document.getElementById('uStatAktif').textContent   = all.filter(u=>u.status==='aktif').length;
  document.getElementById('uStatNonaktif').textContent= all.filter(u=>u.status==='nonaktif').length;
  document.getElementById('uStatAdmin').textContent   = all.filter(u=>u.role==='admin').length;

  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:32px;color:var(--mu)"><i class="ri-user-search-line" style="font-size:28px;display:block;margin-bottom:8px;opacity:.4"></i>Tidak ada pengguna ditemukan</td></tr>`;
    return;
  }

  tbody.innerHTML = rows.map(([uid, u], i) => {
    const isSelf = uid === window._currentUid;
    const roleBadge = u.role === 'admin'
      ? `<span class="role-badge admin"><i class="ri-shield-line"></i> Admin</span>`
      : `<span class="role-badge kader"><i class="ri-user-line"></i> Kader</span>`;
    const statusBadge = u.status === 'aktif'
      ? `<span class="status-badge aktif"><span class="u-dot aktif"></span>Aktif</span>`
      : `<span class="status-badge nonaktif"><span class="u-dot nonaktif"></span>Nonaktif</span>`;
    const avatarClass = u.role === 'admin' ? 'admin' : 'kader';
    const initials = (u.nama||u.email||'?').charAt(0).toUpperCase();
    const lastLogin = u.lastLogin ? new Date(u.lastLogin).toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}) : '—';
    const createdAt = u.createdAt ? new Date(u.createdAt).toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}) : '—';
    const selfTag = isSelf ? ' <span style="font-size:10px;background:var(--t1);color:var(--t7);padding:1px 6px;border-radius:99px;font-weight:700">Kamu</span>' : '';

    const canEdit = !isSelf; // tidak bisa edit diri sendiri dari sini
    const editBtn = canEdit
      ? `<button class="btn btn-outline btn-sm btn-icon" onclick="openUserModal('${uid}')" title="Edit profil & role"><i class="ri-edit-line"></i></button>`
      : `<button class="btn btn-outline btn-sm btn-icon" disabled title="Tidak bisa edit akun sendiri" style="opacity:.4"><i class="ri-edit-line"></i></button>`;
    const toggleStatusBtn = canEdit
      ? (u.status === 'aktif'
          ? `<button class="btn btn-sm" onclick="toggleUserStatus('${uid}','nonaktif')" style="background:#fee2e2;color:#b91c1c;border-color:#fecaca" title="Nonaktifkan"><i class="ri-forbid-line"></i></button>`
          : `<button class="btn btn-sm" onclick="toggleUserStatus('${uid}','aktif')" style="background:#dcfce7;color:#15803d;border-color:#bbf7d0" title="Aktifkan kembali"><i class="ri-check-line"></i></button>`)
      : '';
    const resetBtn = `<button class="btn btn-outline btn-sm btn-icon" onclick="resetUserPassword('${u.email}')" title="Kirim reset password"><i class="ri-lock-password-line"></i></button>`;

    return `<tr${isSelf?' class="current-user"':''}>
      <td style="color:var(--mu);font-size:12px">${i+1}</td>
      <td>
        <div style="display:flex;align-items:center;gap:10px">
          <div class="u-avatar ${avatarClass}">${initials}</div>
          <div>
            <div class="td-name">${u.nama||'—'}${selfTag}</div>
            <div style="font-size:11px;color:var(--mu);margin-top:1px">${u.email||'—'}</div>
          </div>
        </div>
      </td>
      <td>${roleBadge}</td>
      <td>${statusBadge}</td>
      <td style="font-size:12px;color:var(--mu)">${lastLogin}</td>
      <td style="font-size:12px;color:var(--mu)">${createdAt}</td>
      <td>
        <div style="display:flex;gap:5px;align-items:center">
          ${editBtn}
          ${toggleStatusBtn}
          ${resetBtn}
        </div>
      </td>
    </tr>`;
  }).join('');
}
window.renderPengguna = renderPengguna;

// ── Refresh: ambil ulang data dari RTDB ──
window.refreshPengguna = async function() {
  const tbody = document.getElementById('userTbody');
  if (tbody) tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:24px;color:var(--mu)"><i class="ri-loader-4-line"></i> Memuat ulang…</td></tr>';
  await window._loadAllUsers?.();
  renderPengguna();
  toast('Data pengguna diperbarui', 'success');
};

// ── Toggle status aktif/nonaktif ──
window.toggleUserStatus = async function(uid, newStatus) {
  const user = window._usersCache[uid];
  if (!user) return;
  const label = newStatus === 'nonaktif' ? 'nonaktifkan' : 'aktifkan kembali';
  if (!confirm(`Yakin ingin ${label} akun ${user.nama||user.email}?`)) return;
  try {
    const { ref, update } = await import('https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js');
    const userRef = ref(window._rtdbInstance, `${USERS_PATH}/${uid}`);
    await update(userRef, { status: newStatus });
    window._usersCache[uid].status = newStatus;
    renderPengguna();
    toast(`Akun ${user.nama||user.email} berhasil ${label === 'nonaktifkan' ? 'dinonaktifkan' : 'diaktifkan'}`, 'success');
  } catch(e) {
    toast('Gagal mengubah status: ' + e.message, 'error');
  }
};

// ── Reset password via email ──
window.resetUserPassword = async function(email) {
  if (!email) return;
  if (!confirm(`Kirim email reset password ke ${email}?`)) return;
  try {
    const { getAuth, sendPasswordResetEmail } = await import('https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js');
    await sendPasswordResetEmail(getAuth(), email);
    toast(`Email reset password dikirim ke ${email}`, 'success');
  } catch(e) {
    toast('Gagal kirim reset: ' + e.message, 'error');
  }
};

// ── Modal edit profil & role ──
window.openUserModal = function(uid) {
  const u = window._usersCache[uid];
  if (!u) return;
  // Hapus modal lama kalau ada
  document.getElementById('userModal')?.remove();

  const isLastAdmin = Object.values(window._usersCache).filter(x=>x.role==='admin').length <= 1 && u.role === 'admin';

  const modal = document.createElement('div');
  modal.id = 'userModal';
  modal.className = 'modal-overlay open';
  modal.innerHTML = `
    <div class="modal" style="max-width:440px">
      <div class="modal-hdr">
        <div class="modal-title"><i class="ri-shield-user-line"></i> Edit Pengguna</div>
        <button class="modal-close" onclick="document.getElementById('userModal').remove()"><i class="ri-close-line"></i></button>
      </div>
      <div class="modal-body">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;padding:14px;background:var(--t0);border-radius:12px">
          <div class="u-avatar ${u.role==='admin'?'admin':'kader'}" style="width:48px;height:48px;font-size:20px">${(u.nama||u.email||'?').charAt(0).toUpperCase()}</div>
          <div>
            <div style="font-weight:700;font-size:15px">${u.nama||'—'}</div>
            <div style="font-size:12px;color:var(--mu)">${u.email||'—'}</div>
          </div>
        </div>
        <div class="form-grid" style="grid-template-columns:1fr">
          <div class="form-group">
            <label>Nama Tampilan</label>
            <input type="text" id="umNama" value="${u.nama||''}" placeholder="Nama lengkap">
          </div>
          <div class="form-group">
            <label>Role</label>
            <select id="umRole" ${isLastAdmin?'disabled title="Minimal harus ada 1 admin"':''}>
              <option value="admin" ${u.role==='admin'?'selected':''}>🛡️ Admin</option>
              <option value="kader" ${u.role==='kader'?'selected':''}>🌿 Kader</option>
            </select>
            ${isLastAdmin?'<div style="font-size:11px;color:var(--amber);margin-top:4px">⚠️ Pengguna ini adalah satu-satunya admin, role tidak dapat diubah.</div>':''}
          </div>
          <div class="form-group">
            <label>Status</label>
            <select id="umStatus">
              <option value="aktif" ${u.status==='aktif'?'selected':''}>✅ Aktif</option>
              <option value="nonaktif" ${u.status==='nonaktif'?'selected':''}>🔴 Nonaktif</option>
            </select>
          </div>
        </div>
      </div>
      <div class="modal-ftr">
        <button class="btn btn-outline" onclick="document.getElementById('userModal').remove()">Batal</button>
        <button class="btn btn-primary" onclick="saveUserEdit('${uid}')"><i class="ri-save-line"></i>Simpan</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
};

// ── Simpan edit pengguna ──
window.saveUserEdit = async function(uid) {
  const nama   = document.getElementById('umNama')?.value.trim();
  const role   = document.getElementById('umRole')?.value;
  const status = document.getElementById('umStatus')?.value;
  if (!nama) { toast('Nama tidak boleh kosong', 'error'); return; }

  try {
    const { ref, update } = await import('https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js');
    const userRef = ref(window._rtdbInstance, `${USERS_PATH}/${uid}`);
    await update(userRef, { nama, role, status });
    window._usersCache[uid] = { ...window._usersCache[uid], nama, role, status };
    document.getElementById('userModal')?.remove();
    renderPengguna();
    toast(`Profil ${nama} berhasil diperbarui`, 'success');
  } catch(e) {
    toast('Gagal menyimpan: ' + e.message, 'error');
  }
};

