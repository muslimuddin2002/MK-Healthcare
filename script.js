// ১. লগইন ও রেজিস্ট্রেশন ট্যাব সুইচ
function switchTab(type) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const btns = document.querySelectorAll('.tab-btn');
    
    if(type === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        btns[0].classList.add('active');
        btns[1].classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        btns[1].classList.add('active');
        btns[0].classList.remove('active');
    }
}

// ২. রেজিস্ট্রেশন লজিক (বয়স অনুযায়ী স্টেজ সেট করা)
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const address = document.getElementById('regAddress').value;
    const age = parseInt(document.getElementById('regAge').value);
    const password = document.getElementById('regPassword').value;

    let stage = "";
    if(age >= 0 && age <= 18) {
        stage = "শিশু ও কিশোর কর্নার (০-১৮ বছর)";
    } else if(age > 18 && age <= 60) {
        stage = "অ্যাডাল্ট / তরুণ কর্নার (১৯-৬০ বছর)";
    } else {
        stage = "বয়স্ক / সিনিয়র সিটিজেন কর্নার (৬০+ বছর)";
    }

    const userData = { name, email, address, age, stage, password };
    localStorage.setItem('mkUser', JSON.stringify(userData));

    alert('রেজিস্ট্রেশন সফল হয়েছে! এখন আপনার একাউন্ট দিয়ে লগইন করুন।');
    switchTab('login');
}

// ৩. লগইন লজিক
function handleLogin(e) {
    e.preventDefault();
    const emailInput = document.getElementById('loginEmail').value;
    const passInput = document.getElementById('loginPassword').value;

    const user = JSON.parse(localStorage.getItem('mkUser'));

    if(user && user.email === emailInput && user.password === passInput) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('ভুল ফোন/ইমেইল অথবা পাসওয়ার্ড! দয়া করে সঠিক তথ্য দিন।');
    }
}

// ৪. ফরগট পাসওয়ার্ড ফাংশন
function showForgotModal() { document.getElementById('forgotModal').style.display = 'flex'; }
function closeForgotModal() { document.getElementById('forgotModal').style.display = 'none'; }
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
        alert('এই একাউন্ট বা ফোন নম্বর আমাদের সিস্টেমে পাওয়া যায়নি!');
    }
}

// ৫. ড্যাশবোর্ড লোড হলে ইউজার তথ্য ও স্টেজ দেখানো
window.onload = function() {
    if(window.location.pathname.includes('dashboard.html')) {
        if(!localStorage.getItem('isLoggedIn')) {
            window.location.href = 'login.html';
            return;
        }

        const user = JSON.parse(localStorage.getItem('mkUser'));
        if(user) {
            document.getElementById('welcomeUserMsg').textContent = `স্বাগতম, ${user.name}`;
            document.getElementById('profileName').textContent = user.name;
            document.getElementById('profileAge').textContent = user.age;
            document.getElementById('profileAddress').textContent = user.address;
            document.getElementById('profileStageBadge').textContent = `বর্তমান স্টেজ: ${user.stage}`;
        }
    }

    // ৬. ডিজিটালি রোগের ডিটেইলস লোড করা
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
};

function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

// ৭. ওষুধ ট্র্যাকিং লজিক (ডোজ যোগ করা এবং ডান করা)
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

