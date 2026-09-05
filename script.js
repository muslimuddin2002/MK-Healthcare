// ১. পাসওয়ার্ড দেখার চোখ আইকন টগল ফাংশন
function togglePasswordVisibility(fieldId, iconElement) {
    const inputField = document.getElementById(fieldId);
    if (inputField.type === "password") {
        inputField.type = "text";
        iconElement.textContent = "🙈"; 
    } else {
        inputField.type = "password";
        iconElement.textContent = "👁️"; 
    }
}

// ২. লগইন ও রেজিস্ট্রেশন ট্যাব সুইচ
function switchTab(type) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const btns = document.querySelectorAll('.tab-btn');
    
    if(type === 'login') {
        if(loginForm) loginForm.style.display = 'block';
        if(registerForm) registerForm.style.display = 'none';
        if(btns[0]) btns[0].classList.add('active');
        if(btns[1]) btns[1].classList.remove('active');
    } else {
        if(loginForm) loginForm.style.display = 'none';
        if(registerForm) registerForm.style.display = 'block';
        if(btns[1]) btns[1].classList.add('active');
        if(btns[0]) btns[0].classList.remove('active');
    }
}

// ৩. রেজিস্ট্রেশন লজিক
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const district = document.getElementById('regDistrict').value;
    const upazila = document.getElementById('regUpazila').value;
    const age = parseInt(document.getElementById('regAge').value);
    const password = document.getElementById('regPassword').value;
    const imgUrl = "https://via.placeholder.com/90";

    let stage = "";
    if(age >= 0 && age <= 18) {
        stage = "শিশু ও কিশোর কর্নার (০-১৮ বছর)";
    } else if(age > 18 && age <= 60) {
        stage = "অ্যাডাল্ট / তরুণ কর্নার (১৯-৬০ বছর)";
    } else {
        stage = "বয়স্ক / সিনিয়র সিটিজেন কর্নার (৬০+ বছর)";
    }

    const userData = { name, email, district, upazila, age, stage, password, imgUrl };
    localStorage.setItem('mkUser', JSON.stringify(userData));

    alert('রেজিস্ট্রেশন সফল হয়েছে! এখন লগইন করুন।');
    switchTab('login');
}

// ৪. লগইন লজিক
function handleLogin(e) {
    e.preventDefault();
    const emailInput = document.getElementById('loginEmail').value;
    const passInput = document.getElementById('loginPassword').value;

    const user = JSON.parse(localStorage.getItem('mkUser'));

    if(user && user.email === emailInput && user.password === passInput) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('ভুল ফোন/ইমেইল অথবা পাসওয়ার্ড!');
    }
}

// ৫. পাসওয়ার্ড রিকভারি মোডাল
function showForgotModal() { 
    const modal = document.getElementById('forgotModal');
    if(modal) modal.style.display = 'flex'; 
}
function closeForgotModal() { 
    const modal = document.getElementById('forgotModal');
    if(modal) modal.style.display = 'none'; 
}
function resetPassword() {
    const val = document.getElementById('forgotInput').value;
    const user = JSON.parse(localStorage.getItem('mkUser'));
    if(user && user.email === val) {
        const newPass = prompt("আপনার নতুন পাসওয়ার্ডটি দিন:");
        if(newPass) {
            user.password = newPass;
            localStorage.setItem('mkUser', JSON.stringify(user));
            alert('পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে!');
            closeForgotModal();
        }
    } else {
        alert('এই একাউন্ট পাওয়া যায়নি!');
    }
}

// ৬. প্রোফাইল এডিট ও গ্যালারি থেকে ছবি লোড করার লজিক
function openEditProfileModal() {
    const user = JSON.parse(localStorage.getItem('mkUser'));
    if(user) {
        document.getElementById('editName').value = user.name;
        document.getElementById('editDistrict').value = user.district || "";
        document.getElementById('editUpazila').value = user.upazila || "";
        document.getElementById('editAge').value = user.age;
    }
    const modal = document.getElementById('editProfileModal');
    if(modal) modal.style.display = 'flex';
}

