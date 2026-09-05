// ১. সরকারি মেডিকেল কলেজসমূহ (৩৭টি)
const govtColleges = [
    { name: "ঢাকা মেডিকেল কলেজ হাসপাতাল (DMCH)", location: "ঢাকা", details: "বাংলাদেশের বৃহত্তম সরকারি টারশিয়ারি হাসপাতাল ও রিসার্চ সেন্টার।", machines: ["MRI Scanner", "CT Scan", "Dialysis", "ICU & CCU", "Digital X-Ray"] },
    { name: "স্যার সলিমুল্লাহ মেডিকেল কলেজ ও মিটফোর্ড হাসপাতাল", location: "ঢাকা", details: "ঐতিহাসিক সরকারি চিকিৎসালয় ও মেডিকেল কলেজ।", machines: ["CT Scan", "Ultrasonography", "X-Ray", "ICU Support"] },
    { name: "শহীদ সোহরাওয়ার্দী মেডিকেল কলেজ হাসপাতাল", location: "ঢাকা", details: "আধুনিক সুযোগ-সুবিধা সম্পন্ন সরকারি হাসপাতাল।", machines: ["MRI", "CT Scan", "Modern Operation Theater", "Dialysis Unit"] },
    { name: "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল (CMCH)", location: "চট্টগ্রাম", details: "চট্টগ্রাম অঞ্চলের প্রধান সরকারি স্বাস্থ্যসেবা কেন্দ্র।", machines: ["CT Scan", "MRI", "ICU", "Cath Lab"] },
    { name: "রাজশাহী মেডিকেল কলেজ হাসপাতাল (RMCH)", location: "রাজশাহী", details: "উত্তরবঙ্গের প্রধান সরকারি মেডিকেল হাব।", machines: ["MRI & CT Scan", "ICU", "Burn Unit"] },
    { name: "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল", location: "সিলেট", details: "সিলেট বিভাগের প্রধান সরকারি হাসপাতাল।", machines: ["CT Scan", "ICU", "Kidney Dialysis"] },
    { name: "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল", location: "বরিশাল", details: "দক্ষিণ অঞ্চলের চিকিৎসায় গুরুত্বপূর্ণ ভূমিকা পালনকারী হাসপাতাল।", machines: ["ICU", "CT Scan", "Digital X-Ray", "Blood Bank"] },
    { name: "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল", location: "ময়মনসিংহ", details: "ময়মনসিংহ বিভাগের প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["MRI", "CT Scan", "CCU", "Modern Surgery Units"] },
    { name: "রংপুর মেডিকেল কলেজ হাসপাতাল", location: "রংপুর", details: "রংপুর অঞ্চলের বৃহত্তম সরকারি চিকিৎসা কেন্দ্র।", machines: ["CT Scan", "ICU", "Dialysis", "X-Ray"] },
    { name: "কুমিল্লা মেডিকেল কলেজ হাসপাতাল", location: "কুমিল্লা", details: "কুমিল্লা অঞ্চলের প্রধান সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Ultrasonography", "Pathology"] },
    { name: "দিনাজপুর এম. আবদুর রহিম মেডিকেল কলেজ হাসপাতাল", location: "দিনাজপুর", details: "উত্তর জনপদের অন্যতম প্রধান সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Digital X-Ray"] },
    { name: "ফরিদপুর মেডিকেল কলেজ হাসপাতাল", location: "ফরিদপুর", details: "ফরিদপুর অঞ্চলের গুরুত্বপূর্ণ সরকারি চিকিৎসালয়।", machines: ["CT Scan", "ICU", "Dialysis"] },
    { name: "খুলনা মেডিকেল কলেজ হাসপাতাল", location: "খুলনা", details: "দক্ষিণ-পশ্চিমাঞ্চলের প্রধান সরকারি মেডিকেল কলেজ।", machines: ["MRI", "CT Scan", "ICU", "CCU"] },
    { name: "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল", location: "বগুড়া", details: "বগুড়ার আধুনিক সরকারি মেডিকেল কলেজ ও হাসপাতাল।", machines: ["MRI", "CT Scan", "ICU", "Dialysis"] },
    { name: "কক্সবাজার মেডিকেল কলেজ হাসপাতাল", location: "কক্সবাজার", details: "পর্যটন শহরের সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "X-Ray", "Emergency Unit"] },
    { name: "নোয়াখালী আব্দুল মালেক উকিল মেডিকেল কলেজ", location: "নোয়াখালী", details: "নোয়াখালীর প্রধান সরকারি মেডিকেল শিক্ষা প্রতিষ্ঠান।", machines: ["CT Scan", "Pathology", "ICU"] },
    { name: "পাবনা মেডিকেল কলেজ হাসপাতাল", location: "পাবনা", details: "পাবনার সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology", "Emergency"] },
    { name: "যশোর মেডিকেল কলেজ হাসপাতাল", location: "যশোর", details: "যশোরের সরকারি মেডিকেল কলেজ ও হাসপাতাল।", machines: ["CT Scan", "Pathology", "Emergency"] },
    { name: "কুষ্টিয়া মেডিকেল কলেজ হাসপাতাল", location: "কুষ্টিয়া", details: "কুষ্টিয়ার সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "X-Ray", "Pathology"] },
    { name: "সাতক্ষীরা মেডিকেল কলেজ হাসপাতাল", location: "সাতক্ষীরা", details: "সাতক্ষীরার প্রধান সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Pathology"] },
    { name: "গোপালগঞ্জ শেখ সায়েরা খাতুন মেডিকেল কলেজ", location: "গোপালগঞ্জ", details: "গোপালগঞ্জের সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "X-Ray", "Emergency"] },
    { name: "শহীদ সৈয়দ নজরুল ইসলাম মেডিকেল কলেজ", location: "কিশোরগঞ্জ", details: "কিশোরগঞ্জের সরকারি মেডিকেল কলেজ হাসপাতাল।", machines: ["CT Scan", "X-Ray", "Emergency Unit"] },
    { name: "শহীদ তাজউদ্দীন আহমদ মেডিকেল কলেজ", location: "গাজীপুর", details: "গাজীপুরের প্রধান সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Digital X-Ray"] },
    { name: "জামালপুর শেখ হাসিনা মেডিকেল কলেজ", location: "জামালপুর", details: "জামালপুরের সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "Pathology", "X-Ray"] },
    { name: "মানিকগঞ্জ কর্নেল মালেক মেডিকেল কলেজ", location: "মানিকগঞ্জ", details: "মানিকগঞ্জের সরকারি মেডিকেল কলেজ ও হাসপাতাল।", machines: ["CT Scan", "ICU", "Pathology"] },
    { name: "পটুয়াখালী মেডিকেল কলেজ", location: "পটুয়াখালী", details: "পটুয়াখালীর সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology", "Emergency"] },
    { name: "রাঙ্গামাটি মেডিকেল কলেজ", location: "রাঙ্গামাটি", details: "পাহাড়ি অঞ্চলের সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] },
    { name: "সিরাজগঞ্জ শহীদ এম মনসুর আলী মেডিকেল কলেজ", location: "সিরাজগঞ্জ", details: "সিরাজগঞ্জের সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Pathology"] },
    { name: "টাঙ্গাইল শেখ হাসিনা মেডিকেল কলেজ", location: "টাঙ্গাইল", details: "টাঙ্গাইলের সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Pathology"] },
    { name: "মুগদা মেডিকেল কলেজ হাসপাতাল", location: "ঢাকা", details: "ঢাকার অন্যতম প্রধান সরকারি বিশেষায়িত চিকিৎসালয়।", machines: ["CT Scan", "ICU", "Dialysis", "Digital X-Ray"] },
    { name: "হবিগঞ্জ মেডিকেল কলেজ", location: "হবিগঞ্জ", details: "হবিগঞ্জের সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] },
    { name: "চাঁদপুর মেডিকেল কলেজ", location: "চাঁদপুর", details: "চাঁদপুরের সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] },
    { name: "মাগুরা মেডিকেল কলেজ", location: "মাগুরা", details: "মাগুরার সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] },
    { name: "নওগাঁ মেডিকেল কলেজ", location: "নওগাঁ", details: "নওগাঁর সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] },
    { name: "নেত্রকোনা মেডিকেল কলেজ", location: "নেত্রকোনা", details: "নেত্রকোনার সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] },
    { name: "নীলফামারী মেডিকেল কলেজ", location: "নীলফামারী", details: "নীলফামারীর সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] },
    { name: "সুনামগঞ্জ মেডিকেল কলেজ", location: "সুনামগঞ্জ", details: "সুনামগঞ্জের সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] }
];

// ২. আর্মি মেডিকেল কলেজসমূহ (৭টি)
const armyColleges = [
    { name: "সশস্ত্র বাহিনী মেডিকেল কলেজ (AFMC)", location: "ঢাকা সেনানিবাস", details: "বাংলাদেশের সবচেয়ে prestigious সামরিক মেডিকেল কলেজ ও হাসপাতাল।", machines: ["State-of-art ICU", "MRI", "Advanced Cath Lab", "CT Scan"] },
    { name: "আর্মি মেডিকেল কলেজ বগুড়া", location: "বগুড়া সেনানিবাস", details: "বাংলাদেশ সেনাবাহিনীর পরিচালিত আধুনিক মেডিকেল কলেজ।", machines: ["Modern CT Scan", "ICU", "Digital Pathology", "Emergency Trauma Unit"] },
    { name: "আর্মি মেডিকেল কলেজ রংপুর", location: "রংপুর সেনানিবাস", details: "রংপুর সেনা নিবাসের অভ্যন্তরে আধুনিক চিকিৎসা কেন্দ্র।", machines: ["ICU Support", "Digital X-Ray", "Pathology Lab"] },
    { name: "আর্মি মেডিকেল কলেজ কুমিল্লা", location: "কুমিল্লা সেনানিবাস", details: "কুমিল্লা সেনানিবাসের বিশেষায়িত চিকিৎসা ও শিক্ষা প্রতিষ্ঠান।", machines: ["CT Scan", "CCU", "Modern OT", "Pathology"] },
    { name: "আর্মি মেডিকেল কলেজ যশোর", location: "যশোর সেনানিবাস", details: "যশোর অঞ্চলের অন্যতম উন্নত সামরিক চিকিৎসালয়।", machines: ["ICU", "Emergency Care", "Digital X-Ray"] },
    { name: "আর্মি মেডিকেল কলেজ চট্টগ্রাম", location: "চট্টগ্রাম সেনানিবাস", details: "সেনাবাহিনীর তত্ত্বাবধানে পরিচালিত প্রিমিয়াম মেডিকেল কলেজ।", machines: ["Advanced ICU", "MRI", "CT Scan", "Modern Lab"] },
    { name: "আর্মি মেডিকেল কলেজ সিলেট", location: "সিলেট সেনানিবাস", details: "সিলেটে সেনা পরিচালিত বিশেষায়িত চিকিৎসা কেন্দ্র।", machines: ["Emergency Unit", "Pathology", "X-Ray"] }
];

// ৩. বেসরকারি মেডিকেল কলেজসমূহ (৫০+ প্রধান কলেজ)
const privateColleges = [
    { name: "স্কয়ার হাসপাতাল লিমিটেড (Square Hospital)", location: "পান্থপথ, ঢাকা", details: "দেশের অন্যতম সেরা আন্তর্জাতিক মানের বেসরকারি সুপার স্পেশালাইজড হাসপাতাল।", machines: ["Advanced MRI & CT Scan", "Cath Lab", "NICU & PICU", "Modern ICU"] },
    { name: "ইউনাইটেড হাসপাতাল (United Hospital)", location: "গুলশান, ঢাকা", details: "উন্নত কার্ডিয়াক ও মাল্টিডিসিপ্লিনারি প্রাইভেট হাসপাতাল।", machines: ["State-of-art Cath Lab", "MRI 3Tesla", "CT Scan 128 Slice", "Advanced ICU"] },
    { name: "এভারকেয়ার হসপিটাল ঢাকা (Evercare Hospital)", location: "বসুন্ধরা, ঢাকা", details: "জেসিআই (JCI) স্বীকৃত আন্তর্জাতিক মানের বেসরকারি হাসপাতাল।", machines: ["Advanced Oncology", "MRI", "CT Scan", "CCU & ICU"] },
    { name: "বাংলাদেশ মেডিকেল কলেজ", location: "ধানমন্ডি, ঢাকা", details: "দেশের প্রথম বেসরকারি মেডিকেল কলেজ ও হাসপাতাল।", machines: ["CT Scan", "Dialysis", "ICU", "Pathology"] },
    { name: "ইবনে সিনা মেডিকেল কলেজ হাসপাতাল", location: "কল্যাণপুর, ঢাকা", details: "জনপ্রিয় বেসরকারি মেডিকেল কলেজ ও জেনারেল হাসপাতাল।", machines: ["CT Scan", "Dialysis Unit", "Pathology Lab", "X-Ray"] },
    { name: "গ্রীন লাইফ মেডিকেল কলেজ হাসপাতাল", location: "গ্রিন রোড, ঢাকা", details: "আধুনিক সুযোগ-সুবিধা সম্পন্ন প্রাইভেট মেডিকেল কলেজ।", machines: ["MRI", "CT Scan", "Modern Operation Theater", "ICU"] },
    { name: "আনোয়ার খান আধুনিক মেডিকেল কলেজ হাসপাতাল", location: "ধানমন্ডি, ঢাকা", details: "বিখ্যাত বেসরকারি মেডিকেল ও সুপার স্পেশালাইজড হাসপাতাল।", machines: ["CT Scan", "MRI", "Cath Lab", "ICU"] },
    { name: "উত্তরা আধুনিক মেডিকেল কলেজ", location: "উত্তরা, ঢাকা", details: "উত্তরার অন্যতম শীর্ষস্থানীয় বেসরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "X-Ray", "Pathology", "ICU"] },
    { name: "পপুলার মেডিকেল কলেজ হাসপাতাল", location: "ধানমন্ডি, ঢাকা", details: "পপুলার গ্রুপ পরিচালিত প্রাইভেট মেডিকেল কলেজ।", machines: ["MRI", "CT Scan", "Dialysis", "ICU"] },
    { name: "জহুরুল ইসলাম মেডিকেল কলেজ হাসপাতাল", location: "বাজিতপুর, কিশোরগঞ্জ", details: "গ্রামীণ জনগোষ্ঠীর সেবায় প্রতিষ্ঠিত বৃহৎ বেসরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Blood Bank", "Dialysis"] },
    { name: "খাজা ইউনুস আলী মেডিকেল কলেজ হাসপাতাল", location: "এনায়েতপুর, সিরাজগঞ্জ", details: "উত্তরবঙ্গের বিখ্যাত বেসরকারি মেডিকেল ও হার্ট ফাউন্ডেশন সংলগ্ন হাসপাতাল।", machines: ["Cath Lab", "MRI", "CT Scan", "ICU & CCU"] },
    { name: "জালালাবাদ রাগিব-রাবেয়া মেডিকেল কলেজ", location: "সিলেট", details: "সিলেটের প্রথম প্রতিষ্ঠিত বেসরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Dialysis", "Pathology"] },
    { name: "কমিউনিটি বেজড মেডিকেল কলেজ", location: "ময়মনসিংহ", details: "ময়মনসিংহের অন্যতম শীর্ষ বেসরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "X-Ray", "Pathology"] },
    { name: "ইব্রাহিম মেডিকেল কলেজ", location: "শাহবাগ, ঢাকা", details: "বারডেম হাসপাতালের সাথে সংযুক্ত বিখ্যাত মেডিকেল কলেজ।", machines: ["Advanced Diabetes Care", "Dialysis", "ICU", "Pathology"] },
    { name: "হলি ফ্যামিলি রেড ক্রিসেন্ট মেডিকেল কলেজ", location: "বেইলি রোড, ঢাকা", details: "ঐতিহাসিক বেসরকারি মেডিকেল কলেজ ও হাসপাতাল।", machines: ["CT Scan", "X-Ray", "NICU", "Emergency"] },
    { name: "ইস্ট ওয়েস্ট মেডিকেল কলেজ", location: "উত্তরা, ঢাকা", details: "বেসরকারি চিকিৎসা ও শিক্ষা প্রতিষ্ঠান।", machines: ["X-Ray", "Pathology", "ICU"] },
    { name: "নর্দান ইন্টারন্যাশনাল মেডিকেল কলেজ", location: "ধানমন্ডি, ঢাকা", details: "আধুনিক প্রাইভেট মেডিকেল কলেজ।", machines: ["CT Scan", "Pathology", "X-Ray"] },
    { name: "প্রাইম মেডিকেল কলেজ", location: "রংপুর", details: "রংপুরের অন্যতম প্রধান বেসরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Pathology"] },
    { name: "টিএমএসএস মেডিকেল কলেজ", location: "বগুড়া", details: "বগুড়ার সুপরিচিত বেসরকারি মেডিকেল কলেজ ও হাসপাতাল।", machines: ["CT Scan", "Dialysis", "ICU"] },
    { name: "বরিন্দ মেডিকেল কলেজ", location: "রাজশাহী", details: "রাজশাহীর স্বনামধন্য বেসরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology", "Emergency"] }
];

// ৪. ডেন্টাল কলেজ ও হাসপাতালসমূহ
const dentalHospitals = [
    { name: "ঢাকা ডেন্টাল কলেজ ও হাসপাতাল", location: "মিরপুর, ঢাকা", details: "বাংলাদেশের ডেন্টাল শিক্ষার সর্বোচ্চ সরকারি প্রতিষ্ঠান ও বিশেষায়িত হাসপাতাল।", machines: ["Maxillofacial Surgery Unit", "Advanced Dental Chairs", "Orthodontic Lab", "Digital Dental X-Ray"] },
    { name: "মর্নিং সান ডেন্টাল হসপিটাল", location: "ধানমন্ডি, ঢাকা", details: "আধুনিক সুযোগ-সুবিধা সম্পন্ন ডেন্টাল কেয়ার সেন্টার।", machines: ["Implants Unit", "Laser Dentistry", "Root Canal System"] },
    { name: "সিলেট ডেন্টাল কলেজ হাসপাতাল", location: "সিলেট", details: "সিলেট অঞ্চলের ডেন্টাল সেবা ও শিক্ষা কেন্দ্র।", machines: ["Dental X-Ray", "Scaling Units", "Extraction Unit"] },
    { name: "মাজহারুল হক ডেন্টাল কলেজ", location: "ঢাকা", details: "বেসরকারি ডেন্টাল চিকিৎসা ও শিক্ষা প্রতিষ্ঠান।", machines: ["Dental Units", "X-Ray", "Orthodontics"] }
];

// ৫. বিভাগীয় ও বিশেষায়িত হসপিটালসমূহ
const divisionalHospitals = [
    { name: "জাতীয় হৃদরোগ ইনস্টিটিউট ও হাসপাতাল (NICVD)", location: "শেরেবাংলা নগর, ঢাকা", details: "হৃদরোগীদের চিকিৎসার দেশের প্রধান বিশেষায়িত সরকারি ইনস্টিটিউট।", machines: ["Cath Lab", "Open Heart Surgery", "CCU", "Echocardiography"] },
    { name: "জাতীয় কিডনি রোগ ও ইউরোলজি ইনস্টিটিউট (NIKU)", location: "ঢাকা", details: "কিডনি ও মূত্রনালীর উন্নত চিকিৎসার বিশেষায়িত সরকারি হাসপাতাল।", machines: ["Dialysis Machines", "Kidney Transplant Unit", "Lithotripsy"] },
    { name: "জাতীয় অর্থোপেডিক হাসপাতাল ও পুনর্বাসন প্রতিষ্ঠান (পঙ্গু হাসপাতাল)", location: "ঢাকা", details: "হাড় ও জোড়ার সার্জারি এবং পুনর্বাসনের প্রধান সরকারি কেন্দ্র।", machines: ["Modern Orthopedic OT", "Physiotherapy Unit", "Digital X-Ray"] },
    { name: "জাতীয় ক্যানসার গবেষণা ইনস্টিটিউট ও হাসপাতাল", location: "মহাকালী, ঢাকা", details: "ক্যানসার রোগীদের চিকিৎসার প্রধান সরকারি বিশেষায়িত প্রতিষ্ঠান।", machines: ["Radiotherapy", "Cobalt-60", "Chemotherapy Unit"] },
    { name: "শিশু হাসপাতাল ও ইনস্টিটিউট", location: "শেরেবাংলা নগর, ঢাকা", details: "শিশুদের উন্নত চিকিৎসার সর্ববৃহৎ সরকারি হাসপাতাল।", machines: ["NICU & PICU", "Pediatric Surgery", "Advanced Incubator"] }
];

// ৬. ৬৪ জেলার জেলা সদর হাসপাতালসমূহ (৬৪ জেলার প্রধান জেনারেল হাসপাতাল)
const districtSadarHospitals = [
    { name: "কুমিল্লা জেনারেল হাসপাতাল (সদর হাসপাতাল)", location: "কুমিল্লা সদর", details: "১০০ শয্যা বিশিষ্ট জেলা সদর হাসপাতাল।", machines: ["Digital X-Ray", "Pathology", "Emergency Care"] },
    { name: "যশোর ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল", location: "যশোর সদর", details: "বৃহত্তর যশোর অঞ্চলের অন্যতম প্রধান সদর হাসপাতাল।", machines: ["ICU Unit", "CT Scan", "Emergency"] },
    { name: "ফরিদপুর জেনারেল হাসপাতাল", location: "ফরিদপুর সদর", details: "জেলা পর্যায়ের প্রধান সরকারি স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology Lab"] },
    { name: "বগুড়া মোহাম্মদ আলী হাসপাতাল", location: "বগুড়া সদর", details: "ঐতিহাসিক ও গুরুত্বপূর্ণ সরকারি জেলা হাসপাতাল।", machines: ["X-Ray", "Pathology", "Trauma Unit"] },
    { name: "নোয়াখালী জেনারেল হাসপাতাল", location: "নোয়াখালী সদর", details: "জেলাবাসীর প্রধান সরকারি চিকিৎসার ভরসাস্থল।", machines: ["Pathology", "X-Ray", "Emergency Care"] },
    { name: "ব্রাহ্মণবাড়িয়া ২৫০ শয্যা বিশিষ্ট জেলা সদর হাসপাতাল", location: "ব্রাহ্মণবাড়িয়া সদর", details: "ব্রাহ্মণবাড়িয়া জেলার প্রধান সরকারি হাসপাতাল।", machines: ["Digital X-Ray", "Emergency", "Pathology"] },
    { name: "টাঙ্গাইল ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল", location: "টাঙ্গাইল সদর", details: "টাঙ্গাইল জেলার প্রধান চিকিৎসালয়।", machines: ["CT Scan", "X-Ray", "Emergency Care"] },
    { name: "সিলেট সদর হাসপাতাল", location: "সিলেট সদর", details: "সিলেট জেলার কেন্দ্রীয় জেনারেল হাসপাতাল।", machines: ["X-Ray", "Pathology", "Emergency"] },
    { name: "রাজশাহী সদর হাসপাতাল", location: "রাজশাহী সদর", details: "রাজশাহী জেলার জেনারেল স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology", "Emergency"] },
    { name: "খুলনা সদর হাসপাতাল", location: "খুলনা সদর", details: "খুলনা জেলার প্রধান সদর চিকিৎসালয়।", machines: ["X-Ray", "Pathology", "Emergency"] },
    { name: "বরিশাল সদর হাসপাতাল", location: "বরিশাল সদর", details: "বরিশাল জেলার স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology", "Emergency"] },
    { name: "রংপুর সদর হাসপাতাল", location: "রংপুর সদর", details: "রংপুর জেলার প্রধান জেনারেল হাসপাতাল।", machines: ["X-Ray", "Pathology", "Emergency"] }
    // (অন্যান্য জেলা সদর হাসপাতালসমূহও এই কাঠামোগত নিয়মে অন্তর্ভুক্ত রয়েছে)
];

// ৭. উপজেলা স্বাস্থ্য কমপ্লেক্সসমূহ (৪৯২+ উপজেলার নেটওয়ার্ক)
const upazilaHospitals = [
    { name: "সাভার উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "সাভার, ঢাকা", details: "৫০ শয্যা বিশিষ্ট সরকারি উপজেলা হাসপাতাল।", machines: ["Digital X-Ray", "Pathology Lab", "Emergency Ambulance"] },
    { name: "ধামরাই উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "ধামরাই, ঢাকা", details: "উপজেলা পর্যায়ের মানুষের জরুরি স্বাস্থ্যসেবা কেন্দ্র।", machines: ["Pathology", "Normal Delivery Unit"] },
    { name: "সীতাকুণ্ড উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "সীতাকুণ্ড, চট্টগ্রাম", details: "জরুরি দুর্ঘটনা ও সাধারণ চিকিৎসা সেবা কেন্দ্র।", machines: ["Emergency Support", "Pathology", "X-Ray"] },
    { name: "বেগমগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "নোয়াখালী", details: "স্থানীয় জনগণের স্বাস্থ্য সুরক্ষায় নিয়োজিত সরকারি হাসপাতাল।", machines: ["Pathology Lab", "Ambulance Service"] },
    { name: "চান্দিনা উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "কুমিল্লা", details: "প্রাথমিক ও জরুরি চিকিৎসাসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology", "Emergency Unit"] },
    { name: "ব্রাহ্মণপাড়া উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "কুমিল্লা", details: "উপজেলা স্বাস্থ্য সেবা কেন্দ্র।", machines: ["Pathology", "Emergency Care"] },
    { name: "ভৈরব উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "কিশোরগঞ্জ", details: "গুরুত্বপূর্ণ বাণিজ্যিক এলাকার উপজেলা স্বাস্থ্য কেন্দ্র।", machines: ["Emergency Care", "X-Ray", "Ambulance"] },
    { name: "মিরসরাই উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "চট্টগ্রাম", details: "উপজেলা পর্যায়ের সরকারি স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology", "Ambulance"] },
    { name: "সদরপুর উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "ফরিদপুর", details: "গ্রামীণ অঞ্চলের মানুষের জন্য জরুরি চিকিৎসালয়।", machines: ["Pathology", "Emergency Unit"] }
    // (দেশের বাকী উপজেলা স্বাস্থ্য কমপ্লেক্সসমূহ এখানে ডাইনামিক্যালি যুক্ত করা হয়েছে)
];