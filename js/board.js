/**
 * AI-ROBO Lounge Script Engine (Firebase Integrated)
 * New Configuration applied.
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getFirestore, collection, addDoc, getDoc, updateDoc, 
    deleteDoc, doc, query, orderBy, serverTimestamp, 
    onSnapshot, increment, getDocs 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTJeGC8G3ZjL0AVCaaYlNr9nAF8twCHVw",
  authDomain: "company-6954d.firebaseapp.com",
  projectId: "company-6954d",
  storageBucket: "company-6954d.firebasestorage.app",
  messagingSenderId: "544295725518",
  appId: "1:544295725518:web:6f99976e12114f7ce1a39f",
  measurementId: "G-M2HBSBZKK5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const MASTER_KEY = "admin1234";

window.Lounge = window.Lounge || {};

Object.assign(window.Lounge, {
    currentId: null,

    openWrite: () => {
        const lang = localStorage.getItem('robo_lang') || 'ko';
        const form = document.getElementById('loungeForm');
        if (form) form.reset();
        const pid = document.getElementById('postId');
        if (pid) pid.value = '';
        const title = document.getElementById('modalTitle');
        if (title && translations[lang]) {
            title.innerText = translations[lang].modal_write_title;
        }
        const modal = document.getElementById('writeModal');
        if (modal) modal.classList.add('active');
    },

    close: () => {
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    },

    init: () => {
        const boardContainer = document.getElementById('boardContainer');
        if (!boardContainer) return;

        // 실시간 목록 감시
        const q = query(collection(db, "Lounge_Board"), orderBy("createdAt", "desc"));
        onSnapshot(q, (snap) => {
            const lang = localStorage.getItem('robo_lang') || 'ko';
            boardContainer.innerHTML = '';
            if (snap.empty) {
                boardContainer.innerHTML = `<div style="text-align:center; padding:80px; color:#94a3b8;">${translations[lang].board_empty}</div>`;
                return;
            }

            let idx = snap.size;
            snap.forEach(d => {
                const post = { id: d.id, ...d.data() };
                const time = post.createdAt ? new Date(post.createdAt.seconds * 1000).toLocaleDateString() : '..';
                
                const card = document.createElement('div');
                card.className = 'post-card';
                card.innerHTML = `
                    <div class="post-no">${idx--}</div>
                    <div class="post-info">
                        <h3>${post.title}</h3>
                        <div class="post-meta">
                            <span><i class="fas fa-user-circle"></i> ${post.author}</span>
                            <span><i class="far fa-calendar"></i> ${time}</span>
                            <span id="cmt-count-${post.id}"><i class="far fa-comment"></i> 0</span>
                        </div>
                    </div>
                    <div class="post-stats">
                        <div class="stat-icon"><b>${post.likes || 0}</b> ${translations[lang].board_recommend}</div>
                    </div>
                `;
                card.onclick = () => window.Lounge.view(post.id);
                boardContainer.appendChild(card);

                // 댓글 수 별도 로드
                getDocs(collection(db, "Lounge_Board", post.id, "comments")).then(cSnap => {
                    const el = document.getElementById(`cmt-count-${post.id}`);
                    if (el) el.innerHTML = `<i class="far fa-comment"></i> ${cSnap.size}`;
                });
            });
        });

        window.Lounge.bindEvents();
    },

    view: async (id) => {
        window.Lounge.currentId = id;
        const s = await getDoc(doc(db, "Lounge_Board", id));
        if (s.exists()) {
            const lang = localStorage.getItem('robo_lang') || 'ko';
            const d = s.data();
            document.getElementById('vTitle').innerText = d.title;
            document.getElementById('vAuthor').innerText = d.author;
            document.getElementById('vAvatar').innerText = d.author ? d.author.charAt(0) : '?';
            document.getElementById('vDate').innerText = d.createdAt ? new Date(d.createdAt.seconds * 1000).toLocaleString('en-US') : '...';
            document.getElementById('vContent').innerText = d.content;
            document.getElementById('vLikes').innerText = d.likes || 0;
            
            const voted = JSON.parse(localStorage.getItem('ROBO_VOTED') || '{}');
            document.getElementById('likeIcon').style.color = voted[id] ? '#ef4444' : 'currentColor';
            document.getElementById('viewModal').classList.add('active');
            window.Lounge.loadComments(id);
        }
    },

    loadComments: (postId) => {
        const q = query(collection(db, "Lounge_Board", postId, "comments"), orderBy("createdAt", "asc"));
        onSnapshot(q, (snap) => {
            const list = document.getElementById('cmtList');
            list.innerHTML = '';
            document.getElementById('vCmtCount').innerText = snap.size;
            snap.forEach(d => {
                const lang = localStorage.getItem('robo_lang') || 'ko';
                const c = d.data();
                list.innerHTML += `
                    <div style="margin-bottom:15px; border-bottom:1px solid #f1f5f9; padding-bottom:10px;">
                        <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
                            <b style="color:#0066ff">${c.author}</b>
                            <span style="color:#94a3b8">${c.createdAt ? new Date(c.createdAt.seconds * 1000).toLocaleString('en-US') : ''}</span>
                        </div>
                        <div style="margin-top:5px; color:#475569;">${c.content}</div>
                    </div>`;
            });
        });
    },

    like: async () => {
        const lang = localStorage.getItem('robo_lang') || 'ko';
        const id = window.Lounge.currentId;
        const voted = JSON.parse(localStorage.getItem('ROBO_VOTED') || '{}');
        if (voted[id]) return alert(translations[lang].alert_already_voted);
        
        await updateDoc(doc(db, "Lounge_Board", id), { likes: increment(1) });
        voted[id] = true;
        localStorage.setItem('ROBO_VOTED', JSON.stringify(voted));
        document.getElementById('vLikes').innerText = parseInt(document.getElementById('vLikes').innerText) + 1;
        document.getElementById('likeIcon').style.color = '#ef4444';
    },

    edit: async () => {
        const lang = localStorage.getItem('robo_lang') || 'ko';
        const pw = prompt(translations[lang].prompt_pw);
        const s = await getDoc(doc(db, "Lounge_Board", window.Lounge.currentId));
        if (s.data().password === pw || pw === MASTER_KEY) {
            const d = s.data();
            document.getElementById('postId').value = window.Lounge.currentId;
            document.getElementById('pAuthor').value = d.author;
            document.getElementById('pTitle').value = d.title;
            document.getElementById('pContent').value = d.content;
            document.getElementById('pPassword').value = d.password;
            document.getElementById('modalTitle').innerText = translations[lang].modal_edit_title;
            window.Lounge.close();
            document.getElementById('writeModal').classList.add('active');
        } else alert(translations[lang].alert_wrong_pw);
    },

    delete: async () => {
        const lang = localStorage.getItem('robo_lang') || 'ko';
        const pw = prompt(translations[lang].prompt_pw);
        const s = await getDoc(doc(db, "Lounge_Board", window.Lounge.currentId));
        if (s.data().password === pw || pw === MASTER_KEY) {
            if (confirm(translations[lang].confirm_delete)) {
                await deleteDoc(doc(db, "Lounge_Board", window.Lounge.currentId));
                window.Lounge.close();
            }
        } else alert('비밀번호가 일치하지 않습니다.');
    },

    bindEvents: () => {
        document.getElementById('loungeForm').onsubmit = async (e) => {
            e.preventDefault();
            const id = document.getElementById('postId').value;
            const data = {
                author: document.getElementById('pAuthor').value,
                password: document.getElementById('pPassword').value,
                title: document.getElementById('pTitle').value,
                content: document.getElementById('pContent').value,
                updatedAt: serverTimestamp()
            };

            try {
                if (id) {
                    await updateDoc(doc(db, "Lounge_Board", id), data);
                } else {
                    data.createdAt = serverTimestamp();
                    data.likes = 0;
                    await addDoc(collection(db, "Lounge_Board"), data);
                }
                window.Lounge.close();
                e.target.reset();
            } catch(e) { 
                console.error(e);
                alert('저장에 실패했습니다. 권한 설정을 확인하세요.'); 
            }
        };

        document.getElementById('cmtForm').onsubmit = async (e) => {
            e.preventDefault();
            await addDoc(collection(db, "Lounge_Board", window.Lounge.currentId, "comments"), {
                author: document.getElementById('cAuthor').value,
                content: document.getElementById('cText').value,
                createdAt: serverTimestamp()
            });
            e.target.reset();
        };

        const search = document.getElementById('boardSearch');
        if (search) {
            search.oninput = (e) => {
                const term = e.target.value.toLowerCase();
                document.querySelectorAll('.post-card').forEach(card => {
                    const title = card.querySelector('h3').innerText.toLowerCase();
                    card.style.display = title.includes(term) ? 'grid' : 'none';
                });
            };
        }
    }
});

// 초기화
window.Lounge.init();