function closeEditProfileModal() {
    const modal = document.getElementById('editProfileModal');
    if(modal) modal.style.display = 'none';
}

function saveProfileChanges(e) {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem('mkUser'));
    
    user.name = document.getElementById('editName').value;
    user.district = document.getElementById('editDistrict').value;
    user.upazila = document.getElementById('editUpazila').value;
    user.age = parseInt(document.getElementById('editAge').value);
    
    const fileInput = document.getElementById('editImgFile');
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            user.imgUrl = e.target.result;
            finalizeProfileSave(user);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        finalizeProfileSave(user);
    }
}

function finalizeProfileSave(user) {
    if(user.age >= 0 && user.age <= 18) {
        user.stage = "শিশু ও কিশোর কর্নার (০-১৮ বছর)";
    } else if(user.age > 18 && user.age <= 60) {
        user.stage = "অ্যাডাল্ট / তরুণ কর্নার (১৯-৬০ বছর)";
    } else {
        user.stage = "বয়স্ক / সিনিয়র সিটিজেন কর্নার (৬০+ বছর)";
    }

    localStorage.setItem('mkUser', JSON.stringify(user));
    alert('প্রোফাইল সফলভাবে আপডেট করা হয়েছে!');
    closeEditProfileModal();
    location.reload();
}

// ৭. পেজ লোড লজিক
window.onload = function() {
    if(window.location.pathname.includes('dashboard.html')) {
        if(!localStorage.getItem('isLoggedIn')) {
            window.location.href = 'index.html';
            return;
        }

        const user = JSON.parse(localStorage.getItem('mkUser'));
        if(user) {
            document.getElementById('welcomeUserMsg').textContent = `স্বাগতম, ${user.name}`;
            document.getElementById('profileName').textContent = user.name;
            document.getElementById('profileAge').textContent = user.age;
            document.getElementById('profileDistrict').textContent = user.district || "বাংলাদেশ";
            document.getElementById('profileUpazila').textContent = user.upazila || "উপজেলা";
            document.getElementById('profileNearestHosp').textContent = `${user.upazila} উপজেলা স্বাস্থ্য কমপ্লেক্স ও ${user.district} সদর হাসপাতাল`;
            document.getElementById('profileStageBadge').textContent = `বর্তমান স্টেজ: ${user.stage}`;
            if(user.imgUrl) {
                document.getElementById('profileAvatar').src = user.imgUrl;
            }
        }
    }

    // হাসপাতাল ও নার্সিং পেজ রেন্ডার
    if(window.location.pathname.includes('hospitals.html')) {
        renderGrid('govtGrid', typeof govtColleges !== 'undefined' ? govtColleges : []);
        renderGrid('armyGrid', typeof armyColleges !== 'undefined' ? armyColleges : []);
        renderGrid('privateGrid', typeof privateColleges !== 'undefined' ? privateColleges : []);
        renderGrid('dentalGrid', typeof dentalHospitals !== 'undefined' ? dentalHospitals : []);
        renderGrid('nursingGovtGrid', typeof govtNursingColleges !== 'undefined' ? govtNursingColleges : []);
        renderGrid('nursingPvtGrid', typeof privateNursingColleges !== 'undefined' ? privateNursingColleges : []);
        renderGrid('alternativeGrid', typeof alternativeMedicalColleges !== 'undefined' ? alternativeMedicalColleges : []);
        renderGrid('divisionalGrid', typeof divisionalHospitals !== 'undefined' ? divisionalHospitals : []);
        renderGrid('sadarGrid', typeof districtSadarHospitals !== 'undefined' ? districtSadarHospitals : []);
        renderGrid('upazilaGrid', typeof upazilaHospitals !== 'undefined' ? upazilaHospitals : []);
    }

    // রোগের বিবরণ পেজ লোড
    if(window.location.pathname.includes('disease-details.html')) {
        const type = localStorage.getItem('selectedDisease');
        const data = diseaseData[type];
        if(data) {
            let symptomsHtml = data.symptoms.map(s => `<li>${s}</li>`).join('');
            let remedyHtml = data.remedy.map(r => `<li>${r}</li>`).join('');

            document.getElementById('contentBox').innerHTML = `
                <h2>${data.title}</h2>
                <p><strong>বর্ণনা:</strong> ${data.desc}</p>
                <h3>🔍 প্রধান লক্ষণ ও উপসর্গসমূহ:</h3>
                <ul>${symptomsHtml}</ul>
                <h3>💡 প্রতিকার ও করণীয়:</h3>
                <ul>${remedyHtml}</ul>
            `;
        }
    }

    // স্বাস্থ্য টিপস রেন্ডার করা
    renderHealthQuotes();
};