// ৮. বিশাল রোগ ও সিন্ড্রোম ডেটাবেজ
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
        symptoms: ["চোখে চোখ রেখে কথা না বলা", "একই কথা বারবার বলা বা পুনরাবৃত্তি করা", "সামাজিক মেলামেশায় অনীহা"],
        remedy: ["স্পিচ ও অকুপেশনাল থেরাপি", "ধৈর্যের সাথে আচরণগত প্রশিক্ষণ", "বিশেষায়িত স্কুল বা কেয়ার সেন্টার"]
    },
    "kidney": {
        title: "🩺 কিডনি রোগ ও উপসর্গ",
        desc: "কিডনির ফিল্টারিং ক্ষমতা কমে যাওয়ার সমস্যা।",
        symptoms: ["চোখ ও মুখ ফুলে যাওয়া", "প্রস্রাবে ফেনা হওয়া বা প্রোটিন যাওয়া", "উচ্চ রক্তচাপ ও দুর্বলতা"],
        remedy: ["কম লবণ ও পরিমিত পানি পান", "নিয়মিত প্রেশার ও ক্রিয়েটিনিন টেস্ট", "নেফ্রোলজিস্টের পরামর্শ"]
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
        symptoms: ["প্রস্রাবের সময় প্রচণ্ড জ্বালাপোড়া ও ব্যথা", "ঘনঘন প্রস্রাবের বেগ হওয়া", "তলপেটে ব্যথা"],
        remedy: ["প্রচুর পানি ও ডাবের পানি খাওয়া", "প্রস্রাব চেপে না রাখা", "ডাক্তারের দেওয়া অ্যান্টিবায়োটিক সেবন"]
    },
    "allergy": {
        title: "🤧 ঠান্ডা, কাশি ও এলার্জি",
        desc: "ধূলোবালি, ঠান্ডা বা খাদ্যে এলার্জি প্রতিক্রিয়া।",
        symptoms: ["ঘনঘন হাঁচি ও সর্দি", "বুকে কফ জমা ও শ্বাসকষ্ট", "ত্বকে চুলকানি বা লালচে ভাব"],
        remedy: ["ধূলোবালি থেকে দূরে থাকা ও মাস্ক পরা", "এন্টিহিস্টামিন ওষুধ সেবন", "গরম পানির ভাপ নেওয়া"]
    },
    "skin": {
        title: "✨ চর্মরোগ ও প্রতিকার",
        desc: "একজিমা, ফাঙ্গাল ইনফেকশন ও ত্বকের সমস্যা।",
        symptoms: ["ত্বকে অতিরিক্ত চুলকানি ও র্যাশ", "ছোপ ছোপ দাগ বা দাদ", "ত্বক ফেটে যাওয়া"],
        remedy: ["ত্বক সবসময় পরিষ্কার ও শুকনা রাখা", "চিকিৎসকের দেওয়া ক্রিম বা লোশন ব্যবহার", "সুতি পোশাক পরা"]
    },
    "hair": {
        title: "💇 চুল পড়ার কারণ ও প্রতিকার",
        desc: "মাথার চুল অতিরিক্ত পরিমাণে ঝরে যাওয়া।",
        symptoms: ["মাথার তালু বা সিঁথি ফাঁকা হয়ে যাওয়া", "চুলের গোড়া দুর্বল হয়ে যাওয়া", "খুশকির উপদ্রব"],
        remedy: ["সুষম খাবার ও প্রোটিন গ্রহণ", "কেমিক্যালযুক্ত শ্যাম্পু বর্জন", "নিয়মিত তেল ম্যাসাজ"]
    },
    "sexual": {
        title: "❤️ যৌন স্বাস্থ্য ও সমস্যা",
        desc: "শারীরিক ও মানসিক যৌন জটিলতা।",
        symptoms: ["শারীরিক ক্লান্তি ও দুর্বলতা", "মানসিক উদ্বেগ ও হতাশা", "হরমোনজনিত সমস্যা"],
        remedy: ["পুষ্টিকর খাবার ও ফলমূল খাওয়া", "মানসিক চাপ মুক্ত থাকা", "হাতুড়ে ডাক্তার পরিহার করে রেজিস্টার্ড বিশেষজ্ঞের পরামর্শ নেওয়া"]
    },
    "heart": {
        title: "🫀 হার্ট ও কার্ডিওলজি",
        desc: "হৃদরোগ ও রক্তনালীর জটিলতা।",
        symptoms: ["বুকে চাপ বা ব্যথা অনুভূত হওয়া", "অল্পতেই হাড়িপাকানো বা শ্বাসকষ্ট", "হাত-পা অবশ হওয়া"],
        remedy: ["তৈলাক্ত ও চর্বিযুক্ত খাবার বর্জন", "নিয়মিত হাঁটা ও ব্যায়াম করা", "কার্ডিওলজিস্টের পরামর্শ নেওয়া"]
    },
    "diabetes": {
        title: "🩸 ডায়াবেটিস কর্নার",
        desc: "রক্তে শর্করার মাত্রা অনিয়ন্ত্রিত হওয়া।",
        symptoms: ["ঘনঘন প্রস্রাব ও অতিরিক্ত তৃষ্ণা", "অতিরিক্ত ক্ষুধা লাগা কিন্তু ওজন কما", "ক্ষত শুকাতে দেরি হওয়া"],
        remedy: ["মিষ্টি ও শর্করা জাতীয় খাবার নিয়ন্ত্রণ", "নিয়মিত ব্যায়াম ও সুগার মাপা", "ইনসুলিন বা ওষুধ নিয়মমতো খাওয়া"]
    },
    "neuro": {
        title: "🧠 নিউরো (মস্তিষ্ক ও স্নায়ু রোগ)",
        desc: "মস্তিষ্ক ও স্নায়ুতন্ত্রের সমস্যা।",
        symptoms: ["তীব্র মাথা ব্যথা ও মাইগ্রেন", "শরীরের কোনো অংশ অবশ বা দুর্বল হওয়া", "স্মৃতিশক্তি হ্রাস"],
        remedy: ["পর্যাপ্ত ঘুম ও মানসিক শান্তি", "উচ্চ রক্তচাপ নিয়ন্ত্রণ", "নিউরো মেডিসিন বিশেষজ্ঞের পরামর্শ"]
    },
    "gyne": {
        title: "👩‍⚕️ গাইনি ও প্রসূতি সেবা",
        desc: "নারী স্বাস্থ্য ও গর্ভকালীন পরিচর্যা।",
        symptoms: ["মাসিক অনিয়মিত হওয়া বা তীব্র ব্যথা", "গর্ভাবস্থায় অতিরিক্ত দুর্বলতা", "সাদা স্রাবের সমস্যা"],
        remedy: ["আয়রন ও ক্যালসিয়ামযুক্ত খাবার খাওয়া", "নিয়মিত মেডিকেল চেকআপ", "গাইনি বিশেষজ্ঞের তত্ত্বাবধান"]
    },
    "gastric": {
        title: "🔥 গ্যাস্ট্রিক ও আলসার",
        desc: "পাকস্থলীতে এসিডের পরিমাণ বেড়ে যাওয়া।",
        symptoms: ["বুক জ্বালাপোড়া ও টক ঢেঁকুর ওঠা", "পেটে গ্যাস ও বদহজম", "বমি ভাব"],
        remedy: ["নিয়মিত সময়ে খাবার খাওয়া", "অতিরিক্ত তেল-মসলা ও ফাস্টফুড বর্জন", "এন্টাসিড বা পিপিআই ওষুধ সেবন"]
    },
    "fever": {
        title: "🤒 ডেঙ্গু ও সাধারণ জ্বর",
        desc: "ভাইরাল ইনফেকশন ও ডেঙ্গু জ্বর।",
        symptoms: ["শরীরের তাপমাত্রা বৃদ্ধি ও কাঁপুনি", "হাড় ও পেশীতে তীব্র ব্যথা", "রক্তে প্লাটিলেট কমে যাওয়া"],
        remedy: ["প্রচুর পানি ও স্যালাইন খাওয়া", "প্যারাসিটামল সেবন", "ডাক্তারের পরামর্শে প্লাটিলেট পরীক্ষা করানো"]
    },
    "eye": {
        title: "👁️ চক্ষু (আই কেয়ার) সমস্যা",
        desc: "চোখ ওঠা, এলার্জি ও দৃষ্টি স্বল্পতা।",
        symptoms: ["চোখ লাল হওয়া ও চুলকানি", "চোখ দিয়ে পানি পড়া", "ঝাপসা দেখা"],
        remedy: ["পরিষ্কার পানি দিয়ে চোখ ধোয়া", "ডাক্তারের পরামর্শ ছাড়া ড্রপ ব্যবহার না করা", "রোদে চশমা ব্যবহার করা"]
    }
};

function openDisease(type) {
    localStorage.setItem('selectedDisease', type);
    window.location.href = 'disease-details.html';
}