function renderGrid(elementId, dataArray) {
    const grid = document.getElementById(elementId);
    if(grid && dataArray.length > 0) {
        dataArray.forEach(h => {
            const card = document.createElement('div');
            card.className = 'hospital-card';
            card.innerHTML = `<h3>🏥 ${h.name}</h3><p>${h.location}</p><button class="spec-btn" style="margin-top:10px; padding:5px 10px; font-size:12px;">বিস্তারিত দেখুন</button>`;
            card.onclick = () => showHospModal(h);
            grid.appendChild(card);
        });
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
}

// ৮. ক্লায়েন্ট-বান্ধব ওষুধ সার্চ ও অটো-কমপ্লিট ফিল্টার ফাংশন
function filterMedicines() {
    const input = document.getElementById('medNameInput');
    const query = input.value.trim().toLowerCase();
    const box = document.getElementById('medSuggestions');

    if (!box) return;

    if (query.length === 0) {
        box.style.display = 'none';
        box.innerHTML = '';
        return;
    }

    const matches = typeof allMedicinesList !== 'undefined' 
        ? allMedicinesList.filter(med => med.toLowerCase().includes(query)) 
        : [];

    if (matches.length > 0) {
        box.innerHTML = matches.map(m => `<div class="suggestion-item" onclick="selectMedicine('${m}')">${m}</div>`).join('');
        box.style.display = 'block';
    } else {
        box.innerHTML = '<div class="suggestion-item" style="color:red;">কোনো ওষুধ পাওয়া যায়নি (নিজের মতো লিখতে পারেন)</div>';
        box.style.display = 'block';
    }
}

function selectMedicine(medName) {
    document.getElementById('medNameInput').value = medName;
    document.getElementById('medSuggestions').style.display = 'none';
}

// ৯. হাসপাতালের সঠিক সিকোয়েন্সে ট্যাব সুইচিং
function switchHospTab(tabName) {
    const sections = ['govtSection', 'armySection', 'privateSection', 'dentalSection', 'nursingGovtSection', 'nursingPvtSection', 'alternativeSection', 'divisionalSection', 'sadarSection', 'upazilaSection'];
    sections.forEach(sec => {
        const el = document.getElementById(sec);
        if(el) el.style.display = 'none';
    });

    const btns = document.querySelectorAll('.h-tab-btn');
    btns.forEach(b => b.classList.remove('active'));

    const map = { 
        'govt': 0, 
        'army': 1, 
        'private': 2, 
        'dental': 3, 
        'nursingGovt': 4, 
        'nursingPvt': 5, 
        'alternative': 6, 
        'divisional': 7, 
        'sadar': 8, 
        'upazila': 9 
    };
    
    const targetSec = document.getElementById(tabName + 'Section');
    if(targetSec) targetSec.style.display = 'block';

    if(btns[map[tabName]]) {
        btns[map[tabName]].classList.add('active');
    }
}

// ১০. হসপিটাল ডিটেইলস মোডাল
function showHospModal(h) {
    document.getElementById('modalHospTitle').textContent = h.name;
    document.getElementById('modalHospDesc').textContent = `অবস্থান: ${h.location} | বিবরণ: ${h.details}`;
    
    const machList = document.getElementById('modalHospMachines');
    machList.innerHTML = h.machines.map(m => `<li>✅ ${m}</li>`).join('');

    document.getElementById('hospModal').style.display = 'flex';
}

function closeHospModal() {
    document.getElementById('hospModal').style.display = 'none';
}

// ১১. ওষুধ ট্র্যাকিং লজিক
function addMedicine(e) {
    e.preventDefault();
    const name = document.getElementById('medNameInput').value;
    const time = document.getElementById('medTimeInput').value;
    if(!name || !time) return;

    const list = document.getElementById('medTrackerList');
    const li = document.createElement('li');
    li.innerHTML = `<span><strong>${name}</strong> - [${time}]</span> <button class="done-btn" onclick="toggleDone(this)">খাওয়া হয়েছে (Done)</button>`;
    list.appendChild(li);

    document.getElementById('medTrackForm').reset();
    const box = document.getElementById('medSuggestions');
    if(box) box.style.display = 'none';
}

function toggleDone(btn) {
    const li = btn.parentElement;
    li.classList.toggle('done');
    if(li.classList.contains('done')) {
        btn.textContent = 'সম্পন্ন ✅';
        btn.style.backgroundColor = '#2a9d8f';
    } else {
        btn.textContent = 'খাওয়া হয়েছে (Done)';
        btn.style.backgroundColor = '#0077b6';
    }
}

// ১২. ফুটারের উপরে স্বাস্থ্য টিপস রেন্ডার করার ফাংশন
function renderHealthQuotes() {
    const grid = document.getElementById('healthQuotesGrid');
    if(grid && typeof healthQuotes !== 'undefined') {
        grid.innerHTML = healthQuotes.map(q => `
            <div class="quote-card ${q.type === 'avoid' ? 'avoid-card' : ''}">
                <h4>${q.type === 'avoid' ? '❌ বর্জন করুন: ' : '✅ করণীয়: '}${q.title}</h4>
                <p>${q.desc}</p>
            </div>
        `).join('');
    }
}

// ১৩. রোগ ও সিন্ড্রোম ডেটাবেজ
const diseaseData = {
    "disability": {
        title: "♿ প্রতিবন্ধী ব্যক্তিদের বিশেষ সেবা কর্নার",
        desc: "শারীরিক, মানসিক, দৃষ্টি ও বাকপ্রতিবন্ধী ব্যক্তিদের বিশেষ চিকিৎসা ও থেরাপি গাইডলাইন।",
        symptoms: ["শারীরিক মুভমেন্টে বাধা বা পক্ষাঘাত", "বুদ্ধিবৃত্তিক বিকাশ ধীর হওয়া", "কথা বলা বা শোনার ক্ষেত্রে জটিলতা"],
        remedy: ["নিয়মিত ফিজিওথেরাপি ও স্পিচ থেরাপি", "সহায়ক উপকরণ (হুইলচেয়ার, ক্রাচ) ব্যবহার", "বিশেষজ্ঞ চিকিৎসকের পরামর্শ"]
    },
    "autism": {
        title: "👶 অটিজম ও শিশু সিন্ড্রোম",
        desc: "শিশুদের স্নায়ুবিক ও আচরণগত বিকাশজনিত সমস্যা।",
        symptoms: ["চোখে চোখ রেখে কথা না বলা", "একই কথা বারবার বলা", "সামাজিক মেলামেসায় অনীহা"],
        remedy: ["স্পিচ ও অকুপেশনাল থেরাপি", "ধৈর্যের সাথে আচরণগত প্রশিক্ষণ", "বিশেষায়িত স্কুল বা কেয়ার সেন্টার"]
    },
    "kidney": {
        title: "🩺 কিডনি রোগ ও উপসর্গ",
        desc: "কিডনির ফিল্টারিং ক্ষমতা কমে যাওয়ার সমস্যা।",
        symptoms: ["চোখ ও মুখ ফুলে যাওয়া", "প্রস্রাবে ফেনা হওয়া", "উচ্চ রক্তচাপ ও দুর্বলতা"],
        remedy: ["কম লবণ ও পরিমিত পানি পান", "নিয়মিত প্রেশার ও টেস্ট", "নেফ্রোলজিস্টের পরামর্শ"]
    },
    "hiv": {
        title: "⚠️ এইচআইভি (HIV) সচেতনতা ও লক্ষণ",
        desc: "রোগ প্রতিরোধ ক্ষমতা ধ্বংসকারী ইনফেকশন।",
        symptoms: ["দীর্ঘমেয়াদী জ্বর ও ওজন হ্রাস", "ঘনঘন পাতলা পায়খানা", "লসিকা গ্রন্থি ফুলে যাওয়া"],
        remedy: ["নিয়মিত এআরভি (ART) চিকিৎসা", "সচেতনতা ও নিরাপদ জীবনযাপন", "চিকিৎসকের নিবিড় তত্ত্বাবধান"]
    },
    "urine": {
        title: "💧 প্রস্রাব ইনফেকশন (UTI)",
        desc: "মূত্রনালীর ব্যাকটিরিয়াল ইনফেকশন।",
        symptoms: ["প্রস্রাবের সময় প্রচণ্ড জ্বালাপোড়া", "ঘনঘন প্রস্রাবের বেগ", "তলপেটে ব্যথা"],
        remedy: ["প্রচুর পানি ও ডাবের পানি খাওয়া", "প্রস্রাব চেপে না রাখা", "ডাক্তারের দেওয়া অ্যান্টিবায়োটিক সেবন"]
    },
    "allergy": {
        title: "🤧 ঠান্ডা, কাশি ও এলার্জি",
        desc: "ধূলোবালি বা ঠান্ডা লাগার প্রতিক্রিয়া।",
        symptoms: ["ঘনঘন হাঁচি ও সর্দি", "বুকে কফ জমা ও শ্বাসকষ্ট", "ত্বকে চুলকানি"],
        remedy: ["ধূলোবালি থেকে দূরে থাকা ও মাস্ক পরা", "এন্টিহিস্টামিন ওষুধ সেবন", "গরম পানির ভাপ নেওয়া"]
    },
    "skin": {
        title: "✨ চর্মরোগ ও প্রতিকার",
        desc: "একজিমা ও ত্বকের ইনফেকশন।",
        symptoms: ["ত্বকে অতিরিক্ত চুলকানি ও র্যাশ", "ছোপ ছোপ দাগ বা দাদ"],
        remedy: ["ত্বক পরিষ্কার ও শুকনা রাখা", "চিকিৎসকের দেওয়া ক্রিম ব্যবহার", "সুতি পোশাক পরা"]
    },
    "hair": {
        title: "💇 চুল পড়ার কারণ ও প্রতিকার",
        desc: "মাথার চুল ঝরে যাওয়ার সমস্যা।",
        symptoms: ["মাথার তালু ফাঁকা হওয়া", "চুলের গোড়া দুর্বল হওয়া"],
        remedy: ["সুষম খাবার গ্রহণ", "কেমিক্যালযুক্ত শ্যাম্পু বর্জন", "নিয়মিত তেল ম্যাসাজ"]
    },
    "sexual": {
        title: "❤️ যৌন স্বাস্থ্য ও সমস্যা",
        desc: "শারীরিক ও মানসিক যৌন জটিলতা।",
        symptoms: ["শারীরিক ক্লান্তি", "মানসিক উদ্বেগ", "হরমোনজনিত সমস্যা"],
        remedy: ["পুষ্টিকর খাবার খাওয়া", "মানসিক চাপ মুক্ত থাকা", "রেজিস্টার্ড ডাক্তারের পরামর্শ নেওয়া"]
    },
    "heart": {
        title: "🫀 হার্ট ও কার্ডিওলজি",
        desc: "হৃদরোগ ও রক্তনালীর জটিলতা।",
        symptoms: ["বুকে চাপ বা ব্যথা", "অল্পতেই শ্বাসকষ্ট", "হাত-পা অবশ হওয়া"],
        remedy: ["তৈলাক্ত খাবার বর্জন", "নিয়মিত হাঁটা", "কার্ডিওলজিস্টের পরামর্শ নেওয়া"]
    },
    "diabetes": {
        title: "🩸 ডায়াবেটিস কর্নার",
        desc: "রক্তে শর্করার মাত্রা বেড়ে যাওয়া।",
        symptoms: ["ঘনঘন প্রস্রাব ও অতিরিক্ত তৃষ্ণা", "ক্ষত শুকাতে দেরি হওয়া"],
        remedy: ["মিষ্টি জাতীয় খাবার নিয়ন্ত্রণ", "নিয়মিত ব্যায়াম", "ওষুধ বা ইনসুলিন নেওয়া"]
    },
    "neuro": {
        title: "🧠 নিউরো (মস্তিষ্ক ও স্নায়ু রোগ)",
        desc: "মস্তিষ্ক ও স্নায়ুতন্ত্রের সমস্যা।",
        symptoms: ["তীব্র মাথা ব্যথা ও মাইগ্রেন", "শরীরের অংশ অবশ হওয়া"],
        remedy: ["পর্যাপ্ত ঘুম", "উচ্চ রক্তচাপ নিয়ন্ত্রণ", "নিউরো বিশেষজ্ঞের পরামর্শ"]
    },
    "gyne": {
        title: "👩‍⚕️ গাইনি ও প্রসূতি সেবা",
        desc: "নারী স্বাস্থ্য ও গর্ভকালীন পরিচর্যা।",
        symptoms: ["মাসিক অনিয়মিত হওয়া বা ব্যথা", "গর্ভাবস্থায় দুর্বলতা"],
        remedy: ["আয়রন ও ক্যালসিয়াম গ্রহণ", "নিয়মিত চেকআপ", "গাইনি বিশেষজ্ঞের তত্ত্বাবধান"]
    },
    "gastric": {
        title: "🔥 গ্যাস্ট্রিক ও আলসার",
        desc: "পাকস্থলীতে এসিড বৃদ্ধি।",
        symptoms: ["বুক জ্বালাপোড়া ও টক ঢেঁকুর", "পেটে গ্যাস"],
        remedy: ["নিয়মিত খাবার খাওয়া", "ফাস্টফুড বর্জন", "পিপিআই ওষুধ সেবন"]
    },
    "fever": {
        title: "🤒 ডেঙ্গু ও সাধারণ জ্বর",
        desc: "ভাইরাল ইনফেকশন ও জ্বর।",
        symptoms: ["শরীরের তাপমাত্রা বৃদ্ধি", "হাড় ও পেশীতে ব্যথা"],
        remedy: ["প্রচুর পানি ও স্যালাইন খাওয়া", "প্যারাসিটামল সেবন", "প্লাটিলেট টেস্ট করানো"]
    },
    "eye": {
        title: "👁️ চক্ষু (আই কেয়ার) সমস্যা",
        desc: "চোখ ওঠা বা দৃষ্টি সমস্যা।",
        symptoms: ["চোখ লাল হওয়া ও চুলকানি", "ঝাপসা দেখা"],
        remedy: ["পরিষ্কার পানি দিয়ে ধোয়া", "ডাক্তারের পরামর্শ ছাড়া ড্রপ ব্যবহার না করা"]
    }
};

function openDisease(type) {
    localStorage.setItem('selectedDisease', type);
    window.location.href = 'disease-details.html';
}